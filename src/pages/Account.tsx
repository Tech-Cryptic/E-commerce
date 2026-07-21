import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Clock,
} from 'lucide-react';

interface Order {
  id: string;
  items: any[];
  total: number;
  address: string;
  date: string;
  status: string;
}

type Tab = 'profile' | 'orders';

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  useEffect(() => {
    const loggedIn = localStorage.getItem('gg_logged_in');
    const stored = localStorage.getItem('gg_current_user');

    if (loggedIn !== 'true' || !stored) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(stored);
    setUser(parsedUser);

    // ── Load orders: backend first, merge with localStorage ──
    const localOrders: Order[] = JSON.parse(localStorage.getItem('gg_orders') || '[]');

    fetch(`http://localhost:5000/api/orders/${parsedUser.id}`)
      .then(r => r.json())
      .then((backendOrders: any[]) => {
        // Normalise backend shape to match frontend shape
        const normalised: Order[] = backendOrders.map(o => ({
          id: o.paymentRef || String(o.id),
          items: o.items || [],
          total: o.total,
          address: o.address || '',
          date: o.date,
          status: o.status,
        }));
        // Merge: backend wins, then append any local-only orders
        const backendIds = new Set(normalised.map(o => o.id));
        const localOnly = localOrders.filter(o => !backendIds.has(o.id));
        setOrders([...normalised, ...localOnly].reverse());
      })
      .catch(() => {
        // Backend unavailable — use localStorage
        setOrders([...localOrders].reverse());
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('gg_logged_in');
    localStorage.removeItem('gg_current_user');
    localStorage.removeItem('gg_cart');
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/');
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });

  if (!user) return null;

  const firstName = user.fullName?.split(' ')[0] || 'User';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-1">My Account</h1>
          <p className="text-gray-500 text-sm">Welcome back, {firstName}.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            {/* Avatar card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-black"
                style={{ background: 'linear-gradient(135deg, #1a3dc4, #2952e3)' }}
              >
                {firstName[0].toUpperCase()}
              </div>
              <p className="font-bold text-foreground text-sm">{user.fullName}</p>
              <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
            </div>

            {/* Nav */}
            <nav className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {(['profile', 'orders'] as Tab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-sm font-semibold transition-colors border-b border-gray-50 last:border-0 ${
                    activeTab === tab
                      ? 'bg-[#1a3dc4] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'profile' ? <User size={16} /> : <Package size={16} />}
                  {tab === 'profile' ? 'My Profile' : 'Order History'}
                </button>
              ))}
              <button
                onClick={handleLogout}
                id="logout-btn"
                className="w-full flex items-center gap-3 px-5 py-4 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </nav>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">

            {/* Profile tab */}
            {activeTab === 'profile' && (
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-[#1a3dc4] px-6 py-4">
                  <h2 className="text-white font-bold">Profile Information</h2>
                </div>
                <div className="p-6 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InfoRow icon={<User size={16} />} label="Full Name" value={user.fullName || 'Not set'} />
                    <InfoRow icon={<Mail size={16} />} label="Email Address" value={user.email || 'Not set'} />
                    <InfoRow icon={<Phone size={16} />} label="Phone Number" value={user.phone || 'Not set'} />
                    <InfoRow icon={<MapPin size={16} />} label="Location" value="Lagos, Nigeria" />
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                      To update your account details, please contact us at{' '}
                      <a href="mailto:gabbysgadget@gmail.com" className="text-[#1a3dc4] font-semibold hover:underline">
                        gabbysgadget@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Orders tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                {orders.length === 0 ? (
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-16 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag size={28} className="text-gray-400" />
                    </div>
                    <p className="text-foreground font-bold mb-1">No orders yet</p>
                    <p className="text-gray-400 text-sm mb-6">Your past orders will appear here once you make a purchase.</p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 bg-[#1a3dc4] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a3dc4]/90 transition-all text-sm"
                    >
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  orders.map(order => (
                    <div key={order.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                      {/* Order header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Order Ref</p>
                            <p className="font-bold font-mono text-sm text-foreground">{order.id}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Date</p>
                            <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                              <Clock size={12} className="text-gray-400" />
                              {formatDate(order.date)}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Total</p>
                            <p className="text-sm font-black text-[#1a3dc4]">{formatPrice(order.total)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            {order.status}
                          </span>
                          <Link
                            to={`/track-order?ref=${encodeURIComponent(order.id)}`}
                            className="flex items-center gap-1 text-xs font-bold text-[#1a3dc4] hover:underline"
                          >
                            Track <ChevronRight size={12} />
                          </Link>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="p-5 space-y-3">
                        {order.items?.slice(0, 2).map((item: any) => (
                          <div key={item.id} className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-11 h-11 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
                              <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                            </div>
                            <p className="text-sm font-bold text-foreground">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                        ))}
                        {order.items?.length > 2 && (
                          <p className="text-xs text-gray-400 pl-14">+{order.items.length - 2} more item(s)</p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
      <div className="w-8 h-8 bg-[#1a3dc4]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1a3dc4]">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}
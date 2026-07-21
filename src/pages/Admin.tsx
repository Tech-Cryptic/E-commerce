import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, Users, Smartphone,
  TrendingUp, RefreshCw, LogOut, ChevronDown,
  CheckCircle, Truck, Clock, XCircle, ArrowRight, Eye
} from 'lucide-react';

const ADMIN_PASSWORD = 'gabby2025admin';

const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

type Tab = 'overview' | 'orders' | 'sells';

const STATUS_OPTIONS = ['Paid', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'];

const statusColor: Record<string, string> = {
  Paid:             'bg-blue-100 text-blue-700',
  Processing:       'bg-yellow-100 text-yellow-700',
  Shipped:          'bg-purple-100 text-purple-700',
  'Out for Delivery': 'bg-orange-100 text-orange-700',
  Delivered:        'bg-green-100 text-green-700',
  Cancelled:        'bg-red-100 text-red-700',
};

export default function Admin() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [tab, setTab] = useState<Tab>('overview');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState<number | null>(null);

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem('gg_admin', '1');
      loadData();
    } else {
      setPwError('Incorrect password.');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('gg_admin') === '1') {
      setAuthed(true);
      loadData();
    }
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/admin/stats');
      const json = await res.json();
      setData(json);
    } catch {
      setData(null);
    }
    setLoading(false);
  };

  const updateStatus = async (orderId: number, status: string) => {
    setUpdating(orderId);
    try {
      await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setData((prev: any) => ({
        ...prev,
        orders: prev.orders.map((o: any) =>
          o.id === orderId ? { ...o, status } : o
        ),
      }));
    } catch { /* ignore */ }
    setUpdating(null);
  };

  const logout = () => {
    sessionStorage.removeItem('gg_admin');
    navigate('/');
  };

  // ── Login screen ────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#1a3dc4] rounded-full flex items-center justify-center border-2 border-[#f5a623] mx-auto mb-4">
              <LayoutDashboard size={22} className="text-white" />
            </div>
            <h1 className="text-2xl font-black text-white">Admin Access</h1>
            <p className="text-gray-400 text-sm mt-1">Gabby's Gadget Admin Panel</p>
          </div>
          {pwError && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
              {pwError}
            </div>
          )}
          <input
            type="password"
            placeholder="Admin password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(''); }}
            onKeyDown={e => e.key === 'Enter' && login()}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#1a3dc4] mb-4"
          />
          <button
            onClick={login}
            className="w-full py-3 bg-[#1a3dc4] text-white font-bold rounded-xl hover:bg-[#1a3dc4]/90 transition-all"
          >
            Enter Admin Panel
          </button>
          <Link to="/" className="block text-center text-gray-500 text-xs mt-4 hover:text-gray-300 transition-colors">
            ← Back to store
          </Link>
        </div>
      </div>
    );
  }

  // ── Dashboard ───────────────────────────────────────────
  const stats = data?.stats;
  const orders = data?.orders ?? [];
  const sells = data?.sellRequests ?? [];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] text-white flex flex-col flex-shrink-0 hidden lg:flex">
        <div className="px-6 py-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1a3dc4] rounded-full flex items-center justify-center border border-[#f5a623]">
              <span className="text-[7px] font-bold text-center leading-tight text-white">GABBY'S<br/>GADGET</span>
            </div>
            <div>
              <p className="text-xs font-black text-white tracking-tight">ADMIN PANEL</p>
              <p className="text-[10px] text-gray-500">Gabby's Gadget</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {([
            { id: 'overview', label: 'Overview',      icon: LayoutDashboard },
            { id: 'orders',   label: 'Orders',        icon: Package },
            { id: 'sells',    label: 'Sell Requests', icon: Smartphone },
          ] as { id: Tab; label: string; icon: any }[]).map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === item.id
                  ? 'bg-[#1a3dc4] text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={16} />
              {item.label}
              {item.id === 'orders'  && orders.length > 0  && <span className="ml-auto text-[10px] bg-[#f5a623] text-black font-black px-2 py-0.5 rounded-full">{orders.length}</span>}
              {item.id === 'sells'   && sells.length > 0   && <span className="ml-auto text-[10px] bg-purple-500 text-white font-black px-2 py-0.5 rounded-full">{sells.length}</span>}
            </button>
          ))}
        </nav>

        <div className="px-3 py-6 border-t border-white/5 space-y-1">
          <button
            onClick={loadData}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-all"
          >
            <RefreshCw size={16} /> Refresh Data
          </button>
          <Link
            to="/products"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-all"
          >
            <ArrowRight size={16} /> View Store
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <h1 className="text-lg font-black text-foreground">
            {tab === 'overview' ? 'Dashboard Overview' : tab === 'orders' ? 'All Orders' : 'Sell Requests'}
          </h1>
          <button
            onClick={loadData}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#1a3dc4] font-semibold transition-colors"
          >
            <RefreshCw size={13} /> Refresh
          </button>
        </div>

        <div className="p-6">
          {loading && (
            <div className="text-center py-20 text-gray-400 font-semibold">
              Loading data from backend…
            </div>
          )}
          {!loading && !data && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-semibold mb-2">Could not connect to backend.</p>
              <p className="text-sm text-gray-300">Make sure Flask is running: <code className="bg-gray-100 px-2 py-0.5 rounded text-[#1a3dc4]">python backend/app.py</code></p>
            </div>
          )}

          {!loading && data && (
            <>
              {/* ── Overview ────────────────────────────── */}
              {tab === 'overview' && (
                <div className="space-y-6">
                  {/* Stat cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: 'Total Orders',    value: stats?.totalOrders ?? 0,              icon: Package,    color: 'bg-blue-500',   fmt: false },
                      { label: 'Total Revenue',   value: stats?.totalRevenue ?? 0,             icon: TrendingUp, color: 'bg-green-500',  fmt: true  },
                      { label: 'Registered Users',value: stats?.totalUsers ?? 0,              icon: Users,      color: 'bg-purple-500', fmt: false },
                      { label: 'Sell Requests',   value: stats?.totalSells ?? 0,              icon: Smartphone, color: 'bg-orange-500', fmt: false },
                    ].map((card, i) => (
                      <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center mb-3`}>
                          <card.icon size={18} className="text-white" />
                        </div>
                        <p className="text-2xl font-black text-foreground">
                          {card.fmt ? formatPrice(card.value as number) : card.value}
                        </p>
                        <p className="text-xs text-gray-400 font-semibold mt-1">{card.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent orders preview */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                      <h2 className="font-bold text-foreground">Recent Orders</h2>
                      <button onClick={() => setTab('orders')} className="text-xs text-[#1a3dc4] font-bold hover:underline">
                        View all
                      </button>
                    </div>
                    {orders.slice(0, 5).map((o: any) => (
                      <div key={o.id} className="flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0">
                        <div>
                          <p className="text-sm font-bold text-foreground">{o.customerName}</p>
                          <p className="text-[10px] text-gray-400 font-mono">{o.paymentRef}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-black text-[#1a3dc4]">{formatPrice(o.total)}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor[o.status] || 'bg-gray-100 text-gray-600'}`}>
                            {o.status}
                          </span>
                        </div>
                      </div>
                    ))}
                    {orders.length === 0 && (
                      <p className="text-center text-gray-400 text-sm py-8">No orders yet.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ── Orders ──────────────────────────────── */}
              {tab === 'orders' && (
                <div className="space-y-4">
                  {orders.length === 0 && (
                    <p className="text-center text-gray-400 py-16">No orders in database yet.</p>
                  )}
                  {orders.map((o: any) => (
                    <div key={o.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                        <div className="flex flex-wrap items-center gap-4">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Order #{o.id}</p>
                            <p className="font-bold font-mono text-sm text-foreground">{o.paymentRef}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400">Customer</p>
                            <p className="text-sm font-semibold text-foreground">{o.customerName}</p>
                            <p className="text-[10px] text-gray-400">{o.customerPhone}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400">Total</p>
                            <p className="text-sm font-black text-[#1a3dc4]">{formatPrice(o.total)}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400">Date</p>
                            <p className="text-xs font-semibold text-foreground">{formatDate(o.date)}</p>
                          </div>
                        </div>
                        {/* Status updater */}
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[o.status] || 'bg-gray-100 text-gray-600'}`}>
                            {o.status}
                          </span>
                          <div className="relative">
                            <select
                              disabled={updating === o.id}
                              value={o.status}
                              onChange={e => updateStatus(o.id, e.target.value)}
                              className="appearance-none text-xs bg-[#1a3dc4] text-white font-bold px-3 py-2 pr-7 rounded-xl focus:outline-none cursor-pointer disabled:opacity-50"
                            >
                              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3">
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <Package size={11} /> {o.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Sell Requests ────────────────────────── */}
              {tab === 'sells' && (
                <div className="space-y-4">
                  {sells.length === 0 && (
                    <p className="text-center text-gray-400 py-16">No sell/trade-in requests yet.</p>
                  )}
                  {sells.map((s: any) => (
                    <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full uppercase">{s.device_type}</span>
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full">{s.condition}</span>
                          </div>
                          <p className="font-black text-foreground">{s.brand} {s.model} {s.storage && `· ${s.storage}`}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{s.name} · {s.phone}</p>
                          {s.email && <p className="text-xs text-gray-400">{s.email}</p>}
                          {s.notes && <p className="text-xs text-gray-400 mt-2 italic">"{s.notes}"</p>}
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400">{formatDate(s.created_at)}</p>
                          <a
                            href={`https://wa.me/2348132922551?text=${encodeURIComponent(`Follow up: ${s.name} wants to sell ${s.brand} ${s.model}. Phone: ${s.phone}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs text-green-600 font-bold hover:underline"
                          >
                            Reply on WhatsApp →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Lock } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
  condition: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [promoError, setPromoError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('gg_logged_in');
    const user = localStorage.getItem('gg_current_user');

    if (loggedIn !== 'true' || !user) {
      localStorage.setItem('gg_redirect', '/checkout');
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(user);
    setCurrentUser(parsedUser);

    setFormData(prev => ({
      ...prev,
      fullName: parsedUser.fullName || '',
      email: parsedUser.email || '',
      phone: parsedUser.phone || '',
    }));

    const cart = localStorage.getItem('gg_cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 && subtotal < 500000 ? 15000 : 0;
  const tax = subtotal * 0.075;

  // Promo codes
  const PROMO_CODES: Record<string, { type: 'percent' | 'freeship'; value: number; label: string }> = {
    SAVE10:   { type: 'percent',  value: 10, label: '10% off your order' },
    GABBY20:  { type: 'percent',  value: 20, label: '20% off your order' },
    FREESHIP: { type: 'freeship', value: 0,  label: 'Free shipping!' },
  };

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setPromoCode(code);
      setPromoMessage(`✓ ${PROMO_CODES[code].label} applied!`);
      setPromoError('');
    } else {
      setPromoCode('');
      setPromoError('Invalid promo code.');
      setPromoMessage('');
    }
  };

  const promoData = promoCode ? PROMO_CODES[promoCode] : null;
  const discount = promoData
    ? promoData.type === 'percent'
      ? subtotal * (promoData.value / 100)
      : 0
    : 0;
  const effectiveShipping = promoData?.type === 'freeship' ? 0 : shippingFee;
  const total = subtotal + effectiveShipping + tax - discount;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);

  const handlePayment = () => {
    if (!formData.address || !formData.city || !formData.state) {
      alert('Please fill in your delivery address, city and state.');
      return;
    }
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    setLoading(true);

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.onload = () => {
      const handler = (window as any).PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_KEY,
        email: formData.email,
        amount: Math.round(total * 100),
        currency: 'NGN',
        ref: 'GG-' + Date.now(),
        metadata: {
          custom_fields: [
            { display_name: 'Customer Name', value: formData.fullName },
            { display_name: 'Phone', value: formData.phone },
            { display_name: 'Delivery Address', value: `${formData.address}, ${formData.city}, ${formData.state}` },
          ],
        },
        callback: async (response: any) => {
          const deliveryAddress = `${formData.address}, ${formData.city}, ${formData.state}`;
          const order = {
            id: response.reference,
            items: cartItems,
            subtotal,
            shippingFee,
            tax,
            total,
            address: deliveryAddress,
            date: new Date().toISOString(),
            status: 'Paid',
          };

          // ── Save to localStorage immediately ──────────────────
          const existing = JSON.parse(localStorage.getItem('gg_orders') || '[]');
          existing.push(order);
          localStorage.setItem('gg_orders', JSON.stringify(existing));
          localStorage.removeItem('gg_cart');

          // ── Also persist to Flask backend (store.db) ──────────
          try {
            const user = JSON.parse(localStorage.getItem('gg_current_user') || '{}');
            await fetch('http://localhost:5000/api/orders', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                userId: user.id,
                total: total,
                paymentRef: response.reference,
                address: deliveryAddress,
                items: cartItems.map(item => ({
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  brand: item.brand,
                  condition: item.condition,
                  quantity: item.quantity,
                  price: item.price,
                })),
              }),
            });
          } catch {
            // backend unavailable — order is still in localStorage
            console.warn('Backend unavailable; order saved locally only.');
          }

          setLoading(false);
          navigate('/order-confirmation', { state: { order } });
        },
        onClose: () => {
          setLoading(false);
        },
      });
      handler.openIframe();
    };
    document.body.appendChild(script);
  };

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">Checkout</h1>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <Lock size={14} />
            <span>Secure checkout powered by Paystack</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT — delivery form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6">Delivery Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all bg-white"
                  >
                    <option value="">Select state</option>
                    {['Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
                      'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT','Gombe','Imo',
                      'Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa',
                      'Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba',
                      'Yobe','Zamfara'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Ikeja"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. 12 Allen Avenue"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Promo code */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground mb-4">Promo Code</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code e.g. SAVE10"
                  value={promoInput}
                  onChange={e => { setPromoInput(e.target.value.toUpperCase()); setPromoError(''); setPromoMessage(''); }}
                  onKeyDown={e => e.key === 'Enter' && applyPromo()}
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all uppercase font-mono"
                />
                <button
                  onClick={applyPromo}
                  className="px-5 py-3 bg-[#1a3dc4] text-white rounded-xl text-sm font-bold hover:bg-[#1a3dc4]/90 transition-all"
                >
                  Apply
                </button>
              </div>
              {promoMessage && <p className="text-green-600 text-xs font-semibold mt-2">{promoMessage}</p>}
              {promoError && <p className="text-red-500 text-xs font-semibold mt-2">{promoError}</p>}
            </div>

            {/* security badge */}
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={20} />
              <p className="text-sm text-green-700">
                Your payment is processed securely by Paystack. Gabby's Gadget never sees your card details.
              </p>
            </div>
          </div>

          {/* RIGHT — order summary */}
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-foreground mb-4">Order Summary</h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-400 text-sm mb-4">Your cart is empty</p>
                  <Link to="/products" className="text-[#1a3dc4] font-semibold text-sm hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.brand} · {item.condition} · x{item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold text-[#1a3dc4] flex-shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr className="border-gray-100 my-4" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Shipping</span>
                      <span>{effectiveShipping === 0 ? <span className="text-green-600 font-semibold">Free</span> : formatPrice(effectiveShipping)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>VAT (7.5%)</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600 font-semibold">
                        <span>Discount ({promoCode})</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    <hr className="border-gray-100" />
                    <div className="flex justify-between font-black text-lg text-foreground">
                      <span>Total</span>
                      <span className="text-[#1a3dc4]">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {shippingFee === 0 && subtotal > 0 && (
                    <p className="text-xs text-green-600 font-semibold mt-2 text-center">
                      Free shipping applied on your order!
                    </p>
                  )}

                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full mt-6 py-4 bg-[#1a3dc4] hover:bg-[#1a3dc4]/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#1a3dc4]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Lock size={16} />
                    {loading ? 'Processing...' : `Pay ${formatPrice(total)}`}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3">
                    By placing this order you agree to our terms of service
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
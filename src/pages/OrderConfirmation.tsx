import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Package, Phone, Mail, ArrowRight, Home } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();
  const [order, setOrder] = useState<any>(null);
  const user = JSON.parse(localStorage.getItem('gg_current_user') || '{}');
  const firstName = user?.fullName?.split(' ')[0] || 'Customer';

  useEffect(() => {
    // get order from navigation state (passed from checkout)
    if (location.state?.order) {
      setOrder(location.state.order);
    } else {
      // fallback — try last order from localStorage
      const orders = JSON.parse(localStorage.getItem('gg_orders') || '[]');
      if (orders.length > 0) {
        setOrder(orders[orders.length - 1]);
      }
    }
  }, [location]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-NG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 py-24 text-center">
          <p className="text-gray-400 mb-4">No order found.</p>
          <Link to="/" className="text-[#1a3dc4] font-bold hover:underline">
            Go back home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* success header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-500" size={44} />
            </div>
          </div>
          <h1 className="text-4xl font-black text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-gray-500 text-lg">
            Thank you, {firstName}! Your order has been received.
          </p>
        </div>

        {/* order card */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-6">

          {/* order meta */}
          <div className="bg-[#1a3dc4] px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
            <div>
              <p className="text-blue-200 text-xs uppercase tracking-wider mb-0.5">Order Reference</p>
              <p className="text-white font-bold font-mono text-sm">{order.id}</p>
            </div>
            <div>
              <p className="text-blue-200 text-xs uppercase tracking-wider mb-0.5">Date</p>
              <p className="text-white font-bold text-sm">{formatDate(order.date)}</p>
            </div>
            <div>
              <p className="text-blue-200 text-xs uppercase tracking-wider mb-0.5">Status</p>
              <span className="bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>
          </div>

          {/* items */}
          <div className="p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Items Ordered
            </h2>
            <div className="space-y-4">
              {order.items?.map((item: any) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.brand} · {item.condition} · Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-[#1a3dc4] flex-shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-gray-100 my-6" />

            {/* total */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg text-foreground">Total Paid</span>
              <span className="font-black text-2xl text-[#1a3dc4]">{formatPrice(order.total)}</span>
            </div>

            {/* delivery address */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package size={16} className="text-[#1a3dc4]" />
                <span className="text-sm font-semibold text-foreground">Delivery Address</span>
              </div>
              <p className="text-sm text-gray-500">{order.address}</p>
            </div>
          </div>
        </div>

        {/* contact info */}
        <div className="bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-foreground mb-1">Need help with your order?</h3>
          <p className="text-sm text-gray-500 mb-4">Contact us and quote your order reference.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:08132922551"
              className="flex items-center gap-2 text-sm font-semibold text-[#1a3dc4] hover:underline"
            >
              <Phone size={14} />
              08132922551
            </a>
            <a
              href="mailto:gabbysgadget@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold text-[#1a3dc4] hover:underline"
            >
              <Mail size={14} />
              gabbysgadget@gmail.com
            </a>
          </div>
        </div>

        {/* actions */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="flex-1 py-3.5 bg-[#1a3dc4] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02]"
          >
            Continue Shopping <ArrowRight size={18} />
          </Link>
          <Link
            to="/"
            className="flex-1 py-3.5 bg-gray-100 text-foreground font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
          >
            <Home size={18} /> Back to Home
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
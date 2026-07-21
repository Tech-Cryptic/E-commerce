import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CheckCircle,
  Clock,
  Package,
  Truck,
  MapPin,
  Home,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Search,
} from 'lucide-react';

interface TrackingEvent {
  status: string;
  description: string;
  timestamp: string;
  location: string;
  done: boolean;
  active: boolean;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
  condition: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  address: string;
  date: string;
  status: string;
}

// Simulates real tracking stages based on hours elapsed since order was placed
function buildTrackingTimeline(order: Order): TrackingEvent[] {
  const placed = new Date(order.date);
  const now = new Date();
  const hoursElapsed = (now.getTime() - placed.getTime()) / (1000 * 60 * 60);

  const fmt = (d: Date) =>
    d.toLocaleString('en-NG', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const addHours = (base: Date, h: number) => new Date(base.getTime() + h * 3600000);

  const stages = [
    {
      key: 'placed',
      label: 'Order Placed',
      description: 'Your order has been received and payment confirmed.',
      location: 'Online',
      hours: 0,
    },
    {
      key: 'processing',
      label: 'Processing',
      description: 'Your order is being packed and prepared for dispatch.',
      location: 'Gabby\'s Gadget Warehouse, Lagos',
      hours: 4,
    },
    {
      key: 'shipped',
      label: 'Shipped',
      description: 'Your package has been handed over to the courier.',
      location: 'Courier Hub, Lagos',
      hours: 24,
    },
    {
      key: 'out',
      label: 'Out for Delivery',
      description: 'Your package is on its way to you today.',
      location: order.address.split(',').slice(-2).join(',').trim() || 'Your city',
      hours: 60,
    },
    {
      key: 'delivered',
      label: 'Delivered',
      description: 'Your package has been delivered successfully.',
      location: order.address,
      hours: 72,
    },
  ];

  return stages.map((s, i) => {
    const stageTime = addHours(placed, s.hours);
    const done = hoursElapsed >= s.hours;
    const active = done && (i === stages.length - 1 || hoursElapsed < stages[i + 1].hours);
    return {
      status: s.label,
      description: s.description,
      timestamp: done ? fmt(stageTime) : fmt(stageTime),
      location: s.location,
      done,
      active,
    };
  });
}

function getActiveStageIndex(timeline: TrackingEvent[]): number {
  const idx = timeline.findLastIndex(t => t.done);
  return idx === -1 ? 0 : idx;
}

const STAGE_ICONS = [CheckCircle, Clock, Package, Truck, Home];

export default function OrderTracking() {
  const [searchParams] = useSearchParams();
  const [searchRef, setSearchRef] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [timeline, setTimeline] = useState<TrackingEvent[]>([]);
  const [activeStage, setActiveStage] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // load order by reference
  useEffect(() => {
    const ref = searchParams.get('ref') || '';
    if (ref) {
      setSearchRef(ref);
      setInputVal(ref);
      findOrder(ref);
    }
  }, [searchParams]);


  const findOrder = async (ref: string) => {
    setNotFound(false);
    setOrder(null);

    // ── Check localStorage first (instant) ──────────────────
    const localOrders: Order[] = JSON.parse(localStorage.getItem('gg_orders') || '[]');
    const localFound = localOrders.find(o => o.id.toLowerCase() === ref.toLowerCase().trim());

    if (localFound) {
      const tl = buildTrackingTimeline(localFound);
      setOrder(localFound);
      setTimeline(tl);
      setActiveStage(getActiveStageIndex(tl));
      return;
    }

    // ── Query backend by payment reference ───────────────────
    try {
      const res = await fetch(`http://localhost:5000/api/orders/track/${encodeURIComponent(ref.trim())}`);
      if (res.ok) {
        const data = await res.json();
        const found: Order = {
          id: data.paymentRef || String(data.id),
          items: data.items || [],
          total: data.total,
          address: data.address || '',
          date: data.date,
          status: data.status,
        };
        const tl = buildTrackingTimeline(found);
        setOrder(found);
        setTimeline(tl);
        setActiveStage(getActiveStageIndex(tl));
        return;
      }
    } catch {
      // backend unavailable
    }

    setNotFound(true);
  };


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) findOrder(inputVal.trim());
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);

  const currentStage = timeline[activeStage];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">Track Your Order</h1>
          <p className="text-gray-500 text-sm">
            Enter your order reference to see live shipping updates.
          </p>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              id="order-ref-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="e.g. GG-1751531234567"
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
            />
          </div>
          <button
            type="submit"
            id="track-order-btn"
            className="px-6 py-3.5 bg-[#1a3dc4] text-white font-bold rounded-xl hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] text-sm whitespace-nowrap"
          >
            Track Order
          </button>
        </form>

        {/* Not found state */}
        {notFound && (
          <div className="text-center py-14 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={28} className="text-red-400" />
            </div>
            <p className="text-foreground font-bold text-lg mb-1">Order not found</p>
            <p className="text-gray-400 text-sm">
              Double-check the reference on your confirmation email and try again.
            </p>
          </div>
        )}

        {/* Tracking result */}
        {order && (
          <div className="space-y-5">

            {/* Status banner */}
            <div
              className="rounded-2xl p-6 text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #1a3dc4 0%, #2952e3 60%, #1a3dc4 100%)',
              }}
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">
                    Order Reference
                  </p>
                  <p className="font-bold font-mono text-lg">{order.id}</p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                    activeStage === timeline.length - 1
                      ? 'bg-green-400 text-green-900'
                      : 'bg-yellow-300 text-yellow-900'
                  }`}
                >
                  {currentStage?.status || order.status}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">
                  Current Status
                </p>
                <p className="text-white font-semibold text-base">
                  {currentStage?.description}
                </p>
                {currentStage && (
                  <p className="text-blue-300 text-xs mt-1 flex items-center gap-1">
                    <MapPin size={11} />
                    {currentStage.location}
                  </p>
                )}
              </div>
            </div>

            {/* Progress steps */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
                Shipment Progress
              </h2>

              <div className="relative">
                {/* vertical connector line */}
                <div
                  className="absolute left-[18px] top-5 bottom-5 w-0.5 bg-gray-100"
                  aria-hidden="true"
                />

                <ol className="space-y-0">
                  {timeline.map((stage, i) => {
                    const Icon = STAGE_ICONS[i];
                    const isDone = stage.done;
                    const isActive = stage.active;

                    return (
                      <li key={stage.status} className="relative flex gap-5 pb-8 last:pb-0">
                        {/* icon */}
                        <div
                          className={`z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-[#1a3dc4] shadow-lg shadow-[#1a3dc4]/30 ring-4 ring-[#1a3dc4]/10'
                              : isDone
                              ? 'bg-green-500'
                              : 'bg-gray-100'
                          }`}
                        >
                          <Icon
                            size={16}
                            className={
                              isActive
                                ? 'text-white'
                                : isDone
                                ? 'text-white'
                                : 'text-gray-400'
                            }
                          />
                        </div>

                        {/* content */}
                        <div className="pt-1 flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <p
                              className={`font-bold text-sm ${
                                isActive
                                  ? 'text-[#1a3dc4]'
                                  : isDone
                                  ? 'text-foreground'
                                  : 'text-gray-300'
                              }`}
                            >
                              {stage.status}
                              {isActive && (
                                <span className="ml-2 text-[10px] bg-[#1a3dc4]/10 text-[#1a3dc4] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                                  Current
                                </span>
                              )}
                            </p>
                            <p
                              className={`text-xs font-mono ${
                                isDone ? 'text-gray-400' : 'text-gray-200'
                              }`}
                            >
                              {stage.timestamp}
                            </p>
                          </div>
                          <p
                            className={`text-xs mt-0.5 ${
                              isDone ? 'text-gray-500' : 'text-gray-300'
                            }`}
                          >
                            {stage.description}
                          </p>
                          {isDone && (
                            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                              <MapPin size={10} />
                              {stage.location}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            {/* Delivery address */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a3dc4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#1a3dc4]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Delivery Address
                </p>
                <p className="text-foreground font-semibold text-sm">{order.address}</p>
              </div>
            </div>

            {/* Items ordered (collapsible) */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button
                id="toggle-items-btn"
                onClick={() => setShowItems(v => !v)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-foreground text-sm">
                  Items in this order ({order.items?.length || 0})
                </span>
                {showItems ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>

              {showItems && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-50 pt-4">
                  {order.items?.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover bg-gray-100 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate text-sm">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.brand} · {item.condition} · Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold text-[#1a3dc4] flex-shrink-0 text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="font-bold text-foreground text-sm">Total Paid</span>
                    <span className="font-black text-[#1a3dc4]">{formatPrice(order.total)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Support */}
            <div className="bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-2xl p-5">
              <p className="font-bold text-foreground text-sm mb-0.5">Need help?</p>
              <p className="text-xs text-gray-500 mb-3">
                Quote your order reference when you reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:08132922551"
                  id="support-phone"
                  className="flex items-center gap-2 text-xs font-semibold text-[#1a3dc4] hover:underline"
                >
                  <Phone size={13} />
                  08132922551
                </a>
                <a
                  href="mailto:gabbysgadget@gmail.com"
                  id="support-email"
                  className="flex items-center gap-2 text-xs font-semibold text-[#1a3dc4] hover:underline"
                >
                  <Mail size={13} />
                  gabbysgadget@gmail.com
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                id="continue-shopping-link"
                className="flex-1 py-3.5 bg-[#1a3dc4] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] text-sm"
              >
                Continue Shopping <ArrowRight size={16} />
              </Link>
              <Link
                to="/"
                id="back-home-link"
                className="flex-1 py-3.5 bg-gray-100 text-foreground font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-all text-sm"
              >
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Empty state when no search has been made yet */}
        {!order && !notFound && !searchRef && (
          <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="w-20 h-20 bg-[#1a3dc4]/8 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck size={32} className="text-[#1a3dc4]" />
            </div>
            <p className="text-foreground font-bold text-lg mb-1">Enter your order reference</p>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              You can find your order reference in the confirmation email or on your order confirmation page.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

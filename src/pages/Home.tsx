import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Laptop, Gamepad2, Watch, Headphones, Monitor, Zap, ShieldCheck, RefreshCw, ChevronLeft, ChevronRight, Truck} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';

// Each category card now maps to the exact URL that filters products correctly
const categories = [
  { name: 'iPhones',  to: '/products?category=Phones&brand=Apple', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'Android',  to: '/products?category=Phones',             icon: Smartphone, color: 'bg-green-600' },
  { name: 'Laptops',  to: '/products?category=Laptops',            icon: Laptop,     color: 'bg-purple-500' },
  { name: 'Gaming',   to: '/products?category=Gaming',             icon: Gamepad2,   color: 'bg-red-500' },
  { name: 'Watches',  to: '/products?category=Watches',            icon: Watch,      color: 'bg-orange-500' },
  { name: 'Audio',    to: '/products?category=Audio',              icon: Headphones, color: 'bg-green-500' },
  { name: 'Monitors', to: '/products?category=Monitors',           icon: Monitor,    color: 'bg-cyan-500' },
  { name: 'Power',    to: '/products?category=Power',              icon: Zap,        color: 'bg-yellow-500' },
];

const brands = [
  'Apple', 'Samsung', 'Google', 'Xiaomi', 'Infinix', 'Tecno', 'Redmi',
  'MSI', 'ASUS', 'HP', 'Dell', 'JBL', 'Lenovo', 'PlayStation', 'Harman Kardon',
  'EcoFlow', 'Anker', 'Baseus', 'Itel',
];

const heroSlides = [
  {
    badge: 'New Arrivals',
    heading: ['WE ', 'BUY', ','],
    subheading: ['', 'SELL', ' & SWAP'],
    highlightIndex: 0,
    description: 'Upgrade your lifestyle with the latest gadgets. From iPhones to Workstations, premium tech at unbeatable prices.',
    // Dark flatlay of multiple premium smartphones — perfectly conveys Buy/Sell/Swap
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=90&w=3840&crop=center',
    cta: { label: 'Shop Now', to: '/products' },
    accent: '#1a3dc4',
  },
  {
    badge: 'Best Deal',
    heading: ['SELL YOUR', '', ''],
    subheading: ['OLD ', 'DEVICE', ''],
    highlightIndex: 1,
    description: 'Get the best value for your old phone, laptop or console. Fast evaluation, instant cash.',
    // Real retail counter scene — customer handing over a phone for a deal
    image: 'https://images.unsplash.com/photo-1556742502-ec3f3fd09953?auto=format&fit=crop&q=90&w=3840&crop=center',
    cta: { label: 'Sell / Swap', to: '/sell' },
    accent: '#f5a623',
  },
  {
    badge: 'Compare & Choose',
    heading: ['FIND YOUR', '', ''],
    subheading: ['PERFECT ', 'MATCH', ''],
    highlightIndex: 1,
    description: 'Side-by-side phone comparison. Compare specs, prices, and storage options to make the right call.',
    // Person holding two phones side by side — perfectly conveys Compare/Find Your Match
    image: 'https://images.unsplash.com/photo-1512941937938-ac2d9537b3b2?auto=format&fit=crop&q=90&w=3840&crop=center',
    cta: { label: 'Compare Phones', to: '/compare' },
    accent: '#8b5cf6',
  },
];

const trustBadges = [
  { icon: Truck, label: 'Same-Day Delivery', sub: 'Within Lagos on orders before 2PM' },
  { icon: RefreshCw, label: 'Easy Returns', sub: '7-day hassle-free return guarantee' },
  { icon: ShieldCheck, label: 'Verified Quality', sub: '50-point inspection on every item' },
  { icon: Zap, label: '24/7 Support', sub: 'Chat, call or WhatsApp us anytime' },
];



export default function Home() {
  const [recentlyViewed, setRecentlyViewed] = useState<typeof ALL_PRODUCTS>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [newStartIdx, setNewStartIdx] = useState(0);
  const [popStartIdx, setPopStartIdx] = useState(0);
  const heroIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const newArrivals = ALL_PRODUCTS.filter(p => p.condition === 'New').slice(0, 8);
  const popularItems = ALL_PRODUCTS.filter(p => p.condition === 'Used').slice(0, 8);
  const CARDS_PER_VIEW = 4;

  const nextHero = () => setHeroIndex(i => (i + 1) % heroSlides.length);
  const prevHero = () => setHeroIndex(i => (i - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    heroIntervalRef.current = setInterval(nextHero, 5000);
    return () => { if (heroIntervalRef.current) clearInterval(heroIntervalRef.current); };
  }, []);

  const resetHeroTimer = () => {
    if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
    heroIntervalRef.current = setInterval(nextHero, 5000);
  };

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem('gg_recently_viewed') || '[]');
    const products = ids
      .map(id => ALL_PRODUCTS.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 4) as typeof ALL_PRODUCTS;
    setRecentlyViewed(products);
  }, []);

  const slide = heroSlides[heroIndex];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title="Home"
        description="Gabby's Gadget — Nigeria's best place to buy, sell and swap premium smartphones, laptops, gaming gear and accessories. Fast delivery within Lagos."
      />

      <main>
        {/* Hero Section — Carousel */}
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a3dc4_0%,transparent_50%)]" />
            <div className="grid grid-cols-12 h-full w-full opacity-10">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/20" />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#f5a623] text-xs font-bold uppercase tracking-widest mb-6">
                  {slide.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
                  {slide.heading[0]}<span style={{ color: slide.accent }}>{slide.heading[1]}</span>{slide.heading[2]}<br />
                  {slide.subheading[0]}<span className="text-[#f5a623]">{slide.subheading[1]}</span>{slide.subheading[2]}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={slide.cta.to} className="px-8 py-4 text-white rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 shadow-xl" style={{ background: slide.accent }}>
                    {slide.cta.label} <ArrowRight size={20} />
                  </Link>
                  <Link to="/sell" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                    Sell Your Device
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                {/* Cinematic glow rings behind the image */}
                <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full blur-[120px] opacity-30" style={{ background: slide.accent }} />
                <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#1a3dc4] rounded-full blur-[100px] opacity-25" />

                <div className="relative z-10 animate-float">
                  {/* Subtle border-glow frame */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-[2px] opacity-40"
                    style={{ background: `linear-gradient(135deg, ${slide.accent}55, transparent 60%)` }}
                  />
                  <img
                    src={slide.image}
                    alt={slide.badge}
                    className="rounded-3xl shadow-2xl w-full object-cover"
                    style={{
                      aspectRatio: '4 / 3',
                      objectPosition: 'center',
                      border: `1px solid ${slide.accent}33`,
                      boxShadow: `0 32px 80px -12px ${slide.accent}40, 0 0 0 1px rgba(255,255,255,0.06)`,
                    }}
                  />
                  {/* Subtle left-edge fade so image blends with the dark bg */}
                  <div className="absolute inset-y-0 left-0 w-16 rounded-l-3xl bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <button
            onClick={() => { prevHero(); resetHeroTimer(); }}
            className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => { nextHero(); resetHeroTimer(); }}
            className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setHeroIndex(i); resetHeroTimer(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === heroIndex ? 'w-8 h-2 bg-[#f5a623]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Trust Badge Strip — immediately below hero */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#1a3dc4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3dc4]/20 transition-colors">
                    <badge.icon size={20} className="text-[#1a3dc4]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{badge.label}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Strip */}
        <section className="py-10 bg-white border-y border-primary/5 overflow-hidden">
          <div className="overflow-hidden">
            <div className="animate-marquee gap-16 items-center whitespace-nowrap">
              {[...brands, ...brands].map((brand, i) => (
                <span key={i} className="inline-block mx-8 text-2xl font-black text-gray-200 uppercase tracking-tighter hover:text-[#1a3dc4] transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-4">Browse Categories</h2>
                <p className="text-muted-foreground">Find exactly what you're looking for</p>
              </div>
              <button className="text-[#1a3dc4] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {categories.map((cat) => (
                <Link to={cat.to} key={cat.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer"
                  >
                  <div className={`w-14 h-14 mx-auto rounded-2xl ${cat.color} bg-opacity-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`text-${cat.color.split('-')[1]}-600`} size={28} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{cat.name}</h3>
                </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals — Horizontal Carousel */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-1">New on Gabby's Gadget.</h2>
                <p className="text-muted-foreground text-sm">Fresh stock, just arrived</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setNewStartIdx(i => Math.max(0, i - 1))}
                  disabled={newStartIdx === 0}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#1a3dc4] hover:text-white hover:border-[#1a3dc4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setNewStartIdx(i => Math.min(newArrivals.length - CARDS_PER_VIEW, i + 1))}
                  disabled={newStartIdx >= newArrivals.length - CARDS_PER_VIEW}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#1a3dc4] hover:text-white hover:border-[#1a3dc4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
                <Link to="/products" className="text-sm font-bold text-[#1a3dc4] hover:underline flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.slice(newStartIdx, newStartIdx + CARDS_PER_VIEW).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Items — Horizontal Carousel */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-1">Popular on Gabby's.</h2>
                <p className="text-muted-foreground text-sm">Customer favourites & top-rated picks</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPopStartIdx(i => Math.max(0, i - 1))}
                  disabled={popStartIdx === 0}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#1a3dc4] hover:text-white hover:border-[#1a3dc4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setPopStartIdx(i => Math.min(popularItems.length - CARDS_PER_VIEW, i + 1))}
                  disabled={popStartIdx >= popularItems.length - CARDS_PER_VIEW}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#1a3dc4] hover:text-white hover:border-[#1a3dc4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
                <Link to="/products" className="text-sm font-bold text-[#1a3dc4] hover:underline flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularItems.slice(popStartIdx, popStartIdx + CARDS_PER_VIEW).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-[#1a3dc4] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5a623] skew-x-12 translate-x-1/2 opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={32} className="text-[#f5a623]" />
                </div>
                <h3 className="text-xl font-bold">Verified Quality</h3>
                <p className="text-white/70">Every gadget undergoes a rigorous 50-point inspection before it hits our shelves.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <RefreshCw size={32} className="text-[#f5a623]" />
                </div>
                <h3 className="text-xl font-bold">Easy Swaps</h3>
                <p className="text-white/70">Bring your old device and upgrade to the latest tech instantly with our fair valuation.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Zap size={32} className="text-[#f5a623]" />
                </div>
                <h3 className="text-xl font-bold">Fast Delivery</h3>
                <p className="text-white/70">Same-day delivery within Lagos and 48-hour nationwide shipping across Nigeria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <section className="py-16 max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-foreground">Recently Viewed</h2>
              <Link to="/products" className="text-sm text-[#1a3dc4] font-bold hover:underline">See all</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {recentlyViewed.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
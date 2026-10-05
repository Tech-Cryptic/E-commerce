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

// ─── Hero slides — gradient backgrounds (no photos yet) ────────────────────
// Images will be added once the right product shots are sourced.
// Each slide has a rich, branded gradient background.
const heroSlides = [
  {
    badge: '🔥 Nigeria\'s #1 Tech Destination',
    headline: 'Buy. Sell. Swap.',
    sub: 'Premium gadgets. Unbeatable prices. Lagos to your door.',
    ctaLabel: 'Shop Now',
    ctaTo: '/products',
    ctaSecLabel: 'Sell Your Device',
    ctaSecTo: '/sell',
    // Deep navy → electric blue gradient
    bg: 'linear-gradient(135deg, #060d1f 0%, #0f1f4a 45%, #1a3dc4 100%)',
    accentColor: '#1a3dc4',
    // Decorative radial highlight
    glow: 'radial-gradient(ellipse at 70% 50%, rgba(26,61,196,0.45) 0%, transparent 65%)',
  },
  {
    badge: '💰 Best Trade-In Rates in Lagos',
    headline: 'Your Old Device is Worth More Than You Think.',
    sub: 'We evaluate, you get cash. Swift. Fair. Guaranteed.',
    ctaLabel: 'Get a Valuation',
    ctaTo: '/sell',
    ctaSecLabel: 'Browse New Arrivals',
    ctaSecTo: '/products',
    // Rich dark amber / gold gradient
    bg: 'linear-gradient(135deg, #1a0d00 0%, #3d2000 50%, #7a4200 100%)',
    accentColor: '#f5a623',
    glow: 'radial-gradient(ellipse at 70% 50%, rgba(245,166,35,0.35) 0%, transparent 65%)',
  },
  {
    badge: '📱 Compare Before You Buy',
    headline: 'Find Your Perfect Match.',
    sub: 'Side-by-side specs. Storage variants. Price ranges. All in one place.',
    ctaLabel: 'Compare Phones',
    ctaTo: '/compare',
    ctaSecLabel: 'Browse All',
    ctaSecTo: '/products',
    // Deep purple / violet gradient
    bg: 'linear-gradient(135deg, #0d0118 0%, #250d42 50%, #4c1d95 100%)',
    accentColor: '#8b5cf6',
    glow: 'radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.4) 0%, transparent 65%)',
  },
];

// ─── Feed Carousel brand banners ────────────────────────────────────────────
// Official or high-quality brand promotional images — the same style
// Revenes uses for their "Feed Carousel" section.
const feedBanners = [
  {
    brand: 'Apple',
    title: 'iPhone 16 Series',
    sub: 'The most advanced iPhone yet.',
    image: 'https://images.unsplash.com/photo-1697388754524-ceef2ea1d7d8?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#1d1d1f',
    textColor: '#f5f5f7',
    to: '/products?category=Phones&brand=Apple',
  },
  {
    brand: 'Samsung',
    title: 'Galaxy S25 Ultra',
    sub: 'Intelligence. Reimagined.',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2501/gallery/uk-galaxy-s25-ultra-sm-s938bzkgeub-thumb-540218610?wid=600&hei=400&fmt=jpeg&qlt=90',
    bg: '#1a2342',
    textColor: '#ffffff',
    to: '/products?category=Phones&brand=Samsung',
  },
  {
    brand: 'Google',
    title: 'Pixel 9 Pro',
    sub: 'AI-powered photography.',
    image: 'https://images.unsplash.com/photo-1698861493965-f7f6f4e87f4f?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#174ea6',
    textColor: '#ffffff',
    to: '/products?category=Phones&brand=Google',
  },
  {
    brand: 'Samsung',
    title: 'Galaxy Z Flip 7',
    sub: 'Flip into something new.',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2507/gallery/uk-galaxy-z-flip7-sm-f741bzkgeub-thumb-540218610?wid=600&hei=400&fmt=jpeg&qlt=90',
    bg: '#2d1b4e',
    textColor: '#ffffff',
    to: '/products?category=Phones&brand=Samsung',
  },
  {
    brand: 'JBL',
    title: 'Premium Audio',
    sub: 'Feel every beat.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#f96900',
    textColor: '#ffffff',
    to: '/products?category=Audio',
  },
  {
    brand: 'Xiaomi',
    title: 'Redmi Note 15 Pro',
    sub: 'Pro camera. Smart price.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#ff6900',
    textColor: '#ffffff',
    to: '/products?category=Phones&brand=Xiaomi',
  },
  {
    brand: 'Apple',
    title: 'MacBook Pro M4',
    sub: 'Built for what\'s next.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#1d1d1f',
    textColor: '#f5f5f7',
    to: '/products?category=Laptops&brand=Apple',
  },
  {
    brand: 'Infinix',
    title: 'Hot 50 Series',
    sub: 'Big screen. Bigger value.',
    image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&q=90&w=600&h=400',
    bg: '#e63946',
    textColor: '#ffffff',
    to: '/products?category=Phones&brand=Infinix',
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
  const feedRef = useRef<HTMLDivElement>(null);

  const newArrivals = ALL_PRODUCTS.filter(p => p.condition === 'New').slice(0, 8);
  // 'Popular' = highest-priced items (premium = most sought-after) mixed across conditions
  const popularItems = [...ALL_PRODUCTS]
    .sort((a, b) => {
      const aPrice = a.storageVariants[0]?.price ?? 0;
      const bPrice = b.storageVariants[0]?.price ?? 0;
      return bPrice - aPrice;
    })
    .slice(0, 8);
  const CARDS_PER_VIEW = 4;

  const nextHero = () => setHeroIndex(i => (i + 1) % heroSlides.length);
  const prevHero = () => setHeroIndex(i => (i - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    heroIntervalRef.current = setInterval(nextHero, 6000);
    return () => { if (heroIntervalRef.current) clearInterval(heroIntervalRef.current); };
  }, []);

  const resetHeroTimer = () => {
    if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
    heroIntervalRef.current = setInterval(nextHero, 6000);
  };

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem('gg_recently_viewed') || '[]');
    const products = ids
      .map(id => ALL_PRODUCTS.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 4) as typeof ALL_PRODUCTS;
    setRecentlyViewed(products);
  }, []);

  const scrollFeed = (dir: 'left' | 'right') => {
    if (feedRef.current) {
      feedRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
    }
  };

  const slide = heroSlides[heroIndex];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title="Home"
        description="Gabby's Gadget — Nigeria's best place to buy, sell and swap premium smartphones, laptops, gaming gear and accessories. Fast delivery within Lagos."
      />

      <main>
        {/* ── HERO: Full-Bleed Gradient Banner (images to be added later) ────────── */}
        <section className="relative w-full overflow-hidden" style={{ height: '92vh', minHeight: 540 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
              style={{ background: slide.bg }}
            >
              {/* Decorative radial glow — gives depth without an image */}
              <div className="absolute inset-0" style={{ background: slide.glow }} />
              {/* Subtle grid texture overlay */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }} />
              {/* Bottom fade into page */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text overlay — bottom-left anchored, like editorial magazine spreads */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${heroIndex}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="absolute inset-0 flex items-end pb-20 z-10"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-2xl">
                  {/* Badge pill */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-white/20 text-white/90 bg-white/10 backdrop-blur-sm">
                    {slide.badge}
                  </span>

                  {/* Main headline */}
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight"
                    style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
                    {slide.headline}
                  </h1>

                  {/* Sub-copy */}
                  <p className="text-base sm:text-lg md:text-xl text-white/75 mb-8 leading-relaxed max-w-lg"
                    style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                    {slide.sub}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={slide.ctaTo}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm transition-all hover:scale-105 hover:opacity-90 shadow-2xl"
                      style={{ background: slide.accentColor }}
                    >
                      {slide.ctaLabel} <ArrowRight size={17} />
                    </Link>
                    <Link
                      to={slide.ctaSecTo}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm bg-white/10 border border-white/25 backdrop-blur-sm hover:bg-white/20 transition-all"
                    >
                      {slide.ctaSecLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators — bottom centre */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setHeroIndex(i); resetHeroTimer(); }}
                className={`rounded-full transition-all duration-400 ${
                  i === heroIndex ? 'w-9 h-[3px] bg-white' : 'w-[3px] h-[3px] bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <button
            onClick={() => { prevHero(); resetHeroTimer(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 border border-white/20 flex items-center justify-center hover:bg-black/50 transition-all text-white backdrop-blur-sm"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => { nextHero(); resetHeroTimer(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 border border-white/20 flex items-center justify-center hover:bg-black/50 transition-all text-white backdrop-blur-sm"
          >
            <ChevronRight size={22} />
          </button>
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
            <div className="flex animate-marquee gap-16 items-center whitespace-nowrap">
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
              <Link to="/products" className="text-[#1a3dc4] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight size={20} />
              </Link>
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

        {/* ══ FEED CAROUSEL ══════════════════════════════════════════════════════════
            Horizontal scrolling brand promotional banners — like Revenes.
            Each banner is a rich brand marketing card with image, brand name,
            headline and CTA. Invites discovery across brands.
        ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section heading */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-foreground">
                  <span className="text-[#f5a623]">Feed</span>{' '}
                  <span className="text-foreground">Carousel.</span>
                </h2>
                <p className="text-muted-foreground text-sm mt-1">Here are the latest and trending consumer tech brands.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scrollFeed('left')}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1a3dc4] hover:text-[#1a3dc4] transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollFeed('right')}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1a3dc4] hover:text-[#1a3dc4] transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable banner row */}
            <div
              ref={feedRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {feedBanners.map((banner, idx) => (
                <Link
                  key={idx}
                  to={banner.to}
                  className="flex-none snap-start group"
                  style={{ width: 300, minWidth: 300 }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl h-[200px] shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
                    style={{ background: banner.bg }}
                  >
                    {/* Background image */}
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      {/* Brand label top-right */}
                      <div className="self-end">
                        <span
                          className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.15)', color: banner.textColor, backdropFilter: 'blur(4px)' }}
                        >
                          {banner.brand}
                        </span>
                      </div>

                      {/* Title & sub at bottom */}
                      <div>
                        <h3
                          className="text-base font-black leading-tight mb-0.5"
                          style={{ color: banner.textColor }}
                        >
                          {banner.title}
                        </h3>
                        <p
                          className="text-xs mb-3 opacity-80"
                          style={{ color: banner.textColor }}
                        >
                          {banner.sub}
                        </p>
                        <span
                          className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-full transition-all group-hover:gap-2"
                          style={{ background: 'rgba(255,255,255,0.18)', color: banner.textColor, backdropFilter: 'blur(4px)' }}
                        >
                          Shop Now <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
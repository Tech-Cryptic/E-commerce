import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Laptop, Gamepad2, Watch, Headphones, Monitor, Zap, ShieldCheck, RefreshCw} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';

const categories = [
  { name: 'iPhones', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'Laptops', icon: Laptop, color: 'bg-purple-500' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-red-500' },
  { name: 'iWatches', icon: Watch, color: 'bg-orange-500' },
  { name: 'Audio', icon: Headphones, color: 'bg-green-500' },
  { name: 'Monitors', icon: Monitor, color: 'bg-cyan-500' },
];

const brands = [
  'Apple', 'Samsung', 'MSI', 'ASUS', 'HP', 'Dell', 'JBL', 'Lenovo', 'PlayStation', 'Harman Kardon'
];



export default function Home() {
  const [recentlyViewed, setRecentlyViewed] = useState<typeof ALL_PRODUCTS>([]);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem('gg_recently_viewed') || '[]');
    const products = ids
      .map(id => ALL_PRODUCTS.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 4) as typeof ALL_PRODUCTS;
    setRecentlyViewed(products);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title="Home"
        description="Gabby's Gadget — Nigeria's best place to buy, sell and swap premium smartphones, laptops, gaming gear and accessories. Fast delivery within Lagos."
      />

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a3dc4_0%,transparent_50%)]" />
            <div className="grid grid-cols-12 h-full w-full opacity-10">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/20" />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a3dc4]/20 border border-[#1a3dc4]/30 text-[#f5a623] text-xs font-bold uppercase tracking-widest mb-6">
                {/* <Zap size={14} /> */}
                The Future of Tech is Here
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
                WE <span className="text-[#1a3dc4]">BUY</span>, <br />
                <span className="text-[#f5a623]">SELL</span> & SWAP
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                Upgrade your lifestyle with the latest gadgets. From iPhones to Workstations, we provide premium tech solutions for the modern world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="px-8 py-4 bg-[#1a3dc4] text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
                  Shop Now <ArrowRight size={20} />
                </Link>
                <Link to="/sell" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                  Sell Your Device
                </Link>
              </div>
            </motion.div>
          

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=800" 
                  alt="Premium Tech" 
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f5a623] rounded-full blur-[100px] opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1a3dc4] rounded-full blur-[100px] opacity-30" />
            </motion.div>
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((cat) => (
                <Link to={`/products?category=${cat.name}`} key={cat.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer"
                  >
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${cat.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`text-${cat.color.split('-')[1]}-600`} size={32} />
                  </div>
                  <h3 className="font-bold text-foreground">{cat.name}</h3>
                </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-foreground mb-4">Featured Gadgets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Handpicked premium devices at unbeatable prices. All items are verified for quality.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ALL_PRODUCTS.filter(p => p.condition === 'New').slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#1a3dc4] text-white relative overflow-hidden">
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
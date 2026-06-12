import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

const ALL_PRODUCTS: { id: string; name: string; price: number; image: string; category: string; condition: 'New' | 'Used' | 'Swap'; brand: string }[] = [
  { id: '1', name: 'iPhone 15 Pro Max', price: 1450000, image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400', category: 'Phones', condition: 'New', brand: 'Apple' },
  { id: '2', name: 'MacBook Pro M3 Max', price: 3200000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400', category: 'Laptops', condition: 'New', brand: 'Apple' },
  { id: '3', name: 'PlayStation 5 Slim', price: 650000, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400', category: 'Gaming', condition: 'New', brand: 'Sony' },
  { id: '4', name: 'Samsung S24 Ultra', price: 1250000, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400', category: 'Phones', condition: 'New', brand: 'Samsung' },
  { id: '5', name: 'MSI Raider GE78', price: 2800000, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400', category: 'Laptops', condition: 'New', brand: 'MSI' },
  { id: '6', name: 'iPad Pro 12.9 M2', price: 1100000, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400', category: 'Tablets', condition: 'Used', brand: 'Apple' },
  { id: '7', name: 'JBL PartyBox 310', price: 550000, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=400', category: 'Audio', condition: 'New', brand: 'JBL' },
  { id: '8', name: 'Apple Watch Ultra 2', price: 950000, image: 'https://placehold.co/400x400', category: 'Watches', condition: 'New', brand: 'Apple' },
  { id: '9', name: 'Dell Alienware 34"', price: 1400000, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400', category: 'Monitors', condition: 'New', brand: 'Dell' },
  { id: '10', name: 'Sony WH-1000XM5', price: 420000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', category: 'Audio', condition: 'New', brand: 'Sony' },
  { id: '11', name: 'ASUS ROG Zephyrus', price: 1950000, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400', category: 'Laptops', condition: 'Used', brand: 'ASUS' },
  { id: '12', name: 'Harman Kardon Aura', price: 380000, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=400', category: 'Audio', condition: 'New', brand: 'Harman Kardon' },
  { id: '13', name: 'iPhone 13 Pro', price: 550000, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400', category: 'Phones', condition: 'Swap', brand: 'Apple' },
  { id: '14', name: 'Lenovo Legion Go', price: 850000, image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400', category: 'Gaming', condition: 'New', brand: 'Lenovo' },
  { id: '15', name: 'Samsung Odyssey G9', price: 1800000, image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=400', category: 'Monitors', condition: 'New', brand: 'Samsung' },
];

export default function ProductListing() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');

  // read search query from URL when coming from navbar search
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearch = params.get('search');
    const urlFilter = params.get('filter');
    if (urlSearch) setSearchQuery(urlSearch);
    if (urlFilter === 'swap') setSelectedCondition('Swap');
  }, [location.search]);
  
  const categories = ['All', 'Phones', 'Laptops', 'Gaming', 'Audio', 'Watches', 'Monitors', 'Tablets'];
  const conditions = ['All', 'New', 'Used', 'Swap'];

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesCondition = selectedCondition === 'All' || product.condition === selectedCondition;
    return matchesSearch && matchesCategory && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-foreground mb-2">Explore Gadgets</h1>
            <p className="text-muted-foreground">Showing {filteredProducts.length} premium items</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search for gadgets..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-primary/10 rounded-2xl focus:ring-2 focus:ring-[#1a3dc4]/20 focus:border-[#1a3dc4] outline-none transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Filter size={18} className="text-[#1a3dc4]" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#1a3dc4] text-white font-bold' 
                        : 'hover:bg-primary/5 text-muted-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-[#1a3dc4]" />
                Condition
              </h3>
              <div className="flex flex-wrap gap-2">
                {conditions.map(cond => (
                  <button
                    key={cond}
                    onClick={() => setSelectedCondition(cond)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      selectedCondition === cond 
                        ? 'bg-[#f5a623] border-[#f5a623] text-white' 
                        : 'border-primary/10 text-muted-foreground hover:border-[#1a3dc4]'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#1a3dc4] rounded-2xl text-white">
              <h4 className="font-bold mb-2">Need a Swap?</h4>
              <p className="text-xs text-white/70 mb-4">Bring your old device and get instant credit towards a new one.</p>
              <button className="w-full py-2 bg-[#f5a623] text-white rounded-lg text-xs font-bold hover:scale-105 transition-transform">
                Get Valuation
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-primary/10">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No gadgets found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All'); setSelectedCondition('All');}}
                  className="mt-6 text-[#1a3dc4] font-bold underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
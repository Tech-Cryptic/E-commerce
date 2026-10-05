import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';
import { getMinPrice, type Product } from '../data/types';
import { Search, Filter, SlidersHorizontal, ChevronDown, ChevronUp, ArrowUpDown, X } from 'lucide-react';
import SEO from '../components/SEO';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

const BRANDS = [
  'Apple', 'Samsung', 'Google', 'Xiaomi', 'Infinix', 'Tecno', 'Redmi',
  'Sony', 'MSI', 'ASUS', 'Dell', 'JBL', 'Lenovo', 'Harman Kardon',
  'Itel', 'EcoFlow', 'Anker', 'Baseus',
].filter((v, i, a) => a.indexOf(v) === i);

// Fisher-Yates deterministic pseudo-random shuffle for realistic catalog browsing
function shuffleProducts(array: Product[]): Product[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ProductListing() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Randomize product catalog order on component mount for dynamic discovery
  const randomizedProducts = useMemo(() => shuffleProducts(ALL_PRODUCTS), []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearch   = params.get('search');
    const urlFilter   = params.get('filter');
    const urlCategory = params.get('category');
    const urlBrand    = params.get('brand');
    if (urlSearch)           setSearchQuery(urlSearch);
    if (urlFilter === 'swap') setSelectedCondition('Swap');
    if (urlCategory)         setSelectedCategory(urlCategory);
    if (urlBrand)            setSelectedBrands([urlBrand]);
  }, [location.search]);

  // Handle outside click for sort dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = ['All', 'Phones', 'Laptops', 'Gaming', 'Audio', 'Watches', 'Monitors', 'Tablets', 'Power', 'Accessories'];
  const conditions = ['All', 'New', 'Used', 'Swap'];

  const sortLabels: Record<SortOption, string> = {
    default:      'Featured / Discover',
    'price-asc':  'Price: Low to High',
    'price-desc': 'Price: High to Low',
    'name-asc':   'Name: A to Z',
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const parsePriceInput = (val: string) => {
    const cleaned = val.replace(/[^0-9]/g, '');
    return cleaned ? parseInt(cleaned, 10) : undefined;
  };

  const parsedMin = parsePriceInput(minPrice);
  const parsedMax = parsePriceInput(maxPrice);

  const filteredProducts = randomizedProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory  = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesCondition = selectedCondition === 'All' || product.condition === selectedCondition;
      const matchesBrand     = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const productMinPrice = getMinPrice(product) ?? 0;
      const matchesMin = parsedMin === undefined || productMinPrice >= parsedMin;
      const matchesMax = parsedMax === undefined || productMinPrice <= parsedMax;

      return matchesSearch && matchesCategory && matchesCondition && matchesBrand && matchesMin && matchesMax;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc')  return (getMinPrice(a) ?? 0) - (getMinPrice(b) ?? 0);
      if (sortBy === 'price-desc') return (getMinPrice(b) ?? 0) - (getMinPrice(a) ?? 0);
      if (sortBy === 'name-asc')   return a.name.localeCompare(b.name);
      return 0;
    });

  const clearAll = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCondition('All');
    setSelectedBrands([]);
    setMinPrice('');
    setMaxPrice('');
    setSortBy('default');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedCondition !== 'All' ||
    selectedBrands.length > 0 || minPrice || maxPrice || sortBy !== 'default' || searchQuery;

  const filterContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
          <Filter size={16} className="text-[#1a3dc4]" />
          Categories
        </h3>
        <div className="space-y-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setShowMobileFilters(false); }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1a3dc4] text-white font-bold shadow-md shadow-[#1a3dc4]/20'
                  : 'hover:bg-primary/5 text-muted-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
          <SlidersHorizontal size={16} className="text-[#1a3dc4]" />
          Condition
        </h3>
        <div className="flex flex-wrap gap-2">
          {conditions.map(cond => (
            <button
              key={cond}
              onClick={() => setSelectedCondition(cond)}
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                selectedCondition === cond
                  ? 'bg-[#f5a623] border-[#f5a623] text-white shadow-md shadow-[#f5a623]/20'
                  : 'border-primary/10 text-muted-foreground hover:border-[#1a3dc4]'
              }`}
            >
              {cond}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Brand</h3>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
          {BRANDS.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group py-0.5">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 rounded border-gray-300 text-[#1a3dc4] accent-[#1a3dc4]"
              />
              <span className={`text-sm transition-colors ${
                selectedBrands.includes(brand) ? 'text-[#1a3dc4] font-bold' : 'text-muted-foreground group-hover:text-foreground'
              }`}>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Price Range (₦)</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Min Price (₦)</label>
            <input
              type="number"
              id="min-price"
              placeholder="e.g. 50,000"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all bg-white"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Max Price (₦)</label>
            <input
              type="number"
              id="max-price"
              placeholder="e.g. 1,500,000"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all bg-white"
            />
          </div>
        </div>
      </div>

      {/* Swap CTA */}
      <div className="p-5 bg-gradient-to-br from-[#1a3dc4] to-[#0f247a] rounded-2xl text-white shadow-lg shadow-[#1a3dc4]/15">
        <h4 className="font-bold mb-1">Got a device to sell or swap?</h4>
        <p className="text-xs text-white/80 mb-4 leading-relaxed">Get a valuation within 24 hours and trade in toward your next upgrade.</p>
        <Link
          to="/sell"
          id="sidebar-sell-btn"
          className="block w-full py-2.5 bg-[#f5a623] hover:bg-[#e09419] text-white rounded-xl text-xs font-bold text-center transition-all shadow-md active:scale-95"
        >
          Submit Device for Valuation
        </Link>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="w-full py-2.5 text-center text-sm text-[#1a3dc4] font-bold hover:bg-[#1a3dc4]/10 rounded-xl transition-all border border-[#1a3dc4]/20"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title={searchQuery ? `Search: ${searchQuery}` : selectedCategory !== 'All' ? selectedCategory : 'Shop All Gadgets'}
        description={`Browse ${filteredProducts.length} gadgets${searchQuery ? ` matching "${searchQuery}"` : ''} at Gabby's Gadget. Phones, Laptops, Gaming gear and more.`}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-1 tracking-tight">Explore Gadgets</h1>
            <p className="text-muted-foreground text-sm">Showing {filteredProducts.length} of {ALL_PRODUCTS.length} curated gadgets</p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                id="product-search"
                placeholder="Search gadgets, brands, models..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-primary/10 rounded-2xl focus:ring-2 focus:ring-[#1a3dc4]/20 focus:border-[#1a3dc4] outline-none transition-all shadow-sm text-sm"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-primary/10 rounded-2xl text-sm font-semibold hover:border-[#1a3dc4] transition-all shadow-sm"
            >
              <Filter size={15} className="text-[#1a3dc4]" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                id="sort-btn"
                onClick={() => setShowSortMenu(v => !v)}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-primary/10 rounded-2xl text-sm font-semibold hover:border-[#1a3dc4] transition-all whitespace-nowrap shadow-sm"
              >
                <ArrowUpDown size={15} className="text-[#1a3dc4]" />
                <span className="hidden sm:inline text-muted-foreground font-normal">Sort:</span>
                {sortLabels[sortBy]}
                {showSortMenu ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden w-56 py-1 animate-in fade-in zoom-in-95 duration-150">
                  {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => { setSortBy(key); setShowSortMenu(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                        sortBy === key ? 'text-[#1a3dc4] font-bold bg-[#1a3dc4]/5' : 'text-foreground'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {filterContent}
          </aside>

          {/* Mobile Filter Drawer / Modal */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-2">
                    <Filter size={18} className="text-[#1a3dc4]" />
                    <h2 className="font-bold text-lg text-foreground">Filter Gadgets</h2>
                  </div>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
                {filterContent}
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-primary/10">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No gadgets found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search query.</p>
                <button onClick={clearAll} className="px-5 py-2.5 bg-[#1a3dc4] text-white text-sm font-bold rounded-xl shadow hover:bg-[#1532a8] transition-colors">
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
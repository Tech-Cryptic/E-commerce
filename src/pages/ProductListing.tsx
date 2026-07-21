import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';
import { getMinPrice } from '../data/types';
import { Search, Filter, SlidersHorizontal, ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';
import SEO from '../components/SEO';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

const BRANDS = [
  'Apple', 'Samsung', 'Google', 'Sony', 'MSI', 'ASUS', 'Dell', 'JBL',
  'Lenovo', 'Harman Kardon', 'Google',
].filter((v, i, a) => a.indexOf(v) === i);

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearch   = params.get('search');
    const urlFilter   = params.get('filter');
    const urlCategory = params.get('category');
    if (urlSearch)           setSearchQuery(urlSearch);
    if (urlFilter === 'swap') setSelectedCondition('Swap');
    if (urlCategory)         setSelectedCategory(urlCategory);
  }, [location.search]);

  const categories = ['All', 'Phones', 'Laptops', 'Gaming', 'Audio', 'Watches', 'Monitors', 'Tablets', 'Accessories'];
  const conditions = ['All', 'New', 'Used', 'Swap'];

  const sortLabels: Record<SortOption, string> = {
    default:      'Default',
    'price-asc':  'Price: Low to High',
    'price-desc': 'Price: High to Low',
    'name-asc':   'Name: A to Z',
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = ALL_PRODUCTS
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory  = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesCondition = selectedCondition === 'All' || product.condition === selectedCondition;
      const matchesBrand     = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      // Use min price of storageVariants for filtering
      const productMinPrice = getMinPrice(product) ?? 0;
      const filterMin = minPrice ? parseInt(minPrice) * 1000 : 0;
      const filterMax = maxPrice ? parseInt(maxPrice) * 1000 : Infinity;
      const matchesPrice = productMinPrice >= filterMin && productMinPrice <= filterMax;

      return matchesSearch && matchesCategory && matchesCondition && matchesBrand && matchesPrice;
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title={searchQuery ? `Search: ${searchQuery}` : selectedCategory !== 'All' ? selectedCategory : 'Shop All Gadgets'}
        description={`Browse ${filteredProducts.length} gadgets${searchQuery ? ` matching "${searchQuery}"` : ''} at Gabby's Gadget. Phones, Laptops, Gaming gear and more.`}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-foreground mb-2">Explore Gadgets</h1>
            <p className="text-muted-foreground">Showing {filteredProducts.length} of {ALL_PRODUCTS.length} items</p>
          </div>

          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                id="product-search"
                placeholder="Search gadgets..."
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-primary/10 rounded-2xl focus:ring-2 focus:ring-[#1a3dc4]/20 focus:border-[#1a3dc4] outline-none transition-all shadow-sm text-sm"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                id="sort-btn"
                onClick={() => setShowSortMenu(v => !v)}
                className="flex items-center gap-2 px-4 py-3.5 bg-white border border-primary/10 rounded-2xl text-sm font-semibold hover:border-[#1a3dc4] transition-all whitespace-nowrap shadow-sm"
              >
                <ArrowUpDown size={15} className="text-[#1a3dc4]" />
                {sortLabels[sortBy]}
                {showSortMenu ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden w-52">
                  {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => { setSortBy(key); setShowSortMenu(false); }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
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
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">

            {/* Categories */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Filter size={16} className="text-[#1a3dc4]" />
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${
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

            {/* Condition */}
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
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
                        ? 'bg-[#f5a623] border-[#f5a623] text-white'
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
              <h3 className="font-bold text-foreground mb-3">Brand</h3>
              <div className="space-y-2">
                {BRANDS.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4 rounded border-gray-300 text-[#1a3dc4] accent-[#1a3dc4]"
                    />
                    <span className={`text-sm transition-colors ${
                      selectedBrands.includes(brand) ? 'text-[#1a3dc4] font-semibold' : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Price Range (NGN)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Min price (thousands)</label>
                  <input
                    type="number"
                    id="min-price"
                    placeholder="e.g. 200"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#1a3dc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Max price (thousands)</label>
                  <input
                    type="number"
                    id="max-price"
                    placeholder="e.g. 1500"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#1a3dc4] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Swap CTA */}
            <div className="p-5 bg-[#1a3dc4] rounded-2xl text-white">
              <h4 className="font-bold mb-1">Got a device to sell?</h4>
              <p className="text-xs text-white/70 mb-4">Get an instant valuation and trade in toward your upgrade.</p>
              <Link
                to="/sell"
                id="sidebar-sell-btn"
                className="block w-full py-2 bg-[#f5a623] text-white rounded-xl text-xs font-bold text-center hover:scale-105 transition-transform"
              >
                Get Valuation
              </Link>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="w-full text-center text-sm text-[#1a3dc4] font-bold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

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
                <button onClick={clearAll} className="text-[#1a3dc4] font-bold underline">
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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, ShoppingCart, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { formatPrice } from '../data/types';

interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  condition: string;
  price: number;
  image: string;
}

export default function Wishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('gg_wishlist');
    if (stored) setItems(JSON.parse(stored));
  }, []);

  const remove = (id: string) => {
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    localStorage.setItem('gg_wishlist', JSON.stringify(updated));
    window.dispatchEvent(new Event('wishlistUpdated'));
    toast.info('Removed from wishlist.', { position: 'top-right', autoClose: 1500 });
  };

  const addToCart = (item: WishlistItem) => {
    const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');
    const idx = existing.findIndex((c: any) => c.id === item.id);
    if (idx > -1) {
      existing[idx].quantity += 1;
    } else {
      existing.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('gg_cart', JSON.stringify(existing));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${item.name} added to cart!`, { position: 'top-right', autoClose: 2000 });
  };

  const clearAll = () => {
    setItems([]);
    localStorage.removeItem('gg_wishlist');
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black text-foreground mb-1">My Wishlist</h1>
            <p className="text-gray-500 text-sm">{items.length} saved item{items.length !== 1 ? 's' : ''}</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-gray-400 hover:text-red-500 font-semibold transition-colors flex items-center gap-1"
            >
              <Trash2 size={13} /> Clear all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <Heart size={36} className="text-red-300" />
            </div>
            <p className="text-foreground font-bold text-lg mb-2">Your wishlist is empty</p>
            <p className="text-gray-400 text-sm mb-8 max-w-xs mx-auto">
              Tap the ♥ on any product to save it here for later.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#1a3dc4] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a3dc4]/90 transition-all text-sm"
            >
              Browse Products <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {items.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="block aspect-square bg-gray-50 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.condition === 'New' ? 'bg-green-100 text-green-700' :
                      item.condition === 'Used' ? 'bg-blue-100 text-blue-700' :
                      'bg-[#f5a623] text-white'
                    }`}>
                      {item.condition}
                    </span>
                    {/* Remove heart */}
                    <button
                      onClick={(e) => { e.preventDefault(); remove(item.id); }}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
                    >
                      <Heart size={14} fill="#ef4444" className="text-red-500" />
                    </button>
                  </Link>

                  {/* Info */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold text-[#1a3dc4] uppercase tracking-widest mb-1">{item.brand}</p>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-bold text-foreground line-clamp-1 hover:text-[#1a3dc4] transition-colors mb-1">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mb-4">{item.category}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-black text-foreground">{formatPrice(item.price)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-[#1a3dc4] text-white rounded-lg text-xs font-bold hover:bg-[#1a3dc4]/90 transition-all hover:scale-105"
                      >
                        <ShoppingCart size={13} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#1a3dc4] font-bold hover:underline text-sm">
              Continue Shopping <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

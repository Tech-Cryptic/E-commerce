import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
  condition: 'New' | 'Used' | 'Swap';
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('gg_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const saveCart = (items: CartItem[]) => {
  setCartItems(items);
  localStorage.setItem('gg_cart', JSON.stringify(items));
};

const updateQuantity = (id: string, newQuantity: number) => {
  if (newQuantity < 1) return;
  saveCart(cartItems.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  ));
};

const removeItem = (id: string) => {
  saveCart(cartItems.filter(item => item.id !== id));
};

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 0 && subtotal < 500000 ? 15000 : 0;
  const tax = subtotal * 0.075;
  const total = subtotal + shippingFee + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-primary/5 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-primary/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-[10px] font-bold text-[#1a3dc4] uppercase tracking-widest mb-1">
                              {item.brand}
                            </p>
                            <h3 className="font-bold text-foreground text-lg">{item.name}</h3>
                          </div>
                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                            item.condition === 'New' ? 'bg-green-100 text-green-700' :
                            item.condition === 'Used' ? 'bg-blue-100 text-blue-700' :
                            'bg-[#f5a623]/10 text-[#f5a623]'
                          }`}>
                            {item.condition}
                          </span>
                        </div>
                        <p className="text-2xl font-black text-[#1a3dc4]">{formatPrice(item.price)}</p>
                      </div>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500 hover:text-red-700"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="flex items-center border border-primary/10 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-primary/5 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-bold min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-primary/5 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-black text-foreground text-lg">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl border border-primary/5 p-8 sticky top-24 space-y-6">
                <h2 className="text-xl font-black text-foreground">Order Summary</h2>

                <div className="space-y-4 pb-6 border-b border-primary/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-bold text-foreground">{formatPrice(shippingFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (7.5%)</span>
                    <span className="font-bold text-foreground">{formatPrice(tax)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-3xl font-black text-[#1a3dc4]">{formatPrice(total)}</span>
                </div>

        <div className="flex flex-col gap-3">
  <button
    onClick={() => {
      localStorage.setItem('gg_cart', JSON.stringify(cartItems));
      const loggedIn = localStorage.getItem('gg_logged_in');
      if (loggedIn !== 'true') {
        localStorage.setItem('gg_redirect', '/checkout');
        toast.info('Please sign in to checkout.', { position: 'top-right', autoClose: 2000 });
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        window.location.href = '/checkout';
      }
    }}
    className="w-full bg-[#1a3dc4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20"
  >
    Proceed to Checkout
    <ArrowRight size={20} />
  </button>

  <Link
    to="/products"
    className="w-full border-2 border-[#1a3dc4] text-[#1a3dc4] py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-[#1a3dc4] hover:text-white transition-all duration-300"
  >
    ← Continue Shopping
  </Link>
</div>

                <div className="p-4 bg-[#1a3dc4]/5 rounded-xl border border-[#1a3dc4]/10">
                  <p className="text-xs text-muted-foreground mb-2">
                    {subtotal >= 500000 ? '🎉 Free delivery applied!' : `✓ Free delivery on orders over ₦500,000`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ✓ 7-day return guarantee on all items
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-primary/10"
          >
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore our collection of premium gadgets and add your favorites to get started.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#1a3dc4] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a3dc4]/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
            >
              Start Shopping
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, ArrowRightLeft, ShieldCheck, Truck, RotateCcw, Star, ChevronRight } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
  const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');
  const index = existing.findIndex((item: any) => item.id === product.id);

  if (index > -1) {
    existing[index].quantity += quantity;
  } else {
    existing.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      brand: product.brand,
      condition: product.condition,
      quantity,
    });
  }

  localStorage.setItem('gg_cart', JSON.stringify(existing));
  window.dispatchEvent(new Event('cartUpdated'));

  toast.success(`${product.name} added to cart!`, {
    position: 'top-right',
    autoClose: 2000,
  });
};

  // Mock product data
  const product = {
    id: id || '1',
    name: 'iPhone 15 Pro Max',
    price: 1450000,
    brand: 'Apple',
    category: 'Phones',
    condition: 'New',
    description: 'The iPhone 15 Pro Max is the most powerful iPhone ever, featuring a strong and lightweight titanium design with new contoured edges, a new Action button, powerful camera upgrades, and A17 Pro for next-level performance and mobile gaming.',
    specs: [
      { label: 'Display', value: '6.7-inch Super Retina XDR' },
      { label: 'Processor', value: 'A17 Pro chip' },
      { label: 'Camera', value: '48MP Main | 12MP Ultra Wide | 12MP Telephoto' },
      { label: 'Battery', value: 'Up to 29 hours video playback' },
      { label: 'Storage', value: '256GB, 512GB, 1TB' },
    ],
    images: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    ]
  };

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 pb-24">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-[#1a3dc4]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-[#1a3dc4]">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-3xl border border-primary/5 overflow-hidden p-12">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square bg-white rounded-xl border border-primary/5 overflow-hidden p-4 cursor-pointer hover:border-[#1a3dc4] transition-colors">
                  <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-bold uppercase tracking-wider">{product.brand}</span>
                <span className="px-3 py-1 bg-[#f5a623]/10 text-[#f5a623] rounded-full text-xs font-bold uppercase tracking-wider">{product.condition}</span>
              </div>
              <h1 className="text-4xl font-black text-foreground mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-[#f5a623]">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm text-muted-foreground">(128 Reviews)</span>
              </div>
              <p className="text-3xl font-black text-[#1a3dc4]">{formattedPrice}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Key Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-xl border border-primary/5">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex items-center border border-primary/10 rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-primary/5 transition-colors">-</button>
                <span className="px-6 py-3 font-bold min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-primary/5 transition-colors">+</button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 bg-[#1a3dc4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="p-4 border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors text-muted-foreground hover:text-[#1a3dc4]">
                <ArrowRightLeft size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#1a3dc4]" size={24} />
                <div className="text-xs">
                  <p className="font-bold">1 Year Warranty</p>
                  <p className="text-muted-foreground">Official coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-[#1a3dc4]" size={24} />
                <div className="text-xs">
                  <p className="font-bold">Free Delivery</p>
                  <p className="text-muted-foreground">Within Lagos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="text-[#1a3dc4]" size={24} />
                <div className="text-xs">
                  <p className="font-bold">7-Day Return</p>
                  <p className="text-muted-foreground">Easy exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
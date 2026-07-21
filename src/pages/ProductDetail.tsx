import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { ALL_PRODUCTS } from '../data/products';
import { formatPrice } from '../data/types';
import { ShoppingCart, ArrowRightLeft, ShieldCheck, Truck, RotateCcw, Star, ChevronRight, Check, Heart, Share2 } from 'lucide-react';
import { toast } from 'react-toastify';

// ── helpers ──────────────────────────────────────────────────────────────────
function isLight(hex: string): boolean {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(() => {
    const wl = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
    return wl.some((i: any) => i.id === (ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0]).id);
  });

  // Review state
  interface Review { author: string; rating: number; text: string; date: string; }
  const storageKey = `gg_reviews_${id}`;
  const [reviews, setReviews] = useState<Review[]>(() => JSON.parse(localStorage.getItem(`gg_reviews_${id}`) || '[]'));
  const [reviewForm, setReviewForm] = useState({ author: '', rating: 5, text: '' });
  const [reviewOpen, setReviewOpen] = useState(false);

  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];
  const related = ALL_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // ── Recently Viewed tracking ─────────────────────────
  useEffect(() => {
    const key = 'gg_recently_viewed';
    const existing: string[] = JSON.parse(localStorage.getItem(key) || '[]');
    const updated = [product.id, ...existing.filter(i => i !== product.id)].slice(0, 8);
    localStorage.setItem(key, JSON.stringify(updated));
  }, [product.id]);

  const recentlyViewedIds: string[] = JSON.parse(localStorage.getItem('gg_recently_viewed') || '[]');
  const recentlyViewed = recentlyViewedIds
    .filter(rid => rid !== product.id)
    .map(rid => ALL_PRODUCTS.find(p => p.id === rid))
    .filter(Boolean)
    .slice(0, 4) as typeof ALL_PRODUCTS;

  // ── Social share ─────────────────────────────────────
  const shareUrl = window.location.href;
  const shareText = `Check out ${product.name} at Gabby's Gadget! ${shareUrl}`;
  const waShare  = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const twShare  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  // Active image cycles through available images when a colour is selected
  const activeImage = product.images.length > 1
    ? selectedColorIndex % product.images.length
    : 0;

  const selectedVariant = product.storageVariants[selectedStorageIndex];
  const selectedColor   = product.colors[selectedColorIndex];
  const currentPrice    = selectedVariant?.price ?? null;

  // Tint colour for the image container background
  const tintHex = selectedColor?.hex ?? '#F9FAFB';
  const tintBg  = `${tintHex}22`; // ~13% opacity

  const handleColorSelect = (ci: number) => {
    setSelectedColorIndex(ci);
  };

  const handleAddToCart = () => {
    if (!currentPrice) {
      toast.info('Please contact us for pricing on this variant.', { position: 'top-right' });
      return;
    }
    const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');
    const cartId = `${product.id}-${selectedVariant.storage}-${selectedColor?.name ?? ''}`;
    const index = existing.findIndex((item: any) => item.id === cartId);

    if (index > -1) {
      existing[index].quantity += quantity;
    } else {
      existing.push({
        id: cartId,
        name: `${product.name} ${selectedVariant.storage}${selectedColor ? ` (${selectedColor.name})` : ''}`,
        price: currentPrice,
        image: product.images[activeImage] || product.images[0],
        brand: product.brand,
        condition: product.condition,
        quantity,
      });
    }

    localStorage.setItem('gg_cart', JSON.stringify(existing));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${product.name} ${selectedVariant.storage} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleCompare = () => {
    const existing: any[] = JSON.parse(localStorage.getItem('gg_compare') || '[]');
    const alreadyIn = existing.findIndex((p: any) => p.id === product.id) > -1;

    if (alreadyIn) {
      localStorage.setItem('gg_compare', JSON.stringify(existing.filter((p: any) => p.id !== product.id)));
      toast.info('Removed from comparison.', { position: 'top-right', autoClose: 2000 });
    } else if (existing.length >= 3) {
      toast.warning('You can compare up to 3 products at a time.', { position: 'top-right', autoClose: 2500 });
    } else {
      existing.push({
        id: product.id,
        name: product.name,
        price: currentPrice ?? 0,
        image: product.images[0],
        brand: product.brand,
        condition: product.condition,
        category: product.category,
      });
      localStorage.setItem('gg_compare', JSON.stringify(existing));
      toast.success('Added to comparison! Go to Compare.', { position: 'top-right', autoClose: 2500 });
    }
  };

  // Base price for showing +/- diff
  const basePrice = product.storageVariants.find(v => v.price !== null)?.price ?? null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Per-product SEO */}
      <SEO
        title={product.name}
        description={`Buy ${product.name} (${product.condition}) at Gabby's Gadget Nigeria. ${product.description?.slice(0, 100)}...`}
        image={product.images[0]}
      />

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
          {/* ── Image Gallery ─────────────────────────────────── */}
          <div className="space-y-4">
            {/* Main image with colour-tinted background */}
            <div
              className="aspect-square rounded-3xl border border-primary/5 overflow-hidden p-10 transition-all duration-500"
              style={{ background: `linear-gradient(135deg, ${tintHex}18 0%, ${tintBg} 100%)` }}
            >
              <img
                key={activeImage}
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-500 animate-fadeIn"
              />
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColorIndex(i % product.colors.length)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden p-3 transition-all ${
                      activeImage === i
                        ? 'border-[#1a3dc4] shadow-md shadow-[#1a3dc4]/20'
                        : 'border-primary/5 hover:border-[#1a3dc4]/50'
                    }`}
                    style={{
                      background: activeImage === i ? tintBg : undefined,
                    }}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Colour name label under gallery */}
            {selectedColor && (
              <div className="flex items-center justify-center gap-2 py-2">
                <div
                  className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                  style={{ background: selectedColor.hex }}
                />
                <span className="text-sm font-semibold text-foreground">{selectedColor.name}</span>
              </div>
            )}

            {/* Social share buttons */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="text-xs text-gray-400 font-semibold">Share:</span>
              <a
                href={waShare}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg text-xs font-bold hover:bg-[#25D366]/20 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a
                href={twShare}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 text-gray-700 border border-gray-200 rounded-lg text-xs font-bold hover:bg-black/10 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X / Twitter
              </a>
              <button
                onClick={() => { navigator.clipboard.writeText(shareUrl); toast.success('Link copied!', { position: 'top-right', autoClose: 1500 }); }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-200 transition-all"
              >
                <Share2 size={11} /> Copy Link
              </button>
            </div>
          </div>

          {/* ── Product Info ──────────────────────────────────── */}
          <div className="space-y-7">
            {/* Brand + Condition */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-bold uppercase tracking-wider">{product.brand}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                product.condition === 'New' ? 'bg-green-100 text-green-700' :
                product.condition === 'Used' ? 'bg-blue-100 text-blue-700' :
                'bg-[#f5a623]/10 text-[#f5a623]'
              }`}>{product.condition}</span>
            </div>

            <h1 className="text-4xl font-black text-foreground">{product.name}</h1>

            {/* Stars */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#f5a623]">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-muted-foreground">(128 Reviews)</span>
            </div>

            {/* Price — animated on storage change */}
            <div className="p-5 bg-gray-50 rounded-2xl border border-primary/5">
              {currentPrice ? (
                <>
                  <p className="text-3xl font-black text-[#1a3dc4] transition-all duration-300">
                    {formatPrice(currentPrice)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {product.condition === 'New' ? 'Brand New · In Stock' : `${product.condition} · In Stock`}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-gray-500 italic">Contact for price</p>
                  <p className="text-xs text-muted-foreground mt-1">Reach out via WhatsApp for this variant</p>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Storage selector — shows price per option */}
            {product.storageVariants.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  Storage — <span className="text-[#1a3dc4]">{selectedVariant?.storage}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.storageVariants.map((v, i) => (
                    <button
                      key={v.storage}
                      onClick={() => setSelectedStorageIndex(i)}
                      className={`flex flex-col items-center px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all min-w-[72px] ${
                        selectedStorageIndex === i
                          ? 'border-[#1a3dc4] bg-[#1a3dc4] text-white shadow-md shadow-[#1a3dc4]/20'
                          : v.price
                          ? 'border-primary/15 hover:border-[#1a3dc4] text-foreground bg-white'
                          : 'border-dashed border-gray-200 text-gray-400 bg-gray-50'
                      }`}
                    >
                      <span>{v.storage}</span>
                      <span className={`text-[10px] font-semibold mt-0.5 ${
                        selectedStorageIndex === i ? 'text-white/80' : v.price ? 'text-[#1a3dc4]' : 'text-gray-400'
                      }`}>
                        {v.price
                          ? (i === 0 || !basePrice
                              ? formatPrice(v.price)
                              : `+${formatPrice(v.price - basePrice!)}`)
                          : 'POA'}
                      </span>
                    </button>
                  ))}
                </div>
                {product.storageVariants.length > 1 && basePrice && (
                  <p className="text-[11px] text-muted-foreground mt-2">
                    * Prices shown relative to base ({product.storageVariants[0].storage})
                  </p>
                )}
              </div>
            )}

            {/* Colour selector */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  Colour — <span className="text-[#1a3dc4]">{selectedColor?.name}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => handleColorSelect(i)}
                      className={`relative w-9 h-9 rounded-full border-2 transition-all shadow-sm ${
                        selectedColorIndex === i
                          ? 'border-[#1a3dc4] scale-110 shadow-md'
                          : 'border-transparent hover:border-gray-300 hover:scale-105'
                      }`}
                      style={{ background: c.hex }}
                    >
                      {selectedColorIndex === i && (
                        <Check
                          size={14}
                          className="absolute inset-0 m-auto"
                          color={isLight(c.hex) ? '#000' : '#fff'}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center border border-primary/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-primary/5 transition-colors font-bold text-lg"
                >-</button>
                <span className="px-6 py-3 font-bold min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-primary/5 transition-colors font-bold text-lg"
                >+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1a3dc4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20"
              >
                <ShoppingCart size={20} />
                {currentPrice ? 'Add to Cart' : 'Contact for Price'}
              </button>
              <button
                onClick={handleCompare}
                className="p-4 border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors text-muted-foreground hover:text-[#1a3dc4]"
                title="Add to Compare"
              >
                <ArrowRightLeft size={24} />
              </button>
              <button
                onClick={() => {
                  const existing: any[] = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
                  if (wishlisted) {
                    const updated = existing.filter((i: any) => i.id !== product.id);
                    localStorage.setItem('gg_wishlist', JSON.stringify(updated));
                    setWishlisted(false);
                    toast.info('Removed from wishlist.', { position: 'top-right', autoClose: 1500 });
                  } else {
                    const cartPrice = product.storageVariants.find(v => v.price !== null)?.price ?? 0;
                    existing.push({ id: product.id, name: product.name, brand: product.brand, category: product.category, condition: product.condition, price: cartPrice, image: product.images[0] });
                    localStorage.setItem('gg_wishlist', JSON.stringify(existing));
                    setWishlisted(true);
                    toast.success('Saved to wishlist!', { position: 'top-right', autoClose: 1500 });
                  }
                  window.dispatchEvent(new Event('wishlistUpdated'));
                }}
                className={`p-4 border rounded-xl transition-colors ${
                  wishlisted
                    ? 'border-red-200 bg-red-50 text-red-500'
                    : 'border-primary/10 hover:bg-red-50 hover:border-red-200 text-muted-foreground hover:text-red-500'
                }`}
                title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart size={24} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Trust badges */}
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

            {/* Full Specs */}
            <div className="pt-4">
              <h3 className="font-bold text-foreground mb-4 text-base">Key Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-xl border border-primary/5">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Reviews Section ────────────────────────────── */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-foreground">Customer Reviews</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {reviews.length > 0
                  ? `${reviews.length} review${reviews.length > 1 ? 's' : ''} · ${
                      (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
                    } avg`
                  : 'Be the first to leave a review'}
              </p>
            </div>
            <button
              onClick={() => setReviewOpen(o => !o)}
              className="px-5 py-2.5 bg-[#1a3dc4] text-white text-sm font-bold rounded-xl hover:bg-[#1a3dc4]/90 transition-all"
            >
              {reviewOpen ? 'Cancel' : '+ Write a Review'}
            </button>
          </div>

          {/* Write review form */}
          {reviewOpen && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="font-bold text-foreground mb-4">Your Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Your Name</label>
                  <input
                    type="text"
                    value={reviewForm.author}
                    onChange={e => setReviewForm(f => ({ ...f, author: e.target.value }))}
                    placeholder="e.g. Oluwaseun A."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3dc4]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Rating</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(n => (
                      <button
                        key={n}
                        onClick={() => setReviewForm(f => ({ ...f, rating: n }))}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={24}
                          fill={n <= reviewForm.rating ? '#f5a623' : 'none'}
                          className={n <= reviewForm.rating ? 'text-[#f5a623]' : 'text-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Review</label>
                  <textarea
                    value={reviewForm.text}
                    onChange={e => setReviewForm(f => ({ ...f, text: e.target.value }))}
                    placeholder="Share your experience with this product..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3dc4] resize-none"
                  />
                </div>
                <button
                  onClick={() => {
                    if (!reviewForm.author.trim() || !reviewForm.text.trim()) {
                      toast.error('Please fill in your name and review.', { position: 'top-right' }); return;
                    }
                    const newReview: Review = {
                      author: reviewForm.author.trim(),
                      rating: reviewForm.rating,
                      text: reviewForm.text.trim(),
                      date: new Date().toISOString(),
                    };
                    const updated = [newReview, ...reviews];
                    setReviews(updated);
                    localStorage.setItem(storageKey, JSON.stringify(updated));
                    setReviewForm({ author: '', rating: 5, text: '' });
                    setReviewOpen(false);
                    toast.success('Review submitted!', { position: 'top-right', autoClose: 2000 });
                  }}
                  className="w-full py-3 bg-[#1a3dc4] text-white font-bold rounded-xl text-sm hover:bg-[#1a3dc4]/90 transition-all"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}

          {/* Reviews list */}
          {reviews.length === 0 ? (
            <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl">
              <Star size={36} className="text-gray-200 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No reviews yet. Be the first!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-foreground text-sm">{r.author}</p>
                      <p className="text-[10px] text-gray-400">{new Date(r.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(n => (
                        <Star key={n} size={13} fill={n <= r.rating ? '#f5a623' : 'none'} className={n <= r.rating ? 'text-[#f5a623]' : 'text-gray-200'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                  <span className="inline-block mt-2 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">✓ Verified Purchase</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-foreground">You May Also Like</h2>
              <Link to="/products" className="text-[#1a3dc4] font-bold text-sm hover:underline">See all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-foreground">Recently Viewed</h2>
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
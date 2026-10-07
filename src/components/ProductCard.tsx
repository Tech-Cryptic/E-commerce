import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRightLeft, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import type { Product } from '../data/types';
import { getMinPrice, getMaxPrice, formatPrice } from '../data/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, brand, category, condition, images, storageVariants, colors } = product;

  const minPrice = getMinPrice(product);
  const maxPrice = getMaxPrice(product);
  const hasRange = maxPrice !== null && minPrice !== null && minPrice !== maxPrice;
  const cartPrice = storageVariants.find(v => v.price !== null)?.price ?? 0;

  const [wishlisted, setWishlisted] = useState(() => {
    const wl = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
    return wl.some((i: any) => i.id === id);
  });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');
    const index = existing.findIndex((item: any) => item.id === id);
    if (index > -1) {
      existing[index].quantity += 1;
    } else {
      existing.push({ id, name, price: cartPrice, image: images[0], brand, condition, quantity: 1 });
    }
    localStorage.setItem('gg_cart', JSON.stringify(existing));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${name} added to cart!`, { position: 'top-right', autoClose: 2000 });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const existing: any[] = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
    if (wishlisted) {
      localStorage.setItem('gg_wishlist', JSON.stringify(existing.filter((i: any) => i.id !== id)));
      setWishlisted(false);
      toast.info(`Removed from wishlist.`, { position: 'top-right', autoClose: 1500 });
    } else {
      existing.push({ id, name, brand, category, condition, price: cartPrice, image: images[0] });
      localStorage.setItem('gg_wishlist', JSON.stringify(existing));
      setWishlisted(true);
      toast.success(`Saved to wishlist!`, { position: 'top-right', autoClose: 1500 });
    }
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const existing: any[] = JSON.parse(localStorage.getItem('gg_compare') || '[]');
    const alreadyIn = existing.findIndex((p: any) => p.id === id) > -1;
    if (alreadyIn) {
      localStorage.setItem('gg_compare', JSON.stringify(existing.filter((p: any) => p.id !== id)));
      toast.info(`${name} removed from comparison.`, { position: 'top-right', autoClose: 2000 });
    } else if (existing.length >= 3) {
      toast.warning('You can compare up to 3 products.', { position: 'top-right', autoClose: 2500 });
    } else {
      existing.push({ id, name, price: cartPrice, image: images[0], brand, condition, category });
      localStorage.setItem('gg_compare', JSON.stringify(existing));
      toast.success(`${name} added to comparison.`, { position: 'top-right', autoClose: 2000 });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* ── Product Image Area ─────────────────────────────────────── */}
      <Link to={`/product/${id}`} className="block relative bg-[#f8f8f8]" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={images[0]}
          alt={name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800';
          }}
          className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-400"
        />

        {/* Badges — top left, stacked, black pill style like Revenes */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {condition === 'New' && (
            <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              New
            </span>
          )}
          {condition === 'UK Used' && (
            <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              UK Used
            </span>
          )}
          {condition === 'Used' && (
            <span className="bg-gray-700 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Used
            </span>
          )}
          {minPrice !== null && maxPrice !== null && minPrice < maxPrice && (
            <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              On Sale
            </span>
          )}
        </div>

        {/* Wishlist heart — top right, always visible on mobile */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={15}
            fill={wishlisted ? '#ef4444' : 'none'}
            className={wishlisted ? 'text-red-500' : 'text-gray-400'}
          />
        </button>
      </Link>

      {/* ── Card Info ──────────────────────────────────────────────── */}
      <div className="p-3 sm:p-4">

        {/* Color swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            {colors.slice(0, 5).map(c => (
              <div
                key={c.name}
                title={c.name}
                className="w-3.5 h-3.5 rounded-full border border-white shadow ring-1 ring-gray-200"
                style={{ background: c.hex }}
              />
            ))}
            {colors.length > 5 && (
              <span className="text-[10px] text-gray-400 font-semibold">+{colors.length - 5}</span>
            )}
          </div>
        )}

        {/* Name */}
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-1 group-hover:text-[#1a3dc4] transition-colors">
            {name}
          </h3>
        </Link>

        {/* Price range — bold, Revenes-style */}
        <div className="mb-3">
          {!minPrice && !maxPrice ? (
            <span className="text-sm text-gray-400 italic">Contact for price</span>
          ) : hasRange ? (
            <p className="text-sm font-black text-gray-900 leading-tight">
              {formatPrice(minPrice!)}
              <span className="text-gray-400 font-semibold"> – </span>
              {formatPrice(maxPrice!)}
            </p>
          ) : (
            <p className="text-sm font-black text-gray-900 leading-tight">
              {formatPrice(minPrice!)}
            </p>
          )}
        </div>

        {/* Action row: Add to Cart + Compare */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#1a3dc4] hover:bg-[#f5a623] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors duration-200"
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>
          <button
            onClick={handleCompare}
            title="Compare"
            className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-[#1a3dc4] hover:text-[#1a3dc4] transition-colors text-gray-400 flex-shrink-0"
          >
            <ArrowRightLeft size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
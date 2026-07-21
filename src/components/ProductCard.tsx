import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRightLeft, Star, Heart } from 'lucide-react';
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

  // Use first priced variant as cart price
  const cartPrice = storageVariants.find(v => v.price !== null)?.price ?? 0;

  // Wishlist state
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
      existing.push({
        id,
        name,
        price: cartPrice,
        image: images[0],
        brand,
        condition,
        quantity: 1,
      });
    }

    localStorage.setItem('gg_cart', JSON.stringify(existing));
    window.dispatchEvent(new Event('cartUpdated'));

    toast.success(`${name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const existing: any[] = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
    if (wishlisted) {
      const updated = existing.filter((i: any) => i.id !== id);
      localStorage.setItem('gg_wishlist', JSON.stringify(updated));
      setWishlisted(false);
      toast.info(`${name} removed from wishlist.`, { position: 'top-right', autoClose: 1500 });
    } else {
      existing.push({ id, name, brand, category, condition, price: cartPrice, image: images[0] });
      localStorage.setItem('gg_wishlist', JSON.stringify(existing));
      setWishlisted(true);
      toast.success(`${name} saved to wishlist!`, { position: 'top-right', autoClose: 1500 });
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
      toast.warning('You can compare up to 3 products at a time.', { position: 'top-right', autoClose: 2500 });
    } else {
      existing.push({ id, name, price: cartPrice, image: images[0], brand, condition, category });
      localStorage.setItem('gg_compare', JSON.stringify(existing));
      toast.success(`${name} added to comparison.`, { position: 'top-right', autoClose: 2000 });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />

        {/* Condition badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            condition === 'New' ? 'bg-green-100 text-green-700' :
            condition === 'Used' ? 'bg-blue-100 text-blue-700' :
            'bg-[#f5a623] text-white'
          }`}>
            {condition}
          </span>
        </div>

        {/* Color dots */}
        {colors.length > 1 && (
          <div className="absolute top-4 right-4 flex gap-1 z-10">
            {colors.slice(0, 4).map(c => (
              <div
                key={c.name}
                title={c.name}
                className="w-3 h-3 rounded-full border border-white/60 shadow-sm"
                style={{ background: c.hex }}
              />
            ))}
            {colors.length > 4 && (
              <div className="w-3 h-3 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-[6px] font-bold text-gray-500">+{colors.length - 4}</span>
              </div>
            )}
          </div>
        )}

        {/* Add to Cart + Wishlist hover overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent z-10">
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#1a3dc4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#f5a623] transition-colors"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              className="w-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors"
              title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <Heart size={16} fill={wishlisted ? '#ef4444' : 'none'} className={wishlisted ? 'text-red-500' : 'text-gray-500'} />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-[#1a3dc4] uppercase tracking-widest">{brand}</span>
          <div className="flex items-center gap-1 text-[#f5a623]">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-foreground">4.9</span>
          </div>
        </div>

        <Link to={`/product/${id}`}>
          <h3 className="font-bold text-foreground group-hover:text-[#1a3dc4] transition-colors line-clamp-1 mb-1">{name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-4">{category}</p>

        <div className="flex items-end justify-between">
          <div>
            {!minPrice && !maxPrice ? (
              <span className="text-sm font-bold text-gray-400 italic">Contact for price</span>
            ) : (
              <>
                {hasRange ? (
                  <>
                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">From</p>
                    <p className="text-base font-black text-foreground leading-tight">
                      {formatPrice(minPrice!)}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      up to {formatPrice(maxPrice!)}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base font-black text-foreground leading-tight">
                      {formatPrice(minPrice!)}
                    </p>
                  </>
                )}
                {storageVariants.length > 1 && (
                  <p className="text-[10px] text-[#1a3dc4] font-bold mt-0.5">
                    {storageVariants.length} storage options
                  </p>
                )}
              </>
            )}
          </div>
          <button
            onClick={handleCompare}
            className="p-2 rounded-lg border border-primary/10 hover:bg-[#1a3dc4]/5 transition-colors text-muted-foreground hover:text-[#1a3dc4]"
            title="Add to Compare"
          >
            <ArrowRightLeft size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
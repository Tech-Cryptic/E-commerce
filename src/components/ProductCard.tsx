import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRightLeft, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  condition: 'New' | 'Used' | 'Swap';
  brand: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, image, category, condition, brand }) => {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // stop it from navigating to product page
    e.stopPropagation();

    // get existing cart or start empty
    const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');

    // check if item already in cart
    const index = existing.findIndex((item: any) => item.id === id);

    if (index > -1) {
      // already in cart — just increase quantity, no limit
      existing[index].quantity += 1;
    } else {
      // new item — add to cart
      existing.push({ id, name, price, image, brand, condition, quantity: 1 });
    }

    localStorage.setItem('gg_cart', JSON.stringify(existing));

    // success toast
    toast.success(`${name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // update cart count in navbar without refreshing
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* condition badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            condition === 'New' ? 'bg-green-100 text-green-700' :
            condition === 'Used' ? 'bg-blue-100 text-blue-700' :
            'bg-[#f5a623] text-white'
          }`}>
            {condition}
          </span>
        </div>

        {/*Add to Cart hover overlay outside the link */}
        <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#1a3dc4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#f5a623] transition-colors"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
        
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

        <div className="flex items-center justify-between">
          <span className="text-lg font-black text-foreground">{formattedPrice}</span>
          <button
            className="p-2 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-[#1a3dc4]"
            title="Compare"
          >
            <ArrowRightLeft size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
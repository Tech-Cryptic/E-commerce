import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Facebook, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3dc4] rounded-full flex items-center justify-center border border-[#f5a623]">
              <span className="text-white font-bold text-[8px] text-center leading-tight">GABBY'S<br />GADGET</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">GABBY'S GADGET</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your premier destination for smart modern gadgets. We buy, sell, and swap the latest tech with guaranteed quality and competitive pricing.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f5a623] transition-colors group">
              <Instagram size={18} className="group-hover:text-black" />
            </a>
            <a href="https://www.facebook.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f5a623] transition-colors group">
              <Facebook size={18} className="group-hover:text-black" />
            </a>
            <a href="https://www.twitter.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f5a623] transition-colors group">
              <Twitter size={18} className="group-hover:text-black" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Categories</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/products?category=Phones" className="hover:text-white transition-colors">iPhones & Samsung</Link></li>
            <li><Link to="/products?category=Laptops" className="hover:text-white transition-colors">Laptops & Workstations</Link></li>
            <li><Link to="/products?category=Gaming" className="hover:text-white transition-colors">Games & Consoles</Link></li>
            <li><Link to="/products?category=Audio" className="hover:text-white transition-colors">Speakers & Headsets</Link></li>
            <li><Link to="/products?category=Watches" className="hover:text-white transition-colors">Smartwatches & Accessories</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/sell" className="hover:text-white transition-colors">Sell Your Gadget</Link></li>
            <li><Link to="/wishlist" className="hover:text-white transition-colors">My Wishlist</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition-colors">Track My Order</Link></li>
            <li><Link to="/sell" className="hover:text-white transition-colors">Swap Policy</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#1a3dc4]" />
              <a href="tel:08132922551" className="hover:text-white transition-colors">08132922551</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#1a3dc4]" />
              <a href="mailto:gabbysgadget@gmail.com" className="hover:text-white transition-colors">gabbysgadget@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-[#1a3dc4]" />
              <a href="https://www.instagram.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@gabbysgadget</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#1a3dc4] mt-1" />
              <span>Computer Village / Ikeja, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Gabby's Gadget. All rights reserved.</p>
        <div className="flex gap-6 items-center">
          <span>Designed for Tech Enthusiasts</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Instagram, Phone, Mail, Facebook, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3dc4] rounded-full flex items-center justify-center border border-[#f5a623]">
              <span className="text-white font-bold text-[8px] text-center leading-tight">GABBY'S<br/>GADGET</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">GABBY'S GADGET</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your premier destination for smart modern gadgets. We buy, sell, and swap the latest tech with guaranteed quality and competitive pricing.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f5a623] transition-colors group">
                <Icon size={18} className="group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Categories</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="/products?cat=phones" className="hover:text-white transition-colors">iPhones & Samsung</a></li>
            <li><a href="/products?cat=laptops" className="hover:text-white transition-colors">Laptops & Workstations</a></li>
            <li><a href="/products?cat=gaming" className="hover:text-white transition-colors">Games & Consoles</a></li>
            <li><a href="/products?cat=audio" className="hover:text-white transition-colors">Speakers & Headsets</a></li>
            <li><a href="/products?cat=accessories" className="hover:text-white transition-colors">iWatches & Accessories</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sell Your Gadget</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Swap Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#f5a623] font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#1a3dc4]" />
              <span>08132922551</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#1a3dc4]" />
              <span>gabbysgadget@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-[#1a3dc4]" />
              <span>@gabbysgadget</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#1a3dc4] mt-1" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Gabby's Gadget. All rights reserved.</p>
        <div className="flex gap-6">
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
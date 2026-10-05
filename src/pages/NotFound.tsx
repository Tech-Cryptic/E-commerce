import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Home, ShoppingBag, ArrowLeft, Smartphone } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist on Gabby's Gadget." />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#1a3dc4]/10 text-[#1a3dc4] font-black text-4xl mb-8 border border-[#1a3dc4]/20 shadow-xl shadow-[#1a3dc4]/5">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-base mb-8 max-w-md mx-auto leading-relaxed">
            Sorry, we couldn&apos;t find the gadget or page you were looking for. It may have been moved, renamed, or no longer exists.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a3dc4] hover:bg-[#1532a8] text-white font-bold rounded-2xl shadow-lg shadow-[#1a3dc4]/20 transition-all hover:scale-[1.02] text-sm"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-[#1a3dc4] text-foreground hover:text-[#1a3dc4] font-bold rounded-2xl shadow-sm transition-all text-sm"
            >
              <ShoppingBag size={16} />
              Browse All Gadgets
            </Link>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Popular Destinations
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/products?category=Phones" className="text-muted-foreground hover:text-[#1a3dc4] font-medium py-1 transition-colors flex items-center gap-2">
                <Smartphone size={14} className="text-[#1a3dc4]" /> Smartphones
              </Link>
              <Link to="/products?category=Laptops" className="text-muted-foreground hover:text-[#1a3dc4] font-medium py-1 transition-colors flex items-center gap-2">
                💻 Laptops & MacBooks
              </Link>
              <Link to="/products?filter=swap" className="text-muted-foreground hover:text-[#1a3dc4] font-medium py-1 transition-colors flex items-center gap-2">
                🔄 Swap / Trade-in
              </Link>
              <Link to="/sell" className="text-muted-foreground hover:text-[#1a3dc4] font-medium py-1 transition-colors flex items-center gap-2">
                💰 Sell Your Gadget
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
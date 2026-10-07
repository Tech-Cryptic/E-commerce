import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, LogOut, Heart, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [currentUser, setCurrentUser] = useState<{ fullName: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Compare', path: '/compare' },
    { name: 'Sell/Swap', path: '/sell' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const updateCount = () => {
      const loggedIn = localStorage.getItem('gg_logged_in');
      const user = localStorage.getItem('gg_current_user');
      if (loggedIn === 'true' && user) {
        setCurrentUser(JSON.parse(user));
      } else {
        setCurrentUser(null);
      }

      const cart = localStorage.getItem('gg_cart');
      if (cart) {
        const items = JSON.parse(cart);
        const total = items.reduce((sum: number, item: any) => sum + item.quantity, 0);
        setCartCount(total);
      } else {
        setCartCount(0);
      }

      const wl = JSON.parse(localStorage.getItem('gg_wishlist') || '[]');
      setWishlistCount(wl.length);
    };

    updateCount();
    window.addEventListener('cartUpdated', updateCount);
    window.addEventListener('wishlistUpdated', updateCount);
    return () => {
      window.removeEventListener('cartUpdated', updateCount);
      window.removeEventListener('wishlistUpdated', updateCount);
    };
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('gg_logged_in');
    localStorage.removeItem('gg_current_user');
    setCurrentUser(null);
    setIsOpen(false);
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const firstName = currentUser?.fullName?.split(' ')[0] || '';

  return (
    <>
      {/* ── Announcement bar ─────────────────────────────────────────────── */}
      <div className="w-full bg-[#0a0a0a] text-white py-2 px-4 text-center text-[11px] font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse inline-block" />
        BEST PRICES ALWAYS · Same-Day Delivery Within Lagos
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse inline-block" />
        {/* Social icons — desktop only */}
        <div className="absolute right-4 hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a623] transition-colors">
            <Instagram size={13} />
          </a>
          <a href="https://wa.me/2348132922551" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a623] transition-colors">
            <MessageCircle size={13} />
          </a>
        </div>
      </div>

      {/* ── Main header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">

        {/* Top row: Logo | Desktop nav | Icons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-[#1a3dc4] rounded-full flex items-center justify-center border-2 border-[#f5a623]">
              <span className="text-white font-black text-[8px] text-center leading-tight">GG</span>
            </div>
            <span className="font-black text-[#1a3dc4] text-lg tracking-tight hidden sm:block">GABBY'S GADGET</span>
            <span className="font-black text-[#1a3dc4] text-base tracking-tight sm:hidden">GABBY'S</span>
          </Link>

          {/* Desktop: centre nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors relative py-1 group ${
                  isActive(link.path) ? 'text-[#1a3dc4]' : 'text-gray-600 hover:text-[#1a3dc4]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f5a623] transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">

            {/* Desktop search input */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2 gap-2 w-52 hover:border-[#1a3dc4]/50 transition-colors focus-within:border-[#1a3dc4] focus-within:ring-1 focus-within:ring-[#1a3dc4]/20">
              <Search size={15} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </form>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#f5a623] text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account — desktop only */}
            {currentUser ? (
              <div className="hidden md:flex items-center gap-1">
                <Link
                  to="/account"
                  className="flex items-center gap-1.5 bg-[#1a3dc4]/10 text-[#1a3dc4] px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#1a3dc4]/20 transition-all"
                >
                  <User size={15} /> Hi, {firstName}
                </Link>
                <button onClick={handleLogout} className="p-2 rounded-full hover:bg-red-50 transition-colors text-gray-400 hover:text-red-500" title="Logout">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-1.5 bg-[#1a3dc4] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#1a3dc4]/90 transition-all"
              >
                <User size={15} /> Sign In
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile search bar — always visible on mobile, below header row ── */}
        <div className="md:hidden px-4 pb-3 pt-0">
          <form onSubmit={handleSearch} className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2.5 border border-gray-200 focus-within:border-[#1a3dc4]/40 focus-within:bg-white transition-all">
            <input
              ref={searchRef}
              type="text"
              placeholder="Find your dream device..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button type="submit" className="text-gray-500 hover:text-[#1a3dc4] transition-colors flex-shrink-0">
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* ── Mobile slide-down menu ─────────────────────────────────────── */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold py-3 px-3 rounded-xl transition-colors ${
                    isActive(link.path)
                      ? 'text-[#1a3dc4] bg-[#1a3dc4]/8'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 pt-3 border-t border-gray-100">
                {currentUser ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/account"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-[#1a3dc4] font-bold py-2 px-3 rounded-xl hover:bg-[#1a3dc4]/8 transition-colors"
                    >
                      <User size={18} /> Hi, {firstName}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-500 font-bold py-2 px-3 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[#1a3dc4] text-white font-bold py-3 rounded-xl hover:bg-[#1a3dc4]/90 transition-colors"
                  >
                    <User size={18} /> Sign In
                  </Link>
                )}
              </div>

              {/* Social links in mobile menu */}
              <div className="flex items-center gap-4 px-3 pt-3 mt-2 border-t border-gray-100">
                <a href="https://www.instagram.com/gabbysgadget" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a3dc4] transition-colors">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://wa.me/2348132922551" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
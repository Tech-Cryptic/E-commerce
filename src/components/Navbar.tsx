import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, LogOut, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [currentUser, setCurrentUser] = useState<{ fullName: string } | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Compare', path: '/compare' },
    { name: 'Sell/Swap', path: '/sell' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // check login status and cart count every time page changes
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

  // get first name only for display
  const firstName = currentUser?.fullName?.split(' ')[0] || '';

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#1a3dc4] rounded-full flex items-center justify-center border-2 border-[#f5a623] transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-xs text-center leading-tight">GABBY'S<br/>GADGET</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-[#1a3dc4] tracking-tight">GABBY'S GADGET</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Smart modern gadgets...</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all hover:text-[#1a3dc4] relative py-2 group ${
                isActive(link.path) ? 'text-[#1a3dc4]' : 'text-foreground/70'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f5a623] transition-transform duration-300 ${
                isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/products?search=${searchQuery.trim()}`;
                    setSearchOpen(false);
                    setSearchQuery('');
                  }
                  if (e.key === 'Escape') {
                    setSearchOpen(false);
                    setSearchQuery('');
        }
      }}
      className="w-48 md:w-64 px-4 py-2 text-sm border border-[#1a3dc4]/30 rounded-full focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all bg-background"
    />
  )}
  <button
    onClick={() => {
      if (searchOpen && searchQuery.trim()) {
        window.location.href = `/products?search=${searchQuery.trim()}`;
        setSearchOpen(false);
        setSearchQuery('');
      } else {
        setSearchOpen(!searchOpen);
      }
    }}
    className="p-2 hover:bg-accent rounded-full transition-colors text-foreground/70 ml-1"
  >
    <Search size={20} />
  </button>
</div>

          {/* Wishlist */}
          <Link to="/wishlist" className="p-2 hover:bg-accent rounded-full transition-colors text-foreground/70 relative">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="p-2 hover:bg-accent rounded-full transition-colors text-foreground/70 relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#f5a623] text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth area — changes based on login state */}
          {currentUser ? (
            // LOGGED IN — show name + logout
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/account"
                className="flex items-center gap-2 bg-[#1a3dc4]/10 text-[#1a3dc4] border border-[#1a3dc4]/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1a3dc4]/20 transition-all"
              >
                <User size={16} />
                Hi, {firstName}
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-red-50 rounded-full transition-colors text-gray-400 hover:text-red-500"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            // NOT LOGGED IN — show Sign In button
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 bg-[#1a3dc4] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a3dc4]/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              <User size={18} />
              Sign In
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-primary/10 p-6 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${isActive(link.path) ? 'text-[#1a3dc4]' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-primary/10" />
            {currentUser ? (
              <>
                <Link to="/account" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-[#1a3dc4] font-bold">
                  <User size={20} /> Hi, {firstName}
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-bold">
                  <LogOut size={20} /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-[#1a3dc4] font-bold">
                <User size={20} /> Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
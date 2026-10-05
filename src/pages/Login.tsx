import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../config/api';
import { Eye, EyeOff, MessageCircle, ArrowRight } from 'lucide-react';

export default function Login() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isCheckoutRedirect = localStorage.getItem('gg_redirect') === '/checkout';

  // ---- particle animation ----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#f5a623';
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(26, 61, 196, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ---- form logic ----
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Invalid email or password. Please try again.');
        setLoading(false);
        return;
      }

      // success — save user to localStorage
      localStorage.setItem('gg_logged_in', 'true');
      localStorage.setItem('gg_current_user', JSON.stringify(data.user));

      setLoading(false);

      const redirect = localStorage.getItem('gg_redirect') || '/';
      localStorage.removeItem('gg_redirect');
      navigate(redirect);

    } catch (err) {
      setError('Unable to reach server. If issues persist, please contact our WhatsApp support.');
      setLoading(false);
    }
  };

  const handleGuestCheckout = () => {
    const guestUser = {
      id: 'guest_' + Date.now(),
      fullName: 'Guest Shopper',
      email: formData.email || 'guest@gabbysgadget.com',
      phone: '',
      isGuest: true,
    };
    localStorage.setItem('gg_logged_in', 'true');
    localStorage.setItem('gg_current_user', JSON.stringify(guestUser));
    localStorage.removeItem('gg_redirect');
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a3dc422_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#f5a62311_0%,transparent_60%)]" />

      {/* card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 relative z-10 shadow-2xl">

        {/* logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-4">
            <div className="w-14 h-14 bg-[#1a3dc4] rounded-full flex items-center justify-center border-2 border-[#f5a623] shadow-lg shadow-[#1a3dc4]/40 hover:scale-105 transition-transform">
              <span className="text-white font-bold text-[10px] text-center leading-tight">GABBY'S<br/>GADGET</span>
            </div>
          </Link>
          <h1 className="text-3xl font-black text-white mb-1">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Sign in to your tech account</p>
        </div>

        {/* error */}
        {error && (
          <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs sm:text-sm text-center leading-relaxed">
            {error}
          </div>
        )}

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest mb-1.5 block">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-gray-400 uppercase tracking-widest block">Password</label>
              <a
                href={`https://wa.me/2348132922551?text=${encodeURIComponent("Hi Gabby's Gadget, I forgot my account password and need help resetting it.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#f5a623] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-11 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f5a623] focus:ring-1 focus:ring-[#f5a623] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#1a3dc4] hover:bg-[#1a3dc4]/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#1a3dc4]/30 disabled:opacity-50 disabled:cursor-not-allowed mt-2 flex items-center justify-center gap-2 text-sm"
          >
            {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={16} />
          </button>

          {isCheckoutRedirect && (
            <button
              type="button"
              onClick={handleGuestCheckout}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-xl transition-all border border-white/10 text-xs"
            >
              Continue as Guest Checkout →
            </button>
          )}

          <p className="text-center text-gray-500 text-sm pt-2">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#f5a623] font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
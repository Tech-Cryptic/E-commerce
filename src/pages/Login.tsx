import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ---- same particle animation ----
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
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

    function draw() {
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
      requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || 'Login failed. Please try again.');
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
    setError('Cannot connect to server. Make sure Flask is running.');
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a3dc422_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#f5a62311_0%,transparent_60%)]" />

      {/* card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 relative z-10 shadow-2xl">

        {/* logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-4">
            <div className="w-14 h-14 bg-[#1a3dc4] rounded-full flex items-center justify-center border-2 border-[#f5a623] shadow-lg shadow-[#1a3dc4]/40">
              <span className="text-white font-bold text-[10px] text-center leading-tight">GABBY'S<br/>GADGET</span>
            </div>
          </Link>
          <h1 className="text-3xl font-black text-white mb-1">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Sign in to your tech account</p>
        </div>

        {/* error */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* form */}
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest mb-1 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f5a623] focus:ring-1 focus:ring-[#f5a623] transition-all"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3.5 bg-[#1a3dc4] hover:bg-[#1a3dc4]/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#1a3dc4]/30 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>

          <p className="text-center text-gray-500 text-sm pt-2">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#f5a623] font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
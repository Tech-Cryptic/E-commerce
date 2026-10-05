import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ShieldCheck, RefreshCw, Truck, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title="About Us - Gabby's Gadget"
        description="Learn about Gabby's Gadget, Nigeria's most trusted gadget retailer for smartphones, laptops, gaming gear, swaps, and authentic electronics."
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Our Story & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6 tracking-tight">
            Nigeria's Most Trusted Tech & Gadget Destination
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gabby's Gadget was founded with a singular purpose: to make genuine, high-performance electronics accessible, affordable, and worry-free for every tech lover across Nigeria.
          </p>
        </div>

        {/* Core Value Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">100% Authentic Devices</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every device is factory genuine and rigorously inspected across 30+ hardware and software checkpoints.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#f5a623]/10 text-[#f5a623] rounded-2xl flex items-center justify-center mb-4">
              <RefreshCw size={26} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Seamless Buy & Swap</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trade in your older phones and laptops for immediate store credit toward your dream upgrade.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-4">
              <Award size={26} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Guaranteed Warranty</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enjoy comprehensive warranty protection: 1-year brand warranty on new devices and 90-day store coverage on certified used items.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-4">
              <Truck size={26} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Nationwide Express</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fast, insured dispatch to Lagos, Abuja, Port Harcourt, and all 36 states across Nigeria.
            </p>
          </div>
        </div>

        {/* Store Location & Direct Contact */}
        <div className="bg-gradient-to-br from-[#1a3dc4] to-[#0d2275] rounded-3xl text-white p-8 sm:p-12 mb-16 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest block mb-2">
                Visit Our Physical Store
              </span>
              <h2 className="text-3xl font-black mb-4">Gabby's Gadget Experience Center</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Come test drive the latest flagships, chat with our technicians, or get an on-the-spot physical device inspection for swaps and trades.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#f5a623] flex-shrink-0 mt-0.5" />
                  <span>Shop B12, Digital Square, Computer Village, Ikeja, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#f5a623] flex-shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 6:30 PM (WAT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#f5a623] flex-shrink-0" />
                  <a href="tel:+2348132922551" className="hover:underline">+234 813 292 2551</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#f5a623] flex-shrink-0" />
                  <a href="mailto:support@gabbysgadget.com" className="hover:underline">support@gabbysgadget.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <h3 className="font-bold text-xl mb-2">Ready to Upgrade?</h3>
              <p className="text-white/80 text-xs mb-6">
                Browse our hand-picked inventory or submit your device details for trade-in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="flex-1 py-3 bg-[#f5a623] hover:bg-[#e09419] text-white font-bold rounded-xl text-xs transition-all shadow-md"
                >
                  Browse Catalog
                </Link>
                <Link
                  to="/sell"
                  className="flex-1 py-3 bg-white hover:bg-gray-100 text-[#1a3dc4] font-bold rounded-xl text-xs transition-all shadow-md"
                >
                  Sell / Swap Device
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

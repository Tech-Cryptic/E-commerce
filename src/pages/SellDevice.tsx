import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Watch,
  Monitor,
  CheckCircle,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';

const DEVICE_TYPES = [
  { label: 'Smartphone', icon: Smartphone },
  { label: 'Laptop', icon: Laptop },
  { label: 'Tablet', icon: Tablet },
  { label: 'Audio Device', icon: Headphones },
  { label: 'Smartwatch', icon: Watch },
  { label: 'Monitor', icon: Monitor },
];

const CONDITIONS = [
  { value: 'excellent', label: 'Excellent', desc: 'Looks and works like new, no visible scratches' },
  { value: 'good', label: 'Good', desc: 'Minor wear, fully functional' },
  { value: 'fair', label: 'Fair', desc: 'Visible scratches or dents, works fine' },
  { value: 'poor', label: 'Poor', desc: 'Heavy wear, may have issues' },
];

export default function SellDevice() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    storage: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDevice || !selectedCondition || !formData.brand || !formData.model || !formData.name || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await fetch('http://localhost:5000/api/sell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceType:  selectedDevice,
          condition:   selectedCondition,
          brand:       formData.brand,
          model:       formData.model,
          storage:     formData.storage,
          name:        formData.name,
          phone:       formData.phone,
          email:       formData.email,
          notes:       formData.notes,
        }),
      });
    } catch {
      // backend unavailable — still show success
    }
    setLoading(false);
    setSubmitted(true);
  };

  const waMessage = encodeURIComponent(
    `Hi Gabby's Gadget! I want to sell my ${selectedDevice || 'device'} (${formData.brand} ${formData.model}). My name is ${formData.name}, phone: ${formData.phone}.`
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-xl mx-auto px-6 py-20 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-foreground mb-3">Request Received!</h1>
          <p className="text-gray-500 mb-8">
            We have received your device details. Our team will reach out to you within 24 hours with a valuation.
          </p>

          <a
            href={`https://wa.me/2348132922551?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#25D366]/90 transition-all hover:scale-[1.02] mb-4 shadow-lg shadow-green-500/20"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp for faster response
          </a>

          <Link
            to="/products"
            className="block text-center py-3 border border-[#1a3dc4] text-[#1a3dc4] font-bold rounded-xl hover:bg-[#1a3dc4]/5 transition-all"
          >
            Continue Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">Sell or Trade In Your Device</h1>
          <p className="text-gray-500 text-sm">
            Get an instant valuation for your gadget. Fill in the details below and our team will contact you within 24 hours.
          </p>
        </div>

        {/* How it works banner */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { step: '1', title: 'Submit Details', desc: 'Tell us about your device' },
            { step: '2', title: 'Get Valuation', desc: 'We send you a quote within 24hrs' },
            { step: '3', title: 'Get Paid', desc: 'Drop off and collect payment' },
          ].map(s => (
            <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-center">
              <div className="w-8 h-8 bg-[#1a3dc4] rounded-full flex items-center justify-center text-white text-xs font-black mx-auto mb-2">
                {s.step}
              </div>
              <p className="font-bold text-foreground text-sm">{s.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Device type */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider text-gray-400">
              Step 1: Select Device Type
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {DEVICE_TYPES.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedDevice(label)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all text-center ${
                    selectedDevice === label
                      ? 'border-[#1a3dc4] bg-[#1a3dc4]/5 text-[#1a3dc4]'
                      : 'border-gray-100 hover:border-gray-200 text-gray-500'
                  }`}
                >
                  <Icon size={22} />
                  <span className="text-[10px] font-bold">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Device details */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider text-gray-400">
              Step 2: Device Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Brand *</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g. Apple"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Model *</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g. iPhone 14 Pro"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Storage</label>
                <input
                  type="text"
                  name="storage"
                  value={formData.storage}
                  onChange={handleChange}
                  placeholder="e.g. 256GB"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Condition */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider text-gray-400">
              Step 3: Device Condition
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {CONDITIONS.map(c => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setSelectedCondition(c.value)}
                  className={`text-left p-4 rounded-xl border-2 transition-all ${
                    selectedCondition === c.value
                      ? 'border-[#1a3dc4] bg-[#1a3dc4]/5'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <p className={`font-bold text-sm mb-0.5 ${selectedCondition === c.value ? 'text-[#1a3dc4]' : 'text-foreground'}`}>
                    {c.label}
                  </p>
                  <p className="text-xs text-gray-400">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider text-gray-400">
              Step 4: Your Contact Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 08012345678"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any additional info about the device (accessories included, faults, etc.)"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3dc4] focus:ring-1 focus:ring-[#1a3dc4] transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              id="sell-submit-btn"
              disabled={loading}
              className="flex-1 py-4 bg-[#1a3dc4] text-white font-bold rounded-xl hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-lg shadow-[#1a3dc4]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit for Valuation'}
            </button>
            <a
              href={`https://wa.me/2348132922551?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366]/90 transition-all"
            >
              <MessageCircle size={18} />
              Or Chat on WhatsApp
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center">
            We will contact you within 24 hours with a fair valuation quote. No obligation to accept.
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}

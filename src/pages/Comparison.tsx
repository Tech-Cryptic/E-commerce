import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, ArrowRight, GitCompareArrows, ChevronDown, X, Plus, BarChart3 } from 'lucide-react';
import { toast } from 'react-toastify';
import { APPLE_COMPARE, SAMSUNG_COMPARE, PIXEL_COMPARE } from '../data/comparePhones';
import type { ComparePhone } from '../data/types';
import { formatPrice } from '../data/types';

// ─── Spec rows ────────────────────────────────────────────────────────────────
const SPEC_ROWS: { key: keyof import('../data/types').CompareSpec; label: string }[] = [
  { key: 'display',         label: 'Display' },
  { key: 'screenSize',      label: 'Screen Size' },
  { key: 'processor',       label: 'Processor' },
  { key: 'ram',             label: 'RAM' },
  { key: 'rearCamera',      label: 'Rear Camera' },
  { key: 'frontCamera',     label: 'Front Camera' },
  { key: 'battery',         label: 'Battery' },
  { key: 'charging',        label: 'Charging' },
  { key: 'connectivity',    label: 'Connectivity' },
  { key: 'os',              label: 'Operating System' },
  { key: 'waterResistance', label: 'Water Resistance' },
  { key: 'weight',          label: 'Weight' },
  { key: 'dimensions',      label: 'Dimensions' },
];

const BRAND_OPTIONS = [
  { label: 'Apple iPhone',     phones: APPLE_COMPARE,   brand: 'Apple'   },
  { label: 'Samsung Galaxy S', phones: SAMSUNG_COMPARE, brand: 'Samsung' },
  { label: 'Google Pixel',     phones: PIXEL_COMPARE,   brand: 'Google'  },
];

const brandColors: Record<string, string> = {
  Apple:   '#1C1C1E',
  Samsung: '#1428A0',
  Google:  '#4285F4',
};

type Slot = {
  brandIndex: number | null;
  phone: ComparePhone | null;
  storage: string | null;
  colorIndex: number;
};

function emptySlot(): Slot {
  return { brandIndex: null, phone: null, storage: null, colorIndex: 0 };
}

// ─── Single slot card ─────────────────────────────────────────────────────────
function SlotCard({
  slot, slotIndex, onChange, onRemove, showRemove,
}: {
  slot: Slot;
  slotIndex: number;
  onChange: (updated: Slot) => void;
  onRemove: () => void;
  showRemove: boolean;
}) {
  const brandPhones = slot.brandIndex !== null ? BRAND_OPTIONS[slot.brandIndex].phones : [];
  const storageOpts = slot.phone?.storageOptions ?? [];
  const bgColor     = slot.phone ? (brandColors[slot.phone.brand] ?? '#1a3dc4') : '#1a3dc4';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3" style={{ background: bgColor }}>
        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
          Device {slotIndex + 1}
        </span>
        {showRemove && (
          <button onClick={onRemove} className="text-white/60 hover:text-white transition-colors">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Image preview */}
      <div className="flex items-center justify-center h-44 bg-gradient-to-b from-gray-50 to-white px-8 pt-4">
        {slot.phone ? (
          <img src={slot.phone.image} alt={slot.phone.model} className="h-full object-contain drop-shadow-xl" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <GitCompareArrows size={44} strokeWidth={1} />
            <p className="text-xs font-semibold text-gray-400 text-center">Select a device below</p>
          </div>
        )}
      </div>

      {/* Name label */}
      {slot.phone && (
        <div className="px-5 pb-2 text-center">
          <p className="font-black text-sm text-foreground">{slot.phone.model}</p>
          <p className="text-[10px] text-muted-foreground">{slot.phone.year}</p>
          {slot.phone.colors[slot.colorIndex] && (
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <div className="w-3 h-3 rounded-full border border-gray-200"
                style={{ background: slot.phone.colors[slot.colorIndex].hex }} />
              <span className="text-[10px] text-muted-foreground">
                {slot.phone.colors[slot.colorIndex].name}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Selectors */}
      <div className="p-5 pt-3 border-t border-gray-50 space-y-3 flex-1 flex flex-col justify-end">
        {/* Brand */}
        <div className="relative">
          <select
            value={slot.brandIndex ?? ''}
            onChange={e => {
              const idx = e.target.value === '' ? null : parseInt(e.target.value);
              onChange({ brandIndex: idx, phone: null, storage: null, colorIndex: 0 });
            }}
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
          >
            <option value="">Select Brand</option>
            {BRAND_OPTIONS.map((b, i) => <option key={i} value={i}>{b.label}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Model */}
        {slot.brandIndex !== null && (
          <div className="relative">
            <select
              value={slot.phone?.id ?? ''}
              onChange={e => {
                const found = brandPhones.find(p => p.id === e.target.value) ?? null;
                onChange({ ...slot, phone: found, storage: found?.storageOptions[0]?.storage ?? null, colorIndex: 0 });
              }}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
            >
              <option value="">Select Model</option>
              {brandPhones.map(p => <option key={p.id} value={p.id}>{p.model} ({p.year})</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        )}

        {/* Storage */}
        {slot.phone && storageOpts.length > 1 && (
          <div className="relative">
            <select
              value={slot.storage ?? ''}
              onChange={e => onChange({ ...slot, storage: e.target.value })}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
            >
              {storageOpts.map(v => (
                <option key={v.storage} value={v.storage}>
                  {v.storage}{v.price ? ` — ${formatPrice(v.price)}` : ' (POA)'}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        )}

        {/* Colour swatches */}
        {slot.phone && slot.phone.colors.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {slot.phone.colors.map((c, ci) => (
              <button
                key={c.name}
                title={c.name}
                onClick={() => onChange({ ...slot, colorIndex: ci })}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  slot.colorIndex === ci ? 'border-[#1a3dc4] scale-110' : 'border-transparent hover:border-gray-300'
                }`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Comparison() {
  const [slots, setSlots]       = useState<Slot[]>([emptySlot(), emptySlot()]);
  const [compared, setCompared] = useState(false);

  const updateSlot = (i: number, updated: Slot) =>
    setSlots(prev => prev.map((s, idx) => (idx === i ? updated : s)));

  const addSlot    = () => { if (slots.length < 3) setSlots(prev => [...prev, emptySlot()]); };
  const removeSlot = (i: number) => { setSlots(prev => prev.filter((_, idx) => idx !== i)); setCompared(false); };

  const getPrice = (slot: Slot): number | null => {
    if (!slot.phone || !slot.storage) return null;
    return slot.phone.storageOptions.find(o => o.storage === slot.storage)?.price ?? null;
  };

  const handleCompare = () => {
    const filled = slots.filter(s => s.phone !== null);
    if (filled.length < 2) {
      toast.warning('Please select at least 2 devices to compare.', { position: 'top-right', autoClose: 2500 });
      return;
    }
    setCompared(true);
    setTimeout(() => {
      document.getElementById('spec-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleAddToCart = (slot: Slot) => {
    if (!slot.phone) return;
    const price = getPrice(slot);
    if (!price) {
      toast.info('Contact us for pricing on this variant.', { position: 'top-right', autoClose: 2500 });
      return;
    }
    const colorName = slot.phone.colors[slot.colorIndex]?.name ?? '';
    const cartItem = {
      id: `${slot.phone.id}-${slot.storage}-${colorName}`,
      name: `${slot.phone.model} ${slot.storage}${colorName ? ` (${colorName})` : ''}`,
      price,
      image: slot.phone.image,
      brand: slot.phone.brand,
      condition: 'New' as const,
      quantity: 1,
    };
    const existing = JSON.parse(localStorage.getItem('gg_cart') || '[]');
    const idx = existing.findIndex((item: any) => item.id === cartItem.id);
    if (idx > -1) existing[idx].quantity += 1;
    else existing.push(cartItem);
    localStorage.setItem('gg_cart', JSON.stringify(existing));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${slot.phone.model} added to cart!`, { position: 'top-right', autoClose: 2000 });
  };

  const activePhones = slots.filter(s => s.phone !== null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 pb-24 space-y-12">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <BarChart3 size={13} /> Side-by-Side Compare
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Compare Phones</h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Pick up to 3 devices using the slots below, then hit <strong>Compare</strong> to see a full spec breakdown.
          </p>
        </div>

        {/* ── Slots ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black text-foreground">Choose Your Devices</h2>
            {slots.some(s => s.phone) && (
              <button
                onClick={() => { setSlots([emptySlot(), emptySlot()]); setCompared(false); }}
                className="text-xs text-gray-400 hover:text-red-500 font-semibold transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {slots.map((slot, i) => (
              <SlotCard
                key={i}
                slot={slot}
                slotIndex={i}
                onChange={updated => { updateSlot(i, updated); setCompared(false); }}
                onRemove={() => removeSlot(i)}
                showRemove={slots.length > 2}
              />
            ))}

            {slots.length < 3 && (
              <button
                onClick={addSlot}
                className="bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center py-16 gap-3 hover:border-[#1a3dc4]/50 hover:bg-blue-50/30 transition-all group min-h-[280px]"
              >
                <div className="w-12 h-12 bg-[#1a3dc4]/10 rounded-full flex items-center justify-center group-hover:bg-[#1a3dc4]/20 transition-all">
                  <Plus size={22} className="text-[#1a3dc4]" />
                </div>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-[#1a3dc4] transition-colors">
                  Add a 3rd device
                </span>
              </button>
            )}
          </div>

          {/* Compare button */}
          <div className="flex justify-center">
            <button
              onClick={handleCompare}
              className="px-12 py-4 bg-[#1a3dc4] text-white font-black text-lg rounded-2xl hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.03] shadow-xl shadow-[#1a3dc4]/25 flex items-center gap-3"
            >
              <GitCompareArrows size={22} />
              Compare Now
            </button>
          </div>
        </section>

        {/* ── Spec table — only shown after Compare ─────────── */}
        {compared && activePhones.length >= 2 && (
          <section id="spec-table">
            <h2 className="text-xl font-black text-foreground mb-6">Comparison Results</h2>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-x-auto">

              {/* Product header row */}
              <div
                className="grid divide-x divide-gray-100 min-w-[500px]"
                style={{ gridTemplateColumns: `160px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="p-6 bg-gray-50" />
                {activePhones.map((slot, i) => {
                  const phone = slot.phone!;
                  const color = phone.colors[slot.colorIndex];
                  return (
                    <div key={i} className="p-6 text-center border-b border-gray-100">
                      <div
                        className="w-24 h-24 mx-auto mb-3 flex items-center justify-center rounded-2xl"
                        style={{ background: `linear-gradient(135deg, ${color?.hex ?? '#f0f0f0'}15, ${color?.hex ?? '#f0f0f0'}35)` }}
                      >
                        <img src={phone.image} alt={phone.model} className="h-full object-contain drop-shadow-lg" />
                      </div>
                      {color && (
                        <div className="flex justify-center mb-2">
                          <div className="w-4 h-4 rounded-full border border-gray-200" style={{ background: color.hex }} />
                        </div>
                      )}
                      <p className="font-black text-sm text-foreground">{phone.model}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{slot.storage ?? phone.storageOptions[0]?.storage}</p>
                      <p className="text-xs font-bold mt-0.5" style={{ color: brandColors[phone.brand] ?? '#1a3dc4' }}>
                        {phone.brand} · {phone.year}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Spec rows */}
              {SPEC_ROWS.map((row, ri) => (
                <div
                  key={row.key}
                  className="grid divide-x divide-gray-100 min-w-[500px]"
                  style={{ gridTemplateColumns: `160px repeat(${activePhones.length}, 1fr)` }}
                >
                  <div className={`px-5 py-4 flex items-center ${ri % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}`}>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{row.label}</span>
                  </div>
                  {activePhones.map((slot, ci) => (
                    <div key={ci} className={`px-5 py-4 text-center ${ri % 2 === 0 ? 'bg-gray-50/40' : 'bg-white'}`}>
                      <span className="text-sm font-semibold text-foreground leading-snug">
                        {slot.phone!.specs[row.key] || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Price row */}
              <div
                className="grid divide-x divide-gray-100 border-t-2 border-[#1a3dc4]/10 min-w-[500px]"
                style={{ gridTemplateColumns: `160px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="px-5 py-5 bg-gray-50 flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Price</span>
                </div>
                {activePhones.map((slot, ci) => {
                  const price = getPrice(slot);
                  return (
                    <div key={ci} className="px-5 py-5 text-center bg-[#1a3dc4]/3">
                      {price ? (
                        <p className="text-xl font-black text-[#1a3dc4]">{formatPrice(price)}</p>
                      ) : (
                        <p className="text-sm font-semibold text-gray-400 italic">Contact for price</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">Brand New</p>
                    </div>
                  );
                })}
              </div>

              {/* Add to Cart row */}
              <div
                className="grid divide-x divide-gray-100 border-t border-gray-100 min-w-[500px]"
                style={{ gridTemplateColumns: `160px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="px-5 py-5 bg-white" />
                {activePhones.map((slot, ci) => (
                  <div key={ci} className="px-5 py-5 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleAddToCart(slot)}
                      className="w-full py-3 bg-[#1a3dc4] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-md shadow-[#1a3dc4]/20"
                    >
                      <ShoppingCart size={15} /> Add to Cart
                    </button>
                    <Link
                      to={`/products?search=${encodeURIComponent(slot.phone!.model)}`}
                      className="text-xs text-[#1a3dc4] hover:underline font-semibold flex items-center gap-1"
                    >
                      View in shop <ArrowRight size={11} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-[#1a3dc4] font-bold hover:underline text-sm">
            Browse all products <ArrowRight size={15} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

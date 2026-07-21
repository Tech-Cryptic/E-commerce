import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, ArrowRight, GitCompareArrows, ChevronDown, X, Plus } from 'lucide-react';
import { toast } from 'react-toastify';
import { APPLE_COMPARE, SAMSUNG_COMPARE, PIXEL_COMPARE, ALL_COMPARE_PHONES } from '../data/comparePhones';
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
  { label: 'Apple iPhone', phones: APPLE_COMPARE },
  { label: 'Samsung Galaxy S Series', phones: SAMSUNG_COMPARE },
  { label: 'Google Pixel', phones: PIXEL_COMPARE },
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

// ─── Device card in the browser grid ─────────────────────────────────────────
function DeviceCard({
  phone,
  onAddToCompare,
  isInCompare,
}: {
  phone: ComparePhone;
  onAddToCompare: (phone: ComparePhone, storage: string, colorIndex: number) => void;
  isInCompare: boolean;
}) {
  const [selStorage, setSelStorage] = useState(phone.storageOptions[0]?.storage ?? '');
  const [selColor, setSelColor]   = useState(0);

  const pricedOptions = phone.storageOptions.filter(o => o.price !== null);
  const currentPrice  = phone.storageOptions.find(o => o.storage === selStorage)?.price ?? null;
  const tintHex       = phone.colors[selColor]?.hex ?? '#F9FAFB';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Brand bar */}
      <div
        className="px-4 py-2 flex items-center justify-between"
        style={{ background: brandColors[phone.brand] ?? '#1a3dc4' }}
      >
        <span className="text-white text-[10px] font-black uppercase tracking-widest">{phone.brand}</span>
        <span className="text-white/60 text-[10px]">{phone.year}</span>
      </div>

      {/* Image */}
      <div
        className="flex items-center justify-center h-44 transition-colors duration-300 px-6 pt-4"
        style={{ background: `linear-gradient(135deg, ${tintHex}15 0%, ${tintHex}30 100%)` }}
      >
        <img
          src={phone.image}
          alt={phone.model}
          className="h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <p className="font-black text-sm text-foreground leading-tight">{phone.model}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{phone.specs.display}</p>
        </div>

        {/* Colour swatches */}
        {phone.colors.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {phone.colors.map((c, ci) => (
              <button
                key={c.name}
                title={c.name}
                onClick={() => setSelColor(ci)}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  selColor === ci ? 'border-[#1a3dc4] scale-110' : 'border-transparent hover:border-gray-300'
                }`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        )}

        {/* Storage options */}
        {phone.storageOptions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {phone.storageOptions.map(opt => (
              <button
                key={opt.storage}
                onClick={() => setSelStorage(opt.storage)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                  selStorage === opt.storage
                    ? 'border-[#1a3dc4] bg-[#1a3dc4] text-white'
                    : opt.price
                    ? 'border-gray-200 text-foreground hover:border-[#1a3dc4]'
                    : 'border-dashed border-gray-200 text-gray-400'
                }`}
              >
                {opt.storage}
              </button>
            ))}
          </div>
        )}

        {/* Pricing */}
        <div className="mt-auto">
          {currentPrice ? (
            <p className="text-base font-black text-[#1a3dc4]">{formatPrice(currentPrice)}</p>
          ) : pricedOptions.length > 0 ? (
            <p className="text-sm font-black text-[#1a3dc4]">
              From {formatPrice(pricedOptions[0].price!)}
            </p>
          ) : (
            <p className="text-xs font-semibold text-gray-400 italic">Contact for price</p>
          )}
          {selStorage && (
            <p className="text-[10px] text-muted-foreground mt-0.5">
              {selStorage} · {phone.colors[selColor]?.name ?? ''}
            </p>
          )}
        </div>

        {/* Add to Compare button */}
        <button
          onClick={() => onAddToCompare(phone, selStorage, selColor)}
          disabled={isInCompare}
          className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            isInCompare
              ? 'bg-green-50 text-green-600 border border-green-200 cursor-default'
              : 'bg-[#1a3dc4] text-white hover:bg-[#1a3dc4]/90 hover:scale-[1.02] shadow-md shadow-[#1a3dc4]/20'
          }`}
        >
          {isInCompare ? (
            <><GitCompareArrows size={13} /> In Comparison</>
          ) : (
            <><Plus size={13} /> Add to Compare</>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Slot selector (for the comparison table slots) ──────────────────────────
function PhoneSlotCard({
  slot,
  slotIndex,
  onChange,
  onRemove,
  showRemove,
}: {
  slot: Slot;
  slotIndex: number;
  onChange: (updated: Slot) => void;
  onRemove: () => void;
  showRemove: boolean;
}) {
  const brandPhones = slot.brandIndex !== null ? BRAND_OPTIONS[slot.brandIndex].phones : [];
  const storageOpts = slot.phone?.storageOptions ?? [];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 text-white text-sm font-bold"
        style={{ background: slot.phone ? brandColors[slot.phone.brand] ?? '#1a3dc4' : '#1a3dc4' }}
      >
        <span className="text-xs font-black uppercase tracking-widest">Slot {slotIndex + 1}</span>
        {showRemove && (
          <button onClick={onRemove} className="text-white/70 hover:text-white transition-colors">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Image */}
      <div className="flex items-center justify-center h-48 bg-gradient-to-b from-gray-50 to-white px-8 pt-4">
        {slot.phone ? (
          <img
            src={slot.phone.image}
            alt={slot.phone.model}
            className="h-full object-contain drop-shadow-xl"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <GitCompareArrows size={40} strokeWidth={1} />
            <p className="text-xs font-semibold text-gray-400">Select or add a phone</p>
          </div>
        )}
      </div>

      {slot.phone && (
        <div className="px-5 pb-2 text-center">
          <p className="font-black text-sm text-foreground">{slot.phone.model}</p>
          <p className="text-[10px] text-muted-foreground">{slot.phone.year}</p>
          {slot.phone.colors[slot.colorIndex] && (
            <p className="text-[10px] text-muted-foreground mt-0.5">
              {slot.phone.colors[slot.colorIndex].name}
            </p>
          )}
        </div>
      )}

      {/* Selectors */}
      <div className="p-5 pt-3 border-t border-gray-50 space-y-3">
        {/* Brand */}
        <div className="relative">
          <select
            value={slot.brandIndex ?? ''}
            onChange={e => {
              const idx = e.target.value === '' ? null : parseInt(e.target.value);
              onChange({ brandIndex: idx, phone: null, storage: null, colorIndex: 0 });
            }}
            className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
          >
            <option value="">Select Brand</option>
            {BRAND_OPTIONS.map((b, i) => (
              <option key={i} value={i}>{b.label}</option>
            ))}
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
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
            >
              <option value="">Select Model</option>
              {brandPhones.map(p => (
                <option key={p.id} value={p.id}>{p.model} ({p.year})</option>
              ))}
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
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground focus:outline-none focus:border-[#1a3dc4] transition-all"
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

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Comparison() {
  const [slots, setSlots] = useState<Slot[]>([emptySlot(), emptySlot()]);
  const [brandFilter, setBrandFilter] = useState<'All' | 'Apple' | 'Samsung' | 'Google'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const updateSlot = (i: number, updated: Slot) =>
    setSlots(prev => prev.map((s, idx) => (idx === i ? updated : s)));

  const addSlot = () => { if (slots.length < 3) setSlots(prev => [...prev, emptySlot()]); };
  const removeSlot = (i: number) => setSlots(prev => prev.filter((_, idx) => idx !== i));

  const getPrice = (slot: Slot): number | null => {
    if (!slot.phone || !slot.storage) return null;
    return slot.phone.storageOptions.find(o => o.storage === slot.storage)?.price ?? null;
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

  // Add a device from the browser directly into a comparison slot
  const handleDeviceAddToCompare = (phone: ComparePhone, storage: string, colorIndex: number) => {
    // Find an empty slot first
    const emptyIdx = slots.findIndex(s => s.phone === null);
    // Or find if phone already in a slot
    const existingIdx = slots.findIndex(s => s.phone?.id === phone.id);

    if (existingIdx > -1) {
      toast.info(`${phone.model} is already in the comparison.`, { position: 'top-right', autoClose: 2000 });
      return;
    }
    if (emptyIdx === -1) {
      if (slots.length < 3) {
        // Add a new slot
        const brandIdx = BRAND_OPTIONS.findIndex(b => b.label.toLowerCase().includes(phone.brand.toLowerCase()));
        setSlots(prev => [...prev, {
          brandIndex: brandIdx >= 0 ? brandIdx : null,
          phone,
          storage,
          colorIndex,
        }]);
      } else {
        toast.warning('All 3 slots are full. Remove one first.', { position: 'top-right', autoClose: 2500 });
      }
      return;
    }
    const brandIdx = BRAND_OPTIONS.findIndex(b => b.label.toLowerCase().includes(phone.brand.toLowerCase()));
    setSlots(prev => prev.map((s, i) =>
      i === emptyIdx ? { brandIndex: brandIdx >= 0 ? brandIdx : null, phone, storage, colorIndex } : s
    ));
    toast.success(`${phone.model} added to comparison!`, { position: 'top-right', autoClose: 2000 });
    // Scroll to compare table
    setTimeout(() => {
      document.getElementById('compare-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const comparePhoneIds = slots.filter(s => s.phone).map(s => s.phone!.id);

  const filteredPhones = useMemo(() => {
    let list = ALL_COMPARE_PHONES;
    if (brandFilter !== 'All') list = list.filter(p => p.brand === brandFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => p.model.toLowerCase().includes(q) || String(p.year).includes(q));
    }
    return list;
  }, [brandFilter, searchQuery]);

  const activePhones = slots.filter(s => s.phone !== null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 pb-24 space-y-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Phone Compare
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Compare Phones</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse all available devices below, click <strong>Add to Compare</strong> to fill your slots, then see a full spec breakdown.
          </p>
        </div>

        {/* ── Device Browser ─────────────────────────────────── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <h2 className="text-xl font-black text-foreground flex-1">Available Devices</h2>

            {/* Brand filter tabs */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
              {(['All', 'Apple', 'Samsung', 'Google'] as const).map(b => (
                <button
                  key={b}
                  onClick={() => setBrandFilter(b)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    brandFilter === b
                      ? 'bg-white text-[#1a3dc4] shadow-sm'
                      : 'text-gray-500 hover:text-foreground'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search model…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="px-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a3dc4] bg-white w-full sm:w-48"
            />
          </div>

          {filteredPhones.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No devices found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredPhones.map(phone => (
                <DeviceCard
                  key={phone.id}
                  phone={phone}
                  onAddToCompare={handleDeviceAddToCompare}
                  isInCompare={comparePhoneIds.includes(phone.id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ── Compare Slots ──────────────────────────────────── */}
        <section id="compare-table">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-foreground">Your Comparison</h2>
            {slots.some(s => s.phone) && (
              <button
                onClick={() => setSlots([emptySlot(), emptySlot()])}
                className="text-xs text-gray-400 hover:text-red-500 font-semibold transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {slots.map((slot, i) => (
              <PhoneSlotCard
                key={i}
                slot={slot}
                slotIndex={i}
                onChange={updated => updateSlot(i, updated)}
                onRemove={() => removeSlot(i)}
                showRemove={slots.length > 2}
              />
            ))}

            {slots.length < 3 && (
              <button
                onClick={addSlot}
                className="bg-white rounded-2xl border-2 border-dashed border-gray-200 shadow-sm flex flex-col items-center justify-center py-16 gap-3 hover:border-[#1a3dc4]/50 hover:bg-[#1a3dc4]/3 transition-all group"
              >
                <div className="w-12 h-12 bg-[#1a3dc4]/10 rounded-full flex items-center justify-center group-hover:bg-[#1a3dc4]/20 transition-all">
                  <Plus size={22} className="text-[#1a3dc4]" />
                </div>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-[#1a3dc4] transition-colors">
                  Add a 3rd phone
                </span>
              </button>
            )}
          </div>

          {/* ── Comparison Table ───────────────────────────────── */}
          {activePhones.length === 0 ? (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-20 h-20 bg-[#1a3dc4]/8 rounded-full flex items-center justify-center mx-auto mb-5">
                <GitCompareArrows size={36} className="text-[#1a3dc4]" />
              </div>
              <p className="text-foreground font-bold text-lg mb-2">Add phones above to compare</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                Click <strong>Add to Compare</strong> on any device card, or use the dropdowns in the slots.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
              {/* Table header */}
              <div
                className="grid divide-x divide-gray-100"
                style={{ gridTemplateColumns: `200px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="p-6 bg-gray-50" />
                {activePhones.map((slot, i) => {
                  const price = getPrice(slot);
                  const phone = slot.phone!;
                  const color = phone.colors[slot.colorIndex];
                  return (
                    <div key={i} className="p-6 text-center border-b border-gray-100">
                      <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                        <img src={phone.image} alt={phone.model} className="h-full object-contain drop-shadow-md" />
                      </div>
                      {color && (
                        <div className="flex justify-center mb-2">
                          <div className="w-4 h-4 rounded-full border border-gray-200 shadow-sm" style={{ background: color.hex }} />
                        </div>
                      )}
                      <p className="font-black text-sm text-foreground">{phone.model}</p>
                      <p className="text-xs text-muted-foreground mb-1">{slot.storage ?? phone.storageOptions[0]?.storage}</p>
                      <p className="text-xs font-bold" style={{ color: brandColors[phone.brand] ?? '#1a3dc4' }}>
                        {phone.brand}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Spec rows */}
              {SPEC_ROWS.map((row, ri) => (
                <div
                  key={row.key}
                  className="grid divide-x divide-gray-100"
                  style={{ gridTemplateColumns: `200px repeat(${activePhones.length}, 1fr)` }}
                >
                  <div className={`px-6 py-4 flex items-center ${ri % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}`}>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{row.label}</span>
                  </div>
                  {activePhones.map((slot, ci) => (
                    <div key={ci} className={`px-6 py-4 text-center ${ri % 2 === 0 ? 'bg-gray-50/40' : 'bg-white'}`}>
                      <span className="text-sm font-semibold text-foreground leading-snug">
                        {slot.phone!.specs[row.key]}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Price row */}
              <div
                className="grid divide-x divide-gray-100 border-t-2 border-[#1a3dc4]/10"
                style={{ gridTemplateColumns: `200px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="px-6 py-5 bg-gray-50 flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Price</span>
                </div>
                {activePhones.map((slot, ci) => {
                  const price = getPrice(slot);
                  return (
                    <div key={ci} className="px-6 py-5 text-center bg-[#1a3dc4]/3">
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
                className="grid divide-x divide-gray-100 border-t border-gray-100"
                style={{ gridTemplateColumns: `200px repeat(${activePhones.length}, 1fr)` }}
              >
                <div className="px-6 py-5 bg-white" />
                {activePhones.map((slot, ci) => (
                  <div key={ci} className="px-6 py-5 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleAddToCart(slot)}
                      className="w-full py-3 bg-[#1a3dc4] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#1a3dc4]/90 transition-all hover:scale-[1.02] shadow-md shadow-[#1a3dc4]/20"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
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
          )}
        </section>

        {/* Back to shop */}
        <div className="text-center">
          <Link to="/products" className="inline-flex items-center gap-2 text-[#1a3dc4] font-bold hover:underline text-sm">
            Browse all products <ArrowRight size={15} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
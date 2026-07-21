// ─── Core product types ────────────────────────────────────────────────────

export interface StorageVariant {
  storage: string;        // e.g. "128GB", "256GB+8GB"
  price: number | null;   // null = contact for price
}

export interface ColorVariant {
  name: string;   // e.g. "Black Titanium"
  hex: string;    // e.g. "#2B2B2B"
  image?: string; // optional colour-specific image URL
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  condition: 'New' | 'Used' | 'Swap';
  description: string;
  specs: { label: string; value: string }[];
  storageVariants: StorageVariant[];
  colors: ColorVariant[];
  images: string[];  // default images (first colour)
}

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getMinPrice(p: Product): number | null {
  const prices = p.storageVariants.filter(v => v.price !== null).map(v => v.price as number);
  return prices.length ? Math.min(...prices) : null;
}

export function getMaxPrice(p: Product): number | null {
  const prices = p.storageVariants.filter(v => v.price !== null).map(v => v.price as number);
  return prices.length ? Math.max(...prices) : null;
}

export function formatPrice(n: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export function getPriceLabel(p: Product): string {
  const min = getMinPrice(p);
  const max = getMaxPrice(p);
  if (!min && !max) return 'Contact for price';
  if (!max || min === max) return formatPrice(min!);
  return `${formatPrice(min!)} – ${formatPrice(max)}`;
}

// ─── Compare-page types ──────────────────────────────────────────────────────

export interface CompareSpec {
  display: string;
  screenSize: string;
  processor: string;
  ram: string;
  rearCamera: string;
  frontCamera: string;
  battery: string;
  charging: string;
  os: string;
  weight: string;
  waterResistance: string;
  connectivity: string;
  dimensions: string;
}

export interface ComparePhone {
  id: string;
  brand: 'Apple' | 'Samsung' | 'Google';
  model: string;
  year: number;
  image: string;
  colors: ColorVariant[];
  storageOptions: StorageVariant[];
  specs: CompareSpec;
}

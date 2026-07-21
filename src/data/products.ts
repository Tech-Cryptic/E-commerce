// ─── Re-export all shared types ─────────────────────────────────────────────
export type { Product, StorageVariant, ColorVariant, ComparePhone, CompareSpec } from './types';
export { getMinPrice, getMaxPrice, formatPrice, getPriceLabel } from './types';

import type { Product } from './types';
import { PHONE_PRODUCTS } from './phones';
import { ACCESSORY_PRODUCTS } from './accessories';

// ─── Non-phone / electronics products (updated to new interface) ─────────────

const ELECTRONICS: Product[] = [
  {
    id: 'macbook-m3-max',
    name: 'MacBook Pro M3 Max',
    brand: 'Apple',
    category: 'Laptops',
    condition: 'New',
    description: 'The MacBook Pro with M3 Max chip delivers exceptional pro performance with up to 128GB of unified memory. The Liquid Retina XDR display is stunning for creators and developers who need colour accuracy and brightness.',
    specs: [
      { label: 'Chip', value: 'Apple M3 Max' },
      { label: 'Display', value: '16" Liquid Retina XDR' },
      { label: 'Memory', value: 'Up to 128GB Unified Memory' },
      { label: 'Battery', value: 'Up to 22 hours' },
    ],
    storageVariants: [
      { storage: '1TB',  price: 3200000 },
      { storage: '2TB',  price: 3800000 },
      { storage: '4TB',  price: null    },
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1C1E' },
      { name: 'Silver',      hex: '#C8C8CC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611186871525-15a38d3b8e5d?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'ps5-slim',
    name: 'PlayStation 5 Slim',
    brand: 'Sony',
    category: 'Gaming',
    condition: 'New',
    description: 'The PS5 Slim is smaller and sleeker, yet delivers the same powerful experience. Play the latest PlayStation exclusives with stunning 4K visuals and ultra-fast SSD loading.',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen Zen 2, 8-core 3.5GHz' },
      { label: 'GPU', value: 'AMD RDNA 2, 10.3 TFLOPS' },
      { label: 'Storage', value: '1TB NVMe SSD (expandable)' },
      { label: 'Resolution', value: 'Up to 8K' },
      { label: 'Frame Rate', value: 'Up to 120fps' },
    ],
    storageVariants: [
      { storage: '1TB', price: 650000 },
    ],
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607853202273-232359c9d6c4?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'msi-raider-ge78',
    name: 'MSI Raider GE78 HX',
    brand: 'MSI',
    category: 'Laptops',
    condition: 'New',
    description: 'The MSI Raider GE78 HX is a flagship gaming laptop with Intel Core i9 HX processor paired with an NVIDIA GeForce RTX 4090. Dominate every title at ultra settings with top-tier frame rates.',
    specs: [
      { label: 'CPU', value: 'Intel Core i9-14900HX' },
      { label: 'GPU', value: 'NVIDIA RTX 4090 16GB' },
      { label: 'Display', value: '17.3" QHD+ 240Hz' },
      { label: 'Memory', value: '64GB DDR5' },
    ],
    storageVariants: [
      { storage: '2TB', price: 2800000 },
    ],
    colors: [
      { name: 'Titan Gray', hex: '#3A3A3C' },
    ],
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'ipad-pro-m2-used',
    name: 'iPad Pro 12.9" M2',
    brand: 'Apple',
    category: 'Tablets',
    condition: 'Used',
    description: 'UK Used iPad Pro 12.9-inch with M2 chip — Liquid Retina XDR display, Thunderbolt connectivity, and laptop-class performance for creative work. Excellent condition.',
    specs: [
      { label: 'Chip', value: 'Apple M2' },
      { label: 'Display', value: '12.9" Liquid Retina XDR' },
      { label: 'Camera', value: '12MP Wide + 10MP Ultra Wide + LiDAR' },
      { label: 'Battery', value: 'Up to 10 hours' },
    ],
    storageVariants: [
      { storage: '128GB', price: 1100000 },
      { storage: '256GB', price: null    },
    ],
    colors: [
      { name: 'Space Gray', hex: '#3A3A3C' },
      { name: 'Silver',     hex: '#C8C8CC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'jbl-partybox-310',
    name: 'JBL PartyBox 310',
    brand: 'JBL',
    category: 'Audio',
    condition: 'New',
    description: 'The JBL PartyBox 310 delivers 240W RMS sound with a stunning light show. Connect via Bluetooth, USB, or AUX to keep the energy going for up to 18 hours on a single charge.',
    specs: [
      { label: 'Output Power', value: '240W RMS' },
      { label: 'Battery', value: 'Up to 18 hours' },
      { label: 'Connectivity', value: 'Bluetooth 4.2, USB, AUX' },
      { label: 'Water Resistance', value: 'IPX4 splash-proof' },
      { label: 'Weight', value: '16.8kg' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 550000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'alienware-34',
    name: 'Dell Alienware 34" QD-OLED',
    brand: 'Dell',
    category: 'Monitors',
    condition: 'New',
    description: 'The Dell Alienware AW3423DWF is a 34" curved QD-OLED gaming monitor with near-infinite contrast. 165Hz refresh rate and 0.1ms response time make it one of the sharpest gaming monitors available.',
    specs: [
      { label: 'Display', value: '34" QD-OLED Curved 1800R' },
      { label: 'Resolution', value: '3440 x 1440 WQHD' },
      { label: 'Refresh Rate', value: '165Hz' },
      { label: 'Response Time', value: '0.1ms (GtG)' },
      { label: 'HDR', value: 'DisplayHDR True Black 400' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 1400000 },
    ],
    colors: [
      { name: 'Lunar Light', hex: '#E8D8C0' },
    ],
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Audio',
    condition: 'New',
    description: 'The Sony WH-1000XM5 sets the industry standard for noise cancellation. Eight microphones and the QN1 chip combine to silence the world around you, delivering rich, detailed audio for up to 30 hours.',
    specs: [
      { label: 'Driver Unit', value: '30mm dome' },
      { label: 'Noise Canceling', value: '8 mics + QN1 chip' },
      { label: 'Battery', value: 'Up to 30 hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, NFC, 3.5mm' },
      { label: 'Weight', value: '250g' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 420000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'asus-rog-zephyrus',
    name: 'ASUS ROG Zephyrus G16',
    brand: 'ASUS',
    category: 'Laptops',
    condition: 'Used',
    description: 'UK Used ASUS ROG Zephyrus G16 — AMD Ryzen 9 paired with RTX 4070. Excellent condition. Thin form factor with serious gaming and creative performance.',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen 9 7945HX' },
      { label: 'GPU', value: 'NVIDIA RTX 4070 8GB' },
      { label: 'Display', value: '16" QHD+ 240Hz' },
      { label: 'Memory', value: '32GB DDR5' },
      { label: 'Storage', value: '1TB NVMe SSD' },
    ],
    storageVariants: [
      { storage: '1TB', price: 1950000 },
    ],
    colors: [
      { name: 'Eclipse Gray', hex: '#3A3A3C' },
    ],
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'harman-kardon-aura',
    name: 'Harman Kardon Aura Studio 4',
    brand: 'Harman Kardon',
    category: 'Audio',
    condition: 'New',
    description: 'The Harman Kardon Aura Studio 4 is a beautifully designed Bluetooth speaker with a signature translucent dome that radiates room-filling 360-degree sound with deep bass and crystal-clear highs.',
    specs: [
      { label: 'Output Power', value: '100W RMS' },
      { label: 'Drivers', value: '3 tweeters + 1 subwoofer' },
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'Battery', value: 'Up to 8 hours' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 380000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'White', hex: '#F5F5F5' },
    ],
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'iphone-13-pro-swap',
    name: 'iPhone 13 Pro (Swap Deal)',
    brand: 'Apple',
    category: 'Phones',
    condition: 'Swap',
    description: 'iPhone 13 Pro in excellent condition — available for a swap deal. ProMotion 120Hz Super Retina XDR display, A15 Bionic chip, triple-lens camera with macro photography and LiDAR scanner.',
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR 120Hz' },
      { label: 'Processor', value: 'A15 Bionic chip' },
      { label: 'Camera', value: '12MP Triple camera + LiDAR' },
      { label: 'Battery', value: 'Up to 22 hours video playback' },
    ],
    storageVariants: [
      { storage: '128GB', price: 550000 },
      { storage: '256GB', price: null   },
    ],
    colors: [
      { name: 'Alpine Green',    hex: '#4A7C59' },
      { name: 'Sierra Blue',     hex: '#6B97C2' },
      { name: 'Gold',            hex: '#D4B896' },
      { name: 'Graphite',        hex: '#3A3A3C' },
      { name: 'Silver',          hex: '#C8C8CC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1675783853666-e7c4cc7eed80?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'lenovo-legion-go',
    name: 'Lenovo Legion Go',
    brand: 'Lenovo',
    category: 'Gaming',
    condition: 'New',
    description: 'The Lenovo Legion Go is a portable Windows gaming PC with a large 8.8" touchscreen and detachable controllers. AMD Ryzen Z1 Extreme makes it play your full PC game library wherever you are.',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen Z1 Extreme' },
      { label: 'Display', value: '8.8" QHD+ 144Hz touchscreen' },
      { label: 'Memory', value: '16GB LPDDR5X' },
      { label: 'Battery', value: '49.2Wh (~2 hrs gaming)' },
    ],
    storageVariants: [
      { storage: '512GB', price: 850000  },
      { storage: '1TB',   price: null    },
    ],
    colors: [
      { name: 'Onyx Grey',     hex: '#3A3A3C' },
      { name: 'Storm Grey',    hex: '#8C8A8E' },
    ],
    images: [
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607853202273-232359c9d6c4?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'samsung-odyssey-g9',
    name: 'Samsung Odyssey G9',
    brand: 'Samsung',
    category: 'Monitors',
    condition: 'New',
    description: 'The Samsung Odyssey G9 is an ultra-wide 49" dual QHD curved gaming monitor with 1000R curvature that wraps your entire field of vision. The 240Hz refresh rate and QLED panel deliver colours that demand attention.',
    specs: [
      { label: 'Display', value: '49" Dual QHD (5120x1440), 1000R' },
      { label: 'Refresh Rate', value: '240Hz' },
      { label: 'Response Time', value: '1ms (GtG)' },
      { label: 'Panel', value: 'VA + QLED + HDR2000' },
      { label: 'Sync', value: 'G-Sync Compatible + FreeSync Premium Pro' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 1800000 },
    ],
    colors: [
      { name: 'Infinity White', hex: '#F0EDE8' },
    ],
    images: [
      'https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'sony-headphones',
    name: 'Sony Wireless Headphones',
    brand: 'Sony',
    category: 'Audio',
    condition: 'New',
    description: 'Sony wireless headphones with comfortable over-ear cushions, solid sound quality, and long battery life. A reliable everyday listening companion for commuters and casual listeners.',
    specs: [
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'Battery', value: 'Up to 30 hours' },
      { label: 'Driver', value: '40mm' },
    ],
    storageVariants: [
      { storage: 'Standard', price: 70000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'White', hex: '#F5F5F5' },
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800',
    ],
  },
];

// ─── Master product catalogue ────────────────────────────────────────────────
export const ALL_PRODUCTS: Product[] = [
  ...PHONE_PRODUCTS,
  ...ACCESSORY_PRODUCTS,
  ...ELECTRONICS,
];

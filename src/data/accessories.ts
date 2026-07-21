import type { Product } from './types';

const UNS = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
const PEX = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const IMG = {
  ipad:         UNS('1544244015-0df4b3ffc6b0'),
  ipad2:        UNS('1561154464-82e9adf32764'),
  awatch:       UNS('1579586337278-3befd40fd17a'),
  awatch2:      UNS('1434493789847-2f02dc6ca35d'),
  airpods:      UNS('1588423771073-b8903fead85b'),
  airpods2:     PEX(3780681),
  airpodsmax:   UNS('1546435770-a3e426bf472b'),
  pencil:       PEX(1279228),
  magic_kb:     UNS('1587829741301-dc798b83add3'),
  ss_tab:       UNS('1561154464-82e9adf32764'),
  ss_watch:     UNS('1508685096489-7aacd43bd3b1'),
  ss_buds:      PEX(3780681),
  gp_watch:     UNS('1508685096489-7aacd43bd3b1'),
  laptop:       UNS('1517336714731-489689fd1ca8'),
  ps5:          UNS('1606813907291-d86efa9b94db'),
  gaming:       UNS('1612287230202-1ff1d85d1bdf'),
  monitor:      UNS('1527443224154-c4a3942d3acf'),
  speaker:      UNS('1589003077984-894e133dabab'),
  headphones:   UNS('1505740420928-5e560c06d30e'),
};

export const ACCESSORY_PRODUCTS: Product[] = [

  // ════════════════════════════════════════════════
  // APPLE ACCESSORIES
  // ════════════════════════════════════════════════

  {
    id: 'ipad-11th-gen',
    name: 'Apple iPad 11th Gen',
    brand: 'Apple',
    category: 'Tablets',
    condition: 'New',
    description: 'The 11th-generation iPad brings A16 Bionic performance, a vivid 10.9-inch Liquid Retina display, and Apple Intelligence support to the standard iPad lineup. Available in Wi-Fi and Wi-Fi + Cellular configurations.',
    specs: [
      { label: 'Display', value: '10.9" Liquid Retina, True Tone, P3' },
      { label: 'Chip', value: 'Apple A16 Bionic' },
      { label: 'Camera', value: '12MP Wide rear · 12MP Ultra Wide front' },
      { label: 'Battery', value: 'Up to 10 hours' },
      { label: 'Connector', value: 'USB-C' },
      { label: 'OS', value: 'iPadOS 17 (upgradable to 19)' },
    ],
    storageVariants: [
      { storage: '128GB Wi-Fi',           price: 480000 },
      { storage: '128GB Wi-Fi + Cellular', price: 640000 },
      { storage: '256GB Wi-Fi',           price: 640000 },
      { storage: '256GB Wi-Fi + Cellular', price: 870000 },
    ],
    colors: [
      { name: 'Blue',   hex: '#7FB3D3' },
      { name: 'Pink',   hex: '#F4A7C0' },
      { name: 'Yellow', hex: '#F5D97F' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ipad, IMG.ipad2],
  },

  {
    id: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'Apple Watch Ultra 3 is the most capable Apple Watch ever built. A refined 49mm titanium case, precision dual-frequency GPS, up to 72-hour battery in low-power mode, and a 3,000-nit display built for peak performance athletes.',
    specs: [
      { label: 'Case', value: '49mm Titanium' },
      { label: 'Display', value: '2.17" micro-LED, 3000 nits' },
      { label: 'Chip', value: 'Apple S10 SiP' },
      { label: 'GPS', value: 'Dual-freq L1 + L5' },
      { label: 'Battery', value: 'Up to 72 hours (low-power)' },
      { label: 'Water Resistance', value: '100m WR, EN13319' },
      { label: 'Connectivity', value: 'LTE + Wi-Fi 6 + Bluetooth 5.3' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 1000000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 (2024)',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'The Apple Watch Ultra 2 features precision dual-frequency GPS, up to 60-hour battery, and the S9 SiP chip in a titanium case built for extreme conditions. UK/CA stock with chain wrist band.',
    specs: [
      { label: 'Case', value: '49mm Titanium' },
      { label: 'Chip', value: 'Apple S9 SiP' },
      { label: 'GPS', value: 'Dual-frequency L1 + L5' },
      { label: 'Battery', value: 'Up to 60 hours' },
      { label: 'Water Resistance', value: '100m WR, EN13319' },
    ],
    storageVariants: [
      { storage: 'Chain Wrist / UK-CA', price: 1200000 },
    ],
    colors: [
      { name: 'Black',   hex: '#1C1C1E' },
      { name: 'Natural', hex: '#8C8A8E' },
      { name: 'White',   hex: '#EDEAE4' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'apple-watch-s11-46',
    name: 'Apple Watch Series 11 (46mm)',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'Apple Watch Series 11 brings advanced health sensors, sleep apnea detection, and a brighter display to the flagship lineup. The S10 SiP chip delivers faster performance and all-day battery in a refined aluminium case.',
    specs: [
      { label: 'Case', value: '46mm Aluminium' },
      { label: 'Display', value: '2.0" Always-On Retina LTPO OLED' },
      { label: 'Chip', value: 'Apple S10 SiP' },
      { label: 'Battery', value: 'Up to 36 hours' },
      { label: 'Water Resistance', value: '50m WR' },
    ],
    storageVariants: [
      { storage: '46mm', price: 510000 },
    ],
    colors: [
      { name: 'Midnight',  hex: '#1C1C1E' },
      { name: 'Starlight', hex: '#F5EFE2' },
      { name: 'Pink',      hex: '#F4A7C0' },
      { name: 'Blue',      hex: '#6B97C2' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'apple-watch-s11-42',
    name: 'Apple Watch Series 11 (42mm)',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'Apple Watch Series 11 in the compact 42mm size — all the same health features including sleep apnea detection, heart rate, ECG, and crash detection, in a slightly smaller, lighter profile.',
    specs: [
      { label: 'Case', value: '42mm Aluminium' },
      { label: 'Display', value: '1.77" Always-On Retina LTPO OLED' },
      { label: 'Chip', value: 'Apple S10 SiP' },
      { label: 'Battery', value: 'Up to 36 hours' },
      { label: 'Water Resistance', value: '50m WR' },
    ],
    storageVariants: [
      { storage: '42mm', price: 470000 },
    ],
    colors: [
      { name: 'Midnight',  hex: '#1C1C1E' },
      { name: 'Starlight', hex: '#F5EFE2' },
      { name: 'Pink',      hex: '#F4A7C0' },
      { name: 'Blue',      hex: '#6B97C2' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'apple-watch-s10-46',
    name: 'Apple Watch Series 10 (46mm)',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'Apple Watch Series 10 is the thinnest Apple Watch ever made. A larger, brighter always-on display with a faster S9 chip — and still the complete suite of health and safety features Apple Watch is known for.',
    specs: [
      { label: 'Case', value: '46mm Aluminium' },
      { label: 'Chip', value: 'Apple S9 SiP' },
      { label: 'Battery', value: 'Up to 36 hours' },
      { label: 'Water Resistance', value: '50m WR' },
    ],
    storageVariants: [
      { storage: '46mm', price: 450000 },
    ],
    colors: [
      { name: 'Midnight',     hex: '#1C1C1E' },
      { name: 'Rose Gold',    hex: '#E8B0A0' },
      { name: 'Silver',       hex: '#C8C8CC' },
      { name: 'Jet Black',    hex: '#0A0A0A' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'apple-watch-s10-42',
    name: 'Apple Watch Series 10 (42mm)',
    brand: 'Apple',
    category: 'Watches',
    condition: 'New',
    description: 'Apple Watch Series 10 42mm — the same ultra-thin design and full health feature set in the compact size. Thinner than any Apple Watch before it, yet the display is larger than Series 8.',
    specs: [
      { label: 'Case', value: '42mm Aluminium' },
      { label: 'Chip', value: 'Apple S9 SiP' },
      { label: 'Battery', value: 'Up to 36 hours' },
      { label: 'Water Resistance', value: '50m WR' },
    ],
    storageVariants: [
      { storage: '42mm', price: 430000 },
    ],
    colors: [
      { name: 'Midnight',  hex: '#1C1C1E' },
      { name: 'Rose Gold', hex: '#E8B0A0' },
      { name: 'Silver',    hex: '#C8C8CC' },
    ],
    images: [IMG.awatch, IMG.awatch2],
  },

  {
    id: 'airpods-pro-3',
    name: 'AirPods Pro (3rd Gen)',
    brand: 'Apple',
    category: 'Audio',
    condition: 'New',
    description: 'AirPods Pro 3rd generation bring Apple H2 chip Active Noise Cancellation, Transparency mode, and Personalised Spatial Audio to a refined ergonomic design. The MagSafe charging case offers up to 36 hours total listening time.',
    specs: [
      { label: 'Chip', value: 'Apple H2' },
      { label: 'ANC', value: 'Active Noise Cancellation · Transparency mode' },
      { label: 'Battery', value: 'Up to 7 hrs · 36 hrs with case' },
      { label: 'Connector', value: 'USB-C (case)' },
      { label: 'Water Resistance', value: 'IP54 (buds + case)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 300000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.airpods, IMG.airpods2],
  },

  {
    id: 'airpods-max-2',
    name: 'AirPods Max (2nd Gen, 2024)',
    brand: 'Apple',
    category: 'Audio',
    condition: 'New',
    description: 'AirPods Max 2nd generation features USB-C charging, an all-new colour palette, and the same industry-leading sound quality with adaptive transparency and computational audio powered by the H1 chip.',
    specs: [
      { label: 'Chip', value: 'Apple H1' },
      { label: 'ANC', value: 'Active Noise Cancellation · Transparency mode' },
      { label: 'Battery', value: 'Up to 20 hours' },
      { label: 'Connector', value: 'USB-C' },
      { label: 'Weight', value: '385g' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 700000 },
    ],
    colors: [
      { name: 'Black',      hex: '#1C1C1E' },
      { name: 'Blue',       hex: '#6B97C2' },
      { name: 'Purple',     hex: '#6A4A8A' },
      { name: 'Starlight',  hex: '#F5EFE2' },
      { name: 'Orange',     hex: '#E87040' },
    ],
    images: [IMG.airpodsmax, IMG.airpods],
  },

  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd Gen, USB-C)',
    brand: 'Apple',
    category: 'Audio',
    condition: 'New',
    description: 'AirPods Pro 2nd generation with USB-C charging case. Industry-leading Active Noise Cancellation, Adaptive Transparency, and Personalised Spatial Audio — the benchmark for wireless earbuds.',
    specs: [
      { label: 'Chip', value: 'Apple H2' },
      { label: 'ANC', value: 'Up to 2x better noise cancellation than Gen 1' },
      { label: 'Battery', value: 'Up to 6 hrs · 30 hrs with case' },
      { label: 'Connector', value: 'USB-C (case)' },
      { label: 'Water Resistance', value: 'IP54' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 260000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.airpods, IMG.airpods2],
  },

  {
    id: 'airpods-4-anc',
    name: 'AirPods 4 (with ANC)',
    brand: 'Apple',
    category: 'Audio',
    condition: 'New',
    description: 'AirPods 4 with Active Noise Cancellation is the first AirPods without ear tips to offer ANC. Powered by the H2 chip, it brings studio-quality sound and Transparency mode in a completely open-ear, one-size-fits-all design.',
    specs: [
      { label: 'Chip', value: 'Apple H2' },
      { label: 'ANC', value: 'Active Noise Cancellation (open-ear first)' },
      { label: 'Battery', value: 'Up to 5 hrs · 30 hrs with case' },
      { label: 'Connector', value: 'USB-C (case)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 250000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.airpods, IMG.airpods2],
  },

  {
    id: 'airpods-4',
    name: 'AirPods 4',
    brand: 'Apple',
    category: 'Audio',
    condition: 'New',
    description: 'AirPods 4 — the new standard. A completely redesigned open-ear form factor, H2 chip, Personalised Spatial Audio, and up to 30 hours total battery time in the USB-C charging case. No ear tips, all comfort.',
    specs: [
      { label: 'Chip', value: 'Apple H2' },
      { label: 'Battery', value: 'Up to 5 hrs · 30 hrs with case' },
      { label: 'Connector', value: 'USB-C (case)' },
      { label: 'Audio', value: 'Adaptive EQ · Spatial Audio' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 170000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.airpods, IMG.airpods2],
  },

  {
    id: 'apple-pencil-pro',
    name: 'Apple Pencil Pro',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'Apple Pencil Pro features barrel roll, Squeeze, Find My, and Hover. Compatible with iPad Pro M4 and iPad Air M2, it is the most capable Apple Pencil ever for creatives and note-takers.',
    specs: [
      { label: 'Compatibility', value: 'iPad Pro M4 (11"/13") · iPad Air M2' },
      { label: 'Charging', value: 'Magnetic wireless (MagSafe)' },
      { label: 'Features', value: 'Barrel roll · Squeeze · Hover · Find My' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 160000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.pencil, IMG.magic_kb],
  },

  {
    id: 'apple-pencil-2',
    name: 'Apple Pencil (2nd Gen)',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'Apple Pencil 2nd generation attaches magnetically to compatible iPads and charges wirelessly. Double-tap to switch tools. Pixel-perfect precision with industry-best low latency for drawing, writing, and annotation.',
    specs: [
      { label: 'Compatibility', value: 'iPad Pro · iPad Air · iPad mini' },
      { label: 'Charging', value: 'Magnetic wireless' },
      { label: 'Features', value: 'Double-tap to switch tools · Tilt support' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 120000 },
    ],
    colors: [{ name: 'White', hex: '#FAFAF8' }],
    images: [IMG.pencil, IMG.magic_kb],
  },

  {
    id: 'magic-keyboard-m4-13',
    name: 'Magic Keyboard M4 — iPad Pro 13"',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'The Magic Keyboard for iPad Pro M4 13-inch features a built-in trackpad, aluminium top case, and a row of function keys — turning your iPad Pro into a full laptop replacement.',
    specs: [
      { label: 'Compatibility', value: 'iPad Pro M4 13-inch' },
      { label: 'Trackpad', value: 'Multi-Touch glass trackpad' },
      { label: 'Charging', value: 'USB-C pass-through' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 550000 },
    ],
    colors: [
      { name: 'White', hex: '#FAFAF8' },
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [IMG.magic_kb, IMG.pencil],
  },

  {
    id: 'magic-keyboard-m4-11',
    name: 'Magic Keyboard M4 — iPad Pro 11"',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'The Magic Keyboard for iPad Pro M4 11-inch delivers a laptop-class typing and trackpad experience in a slim, lightweight design that attaches magnetically to your iPad Pro.',
    specs: [
      { label: 'Compatibility', value: 'iPad Pro M4 11-inch' },
      { label: 'Trackpad', value: 'Multi-Touch glass trackpad' },
      { label: 'Charging', value: 'USB-C pass-through' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 450000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'White', hex: '#FAFAF8' },
    ],
    images: [IMG.magic_kb, IMG.pencil],
  },

  {
    id: 'magic-keyboard-m2-129',
    name: 'Apple Magic Keyboard — iPad Pro 12.9" (M2)',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'The Magic Keyboard for iPad Pro 12.9-inch M2 features a full-size keyboard, trackpad, and USB-C connector — the perfect productivity companion for the M2 iPad Pro.',
    specs: [
      { label: 'Compatibility', value: 'iPad Pro 12.9-inch (M2)' },
      { label: 'Trackpad', value: 'Multi-Touch glass trackpad' },
      { label: 'Charging', value: 'USB-C pass-through' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 420000 },
    ],
    colors: [
      { name: 'White', hex: '#FAFAF8' },
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [IMG.magic_kb, IMG.pencil],
  },

  {
    id: 'apple-magic-mouse-3',
    name: 'Apple Magic Mouse 3',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'New',
    description: 'Apple Magic Mouse 3 features an optimised foot design for smoother tracking and a USB-C charging port. The Multi-Touch surface allows intuitive swipes, scrolls, and clicks with precision.',
    specs: [
      { label: 'Connectivity', value: 'Bluetooth' },
      { label: 'Charging', value: 'USB-C' },
      { label: 'Surface', value: 'Multi-Touch' },
      { label: 'Battery', value: 'Rechargeable lithium' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 110000 },
    ],
    colors: [
      { name: 'White / Silver', hex: '#FAFAF8' },
      { name: 'Black / Space Gray', hex: '#1C1C1E' },
    ],
    images: [IMG.magic_kb, IMG.pencil],
  },

  // ════════════════════════════════════════════════
  // SAMSUNG TABLETS
  // ════════════════════════════════════════════════

  {
    id: 'samsung-tab-s11-ultra',
    name: 'Samsung Galaxy Tab S11 Ultra',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S11 Ultra features a massive 14.6-inch Super AMOLED display with integrated S Pen, Snapdragon 8 Elite, and 12GB RAM. The ultimate productivity and creativity powerhouse from Samsung.',
    specs: [
      { label: 'Display', value: '14.6" Super AMOLED, 120Hz, 2000 nits' },
      { label: 'Chip', value: 'Snapdragon 8 Elite for Galaxy' },
      { label: 'RAM', value: '12GB' },
      { label: 'Camera', value: '13MP + 8MP UW rear · 12MP + 8MP front' },
      { label: 'Battery', value: '11,200mAh, 45W' },
      { label: 'S Pen', value: 'Included' },
    ],
    storageVariants: [
      { storage: '256GB+12GB', price: 1500000 },
      { storage: '512GB+12GB', price: 1700000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'Beige',    hex: '#E8D8C0' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s11',
    name: 'Samsung Galaxy Tab S11',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S11 brings Snapdragon 8 Elite power, a 10.9-inch Dynamic AMOLED display, and Galaxy AI to the mainstream Tab lineup. With an included S Pen, it is a versatile tool for work and creativity.',
    specs: [
      { label: 'Display', value: '10.9" Dynamic AMOLED 2X, 120Hz' },
      { label: 'Chip', value: 'Snapdragon 8 Elite for Galaxy' },
      { label: 'RAM', value: '12GB' },
      { label: 'Battery', value: '8,000mAh, 45W' },
      { label: 'S Pen', value: 'Included' },
    ],
    storageVariants: [
      { storage: '128GB+12GB', price: 1050000 },
      { storage: '256GB+12GB', price: 1230000 },
    ],
    colors: [
      { name: 'Gray',  hex: '#8C8C8E' },
      { name: 'Beige', hex: '#E8D8C0' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s10-ultra',
    name: 'Samsung Galaxy Tab S10 Ultra',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Tab S10 Ultra sports the largest display in the Galaxy Tab lineup — a 14.6-inch Dynamic AMOLED 2X — with an included S Pen and Snapdragon 8 Gen 3 for elite productivity and creative work on the go.',
    specs: [
      { label: 'Display', value: '14.6" Dynamic AMOLED 2X, 120Hz' },
      { label: 'Chip', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'RAM', value: '12GB' },
      { label: 'Battery', value: '11,200mAh, 45W' },
      { label: 'S Pen', value: 'Included' },
    ],
    storageVariants: [
      { storage: '256GB+12GB', price: 1350000 },
      { storage: '512GB+12GB', price: 1500000 },
      { storage: '1TB+16GB',   price: 1700000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'Beige',    hex: '#E8D8C0' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s10-plus',
    name: 'Samsung Galaxy Tab S10 Plus',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S10 Plus offers a 12.4-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, and up to 12GB RAM. Together with the included S Pen it provides a premium, versatile large-screen experience.',
    specs: [
      { label: 'Display', value: '12.4" Dynamic AMOLED 2X, 120Hz' },
      { label: 'Chip', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'RAM', value: '12GB' },
      { label: 'Battery', value: '10,090mAh, 45W' },
      { label: 'S Pen', value: 'Included' },
    ],
    storageVariants: [
      { storage: '256GB+12GB', price: 1150000 },
      { storage: '512GB+12GB', price: 1250000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'Platinum', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s10-fe-plus',
    name: 'Samsung Galaxy Tab S10 FE Plus',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Tab S10 FE Plus brings a large display, S Pen support, and Galaxy AI to a more accessible price. A great option for students and professionals who want Samsung tablet quality without the flagship price tag.',
    specs: [
      { label: 'Display', value: '12.4" TFT LCD, 90Hz' },
      { label: 'Chip', value: 'Snapdragon 8 Gen 1' },
      { label: 'RAM', value: '8GB / 12GB' },
      { label: 'Battery', value: '10,090mAh, 45W' },
    ],
    storageVariants: [
      { storage: '128GB+8GB',  price: 850000 },
      { storage: '256GB+12GB', price: 950000 },
    ],
    colors: [
      { name: 'Gray',  hex: '#8C8C8E' },
      { name: 'Green', hex: '#4A7C59' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s10-fe',
    name: 'Samsung Galaxy Tab S10 FE',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S10 FE introduces Galaxy AI and S Pen compatibility at a budget-friendly price. A 10.9-inch display with long battery life makes it ideal for note-taking, streaming, and everyday tasks.',
    specs: [
      { label: 'Display', value: '10.9" TFT LCD, 90Hz' },
      { label: 'Chip', value: 'Exynos 1380' },
      { label: 'RAM', value: '12GB' },
      { label: 'Battery', value: '8,000mAh, 25W' },
    ],
    storageVariants: [
      { storage: '256GB+12GB', price: 800000 },
    ],
    colors: [
      { name: 'Gray',  hex: '#8C8C8E' },
      { name: 'Blue',  hex: '#4169B0' },
      { name: 'Green', hex: '#4A7C59' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s9-fe-plus',
    name: 'Samsung Galaxy Tab S9 FE Plus 5G',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Tab S9 FE Plus 5G brings a large 12.4-inch display, 5G connectivity, and IP68 water resistance to the fan edition lineup. Exynos 1380 chipset with 12GB RAM makes it a reliable companion for productivity on the move.',
    specs: [
      { label: 'Display', value: '12.4" TFT LCD, 90Hz' },
      { label: 'Chip', value: 'Exynos 1380' },
      { label: 'RAM', value: '12GB' },
      { label: 'Battery', value: '10,090mAh, 45W' },
      { label: 'Connectivity', value: '5G' },
    ],
    storageVariants: [
      { storage: '256GB+12GB', price: 900000 },
    ],
    colors: [
      { name: 'Gray',   hex: '#8C8C8E' },
      { name: 'Mint',   hex: '#A8D8C8' },
      { name: 'Purple', hex: '#6A4A8A' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s9-fe',
    name: 'Samsung Galaxy Tab S9 FE',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S9 FE is the most affordable Samsung tablet with IP68 water resistance. Exynos 1380, a capable 10.9-inch display, and 5G connectivity make it a capable daily companion.',
    specs: [
      { label: 'Display', value: '10.9" TFT LCD, 90Hz' },
      { label: 'Chip', value: 'Exynos 1380' },
      { label: 'RAM', value: '6GB / 8GB' },
      { label: 'Battery', value: '8,000mAh, 25W' },
      { label: 'Water Resistance', value: 'IP68' },
    ],
    storageVariants: [
      { storage: '128GB+6GB', price: 600000 },
      { storage: '256GB+8GB', price: 720000 },
    ],
    colors: [
      { name: 'Gray',   hex: '#8C8C8E' },
      { name: 'Mint',   hex: '#A8D8C8' },
      { name: 'Violet', hex: '#6A4A8A' },
      { name: 'White',  hex: '#F5F5F5' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s9',
    name: 'Samsung Galaxy Tab S9',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S9 is the first Samsung tablet with IP68 water resistance in the standard size. Snapdragon 8 Gen 2 and an included S Pen make it a capable creative and productivity device in a 11-inch dynamic AMOLED body.',
    specs: [
      { label: 'Display', value: '11.0" Dynamic AMOLED 2X, 120Hz' },
      { label: 'Chip', value: 'Snapdragon 8 Gen 2 for Galaxy' },
      { label: 'RAM', value: '8GB' },
      { label: 'Battery', value: '8,400mAh, 45W' },
      { label: 'Water Resistance', value: 'IP68' },
    ],
    storageVariants: [
      { storage: '128GB+8GB', price: 730000 },
      { storage: '256GB+8GB', price: 950000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'Beige',    hex: '#E8D8C0' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-s6-lite',
    name: 'Samsung Galaxy Tab S6 Lite',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab S6 Lite is a budget-friendly tablet with an included S Pen, a 10.4-inch display, and Exynos 1280 performance. A great student and everyday tablet at an affordable price point.',
    specs: [
      { label: 'Display', value: '10.4" TFT LCD, 60Hz' },
      { label: 'Chip', value: 'Exynos 1280' },
      { label: 'RAM', value: '4GB' },
      { label: 'Battery', value: '7,040mAh, 15W' },
      { label: 'S Pen', value: 'Included' },
    ],
    storageVariants: [
      { storage: '64GB+4GB',  price: 410000 },
      { storage: '128GB+4GB', price: 450000 },
    ],
    colors: [
      { name: 'Oxford Gray', hex: '#3A3A3C' },
      { name: 'Chiffon Pink', hex: '#F4B8C0' },
      { name: 'Mint',        hex: '#A8D8C8' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-a9-plus',
    name: 'Samsung Galaxy Tab A9+',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab A9+ delivers an immersive 11-inch LCD display, Snapdragon 695 performance, and Dolby Atmos quad speakers. Great for media consumption and everyday tasks at a compelling price.',
    specs: [
      { label: 'Display', value: '11.0" TFT LCD, 90Hz' },
      { label: 'Chip', value: 'Snapdragon 695 5G' },
      { label: 'RAM', value: '4GB / 6GB' },
      { label: 'Battery', value: '7,040mAh, 15W' },
    ],
    storageVariants: [
      { storage: '64GB+4GB',  price: 320000 },
      { storage: '128GB+6GB', price: 400000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'Silver',   hex: '#C8C8CC' },
      { name: 'Navy',     hex: '#1A2240' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-a11-plus',
    name: 'Samsung Galaxy Tab A11 Plus',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab A11 Plus offers a large display and capable chipset for everyday tasks including video calls, streaming, and browsing — with a slim design and long battery life.',
    specs: [
      { label: 'Display', value: '11" FHD+ TFT, 90Hz' },
      { label: 'Chip', value: 'Dimensity 6300' },
      { label: 'RAM', value: '6GB' },
      { label: 'Battery', value: '7,040mAh' },
    ],
    storageVariants: [
      { storage: '128GB+6GB', price: 370000 },
    ],
    colors: [
      { name: 'Gray', hex: '#8C8C8E' },
      { name: 'Navy', hex: '#1A2240' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  {
    id: 'samsung-tab-a11',
    name: 'Samsung Galaxy Tab A11',
    brand: 'Samsung',
    category: 'Tablets',
    condition: 'New',
    description: 'The Galaxy Tab A11 is the most accessible Samsung Android tablet. A solid 10.4-inch display, light build, and long battery life make it an ideal everyday media and browsing tablet for the whole family.',
    specs: [
      { label: 'Display', value: '10.4" TFT LCD, 60Hz' },
      { label: 'Chip', value: 'Dimensity 6100+' },
      { label: 'RAM', value: '4GB' },
      { label: 'Battery', value: '6,000mAh' },
    ],
    storageVariants: [
      { storage: '128GB+4GB', price: 230000 },
    ],
    colors: [
      { name: 'Gray', hex: '#8C8C8E' },
      { name: 'Navy', hex: '#1A2240' },
    ],
    images: [IMG.ss_tab, IMG.ipad2],
  },

  // ════════════════════════════════════════════════
  // SAMSUNG WATCHES
  // ════════════════════════════════════════════════

  {
    id: 'galaxy-watch-ultra-2025',
    name: 'Samsung Galaxy Watch Ultra 2025',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'The Samsung Galaxy Watch Ultra 2025 is built for peak performance with a titanium case, advanced health sensors, real-time HR tracking, and a 3-day battery. Water resistant to 100m.',
    specs: [
      { label: 'Case', value: '47mm Titanium' },
      { label: 'Display', value: '1.47" Super AMOLED, 3000 nits' },
      { label: 'Battery', value: 'Up to 60 hours' },
      { label: 'Water Resistance', value: '100m WR, MIL-STD-810H' },
      { label: 'Health', value: 'ECG, Blood pressure, Body composition' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 440000 },
    ],
    colors: [
      { name: 'White Titanium',     hex: '#EDEAE4' },
      { name: 'Gray Titanium',      hex: '#8C8A8E' },
      { name: 'Titanium Black',     hex: '#1C1C1E' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-8-classic',
    name: 'Samsung Galaxy Watch 8 Classic',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'The Galaxy Watch 8 Classic brings back the beloved rotating bezel in a premium stainless steel case. Advanced health monitoring, Exynos W1000, and a clean circular AMOLED display make it the most polished smartwatch Samsung has made.',
    specs: [
      { label: 'Case', value: '47mm Stainless Steel' },
      { label: 'Chip', value: 'Exynos W1000' },
      { label: 'Battery', value: 'Up to 52 hours' },
      { label: 'Water Resistance', value: '5ATM + IP68' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 350000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-8-44',
    name: 'Samsung Galaxy Watch 8 (44mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'The Galaxy Watch 8 44mm packs Exynos W1000 performance, advanced health sensors including body composition analysis, and Galaxy AI health coaching into a sleek, comfortable circular design.',
    specs: [
      { label: 'Case', value: '44mm Aluminium' },
      { label: 'Chip', value: 'Exynos W1000' },
      { label: 'Battery', value: 'Up to 48 hours' },
      { label: 'Health', value: 'ECG, Body composition, BIA' },
    ],
    storageVariants: [
      { storage: '44mm', price: 300000 },
    ],
    colors: [
      { name: 'Cream',    hex: '#F0EDE8' },
      { name: 'Navy',     hex: '#1A2240' },
      { name: 'Silver',   hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-8-40',
    name: 'Samsung Galaxy Watch 8 (40mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'The Galaxy Watch 8 40mm in the compact size — all the same Exynos W1000 performance and health sensors including ECG, blood pressure, and body composition, in a lighter, smaller case.',
    specs: [
      { label: 'Case', value: '40mm Aluminium' },
      { label: 'Chip', value: 'Exynos W1000' },
      { label: 'Battery', value: 'Up to 40 hours' },
    ],
    storageVariants: [
      { storage: '40mm', price: 280000 },
    ],
    colors: [
      { name: 'Cream',    hex: '#F0EDE8' },
      { name: 'Pink Gold', hex: '#E8C0A0' },
      { name: 'Graphite', hex: '#3A3A3C' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-7-44',
    name: 'Samsung Galaxy Watch 7 (44mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'Galaxy Watch 7 with the new Exynos W1000 3nm chip offers double the CPU performance of its predecessor, improved health sensors, and excellent battery life in a clean circular design.',
    specs: [
      { label: 'Case', value: '44mm Aluminium' },
      { label: 'Chip', value: 'Exynos W1000 (3nm)' },
      { label: 'Battery', value: 'Up to 40 hours' },
    ],
    storageVariants: [
      { storage: '44mm', price: 220000 },
    ],
    colors: [
      { name: 'Green', hex: '#4A7C59' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-7-40',
    name: 'Samsung Galaxy Watch 7 (40mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'Galaxy Watch 7 40mm — compact Exynos W1000 smartwatch with advanced health features including ECG, blood pressure monitoring, and Galaxy AI-powered sleep coaching.',
    specs: [
      { label: 'Case', value: '40mm Aluminium' },
      { label: 'Chip', value: 'Exynos W1000 (3nm)' },
      { label: 'Battery', value: 'Up to 40 hours' },
    ],
    storageVariants: [
      { storage: '40mm', price: 210000 },
    ],
    colors: [
      { name: 'Cream', hex: '#F0EDE8' },
      { name: 'Green', hex: '#4A7C59' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-7-fe',
    name: 'Samsung Galaxy Watch 7 FE',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'Galaxy Watch FE brings essential Galaxy Watch health features — heart rate, SpO2, sleep tracking, and steps — at the most accessible Samsung watch price point.',
    specs: [
      { label: 'Case', value: '40mm Aluminium' },
      { label: 'Battery', value: 'Up to 40 hours' },
      { label: 'Health', value: 'Heart rate, SpO2, Sleep' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 170000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-6-classic-47',
    name: 'Samsung Galaxy Watch 6 Classic (47mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'Galaxy Watch 6 Classic revives the rotating bezel with a premium stainless steel design. Exynos W930 chip, advanced sleep coaching, and full health tracking suite make it the most refined round smartwatch Samsung has built.',
    specs: [
      { label: 'Case', value: '47mm Stainless Steel' },
      { label: 'Chip', value: 'Exynos W930' },
      { label: 'Battery', value: 'Up to 44 hours' },
      { label: 'Feature', value: 'Physical rotating bezel' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 220000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-watch-5-pro',
    name: 'Samsung Galaxy Watch 5 Pro (45mm)',
    brand: 'Samsung',
    category: 'Watches',
    condition: 'New',
    description: 'Galaxy Watch 5 Pro is built for outdoor enthusiasts with a titanium case, sapphire crystal glass, route tracking, and up to 80-hour battery in power-saving mode. A rugged performance smartwatch.',
    specs: [
      { label: 'Case', value: '45mm Titanium + Sapphire Crystal' },
      { label: 'Battery', value: 'Up to 80 hours (power saving)' },
      { label: 'Feature', value: 'Route tracking + Navigation' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 230000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Gray',  hex: '#8C8A8E' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  // ════════════════════════════════════════════════
  // SAMSUNG BUDS & ACCESSORIES
  // ════════════════════════════════════════════════

  {
    id: 'galaxy-buds-4-pro',
    name: 'Samsung Galaxy Buds 4 Pro',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 4 Pro brings AI-powered Adaptive ANC, a hi-fi audio codec, and up to 29 hours total playtime with the case. The ergonomic in-ear design offers a premium listening experience for any Samsung user.',
    specs: [
      { label: 'ANC', value: 'AI Adaptive Active Noise Cancellation' },
      { label: 'Battery', value: 'Up to 7 hrs · 29 hrs with case' },
      { label: 'Connectivity', value: 'Bluetooth 5.4, LE Audio' },
      { label: 'Water Resistance', value: 'IPX7 (buds) · IP54 (case)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 240000 },
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-buds-3-pro',
    name: 'Samsung Galaxy Buds 3 Pro',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 3 Pro features a redesigned blade tip for a more secure fit, AI-powered ANC, hi-fi 24-bit audio support, and up to 30 hours total battery. A flagship listening experience.',
    specs: [
      { label: 'ANC', value: 'AI Adaptive ANC' },
      { label: 'Battery', value: 'Up to 6 hrs · 30 hrs with case' },
      { label: 'Audio', value: '24-bit hi-fi audio' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 190000 },
    ],
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-buds-3',
    name: 'Samsung Galaxy Buds 3',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 3 offers ANC, clear call quality, and up to 30 hours total battery with an open-type design similar to AirPods. A great companion for Galaxy phone users looking for premium audio quality.',
    specs: [
      { label: 'ANC', value: 'Active Noise Cancellation' },
      { label: 'Battery', value: 'Up to 7 hrs · 30 hrs with case' },
      { label: 'Design', value: 'Open-type (no tip)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 130000 },
    ],
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-buds-2-pro',
    name: 'Samsung Galaxy Buds 2 Pro',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 2 Pro delivers intelligent ANC, hi-fi 24-bit audio, a comfortable ergonomic fit, and 360 Audio with head tracking. A premium wireless earphone experience at a competitive price.',
    specs: [
      { label: 'ANC', value: 'Intelligent Active Noise Cancellation' },
      { label: 'Audio', value: '24-bit hi-fi, 360 Audio with head tracking' },
      { label: 'Battery', value: 'Up to 5 hrs · 29 hrs with case' },
      { label: 'Water Resistance', value: 'IPX7' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 150000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'White',    hex: '#F5F5F5' },
      { name: 'Bora Purple', hex: '#6A4A8A' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-buds-2',
    name: 'Samsung Galaxy Buds 2',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 2 offers ANC and Ambient Sound mode in a compact, lightweight two-way speaker design. Great sound quality with a comfortable in-ear fit at an accessible price.',
    specs: [
      { label: 'ANC', value: 'Active Noise Cancellation' },
      { label: 'Battery', value: 'Up to 5 hrs · 20 hrs with case' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 120000 },
    ],
    colors: [
      { name: 'Graphite', hex: '#3A3A3C' },
      { name: 'White',    hex: '#F5F5F5' },
      { name: 'Olive',    hex: '#5C6840' },
      { name: 'Lavender', hex: '#B0A0C8' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-buds-3-fe',
    name: 'Samsung Galaxy Buds 3 FE',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds 3 FE brings ANC and Galaxy\'s trusted audio quality to a budget-friendly price. A comfortable in-ear design with IPX4 water resistance, perfect for everyday listening.',
    specs: [
      { label: 'ANC', value: 'Active Noise Cancellation' },
      { label: 'Battery', value: 'Up to 6 hrs · 21 hrs with case' },
      { label: 'Water Resistance', value: 'IPX4' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 120000 },
    ],
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Graphite', hex: '#3A3A3C' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'galaxy-fit-3',
    name: 'Samsung Galaxy Fit 3',
    brand: 'Samsung',
    category: 'Accessories',
    condition: 'New',
    description: 'Samsung Galaxy Fit 3 is the slimmest and most stylish fitness band yet, with a 1.6-inch AMOLED display, auto-workout detection, and up to 13-day battery life. Track your health without the bulk.',
    specs: [
      { label: 'Display', value: '1.6" AMOLED' },
      { label: 'Battery', value: 'Up to 13 days' },
      { label: 'Sensors', value: 'HR, SpO2, Skin temperature' },
      { label: 'Water Resistance', value: '5ATM' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 60000 },
    ],
    colors: [
      { name: 'Gray',  hex: '#8C8A8E' },
      { name: 'Pink Gold', hex: '#E8C0A0' },
      { name: 'Silver', hex: '#C8C8CC' },
    ],
    images: [IMG.ss_watch, IMG.awatch2],
  },

  {
    id: 'galaxy-buds-core',
    name: 'Samsung Galaxy Buds Core',
    brand: 'Samsung',
    category: 'Audio',
    condition: 'New',
    description: 'Galaxy Buds Core is Samsung\'s most affordable true wireless earbud. Delivers clear audio, ambient sound, and a lightweight design for casual listening throughout the day.',
    specs: [
      { label: 'Battery', value: 'Up to 8 hrs · 28 hrs with case' },
      { label: 'Driver', value: '12mm full-range' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 55000 },
    ],
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Black', hex: '#1C1C1E' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },

  {
    id: 'samsung-charger-45w',
    name: 'Samsung 45W USB-C Charger',
    brand: 'Samsung',
    category: 'Accessories',
    condition: 'New',
    description: 'Samsung\'s 45W Super Fast Charging 2.0 USB-C adapter charges compatible Galaxy phones from 0-70% in around 30 minutes. A must-have for any Galaxy power user.',
    specs: [
      { label: 'Output', value: '45W USB-C' },
      { label: 'Compatibility', value: 'Galaxy S22 Ultra and above' },
      { label: 'Standard', value: 'Super Fast Charging 2.0 (PPS)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 15000 },
    ],
    colors: [{ name: 'White', hex: '#F5F5F5' }],
    images: [IMG.pencil, IMG.magic_kb],
  },

  // ════════════════════════════════════════════════
  // GOOGLE ACCESSORIES
  // ════════════════════════════════════════════════

  {
    id: 'pixel-watch-4-45',
    name: 'Google Pixel Watch 4 (45mm)',
    brand: 'Google',
    category: 'Watches',
    condition: 'New',
    description: 'Pixel Watch 4 features the Snapdragon W5 Gen 2 chip, a large 45mm AMOLED display, improved health sensors with ECG and afib detection, and up to 48 hours battery in battery-saver mode. The best Pixel Watch yet.',
    specs: [
      { label: 'Case', value: '45mm Recycled Aluminium' },
      { label: 'Display', value: '1.52" AMOLED, 1000 nits' },
      { label: 'Chip', value: 'Snapdragon W5 Gen 2' },
      { label: 'Battery', value: 'Up to 48 hours' },
      { label: 'Health', value: 'ECG, AFib, SpO2, Skin temp' },
      { label: 'Water Resistance', value: '5ATM + IP68' },
    ],
    storageVariants: [
      { storage: '45mm', price: 540000 },
    ],
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E' },
      { name: 'Porcelain', hex: '#F0EDE8' },
      { name: 'Hazel',    hex: '#5C6840' },
    ],
    images: [IMG.gp_watch, IMG.awatch2],
  },

  {
    id: 'pixel-watch-3-45',
    name: 'Google Pixel Watch 3 (45mm)',
    brand: 'Google',
    category: 'Watches',
    condition: 'New',
    description: 'Pixel Watch 3 45mm features a larger 1.45-inch AMOLED display, ECG, advanced running metrics, and Emergency SOS. Tightly integrated with Google services and Fitbit health tracking.',
    specs: [
      { label: 'Case', value: '45mm Recycled Aluminium' },
      { label: 'Display', value: '1.45" AMOLED' },
      { label: 'Battery', value: 'Up to 36 hours' },
      { label: 'Health', value: 'ECG, SpO2, HR, Stress, Running metrics' },
    ],
    storageVariants: [
      { storage: '45mm', price: 420000 },
    ],
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E' },
      { name: 'Porcelain', hex: '#F0EDE8' },
      { name: 'Hazel',    hex: '#5C6840' },
    ],
    images: [IMG.gp_watch, IMG.awatch2],
  },

  {
    id: 'pixel-watch-2',
    name: 'Google Pixel Watch 2',
    brand: 'Google',
    category: 'Watches',
    condition: 'New',
    description: 'Pixel Watch 2 introduced cEDA continuous electrodermal activity sensor for stress tracking, redesigned multi-path HR sensor, and improved 24-hour battery life. A refined circular smartwatch for Pixel users.',
    specs: [
      { label: 'Case', value: '41mm Recycled Aluminium' },
      { label: 'Display', value: '1.2" AMOLED' },
      { label: 'Battery', value: 'Up to 24 hours' },
      { label: 'Sensors', value: 'ECG, cEDA (stress), SpO2, Multi-path HR' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 300000 },
    ],
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E' },
      { name: 'Porcelain', hex: '#F0EDE8' },
      { name: 'Bay',      hex: '#6B97C2' },
    ],
    images: [IMG.gp_watch, IMG.awatch2],
  },

  {
    id: 'pixel-buds-pro-2',
    name: 'Google Pixel Buds Pro 2',
    brand: 'Google',
    category: 'Audio',
    condition: 'New',
    description: 'Pixel Buds Pro 2 features Google Tensor A1 chip for on-device audio processing, best-in-class ANC, Silent Seal 2.0, and up to 30 hours total battery. Deep integration with Gemini AI makes them the smartest earbuds yet.',
    specs: [
      { label: 'Chip', value: 'Google Tensor A1' },
      { label: 'ANC', value: 'Silent Seal 2.0 ANC' },
      { label: 'Battery', value: 'Up to 8 hrs · 30 hrs with case' },
      { label: 'Water Resistance', value: 'IPX4 (buds) · IPX2 (case)' },
    ],
    storageVariants: [
      { storage: 'One Size', price: 220000 },
    ],
    colors: [
      { name: 'Hazel',    hex: '#5C6840' },
      { name: 'Porcelain', hex: '#F0EDE8' },
      { name: 'Mojito',   hex: '#A8D8A8' },
    ],
    images: [IMG.ss_buds, IMG.airpods],
  },
];

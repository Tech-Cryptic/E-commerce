import type { Product } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// REDMI SMARTPHONES (Extracted from official https://www.mi.com/global/product-list/phone/redmi/)
// Recent & important models only (2024-2026: Note 15 series, Note 14 series, 15 series, A7 series).
// All images sourced directly from Xiaomi's official appmifile.com CDN.
// Prices can be updated directly in the storageVariants array below.
// ═══════════════════════════════════════════════════════════════════════════

export const REDMI_PHONE_PRODUCTS: Product[] = [
  {
    id: "redmi-note-15-pro-plus-5g",
    name: "Redmi Note 15 Pro+ 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 15 Pro+ 5G is Redmi's ultimate flagship killer. Featuring a 200MP OIS pro-grade camera, massive 6,500mAh silicon-carbon battery with 100W HyperCharge, 1.5K 144Hz curved AMOLED display, Corning Gorilla Glass Victus 2, and flagship IP68/IP69K extreme durability.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" 1.5K Curved AMOLED, 144Hz, 3000 nits"
          },
          {
                "label": "Chip",
                "value": "Snapdragon 7s Gen 4 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB / 16GB LPDDR5X"
          },
          {
                "label": "Rear Camera",
                "value": "200MP OIS + 50MP Periscope + 8MP UW"
          },
          {
                "label": "Front Camera",
                "value": "32MP AI Selfie"
          },
          {
                "label": "Battery",
                "value": "6,500mAh, 100W HyperCharge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          },
          {
                "label": "Durability",
                "value": "IP66 / IP68 / IP69 / IP69K"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+12GB",
                "price": null
          },
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "512GB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/969_operatorx_operatorx_opx/08/01/2026/846cf46d605a9cee32cea412b301da00.png"
          },
          {
                "name": "Titanium Silver",
                "hex": "#C8C8CC",
                "image": "https://i02.appmifile.com/969_operatorx_operatorx_opx/08/01/2026/846cf46d605a9cee32cea412b301da00.png"
          },
          {
                "name": "Mirage Blue",
                "hex": "#3B5B82",
                "image": "https://i02.appmifile.com/969_operatorx_operatorx_opx/08/01/2026/846cf46d605a9cee32cea412b301da00.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/969_operatorx_operatorx_opx/08/01/2026/846cf46d605a9cee32cea412b301da00.png"
    ],
  },
  {
    id: "redmi-note-15-pro-5g",
    name: "Redmi Note 15 Pro 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 15 Pro 5G delivers high-end mobile imaging and endurance. Packed with a 200MP OIS camera, mammoth 6,580mAh battery with 67W turbo charging, 1.5K 120Hz CrystalRes AMOLED display, and IP68/IP69 water resistance.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" 1.5K AMOLED, 120Hz, Dolby Vision"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 7400-Ultra"
          },
          {
                "label": "RAM",
                "value": "8GB / 12GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP OIS + 8MP UW + 2MP Macro"
          },
          {
                "label": "Front Camera",
                "value": "20MP"
          },
          {
                "label": "Battery",
                "value": "6,580mAh, 67W Turbo Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          },
          {
                "label": "Durability",
                "value": "IP66 / IP68 / IP69 / IP69K"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+12GB",
                "price": null
          },
          {
                "storage": "512GB+12GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png"
          },
          {
                "name": "Forest Green",
                "hex": "#2C5D4B",
                "image": "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png"
          },
          {
                "name": "Aurora Purple",
                "hex": "#7D669E",
                "image": "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png"
    ],
  },
  {
    id: "redmi-note-15-pro",
    name: "Redmi Note 15 Pro",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 15 Pro features a gorgeous 6.67\" 120Hz AMOLED display with ultra-thin bezels, a 200MP pro-grade AI camera, massive 6,500mAh battery with 67W turbo charge, and Corning Gorilla Glass Victus 2.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100-Ultra"
          },
          {
                "label": "RAM",
                "value": "8GB / 12GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP OIS + 8MP UW + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "20MP"
          },
          {
                "label": "Battery",
                "value": "6,500mAh, 67W Turbo Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          },
          {
                "label": "Durability",
                "value": "IP65"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": null
          },
          {
                "storage": "512GB+12GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png"
          },
          {
                "name": "Ocean Teal",
                "hex": "#2B817E",
                "image": "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png"
          },
          {
                "name": "Frost White",
                "hex": "#F0EDE8",
                "image": "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png"
    ],
  },
  {
    id: "redmi-note-15-5g",
    name: "Redmi Note 15 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 15 5G combines ultra-fast 5G connectivity with a 108MP OIS dual camera, high-durability reinforced glass, 5,520mAh long-lasting battery in a featherlight slim design, and IP66 splash resistance.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 7050 5G"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "108MP OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "16MP"
          },
          {
                "label": "Battery",
                "value": "5,520mAh, 45W Turbo Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          },
          {
                "label": "Durability",
                "value": "IP66"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/562_operatorx_operatorx_opx/08/01/2026/462e7dc1130b0653c346913b8d337501.png"
          },
          {
                "name": "Glacier Blue",
                "hex": "#A2BED6",
                "image": "https://i02.appmifile.com/562_operatorx_operatorx_opx/08/01/2026/462e7dc1130b0653c346913b8d337501.png"
          },
          {
                "name": "Mint Green",
                "hex": "#A8D5BA",
                "image": "https://i02.appmifile.com/562_operatorx_operatorx_opx/08/01/2026/462e7dc1130b0653c346913b8d337501.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/562_operatorx_operatorx_opx/08/01/2026/462e7dc1130b0653c346913b8d337501.png"
    ],
  },
  {
    id: "redmi-note-15",
    name: "Redmi Note 15",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 15 brings high-end smartphone features to an everyday price point. Boasting a colossal 6,000mAh battery, vibrant 6.67\" 120Hz AMOLED display, 108MP AI main camera, and IP64 dust & water resistance.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99-Ultra"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "108MP + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 33W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          },
          {
                "label": "Durability",
                "value": "IP64"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Onyx Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/800_operatorx_operatorx_opx/08/01/2026/b79aa1573cae4278dd0c344f406337ce.png"
          },
          {
                "name": "Ice Blue",
                "hex": "#B0CBE5",
                "image": "https://i02.appmifile.com/800_operatorx_operatorx_opx/08/01/2026/b79aa1573cae4278dd0c344f406337ce.png"
          },
          {
                "name": "Sunset Orange",
                "hex": "#D97043",
                "image": "https://i02.appmifile.com/800_operatorx_operatorx_opx/08/01/2026/b79aa1573cae4278dd0c344f406337ce.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/800_operatorx_operatorx_opx/08/01/2026/b79aa1573cae4278dd0c344f406337ce.png"
    ],
  },
  {
    id: "redmi-note-14-pro-plus-5g",
    name: "Redmi Note 14 Pro+ 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14 Pro+ 5G is the pinnacle of the Note 14 lineup. Engineered with Snapdragon 7s Gen 3, a 6,200mAh battery with 120W HyperCharge, 200MP OIS portrait master camera, and IP68/IP69K All-Star durability.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" 1.5K Curved AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "Snapdragon 7s Gen 3 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB / 16GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP OIS + 50MP 2.5x Portrait + 8MP UW"
          },
          {
                "label": "Front Camera",
                "value": "20MP"
          },
          {
                "label": "Battery",
                "value": "6,200mAh, 120W HyperCharge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 14"
          },
          {
                "label": "Durability",
                "value": "IP66 / IP68 / IP69K"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+12GB",
                "price": null
          },
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "512GB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/212_operatorx_operatorx_opx/02/04/2025/8b179305518a376ee1ca5cdc22b5b554.png"
          },
          {
                "name": "Porcelain White",
                "hex": "#ECEAE6",
                "image": "https://i02.appmifile.com/212_operatorx_operatorx_opx/02/04/2025/8b179305518a376ee1ca5cdc22b5b554.png"
          },
          {
                "name": "Frost Green",
                "hex": "#88A898",
                "image": "https://i02.appmifile.com/212_operatorx_operatorx_opx/02/04/2025/8b179305518a376ee1ca5cdc22b5b554.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/212_operatorx_operatorx_opx/02/04/2025/8b179305518a376ee1ca5cdc22b5b554.png"
    ],
  },
  {
    id: "redmi-note-14-pro-5g",
    name: "Redmi Note 14 Pro 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14 Pro 5G features All-Star Durability with IP68/IP69K water resistance, MediaTek Dimensity 7300-Ultra, a 200MP OIS camera with Light Hunter sensor, and 5,500mAh battery with 45W fast charge.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" 1.5K Curved AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 7300-Ultra (4nm)"
          },
          {
                "label": "RAM",
                "value": "8GB / 12GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP OIS + 8MP UW + 2MP Macro"
          },
          {
                "label": "Front Camera",
                "value": "20MP"
          },
          {
                "label": "Battery",
                "value": "5,500mAh, 45W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 14"
          },
          {
                "label": "Durability",
                "value": "IP66 / IP68 / IP69K"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": null
          },
          {
                "storage": "512GB+12GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/177_operatorx_operatorx_opx/10/01/2025/9e49d2cf6f1afe7ab8255aef590af500.png"
          },
          {
                "name": "Twilight Purple",
                "hex": "#8870B0",
                "image": "https://i02.appmifile.com/177_operatorx_operatorx_opx/10/01/2025/9e49d2cf6f1afe7ab8255aef590af500.png"
          },
          {
                "name": "Ocean Blue",
                "hex": "#3E688C",
                "image": "https://i02.appmifile.com/177_operatorx_operatorx_opx/10/01/2025/9e49d2cf6f1afe7ab8255aef590af500.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/177_operatorx_operatorx_opx/10/01/2025/9e49d2cf6f1afe7ab8255aef590af500.png"
    ],
  },
  {
    id: "redmi-note-14-pro",
    name: "Redmi Note 14 Pro",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14 Pro delivers a premium experience at mid-range pricing. A 6.67\" curved OLED 120Hz display, Snapdragon 7s Gen 3, 200MP AI camera, and 5,500mAh battery with 90W HyperCharge make this a flagship killer.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" Curved OLED, 120Hz, 2K"
          },
          {
                "label": "Chip",
                "value": "Snapdragon 7s Gen 3"
          },
          {
                "label": "RAM",
                "value": "8GB / 12GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP + 8MP UW + 2MP Macro"
          },
          {
                "label": "Front Camera",
                "value": "20MP"
          },
          {
                "label": "Battery",
                "value": "5,500mAh, 90W HyperCharge"
          },
          {
                "label": "OS",
                "value": "Android 14, HyperOS"
          },
          {
                "label": "Water Resistance",
                "value": "IP68"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": 380000
          },
          {
                "storage": "256GB+12GB",
                "price": 430000
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/145_operatorx_operatorx_opx/10/01/2025/b381ab467340baace69840496f8cdfd3.png"
          },
          {
                "name": "Ocean Teal",
                "hex": "#2B817E",
                "image": "https://i02.appmifile.com/145_operatorx_operatorx_opx/10/01/2025/b381ab467340baace69840496f8cdfd3.png"
          },
          {
                "name": "Lavender Purple",
                "hex": "#8870B0",
                "image": "https://i02.appmifile.com/145_operatorx_operatorx_opx/10/01/2025/b381ab467340baace69840496f8cdfd3.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/145_operatorx_operatorx_opx/10/01/2025/b381ab467340baace69840496f8cdfd3.png"
    ],
  },
  {
    id: "redmi-note-14-5g",
    name: "Redmi Note 14 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14 5G offers 108MP AI photography with Optical Image Stabilization (OIS), MediaTek Dimensity 7025-Ultra, 45W turbo charging with a 5,110mAh battery, and a sleek 120Hz OLED screen.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ OLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 7025-Ultra"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "108MP OIS + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "16MP"
          },
          {
                "label": "Battery",
                "value": "5,110mAh, 45W Turbo Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 14"
          },
          {
                "label": "Durability",
                "value": "IP64"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/613_operatorx_operatorx_opx/10/01/2025/7657db17736d4f4480de86d11341aabe.png"
          },
          {
                "name": "Coral Green",
                "hex": "#5C9C82",
                "image": "https://i02.appmifile.com/613_operatorx_operatorx_opx/10/01/2025/7657db17736d4f4480de86d11341aabe.png"
          },
          {
                "name": "Phantom White",
                "hex": "#F5F5F7",
                "image": "https://i02.appmifile.com/613_operatorx_operatorx_opx/10/01/2025/7657db17736d4f4480de86d11341aabe.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/613_operatorx_operatorx_opx/10/01/2025/7657db17736d4f4480de86d11341aabe.png"
    ],
  },
  {
    id: "redmi-note-14",
    name: "Redmi Note 14",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14 is built for dependable everyday excellence. Featuring a 108MP AI camera system, 5,500mAh high-capacity battery with 33W turbo charging, and the efficient MediaTek Helio G99-Ultra chipset.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99-Ultra"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "108MP + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "16MP"
          },
          {
                "label": "Battery",
                "value": "5,500mAh, 33W Turbo Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 14"
          },
          {
                "label": "Durability",
                "value": "IP54"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/435_operatorx_operatorx_opx/03/03/2025/0c97b47c46fd8daf8eb3995840a2a0af.png"
          },
          {
                "name": "Lime Green",
                "hex": "#84BF52",
                "image": "https://i02.appmifile.com/435_operatorx_operatorx_opx/03/03/2025/0c97b47c46fd8daf8eb3995840a2a0af.png"
          },
          {
                "name": "Pearl White",
                "hex": "#F0EDE8",
                "image": "https://i02.appmifile.com/435_operatorx_operatorx_opx/03/03/2025/0c97b47c46fd8daf8eb3995840a2a0af.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/435_operatorx_operatorx_opx/03/03/2025/0c97b47c46fd8daf8eb3995840a2a0af.png"
    ],
  },
  {
    id: "redmi-note-14s",
    name: "Redmi Note 14S",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi Note 14S elevates mid-range power with a pro-grade 200MP camera system, 67W HyperCharge, 5,000mAh battery, and a sleek modern chassis with stereo dual speakers.",
    specs: [
          {
                "label": "Display",
                "value": "6.67\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99-Ultra"
          },
          {
                "label": "RAM",
                "value": "8GB"
          },
          {
                "label": "Rear Camera",
                "value": "200MP + 8MP UW + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "16MP"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 67W HyperCharge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/779_operatorx_operatorx_opx/20/03/2025/2e0ec67e782186d247ff702c84126950.png"
          },
          {
                "name": "Sky Blue",
                "hex": "#7BA8D4",
                "image": "https://i02.appmifile.com/779_operatorx_operatorx_opx/20/03/2025/2e0ec67e782186d247ff702c84126950.png"
          },
          {
                "name": "Aurora Purple",
                "hex": "#8870B0",
                "image": "https://i02.appmifile.com/779_operatorx_operatorx_opx/20/03/2025/2e0ec67e782186d247ff702c84126950.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/779_operatorx_operatorx_opx/20/03/2025/2e0ec67e782186d247ff702c84126950.png"
    ],
  },
  {
    id: "redmi-15-5g",
    name: "Redmi 15 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 15 5G is an endurance monster featuring a massive 7,000mAh battery providing up to 2 full days of worry-free battery life. Powered by Snapdragon 6s Gen 3 with 5G connectivity and a huge 6.9\" FHD+ display.",
    specs: [
          {
                "label": "Display",
                "value": "6.9\" FHD+ DotDisplay, 120Hz"
          },
          {
                "label": "Chip",
                "value": "Snapdragon 6s Gen 3 (6nm)"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP AI Dual Camera"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "7,000mAh, 33W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/932_operatorx_operatorx_opx/13/08/2025/14f80452c6d3bae80190dba0a184438f.png"
          },
          {
                "name": "Dreamy Purple",
                "hex": "#9D8EB5",
                "image": "https://i02.appmifile.com/932_operatorx_operatorx_opx/13/08/2025/14f80452c6d3bae80190dba0a184438f.png"
          },
          {
                "name": "Sage Green",
                "hex": "#8FA89B",
                "image": "https://i02.appmifile.com/932_operatorx_operatorx_opx/13/08/2025/14f80452c6d3bae80190dba0a184438f.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/932_operatorx_operatorx_opx/13/08/2025/14f80452c6d3bae80190dba0a184438f.png"
    ],
  },
  {
    id: "redmi-15",
    name: "Redmi 15",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 15 packs a monumental 7,000mAh battery for multi-day usage without anxiety. Comes with an expansive 6.9\" immersive display, 50MP AI camera, and clean Xiaomi HyperOS experience.",
    specs: [
          {
                "label": "Display",
                "value": "6.9\" FHD+ Display, 90Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G91-Ultra"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "7,000mAh, 33W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Carbon Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/95_operatorx_operatorx_opx/29/08/2025/342ec816ede0b04b02c2f6b0ed8b269b.png"
          },
          {
                "name": "Sandy Gold",
                "hex": "#D4B896",
                "image": "https://i02.appmifile.com/95_operatorx_operatorx_opx/29/08/2025/342ec816ede0b04b02c2f6b0ed8b269b.png"
          },
          {
                "name": "Ocean Blue",
                "hex": "#4A7C9F",
                "image": "https://i02.appmifile.com/95_operatorx_operatorx_opx/29/08/2025/342ec816ede0b04b02c2f6b0ed8b269b.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/95_operatorx_operatorx_opx/29/08/2025/342ec816ede0b04b02c2f6b0ed8b269b.png"
    ],
  },
  {
    id: "redmi-15c-5g",
    name: "Redmi 15C 5G",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 15C 5G brings next-generation 5G speeds, a giant 6,000mAh battery providing up to 88 hours of music playback, and a refined glass-like aesthetic in a stylish, slim package.",
    specs: [
          {
                "label": "Display",
                "value": "6.88\" HD+ 120Hz Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6100+ 5G"
          },
          {
                "label": "RAM",
                "value": "4GB / 6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP AI Main"
          },
          {
                "label": "Front Camera",
                "value": "8MP"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+4GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Starry Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/156_operatorx_operatorx_opx/15/09/2025/6f05aa362086f6b2a81c7d3e0c97237d.png"
          },
          {
                "name": "Dusk Purple",
                "hex": "#7C6B8D",
                "image": "https://i02.appmifile.com/156_operatorx_operatorx_opx/15/09/2025/6f05aa362086f6b2a81c7d3e0c97237d.png"
          },
          {
                "name": "Mint Green",
                "hex": "#A8D5BA",
                "image": "https://i02.appmifile.com/156_operatorx_operatorx_opx/15/09/2025/6f05aa362086f6b2a81c7d3e0c97237d.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/156_operatorx_operatorx_opx/15/09/2025/6f05aa362086f6b2a81c7d3e0c97237d.png"
    ],
  },
  {
    id: "redmi-15c",
    name: "Redmi 15C",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 15C features a slim 7.99mm profile, long-lasting 6,000mAh battery for all-day reliability, a large 6.88\" 120Hz display, and 50MP AI photography.",
    specs: [
          {
                "label": "Display",
                "value": "6.88\" HD+ 120Hz Dot Drop"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G81-Ultra"
          },
          {
                "label": "RAM",
                "value": "4GB / 6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP + Auxiliary Lens"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+4GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/541_operatorx_operatorx_opx/22/08/2025/c15b4756b67078d1129a0f13ecb9aff4.png"
          },
          {
                "name": "Navy Blue",
                "hex": "#2B3D54",
                "image": "https://i02.appmifile.com/541_operatorx_operatorx_opx/22/08/2025/c15b4756b67078d1129a0f13ecb9aff4.png"
          },
          {
                "name": "Sage Green",
                "hex": "#8FA89B",
                "image": "https://i02.appmifile.com/541_operatorx_operatorx_opx/22/08/2025/c15b4756b67078d1129a0f13ecb9aff4.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/541_operatorx_operatorx_opx/22/08/2025/c15b4756b67078d1129a0f13ecb9aff4.png"
    ],
  },
  {
    id: "redmi-14c",
    name: "Redmi 14C",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 14C redefines entry-level design with an ultra-slim 8.22mm circular camera deco, immersive 6.88\" 120Hz display, 50MP AI dual camera, and 5,160mAh battery with 18W fast charging.",
    specs: [
          {
                "label": "Display",
                "value": "6.88\" HD+ 120Hz Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G81-Ultra"
          },
          {
                "label": "RAM",
                "value": "4GB / 6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "5,160mAh, 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+4GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/10_operatorx_operatorx_opx/30/08/2024/d1c6e1733370c9ac6182ab5613bfde2c.png"
          },
          {
                "name": "Sage Green",
                "hex": "#6F8A74",
                "image": "https://i02.appmifile.com/10_operatorx_operatorx_opx/30/08/2024/d1c6e1733370c9ac6182ab5613bfde2c.png"
          },
          {
                "name": "Dreamy Purple",
                "hex": "#9D8EB5",
                "image": "https://i02.appmifile.com/10_operatorx_operatorx_opx/30/08/2024/d1c6e1733370c9ac6182ab5613bfde2c.png"
          },
          {
                "name": "Starry Blue",
                "hex": "#3B5B82",
                "image": "https://i02.appmifile.com/10_operatorx_operatorx_opx/30/08/2024/d1c6e1733370c9ac6182ab5613bfde2c.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/10_operatorx_operatorx_opx/30/08/2024/d1c6e1733370c9ac6182ab5613bfde2c.png"
    ],
  },
  {
    id: "redmi-13x",
    name: "Redmi 13x",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi 13x features a flagship-grade 108MP super-clear camera with 3X lossless in-sensor zoom, premium glass back design, 5,030mAh battery with 33W fast charging, and a 6.79\" 90Hz FHD+ display.",
    specs: [
          {
                "label": "Display",
                "value": "6.79\" FHD+ 90Hz Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G91-Ultra"
          },
          {
                "label": "RAM",
                "value": "6GB / 8GB"
          },
          {
                "label": "Rear Camera",
                "value": "108MP 3X Lossless Zoom + 2MP"
          },
          {
                "label": "Front Camera",
                "value": "13MP"
          },
          {
                "label": "Battery",
                "value": "5,030mAh, 33W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+6GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/424_operatorx_operatorx_opx/31/03/2025/3a7891f649c5398fc099271618f51c1d.png"
          },
          {
                "name": "Moonlight Silver",
                "hex": "#D6D8DC",
                "image": "https://i02.appmifile.com/424_operatorx_operatorx_opx/31/03/2025/3a7891f649c5398fc099271618f51c1d.png"
          },
          {
                "name": "Sandy Gold",
                "hex": "#D4B896",
                "image": "https://i02.appmifile.com/424_operatorx_operatorx_opx/31/03/2025/3a7891f649c5398fc099271618f51c1d.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/424_operatorx_operatorx_opx/31/03/2025/3a7891f649c5398fc099271618f51c1d.png"
    ],
  },
  {
    id: "redmi-a7-pro",
    name: "Redmi A7 Pro",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi A7 Pro delivers exceptional budget capability with a giant 6.9\" display, long-running 6,000mAh battery, 50MP AI dual camera, and smooth Xiaomi HyperOS optimization.",
    specs: [
          {
                "label": "Display",
                "value": "6.9\" HD+ Dot Drop, 90Hz"
          },
          {
                "label": "Chip",
                "value": "Unisoc T616 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "4GB / 6GB"
          },
          {
                "label": "Rear Camera",
                "value": "50MP AI Dual Camera"
          },
          {
                "label": "Front Camera",
                "value": "8MP"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 18W Type-C"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          }
    ],
    storageVariants: [
          {
                "storage": "64GB+4GB",
                "price": null
          },
          {
                "storage": "128GB+4GB",
                "price": null
          },
          {
                "storage": "128GB+6GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/276_operatorx_operatorx_opx/30/03/2026/e2f46cfb57ec4ea6d1b17a159ed462f9.png"
          },
          {
                "name": "Forest Green",
                "hex": "#3A6A3A",
                "image": "https://i02.appmifile.com/276_operatorx_operatorx_opx/30/03/2026/e2f46cfb57ec4ea6d1b17a159ed462f9.png"
          },
          {
                "name": "Glacier Blue",
                "hex": "#8DB3D9",
                "image": "https://i02.appmifile.com/276_operatorx_operatorx_opx/30/03/2026/e2f46cfb57ec4ea6d1b17a159ed462f9.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/276_operatorx_operatorx_opx/30/03/2026/e2f46cfb57ec4ea6d1b17a159ed462f9.png"
    ],
  },
  {
    id: "redmi-a7",
    name: "Redmi A7",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi A7 offers clean, reliable everyday functionality with a large 6.88\" display, 5,200mAh battery, sleek refined design, and responsive day-to-day multitasking.",
    specs: [
          {
                "label": "Display",
                "value": "6.88\" HD+ Dot Drop, 90Hz"
          },
          {
                "label": "Chip",
                "value": "Unisoc T606 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "3GB / 4GB"
          },
          {
                "label": "Rear Camera",
                "value": "32MP AI Camera"
          },
          {
                "label": "Front Camera",
                "value": "5MP"
          },
          {
                "label": "Battery",
                "value": "5,200mAh, 10W Type-C"
          },
          {
                "label": "OS",
                "value": "Xiaomi HyperOS, Android 15"
          }
    ],
    storageVariants: [
          {
                "storage": "64GB+3GB",
                "price": null
          },
          {
                "storage": "128GB+4GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/869_operatorx_operatorx_opx/16/04/2026/1ce226a75b287e80dd636084da2399b5.png"
          },
          {
                "name": "Starry Blue",
                "hex": "#4A6FA5",
                "image": "https://i02.appmifile.com/869_operatorx_operatorx_opx/16/04/2026/1ce226a75b287e80dd636084da2399b5.png"
          },
          {
                "name": "Meadow Green",
                "hex": "#7CA682",
                "image": "https://i02.appmifile.com/869_operatorx_operatorx_opx/16/04/2026/1ce226a75b287e80dd636084da2399b5.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/869_operatorx_operatorx_opx/16/04/2026/1ce226a75b287e80dd636084da2399b5.png"
    ],
  },
  {
    id: "redmi-a5",
    name: "Redmi A5",
    brand: "Redmi",
    category: "Phones",
    condition: "New",
    description: "The Redmi A5 is a clean, capable entry-level smartphone built for essentials. A 6.88\" HD+ display, 32MP dual camera, 5,200mAh battery, and Android 15 out of the box — reliable everyday performance at an honest price.",
    specs: [
          {
                "label": "Display",
                "value": "6.88\" HD+ LCD, 90Hz"
          },
          {
                "label": "Chip",
                "value": "Helio G81"
          },
          {
                "label": "RAM",
                "value": "3GB / 4GB / 6GB"
          },
          {
                "label": "Rear Camera",
                "value": "32MP + Auxiliary Lens"
          },
          {
                "label": "Front Camera",
                "value": "5MP"
          },
          {
                "label": "Battery",
                "value": "5,200mAh, 10W wired"
          },
          {
                "label": "OS",
                "value": "Android 15"
          }
    ],
    storageVariants: [
          {
                "storage": "64GB+3GB",
                "price": 75000
          },
          {
                "storage": "128GB+4GB",
                "price": 95000
          },
          {
                "storage": "128GB+6GB",
                "price": 115000
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#1C1C1E",
                "image": "https://i02.appmifile.com/650_operatorx_operatorx_opx/02/04/2025/8875a4465264d80830719df35e732aea.png"
          },
          {
                "name": "Forest Green",
                "hex": "#3A6A3A",
                "image": "https://i02.appmifile.com/650_operatorx_operatorx_opx/02/04/2025/8875a4465264d80830719df35e732aea.png"
          },
          {
                "name": "Sandy Gold",
                "hex": "#D4B896",
                "image": "https://i02.appmifile.com/650_operatorx_operatorx_opx/02/04/2025/8875a4465264d80830719df35e732aea.png"
          }
    ],
    images: [
          "https://i02.appmifile.com/650_operatorx_operatorx_opx/02/04/2025/8875a4465264d80830719df35e732aea.png"
    ],
  },
];

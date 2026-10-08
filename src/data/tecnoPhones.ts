import type { Product } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// TECNO SMARTPHONES (Extracted from official https://www.tecno-mobile.com/phones/product-list/)
// All images and color variants sourced directly from official Tecno CloudFront CDN.
// Prices can be updated directly in the storageVariants array below.
// ═══════════════════════════════════════════════════════════════════════════

export const TECNO_PHONE_PRODUCTS: Product[] = [
  {
    id: "tecno-camon-slim-5g",
    name: "Tecno CAMON Slim 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON Slim 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Metallic Silver",
                "hex": "#e5e5e5",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/6c6203d3e82024ad55f648789bb60f93.png"
          },
          {
                "name": "Azure Blue",
                "hex": "#d5e7f6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e9e120630c4056e179e0e022d32a3867.png"
          },
          {
                "name": "Midnight Black",
                "hex": "#1e1e20",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c617d1d6cf018fe60fe00c83897cb77e.png"
          },
          {
                "name": "Nebula Purple",
                "hex": "#986b7a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/746e251dbb79c32811408a3c7e9a925c.png"
          },
          {
                "name": "Azure Blue 2",
                "hex": "#4478c0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7ef78999ff03632cd69997406b67cb51.png"
          },
          {
                "name": "Crimson Red",
                "hex": "#b35373",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/540e83bb2ad46cd92f78374a05e09153.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/6c6203d3e82024ad55f648789bb60f93.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e9e120630c4056e179e0e022d32a3867.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c617d1d6cf018fe60fe00c83897cb77e.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/746e251dbb79c32811408a3c7e9a925c.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7ef78999ff03632cd69997406b67cb51.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/540e83bb2ad46cd92f78374a05e09153.png"
    ],
  },
  {
    id: "tecno-pova-8-pro-5g-tonino-lamborghini-limited-edition",
    name: "Tecno POVA 8 Pro 5G Tonino Lamborghini Limited Edition",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The limited-edition POVA 8 Pro 5G Tonino Lamborghini Edition blends supercar racing aesthetics with high-performance mobile gaming. Cyber Mecha accents, bespoke UI theme, and blazing Dimensity 5G power.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Titanium Grey",
                "hex": "#393a3d",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/80928ef24e252a1be4baa0a62ea61ef6.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/80928ef24e252a1be4baa0a62ea61ef6.webp"
    ],
  },
  {
    id: "tecno-spark-50c",
    name: "Tecno SPARK 50C",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 50C brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Titanium Grey",
                "hex": "#672a43",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4d33a2e3d931afcaf5c1ae429daae36d.png"
          },
          {
                "name": "Titanium Grey 2",
                "hex": "#ff9645",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/5b4aa64eae81340597904bbd7b9be083.webp"
          },
          {
                "name": "Nebula Purple",
                "hex": "#847d7d",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/22d75185361354b0713c5ca0e6cc8c9c.webp"
          },
          {
                "name": "Midnight Black",
                "hex": "#252525",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/69361cf1e20082a41a9f7747cd5f53bf.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4d33a2e3d931afcaf5c1ae429daae36d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/5b4aa64eae81340597904bbd7b9be083.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/22d75185361354b0713c5ca0e6cc8c9c.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/69361cf1e20082a41a9f7747cd5f53bf.webp"
    ],
  },
  {
    id: "tecno-pova-8-pro-5g",
    name: "Tecno POVA 8 Pro 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 8 Pro 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Pure White",
                "hex": "#f2f3f3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ffa709e88c7594d469e785a14cefa57e.webp"
          },
          {
                "name": "Midnight Black",
                "hex": "#424c51",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/142e3b41ec9a60f1810410484c0a3dfd.webp"
          },
          {
                "name": "Forest Green",
                "hex": "#5f6858",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0a2516646f55da7a03b350b79511994a.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ffa709e88c7594d469e785a14cefa57e.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/142e3b41ec9a60f1810410484c0a3dfd.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0a2516646f55da7a03b350b79511994a.webp"
    ],
  },
  {
    id: "tecno-camon-slim",
    name: "Tecno CAMON Slim",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON Slim is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Neo Mondrian",
                "hex": "#ecedee",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0850a3a2a31aa8f38e695422118d0ac3.png"
          },
          {
                "name": "Prism Black",
                "hex": "#353637",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/dc0d642122ebf8d65a49e61cccbd541c.png"
          },
          {
                "name": "Jungle Green",
                "hex": "#009d82",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/23c5d7125df75c7c1f8cc2997e8b8b84.png"
          },
          {
                "name": "Van Gogh Blue",
                "hex": "#354b93",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/46f9672aa49568422ca21d3b7a604cb7.png"
          },
          {
                "name": "Burgundy Red",
                "hex": "#673844",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/05c6d4a5ecf61b3ed71b86f3478540b4.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0850a3a2a31aa8f38e695422118d0ac3.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/dc0d642122ebf8d65a49e61cccbd541c.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/23c5d7125df75c7c1f8cc2997e8b8b84.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/46f9672aa49568422ca21d3b7a604cb7.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/05c6d4a5ecf61b3ed71b86f3478540b4.png"
    ],
  },
  {
    id: "tecno-pova-8-5g",
    name: "Tecno POVA 8 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 8 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Metallic Silver",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ff001c832564f0329345ead83d6705c6.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#525456",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/99884b8449709eff633355a43461fb24.png"
          },
          {
                "name": "Metallic Silver 2",
                "hex": "#ffd8be",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a5424139eb91d877be3467d4a9412517.png"
          },
          {
                "name": "Azure Blue",
                "hex": "#4c6b70",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7838a8d30f16ae2aa5bc7ba55b47dc9e.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ff001c832564f0329345ead83d6705c6.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/99884b8449709eff633355a43461fb24.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a5424139eb91d877be3467d4a9412517.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7838a8d30f16ae2aa5bc7ba55b47dc9e.png"
    ],
  },
  {
    id: "tecno-spark-50-pro",
    name: "Tecno SPARK 50 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 50 Pro brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Titanium Grey",
                "hex": "#4e4e4e",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/48c34c00f6a656cbbe9945975b50ea0d.png"
          },
          {
                "name": "Metallic Silver",
                "hex": "#d8d9da",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/451ad573fa6721c328547d7560fb142d.png"
          },
          {
                "name": "Azure Blue",
                "hex": "#2b3c87",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ed7528f41f91ae9e409c438959030063.png"
          },
          {
                "name": "Sunset Orange",
                "hex": "#ff9036",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/5d759224a7847c247cc50752f8a6a6b3.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/48c34c00f6a656cbbe9945975b50ea0d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/451ad573fa6721c328547d7560fb142d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ed7528f41f91ae9e409c438959030063.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/5d759224a7847c247cc50752f8a6a6b3.png"
    ],
  },
  {
    id: "tecno-spark-50-5g",
    name: "Tecno SPARK 50 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 50 5G brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6300 5G"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Purple",
                "hex": "#705599",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/673850da7e30ed54c0a15e1e364613a8.png"
          },
          {
                "name": "Champagne Gold",
                "hex": "#d6d2c3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/30d27de146643f4ac206b564af678a56.png"
          },
          {
                "name": "Green",
                "hex": "#8eb994",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/42215ed1705771bf7d7ad8abcf64b017.png"
          },
          {
                "name": "Titanium",
                "hex": "#97958f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/6934099ac87fcc2ac2c3412a1234eabb.png"
          },
          {
                "name": "Black",
                "hex": "#2a2a2c",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/fb4bf2f4650e8686d6b93c922fbd3cdb.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/673850da7e30ed54c0a15e1e364613a8.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/30d27de146643f4ac206b564af678a56.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/42215ed1705771bf7d7ad8abcf64b017.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/6934099ac87fcc2ac2c3412a1234eabb.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/fb4bf2f4650e8686d6b93c922fbd3cdb.png"
    ],
  },
  {
    id: "tecno-spark-50",
    name: "Tecno SPARK 50",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 50 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Blue",
                "hex": "#048ce3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/42e8690a1ed96986de7b3fbc9fe161f5.png"
          },
          {
                "name": "Titanium",
                "hex": "#d8d9da",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b98c0565d936f45337dec29935f6daa.png"
          },
          {
                "name": "Black",
                "hex": "#6c6c6c",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/1def9c01825d853d8b1865e76f52f4ba.png"
          },
          {
                "name": "Purple",
                "hex": "#ab9bdb",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b68f91a81bda9d5eb4de48da02566d9a.png"
          },
          {
                "name": "Pink",
                "hex": "#e59ca9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/23f83fd2590e16e6f604cd2ca6d6b948.png"
          },
          {
                "name": "Orange",
                "hex": "#e86c29",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/da342359c24fc79422ed5f330dae0e78.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/42e8690a1ed96986de7b3fbc9fe161f5.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b98c0565d936f45337dec29935f6daa.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/1def9c01825d853d8b1865e76f52f4ba.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b68f91a81bda9d5eb4de48da02566d9a.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/23f83fd2590e16e6f604cd2ca6d6b948.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/da342359c24fc79422ed5f330dae0e78.png"
    ],
  },
  {
    id: "tecno-camon-50-ultra-5g",
    name: "Tecno CAMON 50 Ultra 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 50 Ultra 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Titanium Grey",
                "hex": "#505050",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/1c866659a067929b931ec3f9c8c87f66.webp"
          },
          {
                "name": "Emerald Green",
                "hex": "#4d7469",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/f9dd8ec07912751bda0e9d0fd5cf5055.webp"
          },
          {
                "name": "Metallic Silver",
                "hex": "#d7d5d3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/2150405c1432fb1a37ed08c6c6c8f787.webp"
          },
          {
                "name": "Sunset Orange",
                "hex": "#e47233",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/78a3a732574a23f2f549ad74d33b66e0.webp"
          },
          {
                "name": "Metallic Silver 2",
                "hex": "#bfbdd2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4471ef60820b76ab3f90dc1136d5846f.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/1c866659a067929b931ec3f9c8c87f66.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/f9dd8ec07912751bda0e9d0fd5cf5055.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/2150405c1432fb1a37ed08c6c6c8f787.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/78a3a732574a23f2f549ad74d33b66e0.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4471ef60820b76ab3f90dc1136d5846f.webp"
    ],
  },
  {
    id: "tecno-camon-50-pro",
    name: "Tecno CAMON 50 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 50 Pro is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
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
                "name": "Titanium Grey",
                "hex": "#545454",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/743fb5865500321a60a07118d870e5b3.webp"
          },
          {
                "name": "Emerald Green",
                "hex": "#2c9e85",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/dc00f82f509312c74c8cfaee38478e86.webp"
          },
          {
                "name": "Metallic Silver",
                "hex": "#c9c7c4",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/bbb1beae62fd44c21d2eecd4e6153e38.webp"
          },
          {
                "name": "Titanium Grey 2",
                "hex": "#3f512a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/640fe6c146175829bc71c926db96918e.webp"
          },
          {
                "name": "Metallic Silver 2",
                "hex": "#c1a5d4",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/40f107620721281932fdf3e886077da1.webp"
          },
          {
                "name": "Azure Blue",
                "hex": "#c4d2e7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/115838d3d2f7ee2198033b4ea6357833.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/743fb5865500321a60a07118d870e5b3.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/dc00f82f509312c74c8cfaee38478e86.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/bbb1beae62fd44c21d2eecd4e6153e38.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/640fe6c146175829bc71c926db96918e.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/40f107620721281932fdf3e886077da1.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/115838d3d2f7ee2198033b4ea6357833.webp"
    ],
  },
  {
    id: "tecno-camon-50",
    name: "Tecno CAMON 50",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 50 is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
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
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3742a2321989fcf66c60917a6350e7e6.webp"
          },
          {
                "name": "Emerald Green",
                "hex": "#50c878",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3ba019a93491030c6f97867bebeeae36.webp"
          },
          {
                "name": "Metallic Silver",
                "hex": "#d6d4d0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/50b4a5c2150bdd15d870c08ee4de978c.webp"
          },
          {
                "name": "Titanium Grey",
                "hex": "#515c4d",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/44252f38fa92e0a4fe778d052d10162b.webp"
          },
          {
                "name": "Titanium Grey 2",
                "hex": "#b79ccd",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/472f6b86386f64f11ff7b98a7aedf850.webp"
          },
          {
                "name": "Metallic Silver 2",
                "hex": "#c0cea5",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4f0895ebb2433e48d811d453c262ad27.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3742a2321989fcf66c60917a6350e7e6.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3ba019a93491030c6f97867bebeeae36.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/50b4a5c2150bdd15d870c08ee4de978c.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/44252f38fa92e0a4fe778d052d10162b.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/472f6b86386f64f11ff7b98a7aedf850.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4f0895ebb2433e48d811d453c262ad27.webp"
    ],
  },
  {
    id: "tecno-pova-curve-2-5g",
    name: "Tecno POVA Curve 2 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA Curve 2 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Mystic Purple",
                "hex": "#8e92c1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/17063e58fbf56bc4fbf9b2a59f060af1.webp"
          },
          {
                "name": "Melting Silver",
                "hex": "#a8abb3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/47b511368af08c38098e6f278af50f01.webp"
          },
          {
                "name": "Storm Titanium",
                "hex": "#686868",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7d4c038264fa0f5f112d4e57149432e6.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/17063e58fbf56bc4fbf9b2a59f060af1.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/47b511368af08c38098e6f278af50f01.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7d4c038264fa0f5f112d4e57149432e6.webp"
    ],
  },
  {
    id: "tecno-spark-go-3",
    name: "Tecno SPARK Go 3",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK Go 3 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Blue",
                "hex": "#2f50a9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/89b9e2d74754011ac81690ccb880e751.png"
          },
          {
                "name": "Black",
                "hex": "#282f38",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/f4d82d4b2cda88ac748723dcb9b6d93d.png"
          },
          {
                "name": "Titanium",
                "hex": "#b9bac0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7378175348dc65ad05b421e752faf1a.png"
          },
          {
                "name": "Purple",
                "hex": "#f1eaf8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0dcc9d921d9f83a6e1de193bd06bc4ec.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/89b9e2d74754011ac81690ccb880e751.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/f4d82d4b2cda88ac748723dcb9b6d93d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7378175348dc65ad05b421e752faf1a.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0dcc9d921d9f83a6e1de193bd06bc4ec.png"
    ],
  },
  {
    id: "tecno-spark-slim",
    name: "Tecno SPARK Slim",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK Slim brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
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
                "hex": "#e4e4e6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/54d1493b87d34ec0314e8fe4e24188ce.png"
          },
          {
                "name": "Midnight Black 2",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0d65e3c87903bac07a2ccaa89649b58a.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/54d1493b87d34ec0314e8fe4e24188ce.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0d65e3c87903bac07a2ccaa89649b58a.png"
    ],
  },
  {
    id: "tecno-pova-slim-5g",
    name: "Tecno POVA Slim 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA Slim 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
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
                "hex": "#a8c1dd",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/08e7b0b8cd1266b43c81dc50a278850b.png"
          },
          {
                "name": "Pure White",
                "hex": "#e4e4e6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3e2d6b349b47d8b65a51cd1001bfaf4e.png"
          },
          {
                "name": "Midnight Black 2",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a91f08401512204203a8366ae12060e0.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/08e7b0b8cd1266b43c81dc50a278850b.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3e2d6b349b47d8b65a51cd1001bfaf4e.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a91f08401512204203a8366ae12060e0.png"
    ],
  },
  {
    id: "tecno-spark-40-5g",
    name: "Tecno SPARK 40 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 40 5G brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6300 5G"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Blue",
                "hex": "#ccdae7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e7671cb13d1b4e1416961795f39a92f5.png"
          },
          {
                "name": "Black",
                "hex": "#51555c",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/bc10d2678de3ecc57fa592aae5aaad1b.png"
          },
          {
                "name": "Green",
                "hex": "#a7dacf",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a92ee282e0d729d82902339de423af8b.png"
          },
          {
                "name": "Red",
                "hex": "#885657",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9f8940190aba1a736f0af8e167ea11b5.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e7671cb13d1b4e1416961795f39a92f5.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/bc10d2678de3ecc57fa592aae5aaad1b.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a92ee282e0d729d82902339de423af8b.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9f8940190aba1a736f0af8e167ea11b5.png"
    ],
  },
  {
    id: "tecno-spark-40c",
    name: "Tecno SPARK 40C",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 40C brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
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
                "hex": "#f0f1f2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b5d7c482449412429e8266166423501.png"
          },
          {
                "name": "Midnight Black 2",
                "hex": "#beccd8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/96a89378cbfc4d9071fc7329bed33f88.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#dadbda",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/85bb3d2aa308be1385dfea3a9ddaabbc.png"
          },
          {
                "name": "Midnight Black 3",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/61944cdb1470aa0dde504ed5d7580ad6.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b5d7c482449412429e8266166423501.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/96a89378cbfc4d9071fc7329bed33f88.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/85bb3d2aa308be1385dfea3a9ddaabbc.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/61944cdb1470aa0dde504ed5d7580ad6.png"
    ],
  },
  {
    id: "tecno-spark-40-pro-plus",
    name: "Tecno SPARK 40 Pro+",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 40 Pro+ brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7e6241f691e7d5c7f33ac2dab138f5f.png"
          },
          {
                "name": "White",
                "hex": "#efefef",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/2f2a1f6138ae802d9d84dd76f0496859.png"
          },
          {
                "name": "Grey",
                "hex": "#c3c0b8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8ed28a46a6e68fa9e69d8d0fd06c3099.png"
          },
          {
                "name": "Green",
                "hex": "#d1e7c4",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ad0942250eb3f7b70d8df8e050af29a0.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7e6241f691e7d5c7f33ac2dab138f5f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/2f2a1f6138ae802d9d84dd76f0496859.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8ed28a46a6e68fa9e69d8d0fd06c3099.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ad0942250eb3f7b70d8df8e050af29a0.png"
    ],
  },
  {
    id: "tecno-spark-40-pro",
    name: "Tecno SPARK 40 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 40 Pro brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4d0d3ccdb35b22c2c44cd25ce2136880.png"
          },
          {
                "name": "Grey",
                "hex": "#757575",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/15c810272e48f2046d5237024b8969c5.png"
          },
          {
                "name": "Blue",
                "hex": "#6495ed",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b5784c01a3b78658d4ef20799c24bceb.png"
          },
          {
                "name": "Green",
                "hex": "#b0c9bc",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/cf84b31df78d1ca363c50faaca896874.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4d0d3ccdb35b22c2c44cd25ce2136880.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/15c810272e48f2046d5237024b8969c5.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b5784c01a3b78658d4ef20799c24bceb.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/cf84b31df78d1ca363c50faaca896874.png"
    ],
  },
  {
    id: "tecno-spark-40",
    name: "Tecno SPARK 40",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 40 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#2f2f2f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/34090a9164f99cbfb603bbc4c10cc1f8.png"
          },
          {
                "name": "Grey",
                "hex": "#d6d6d6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c3499d6731deda148cbf52701cf9285f.png"
          },
          {
                "name": "White",
                "hex": "#f2f4f5",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/d8dbb73564a13bb0e60f899de9e126ea.png"
          },
          {
                "name": "Blue",
                "hex": "#94ade8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/aa900d1786cd153a24b1af34ac8f24c1.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#ed864a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/37e6ad318361dbeaf01a46c9cdc4754e.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/34090a9164f99cbfb603bbc4c10cc1f8.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c3499d6731deda148cbf52701cf9285f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/d8dbb73564a13bb0e60f899de9e126ea.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/aa900d1786cd153a24b1af34ac8f24c1.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/37e6ad318361dbeaf01a46c9cdc4754e.png"
    ],
  },
  {
    id: "tecno-spark-go-2",
    name: "Tecno SPARK Go 2",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK Go 2 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Black",
                "hex": "#282f38",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c291670b1dd467da2e51694b7ffea3b6.png"
          },
          {
                "name": "Grey",
                "hex": "#757575",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7aec3c2ac6ddccedfa693bdda7aaa201.png"
          },
          {
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b1de24f883f72af9c4af665916ee0665.png"
          },
          {
                "name": "Green",
                "hex": "#40e0d0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/2e8b68890f0e7c6c12be9b0b30136023.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c291670b1dd467da2e51694b7ffea3b6.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7aec3c2ac6ddccedfa693bdda7aaa201.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b1de24f883f72af9c4af665916ee0665.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/2e8b68890f0e7c6c12be9b0b30136023.png"
    ],
  },
  {
    id: "tecno-pova-7-pro-5g",
    name: "Tecno POVA 7 Pro 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 7 Pro 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/98aa354451add98e4e6064411bed8fac.png"
          },
          {
                "name": "Metallic Silver",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9906c90ed3705021cfbdac700e16e33b.png"
          },
          {
                "name": "Teal Green",
                "hex": "#97d2c7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/dae995daf54391ce2afc52c14f2bcce3.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/98aa354451add98e4e6064411bed8fac.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9906c90ed3705021cfbdac700e16e33b.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/dae995daf54391ce2afc52c14f2bcce3.png"
    ],
  },
  {
    id: "tecno-pova-7-5g",
    name: "Tecno POVA 7 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 7 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
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
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/952f956f50b951a2e1cedbe600e3210a.png"
          },
          {
                "name": "Metallic Silver",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0359d6a9fb0666f61be8c7f21bbf9c74.png"
          },
          {
                "name": "Teal Green",
                "hex": "#97d2c7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/20f4a5def6af44770949c0b3e901713e.png"
          },
          {
                "name": "Pink",
                "hex": "#f1d8d2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/d6f5489b0c271e3d860ff0d870439e46.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/952f956f50b951a2e1cedbe600e3210a.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0359d6a9fb0666f61be8c7f21bbf9c74.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/20f4a5def6af44770949c0b3e901713e.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/d6f5489b0c271e3d860ff0d870439e46.png"
    ],
  },
  {
    id: "tecno-pova-7-ultra-5g",
    name: "Tecno POVA 7 Ultra 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 7 Ultra 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Pure White",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9e23c99080a19085d267a6fb71d3acb6.png"
          },
          {
                "name": "Black",
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8c5120153a0763f57f9e795ecbd19116.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9e23c99080a19085d267a6fb71d3acb6.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8c5120153a0763f57f9e795ecbd19116.png"
    ],
  },
  {
    id: "tecno-pova-7",
    name: "Tecno POVA 7",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 7 delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99 Ultimate"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Gold",
                "hex": "#dbc6b9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8df750f5f84032ce89e5858440882f68.png"
          },
          {
                "name": "Grey",
                "hex": "#bfbfbf",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/28029c31b7ec10969ace7a5b6ae1eb69.png"
          },
          {
                "name": "Black",
                "hex": "#2f2f2f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/055d848846143b1553059d228fa51972.png"
          },
          {
                "name": "Aqua Green",
                "hex": "#83d8c6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/043959f57fff49f6ab9e6ed5e4388a80.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8df750f5f84032ce89e5858440882f68.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/28029c31b7ec10969ace7a5b6ae1eb69.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/055d848846143b1553059d228fa51972.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/043959f57fff49f6ab9e6ed5e4388a80.png"
    ],
  },
  {
    id: "tecno-pop-20",
    name: "Tecno POP 20",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POP 20 provides smart essentials at an ultra-accessible value: immersive punch-hole screen with Dynamic Port notifications, dual DTS stereo speakers, and long-lasting 5,000mAh battery.",
    specs: [
          {
                "label": "Display",
                "value": "6.6\" HD+ 90Hz Hole-Screen with Dynamic Port"
          },
          {
                "label": "Chip",
                "value": "Unisoc T606 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "4GB (+4GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "13MP Dual AI Camera with Dual Flash"
          },
          {
                "label": "Front Camera",
                "value": "8MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 10W Type-C"
          },
          {
                "label": "OS",
                "value": "Android 13/14 Go Edition, HiOS"
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
                "name": "Black",
                "hex": "#282f38",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7244702536e908608d82f232453bd095.png"
          },
          {
                "name": "Titanium",
                "hex": "#b9bac0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/256360d3beb1236178135a8479a3dbc0.png"
          },
          {
                "name": "Purple",
                "hex": "#f1eaf8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/cf56986dbf509f1f903292de1c9de9eb.png"
          },
          {
                "name": "Blue",
                "hex": "#2f50a9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4316dbfb3189389f93a5fa0ecfe494db.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7244702536e908608d82f232453bd095.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/256360d3beb1236178135a8479a3dbc0.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/cf56986dbf509f1f903292de1c9de9eb.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4316dbfb3189389f93a5fa0ecfe494db.png"
    ],
  },
  {
    id: "tecno-pova-curve-5g",
    name: "Tecno POVA Curve 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA Curve 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/de195ea586edda553bc64398b199ebb1.png"
          },
          {
                "name": "White",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/fd355dd4a731c5a3efc9c0cb8a7643e4.png"
          },
          {
                "name": "Emerald Green",
                "hex": "#97d2c7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e7f23ae6a85d14fb6310ae9ffe875d39.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/de195ea586edda553bc64398b199ebb1.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/fd355dd4a731c5a3efc9c0cb8a7643e4.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e7f23ae6a85d14fb6310ae9ffe875d39.png"
    ],
  },
  {
    id: "tecno-camon-40-premier-5g",
    name: "Tecno CAMON 40 Premier 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 40 Premier 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/54859789be41fdd9d1852843a4f88cd5.png"
          },
          {
                "name": "Green",
                "hex": "#50c878",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4e282e894d92f4d32116bf2eadcada7d.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/54859789be41fdd9d1852843a4f88cd5.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4e282e894d92f4d32116bf2eadcada7d.png"
    ],
  },
  {
    id: "tecno-camon-40-pro-5g",
    name: "Tecno CAMON 40 Pro 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 40 Pro 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
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
                "name": "Black",
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/cc9fd38489efc76d5ed41ab50a51daba.png"
          },
          {
                "name": "Green",
                "hex": "#50c878",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b68ea6363ce4df52019d81319cf8848f.png"
          },
          {
                "name": "White",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3378d0fe8a579c735a94237a598034cf.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#bbb7b7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/83738fec494c258f77312fa25252d03b.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/cc9fd38489efc76d5ed41ab50a51daba.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b68ea6363ce4df52019d81319cf8848f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3378d0fe8a579c735a94237a598034cf.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/83738fec494c258f77312fa25252d03b.png"
    ],
  },
  {
    id: "tecno-camon-40-pro",
    name: "Tecno CAMON 40 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 40 Pro is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "256GB+8GB",
                "price": 310000
          },
          {
                "storage": "256GB+12GB",
                "price": 360000
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/90813b55118df81654a902cdf9b24b8f.png"
          },
          {
                "name": "Green",
                "hex": "#50c878",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c453bbfac52d8698cbd7cfb141a12fce.png"
          },
          {
                "name": "White",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/22d2da10e3f3c3bb31a8a56b26112916.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#bbb7b7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/7cdfea5f7502d66d50be6a127fb64a80.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/90813b55118df81654a902cdf9b24b8f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c453bbfac52d8698cbd7cfb141a12fce.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/22d2da10e3f3c3bb31a8a56b26112916.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/7cdfea5f7502d66d50be6a127fb64a80.png"
    ],
  },
  {
    id: "tecno-camon-40",
    name: "Tecno CAMON 40",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 40 is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#191a1a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/f6160f5ccff45409aa90da0f3873a4e7.png"
          },
          {
                "name": "Green",
                "hex": "#50c878",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ffa1213f35b4f6ed9650f513e563fe12.png"
          },
          {
                "name": "White",
                "hex": "#ecf0f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/d6e6b51f8b55ea71dd6304196cefb549.png"
          },
          {
                "name": "Green 2",
                "hex": "#15ad66",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e53bd41351d81fd8dd682b41e342468d.png"
          },
          {
                "name": "Titanium Grey",
                "hex": "#bbb7b7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4b36dfda9f48c93cae516de66bd45a99.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/f6160f5ccff45409aa90da0f3873a4e7.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ffa1213f35b4f6ed9650f513e563fe12.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/d6e6b51f8b55ea71dd6304196cefb549.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e53bd41351d81fd8dd682b41e342468d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4b36dfda9f48c93cae516de66bd45a99.png"
    ],
  },
  {
    id: "tecno-spark-go-1s",
    name: "Tecno SPARK Go 1S",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK Go 1S brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/808ba6cdcfed56ae36b9c6ff43bbc4c1.png"
          },
          {
                "name": "Black 2",
                "hex": "#f3f5f7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e36fc8cc7140b2c04d379dc552d5d20d.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/808ba6cdcfed56ae36b9c6ff43bbc4c1.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e36fc8cc7140b2c04d379dc552d5d20d.png"
    ],
  },
  {
    id: "tecno-camon-30s",
    name: "Tecno CAMON 30S",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30S is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Gold",
                "hex": "#f0dfac",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/16dc4588df98105fc9daf3f80cbea082.webp"
          },
          {
                "name": "Midnight Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8ce21c31b24849ecc9381593d35bc71a.webp"
          },
          {
                "name": "Midnight Black 2",
                "hex": "#a0a2cf",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e4aa5e541909afdd8046704b92509130.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/16dc4588df98105fc9daf3f80cbea082.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8ce21c31b24849ecc9381593d35bc71a.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e4aa5e541909afdd8046704b92509130.webp"
    ],
  },
  {
    id: "tecno-spark-30c-5g",
    name: "Tecno SPARK 30C 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30C 5G brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6300 5G"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/6f4f10111ecb0e8bb1b28e9505c24c03.png"
          },
          {
                "name": "White",
                "hex": "#e0e0e0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/0db2cf099fb760b6ed6c7baa011cfbdf.png"
          },
          {
                "name": "Blue",
                "hex": "#d5f4f9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/d0e777b4b9d0a8b12ee37de4ca817674.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/6f4f10111ecb0e8bb1b28e9505c24c03.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/0db2cf099fb760b6ed6c7baa011cfbdf.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/d0e777b4b9d0a8b12ee37de4ca817674.png"
    ],
  },
  {
    id: "tecno-spark-30-5g",
    name: "Tecno SPARK 30 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30 5G brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6300 5G"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/1e88d6d89c067d2b304bba1c987e4a72.png"
          },
          {
                "name": "White",
                "hex": "#f2f2f2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9595c479585aaa936d881f474cd21ff1.png"
          },
          {
                "name": "Blue",
                "hex": "#dbecf0",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/fcee661171a69ee34606993e0c41eb65.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/1e88d6d89c067d2b304bba1c987e4a72.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9595c479585aaa936d881f474cd21ff1.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/fcee661171a69ee34606993e0c41eb65.png"
    ],
  },
  {
    id: "tecno-spark-30-pro-limited-edition",
    name: "Tecno SPARK 30 Pro Limited Edition",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30 Pro Limited Edition brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Blue",
                "hex": "#00408e",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/633abefa1f7432954f6135fbf7bb4c5b.png"
          },
          {
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/6a54381f95814d6cd584999cf9d72809.png"
          },
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c509ba75f38771476d13f4f411dc7483.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/633abefa1f7432954f6135fbf7bb4c5b.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/6a54381f95814d6cd584999cf9d72809.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c509ba75f38771476d13f4f411dc7483.png"
    ],
  },
  {
    id: "tecno-spark-30-pro",
    name: "Tecno SPARK 30 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30 Pro brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/95bae66884ba05e967bbffb18f0970a3.png"
          },
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4fa433db96320b88ff7e76c56f71ef65.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/95bae66884ba05e967bbffb18f0970a3.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4fa433db96320b88ff7e76c56f71ef65.png"
    ],
  },
  {
    id: "tecno-spark-30-limited-edition",
    name: "Tecno SPARK 30 Limited Edition",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30 Limited Edition brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Yellow",
                "hex": "#eabb23",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/12ec4311e3e5578dca3fd34482ec6e65.png"
          },
          {
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/bd2f145d9c7930da34ac4d4006adc73f.png"
          },
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/935a334c2435d23826feefdc0e448d18.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/12ec4311e3e5578dca3fd34482ec6e65.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/bd2f145d9c7930da34ac4d4006adc73f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/935a334c2435d23826feefdc0e448d18.png"
    ],
  },
  {
    id: "tecno-spark-30",
    name: "Tecno SPARK 30",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4829b002c7846138db35f7c943bc64ae.png"
          },
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9a9271a93e173e6ec2c36fb7ec1bcd91.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4829b002c7846138db35f7c943bc64ae.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9a9271a93e173e6ec2c36fb7ec1bcd91.png"
    ],
  },
  {
    id: "tecno-phantom-v-flip2-5g",
    name: "Tecno PHANTOM V Flip2 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno PHANTOM V Flip2 5G combines haute-couture pocket luxury with flagship tech: a 3.64\" interactive cover screen, 6.9\" 120Hz LTPO foldable main screen, 50MP dual camera, and all-day battery with 70W flash charge.",
    specs: [
          {
                "label": "Display",
                "value": "6.9\" Foldable LTPO AMOLED 120Hz + 3.64\" Cover"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8020 (6nm)"
          },
          {
                "label": "RAM",
                "value": "8GB LPDDR5X (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Main OIS + 50MP Ultra-Wide"
          },
          {
                "label": "Front Camera",
                "value": "32MP AF with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "4,720mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14 Flip"
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
                "name": "Emerald Green",
                "hex": "#c9e3c1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/ecd80e2f7136f9124496240fd68e7a4f.webp"
          },
          {
                "name": "Black",
                "hex": "#5e5f58",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/2110ee89dc8440e2122cbd70e89fdc0a.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/ecd80e2f7136f9124496240fd68e7a4f.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/2110ee89dc8440e2122cbd70e89fdc0a.webp"
    ],
  },
  {
    id: "tecno-phantom-v-fold2-5g",
    name: "Tecno PHANTOM V Fold2 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The flagship Tecno PHANTOM V Fold2 5G redefines foldable productivity with an expansive 7.85\" 120Hz inner display, aerospace-grade hinge, ultra-slim profile, and triple 50MP camera system with advanced AI tools.",
    specs: [
          {
                "label": "Display",
                "value": "7.85\" Foldable AMOLED 120Hz + 6.42\" Outer AMOLED"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 9300+ (4nm)"
          },
          {
                "label": "RAM",
                "value": "16GB LPDDR5X (+16GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Main OIS + 50MP 3x Portrait + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "32MP Outer + 32MP Inner"
          },
          {
                "label": "Battery",
                "value": "5,750mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14 Fold"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Green",
                "hex": "#363936",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/5f4a7213c41314c19885b0a1d419e077.png"
          },
          {
                "name": "Blue",
                "hex": "#6d82b2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/5d9165c83894ba99c61f1a79b30f85c1.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/5f4a7213c41314c19885b0a1d419e077.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/5d9165c83894ba99c61f1a79b30f85c1.png"
    ],
  },
  {
    id: "tecno-spark-30c",
    name: "Tecno SPARK 30C",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK 30C brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#2f2f2f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b6846d51721df925bafc42a96259cef0.png"
          },
          {
                "name": "White",
                "hex": "#e6e9e8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/1875bf4d49caadc6911bb682f25aaa60.png"
          },
          {
                "name": "Emerald Green",
                "hex": "#addac9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/757da1df1afad2d269759016a66b9e1a.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b6846d51721df925bafc42a96259cef0.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/1875bf4d49caadc6911bb682f25aaa60.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/757da1df1afad2d269759016a66b9e1a.png"
    ],
  },
  {
    id: "tecno-spark-go-1",
    name: "Tecno SPARK Go 1",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno SPARK Go 1 brings trendy street-fashion design, smooth high-refresh display, ultra-clear imaging, and reliable all-day battery life tailored for dynamic, creative youth.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ IPS LCD, 120Hz Punch-Hole"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / G91"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra Clear / 50MP HDR"
          },
          {
                "label": "Front Camera",
                "value": "13MP / 8MP with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 33W / 18W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9413e13bcfcf0cc62262ca31c86481e8.png"
          },
          {
                "name": "Pure White",
                "hex": "#eaeceb",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/fed0bebfedbfec0c5ec4c69b5e1d36b7.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9413e13bcfcf0cc62262ca31c86481e8.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/fed0bebfedbfec0c5ec4c69b5e1d36b7.png"
    ],
  },
  {
    id: "tecno-camon-30s-pro",
    name: "Tecno CAMON 30S Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30S Pro is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
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
                "name": "Black",
                "hex": "#40454d",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/052a6307db2d7827434ee79e56dbdbe5.png"
          },
          {
                "name": "Gold",
                "hex": "#e8ddd2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/bc27aadd29bb650e3923a85dd87c9074.png"
          },
          {
                "name": "Green",
                "hex": "#b7e5d3",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b37a326ec70de6f35d7d58659042e3e7.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/052a6307db2d7827434ee79e56dbdbe5.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/bc27aadd29bb650e3923a85dd87c9074.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b37a326ec70de6f35d7d58659042e3e7.png"
    ],
  },
  {
    id: "tecno-camon-30-premier-5g",
    name: "Tecno CAMON 30 Premier 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30 Premier 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "512GB+12GB",
                "price": null
          },
          {
                "storage": "1TB+16GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Midnight Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3cb2ee7fb21215f284f6454df1037210.png"
          },
          {
                "name": "Loewe Green Edition",
                "hex": "#9bdfc1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/516413380cea12bd81af04f624da12c1.png"
          },
          {
                "name": "Pure White",
                "hex": "#b1b3b8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/1f650761c5ff7db71a24fb56cc8dc32d.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3cb2ee7fb21215f284f6454df1037210.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/516413380cea12bd81af04f624da12c1.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/1f650761c5ff7db71a24fb56cc8dc32d.png"
    ],
  },
  {
    id: "tecno-pova-6-pro-5g",
    name: "Tecno POVA 6 Pro 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 6 Pro 5G delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 6080 5G"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
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
                "name": "Emerald Green",
                "hex": "#46795f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8a79048d01df6cdbe6f3226bec672b04.webp"
          },
          {
                "name": "Black",
                "hex": "#353535",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7a9efd2d1c09dba8842f2606afa08bb.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8a79048d01df6cdbe6f3226bec672b04.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/a7a9efd2d1c09dba8842f2606afa08bb.webp"
    ],
  },
  {
    id: "tecno-pova-6-neo",
    name: "Tecno POVA 6 NEO",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 6 NEO delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99 Ultimate"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "7,000mAh, 33W Fast Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Metallic Silver",
                "hex": "#c4d1e2",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/60f8c2a1218f0fb1b23ea538a161709b.webp"
          },
          {
                "name": "Midnight Black",
                "hex": "#585c66",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/33ee1620a8c7ac9c0a49dc7d287e5dbe.webp"
          },
          {
                "name": "Emerald Green",
                "hex": "#6db594",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/6b9980e943100418a747deb914c014ea.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/60f8c2a1218f0fb1b23ea538a161709b.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/33ee1620a8c7ac9c0a49dc7d287e5dbe.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/6b9980e943100418a747deb914c014ea.webp"
    ],
  },
  {
    id: "tecno-pova-6",
    name: "Tecno POVA 6",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POVA 6 delivers hardcore gaming performance and marathon endurance with its colossal battery, fast charging, high-refresh display, and distinctive futuristic Mecha aesthetics.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz Mecha Display"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G99 Ultimate"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "108MP Ultra-Clear + 2MP Light Sensor"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "6,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14, HiOS 14"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Green",
                "hex": "#6a957a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b7c98bd6ffc4a483261b89d256c33df2.webp"
          },
          {
                "name": "Black",
                "hex": "#494a4f",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/191674a3c69f1142c85b3cc271b7ae9e.webp"
          },
          {
                "name": "Metallic Silver",
                "hex": "#a8abc4",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/c68d6b6418acfa33fc3c00f8a591f47d.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b7c98bd6ffc4a483261b89d256c33df2.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/191674a3c69f1142c85b3cc271b7ae9e.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/c68d6b6418acfa33fc3c00f8a591f47d.webp"
    ],
  },
  {
    id: "tecno-camon-30-pro-5g",
    name: "Tecno CAMON 30 Pro 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30 Pro 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" 1.5K AMOLED, 144Hz curved"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8200 / 8300 (4nm)"
          },
          {
                "label": "RAM",
                "value": "12GB (+12GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 50MP Periscope + 50MP UW"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
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
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/87f394d96ec3b42de8d4b0911366d52c.png"
          },
          {
                "name": "Loewe Green Edition",
                "hex": "#9bdfc1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/77709ce4f7ddde72fa4bb64d6d56399f.png"
          },
          {
                "name": "Metallic Silver",
                "hex": "#b0b3b8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/574b444a85585086bd337d2899d455b7.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/87f394d96ec3b42de8d4b0911366d52c.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/77709ce4f7ddde72fa4bb64d6d56399f.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/574b444a85585086bd337d2899d455b7.png"
    ],
  },
  {
    id: "tecno-camon-30-5g",
    name: "Tecno CAMON 30 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30 5G is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/161e3aa1e53035b626d44d734fd84eef.png"
          },
          {
                "name": "Loewe Green Edition",
                "hex": "#9bdfc1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/117ae49c5f5beaf7eec7e078979c3952.png"
          },
          {
                "name": "White",
                "hex": "#e9e9e9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/01f8287ad784e8e07eada89ec313ae60.png"
          },
          {
                "name": "Emerald Green",
                "hex": "#64786a",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/3603470bc1e3112a40197df4844bc6d4.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/161e3aa1e53035b626d44d734fd84eef.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/117ae49c5f5beaf7eec7e078979c3952.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/01f8287ad784e8e07eada89ec313ae60.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/3603470bc1e3112a40197df4844bc6d4.png"
    ],
  },
  {
    id: "tecno-camon-30",
    name: "Tecno CAMON 30",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno CAMON 30 is engineered for portrait perfection and cinematic night imaging. Features a studio-grade 50MP camera system, ultra-vivid 120Hz AMOLED display, and rapid flash charging in a sleek, lightweight profile.",
    specs: [
          {
                "label": "Display",
                "value": "6.78\" FHD+ AMOLED, 120Hz"
          },
          {
                "label": "Chip",
                "value": "MediaTek Helio G100 / Dimensity 7020"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "50MP Sony OIS + 2MP Depth"
          },
          {
                "label": "Front Camera",
                "value": "50MP Eye-AF with Dual Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 70W Ultra Charge"
          },
          {
                "label": "OS",
                "value": "Android 14/15, HiOS"
          }
    ],
    storageVariants: [
          {
                "storage": "128GB+8GB",
                "price": null
          },
          {
                "storage": "256GB+8GB",
                "price": null
          }
    ],
    colors: [
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b22aeab182ca9d200ba9a546d90cd27.png"
          },
          {
                "name": "Loewe Green Edition",
                "hex": "#9bdfc1",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/4c940e5f48d3a0df5b61806d21db3f1d.png"
          },
          {
                "name": "Ice White",
                "hex": "#e9e9e9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/dacd837cb43680f21a290c2765b09d75.png"
          },
          {
                "name": "Earth Brown",
                "hex": "#ce8e5b",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/59510c60866aaae1a7034ceb0be5476c.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/8b22aeab182ca9d200ba9a546d90cd27.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/4c940e5f48d3a0df5b61806d21db3f1d.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/dacd837cb43680f21a290c2765b09d75.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/59510c60866aaae1a7034ceb0be5476c.png"
    ],
  },
  {
    id: "tecno-pop-8",
    name: "Tecno POP 8",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POP 8 provides smart essentials at an ultra-accessible value: immersive punch-hole screen with Dynamic Port notifications, dual DTS stereo speakers, and long-lasting 5,000mAh battery.",
    specs: [
          {
                "label": "Display",
                "value": "6.6\" HD+ 90Hz Hole-Screen with Dynamic Port"
          },
          {
                "label": "Chip",
                "value": "Unisoc T606 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "4GB (+4GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "13MP Dual AI Camera with Dual Flash"
          },
          {
                "label": "Front Camera",
                "value": "8MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 10W Type-C"
          },
          {
                "label": "OS",
                "value": "Android 13/14 Go Edition, HiOS"
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
                "name": "Ice White",
                "hex": "#ffffff",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/cc82515a9a77a7dbe15a64df47e37078.webp"
          },
          {
                "name": "Champagne Gold",
                "hex": "#fef2a4",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/b1ff165aa97da3938716e0f6767353ba.webp"
          },
          {
                "name": "Emerald Green",
                "hex": "#c3dbac",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/e1fb761e403dbd32c155bd988f712a60.webp"
          },
          {
                "name": "Black",
                "hex": "#000000",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/9c9fcc4c4b61f8ad7e4f6bfa4f1b4bf5.webp"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/cc82515a9a77a7dbe15a64df47e37078.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/b1ff165aa97da3938716e0f6767353ba.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/e1fb761e403dbd32c155bd988f712a60.webp",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/9c9fcc4c4b61f8ad7e4f6bfa4f1b4bf5.webp"
    ],
  },
  {
    id: "tecno-phantom-v-flip-5g",
    name: "Tecno PHANTOM V Flip 5G",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno PHANTOM V Flip 5G features a unique circular planet cover screen, premium vegan leather finish, 64MP RGBW ultra-sensitive camera, and 45W super charge in a compact clamshell design.",
    specs: [
          {
                "label": "Display",
                "value": "6.9\" Foldable AMOLED 120Hz + 1.32\" Cover"
          },
          {
                "label": "Chip",
                "value": "MediaTek Dimensity 8050 (6nm)"
          },
          {
                "label": "RAM",
                "value": "8GB (+8GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "64MP RGBW OIS + 13MP Ultra-Wide"
          },
          {
                "label": "Front Camera",
                "value": "32MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "4,000mAh, 45W Flash Charge"
          },
          {
                "label": "OS",
                "value": "Android 13, HiOS 13.5 Flip"
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
                "name": "Purple",
                "hex": "#cccde8",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/40a01f385d06eb584d19f254704dc839.png"
          },
          {
                "name": "Black",
                "hex": "#0d0d0d",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/97b7250561f2b9239552b341c1b90fe2.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/40a01f385d06eb584d19f254704dc839.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/97b7250561f2b9239552b341c1b90fe2.png"
    ],
  },
  {
    id: "tecno-pop-7",
    name: "Tecno POP 7",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POP 7 provides smart essentials at an ultra-accessible value: immersive punch-hole screen with Dynamic Port notifications, dual DTS stereo speakers, and long-lasting 5,000mAh battery.",
    specs: [
          {
                "label": "Display",
                "value": "6.6\" HD+ 90Hz Hole-Screen with Dynamic Port"
          },
          {
                "label": "Chip",
                "value": "Unisoc T606 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "4GB (+4GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "13MP Dual AI Camera with Dual Flash"
          },
          {
                "label": "Front Camera",
                "value": "8MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 10W Type-C"
          },
          {
                "label": "OS",
                "value": "Android 13/14 Go Edition, HiOS"
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
                "name": "Black",
                "hex": "#42484E",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/black.png"
          },
          {
                "name": "Blue",
                "hex": "#86b2c9",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/blue.png"
          },
          {
                "name": "Purple",
                "hex": "#C1BBD6",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/purple.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/black.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/blue.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7/purple.png"
    ],
  },
  {
    id: "tecno-pop-7-pro",
    name: "Tecno POP 7 Pro",
    brand: "Tecno",
    category: "Phones",
    condition: "New",
    description: "The Tecno POP 7 Pro provides smart essentials at an ultra-accessible value: immersive punch-hole screen with Dynamic Port notifications, dual DTS stereo speakers, and long-lasting 5,000mAh battery.",
    specs: [
          {
                "label": "Display",
                "value": "6.6\" HD+ 90Hz Hole-Screen with Dynamic Port"
          },
          {
                "label": "Chip",
                "value": "Unisoc T606 Octa-Core"
          },
          {
                "label": "RAM",
                "value": "4GB (+4GB Extended)"
          },
          {
                "label": "Rear Camera",
                "value": "13MP Dual AI Camera with Dual Flash"
          },
          {
                "label": "Front Camera",
                "value": "8MP with Dual-LED Flash"
          },
          {
                "label": "Battery",
                "value": "5,000mAh, 10W Type-C"
          },
          {
                "label": "OS",
                "value": "Android 13/14 Go Edition, HiOS"
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
                "name": "Black",
                "hex": "#434C52",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/black.png"
          },
          {
                "name": "Blue",
                "hex": "#B8F2F7",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/blue.png"
          },
          {
                "name": "Purple",
                "hex": "#D2C6DB",
                "image": "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/purple.png"
          }
    ],
    images: [
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/black.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/blue.png",
          "https://d13pvy8xd75yde.cloudfront.net/global/phones/pop7pro/purple.png"
    ],
  },
];

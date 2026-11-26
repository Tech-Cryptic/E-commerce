import { build } from 'esbuild';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entry = `
import { ALL_PRODUCTS } from './src/data/products.ts';
import { PHONE_PRODUCTS } from './src/data/phones.ts';
import { ACCESSORY_PRODUCTS } from './src/data/accessories.ts';
import { TECNO_PHONE_PRODUCTS } from './src/data/tecnoPhones.ts';
import { REDMI_PHONE_PRODUCTS } from './src/data/redmiPhones.ts';
import { ALL_COMPARE_PHONES } from './src/data/comparePhones.ts';

const products = [...ALL_PRODUCTS, ...PHONE_PRODUCTS, ...ACCESSORY_PRODUCTS, ...TECNO_PHONE_PRODUCTS, ...REDMI_PHONE_PRODUCTS];
const priced = (variants) => Object.fromEntries(
  variants.filter(v => typeof v.price === 'number' && v.price > 0).map(v => [v.storage, v.price])
);
const catalog = {
  products: Object.fromEntries(products.map(p => [p.id, {
    name: p.name,
    brand: p.brand,
    condition: p.condition,
    prices: priced(p.storageVariants),
  }])),
  compare: Object.fromEntries(ALL_COMPARE_PHONES.map(p => [p.id, {
    name: p.brand + ' ' + p.model,
    prices: priced(p.storageOptions),
  }])),
};
export default catalog;
`;

const result = await build({
  stdin: { contents: entry, resolveDir: root, sourcefile: 'catalog-entry.ts', loader: 'ts' },
  bundle: true,
  platform: 'node',
  format: 'esm',
  write: false,
  logLevel: 'warning',
});

const moduleUrl = 'data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64');
const { default: catalog } = await import(moduleUrl);

const output = path.join(root, 'backend', 'catalog.json');
await writeFile(output, JSON.stringify(catalog), 'utf8');
console.log(`Wrote ${output}`);

// Generate favicon assets from the brand logo's boat mark.
// Source: public/assets/img/brand/logos/logo-clean.svg
// Outputs: public/favicon.ico, favicon-16.png, favicon-32.png, favicon-48.png,
//          apple-touch-icon.png, android-chrome-192.png, android-chrome-512.png

import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = (p) => resolve(root, 'public', p);

const SRC = resolve(root, 'public/assets/img/brand/logos/logo-clean.svg');

// Render source at high density, then crop the boat mark, then pad to square.
// Crop coords were chosen by visual inspection of a 1600px-wide render.
async function buildMaster(size) {
  const cropped = await sharp(SRC, { density: 600 })
    .resize(1600, null, { fit: 'inside' })
    .extract({ left: 235, top: 240, width: 470, height: 580 })
    .toBuffer();
  // Pad to square (top/bottom equal, sides equal so image stays centered).
  // Crop is 470x580, pad horizontally to 580 → 55px each side.
  const padded = await sharp(cropped)
    .extend({ top: 0, bottom: 0, left: 55, right: 55, background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();
  return sharp(padded)
    .resize(size, size, { kernel: 'lanczos3' })
    .flatten({ background: '#ffffff' })
    .png()
    .toBuffer();
}

// Build a PNG-format .ico. Modern browsers accept PNG-encoded ICO entries.
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  pngBuffers.forEach((buf, i) => {
    const size = buf.length;
    // width/height: 0 means 256
    const w = buf.width >= 256 ? 0 : buf.width;
    const h = buf.height >= 256 ? 0 : buf.height;
    const base = i * 16;
    dir.writeUInt8(w, base + 0);
    dir.writeUInt8(h, base + 1);
    dir.writeUInt8(0, base + 2); // colors in palette
    dir.writeUInt8(0, base + 3); // reserved
    dir.writeUInt16LE(1, base + 4); // color planes
    dir.writeUInt16LE(32, base + 6); // bits per pixel
    dir.writeUInt32LE(size, base + 8);
    dir.writeUInt32LE(offset, base + 12);
    offset += size;
  });

  return Buffer.concat([header, dir, ...pngBuffers]);
}

async function pngAt(size) {
  const buf = await buildMaster(size);
  buf.width = size;
  buf.height = size;
  return buf;
}

const sizes = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'apple-touch-icon.png': 180,
  'android-chrome-192.png': 192,
  'android-chrome-512.png': 512,
};

for (const [name, size] of Object.entries(sizes)) {
  const buf = await buildMaster(size);
  writeFileSync(out(name), buf);
  console.log(`wrote ${name} (${size}x${size}, ${buf.length} bytes)`);
}

const ico = buildIco([await pngAt(16), await pngAt(32), await pngAt(48)]);
writeFileSync(out('favicon.ico'), ico);
console.log(`wrote favicon.ico (${ico.length} bytes)`);

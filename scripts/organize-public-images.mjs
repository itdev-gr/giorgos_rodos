#!/usr/bin/env node
/**
 * Reorganize public/assets/img into a clear folder structure and update code references.
 * Run: node scripts/organize-public-images.mjs
 */
import { cpSync, existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imgRoot = join(root, 'public/assets/img');

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function movePath(from, to) {
  const absFrom = join(root, from);
  const absTo = join(root, to);
  if (!existsSync(absFrom)) return;
  ensureDir(dirname(absTo));
  if (existsSync(absTo)) {
    console.warn(`skip (exists): ${to}`);
    return;
  }
  renameSync(absFrom, absTo);
  console.log(`moved: ${relative(root, absFrom)} → ${relative(root, absTo)}`);
}

function moveDirContents(fromRel, toRel) {
  const absFrom = join(root, fromRel);
  const absTo = join(root, toRel);
  if (!existsSync(absFrom)) return;
  ensureDir(absTo);
  for (const name of readdirSync(absFrom)) {
    movePath(join(fromRel, name), join(toRel, name));
  }
  if (readdirSync(absFrom).length === 0) rmSync(absFrom, { recursive: true });
}

// ── 1. Create target folders ──
const dirs = [
  'public/assets/img/brand/logos',
  'public/assets/img/brand/masks',
  'public/assets/img/brand/social',
  'public/assets/img/home/sections',
  'public/assets/img/locations',
  'public/assets/img/heroes/services',
  'public/assets/img/pages/about',
  'public/assets/img/pages/blog',
  'public/assets/img/operations/tender',
  'public/assets/img/operations/transfers',
  'public/assets/img/operations/skipper',
  'public/assets/img/operations/license-free',
  'public/assets/img/ui/icons',
  'public/assets/img/ui/shapes',
  'public/assets/img/ui/backgrounds',
  'public/assets/img/ui/theme',
  'public/assets/img/ui/template/team',
  'public/assets/img/ui/template/testimonial',
  'public/assets/img/ui/template/normal',
  'public/assets/img/ui/template/tour',
  'public/assets/img/ui/template/misc',
];
for (const d of dirs) ensureDir(join(root, d));

// ── 2. Brand assets (loose files at img root) ──
const brandLogos = [
  'logo.svg', 'logo2.svg', 'logo3.svg', 'logo-clean.svg', 'logo-traced.svg',
  'logo-white.svg', 'logo-white-clean.svg', 'logo-white-traced.svg',
  'logo-footer.svg', 'favicon.svg',
];
for (const f of brandLogos) {
  movePath(`public/assets/img/${f}`, `public/assets/img/brand/logos/${f}`);
}
movePath('public/assets/img/brand/masks/logo_bg_mask.png', 'public/assets/img/brand/masks/logo_bg_mask.png');
movePath('public/assets/img/brand/masks/menu_bg_mask.png', 'public/assets/img/brand/masks/menu_bg_mask.png');
movePath('public/assets/img/brand/social/og-homepage.png', 'public/assets/img/brand/social/og-homepage.png');
movePath('public/assets/img/brand/social/rhodes-rent-aboat.jpg', 'public/assets/img/brand/social/assets/img/brand/social/rhodes-rent-aboat.jpg');

// ── 3. Homepage section images ──
movePath('public/assets/img/home/sections/rent-a-boat-jump.png', 'public/assets/img/home/sections/rent-a-boat-jump.png');
movePath('public/assets/img/home/sections/rhodes-customers.png', 'public/assets/img/home/sections/rhodes-customers.png');

// ── 4. Merge location folders ──
moveDirContents('public/assets/img/destinations', 'public/assets/img/locations');
moveDirContents('public/assets/img/destination', 'public/assets/img/locations');

// ── 5. Heroes (videos + stills) ──
moveDirContents('public/assets/img/hero', 'public/assets/img/heroes');

// ── 6. Page-specific ──
moveDirContents('public/assets/img/about', 'public/assets/img/pages/about');
moveDirContents('public/assets/img/blog', 'public/assets/img/pages/blog');

// ── 7. Operations ──
moveDirContents('public/assets/img/tender', 'public/assets/img/operations/tender');
moveDirContents('public/assets/img/transfers', 'public/assets/img/operations/transfers');
moveDirContents('public/assets/img/skipper', 'public/assets/img/operations/skipper');
moveDirContents('public/assets/img/license-free', 'public/assets/img/operations/license-free');

// ── 8. UI / template leftovers ──
moveDirContents('public/assets/img/icon', 'public/assets/img/ui/icons');
moveDirContents('public/assets/img/shape', 'public/assets/img/ui/shapes');
moveDirContents('public/assets/img/bg', 'public/assets/img/ui/backgrounds');
moveDirContents('public/assets/img/theme-img', 'public/assets/img/ui/theme');
moveDirContents('public/assets/img/team', 'public/assets/img/ui/template/team');
moveDirContents('public/assets/img/testimonial', 'public/assets/img/ui/template/testimonial');
moveDirContents('public/assets/img/normal', 'public/assets/img/ui/template/normal');
moveDirContents('public/assets/img/tour', 'public/assets/img/ui/template/tour');

// Misc loose files
for (const f of ['01.png', 'image1.jpeg']) {
  movePath(`public/assets/img/${f}`, `public/assets/img/ui/template/misc/${f}`);
}

// Remove empty home/ if only sections left inside
const homeDir = join(imgRoot, 'home');
if (existsSync(homeDir)) {
  const entries = readdirSync(homeDir);
  if (entries.length === 1 && entries[0] === 'sections') {
    // keep home/sections
  }
}

console.log('\nFolder structure ready. Run path updates separately or use --update-paths');

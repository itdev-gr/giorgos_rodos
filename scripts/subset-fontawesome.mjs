// Subset FontAwesome woff2 files to only the icons actually used in src/.
// Reads fontawesome.min.css to map fa-* class names to unicode codepoints,
// then runs pyftsubset for each style family. Replaces the original woff2
// files in public/assets/fonts/fontawesome/.
//
// Usage: node scripts/subset-fontawesome.mjs
// Requires: pyftsubset on PATH (pip install fonttools brotli).

import { readFileSync, statSync, copyFileSync, renameSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const cssPath = resolve(root, 'public/assets/css/fontawesome.min.css');
const fontDir = resolve(root, 'public/assets/fonts/fontawesome');

const css = readFileSync(cssPath, 'utf8');

// 1. Inventory: every distinct `fa-*` class actually used in src/
const usedIconNames = new Set();
const srcGlob = execSync(`grep -rohE 'fa-[a-z][a-z0-9-]+' ${resolve(root, 'src')} 2>/dev/null | sort -u`, { encoding: 'utf8' });
for (const line of srcGlob.split('\n')) {
  const name = line.trim();
  if (name && /^fa-[a-z]/.test(name) && !['fa-solid', 'fa-regular', 'fa-light', 'fa-brands', 'fa-spin'].includes(name)) {
    usedIconNames.add(name);
  }
}
console.log(`Found ${usedIconNames.size} distinct icon names in src/`);

// 2. Map each fa-* name to its unicode codepoint by parsing the CSS.
// FA's minified CSS uses comma-separated alias lists for renamed icons:
//   .fa-bars:before,.fa-navicon:before{content:"\f0c9"}
// So we capture the whole selector list, then expand it.
const codepointForName = new Map();
const re = /((?:\.fa-[a-z][a-z0-9-]+:{1,2}before,?)+)\{content:"\\([0-9a-f]{2,6})"\}/g;
let m;
while ((m = re.exec(css)) !== null) {
  const selectors = m[1];
  const cp = parseInt(m[2], 16);
  for (const sm of selectors.matchAll(/\.(fa-[a-z][a-z0-9-]+):/g)) {
    const name = sm[1];
    if (!codepointForName.has(name)) codepointForName.set(name, cp);
  }
}
console.log(`Parsed ${codepointForName.size} icon → codepoint mappings from CSS`);

const codepoints = new Set();
const missing = [];
for (const name of usedIconNames) {
  const cp = codepointForName.get(name);
  if (cp == null) missing.push(name);
  else codepoints.add(cp);
}
if (missing.length) {
  console.warn(`Could not resolve codepoint for: ${missing.join(', ')}`);
}
console.log(`Will subset ${codepoints.size} unique codepoints`);

// pyftsubset wants comma-separated U+XXXX list
const unicodesArg = [...codepoints].sort((a, b) => a - b).map((c) => 'U+' + c.toString(16).toUpperCase().padStart(4, '0')).join(',');

// 3. Subset each style family we use.
const families = [
  'fa-solid-900',
  'fa-regular-400',
  'fa-brands-400',
];

// Always subset from .ttf source, the FA-shipped .woff2 has a brotli stream
// fonttools can't decode. The .ttf decodes cleanly and pyftsubset can emit
// any flavor we want.
for (const fam of families) {
  const ttfSource = resolve(fontDir, `${fam}.ttf`);
  if (!existsSync(ttfSource)) {
    console.warn(`  ${fam}.ttf missing, skipping`);
    continue;
  }
  const flavors = [
    { ext: 'woff2', flag: '--flavor=woff2' },
    { ext: 'woff', flag: '--flavor=woff' },
    { ext: 'ttf', flag: '' },
  ];
  for (const { ext, flag } of flavors) {
    const dest = resolve(fontDir, `${fam}.${ext}`);
    const before = existsSync(dest) ? statSync(dest).size : 0;
    const tmp = resolve(fontDir, `${fam}.subset.${ext}`);
    const cmd = [
      'pyftsubset',
      `"${ttfSource}"`,
      `--unicodes='${unicodesArg}'`,
      `--output-file="${tmp}"`,
      flag,
      '--no-hinting',
      '--desubroutinize',
      '--layout-features=*',
      '--name-IDs=*',
      '--name-legacy',
      '--drop-tables=',
      '--no-prune-unicode-ranges',
    ].filter(Boolean).join(' ');
    try {
      execSync(cmd, { stdio: 'pipe' });
      const after = statSync(tmp).size;
      renameSync(tmp, dest);
      const pct = before ? ((1 - after / before) * 100).toFixed(1) : 'new';
      console.log(`  ${fam}.${ext}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (-${pct}%)`);
    } catch (err) {
      console.error(`  ${fam}.${ext}: subset failed ,`, err.message?.split('\n')[0]);
    }
  }
}

// 4. Delete font files for styles we never use. The CSS references these via
// @font-face, but browsers only fetch a font when a matching font-family
// is actually applied, our markup never triggers thin/light/duotone, so
// they're dead weight on disk and a confusing console 404 if the CSS resolves.
for (const fam of ['fa-light-300', 'fa-duotone-900', 'fa-thin-100']) {
  for (const ext of ['woff2', 'woff', 'ttf', 'eot']) {
    const p = resolve(fontDir, `${fam}.${ext}`);
    if (existsSync(p)) {
      execSync(`rm "${p}"`);
      console.log(`  removed ${p.split('/').pop()}`);
    }
  }
}

console.log('\nDone.');

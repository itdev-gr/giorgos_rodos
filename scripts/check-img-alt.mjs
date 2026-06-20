import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const SRC = join(ROOT, 'src');

/** Internal admin UI — preview thumbnails may use empty alt. */
const EXCLUDE_PREFIXES = [
  'src/pages/dashboard/',
  'src/components/dashboard/',
];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path, acc);
    } else if (/\.(astro|tsx|jsx)$/.test(name)) {
      acc.push(path);
    }
  }
  return acc;
}

function lineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

const IMG_TAG = /<img[\s\S]*?>/gi;

const issues = [];

for (const file of walk(SRC)) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  if (EXCLUDE_PREFIXES.some((prefix) => rel.startsWith(prefix))) continue;

  const content = readFileSync(file, 'utf8');
  let match;

  while ((match = IMG_TAG.exec(content)) !== null) {
    const tag = match[0];

    if (!/\balt\s*=/.test(tag)) {
      issues.push(`${rel}:${lineNumber(content, match.index)} missing alt attribute`);
      continue;
    }

    const decorative =
      /\baria-hidden\s*=\s*["']true["']/.test(tag) ||
      /\brole\s*=\s*["']presentation["']/.test(tag);

    if (
      !decorative &&
      /\balt\s*=\s*(""|''|\{\s*['"]['"]\s*\}|\{\s*""\s*\})/.test(tag)
    ) {
      issues.push(`${rel}:${lineNumber(content, match.index)} empty alt (use meaningful text or aria-hidden="true")`);
    }
  }
}

if (issues.length === 0) {
  console.log('[lint:img-alt] ✓ all <img> tags have non-empty alt (or aria-hidden decorative)');
  process.exit(0);
}

console.error(`[lint:img-alt] ✗ ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(`  - ${issue}`);
}
process.exit(1);

// Backfill `slug` for every row in public.tours.
// Idempotent: skips rows that already have a non-null slug.
// Requires migration 002-tours-slug.sql to be applied first (adds the column).
//
// Usage: node scripts/backfill-tour-slugs.mjs

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const envPath = join(dirname(fileURLToPath(import.meta.url)), '..', '.env');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

if (!env.PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// Greek/diacritic ASCII fold for common cases. Anything not handled falls
// through .normalize('NFKD') which strips combining marks.
const GREEK_MAP = {
  α: 'a', ά: 'a', Α: 'a', Ά: 'a',
  β: 'b', Β: 'b',
  γ: 'g', Γ: 'g',
  δ: 'd', Δ: 'd',
  ε: 'e', έ: 'e', Ε: 'e', Έ: 'e',
  ζ: 'z', Ζ: 'z',
  η: 'i', ή: 'i', Η: 'i', Ή: 'i',
  θ: 'th', Θ: 'th',
  ι: 'i', ί: 'i', ϊ: 'i', ΐ: 'i', Ι: 'i', Ί: 'i', Ϊ: 'i',
  κ: 'k', Κ: 'k',
  λ: 'l', Λ: 'l',
  μ: 'm', Μ: 'm',
  ν: 'n', Ν: 'n',
  ξ: 'x', Ξ: 'x',
  ο: 'o', ό: 'o', Ο: 'o', Ό: 'o',
  π: 'p', Π: 'p',
  ρ: 'r', Ρ: 'r',
  σ: 's', ς: 's', Σ: 's',
  τ: 't', Τ: 't',
  υ: 'y', ύ: 'y', ϋ: 'y', ΰ: 'y', Υ: 'y', Ύ: 'y', Ϋ: 'y',
  φ: 'f', Φ: 'f',
  χ: 'ch', Χ: 'ch',
  ψ: 'ps', Ψ: 'ps',
  ω: 'o', ώ: 'o', Ω: 'o', Ώ: 'o',
};

function slugify(input) {
  if (!input) return '';
  let s = String(input);
  // Greek transliteration
  s = s.replace(/[Ͱ-Ͽἀ-῿]/g, (ch) => GREEK_MAP[ch] || ch);
  // Strip remaining combining marks
  s = s.normalize('NFKD').replace(/[̀-ͯ]/g, '');
  // Lowercase, replace anything non-alphanumeric with hyphens, collapse, trim
  s = s
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
  // Cap length around a word boundary at 80 chars
  if (s.length > 80) {
    s = s.slice(0, 80).replace(/-[^-]*$/, '');
  }
  return s || 'tour';
}

async function main() {
  // Pull every tour (we only need id, title, current slug)
  const { data: tours, error } = await supabase
    .from('tours')
    .select('id, title, slug')
    .order('created_at', { ascending: true });
  if (error) {
    console.error('Failed to fetch tours:', error);
    process.exit(1);
  }

  console.log(`Found ${tours.length} tours total.`);
  const existing = new Set(tours.filter((t) => t.slug).map((t) => t.slug));
  console.log(`${existing.size} already have a slug, skipping those.`);

  let updates = 0;
  let skipped = 0;
  for (const t of tours) {
    if (t.slug) {
      skipped++;
      continue;
    }
    const base = slugify(t.title);
    let candidate = base;
    let n = 2;
    while (existing.has(candidate)) {
      candidate = `${base}-${n}`;
      n++;
    }
    existing.add(candidate);

    const { error: upErr } = await supabase
      .from('tours')
      .update({ slug: candidate })
      .eq('id', t.id);
    if (upErr) {
      console.error(`Failed to update tour ${t.id} (${t.title}):`, upErr);
      continue;
    }
    console.log(`  ${t.id} → ${candidate}`);
    updates++;
  }

  console.log(`\nDone. Updated ${updates}, skipped ${skipped}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

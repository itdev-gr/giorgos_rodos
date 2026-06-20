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
    }),
);

const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const BUCKET = 'site-config';
const FILE = 'service-categories.json';

function normalizeServiceHref(href) {
  if (!href?.trim()) return href || '';
  const trimmed = href.trim();
  if (trimmed.startsWith('/service/rodos-')) {
    return trimmed.replace('/service/rodos-', '/service/rhodes-');
  }
  if (trimmed === '/service/rhodes-rent-a-boat' || trimmed === '/service/rodos-rent-a-boat') {
    return '/service/rhodes-rent-a-boat';
  }
  return trimmed;
}

const canonicalCategories = [
  { slug: 'rhodes-boat-tours', title: 'Rhodes Boat Tours', description: 'Guided sailing tours along the stunning Rhodes coastline and nearby islands.', image: '/assets/img/cruises/greco_sunset3.jpg', href: '/service/rhodes-boat-tours', sort_order: 1 },
  { slug: 'rhodes-boat-trips', title: 'Rhodes Boat Trips', description: 'Private sailing yacht trips with experienced crews across the Dodecanese.', image: '/assets/img/locations/private-sailing.jpg', href: '/service/rhodes-boat-trips', sort_order: 2 },
  { slug: 'rhodes-boat-cruises', title: 'Rhodes Boat Cruises', description: 'All-inclusive day and sunset cruises with swimming, dining, and music.', image: '/assets/img/cruises/greco_home1.jpg', href: '/service/rhodes-boat-cruises', sort_order: 3 },
  { slug: 'rhodes-rent-a-boat', title: 'Rhodes Rent a Boat', description: 'Drive your own boat along the coast, no licence needed, full freedom.', image: '/assets/img/locations/tsambika-beach.jpg', href: '/service/rhodes-rent-a-boat', sort_order: 4 },
  { slug: 'rhodes-catamaran-tours', title: 'Rhodes Catamaran Cruises', description: 'Spacious catamarans for group cruises, events, and island-hopping adventures.', image: '/assets/img/fleet/lagoon-42-aenaos.webp', href: '/service/rhodes-catamaran-tours', sort_order: 5 },
  { slug: 'rhodes-charter', title: 'Rhodes Yacht Charter', description: 'Over 80 sailing yachts and catamarans. Bareboat or crewed, the Dodecanese is yours.', image: '/assets/img/fleet/oceanis-461-nailah.jpg', href: '/service/rhodes-charter', sort_order: 6 },
  { slug: 'rhodes-tender-boat', title: 'Rhodes Tender Boat Services', description: 'Fast and reliable shore-to-ship transfers across Rhodes harbours and bays.', image: '/assets/img/operations/tender/tender-service.jpg', href: '/service/rhodes-tender-boat', sort_order: 7 },
  { slug: 'rhodes-mice-events', title: 'Rhodes MICE & Incentive Events', description: 'Corporate events, incentive trips, and team-building experiences on the water.', image: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', href: '/service/rhodes-mice-events', sort_order: 8 },
];

async function run() {
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  let categories = canonicalCategories;

  try {
    const res = await fetch(`${urlData.publicUrl}?t=${Date.now()}`);
    if (res.ok) {
      const existing = await res.json();
      if (Array.isArray(existing) && existing.length) {
        categories = existing.map((cat) => ({
          ...cat,
          href: normalizeServiceHref(cat.href),
          slug: String(cat.slug || '').replace(/^rodos-/, 'rhodes-'),
        }));
      }
    }
  } catch {
    // use canonical list
  }

  const json = JSON.stringify(categories, null, 2);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, json, { contentType: 'application/json', upsert: true });

  if (error) {
    console.error('Upload failed:', error.message);
    process.exit(1);
  }

  console.log('Updated service-categories.json with canonical rhodes-* hrefs.');
  for (const cat of categories) {
    console.log(`  ${cat.title} → ${cat.href}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

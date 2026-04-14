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

const supabase = createClient(
  env.PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const EMAIL = 'info@rhodesrentaboat.com';

async function findGiorgosId() {
  let page = 1;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email === EMAIL);
    if (hit) return hit.id;
    if (data.users.length < 1000) break;
    page++;
  }
  throw new Error(`Admin user ${EMAIL} not found. Run scripts/create-admin-giorgos.mjs first.`);
}

const TOURS = [
  {
    title: 'Private 2-Hour Sailing Boat Tour in Rhodes',
    badge_label: 'Private Sailing',
    price: '€260',
    duration: '2 Hours',
    guests: '1–10 Guests',
    departure_time: 'Flexible',
    description:
      'A short private sailing escape departing from Mandraki Harbour. Spend two relaxed hours aboard with the whole yacht to yourselves, stopping at a nearby bay (such as Kallithea Springs or Anthony Quinn Bay) for a swim and a snorkel before sailing back to the Old Town. Ideal for a sunset date, a proposal or a quick afternoon on the water.',
    highlights: [
      'Private yacht — the whole boat is yours',
      'Departure from Mandraki Harbour',
      'One swim/snorkel stop at a nearby bay',
      'Professional local crew',
      'Flexible departure time throughout the day',
    ],
    inclusions: [
      'Complimentary drinks (water, soft drinks, beer, wine)',
      'Snorkelling equipment and masks',
      'Paddle board',
      'Professional crew',
    ],
    exclusions: ['Hotel transfers', 'Gratuities'],
    image_url: '/assets/img/gallery/yacht/crystal-water-1.jpg',
    images: [
      '/assets/img/gallery/yacht/crystal-water-1.jpg',
      '/assets/img/gallery/yacht/yacht-sailing-1.jpg',
      '/assets/img/gallery/yacht/greek-coast-1.jpg',
    ],
  },
  {
    title: 'Private 3-Hour Sailing Boat Tour in Rhodes',
    badge_label: 'Private Sailing',
    price: '€360',
    duration: '3 Hours',
    guests: '1–10 Guests',
    departure_time: 'Flexible',
    description:
      'Three private hours under sail, departing from historic Mandraki Harbour and heading down the east coast for stops at Kalithea Springs and Kalami Beach. Swim in clear water, try the paddle board, snorkel around the rocks and relax on the sun mattresses between stops. A flexible, unhurried private sailing experience with your own crew.',
    highlights: [
      'Private yacht for exclusive use',
      'Stops at Kalithea Springs and Kalami Beach',
      'SUP paddle board on board',
      'Onboard freshwater shower',
      'Flexible departure time',
    ],
    inclusions: [
      'Unlimited local drinks',
      'Seasonal fresh fruit',
      'Snorkelling equipment and masks',
      'SUP paddle board',
      'Onboard freshwater shower',
      'Sun mattresses',
      'Professional crew',
    ],
    exclusions: ['Hotel transfers', 'Lunch', 'Gratuities'],
    image_url: '/assets/img/gallery/yacht/sailing-sunset-1.jpg',
    images: [
      '/assets/img/gallery/yacht/sailing-sunset-1.jpg',
      '/assets/img/gallery/yacht/yacht-deck-1.jpg',
      '/assets/img/gallery/yacht/greek-island-1.jpg',
    ],
  },
  {
    title: 'Private Full-Day Sailing Boat Tour in Rhodes',
    badge_label: 'Private Sailing',
    price: '€640',
    duration: '8 Hours',
    guests: '1–10 Guests',
    departure_time: 'Flexible',
    description:
      'A full day of private sailing along the east coast of Rhodes — the whole yacht is yours. Depart from Mandraki Harbour and sail to a sequence of the coast\'s best bays (Anthony Quinn, Ladiko / Blue Lagoon, Traganou Caves, Kalithea Springs, Kalami Beach), with plenty of time for swimming, snorkelling, paddle-boarding and a long, relaxed Greek lunch on board. Flexible route — the crew adjusts the day around you.',
    highlights: [
      'Private yacht for exclusive use — full day on board',
      'Multiple swim stops along the east coast',
      'Long lunch stop with Greek meal served on board',
      'Anthony Quinn Bay, Ladiko, Traganou Caves, Kalithea',
      'Flexible departure time and route',
    ],
    inclusions: [
      'Full Greek lunch served on board',
      'Unlimited local drinks (water, soft drinks, beer, wine)',
      'Seasonal fresh fruit',
      'Snorkelling equipment and masks',
      'SUP paddle board',
      'Fishing tackle',
      'Onboard freshwater shower',
      'Sun mattresses',
      'Professional crew',
    ],
    exclusions: ['Hotel transfers', 'Gratuities'],
    image_url: '/assets/img/gallery/yacht/sunset-cruise-1.jpg',
    images: [
      '/assets/img/gallery/yacht/sunset-cruise-1.jpg',
      '/assets/img/gallery/yacht/yacht-sailing-1.jpg',
      '/assets/img/gallery/yacht/greek-island-1.jpg',
    ],
  },
  {
    title: 'Private 5-Hour Sailing Boat Tour in Rhodes',
    badge_label: 'Private Sailing',
    price: '€575',
    duration: '5 Hours',
    guests: '1–10 Guests',
    departure_time: 'Flexible',
    description:
      'A longer private sailing adventure along the east coast of Rhodes with three swimming stops — Anthony Quinn Bay, the Blue Lagoon and Kalithea Springs — plus a full Greek lunch served on board (oven-baked chicken, tzatziki, salad, bread and seasonal fruit). The yacht is yours for the day, with the crew adjusting the route and stops around you.',
    highlights: [
      'Three swim stops: Anthony Quinn Bay, Blue Lagoon, Kalithea Springs',
      'Full Greek lunch served on board',
      'Private yacht — exclusive use',
      'SUP paddle board and snorkelling gear',
      'Flexible departure time',
    ],
    inclusions: [
      'Full Greek lunch (oven-baked chicken, tzatziki, salad, bread, fruit)',
      'Unlimited local drinks',
      'Snorkelling equipment and masks',
      'SUP paddle board',
      'Onboard freshwater shower',
      'Sun mattresses',
      'Professional crew',
    ],
    exclusions: ['Hotel transfers', 'Gratuities'],
    image_url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg',
    images: [
      '/assets/img/gallery/yacht/yacht-luxury-1.jpg',
      '/assets/img/gallery/yacht/yacht-exterior-1.jpg',
      '/assets/img/gallery/yacht/sunset-cruise-1.jpg',
    ],
  },
];

async function main() {
  const ownerId = await findGiorgosId();
  console.log('owner id:', ownerId);

  const { data: existing, error: exErr } = await supabase
    .from('tours')
    .select('id, title')
    .eq('owner_id', ownerId);
  if (exErr) throw exErr;
  const existingTitles = new Set((existing || []).map((t) => t.title));

  for (const t of TOURS) {
    if (existingTitles.has(t.title)) {
      console.log('skip (exists):', t.title);
      continue;
    }
    const { error } = await supabase.from('tours').insert({
      owner_id: ownerId,
      title: t.title,
      description: t.description,
      service_page: 'rhodes-sailing-trips',
      badge_label: t.badge_label,
      price: t.price,
      duration: t.duration,
      guests: t.guests,
      departure_time: t.departure_time,
      image_url: t.image_url,
      images: t.images,
      highlights: t.highlights,
      inclusions: t.inclusions,
      exclusions: t.exclusions,
      status: 'approved',
      is_global: true,
    });
    if (error) throw error;
    console.log('inserted:', t.title);
  }

  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

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

const BUCKET = 'site-config';
const FILE = 'media-slots.json';

const slots = [
  // Home
  { key: 'home.hero.video', page: 'Home', section: 'Hero', label: 'Hero Video (all viewports)', type: 'video', url: '/assets/img/hero/hero-video.webm', defaultUrl: '/assets/img/hero/hero-video.webm', sort_order: 10 },

  // About
  { key: 'about.hero.bg', page: 'About', section: 'Hero', label: 'Hero Background Photo (all viewports)', type: 'image', url: '/assets/img/about/about-hero-boy-sailboat.jpg', defaultUrl: '/assets/img/about/about-hero-boy-sailboat.jpg', sort_order: 10 },
  { key: 'about.story.img', page: 'About', section: 'Our Story', label: 'Our Story Image', type: 'image', url: '/assets/img/gallery/yacht/greek-island-1.jpg', defaultUrl: '/assets/img/gallery/yacht/greek-island-1.jpg', sort_order: 20 },
  { key: 'about.safety.img', page: 'About', section: 'Safety', label: 'Safety Section Image', type: 'image', url: '/assets/img/gallery/yacht/yacht-interior-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-interior-1.jpg', sort_order: 30 },
  { key: 'about.difference.img', page: 'About', section: 'What Makes Us Different', label: 'What Makes Us Different Image', type: 'image', url: '/assets/img/gallery/yacht/yacht-deck-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-deck-1.jpg', sort_order: 40 },
  { key: 'about.cta.charter.bg', page: 'About', section: 'CTA Cards', label: 'Private Charters Card Background', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 50 },
  { key: 'about.cta.tours.bg', page: 'About', section: 'CTA Cards', label: 'Boat Tours Card Background', type: 'image', url: '/assets/img/gallery/yacht/greek-coast-1.jpg', defaultUrl: '/assets/img/gallery/yacht/greek-coast-1.jpg', sort_order: 60 },

  // Service: Boat Tours
  { key: 'service.boat-tours.hero.image', page: 'Service: Boat Tours', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/tours/hero-rhodes-coast.jpg', defaultUrl: '/assets/img/tours/hero-rhodes-coast.jpg', sort_order: 5 },
  { key: 'service.boat-tours.hero.video', page: 'Service: Boat Tours', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/boat-tours.mp4', defaultUrl: '/assets/img/hero/services/boat-tours.mp4', sort_order: 10 },

  // Service: Boat Cruises
  { key: 'service.boat-cruises.hero.image', page: 'Service: Boat Cruises', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/cruises/greco_home1.jpg', defaultUrl: '/assets/img/cruises/greco_home1.jpg', sort_order: 5 },
  { key: 'service.boat-cruises.hero.video', page: 'Service: Boat Cruises', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/boat-cruises.mp4', defaultUrl: '/assets/img/hero/services/boat-cruises.mp4', sort_order: 10 },

  // Service: Boat Trips
  { key: 'service.boat-trips.hero.image', page: 'Service: Boat Trips', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 5 },
  { key: 'service.boat-trips.hero.video', page: 'Service: Boat Trips', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/private-tours.mp4', defaultUrl: '/assets/img/hero/services/private-tours.mp4', sort_order: 10 },

  // Service: Rent a Boat
  { key: 'service.rent-a-boat.hero.image', page: 'Service: Rent a Boat', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 5 },
  { key: 'service.rent-a-boat.hero.video', page: 'Service: Rent a Boat', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/license-free.mp4', defaultUrl: '/assets/img/hero/services/license-free.mp4', sort_order: 10 },

  // Service: Yacht Charter
  { key: 'service.charter.hero.image', page: 'Service: Yacht Charter', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/fleet/oceanis-511-lupo-di-mare.jpg', defaultUrl: '/assets/img/fleet/oceanis-511-lupo-di-mare.jpg', sort_order: 5 },
  { key: 'service.charter.hero.video', page: 'Service: Yacht Charter', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/charter.mp4', defaultUrl: '/assets/img/hero/services/charter.mp4', sort_order: 10 },

  // Service: Catamaran
  { key: 'service.catamaran.hero.image', page: 'Service: Catamaran', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/fleet/lagoon-42-aenaos.jpg', defaultUrl: '/assets/img/fleet/lagoon-42-aenaos.jpg', sort_order: 5 },
  { key: 'service.catamaran.hero.video', page: 'Service: Catamaran', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/charter.mp4', defaultUrl: '/assets/img/hero/services/charter.mp4', sort_order: 10 },

  // Service: Sailing
  { key: 'service.sailing.hero.image', page: 'Service: Sailing', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/sailing-sunset-1.jpg', defaultUrl: '/assets/img/gallery/yacht/sailing-sunset-1.jpg', sort_order: 5 },
  { key: 'service.sailing.hero.video', page: 'Service: Sailing', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/charter.mp4', defaultUrl: '/assets/img/hero/services/charter.mp4', sort_order: 10 },

  // Service: MICE
  { key: 'service.mice.hero.image', page: 'Service: MICE', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 5 },
  { key: 'service.mice.hero.video', page: 'Service: MICE', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/mise.mp4', defaultUrl: '/assets/img/hero/services/mise.mp4', sort_order: 10 },

  // Service: Tender Boat (Unsplash backgroundImage — we keep it as external URL in the default)
  { key: 'service.tender.hero.image', page: 'Service: Tender Boat', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop', defaultUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop', sort_order: 5 },
  { key: 'service.tender.hero.video', page: 'Service: Tender Boat', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/hero/services/tender.mp4', defaultUrl: '/assets/img/hero/services/tender.mp4', sort_order: 10 },
];

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets?.some((b) => b.name === BUCKET)) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true });
    if (error && !/already exists/i.test(error.message)) throw error;
  }
  if (!buckets?.some((b) => b.name === 'site-media')) {
    const { error } = await supabase.storage.createBucket('site-media', { public: true });
    if (error && !/already exists/i.test(error.message)) throw error;
  }
}

async function main() {
  await ensureBucket();
  const json = JSON.stringify(slots, null, 2);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, new Blob([json], { type: 'application/json' }), {
      contentType: 'application/json',
      upsert: true,
    });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  console.log(`seeded ${slots.length} slots`);
  console.log(`url: ${data.publicUrl}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

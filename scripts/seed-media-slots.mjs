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
  { key: 'home.hero.video', page: 'Home', section: 'Hero', label: 'Hero Video (desktop)', type: 'video', url: '/assets/img/heroes/hero-video.mp4', defaultUrl: '/assets/img/heroes/hero-video.mp4', sort_order: 10 },

  // About
  { key: 'about.hero.bg', page: 'About', section: 'Hero', label: 'Hero Background Photo (all viewports)', type: 'image', url: '/assets/img/pages/about/about-hero-boy-sailboat.jpg', defaultUrl: '/assets/img/pages/about/about-hero-boy-sailboat.jpg', sort_order: 10 },
  { key: 'about.story.img', page: 'About', section: 'Our Story', label: 'Our Story Image', type: 'image', url: '/assets/img/gallery/yacht/greek-island-1.jpg', defaultUrl: '/assets/img/gallery/yacht/greek-island-1.jpg', sort_order: 20 },
  { key: 'about.safety.img', page: 'About', section: 'Safety', label: 'Safety Section Image', type: 'image', url: '/assets/img/gallery/yacht/yacht-interior-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-interior-1.jpg', sort_order: 30 },
  { key: 'about.difference.img', page: 'About', section: 'What Makes Us Different', label: 'What Makes Us Different Image', type: 'image', url: '/assets/img/gallery/yacht/yacht-deck-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-deck-1.jpg', sort_order: 40 },
  { key: 'about.cta.charter.bg', page: 'About', section: 'CTA Cards', label: 'Private Charters Card Background', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 50 },
  { key: 'about.cta.tours.bg', page: 'About', section: 'CTA Cards', label: 'Boat Tours Card Background', type: 'image', url: '/assets/img/gallery/yacht/greek-coast-1.jpg', defaultUrl: '/assets/img/gallery/yacht/greek-coast-1.jpg', sort_order: 60 },

  // Service: Boat Tours
  { key: 'service.boat-tours.hero.image', page: 'Service: Boat Tours', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/tours/hero-rhodes-coast.jpg', defaultUrl: '/assets/img/tours/hero-rhodes-coast.jpg', sort_order: 5 },
  { key: 'service.boat-tours.hero.video', page: 'Service: Boat Tours', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/boat-tours.mp4', defaultUrl: '/assets/img/heroes/services/boat-tours.mp4', sort_order: 10 },

  // Service: Boat Cruises
  { key: 'service.boat-cruises.hero.image', page: 'Service: Boat Cruises', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/cruises/greco_home1.jpg', defaultUrl: '/assets/img/cruises/greco_home1.jpg', sort_order: 5 },
  { key: 'service.boat-cruises.hero.video', page: 'Service: Boat Cruises', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/boat-cruises.mp4', defaultUrl: '/assets/img/heroes/services/boat-cruises.mp4', sort_order: 10 },

  // Service: Boat Trips
  { key: 'service.boat-trips.hero.image', page: 'Service: Boat Trips', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 5 },
  { key: 'service.boat-trips.hero.video', page: 'Service: Boat Trips', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/private-tours.mp4', defaultUrl: '/assets/img/heroes/services/private-tours.mp4', sort_order: 10 },

  // Service: Rent a Boat
  { key: 'service.rent-a-boat.hero.image', page: 'Service: Rent a Boat', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 5 },
  { key: 'service.rent-a-boat.hero.video', page: 'Service: Rent a Boat', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/license-free.mp4', defaultUrl: '/assets/img/heroes/services/license-free.mp4', sort_order: 10 },

  // Service: Yacht Charter
  { key: 'service.charter.hero.image', page: 'Service: Yacht Charter', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/fleet/oceanis-511-lupo-di-mare.jpg', defaultUrl: '/assets/img/fleet/oceanis-511-lupo-di-mare.jpg', sort_order: 5 },
  { key: 'service.charter.hero.video', page: 'Service: Yacht Charter', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/charter.mp4', defaultUrl: '/assets/img/heroes/services/charter.mp4', sort_order: 10 },

  // Service: Catamaran
  { key: 'service.catamaran.hero.image', page: 'Service: Catamaran', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/fleet/lagoon-42-aenaos.jpg', defaultUrl: '/assets/img/fleet/lagoon-42-aenaos.jpg', sort_order: 5 },
  { key: 'service.catamaran.hero.video', page: 'Service: Catamaran', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/charter.mp4', defaultUrl: '/assets/img/heroes/services/charter.mp4', sort_order: 10 },

  // Service: Sailing
  { key: 'service.sailing.hero.image', page: 'Service: Sailing', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/sailing-sunset-1.jpg', defaultUrl: '/assets/img/gallery/yacht/sailing-sunset-1.jpg', sort_order: 5 },
  { key: 'service.sailing.hero.video', page: 'Service: Sailing', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/charter.mp4', defaultUrl: '/assets/img/heroes/services/charter.mp4', sort_order: 10 },

  // Service: MICE
  { key: 'service.mice.hero.image', page: 'Service: MICE', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 5 },
  { key: 'service.mice.hero.video', page: 'Service: MICE', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/mise.mp4', defaultUrl: '/assets/img/heroes/services/mise.mp4', sort_order: 10 },

  // Service: Tender Boat (Unsplash backgroundImage, we keep it as external URL in the default)
  { key: 'service.tender.hero.image', page: 'Service: Tender Boat', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop', defaultUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop', sort_order: 5 },
  { key: 'service.tender.hero.video', page: 'Service: Tender Boat', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/tender.mp4', defaultUrl: '/assets/img/heroes/services/tender.mp4', sort_order: 10 },

  // Service: Transfers
  { key: 'service.transfers.hero.image', page: 'Service: Transfers', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/operations/transfers/rhodes-transfer-hero.jpg', defaultUrl: '/assets/img/operations/transfers/rhodes-transfer-hero.jpg', sort_order: 5 },
  { key: 'service.transfers.hero.video', page: 'Service: Transfers', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/charter.mp4', defaultUrl: '/assets/img/heroes/services/charter.mp4', sort_order: 10 },

  // Services index
  { key: 'service.index.hero.image', page: 'Services (index)', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 5 },
  { key: 'service.index.hero.video', page: 'Services (index)', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/charter.mp4', defaultUrl: '/assets/img/heroes/services/charter.mp4', sort_order: 10 },

  // About, Featured Experiences (Section 6)
  { key: 'about.experience.sunset.img', page: 'About', section: 'Featured Experiences', label: 'Sunset Cruises Card', type: 'image', url: '/assets/img/gallery/yacht/sunset-cruise-1.jpg', defaultUrl: '/assets/img/gallery/yacht/sunset-cruise-1.jpg', sort_order: 70 },
  { key: 'about.experience.hopping.img', page: 'About', section: 'Featured Experiences', label: 'Island Hopping Card', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 80 },
  { key: 'about.experience.charter.img', page: 'About', section: 'Featured Experiences', label: 'Private Charters Card', type: 'image', url: '/assets/img/gallery/yacht/yacht-sailing-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-sailing-1.jpg', sort_order: 90 },
  { key: 'about.experience.adventures.img', page: 'About', section: 'Featured Experiences', label: 'Sea Adventures Card', type: 'image', url: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', sort_order: 100 },

  // Things to do, aggregator
  { key: 'things-to-do.hero.image', page: 'Things to Do', section: 'Hero (desktop)', label: 'Hero Background Image (desktop)', type: 'image', url: '/assets/img/gallery/yacht/greek-island-1.jpg', defaultUrl: '/assets/img/gallery/yacht/greek-island-1.jpg', sort_order: 5 },
  { key: 'things-to-do.hero.video', page: 'Things to Do', section: 'Hero (mobile/tablet)', label: 'Hero Video (mobile/tablet)', type: 'video', url: '/assets/img/heroes/services/boat-tours.mp4', defaultUrl: '/assets/img/heroes/services/boat-tours.mp4', sort_order: 10 },

  // Sidecar Tours
  { key: 'sidecar-tours.hero.image', page: 'Sidecar Tours', section: 'Hero', label: 'Hero Background Image', type: 'image', url: '/assets/img/operations/transfers/rhodes-transfer-hero.jpg', defaultUrl: '/assets/img/operations/transfers/rhodes-transfer-hero.jpg', sort_order: 5 },
  { key: 'sidecar-tours.body.img-1', page: 'Sidecar Tours', section: 'Body', label: 'Content Image 1 (Rider)', type: 'image', url: '/assets/img/operations/transfers/transfer-rider.jpg', defaultUrl: '/assets/img/operations/transfers/transfer-rider.jpg', sort_order: 20 },
  { key: 'sidecar-tours.body.img-2', page: 'Sidecar Tours', section: 'Body', label: 'Content Image 2 (Vintage sidecar)', type: 'image', url: '/assets/img/operations/transfers/transfer-sidecar.jpg', defaultUrl: '/assets/img/operations/transfers/transfer-sidecar.jpg', sort_order: 30 },

  // Blog, Rhodes Rent a Boat post
  { key: 'blog.rhodes-rent-a-boat.hero.bg', page: 'Blog: Rhodes Rent a Boat', section: 'Hero', label: 'Hero Background Photo', type: 'image', url: '/assets/img/gallery/yacht/yacht-sailing-1.jpg', defaultUrl: '/assets/img/gallery/yacht/yacht-sailing-1.jpg', sort_order: 10 },

  // FAQ
  { key: 'faq.contact.bg', page: 'FAQ', section: 'Contact Banner', label: 'Contact Section Background', type: 'image', url: '/assets/img/ui/backgrounds/tour_bg_3.jpg', defaultUrl: '/assets/img/ui/backgrounds/tour_bg_3.jpg', sort_order: 10 },

  // Contact
  { key: 'contact.aside.img', page: 'Contact', section: 'Sidebar', label: 'Aside Image (Aegean view)', type: 'image', url: '/assets/img/cruises/greco_sunset3.jpg', defaultUrl: '/assets/img/cruises/greco_sunset3.jpg', sort_order: 10 },
  { key: 'contact.hero.bg', page: 'Contact', section: 'Hero', label: 'Hero Background', type: 'image', url: '/assets/img/gallery/yacht/crystal-water-1.jpg', defaultUrl: '/assets/img/gallery/yacht/crystal-water-1.jpg', sort_order: 5 },
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

async function loadExisting() {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  try {
    const res = await fetch(data.publicUrl + '?t=' + Date.now());
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function main() {
  await ensureBucket();

  // Merge: preserve any admin-customised `url` for existing slot keys;
  // take every other field from this script (label, section, defaultUrl, sort_order)
  // and add new slots that don't exist yet.
  const existing = await loadExisting();
  const existingByKey = new Map(existing.map((s) => [s.key, s]));
  const merged = slots.map((def) => {
    const prev = existingByKey.get(def.key);
    return prev ? { ...def, url: prev.url ?? def.defaultUrl } : def;
  });

  const added = merged.filter((s) => !existingByKey.has(s.key)).length;
  const preserved = merged.filter(
    (s) => existingByKey.has(s.key) && existingByKey.get(s.key).url !== s.defaultUrl
  ).length;

  const json = JSON.stringify(merged, null, 2);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, new Blob([json], { type: 'application/json' }), {
      contentType: 'application/json',
      upsert: true,
    });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  console.log(`total slots: ${merged.length}  (added ${added}, preserved ${preserved} admin customisations)`);
  console.log(`url: ${data.publicUrl}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

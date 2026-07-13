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

const EMAIL = 'info@prestigeyacht.eu';
const PASSWORD = env.SEED_USER_PASSWORD || process.env.SEED_USER_PASSWORD;
if (!PASSWORD) {
  throw new Error(
    "SEED_USER_PASSWORD is required. Set a strong value in .env before seeding — refusing to create accounts with a default password."
  );
}

async function ensureUser() {
  let page = 1;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email === EMAIL);
    if (hit) return hit.id;
    if (data.users.length < 1000) break;
    page++;
  }
  const { data, error } = await supabase.auth.admin.createUser({
    email: EMAIL,
    password: PASSWORD,
    email_confirm: true,
  });
  if (error) throw error;
  return data.user.id;
}

async function upsertProfile(userId) {
  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    full_name: 'Prestige Yacht',
    company_name: 'Prestige Yacht Cruises',
    phone: '+30 6949201713',
    role: 'user',
  });
  if (error) throw error;
}

async function uploadImage(userId, sourceUrl, destName) {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`fetch ${sourceUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = destName.split('.').pop() || 'jpg';
  const contentType =
    ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  const path = `${userId}/prestige-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'luxury-cruise-symi',
    title: 'All Inclusive Luxury Cruise to Symi',
    service_page: 'rodos-boat-cruises',
    badge_label: 'All Inclusive',
    price: 'From \u20AC120',
    duration: '7.5 Hours',
    guests: 'Up to 25 Guests',
    category: 'cruise',
    description:
      'Full-day luxury yacht cruise to Symi Island with three unforgettable stops. Explore the colourful harbour of Symi with its pastel neoclassical houses for two hours, then swim and enjoy a crew-prepared Greek lunch at the dramatic St George Bay (Disalonas). Finish with snorkeling at the private island of Seskli. All-inclusive: water, beer, wine, soft drinks, champagne, fresh fruits and lunch (moussaka or lasagna with Greek salad and bread).',
    highlights: [
      'Symi harbour exploration \u2014 2 hours free time',
      'Swimming and lunch at St George Bay with dramatic cliff formations',
      'Snorkeling at private island Seskli',
      'Crew-prepared Greek lunch on board',
      'Unlimited drinks including champagne',
    ],
    inclusions: [
      'Water, beer, wine, soft drinks, champagne',
      'Fresh fruits',
      'Lunch (moussaka or lasagna with Greek salad and bread)',
    ],
    exclusions: ['Hotel transfers', 'Special dietary accommodations (available on request)'],
    itinerary:
      '09:00 depart Mandraki Harbor. 10:00 arrive Symi Port Yalos (2 hours free time). 12:15 swimming and lunch at St George Bay (2 hours). 14:30 snorkeling at private island Seskli (1 hour). 16:30 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Port, Prestige Yacht kiosk, Rhodes',
    departure_time: '09:00',
    return_time: '16:30',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-symi1.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/symiMap-788x1024.png',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-43-1.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-5t.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/IMG-abf987c4e7fe33aa6af95ba69a6aa8ec-V.jpg',
    ],
  },
  {
    slug: 'east-coast-4hr-cruise',
    title: 'Yachting 4 Hours East Coast Cruise with Greek Buffet',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Half Day',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 25 Guests',
    category: 'cruise',
    description:
      'Step aboard a luxury motor yacht for a 4-hour shared cruise along the East coast of Rhodes. Swim at three famous beaches \u2014 Afantou Caves for underwater exploration, the emerald waters of Anthony Quinn Bay, and the crystal-clear thermal springs of Kallithea. Includes a Greek open buffet and drinks throughout. Morning departure at 09:45 or afternoon at 14:00. Maximum 25 guests for an intimate experience.',
    highlights: [
      'Swim at three iconic Rhodes beaches',
      'Afantou Caves underwater exploration',
      'Anthony Quinn Bay \u2014 famous emerald waters',
      'Kallithea Springs thermal spa and snorkeling',
      'Greek open buffet and drinks included',
    ],
    inclusions: [
      'Greek open buffet',
      'Drinks throughout the cruise',
      'Transfer to/from port',
    ],
    exclusions: ['Hotel transfers (port transfer included)'],
    itinerary:
      'Morning: 09:45 depart Mandraki Port \u2192 Afantou Caves \u2192 Anthony Quinn Bay \u2192 Kallithea Springs \u2192 13:45 return. Afternoon: 14:00 depart \u2192 same route \u2192 18:00 return.',
    meeting_point: 'Mandraki Port, Rhodes Town',
    departure_time: '09:45',
    return_time: '13:45',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/Yachting-4-hours-East-coast-cruise.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/swimming-cruise.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/AFANTOU-CAVES3.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/rhodes-rent-a-boat-greece-3.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/rhodes-rent-a-boat.jpeg',
    ],
  },
  {
    slug: 'luxury-cruise-lindos',
    title: 'Luxury Cruise to Lindos with Lunch and Drinks',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Full Day',
    price: 'From \u20AC100',
    duration: '7.5 Hours',
    guests: 'Up to 25 Guests',
    category: 'cruise',
    description:
      'Full-day luxury yacht cruise to Lindos \u2014 one of the most iconic destinations in the Dodecanese. Enjoy three hours of free time to explore the Lindos Acropolis and the village\u2019s white flat-roofed houses. Then swim and have lunch at the dramatic, rocky St Paul\u2019s Bay before a final swimming stop at Anthony Quinn Bay with its deep emerald waters. Lunch and drinks included throughout.',
    highlights: [
      '3 hours free time in Lindos to explore the Acropolis',
      'Swimming and lunch at St Paul\u2019s Bay',
      'Swimming at Anthony Quinn Bay \u2014 deep emerald waters',
      'Lunch and drinks included all day',
      'Luxury yacht with max 25 guests',
    ],
    inclusions: [
      'Lunch on board',
      'Drinks throughout the cruise',
      'Swimming stops at St Paul\u2019s Bay and Anthony Quinn Bay',
    ],
    exclusions: ['Hotel transfers', 'Museum and attraction entrance fees'],
    itinerary:
      '09:00 depart Mandraki Harbor. 10:00 arrive Lindos (3 hours free time). 13:15 swimming and lunch at St Paul\u2019s Bay. 15:10 swimming at Anthony Quinn Bay. 16:30 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Harbor, Prestige Yacht kiosk, Rhodes',
    departure_time: '09:00',
    return_time: '16:30',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/acropolis-Lindos-Greeks-Romans-Byzantines-Ottomans.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-42-1.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/ANTONY-QUIN3.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/lindos-transfers-and-tours-rodos-island.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/lindosMap-788x1024.png',
    ],
  },
  {
    slug: 'sunset-cruise',
    title: 'Sunset Cruise, Shared or Private',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Sunset',
    price: 'Contact for pricing',
    duration: '3 Hours',
    guests: 'Up to 20 Guests',
    category: 'sunset_cruise',
    description:
      'A 3-hour luxury sunset cruise departing from Mandraki Harbor. Sail to Kallithea Springs for a refreshing swim, then cruise along the coast as the Mediterranean sun sets at the point where the Aegean and Mediterranean seas meet. Watch the spectacular colours of the world-famous Aegean sunset while enjoying complimentary wine. Available as a shared or fully private experience.',
    highlights: [
      'Sunset at the point where the Aegean and Mediterranean seas meet',
      'Swimming at Kallithea Springs',
      'Complimentary wine throughout',
      'Photography opportunities during golden hour',
      'Available as shared or private experience',
    ],
    inclusions: [
      'Free drinks (wine)',
      'Swimming stop at Kallithea Springs',
    ],
    exclusions: ['Food', 'Hotel transfers'],
    itinerary:
      '18:30 depart Mandraki Harbor. 19:00 arrive Kallithea Springs for swimming (1.5 hours). 20:30 sunset cruise along the coast. 21:30 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Port, Prestige Yacht kiosk, Rhodes',
    departure_time: '18:30',
    return_time: '21:30',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/IMG-abf987c4e7fe33aa6af95ba69a6aa8ec-V.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-5t.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-43-1.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-sunset-1024x768.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/rhodes-rent-a-boat-greece-2.jpeg',
    ],
  },
  {
    slug: 'golden-hour-experience',
    title: 'Golden Hour Yacht Experience, Semi-Private',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Golden Hour',
    price: 'Contact for pricing',
    duration: '3 Hours',
    guests: 'Up to 25 Guests',
    category: 'sunset_cruise',
    description:
      'A 3-hour semi-private sunset yacht experience. Swim at Kallithea Springs in crystal-clear Mediterranean waters, then cruise while sipping an Aperol Spritz as the sun slowly disappears into the sea. Drinks and snacks included in a relaxed, laid-back atmosphere aboard a comfortable motor yacht. Maximum 25 guests for an intimate golden-hour experience.',
    highlights: [
      'Refreshing swim at Kallithea Springs',
      'Aperol Spritz cocktails as the sun sets',
      'Drinks and snacks included',
      'Semi-private, relaxed atmosphere',
      'Limited to 25 guests for comfort',
    ],
    inclusions: [
      'Drinks and snacks (including Aperol Spritz)',
      'Swimming stop at Kallithea Springs',
    ],
    exclusions: ['Hotel transfers'],
    itinerary:
      '18:00 depart Mandraki Harbor. 18:20 arrive Kallithea Springs for swimming (1 hour 40 minutes). 20:00 sunset cruise along the coast. 21:00 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Port, Prestige Yacht kiosk, Rhodes',
    departure_time: '18:00',
    return_time: '21:00',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/Golden-Hour-Yacht-Experience05-682x1024.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/Golden-Hour-Yacht-Experience-6.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/Golden-Hour-Yacht-Experience-8.jpeg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-5t-1.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2026/01/Golden-Hour-Yacht-Experience-850x1024.jpeg',
    ],
  },
  {
    slug: 'east-coast-group-cruise',
    title: 'East Coast of Rhodes Group Cruise',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Group',
    price: 'From \u20AC50',
    duration: '7.5 Hours',
    guests: 'Up to 20 Guests',
    category: 'boat_tour',
    description:
      'Full-day group yacht cruise along the East coast of Rhodes. Swim and snorkel at four stunning locations \u2014 the underwater Afantou Caves, the emerald waters of Anthony Quinn Bay, the private island of Seskli, and the historic Kallithea Springs. Free drinks all day, safety equipment for children, shower facilities and shade tent provided. Also available from Ella Resorts (Elissa & Helea) with alternative departure times.',
    highlights: [
      'Afantou Caves underwater exploration',
      'Anthony Quinn Bay \u2014 famous emerald waters',
      'Private island Seskli for snorkeling',
      'Kallithea Springs \u2014 historic architecture and crystal waters',
      'Free drinks all day, safety gear for children',
    ],
    inclusions: [
      'Free drinks throughout the cruise',
      'Safety equipment for children',
      'Shower facilities',
      'Shade tent',
    ],
    exclusions: ['Food', 'Hotel transfers'],
    itinerary:
      '09:00 depart Mandraki Harbor. Afantou Caves (30\u201340 min swimming). Anthony Quinn Bay (30\u201340 min swimming). Seskli private island (snorkeling). Kallithea Springs (swimming and exploration). 16:30 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Harbor, Rhodes (alternative: Ella Resorts)',
    departure_time: '09:00',
    return_time: '16:30',
    sourceImages: [
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/AFANTOU-CAVES3.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/ANTONY-QUIN3.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/Afandou-Beach-1222.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/04/56.jpg',
      'https://prestigeyacht.eu/wp-content/uploads/2023/03/prestige-yacht-rhodes-island-42.jpg',
    ],
  },
];

async function main() {
  const userId = await ensureUser();
  console.log('user:', userId);
  await upsertProfile(userId);

  const { data: existing, error: exErr } = await supabase
    .from('tours')
    .select('id, title')
    .eq('owner_id', userId);
  if (exErr) throw exErr;
  const existingTitles = new Set((existing || []).map((t) => t.title));

  for (const t of TOURS) {
    if (existingTitles.has(t.title)) {
      console.log('skip (exists):', t.title);
      continue;
    }

    const urls = [];
    for (let i = 0; i < t.sourceImages.length; i++) {
      const src = t.sourceImages[i];
      const rawExt = (src.split('.').pop() || 'jpg').toLowerCase().split('?')[0];
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(rawExt) ? rawExt : 'jpg';
      try {
        const url = await uploadImage(userId, src, `${t.slug}-${i + 1}.${safeExt}`);
        urls.push(url);
      } catch (err) {
        console.warn('image failed:', src, err.message);
      }
    }

    const { error } = await supabase.from('tours').insert({
      owner_id: userId,
      title: t.title,
      description: t.description,
      service_page: t.service_page,
      badge_label: t.badge_label,
      price: t.price,
      duration: t.duration,
      guests: t.guests,
      category: t.category,
      image_url: urls[0] || null,
      images: urls,
      highlights: t.highlights,
      inclusions: t.inclusions,
      exclusions: t.exclusions,
      itinerary: t.itinerary,
      meeting_point: t.meeting_point,
      departure_time: t.departure_time,
      return_time: t.return_time,
      status: 'approved',
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

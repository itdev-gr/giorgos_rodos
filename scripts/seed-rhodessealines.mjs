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

const EMAIL = 'bookings@rhodessealines.com';
const PASSWORD = '123456789';

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
    full_name: 'Rhodes Sea Lines',
    company_name: 'Rhodes Sea Lines',
    role: 'user',
  });
  if (error) throw error;
}

async function uploadImage(userId, sourceUrl, destName) {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`fetch ${sourceUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = destName.split('.').pop() || 'jpg';
  const contentType = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  const path = `${userId}/rhodessealines-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'faliraki-sea-shuttle',
    title: 'Boat to Faliraki Beach and Harbour',
    badge_label: 'Sea Shuttle',
    price: 'From \u20AC10',
    duration: '30 Minutes',
    guests: 'Open Seating',
    category: 'boat_transfer',
    description:
      'The Faliraki Sea Shuttle operates between Faliraki and Rhodes Town (Mandraki) Harbours, calling at a number of pick-up points along Faliraki Bay. A casual 30-minute coastal cruise that removes road travel from your day, with four daily departures Monday to Saturday. No reservations required \u2014 pay as you board. Onboard toilet and card payments available. Adults \u20AC10 one-way / \u20AC15 return, children 4\u201311 \u20AC7 one-way / \u20AC10 return, under 4 free.',
    highlights: [
      'Four daily departures for flexible planning',
      'Scenic coastal views along the east coast of Rhodes',
      'No reservations required \u2014 pay as you board',
      'Multiple pick-up stops along Faliraki Bay',
      'Onboard toilet and card payment accepted',
    ],
    inclusions: [
      '30-minute boat transfer between Faliraki and Mandraki',
      'Onboard toilet facilities',
      'Multiple pick-up points along Faliraki Bay',
    ],
    exclusions: ['Food and beverages', 'Hotel transfers'],
    itinerary:
      'Service connects Mandraki Harbour (Rhodes Town) with five stops in Faliraki: Amada Colossos & La Marquise, Esperides, Calypso Beach & Pegasos, Apollo Blue (Faliraki Centre), and Faliraki Harbour. Four daily departures at 10:15, 13:00, 15:30 and 18:00.',
    meeting_point: 'Mandraki Harbour, Rhodes Town (and Faliraki Bay pick-up points)',
    departure_time: '10:15',
    return_time: '18:30',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2022/02/sea-shuttle.jpg',
      'https://rhodessealines.com/wp-content/uploads/2020/07/PHOTO-2020-07-21-16-31-41.jpg',
      'https://rhodessealines.com/wp-content/uploads/2020/07/PHOTO-2020-07-21-16-31-40.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/02/IMG_9976.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/02/IMG_0706.jpg',
    ],
  },
  {
    slug: 'express-kolympia-to-symi',
    title: 'Express Boat Kolympia to Symi w. Swim-Stop',
    badge_label: 'Island Hop',
    price: 'From \u20AC70',
    duration: '7.5 Hours',
    guests: 'Individual Seating',
    category: 'boat_tour',
    description:
      'Express boat to Symi Island for holiday makers looking for a swift, stylish and comfortable trip to Symi with a later departure time and refreshing swim stop. Depart Kolympia Harbour, cruise across to picturesque Symi Town with its pastel-coloured neoclassical houses and blue-domed churches, enjoy 3 hours of free time, then take a 30-minute swim stop at St George\u2019s Bay on the way back. Adults \u20AC70 return, children 4\u201311 \u20AC40.',
    highlights: [
      'Direct express boat from Kolympia Harbour',
      '3 hours free time in Symi Town',
      '30-minute swim stop at St George\u2019s Bay',
      'Crystal-clear waters and pastel neoclassical architecture',
      'Fast, comfortable vessel with individual seating',
    ],
    inclusions: [
      'Return express boat transportation',
      '3 hours exploring Symi Town',
      '30-minute swim stop at St George\u2019s Bay',
      'Individual seating with shaded areas',
    ],
    exclusions: ['Food and beverages', 'Hotel transfers', 'Snorkeling equipment'],
    itinerary:
      '10:15 embarkation at Kolympia Harbour. 12:00 arrival in Symi Town. 12:00\u201315:00 free time to explore Symi. 15:00 departure from Symi. 15:25\u201315:55 swim stop at St George\u2019s Bay. 17:45 return to Kolympia Harbour.',
    meeting_point: 'Kolympia Harbour, Rhodes',
    departure_time: '10:15',
    return_time: '17:45',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2022/01/IMG_7195-scaled.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2022/02/IMG_4620.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/B052336B30D999D54E97907A0CD76A53-scaled.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/IMG_7657-scaled.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/IMG_7646-scaled.jpeg',
    ],
  },
  {
    slug: 'express-kolympia-to-rodos',
    title: 'Express Boat Kolympia to Rodos',
    badge_label: 'Coastal Route',
    price: 'From \u20AC30',
    duration: '6.5 Hours',
    guests: 'Individual Seating',
    category: 'boat_transfer',
    description:
      'Enjoy the views of the coastline as you travel from Kolympia to the heart of Rhodes Town. The route follows historic passages once used by Crusaders and Barbary pirates, passing Afandou, Faliraki and Kallithea before arriving at Mandraki Harbour. Spend the day exploring the UNESCO World Heritage Old City, the New City shopping district, the Aquarium and local museums, then cruise back in the late afternoon. Operates every Tuesday and Thursday. Adults \u20AC30 return, children 4\u201311 \u20AC20.',
    highlights: [
      'Scenic cruise along the east coast of Rhodes',
      'Arrive in the heart of Rhodes at Mandraki Harbour',
      'Explore the UNESCO Old City of Rhodes',
      'Access to New City shops, Aquarium and museums',
      'Runs every Tuesday and Thursday',
    ],
    inclusions: [
      'Return express boat transportation',
      'Arrival at Mandraki Harbour, Rhodes City centre',
      'Individual comfortable seating',
    ],
    exclusions: ['Meals and beverages', 'Museum and attraction entrance fees', 'Shore excursions'],
    itinerary:
      '10:15 embarkation at Kolympia Harbour. 10:50 arrival at Mandraki Harbour, Rhodes City. Free time until 16:50 to explore the Old City, New City, museums and aquarium. 16:50 return boarding. 17:45 arrival back at Kolympia Harbour.',
    meeting_point: 'Kolympia Harbour (arrive by 10:00)',
    departure_time: '10:15',
    return_time: '17:45',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2022/02/IMG_4620.jpg',
      'https://rhodessealines.com/wp-content/uploads/2023/06/IMG_9591.JPG',
      'https://rhodessealines.com/wp-content/uploads/2023/06/IMG_9572.JPG',
      'https://rhodessealines.com/wp-content/uploads/2023/06/IMG_9499.JPG',
      'https://rhodessealines.com/wp-content/uploads/2023/06/IMG_7337.JPG',
    ],
  },
  {
    slug: 'faliraki-to-symi-express',
    title: 'Faliraki to Symi express boat and amazing swim stop',
    badge_label: 'Express',
    price: 'From \u20AC55',
    duration: '7.5 Hours',
    guests: 'Individual Seating',
    category: 'boat_tour',
    description:
      'Express service, by boat, from Faliraki to Symi Island with a swim stop at St George\u2019s Bay \u2014 one of Greece\u2019s most breathtaking bays. Enjoy a convenient later departure, three hours of free time in Symi Town and a refreshing swim stop on the return. Modern, comfortable vessels with individual seating and shaded areas. Adults \u20AC55, children 4\u201311 \u20AC30, infants 0\u20133 free.',
    highlights: [
      'Direct boat service from Faliraki (no long transfers)',
      '3 hours free time exploring Symi Town',
      '30-minute swim stop at St George\u2019s Bay',
      'Crystal-clear Mediterranean waters',
      'Modern vessels with individual seating and shade',
    ],
    inclusions: [
      'Fast boat transportation from Faliraki to Symi and return',
      'Time in Symi Town',
      'Swim stop at St George\u2019s Bay',
      'Attentive crew service',
    ],
    exclusions: ['Meals and beverages', 'Hotel transfers', 'Personal swimming equipment'],
    itinerary:
      '10:00\u201310:15 pick-up along Faliraki Beach. 10:20 embarkation. 10:50\u201311:00 brief stop in Rhodes City. 12:00 arrival in Symi Town. 12:00\u201315:00 free time in Symi. 15:00 departure. 15:25\u201315:55 swim stop at St George\u2019s Bay. 17:30 return to Faliraki.',
    meeting_point: 'Faliraki Beach (Harbour, Apollo Blue, Calypso Beach, Esperides, Amada Colossos pick-ups)',
    departure_time: '10:00',
    return_time: '17:30',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2022/02/Aphrodite-Princess-Symi-St-George.jpg',
      'https://rhodessealines.com/wp-content/uploads/2025/03/st-george-symi-e1740901712407.jpg',
      'https://rhodessealines.com/wp-content/uploads/2025/03/Queen-at-St-George-Rhodes-to-Symi.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2020/07/DSC06184-scaled.webp',
      'https://rhodessealines.com/wp-content/uploads/2020/07/Symi-0558.webp',
    ],
  },
  {
    slug: 'express-rhodes-to-symi-st-george',
    title: '11:00 Express Boat Rhodes to Symi w. St George Swim-Stop',
    badge_label: 'Popular',
    price: 'From \u20AC45',
    duration: '6 Hours',
    guests: 'Individual Seating',
    category: 'boat_tour',
    description:
      'Express boat Rhodes to Symi with a later departure time and refreshing swim stop. This picturesque Mediterranean journey visits the historic island once known for sponge diving and boat building, featuring charming neoclassical architecture and crystal-clear waters. Depart Mandraki Harbour at 11:00, enjoy a one-hour cruise to Symi, spend three hours exploring, then take a 30-minute swim stop at St George\u2019s Bay on the return. Adults \u20AC45 return, children 4\u201311 \u20AC25.',
    highlights: [
      'Swift, comfortable express boat \u2014 one hour each way',
      '3 hours free time in Symi Town',
      '30-minute swim stop at St George\u2019s Bay',
      'Views of the historic Rhodes Acropolis on departure',
      'Pastel neoclassical buildings and blue-domed churches in Symi',
    ],
    inclusions: [
      'Return express boat transportation',
      '3 hours in Symi Town',
      'Comfortable individual seating',
      '30-minute swim stop at St George\u2019s Bay',
    ],
    exclusions: ['Meals and beverages', 'Hotel transfers', 'Personal expenses'],
    itinerary:
      '10:30\u201310:50 embarkation at Mandraki Harbour. 11:00 departure from Rhodes. 12:00 arrival in Symi Town. 12:00\u201315:00 free time in Symi. 15:00 departure. 15:25 swim stop at St George\u2019s Bay. 17:00 return to Mandraki Harbour.',
    meeting_point: 'Mandraki Harbour, Rhodes City (opposite Bank of Greece)',
    departure_time: '11:00',
    return_time: '17:00',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2022/02/Aphrodite-Princess-Symi-St-George.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/B052336B30D999D54E97907A0CD76A53-scaled.jpg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/IMG_7657-scaled.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2022/01/IMG_7646-scaled.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2020/07/DSC_0020-scaled.jpg',
    ],
  },
  {
    slug: 'express-rhodes-to-chalki',
    title: 'Express Boat Rhodes to Chalki (Halki) w. Swim-Stop',
    badge_label: 'Dolphins 90%',
    price: 'From \u20AC59',
    duration: '7 Hours',
    guests: 'Individual Seating',
    category: 'boat_tour',
    description:
      'Express Boat Rhodes to Chalki Island \u2014 the forgotten island, steeped in charm \u2014 with a swim stop at Alimia and a 90% chance of seeing dolphins. Cruise into the turquoise waters of the serene Chalki harbour, framed by elegant stone mansions cascading down the hillside. Enjoy three hours exploring the island, then a 30-minute swim stop at deserted Alimia Island on the way back. Adults \u20AC59 return, children 4\u201311 \u20AC35.',
    highlights: [
      'Fast express boat service to Chalki Island',
      '3 hours exploring Chalki\u2019s picturesque harbour and historic town',
      '30-minute swim stop at deserted Alimia Island',
      '90% chance of spotting dolphins on the crossing',
      'Comfortable individual seating',
    ],
    inclusions: [
      'Return express boat transportation',
      '3 hours in Chalki',
      '30-minute swim stop at Alimia Island',
      'Comfortable individual seating',
      'Optional free transfers from Ixia, Kallithea and Faliraki',
    ],
    exclusions: ['Food and beverages', 'Snorkeling equipment', 'Activities in Chalki'],
    itinerary:
      '9:30\u20139:50 embarkation at Mandraki Harbour. 10:00 departure from Rhodes. 11:30 arrival in Chalki. 11:30\u201314:30 free time to explore the island. 14:30 departure from Chalki. 14:50\u201315:20 swim stop at Alimia Island. 17:00 return to Mandraki Harbour.',
    meeting_point: 'Mandraki Harbour, opposite Bank of Greece, Rhodes City',
    departure_time: '10:00',
    return_time: '17:00',
    sourceImages: [
      'https://rhodessealines.com/wp-content/uploads/2025/10/express-rhodes-to-halki.jpg',
      'https://rhodessealines.com/wp-content/uploads/2025/10/CHALKI.jpg',
      'https://rhodessealines.com/wp-content/uploads/2025/10/HALKI-2.jpeg',
      'https://rhodessealines.com/wp-content/uploads/2025/10/aerial-alimia.jpg',
      'https://rhodessealines.com/wp-content/uploads/2025/10/halki-island.jpg',
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
      const ext = (src.split('.').pop() || 'jpg').toLowerCase().split('?')[0];
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
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
      service_page: 'rhodes-boat-trips',
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

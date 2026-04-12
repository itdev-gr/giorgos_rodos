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

const EMAIL = 'info@archonyachting.com';
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
    full_name: 'Archon Yachting',
    company_name: 'ARCHON Yachting Greece',
    phone: '+30 2242 181082',
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
  const path = `${userId}/archon-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const BASE = 'https://archonyachting.com';

const TOURS = [
  {
    slug: 'lagoon-55-utopia',
    title: 'Lagoon 55 Utopia \u2014 Luxury Crewed Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '8 Guests \u00B7 4 Cabins',
    category: 'charter',
    description:
      'True to her name, Utopia offers a world of unmatched luxury and serenity, sailing through the breathtaking Greek waters. This brand new 2024 Lagoon 55 crewed catamaran is designed for those who seek the perfect blend of comfort, elegance and adventure. 18.38m length, 9m beam, 4 double cabins with 5 heads and a dedicated crew cabin. Fully equipped with air conditioning, generator, water maker, hydraulic gangway, solar panels, teak deck, seabob, wakeboard, SUP and Wi-Fi. Charter base: Kos island.',
    highlights: [
      'Brand new 2024 Lagoon 55 \u2014 18.38m luxury catamaran',
      'Fully crewed with professional skipper and hostess',
      '4 double cabins, 5 heads, dedicated crew quarters',
      'Seabob, wakeboard, SUP and snorkeling gear',
      'Air conditioning, water maker and hydraulic gangway',
    ],
    inclusions: [
      'Professional crew (skipper and hostess)',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'Seabob, wakeboard and SUP',
      'Wi-Fi on board',
      'Dinghy: Highfield 460 with Yamaha 70HP',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Tips'],
    itinerary: 'Custom itinerary through the Dodecanese islands. Depart from Kos and explore Rhodes, Symi, Tilos, Nisyros and surrounding islands at your own pace.',
    meeting_point: 'Kos Island, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/aerial_0223_d.jpg/c4e721931672df90b6fb69f0488f5e50.jpg',
      '/img/containers/assets/images/yachts/dji_fly_20250812_190138_0051_1755106690423_photo.jpeg/cc5542cf2fc8f655c7250e413fb9d6aa.jpeg',
      '/img/containers/assets/images/yachts/dji_fly_20250812_185510_0024_1755106730390_photo.jpeg/257ccf6de0dc0dea977da69cdbdd5abe.jpeg',
      '/img/containers/assets/images/yachts/dji_fly_20250812_190258_0059_1755106689973_photo.jpeg/5082719aebabd2d565a09005ff8bc446.jpeg',
      '/img/containers/assets/images/yachts/dji_fly_20250812_185820_0038_1755106706734_photo.jpeg/a2451deaf0c88f75fd0ffde579bd11c6.jpeg',
    ],
  },
  {
    slug: 'fountaine-pajot-aura-51-amante',
    title: 'Fountaine Pajot Aura 51 Amante \u2014 Crewed Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '8 Guests \u00B7 4 Cabins',
    category: 'charter',
    description:
      'Embark on a journey of freedom and adventure with the Fountaine Pajot Aura 51 Amante catamaran. Sailing from Rhodes, you\u2019ll be surrounded by the magic of the Greek islands, exploring turquoise waters and pristine beaches. Built in 2023, 15.54m length, 8.08m beam, 4 double cabins with 4 heads plus crew cabin. Fully equipped with air conditioning, generator, water maker, hydraulic gangway, solar panels, teak deck, seabob, wakeboard, SUP, TV and Wi-Fi. Charter base: Rhodes island.',
    highlights: [
      '2023 Fountaine Pajot Aura 51 \u2014 based in Rhodes',
      'Fully crewed catamaran charter',
      '4 double cabins, 4+1 heads, crew quarters',
      'Seabob, wakeboard, SUP and snorkeling gear',
      'Air conditioning, water maker and hydraulic gangway',
    ],
    inclusions: [
      'Professional crew (skipper and hostess)',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'Seabob, wakeboard and SUP',
      'Wi-Fi and 32" TV on board',
      'Dinghy: Highfield with 30HP engine',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Tips'],
    itinerary: 'Custom itinerary through the Dodecanese islands. Depart from Rhodes and explore Symi, Tilos, Chalki, Nisyros, Kos and surrounding islands.',
    meeting_point: 'Rhodes Island, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/dji_20231002155915_0059_d-min.jpg/eeba2752c0c91b85c9ad9ea83d1d6f1c.jpg',
      '/img/containers/assets/images/yachts/img_3555-min.jpg/45552bda3278be055924905fdecfb0d0.jpg',
      '/img/containers/assets/images/yachts/img_3580-min.jpg/f75a9c3e7ecaa8fa3916d575251fd696.jpg',
      '/img/containers/assets/images/yachts/dji_20231002160215_0066_d-min.jpg/1ee5660c208e1f0fafe9d6dd1ce5ae17.jpg',
      '/img/containers/assets/images/yachts/dji_20231002155915_0059_d-min.jpg/b62b3abfde71927180ecdd9fb9414b04.jpg',
    ],
  },
  {
    slug: 'lagoon-46-si-mi-amor',
    title: 'Lagoon 46 Si Mi Amor \u2014 Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '12 Guests \u00B7 4 Cabins',
    category: 'charter',
    description:
      'The Lagoon 46 Si Mi Amor is a stunning 2024 catamaran combining cutting-edge design, exceptional performance and unparalleled comfort. 13.99m length, 7.96m beam, 4 double cabins accommodating up to 12 guests, with 4 heads and 2 crew cabins. Features a flybridge with helm station and panoramic views, open-plan saloon and spacious deck areas. Fully equipped with air conditioning, generator, water maker, hydraulic gangway, solar panels and teak deck. Available bareboat or skippered from Kos island.',
    highlights: [
      'Brand new 2024 Lagoon 46 \u2014 13.99m catamaran',
      'Accommodates up to 12 guests in 4 cabins',
      'Flybridge with panoramic views',
      'Available bareboat or with skipper',
      'Air conditioning, water maker and hydraulic gangway',
    ],
    inclusions: [
      'Bareboat or skipper available',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'Full navigation equipment',
      'Safety equipment',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Skipper (if bareboat)'],
    itinerary: 'Custom itinerary through the Dodecanese. Depart from Kos and explore the surrounding Greek islands at your own pace.',
    meeting_point: 'Kos Island, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/20250428-p2722646.jpg/314cc4695ade0c510a651a692b7e22c2.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a2206.jpg/d1677d8ca6f34938f044dad57438e570.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a2220.jpg/e64426beffbf4879cea380c5d3b0c357.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a2209.jpg/f1bd6cb28bfd8df8437d5b167ca96a73.jpg',
      '/img/containers/assets/images/yachts/20250428-p2722646.jpg/6d701a398e5d7b0875113acca5a5a102.jpg',
    ],
  },
  {
    slug: 'hanse-510-sea-emerald',
    title: 'Hanse 510 Sea Emerald \u2014 Sailing Yacht Charter',
    service_page: 'rodos-charter',
    badge_label: 'Sailing Yacht',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '6 Guests \u00B7 3 Cabins',
    category: 'charter',
    description:
      'Sea Emerald is a true gem of the sea, offering a luxurious sailing experience in the Dodecanese islands. This brand new 2024 Hanse 510 sailing yacht, 15.97m length, 4.91m beam, features 3 double cabins with 3 heads and a dedicated crew cabin. Ample outdoor seating, lounging areas, and a stylish interior with fully equipped kitchen. Available bareboat or skippered from Kos island. Equipped with air conditioning, generator, bow thruster, gangway, solar panels and teak deck.',
    highlights: [
      'Brand new 2024 Hanse 510 \u2014 15.97m sailing yacht',
      '3 double cabins with en-suite heads',
      'Available bareboat or with skipper',
      'Bow thruster for easy maneuvering',
      'Air conditioning, generator and solar panels',
    ],
    inclusions: [
      'Bareboat or skipper available',
      'Air conditioning and generator',
      'Bow thruster and sternthruster',
      'Full navigation equipment',
      'Solar panels and teak deck',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Skipper (if bareboat)'],
    itinerary: 'Custom itinerary through the Dodecanese. Depart from Kos and sail to Rhodes, Symi, Tilos, Nisyros and surrounding islands.',
    meeting_point: 'Kos Island, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/mz6_3810-1754036565.jpg/f06b7523f11500b1b7026f094725c41d.jpg',
      '/img/containers/assets/images/yachts/dji_0391.jpg/3fbabb0abcbd73379ede1c293675dc19.jpg',
      '/img/containers/assets/images/yachts/dji_0374.jpg/719b1bdcfb129e3d9108e22b22d9e91b.jpg',
      '/img/containers/assets/images/yachts/dji_0384.jpg/c38e32eb7b7261cdad59b56c59f4c3df.jpg',
      '/img/containers/assets/images/yachts/mz6_3810-1754036565.jpg/d558848e65c18929d0c33a532419a248.jpg',
    ],
  },
  {
    slug: 'lagoon-46-xhenia',
    title: 'Lagoon 46 Xhenia \u2014 Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '12 Guests \u00B7 4 Cabins',
    category: 'charter',
    description:
      'The Lagoon 46 Xhenia represents the newest generation of comfort and performance in Greek yachting. A 2024 model based in Kos, she offers a fresh contemporary design with remarkable space. 13.99m length, 7.96m beam, 4 double cabins for up to 12 guests, 5 heads and 2 crew cabins. Bright open-plan salon, spacious cabins, generous outdoor living areas. Equipped with air conditioning, generator, water maker, hydraulic gangway, solar panels and teak deck. Available bareboat or skippered.',
    highlights: [
      '2024 Lagoon 46 \u2014 contemporary design',
      'Up to 12 guests in 4 cabins with 5 heads',
      'Open-plan salon and generous outdoor areas',
      'Available bareboat or with skipper',
      'Water maker, solar panels and hydraulic gangway',
    ],
    inclusions: [
      'Bareboat or skipper available',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'Hydraulic gangway and teak deck',
      'Full navigation and safety equipment',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Skipper (if bareboat)'],
    itinerary: 'Custom itinerary through the Dodecanese. Depart from Kos and explore the Greek islands.',
    meeting_point: 'Kos Island, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/20250428-p2722463.jpg/e0392d87161eea292f6ef1a01685d915.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a2082-1766491985.jpg/8521cc442b7c42a5af6d1030bfd69ea5.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a2057-edit-1766491977.jpg/1cea7d2a642138b91589dc3e6d5cf3ef.jpg',
      '/img/containers/assets/images/yachts/20241105-al7a1994-1766491910.jpg/2e213ed1a846a7a40fa0f8619df8166b.jpg',
      '/img/containers/assets/images/yachts/20250428-p2722463.jpg/3342446a05a0b6a48748ce323a5d3036.jpg',
    ],
  },
  {
    slug: 'beneteau-first-53-izanami',
    title: 'Beneteau First 53 Izanami \u2014 Crewed Sailing Yacht Charter',
    service_page: 'rodos-charter',
    badge_label: 'Sailing Yacht',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '6 Guests \u00B7 3 Cabins',
    category: 'charter',
    description:
      'Beneteau First 53 Izanami is a magnificent sailing yacht offering an unparalleled experience of tranquility in the Aegean Sea. Built in 2022, 17.12m length, 5m beam, with 3 double cabins, 3 heads and a crew cabin. Sleek design with state-of-the-art amenities including air conditioning, generator, water maker, bow thruster, solar panels, teak deck, seabob, wakeboard, SUP and Wi-Fi. Professional crew of two ensures every detail is taken care of. Charter base: Lavrion.',
    highlights: [
      '2022 Beneteau First 53 \u2014 17.12m performance sailing yacht',
      'Fully crewed or skippered charter',
      '3 double cabins with en-suite bathrooms',
      'Seabob, wakeboard, SUP and water toys',
      'Bow thruster, water maker and solar panels',
    ],
    inclusions: [
      'Professional crew (skipper and hostess)',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'Seabob, wakeboard and SUP',
      'Wi-Fi on board',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Tips'],
    itinerary: 'Custom itinerary. Depart from Lavrion and explore the Cyclades, Saronic Gulf or Dodecanese islands.',
    meeting_point: 'Lavrion \u2014 Olympic Marine, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/izanami-above-bow.jpg/613769156c81a83727e6ee5ff584770f.jpg',
      '/img/containers/assets/images/yachts/izanami-on-anchor-1697553782.jpg/f2e68ea6330840eee7affe354c2c5fcd.jpg',
      '/img/containers/assets/images/yachts/izanami-above.jpg/548b0cc2f1c1eb190faa12b9a945309f.jpg',
      '/img/containers/assets/images/yachts/izanami-above-bow.jpg/484eab27d0af6d43a7d0cc89521813c4.jpg',
      '/img/containers/assets/images/yachts/izanami-above-bow.jpg/bb2d39697fc125b8185df3a403ed1e88.jpg',
    ],
  },
  {
    slug: 'lagoon-50-rio',
    title: 'Lagoon 50 Rio \u2014 Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '12 Guests \u00B7 6 Cabins',
    category: 'charter',
    description:
      'Welcome aboard Rio, a stunning Lagoon 50 perfectly crafted for larger groups. With 6 beautifully appointed cabins and 6 private heads, Rio offers privacy and relaxation for up to 12 guests. 2021 build, 14.75m length, 8.10m beam. Features an impressive flybridge with panoramic views, multiple dining and sunbathing areas. Equipped with air conditioning, generator, water maker, hydraulic gangway, solar panels and SUP. Available skippered or bareboat from Lefkas.',
    highlights: [
      '2021 Lagoon 50 \u2014 14.75m with flybridge',
      '6 cabins and 6 heads for maximum privacy',
      'Impressive flybridge with panoramic views',
      'Available skippered or bareboat',
      'Air conditioning, water maker and hydraulic gangway',
    ],
    inclusions: [
      'Skippered or bareboat available',
      'Air conditioning and generator',
      'Water maker and solar panels',
      'SUP and snorkeling gear',
      'Dinghy with engine',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Skipper (if bareboat)'],
    itinerary: 'Custom itinerary through the Ionian islands. Depart from Lefkas and explore Ithaca, Kefalonia, Zakynthos and surrounding islands.',
    meeting_point: 'Lefkas \u2014 D-Marin, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/_ncz5194_web-%281%29-1743237025.jpg/3b063352589a7c8bd2836d069041a5ff.jpg',
      '/img/containers/assets/images/yachts/3539341114703491_lagoon_50_rib-1743237045.jpg/74f9f08a6547d146c3e9a3568a21a324.jpg',
      '/img/containers/assets/images/yachts/l50-slider_01-1743237043.jpg/8b7b3d3510c373cc9e9a03dc2f3084ce.jpg',
      '/img/containers/assets/images/yachts/3539461114703491_lagoon_50_underwater_2-1743237042.webp/f90ab20e2786e76209762961f2194780.webp',
      '/img/containers/assets/images/yachts/_ncz5194_web-%281%29-1743237025.jpg/09c9799a0741250291008684e6a16923.jpg',
    ],
  },
  {
    slug: 'lagoon-50-ioli',
    title: 'Lagoon 50 Ioli \u2014 Catamaran Charter',
    service_page: 'rodos-charter',
    badge_label: 'Catamaran',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '12 Guests \u00B7 6 Cabins',
    category: 'charter',
    description:
      'Lagoon 50 Ioli offers the ultimate sailing catamaran luxury experience, fully equipped with all extras. 2019 build, 14.76m length, 8.10m beam, 6 double cabins with 6 heads. Experience a unique sailing adventure in the Aegean Sea, surrounded by luxury and style. Features a flybridge with stunning views, air conditioning, generator, water maker and hydraulic gangway. Available bareboat or skippered from Athens \u2014 Alimos Marina.',
    highlights: [
      '2019 Lagoon 50 \u2014 14.76m luxury catamaran',
      '6 cabins and 6 heads for up to 12 guests',
      'Flybridge with panoramic sea views',
      'Available bareboat or with skipper',
      'Air conditioning, water maker and hydraulic gangway',
    ],
    inclusions: [
      'Bareboat or skipper available',
      'Air conditioning and generator',
      'Water maker and hydraulic gangway',
      '32" TV screen',
      'Full navigation and safety equipment',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Skipper (if bareboat)'],
    itinerary: 'Custom itinerary. Depart from Athens and explore the Saronic Gulf, Cyclades or Dodecanese islands.',
    meeting_point: 'Athens \u2014 Alimos Marina, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/lagoon-50-4.jpg/d02ad60f2b863d691ef675d716156c88.jpg',
      '/img/containers/assets/images/yachts/lagoon-50-7.jpg.webp/5f0599ad98c3f0ddc775b4fcfe7ad92c.webp',
      '/img/containers/assets/images/yachts/603ca8466f14461bec2202b8.webp/27af8aba21c7ac94b8aa13535a0bac62.webp',
      '/img/containers/assets/images/yachts/lagoon-50-2019-id2273-7.jpg/ee7c9ca82de844f7061cc78fffd46e88.jpg',
      '/img/containers/assets/images/yachts/lagoon-50-4.jpg/a310dc7405b352597d3bc1498d433369.jpg',
    ],
  },
  {
    slug: 'gianetti-65-shooting-star',
    title: 'Gianetti 65 Shooting Star \u2014 Crewed Sailing Yacht Charter',
    service_page: 'rodos-charter',
    badge_label: 'Sailing Yacht',
    price: 'Contact for pricing',
    duration: 'Weekly Charter',
    guests: '6 Guests \u00B7 3 Cabins',
    category: 'charter',
    description:
      'Step aboard Shooting Star, an elegant Gianetti 65 sailing yacht combining timeless Italian design with modern amenities. Built in 2008, refitted 2023\u20132024, 20.05m length, 5.30m beam. 3 spacious cabins including a master suite and 2 convertible twin/double cabins, all with en-suite bathrooms and air conditioning. Professional crew of two \u2014 experienced captain and dedicated host/cook. Generous deck spaces, warm wood interior and abundant natural light. Perfect for couples, families or small groups seeking a private sailing holiday in Greece.',
    highlights: [
      'Elegant 20.05m Gianetti 65 \u2014 Italian design, refitted 2023\u20132024',
      'Professional crew of two (captain and host/cook)',
      '3 cabins with en-suite bathrooms and air conditioning',
      'Generous deck spaces for dining and sunbathing',
      'Warm wood interior with abundant natural light',
    ],
    inclusions: [
      'Professional crew (captain and host/cook)',
      'Air conditioning and generator',
      'Water maker',
      'Full navigation equipment',
      'Dinghy with engine',
    ],
    exclusions: ['Provisioning', 'Fuel', 'Port fees', 'Tips'],
    itinerary: 'Custom itinerary through the Greek islands. Discover hidden bays, crystal-clear waters and charming island villages.',
    meeting_point: 'Greece (flexible base)',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      '/img/containers/assets/images/yachts/9307brochure19_resize-1900,1248.jpg/9251ff9a0f8a46e82d893dbeb9a7cbc5.jpg',
      '/img/containers/assets/images/yachts/9307brochure19_resize-1900,1248-1775560791.jpg/deab22e70a64e2082635da0e4426cdb4.jpg',
      '/img/containers/assets/images/yachts/9307brochure4_resize-1900,1248.jpg/cb16d51a23a9ae7e8d7b7a917246dc09.jpg',
      '/img/containers/assets/images/yachts/9307brochure18_resize-1900,1248.jpg/9b5635029703941939cb65630c50d8bb.jpg',
      '/img/containers/assets/images/yachts/9307brochure19_resize-1900,1248.jpg/75bea578b8bef21c73699c88a16dab1e.jpg',
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
      const src = BASE + t.sourceImages[i];
      const rawExt = (t.sourceImages[i].split('.').pop() || 'jpg').toLowerCase().split('/')[0];
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

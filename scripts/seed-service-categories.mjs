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

const categories = [
  { slug: 'rodos-boat-tours', title: 'Rhodes Boat Tours', description: 'Guided sailing tours along the stunning Rhodes coastline and nearby islands.', image: '/assets/img/cruises/greco_sunset3.jpg', href: '/service/rodos-boat-tours', sort_order: 1 },
  { slug: 'rhodes-boat-trips', title: 'Rhodes Boat Trips', description: 'Private sailing yacht trips with experienced crews across the Dodecanese.', image: '/assets/img/locations/private-sailing.jpg', href: '/service/rhodes-boat-trips', sort_order: 2 },
  { slug: 'rodos-boat-cruises', title: 'Rhodes Boat Cruises', description: 'All-inclusive day and sunset cruises with swimming, dining, and music.', image: '/assets/img/cruises/greco_home1.jpg', href: '/service/rodos-boat-cruises', sort_order: 3 },
  { slug: 'rhodes-rent-a-boat', title: 'Rhodes Rent a Boat', description: 'Drive your own boat along the coast, no licence needed, full freedom.', image: '/assets/img/locations/tsambika-beach.jpg', href: '/service/rhodes-rent-a-boat', sort_order: 4 },
  { slug: 'rhodes-catamaran-tours', title: 'Rhodes Catamaran Cruises', description: 'Spacious catamarans for group cruises, events, and island-hopping adventures.', image: '/assets/img/fleet/lagoon-42-aenaos.jpg', href: '/service/rhodes-catamaran-tours', sort_order: 5 },
  { slug: 'rodos-charter', title: 'Rhodes Yacht Charter', description: 'Over 80 sailing yachts and catamarans. Bareboat or crewed, the Dodecanese is yours.', image: '/assets/img/fleet/oceanis-461-nailah.jpg', href: '/service/rodos-charter', sort_order: 6 },
  { slug: 'rodos-tender-boat', title: 'Rhodes Tender Boat Services', description: 'Fast and reliable shore-to-ship transfers across Rhodes harbours and bays.', image: '/assets/img/operations/tender/tender-service.jpg', href: '/service/rodos-tender-boat', sort_order: 7 },
  { slug: 'rhodes-mice-events', title: 'Rhodes MICE & Incentive Events', description: 'Corporate events, incentive trips, and team-building experiences on the water.', image: '/assets/img/gallery/yacht/yacht-luxury-1.jpg', href: '/service/rhodes-mice-events', sort_order: 8 },
];

async function run() {
  console.log('Creating service_categories table...');

  // Create table via SQL (Supabase admin)
  const { error: sqlError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS service_categories (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        slug text UNIQUE NOT NULL,
        title text NOT NULL,
        description text,
        image text,
        href text,
        sort_order integer DEFAULT 0,
        created_at timestamptz DEFAULT now(),
        updated_at timestamptz DEFAULT now()
      );
    `
  });

  if (sqlError) {
    // RPC may not exist, try direct insert (table might already exist)
    console.log('RPC not available, trying direct upsert...');
  } else {
    console.log('Table created/verified');
  }

  // Upsert categories
  for (const cat of categories) {
    const { error } = await supabase
      .from('service_categories')
      .upsert(cat, { onConflict: 'slug' });

    if (error) {
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        console.error('Table does not exist. Please create it in Supabase Dashboard:');
        console.error('Table name: service_categories');
        console.error('Columns: id (uuid, pk), slug (text, unique), title (text), description (text), image (text), href (text), sort_order (int4), created_at (timestamptz), updated_at (timestamptz)');
        process.exit(1);
      }
      console.error(`Failed to upsert ${cat.slug}:`, error.message);
    } else {
      console.log(`✓ ${cat.title}`);
    }
  }

  // Verify
  const { data, error: fetchErr } = await supabase
    .from('service_categories')
    .select('slug, title, image')
    .order('sort_order');

  if (fetchErr) {
    console.error('Fetch failed:', fetchErr.message);
  } else {
    console.log(`\nDone! ${data.length} categories in database.`);
  }
}

run().catch(e => console.error(e));

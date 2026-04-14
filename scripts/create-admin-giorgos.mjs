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
const PASSWORD = '123456789';
const FULL_NAME = 'Giorgos';

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

async function upsertAdminProfile(userId) {
  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    full_name: FULL_NAME,
    phone: '+306951666454',
    role: 'admin',
  });
  if (error) throw error;
}

async function main() {
  const userId = await ensureUser();
  console.log('user id:', userId);
  await upsertAdminProfile(userId);
  console.log(`admin "${FULL_NAME}" ready (email ${EMAIL})`);
  console.log('login at /login with password:', PASSWORD);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

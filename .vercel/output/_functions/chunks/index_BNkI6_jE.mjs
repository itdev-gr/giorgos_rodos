import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const userId = locals.user?.id;
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("bookings").select("*, tours!inner(title, owner_id)").eq("tours.owner_id", userId).order("created_at", { ascending: false });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify(data), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

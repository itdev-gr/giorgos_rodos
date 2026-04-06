import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const PUT = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const supabase = createAdminClient();
  const { error } = await supabase.from("profiles").update(body).eq("id", id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
const DELETE = async ({ params }) => {
  const { id } = params;
  const supabase = createAdminClient();
  const { error: profileError } = await supabase.from("profiles").delete().eq("id", id);
  if (profileError) return new Response(JSON.stringify({ error: profileError.message }), { status: 400 });
  const { error: authError } = await supabase.auth.admin.deleteUser(id);
  if (authError) return new Response(JSON.stringify({ error: authError.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const body = await request.json();
  const { email, password, full_name, company_name, phone, role } = body;
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required" }), { status: 400 });
  }
  const supabase = createAdminClient();
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });
  if (authError) {
    return new Response(JSON.stringify({ error: authError.message }), { status: 400 });
  }
  const { error: profileError } = await supabase.from("profiles").insert({
    id: authData.user.id,
    full_name: full_name || null,
    company_name: company_name || null,
    phone: phone || null,
    role: role || "user"
  });
  if (profileError) {
    return new Response(JSON.stringify({ error: profileError.message }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true, userId: authData.user.id }), { status: 201 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

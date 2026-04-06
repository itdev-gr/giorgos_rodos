import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, subject, message } = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email and message are required" }), { status: 400 });
  }
  const supabase = createAdminClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    subject: subject || null,
    message
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 201 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

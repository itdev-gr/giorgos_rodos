export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../lib/supabase';
import { sendWeb3FormsEmail } from '../../lib/web3forms';


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email and message are required' }), { status: 400 });
  }

  // Best-effort persistence to Supabase (does not block the email notification).
  try {
    const supabase = createAdminClient() || createPublicClient();
    await supabase.from('contact_submissions').insert({
      name, email, phone: phone || null, subject: subject || null, message,
    });
  } catch {
    // ignore — email delivery below is the source of truth for the owner.
  }

  const sent = await sendWeb3FormsEmail({
    subject: subject ? `Contact form: ${subject}` : 'New contact form submission',
    from_name: name,
    replyto: email,
    fields: {
      Name: name,
      Email: email,
      Phone: phone || '—',
      Subject: subject || '—',
      Message: message,
    },
  });

  if (!sent) {
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 502 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 201 });
};

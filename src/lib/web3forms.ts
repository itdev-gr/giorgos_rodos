/**
 * Web3Forms email delivery helper.
 *
 * Sends form submissions to the site owner's inbox via https://web3forms.com.
 * Prefer the WEB3FORMS_ACCESS_KEY env var; it falls back to the project key so
 * the contact/booking forms keep working when the env var is not configured on
 * the host. (This is a low-sensitivity key — it only lets someone send email to
 * the owner's Web3Forms inbox — but set the env var and rotate it when you can.)
 * Runs server-side only (API routes), so process.env is available.
 */

const FALLBACK_ACCESS_KEY = 'f2412789-c4d5-43be-a2ac-ac12d740e5c6';

function getAccessKey(): string {
  return (
    import.meta.env.WEB3FORMS_ACCESS_KEY ||
    (typeof process !== 'undefined' && process.env
      ? process.env.WEB3FORMS_ACCESS_KEY
      : '') ||
    FALLBACK_ACCESS_KEY
  );
}

const ENDPOINT = 'https://api.web3forms.com/submit';

interface Web3FormsPayload {
  subject: string;
  from_name?: string;
  replyto?: string;
  /** Human-readable field name -> value pairs included in the email body. */
  fields: Record<string, string>;
}

export async function sendWeb3FormsEmail(payload: Web3FormsPayload): Promise<boolean> {
  const accessKey = getAccessKey();
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not set — cannot deliver form submission email.');
    return false;
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: payload.subject,
        from_name: payload.from_name || 'Rhodes Sailing Tours website',
        replyto: payload.replyto,
        ...payload.fields,
      }),
    });

    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    return Boolean(data && data.success);
  } catch {
    return false;
  }
}

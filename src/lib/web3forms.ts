/**
 * Web3Forms email delivery helper.
 *
 * Sends form submissions to the site owner's inbox via https://web3forms.com.
 * The access key MUST be provided via the WEB3FORMS_ACCESS_KEY env var — there
 * is no committed fallback key (a committed key is a shared secret anyone can
 * spend). This module runs server-side only (API routes), so process.env is
 * available; import.meta.env is checked first for parity with the rest of the
 * codebase.
 */

function getAccessKey(): string {
  return (
    import.meta.env.WEB3FORMS_ACCESS_KEY ||
    (typeof process !== 'undefined' && process.env
      ? process.env.WEB3FORMS_ACCESS_KEY || ''
      : '')
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

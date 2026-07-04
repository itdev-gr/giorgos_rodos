/**
 * Web3Forms email delivery helper.
 *
 * Sends form submissions to the site owner's inbox via https://web3forms.com.
 * The access key can be overridden with the WEB3FORMS_ACCESS_KEY env var; it
 * falls back to the project key so the forms work out of the box.
 */

const ACCESS_KEY =
  import.meta.env.WEB3FORMS_ACCESS_KEY || 'f2412789-c4d5-43be-a2ac-ac12d740e5c6';

const ENDPOINT = 'https://api.web3forms.com/submit';

interface Web3FormsPayload {
  subject: string;
  from_name?: string;
  replyto?: string;
  /** Human-readable field name -> value pairs included in the email body. */
  fields: Record<string, string>;
}

export async function sendWeb3FormsEmail(payload: Web3FormsPayload): Promise<boolean> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
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

// Client-side Web3Forms submission.
//
// Web3Forms access keys are public by design, and the free plan only accepts
// submissions from the browser — server-side submits are rejected with
// "Pro plan is required". So email delivery MUST happen client-side; the API
// routes only persist the lead to Supabase. Override the key with the
// PUBLIC_WEB3FORMS_ACCESS_KEY env var; it falls back to the project key.
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || 'f2412789-c4d5-43be-a2ac-ac12d740e5c6';

export async function submitToWeb3Forms(fields: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = await res.json().catch(() => null);
    return Boolean(data && data.success);
  } catch {
    return false;
  }
}

// Defense-in-depth helpers for API routes. The middleware already gates
// /api/admin and /api/user, but re-checking in the handler means a future
// route added outside those prefixes (or a middleware change) can't silently
// expose the service-role client.

export function requireUser(locals: App.Locals): Response | null {
  if (!locals.user?.id) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }
  return null;
}

export function requireAdmin(locals: App.Locals): Response | null {
  const denied = requireUser(locals);
  if (denied) return denied;
  if ((locals.profile as Record<string, unknown> | null)?.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }
  return null;
}

/** Parse a JSON body without throwing on malformed/empty input. */
export async function readJsonBody(request: Request): Promise<Record<string, any> | null> {
  const body = await request.json().catch(() => null);
  return body && typeof body === 'object' ? body : null;
}

export function isEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

export function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = parseInt(String(v), 10);
  if (Number.isNaN(n)) return fallback;
  return Math.max(min, Math.min(max, n));
}

import { normalizeBundledAssetUrl } from './bundled-asset-url';
import { createPublicClient } from './supabase';

interface MediaSlot {
  key: string;
  page: string;
  section: string;
  label: string;
  type: 'image' | 'video';
  url: string;
  defaultUrl: string;
  sort_order?: number;
}

const BUCKET = 'site-config';
const FILE = 'media-slots.json';

let cache: { at: number; slots: MediaSlot[] } | null = null;
const TTL_MS = 30_000; // 30s module-scope cache; short enough that edits surface fast in dev.

async function loadSlots(): Promise<MediaSlot[]> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.slots;

  const supabase = createPublicClient();
  if (!supabase) return [];

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  try {
    const res = await fetch(data.publicUrl + '?t=' + Date.now());
    if (!res.ok) return [];
    const slots: MediaSlot[] = await res.json();
    cache = { at: Date.now(), slots };
    return slots;
  } catch {
    return [];
  }
}

export async function getMediaSlot(key: string, fallback: string): Promise<string> {
  const slots = await loadSlots();
  const hit = slots.find((s) => s.key === key);
  return normalizeBundledAssetUrl(hit?.url || fallback);
}

export async function getAllMediaSlots(): Promise<MediaSlot[]> {
  return loadSlots();
}

export function invalidateMediaCache(): void {
  cache = null;
}

export type { MediaSlot };

/**
 * Rewrite a Supabase Storage URL to use the on-the-fly image transform endpoint.
 * Falls through unchanged for non-Supabase URLs and for URLs that already use
 * /render/image/.
 *
 * On Supabase Pro this serves a transformed image at the requested width/format;
 * on the free tier the endpoint still resolves but returns the original, so
 * either way it's safe (never regresses).
 *
 * @param url    Original Supabase Storage URL (or any other URL, passed through)
 * @param width  Target rendered width in CSS pixels
 * @param opts   Optional quality (1–100) and format ('origin' | 'webp')
 */
export function imgUrl(
  url: string | null | undefined,
  width: number,
  opts: { quality?: number; format?: 'origin' | 'webp' } = {}
): string {
  if (!url) return '';
  // Only rewrite Supabase /object/public/ URLs
  const m = url.match(/^(https?:\/\/[^/]+)\/storage\/v1\/object\/public\/(.+)$/);
  if (!m) return url;
  const [, origin, path] = m;
  const params = new URLSearchParams();
  params.set('width', String(width));
  if (opts.quality) params.set('quality', String(opts.quality));
  params.set('format', opts.format ?? 'origin');
  return `${origin}/storage/v1/render/image/public/${path}?${params.toString()}`;
}

/**
 * Build a srcset string at common breakpoints. Useful for tour cards / hero
 * images where the rendered size varies across viewports.
 */
export function imgSrcset(
  url: string | null | undefined,
  widths: number[] = [400, 800, 1200, 1600],
  opts: { quality?: number } = {}
): string {
  if (!url) return '';
  return widths
    .map((w) => `${imgUrl(url, w, { quality: opts.quality, format: 'origin' })} ${w}w`)
    .join(', ');
}

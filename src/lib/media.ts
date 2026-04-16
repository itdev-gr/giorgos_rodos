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
  return hit?.url || fallback;
}

export async function getAllMediaSlots(): Promise<MediaSlot[]> {
  return loadSlots();
}

export function invalidateMediaCache(): void {
  cache = null;
}

export type { MediaSlot };

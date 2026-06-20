/** Local optimized hero fallback (≈1.1MB). */
export const DEFAULT_HERO_MP4 = '/assets/img/heroes/hero-video.mp4';

/** Resolve webm/mp4 companion paths for hero background videos. */
export function heroVideoSources(url: string): { webm?: string; mp4: string } {
  if (!url) return { mp4: '' };

  const lower = url.toLowerCase();
  if (lower.endsWith('.webm')) {
    return { webm: url, mp4: url.replace(/\.webm$/i, '.mp4') };
  }
  if (lower.endsWith('.mp4')) {
    return { mp4: url };
  }
  if (lower.endsWith('.mov')) {
    const base = url.replace(/\.mov$/i, '');
    return { mp4: `${base}.mp4` };
  }
  return { mp4: url };
}

/** Pick a playable MP4 URL; fall back to bundled asset when CMS still points at webm. */
export function resolveHeroMp4(
  url: string,
  fallback: string = DEFAULT_HERO_MP4
): string {
  if (!url) return fallback;
  const lower = url.toLowerCase();
  if (lower.endsWith('.mp4')) return url;
  if (lower.endsWith('.webm')) {
    const derived = url.replace(/\.webm$/i, '.mp4');
    if (derived.startsWith('/assets/')) return derived;
    return fallback;
  }
  return url || fallback;
}

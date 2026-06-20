/** Local optimized hero fallback (≈1.1MB). */
export const DEFAULT_HERO_MP4 = '/assets/img/heroes/hero-video.mp4';

const LEGACY_HERO_PREFIX = '/assets/img/hero/';

/** Map bundled hero media paths to current public/ paths (post–asset reorganisation). */
export function normalizeBundledHeroVideoUrl(url: string): string {
  if (!url.startsWith('/assets/')) return url;

  let path = url;
  if (path.startsWith(LEGACY_HERO_PREFIX)) {
    path = path.replace(LEGACY_HERO_PREFIX, '/assets/img/heroes/');
  }

  if (path.toLowerCase().endsWith('.webm')) {
    path = path.replace(/\.webm$/i, '.mp4');
  }

  return path;
}

/** Resolve webm/mp4 companion paths for hero background videos. */
export function heroVideoSources(url: string): { webm?: string; mp4: string } {
  if (!url) return { mp4: '' };

  if (url.startsWith('http')) {
    const lower = url.toLowerCase();
    if (lower.endsWith('.webm')) {
      return { webm: url, mp4: url.replace(/\.webm$/i, '.mp4') };
    }
    if (lower.endsWith('.mp4')) {
      return { mp4: url };
    }
    if (lower.endsWith('.mov')) {
      return { mp4: url.replace(/\.mov$/i, '.mp4') };
    }
    return { mp4: url };
  }

  const mp4 = normalizeBundledHeroVideoUrl(url);
  if (mp4.toLowerCase().endsWith('.mp4')) {
    return { mp4 };
  }

  return { mp4: DEFAULT_HERO_MP4 };
}

/** Pick a playable MP4 URL; fall back to bundled asset when CMS still points at legacy paths. */
export function resolveHeroMp4(
  url: string,
  fallback: string = DEFAULT_HERO_MP4
): string {
  if (!url) return fallback;

  if (url.startsWith('http')) {
    const lower = url.toLowerCase();
    if (lower.endsWith('.mp4')) return url;
    if (lower.endsWith('.webm')) {
      return url.replace(/\.webm$/i, '.mp4');
    }
    if (lower.endsWith('.mov')) return fallback;
    return url;
  }

  const normalized = normalizeBundledHeroVideoUrl(url);
  if (normalized.toLowerCase().endsWith('.mp4')) {
    return normalized;
  }

  return fallback;
}

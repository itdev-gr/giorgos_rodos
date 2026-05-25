/** Resolve webm/mp4 companion paths for hero background videos. */
export function heroVideoSources(url: string): { webm?: string; mp4: string } {
  if (!url) return { mp4: '' };

  const lower = url.toLowerCase();
  if (lower.endsWith('.webm')) {
    return { webm: url, mp4: url.replace(/\.webm$/i, '.mp4') };
  }
  if (lower.endsWith('.mp4')) {
    return { mp4: url, webm: url.replace(/\.mp4$/i, '.webm') };
  }
  if (lower.endsWith('.mov')) {
    const base = url.replace(/\.mov$/i, '');
    return { mp4: `${base}.mp4`, webm: `${base}.webm` };
  }
  return { mp4: url };
}

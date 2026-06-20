/** Descriptive alt text for tour / boat listing cards. */
export function tourCardAlt(title: string, type?: string | null): string {
  const kind = (type || 'Boat experience').trim();
  return `${title}, ${kind} in Rhodes`;
}

/** Alt text for tour-detail gallery images (main + thumbnails). */
export function tourGalleryAlt(title: string, index = 0, total = 1): string {
  const base = `${title.trim()} — Rhodes boat tour`;
  if (total > 1) {
    return `${base} (${index + 1}/${total})`;
  }
  return base;
}

/** Descriptive alt text for blog hero and inline article images. */
export function blogImageAlt(title: string, tag?: string): string {
  const topic = tag?.trim() || 'Rhodes sea experiences';
  return `${title}, ${topic} in Rhodes, Greece`;
}

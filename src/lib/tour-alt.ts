/** Descriptive alt text for tour / boat listing cards. */
export function tourCardAlt(title: string, type?: string | null): string {
  const kind = (type || 'Boat experience').trim();
  return `${title} — ${kind} in Rhodes`;
}

/** Descriptive alt text for blog hero and inline article images. */
export function blogImageAlt(title: string, tag?: string): string {
  const topic = tag?.trim() || 'Rhodes sea experiences';
  return `${title} — ${topic} in Rhodes, Greece`;
}

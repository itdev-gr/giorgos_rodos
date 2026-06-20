const GENERIC_SUFFIX =
  /[\s.]*Fully equipped for comfortable cruising(?: through the Greek islands)?\.?\s*$/i;

const ENDINGS = [
  'Ideal for island-hopping around Symi, Halki and Tilos from Rhodes.',
  'Available for weekly bareboat or skippered charter in the Dodecanese.',
  'A popular choice for families and groups exploring the Greek islands by sail.',
  'Well suited to multi-day routes along the Rhodes and Dodecanese coastline.',
  'Ready for your sailing holiday, flexible embarkation from Rhodes or nearby bases.',
  'Spacious layout and modern equipment for comfortable Aegean cruising.',
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Strip boilerplate and return a unique card description for charter yachts. */
export function charterCardDescription(tour: {
  title: string;
  description?: string | null;
  badge_label?: string | null;
  guests?: string | null;
}): string {
  const raw = (tour.description || '').trim();
  const stripped = raw.replace(GENERIC_SUFFIX, '').trim().replace(/\.$/, '');

  if (stripped.length >= 60 && !GENERIC_SUFFIX.test(raw)) {
    return stripped.endsWith('.') ? stripped : `${stripped}.`;
  }

  if (stripped.length >= 40) {
    const ending = ENDINGS[hashCode(tour.title) % ENDINGS.length];
    return `${stripped}. ${ending}`;
  }

  const yachtName = tour.title.split('-')[0]?.trim() || tour.title;
  const type = (tour.badge_label || 'Yacht').toLowerCase();
  const yearMatch = raw.match(/\ba (\d{4}) /);
  const lengthMatch = raw.match(/(\d+\.?\d*)m length/);
  const guestPart = tour.guests?.split('·')[0]?.trim();

  const parts: string[] = [];
  if (yearMatch && lengthMatch) {
    parts.push(
      `${yachtName}, ${yearMatch[1]} ${type}, ${lengthMatch[1]}m${guestPart ? `, ${guestPart.toLowerCase()}` : ''}.`
    );
  } else {
    parts.push(`${yachtName}: ${type} charter in the Dodecanese.`);
  }

  parts.push(ENDINGS[hashCode(tour.title + yachtName) % ENDINGS.length]);
  return parts.join(' ');
}

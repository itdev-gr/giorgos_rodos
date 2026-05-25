import type { SitemapEntry } from './sitemap-entries';

export function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function urlBlock(entry: SitemapEntry, primaryImageOnly = false): string {
  const parts = [`    <loc>${escapeXml(entry.loc)}</loc>`];
  if (entry.lastmod) parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  const images = primaryImageOnly ? entry.images.slice(0, 1) : entry.images;
  for (const image of images) {
    parts.push('    <image:image>');
    parts.push(`      <image:loc>${escapeXml(image.loc)}</image:loc>`);
    if (image.title) parts.push(`      <image:title>${escapeXml(image.title)}</image:title>`);
    if (image.caption) parts.push(`      <image:caption>${escapeXml(image.caption)}</image:caption>`);
    parts.push('    </image:image>');
  }
  return `  <url>\n${parts.join('\n')}\n  </url>`;
}

export function buildUrlsetXml(entries: SitemapEntry[], primaryImageOnly = false): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => urlBlock(e, primaryImageOnly)).join('\n')}
</urlset>`;
}

import type { Locale } from './locales';
import { localizedPath } from './routing';

/** Rewrite internal href="/path" in HTML strings to locale-prefixed URLs. */
export function localizeHtmlLinks(html: string, locale: Locale): string {
  return html.replace(/href="(\/[^"#?]*)([^"]*)"/g, (_match, path: string, rest: string) => {
    if (path.startsWith('/api') || path.startsWith('/dashboard')) {
      return `href="${path}${rest}"`;
    }
    return `href="${localizedPath(path, locale)}${rest}"`;
  });
}

import { DEFAULT_LOCALE, type Locale } from './locales';
import { parseLocaleFromPathname, isLocalizableRoute, normalizePathname } from './routing';

/** Resolve locale from Astro.locals (set by middleware) with fallback. */
export function resolveLocale(locals: App.Locals | undefined, urlPathname?: string): Locale {
  if (locals?.locale) return locals.locale;
  if (urlPathname) return parseLocaleFromPathname(urlPathname).locale;
  return DEFAULT_LOCALE;
}

/** Canonical browser pathname for SEO (includes locale prefix when not English). */
export function publicPathname(urlPathname: string): string {
  return normalizePathname(urlPathname);
}

/** Logical page path without locale prefix — for hreflang alternates. */
export function logicalPath(urlPathname: string): string {
  return parseLocaleFromPathname(urlPathname).pathname;
}

export function isPageLocalizable(urlPathname: string): boolean {
  return isLocalizableRoute(logicalPath(urlPathname));
}

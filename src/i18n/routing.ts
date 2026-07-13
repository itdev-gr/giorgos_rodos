import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales';

const LOCALE_PREFIX_RE = /^\/([a-z]{2})(?=\/|$)/;

/** Paths that must never receive a locale prefix (admin, auth, dynamic catalog). */
const EXCLUDED_PREFIXES = [
  '/dashboard',
  '/api',
  '/login',
  '/blog',
  '/tour-detail',
  '/404',
  '/sitemap.xml',
  '/robots.txt',
];

/** Static marketing routes we ship translated versions for (hreflang mesh). */
export const LOCALIZED_ROUTE_PREFIXES = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
  '/service',
  '/things-to-do',
] as const;

export interface ParsedPath {
  locale: Locale;
  /** Path without locale prefix, always starts with `/`. Home is `/`. */
  pathname: string;
}

export function normalizePathname(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0];
  if (!clean || clean === '/') return '/';
  return clean.replace(/\/$/, '') || '/';
}

export function parseLocaleFromPathname(pathname: string): ParsedPath {
  const normalized = normalizePathname(pathname);
  const match = normalized.match(LOCALE_PREFIX_RE);
  const maybeLocale = match?.[1];

  if (maybeLocale && (LOCALES as readonly string[]).includes(maybeLocale)) {
    const locale = maybeLocale as Locale;
    const rest = normalized.slice(maybeLocale.length + 1) || '/';
    return { locale, pathname: rest === '' ? '/' : rest };
  }

  return { locale: DEFAULT_LOCALE, pathname: normalized };
}

export function isExcludedFromLocalization(pathname: string): boolean {
  if (pathname === '/') return false;
  return EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function isLocalizableRoute(pathname: string): boolean {
  if (isExcludedFromLocalization(pathname)) return false;
  if (pathname === '/') return true;
  return LOCALIZED_ROUTE_PREFIXES.some(
    (prefix) => prefix !== '/' && (pathname === prefix || pathname.startsWith(`${prefix}/`)),
  );
}

/** Build a locale-aware internal path. English stays unprefixed. */
export function localizedPath(pathname: string, locale: Locale): string {
  const normalized = normalizePathname(pathname);
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === '/') return `/${locale}`;
  return `/${locale}${normalized}`;
}

/** All hreflang alternates for a localizable path (includes x-default → English). */
export function getHreflangAlternates(pathname: string): { hreflang: string; href: string }[] {
  const normalized = normalizePathname(pathname);
  if (!isLocalizableRoute(normalized)) {
    return [{ hreflang: 'en', href: absoluteUrl(normalized) }];
  }

  const alternates: { hreflang: string; href: string }[] = LOCALES.map((locale) => ({
    hreflang: locale,
    href: absoluteUrl(localizedPath(normalized, locale)),
  }));

  alternates.push({
    hreflang: 'x-default',
    href: absoluteUrl(normalized),
  });

  return alternates;
}

export function absoluteUrl(pathname: string, siteUrl = 'https://rhodesrentaboat.com'): string {
  const normalized = normalizePathname(pathname);
  return `${siteUrl}${normalized === '/' ? '' : normalized}`;
}

/** Strip locale prefix from a full browser pathname for canonical matching. */
export function stripLocalePrefix(pathname: string): { locale: Locale; path: string } {
  const { locale, pathname: stripped } = parseLocaleFromPathname(pathname);
  return { locale, path: stripped };
}

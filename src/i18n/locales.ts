export const DEFAULT_LOCALE = 'en' as const;

/** BCP 47 / hreflang codes supported on the public site. */
export const LOCALES = [
  'en',
  'de',
  'it',
  'fr',
  'ru',
  'he',
  'nl',
  'pl',
  'uk',
] as const;

export type Locale = (typeof LOCALES)[number];

export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  it: 'IT',
  fr: 'FR',
  ru: 'RU',
  he: 'HE',
  nl: 'NL',
  pl: 'PL',
  uk: 'UK',
};

/** Open Graph locale tags (language_TERRITORY). */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  it: 'it_IT',
  fr: 'fr_FR',
  ru: 'ru_RU',
  he: 'he_IL',
  nl: 'nl_NL',
  pl: 'pl_PL',
  uk: 'uk_UA',
};

/** Schema.org inLanguage values. */
export const SCHEMA_LANGUAGE: Record<Locale, string> = {
  en: 'en-US',
  de: 'de-DE',
  it: 'it-IT',
  fr: 'fr-FR',
  ru: 'ru-RU',
  he: 'he-IL',
  nl: 'nl-NL',
  pl: 'pl-PL',
  uk: 'uk-UA',
};

export const RTL_LOCALES: readonly Locale[] = ['he'];

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRtlLocale(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

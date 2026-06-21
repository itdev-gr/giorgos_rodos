import { DEFAULT_LOCALE, type Locale } from '../locales';
import { de } from './de';
import { en, type LegalPageContent } from './en';
import { fr } from './fr';
import { he } from './he';
import { it } from './it';
import { nl } from './nl';
import { pl } from './pl';
import { ru } from './ru';

const LEGAL_CONTENT_CATALOG: Record<Locale, LegalPageContent> = {
  en,
  de,
  it,
  fr,
  ru,
  he,
  nl,
  pl,
};

export function getLegalContent(locale: Locale | string | undefined): LegalPageContent {
  const key = locale && locale in LEGAL_CONTENT_CATALOG ? (locale as Locale) : DEFAULT_LOCALE;
  return LEGAL_CONTENT_CATALOG[key];
}

export type { LegalPageContent, LegalDocumentContent, LegalSection } from './en';

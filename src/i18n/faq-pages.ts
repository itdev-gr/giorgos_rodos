import type { Locale } from './locales';
import { getFaqSection, getMainFaq, getCruisesFaq, getThingsToDoFaq, getHomeFaq } from './faq';

export { getMainFaq, getCruisesFaq, getThingsToDoFaq, getHomeFaq };

export function getBoatTripsFaq(locale: Locale | string | undefined) {
  return getFaqSection('boatTrips', locale);
}

export function getBoatToursFaq(locale: Locale | string | undefined) {
  return getFaqSection('boatTours', locale);
}

export function getCharterFaq(locale: Locale | string | undefined) {
  return getFaqSection('charter', locale);
}

export function getRentABoatFaq(locale: Locale | string | undefined) {
  return getFaqSection('rentABoat', locale);
}

export function getCatamaranFaq(locale: Locale | string | undefined) {
  return getFaqSection('catamaran', locale);
}

export function getSailingFaq(locale: Locale | string | undefined) {
  return getFaqSection('sailing', locale);
}

export function getServiceHubFaq(locale: Locale | string | undefined) {
  return getFaqSection('serviceHub', locale);
}

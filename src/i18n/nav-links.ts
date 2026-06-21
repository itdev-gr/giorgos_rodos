import type { Locale } from './locales';
import { localizedPath } from './routing';
import type { NavMessages } from './messages/types';

const RHODES_TRANSFERS_URL = 'https://www.rhodestransfer24.com/';
const RHODES_SIDECAR_URL = 'https://rhodessidecartours.com/';
const RHODES_RENTACAR_URL = 'https://siech-rentacar.com/';

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export function buildNavItems(nav: NavMessages, locale: Locale): NavItem[] {
  const p = (path: string) => localizedPath(path, locale);

  return [
    { label: nav.home, href: p('/') },
    { label: nav.about, href: p('/about') },
    {
      label: nav.service,
      href: p('/service'),
      children: [
        { label: nav.services.boatTours, href: p('/service/rhodes-boat-tours') },
        { label: nav.services.boatTrips, href: p('/service/rhodes-boat-trips') },
        { label: nav.services.boatCruises, href: p('/service/rhodes-boat-cruises') },
        { label: nav.services.catamaranTours, href: p('/service/rhodes-catamaran-tours') },
        { label: nav.services.sailingTrips, href: p('/service/rhodes-sailing-trips') },
        { label: nav.services.yachtCharter, href: p('/service/rhodes-charter') },
        { label: nav.services.miceEvents, href: p('/service/rhodes-mice-events') },
        { label: nav.services.tenderBoat, href: p('/service/rhodes-tender-boat') },
        { label: nav.services.transfers, href: RHODES_TRANSFERS_URL, external: true },
        { label: nav.services.sidecarTours, href: RHODES_SIDECAR_URL, external: true },
        { label: nav.services.rentACar, href: RHODES_RENTACAR_URL, external: true },
      ],
    },
    { label: nav.experiences, href: p('/things-to-do') },
    { label: nav.blog, href: '/blog' },
    { label: nav.faq, href: p('/faq') },
    { label: nav.contact, href: p('/contact') },
  ];
}

export function buildFooterLinks(nav: NavMessages, footer: import('./messages/types').FooterMessages, locale: Locale) {
  const p = (path: string) => localizedPath(path, locale);

  return {
    company: [
      { label: footer.aboutUs, href: p('/about') },
      { label: footer.bestBoatTours, href: p('/things-to-do') },
      { label: footer.contact, href: p('/contact') },
    ],
    services: [
      { label: footer.yachtCharter, href: p('/service/rhodes-charter') },
      { label: footer.boatTours, href: p('/service/rhodes-boat-tours') },
      { label: footer.boatCruises, href: p('/service/rhodes-boat-cruises') },
      { label: footer.catamaranTours, href: p('/service/rhodes-catamaran-tours') },
      { label: footer.sailingTrips, href: p('/service/rhodes-sailing-trips') },
      { label: footer.boatTrips, href: p('/service/rhodes-boat-trips') },
      { label: footer.rentABoat, href: p('/service/rhodes-rent-a-boat') },
      { label: footer.transfers, href: RHODES_TRANSFERS_URL, external: true },
      { label: footer.sidecarTours, href: RHODES_SIDECAR_URL, external: true },
    ],
    legal: [
      { label: footer.privacy, href: p('/privacy') },
      { label: footer.terms, href: p('/terms') },
    ],
    homeHref: p('/'),
    contactHref: p('/contact'),
  };
}

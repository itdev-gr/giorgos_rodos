export interface PageMeta {
  title: string;
  description: string;
}

export interface ServiceMeta extends PageMeta {
  name: string;
  heroSubtitle: string;
  schemaDescription: string;
  serviceType: string;
}

export interface NavMessages {
  home: string;
  about: string;
  service: string;
  experiences: string;
  blog: string;
  faq: string;
  contact: string;
  bookNow: string;
  openMenu: string;
  language: string;
  services: {
    boatTours: string;
    boatTrips: string;
    boatCruises: string;
    catamaranTours: string;
    sailingTrips: string;
    yachtCharter: string;
    miceEvents: string;
    tenderBoat: string;
    rentABoat: string;
    transfers: string;
    sidecarTours: string;
    rentACar: string;
  };
}

export interface FooterMessages {
  tagline: string;
  company: string;
  services: string;
  getInTouch: string;
  aboutUs: string;
  bestBoatTours: string;
  contact: string;
  yachtCharter: string;
  boatTours: string;
  boatCruises: string;
  catamaranTours: string;
  sailingTrips: string;
  boatTrips: string;
  rentABoat: string;
  transfers: string;
  sidecarTours: string;
  copyright: string;
  developedBy: string;
  privacy: string;
  terms: string;
}

export interface SiteMessages {
  brand: string;
  nav: NavMessages;
  footer: FooterMessages;
  breadcrumbs: {
    home: string;
    services: string;
    contact: string;
    faq: string;
    about: string;
    blog: string;
    experiences: string;
  };
  meta: {
    home: PageMeta;
    about: PageMeta;
    contact: PageMeta;
    faq: PageMeta;
    privacy: PageMeta;
    terms: PageMeta;
    serviceHub: PageMeta & { h1: string };
    thingsToDo: PageMeta;
    notFound: PageMeta;
  };
  notFound: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    text: string;
    cta: string;
  };
  home: {
    hero: {
      h1: string;
      lead: string;
      cta: string;
    };
  };
  contact: {
    h1: string;
    lead: string;
  };
  faq: {
    h1: string;
  };
  services: Record<string, ServiceMeta>;
  schema: {
    organizationDescription: string;
    websiteDescription: string;
    offerCatalogName: string;
  };
}

export type ServiceSlug =
  | 'rhodes-boat-tours'
  | 'rhodes-boat-cruises'
  | 'rhodes-catamaran-tours'
  | 'rhodes-sailing-trips'
  | 'rhodes-boat-trips'
  | 'rhodes-rent-a-boat'
  | 'rhodes-charter'
  | 'rhodes-mice-events'
  | 'rhodes-tender-boat';

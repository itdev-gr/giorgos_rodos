import faqData from '../data/faq.json';

export type FaqItem = { question: string; answer: string };

export const mainFaq = faqData.main as FaqItem[];
export const homeFaq = faqData.home as FaqItem[];
export const charterFaq = faqData.charter as FaqItem[];
export const rentABoatFaq = faqData.rentABoat as FaqItem[];
export const boatToursFaq = faqData.boatTours as FaqItem[];
export const boatTripsFaq = faqData.boatTrips as FaqItem[];
export const catamaranFaq = faqData.catamaran as FaqItem[];
export const sailingFaq = faqData.sailing as FaqItem[];
export const cruisesFaq = faqData.cruises as FaqItem[];
export const thingsToDoFaq = faqData.thingsToDo as FaqItem[];
export const serviceHubFaq = faqData.serviceHub as FaqItem[];

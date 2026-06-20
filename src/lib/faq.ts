import faqData from '../data/faq.json';

export type FaqItem = { question: string; answer: string };

/** PAA / head-term FAQs for featured snippets and AI Overviews. */
export const headTermFaq = faqData.headTerms as FaqItem[];

export const mainFaq = [...headTermFaq, ...(faqData.main as FaqItem[])];
export const rentABoatFaq = faqData.rentABoat as FaqItem[];
export const charterFaq = faqData.charter as FaqItem[];
export const boatToursFaq = faqData.boatTours as FaqItem[];
export const boatTripsFaq = faqData.boatTrips as FaqItem[];
export const catamaranFaq = faqData.catamaran as FaqItem[];
export const sailingFaq = faqData.sailing as FaqItem[];
/** Symi one-day question leads for cruise intent. */
export const cruisesFaq = [
  headTermFaq[2],
  ...(faqData.cruises as FaqItem[]).filter((item) => item.question !== headTermFaq[2].question),
] as FaqItem[];
export const thingsToDoFaq = [
  headTermFaq[1],
  ...(faqData.thingsToDo as FaqItem[]).filter((item) => item.question !== headTermFaq[1].question),
] as FaqItem[];
export const serviceHubFaq = faqData.serviceHub as FaqItem[];

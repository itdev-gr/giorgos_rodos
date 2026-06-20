/**
 * Generates src/data/faq.json with 134+ word answers for AI citability.
 * Run: node scripts/build-faq-data.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sections from './faq-sections.mjs';

function wordCount(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
}

const faq = {
  main: [
    {
      question: 'Do I need a boat licence to rent a boat in Rhodes?',
      answer:
        'Not necessarily, and this surprises many first-time visitors to Rhodes. Greek maritime law allows anyone aged 18 or over to operate a pleasure craft up to 30 horsepower without holding a formal boating licence, provided they carry valid identification. Most licence-free rentals on the island are fibreglass motorboats of 4–5 metres with 20–30 HP outboards, designed for sheltered coastal cruising along the east coast between Mandraki Harbour and bays such as Anthony Quinn, Ladiko and Kalithea. We offer <a href="/service/rhodes-rent-a-boat">license-free boats</a> that anyone can drive after a short safety briefing, no prior experience is required. Before departure you learn engine operation, steering, anchoring basics, and the boundaries of your permitted sailing area on a marine chart. GPS tracking on most rental boats means our team can see where you are and assist if you have questions during the day. If you want a larger vessel, plan a longer route toward Lindos or Symi, or prefer to relax while someone else handles navigation, we also arrange boats with a professional skipper included. The skipper reads the weather, knows the bays, and chooses calm swim stops, ideal for families or anyone unsure about sea conditions. Tell us your group size and comfort level and we will recommend the right option honestly.',
    },
    {
      question: 'What is included in the price of a boat tour or cruise?',
      answer:
        'That depends on the type of experience you book, and we always send a written breakdown before you confirm so there are no surprises at the dock. Our shared <a href="/service/rhodes-boat-tours">all-inclusive day cruises</a> typically cover the boat, fuel, a professional crew, a buffet lunch (Mediterranean dishes, grilled chicken, Greek salad, pasta, bread), unlimited soft drinks plus wine and beer, snorkelling masks, and three or four swimming stops along the east coast or on routes toward Symi. Music, sun-deck cushions and shaded seating are standard on larger cruise vessels. Semi-private guided boat tours on smaller vessels include the boat, fuel, skipper, safety equipment, soft drinks and snacks; lunch may be onboard or at a beach taverna depending on the tour. For <a href="/service/rhodes-charter">yacht charters</a>, weekly rates usually include the yacht, standard insurance, and basic equipment, skipper, provisioning, marina fees and fuel may be quoted separately depending on bareboat or skippered arrangement. Speedboat and private trips include fuel for the agreed route, life jackets, first-aid kit, and the skipper\'s local knowledge. Extras such as hotel transfers, premium catering, or extended hours are always quoted upfront. We believe in transparent pricing: you know exactly what is covered before you pay a deposit, and we never add hidden fees when you arrive at the harbour.',
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'Timing depends on the season, the type of experience, and how flexible your dates are. During peak season from mid-June through August, we recommend booking at least one to two weeks in advance, especially for <a href="/service/rhodes-charter">private yacht charters</a>, weekend speedboat tours, and popular shared Symi day cruises that fill quickly. Luxury yachts and catamaran private charters during July and August often need two to three weeks notice because repeat guests and agents reserve the best boats early. For spring (May) and autumn (September–October), a few days notice is usually enough for day tours and license-free rentals, though weekends still book faster than weekdays. Weekly bareboat charters in high season should ideally be reserved one to three months ahead, the best yachts in each size class disappear quickly. That said, it never hurts to <a href="/contact">reach out early</a> even if you are only exploring ideas. We hold no obligation to book immediately; a quick WhatsApp or email lets us check availability, suggest alternatives, and sometimes hold a provisional date while you finalise flights. Last-minute requests are possible in shoulder season if weather and fleet schedules allow, but we cannot guarantee availability for specific boats in peak weeks without advance notice.',
    },
    {
      question: 'What happens if the weather is bad on the day of my trip?',
      answer:
        'Safety always comes first, no booking is worth putting guests or crew at risk in unsuitable sea conditions. Our skippers and rental operators monitor weather forecasts daily, including wind speed, direction, and swell along the east coast and on open crossings toward Symi or Halki. If conditions exceed safe limits for your specific boat type and route, we contact you as early as possible, usually by 07:00–08:00 on the day, to reschedule for another suitable day during your stay at no extra cost. Light wind on the east coast is normal and rarely cancels coastal trips; strong Meltemi north winds in July and August may affect open-sea crossings while sheltered bay routes remain possible. For license-free rentals, operators may restrict the permitted area or postpone entirely if chop makes small open boats unsafe. If rescheduling is not possible before you leave Rhodes, for example, if bad weather persists for several days, we offer a full refund of any deposit paid for the affected booking. We never pressure guests to go out in marginal conditions to avoid a refund. <a href="/contact">Get in touch</a> if you have specific concerns about your dates; we can advise on typical wind patterns for your week and suggest the most weather-resilient experience type for your group.',
    },
    {
      question: 'Can I bring children on board?',
      answer:
        'Absolutely, many of our most memorable days at sea involve families with children from toddlers to teenagers. We carry child-size life jackets on all boats and require every guest to wear one while underway according to Greek maritime regulations. Our skippers are experienced with families and adjust the pace accordingly: calmer bays with shallow water for young swimmers, shorter legs between stops for tired kids, and flexible lunch timing. Shared <a href="/service/rhodes-boat-tours">group day cruises</a> and catamaran tours work especially well for families because the stable twin-hull design reduces motion, there is plenty of shaded deck space, and lunch is included onboard so you do not need to manage meals ashore. For infants and toddlers, we recommend a catamaran or a private trip where you control timing and can return early if needed. License-free motorboats suit families with older children who want to swim from the boat in sheltered coves, parents should be comfortable supervising in the water. Just let us know the ages of your children when you book so we can recommend the best vessel and route. We will never suggest an open-sea crossing to Symi on a day when conditions are rough if young children are in the group unless you explicitly accept the longer, bumpier ride.',
    },
    {
      question: 'What is the difference between a boat tour, a cruise, and a charter?',
      answer:
        'These terms are often used interchangeably online, but they describe very different experiences on the water around Rhodes. A <a href="/service/rhodes-boat-tours">boat tour</a> is typically a guided day trip on a smaller vessel with a professional skipper, either private (your group only) or semi-private (up to about 12 guests). The route focuses on swimming, snorkelling and sightseeing along the coast, usually lasting three to eight hours. A day <strong>cruise</strong> is a larger shared experience aboard a bigger boat carrying 20–99 guests, with a fixed schedule, all-inclusive food and drinks, and a social atmosphere, best value per person and ideal for first-time visitors who want everything organised. A <a href="/service/rhodes-charter">charter</a> means hiring an entire yacht for multiple days, bareboat if you hold a recognised sailing licence and skipper the vessel yourself, or skippered if a professional captain runs the boat while you relax. Charters let you island-hop through the Dodecanese at your own pace, sleeping onboard and setting your own itinerary. Price structure differs too: tours and cruises are priced per person or per boat for a day; charters are weekly rates plus optional skipper and provisioning. If you are not sure which fits your holiday, <a href="/contact">just ask us</a>, describe your group, dates and what you want from the day and we will explain the options without pushing the most expensive choice.',
    },
    {
      question: 'Do your skippers speak English?',
      answer:
        'Yes, all of our skippers and crew members speak fluent English, and communication is never a problem on any experience we arrange. Rhodes has been a major tourism destination for decades, and professional boat operators invest in crew who can explain safety procedures, discuss routes, and share local knowledge clearly with international guests. Many skippers also speak Greek naturally, and several speak German, Italian or French, useful for mixed groups or guests more comfortable in those languages. Beyond language, what matters is approachability: our skippers are used to first-time boat guests, nervous swimmers, and families with children. They explain what to expect at each stop, how to use snorkelling equipment safely, and where to stand when boarding. On private trips they act as local guides as much as drivers, recommending tavernas, pointing out landmarks, and adjusting the route when you find a bay you love. On shared cruises the crew manages the group flow so everyone knows when to swim, when lunch is served, and when to return to the harbour. If you have a specific language preference, mention it when you enquire and we will match you with the best available crew where possible.',
    },
    {
      question: 'What should I bring on a boat trip?',
      answer:
        'Packing light and sensibly makes the day more comfortable for everyone onboard. We recommend high-SPF sunscreen applied before boarding and reapplied after swimming, a wide-brim hat, UV-protective sunglasses, and a quick-dry towel. Wear comfortable clothes that can get wet, swimwear under shorts or a cover-up works well, and bring a light windbreaker or long-sleeve layer because it feels cooler on the water than on the beach, especially on return journeys after sunset. Soft-soled shoes or sandals with grip are ideal; avoid hard black soles on sailing yachts as they mark the deck. Snorkelling gear is provided on most of our <a href="/things-to-do">tours and cruises</a>, but bring your own mask if you need a specific fit. A waterproof pouch for your phone and cash is useful for beach taverna stops. If you wear prescription glasses, consider a lanyard. For full-day cruises with lunch onboard, you do not need to bring food unless you have specific dietary requirements, tell us in advance and we will pass the information to the operator. Seasickness medication taken an hour before departure helps susceptible guests on longer crossings. Leave bulky suitcases and hard luggage at the hotel; they have no place on a day boat.',
    },
    {
      question: 'Can I book a private experience for a special occasion?',
      answer:
        'Of course, some of our most rewarding bookings are celebrations where the sea provides the setting. We regularly arrange <a href="/service/rhodes-charter">private charters</a> and skippered boat trips for birthdays, proposals, anniversaries, honeymoons, and milestone family gatherings, as well as <a href="/service/rhodes-mice-events">corporate events</a> and team-building days for companies visiting Rhodes. Tell us what you are celebrating, how many guests will join, and what atmosphere you want, relaxed swimming day, sunset champagne, live music on a catamaran, or a week-long sailing honeymoon through the Dodecanese. We coordinate with skippers and charter companies to add extras: chilled prosecco on ice, a decorated cake, a photographer, a private chef on board, or a beach barbecue at a bay accessible only by boat. Proposals at sunset with the medieval walls of Rhodes Town as backdrop are a favourite request, we time the route so you arrive at the right bay at the right moment. For corporate groups we can arrange multiple boats, branded materials, and structured activities. Nothing is off-the-shelf unless you want it to be; we treat each special occasion as a small project and confirm every detail in writing before the day.',
    },
    {
      question: 'How do I get in touch with you?',
      answer:
        'You can reach us by phone at +30 695 166 6454, by email at info@rhodesrentaboat.com, by WhatsApp, or through the <a href="/contact">contact form</a> on our website. We respond to every message personally, usually within a few hours during the season, and always within one business day. When you contact us, you are speaking with real people who live and work in Rhodes and know the sea firsthand, not a call centre or automated booking engine. We would rather have a good conversation than push a quick sale: tell us your travel dates, group size, whether you have children or non-swimmers, and what kind of day you imagine. We will suggest one or two options that genuinely fit, explain what is included, and send a clear written quote with no obligation to book. You can ask the same question twice, change your mind, or enquire months before your trip, we are happy to help at whatever stage you are at. Our office is on Ionos Dragoumi 39 in Rhodes Town, a short walk from Mandraki Harbour where most boats depart. Visit us in person during the season if you prefer face-to-face planning. Do not hesitate to reach out even if you are just thinking about it.',
    },
  ],
  ...sections,
};

const minWords = 134;
const failures = [];
for (const [section, items] of Object.entries(faq)) {
  for (const item of items) {
    const words = wordCount(item.answer);
    if (words < minWords) failures.push({ section, question: item.question, words });
  }
}
if (failures.length) {
  console.error('FAQ answers below 134 words:');
  for (const f of failures) console.error(`  [${f.section}] ${f.words}w, ${f.question}`);
  process.exit(1);
}

writeFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '../src/data/faq.json'),
  JSON.stringify(faq, null, 2) + '\n',
);
const total = Object.values(faq).reduce((n, items) => n + items.length, 0);
console.log('Wrote src/data/faq.json with', total, 'FAQ items across', Object.keys(faq).length, 'sections');

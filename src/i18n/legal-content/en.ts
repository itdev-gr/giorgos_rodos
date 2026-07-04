export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  trailingParagraphs?: string[];
}

export interface LegalDocumentContent {
  h1: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalPageContent {
  privacy: LegalDocumentContent;
  terms: LegalDocumentContent;
}

export const en: LegalPageContent = {
  privacy: {
    h1: 'Privacy Policy',
    lastUpdated: 'Last updated: 1 May 2026',
    sections: [
      {
        heading: '1. Data Controller',
        paragraphs: [
          'The data controller responsible for your personal data is:',
          '<strong>Rhodes Rent a Boat</strong><br />Ionos Dragoumi 39, Rhodes 85100, Greece<br />Email: <a href="mailto:rhodessailingtours2023@gmail.com">rhodessailingtours2023@gmail.com</a><br />Phone: +30 695 166 6454',
        ],
      },
      {
        heading: '2. What Data We Collect',
        paragraphs: ['We collect the following personal data when you contact us or use our website:'],
        list: [
          '<strong>Contact information:</strong> name, email address, phone number',
          '<strong>Enquiry details:</strong> dates, group size, service preferences',
          '<strong>Technical data:</strong> IP address, browser type, pages visited, time on site (collected via analytics tools)',
          '<strong>Communications:</strong> emails, WhatsApp messages and other correspondence you send us',
        ],
      },
      {
        heading: '3. How We Use Your Data',
        paragraphs: ['We use your personal data for the following purposes:'],
        list: [
          'To respond to your enquiries and provide the service you have requested',
          'To process bookings and send booking confirmations',
          'To send relevant follow-up information about your booking',
          'To improve our website and services based on aggregate usage data',
          'To comply with legal obligations',
        ],
      },
      {
        heading: '4. Legal Basis for Processing',
        paragraphs: ['We process your personal data on the following legal bases under GDPR Article 6:'],
        list: [
          '<strong>Contract performance (Art. 6(1)(b)):</strong> Processing necessary to fulfil your booking or enquiry',
          '<strong>Legitimate interest (Art. 6(1)(f)):</strong> Improving our services and responding to enquiries',
          '<strong>Legal obligation (Art. 6(1)(c)):</strong> Complying with applicable Greek and EU law',
          '<strong>Consent (Art. 6(1)(a)):</strong> Where you have explicitly consented, e.g. for marketing communications',
        ],
      },
      {
        heading: '5. Cookies',
        paragraphs: ['Our website uses the following types of cookies:'],
        list: [
          '<strong>Strictly necessary cookies:</strong> Required for the website to function. These cannot be disabled.',
          '<strong>Analytics cookies:</strong> We use Google Analytics / Google Tag Manager to understand how visitors use our site. This data is anonymised and aggregated. You can opt out via your browser settings or the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out browser add-on</a>.',
        ],
        trailingParagraphs: [
          'You can control cookie preferences through your browser settings. Disabling analytics cookies will not affect your ability to use the site.',
        ],
      },
      {
        heading: '6. Data Sharing',
        paragraphs: ['We do not sell your personal data. We may share data with:'],
        list: [
          '<strong>Service providers:</strong> Third parties who provide IT infrastructure and analytics services (e.g. Supabase, Vercel, Google Analytics), all bound by data processing agreements',
          '<strong>Boat operators and skippers:</strong> To the extent necessary to fulfil your booking',
          '<strong>Legal authorities:</strong> Where required by applicable law',
        ],
      },
      {
        heading: '7. Data Retention',
        paragraphs: ['We retain your personal data for as long as necessary to fulfil the purposes set out in this policy:'],
        list: [
          'Enquiry data: 2 years from last contact',
          'Booking data: 5 years (required for accounting and legal purposes)',
          'Analytics data: 26 months (standard Google Analytics retention)',
        ],
      },
      {
        heading: '8. Your Rights Under GDPR',
        paragraphs: ['You have the following rights regarding your personal data:'],
        list: [
          '<strong>Right of access:</strong> Request a copy of the personal data we hold about you',
          '<strong>Right to rectification:</strong> Request correction of inaccurate data',
          '<strong>Right to erasure:</strong> Request deletion of your data ("right to be forgotten")',
          '<strong>Right to data portability:</strong> Receive your data in a machine-readable format',
          '<strong>Right to restrict processing:</strong> Request that we limit how we use your data',
          '<strong>Right to object:</strong> Object to processing based on legitimate interest',
          '<strong>Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time',
        ],
        trailingParagraphs: [
          'To exercise any of these rights, contact us at <a href="mailto:rhodessailingtours2023@gmail.com">rhodessailingtours2023@gmail.com</a>. We will respond within 30 days.',
          'If you believe we have not handled your data correctly, you have the right to lodge a complaint with the <strong>Hellenic Data Protection Authority (HDPA)</strong> at <a href="https://www.dpa.gr" target="_blank" rel="noopener">www.dpa.gr</a>.',
        ],
      },
      {
        heading: '9. Data Security',
        paragraphs: [
          'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. Our website is served over HTTPS and data is stored on secure, encrypted infrastructure.',
        ],
      },
      {
        heading: '10. International Transfers',
        paragraphs: [
          'Some of our service providers (e.g. Supabase, Vercel) may process data outside the European Economic Area. Where this occurs, we ensure that adequate safeguards are in place (e.g. Standard Contractual Clauses or adequacy decisions) as required by GDPR Chapter V.',
        ],
      },
      {
        heading: '11. Changes to This Policy',
        paragraphs: [
          'We may update this privacy policy from time to time. The date at the top of this page shows when it was last revised. Continued use of the website after changes constitutes acceptance of the updated policy.',
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: [
          'For any questions about this privacy policy or our data practices, contact us at:',
          'Email: <a href="mailto:rhodessailingtours2023@gmail.com">rhodessailingtours2023@gmail.com</a><br />Phone: +30 695 166 6454<br />Address: Ionos Dragoumi 39, Rhodes 85100, Greece',
        ],
      },
    ],
  },
  terms: {
    h1: 'Terms & Conditions',
    lastUpdated: 'Last updated: 1 May 2026',
    sections: [
      {
        heading: '1. Parties',
        paragraphs: [
          'These terms and conditions govern the relationship between <strong>Rhodes Rent a Boat</strong> (the "Company", "we", "us"), operating from Ionos Dragoumi 39, Rhodes 85100, Greece, and any person who enquires about or books services through our website rhodesrentaboat.com or directly with our team (the "Client", "you").',
        ],
      },
      {
        heading: '2. Services',
        paragraphs: [
          'We provide boat tour consultancy, booking facilitation, licence-free boat rentals, guided boat trips, sailing trips, catamaran tours, yacht charter arrangements, and ancillary services. Specific terms for each service type (e.g. rental agreements, charter contracts) are provided separately at the time of booking.',
        ],
      },
      {
        heading: '3. Bookings and Payment',
        paragraphs: [
          '3.1 All bookings are subject to availability. A booking is confirmed only upon receipt of a written confirmation from us and payment of the required deposit or full amount.',
          '3.2 Deposit requirements vary by service. Charter bookings typically require 50% deposit on confirmation with the balance due 60 days before departure. Day tours and rentals may require full payment or a smaller deposit, this will be specified in your booking confirmation.',
          '3.3 Prices are quoted in Euros (EUR) and are subject to change until a booking is confirmed. All prices include Greek VAT where applicable.',
        ],
      },
      {
        heading: '4. Cancellations and Refunds',
        paragraphs: ['4.1 <strong>Cancellations by the Client:</strong>'],
        list: [
          'More than 14 days before the service date: full refund of any amount paid, minus a €25 administrative fee',
          '7–14 days before the service date: 50% refund',
          'Less than 7 days before the service date: no refund',
        ],
        trailingParagraphs: [
          '4.2 <strong>Cancellations due to weather:</strong> If we judge conditions to be unsafe on the day of your booking, we will offer a full rescheduling or a full refund at your option. Wind forecasts above Force 5 (Beaufort scale) for the planned route constitute grounds for weather cancellation.',
          '4.3 <strong>Cancellations by the Company:</strong> In the event of unforeseen circumstances (mechanical failure, medical emergency, force majeure) we will offer a full refund or rescheduling.',
        ],
      },
      {
        heading: '5. Safety and Conduct',
        paragraphs: [
          '5.1 All clients must follow the instructions of the skipper or rental operator at all times. Failure to comply may result in the trip being terminated without refund.',
          '5.2 The skipper reserves the right to refuse service or terminate a trip early if a client is intoxicated, violent, or otherwise poses a risk to themselves or others.',
          '5.3 Life jackets must be worn when instructed by the skipper. Children under 12 must wear a life jacket at all times on deck.',
          '5.4 Licence-free boat rentals are restricted to the designated area confirmed at the time of hire. Operating outside this area is the sole responsibility of the client.',
        ],
      },
      {
        heading: '6. Liability',
        paragraphs: [
          '6.1 Rhodes Rent a Boat acts as an agent and consultant in arranging some services provided by third-party operators. Our liability in such cases is limited to the standard set out in applicable Greek law.',
          '6.2 We are not liable for personal injury, loss or damage caused by acts of God, adverse weather conditions, or circumstances beyond our reasonable control.',
          '6.3 All vessels operated by or referred through Rhodes Rent a Boat carry the minimum third-party liability insurance required by Greek maritime law. Clients are strongly advised to take out personal travel insurance including medical and cancellation cover.',
        ],
      },
      {
        heading: '7. Client Responsibilities',
        paragraphs: [
          '7.1 Clients are responsible for ensuring all members of their party are medically fit for the activity booked.',
          '7.2 For licence-free rentals, clients must be at least 18 years of age. Children are welcome on all tours when accompanied by a responsible adult.',
          '7.3 Clients are responsible for any damage caused to a vessel through negligence or misuse. A damage deposit may be required at the time of rental.',
        ],
      },
      {
        heading: '8. Intellectual Property',
        paragraphs: [
          'All content on rhodesrentaboat.com, including text, photographs, logos and design, is the property of Rhodes Rent a Boat or is used with permission. Reproduction or commercial use without written consent is prohibited.',
        ],
      },
      {
        heading: '9. Governing Law',
        paragraphs: [
          'These terms and conditions are governed by the laws of Greece. Any disputes shall be subject to the exclusive jurisdiction of the courts of Rhodes, Greece.',
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          'For questions about these terms, contact us at:',
          'Email: <a href="mailto:rhodessailingtours2023@gmail.com">rhodessailingtours2023@gmail.com</a><br />Phone: +30 695 166 6454<br />Address: Ionos Dragoumi 39, Rhodes 85100, Greece',
        ],
      },
    ],
  },
};

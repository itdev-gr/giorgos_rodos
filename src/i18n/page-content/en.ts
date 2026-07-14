export interface PageContent {
  boatTripsIntro: {
    hiddenTitle: string;
    ledeHtml: string;
    table: {
      caption: string;
      columns: { type: string; bestFor: string; price: string; book: string };
      rows: Array<{ type: string; bestFor: string; price: string; bookHtml: string }>;
    };
  };
  home: {
    categoriesTitle: string;
    categoryCards: Array<{ slug: string; title: string; description: string }>;
    whyTitle: string;
    whyItems: Array<{ title: string; text: string }>;
    rentABoat: {
      imageAlt: string;
      heading: string;
      paragraphs: [string, string];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    experiences: {
      title: string;
      navigationLabel: string;
      previousLabel: string;
      nextLabel: string;
      browseCta: string;
      fullCatalogCta: string;
    };
  };
  about: {
    h1: string;
    founder: {
      eyebrow: string;
      title: string;
      lead: string;
      paragraphs: [string, string];
      note: string;
    };
    philosophy: {
      eyebrow: string;
      title: string;
      quote: string;
      paragraphs: [string, string, string];
      highlight: string;
      ctaServices: string;
      ctaContact: string;
    };
    whyBuilt: {
      eyebrow: string;
      title: string;
      paragraphs: [string, string, string, string];
      quote: string;
    };
    story: {
      title: string;
      subtitle: string;
      paragraphs: [string, string];
      cta: string;
    };
    safety: {
      title: string;
      subtitle: string;
      paragraphs: [string, string];
      cta: string;
    };
    difference: {
      title: string;
      subtitle: string;
      paragraphs: [string, string];
      cta: string;
    };
    experiences: {
      title: string;
      items: Array<{ title: string; desc: string }>;
    };
    ctaCards: {
      charter: { title: string; desc: string; cta: string };
      tours: { title: string; desc: string; cta: string };
    };
  };
  contact: {
    formIntro: string;
    infoIntro: string;
    location: {
      eyebrow: string;
      title: string;
      text: string;
      listItems: string[];
      card: {
        businessName: string;
        labels: {
          address: string;
          phone: string;
          whatsapp: string;
          email: string;
          hours: string;
        };
        hoursValue: string;
        mapsLink: string;
      };
      mapTitle: string;
    };
  };
  thingsToDo: {
    h1: string;
    hiddenH2: string;
    schemaName: string;
    schemaDescription: string;
    emptyTitle: string;
    emptyText: string;
  };
}

export const en: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Rhodes boat trips overview',
    ledeHtml:
      '<strong>Rhodes boat trips</strong> cover Symi day cruises, Lindos express routes and east-coast swim days along Anthony Quinn Bay, Kalithea and Ladiko. We help you choose between <a href="/service/rhodes-boat-cruises">shared day cruises</a> (best per-person value) and <a href="#boat-trips-catalog">private skippered trips</a> (your route, your pace) — honestly, since 1998.',
    table: {
      caption: 'Compare Rhodes boat trip formats',
      columns: {
        type: 'Trip type',
        bestFor: 'Best for',
        price: 'Typical price',
        book: 'Where to book',
      },
      rows: [
        {
          type: 'Shared Symi day cruise',
          bestFor: 'Budget, first-timers',
          price: '€45–70 / person',
          bookHtml: '<a href="/service/rhodes-boat-cruises">Boat cruises</a>',
        },
        {
          type: 'Private Symi speedboat',
          bestFor: 'Groups of 4–6, flexible timing',
          price: '€1,000–1,300 / boat',
          bookHtml: '<a href="#boat-trips-catalog">Private catalog</a>',
        },
        {
          type: 'Lindos express cruise',
          bestFor: 'Short ashore time at Lindos',
          price: '€39–100 / person',
          bookHtml: '<a href="/service/rhodes-boat-cruises">Boat cruises</a>',
        },
        {
          type: 'Private east-coast day',
          bestFor: 'Families, own pace',
          price: 'from €350 / boat',
          bookHtml: '<a href="#boat-trips-catalog">Private catalog</a>',
        },
      ],
    },
  },
  home: {
    categoriesTitle: 'Our Services',
    categoryCards: [
      {
        slug: 'rhodes-boat-tours',
        title: 'Rhodes Boat Tours',
        description: 'Guided sailing tours along the stunning Rhodes coastline and nearby islands.',
      },
      {
        slug: 'rhodes-boat-trips',
        title: 'Rhodes Boat Trips',
        description: 'Private sailing yacht trips with experienced crews across the Dodecanese.',
      },
      {
        slug: 'rhodes-boat-cruises',
        title: 'Rhodes Boat Cruises',
        description: 'All-inclusive day and sunset cruises with swimming, dining, and music.',
      },
      {
        slug: 'rhodes-rent-a-boat',
        title: 'Rhodes Rent a Boat',
        description: 'Drive your own boat along the coast, no licence needed, full freedom.',
      },
      {
        slug: 'rhodes-catamaran-tours',
        title: 'Rhodes Catamaran Cruises',
        description: 'Spacious catamarans for group cruises, events, and island-hopping adventures.',
      },
      {
        slug: 'rhodes-charter',
        title: 'Rhodes Yacht Charter',
        description: 'Over 80 sailing yachts and catamarans. Bareboat or crewed, the Dodecanese is yours.',
      },
      {
        slug: 'rhodes-sailing-trips',
        title: 'Rhodes Sailing Trips',
        description: 'Day sails on monohull yachts with a professional skipper along the east coast.',
      },
      {
        slug: 'rhodes-mice-events',
        title: 'Rhodes MICE & Incentive Events',
        description: 'Corporate events, incentive trips, and team-building experiences on the water.',
      },
    ],
    whyTitle: 'Why Guests Trust Us',
    whyItems: [
      {
        title: 'Local Knowledge',
        text: 'We live and work in Rhodes. We know every bay, every route, and every captain personally.',
      },
      {
        title: 'Handpicked Boats',
        text: 'Every boat we recommend has been personally vetted by our team for quality, safety, and comfort.',
      },
      {
        title: 'Safety First',
        text: 'All vessels are fully licensed and insured, with experienced crews trained for all conditions.',
      },
      {
        title: 'Personal Support',
        text: 'Real people answer your questions, before, during, and after your trip. No chatbots, no call centres.',
      },
      {
        title: 'Direct Arrangements',
        text: 'We personally arrange every experience with captains and operators we know, no anonymous listings or call-centre handoffs.',
      },
      {
        title: 'Real Advice',
        text: 'We will tell you honestly which boat, route, or experience is right for your group and budget.',
      },
    ],
    rentABoat: {
      imageAlt: 'Guests enjoying a speedboat cruise in Rhodes',
      heading: 'What Our Guests Love About Us',
      paragraphs: [
        'Thousands of happy guests explore Rhodes from the sea each year. A morning swim in a hidden bay, a slow cruise along the east coast, lunch at a beach taverna: that is what a great boat day looks like here.',
        'Whether you want a license-free boat for two or a skippered trip for the whole family, we help you pick the right option with honest advice and no sales pressure. Real boats, local knowledge, and guests who leave smiling. That is what we care about.',
      ],
      ctaPrimary: 'Book Now',
      ctaSecondary: 'Explore Rentals',
    },
    experiences: {
      title: 'Rhodes Boat Experiences',
      navigationLabel: 'Carousel navigation',
      previousLabel: 'Previous experiences',
      nextLabel: 'Next experiences',
      browseCta: 'Browse all boat experiences in Rhodes →',
      fullCatalogCta: 'View full catalog with filters',
    },
  },
  about: {
    h1: 'We Are Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Since 1998',
      title: 'Meet the Founder',
      lead: 'Giorgos R., Captain & Founder',
      paragraphs: [
        'Giorgos has been running boat experiences from Rhodes since 1998. Starting with a single sailboat from Mandraki Harbour, he built Rhodes Rent a Boat into a full-service maritime operation covering boat tours, private charters and yacht rentals across the Dodecanese.',
        'He still works the way he started: talk to people first, understand what they want from the sea, then connect them with the right local skipper or vessel, honestly, without pushing the most expensive option.',
      ],
      note: 'We are not a booking marketplace. We are the local team visitors speak with before they step on board.',
    },
    philosophy: {
      eyebrow: 'How we work',
      title: 'Our Philosophy',
      quote: 'Rhodes is a place you experience through people, not anonymous listings.',
      paragraphs: [
        'This website was created by local professionals who have spent many years working at sea and in tourism on the island. We know the boats, the routes, the crews and the people behind each experience.',
        'We believe that small local businesses, family boats and experienced crews offer some of the best experiences on the island. For this reason, we carefully select the experiences and partners that appear on this website.',
        'This platform is not based on algorithms, advertisements or sponsored listings. It is based on local knowledge, real experience and personal recommendations.',
      ],
      highlight:
        "We don't try to sell you the most expensive tour. We try to help you choose the right experience for you.",
      ctaServices: 'Our Services',
      ctaContact: 'Contact Us',
    },
    whyBuilt: {
      eyebrow: 'Our mission',
      title: 'Why We Built This Website',
      paragraphs: [
        'This website was created by people who live and work in Rhodes and spend most of their lives at sea.',
        'After many years working in tourism and boating on the island, we realized that many visitors find it difficult to understand the difference between the many boat tours, boat trips and sea experiences available in Rhodes. Many experiences look similar online, but in reality they can be very different.',
        'For this reason, we decided to create a website where visitors can find clear information about sea experiences in Rhodes and discover selected boats, tours and local businesses that we believe offer a very good overall experience.',
        'Our goal is not to sell as many tours as possible. Our goal is to help visitors find the right experience for them and connect directly with local people who love what they do.',
      ],
      quote:
        'Rhodes is a place that you experience from the sea, and we hope this website helps you discover that side of the island.',
    },
    story: {
      title: 'Our Story',
      subtitle: 'A local story, told on the water',
      paragraphs: [
        'What started as a single sailboat and a passion for the Dodecanese has grown into a full maritime operation, yacht charters, day cruises, speedboat tours, license-free rentals, and professional marine support. But no matter how much we have grown, the philosophy has stayed the same: talk to people first, understand what they want, and then make it happen on the sea.',
        'Our skippers know every hidden bay between Rhodes and Kastellorizo. Our team knows the best tavernas, the quietest anchorages, and the perfect time of day to visit each spot. That knowledge does not come from a guidebook, it comes from a lifetime spent here.',
      ],
      cta: 'Learn More',
    },
    safety: {
      title: 'Safety and Honesty Come First',
      subtitle: 'We would rather lose a booking than put you on the wrong boat',
      paragraphs: [
        'Every vessel we operate or recommend is regularly inspected and fully equipped with modern safety gear. Our skippers hold professional maritime licenses and are trained for all sea conditions. When you step aboard, you can relax knowing that everything has been checked, double-checked, and prepared with care.',
        'We also believe in transparent pricing. The price we quote is the price you pay, no hidden fees, no surprise extras at the dock. If something is not included, we will tell you upfront. That honesty is the foundation of every relationship we build.',
      ],
      cta: 'Get in Touch',
    },
    difference: {
      title: 'What Makes Us Different',
      subtitle: 'Direct, personal, and always available',
      paragraphs: [
        'When you book through us, you are dealing with the people who actually run the boats. There are no call centers, no middlemen, no booking portals between you and us. You send a message, we reply. You have a question at the harbour, we are a phone call away. That directness is rare in this industry, and our guests notice it immediately.',
        'We also do not believe in one-size-fits-all. A couple looking for a quiet sunset cruise needs a completely different experience from a family with young children or a group of friends wanting to explore hidden beaches. We listen, we suggest, and we make sure the experience matches the people.',
      ],
      cta: 'Explore Services',
    },
    experiences: {
      title: 'A Few of the Things We Do',
      items: [
        {
          title: 'Sunset Cruises',
          desc: 'The Rhodes coastline at golden hour, drinks on deck, the sky on fire, and nothing to do but enjoy the moment.',
        },
        {
          title: 'Island Hopping',
          desc: 'Sail from Rhodes to Symi, Halki, or Tilos. Each island has its own character, and we know them all by heart.',
        },
        {
          title: 'Yacht Charters',
          desc: 'Your own yacht, your own skipper, your own schedule. The most personal way to experience the Dodecanese.',
        },
        {
          title: 'Sea Adventures',
          desc: 'Snorkel over hidden reefs, swim in bays with no road access, or simply float in water so clear it does not look real.',
        },
      ],
    },
    ctaCards: {
      charter: {
        title: 'Yacht Charters',
        desc: 'Your own yacht, your own route, your own pace. Tell us what you want and we will make it happen.',
        cta: 'Discover More',
      },
      tours: {
        title: 'Boat Tours',
        desc: 'Join a day cruise, rent a speedboat, or hire a boat with a skipper. We have options for every kind of sea lover.',
        cta: 'Discover More',
      },
    },
  },
  contact: {
    formIntro:
      "For any question or info about our services, please fill out the form below and we'll get back to you as soon as possible.",
    infoIntro:
      'Our team is available every day, by phone, WhatsApp, or email. We answer personally with clear advice, fair prices, and boats we know well.',
    location: {
      eyebrow: 'Find Us',
      title: 'How to Reach Our Office in Rhodes Town',
      text: "Our office is at Ionos Dragoumi 39, in the centre of Rhodes Town. Stop by for advice, paperwork or your safety briefing, and from here we'll guide you to your boat for departure.",
      listItems: [
        '<strong>From Rhodes Airport (RHO):</strong> 14 km / 25 minutes by car. We can arrange a private transfer, see <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>From the cruise port (Akandia / Kolona):</strong> a 5-minute taxi or a 15-minute walk along the seafront promenade.',
        '<strong>From the Old Town:</strong> walk through the Liberty Gate (Eleftherias Pyli); Ionos Dragoumi runs through the New Town a few minutes\' walk inland.',
        '<strong>Parking:</strong> public lots near the New Market (Nea Agora) and Eleftherias Square, both within a few minutes\' walk.',
        '<strong>Boat departures:</strong> we meet you at the office first, then walk together to the quay so you know exactly where to board.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Address',
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          email: 'Email',
          hours: 'Hours',
        },
        hoursValue: 'Available 24/7, calls and messages',
        mapsLink: 'Open in Google Maps',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rhodes',
    },
  },
  thingsToDo: {
    h1: 'All Boat Experiences in Rhodes',
    hiddenH2: 'All Approved Boat Experiences in Rhodes',
    schemaName: 'All Boat Experiences in Rhodes: Browse & Filter',
    schemaDescription:
      'Browse all approved boat experiences in Rhodes, sailing trips, day cruises, private boats, catamaran tours and self-drive rentals. Compare and choose.',
    emptyTitle: 'No Tours Available Yet',
    emptyText:
      'We are currently adding new boat experiences to this page. Check back soon or contact us for personal recommendations.',
  },
};

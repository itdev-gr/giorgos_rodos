import type { PageContent } from './en';

export const fr: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Aperçu des excursions en bateau à Rhodes',
    ledeHtml:
      '<strong>Les excursions en bateau à Rhodes</strong> incluent des croisières d’une journée vers Symi, des liaisons express vers Lindos et des journées baignade sur la côte est autour d’Anthony Quinn Bay, Kalithea et Ladiko. Nous vous aidons à choisir entre <a href="/service/rhodes-boat-cruises">croisières partagées</a> (meilleur rapport qualité-prix par personne) et <a href="#boat-trips-catalog">sorties privées avec skipper</a> (votre itinéraire, votre rythme) — en toute transparence depuis 1998.',
    table: {
      caption: 'Comparer les formats d’excursions en bateau à Rhodes',
      columns: { type: 'Type de sortie', bestFor: 'Idéal pour', price: 'Prix habituel', book: 'Où réserver' },
      rows: [
        { type: 'Croisière partagée à Symi (journée)', bestFor: 'Petit budget, première fois', price: '45–70 € / personne', bookHtml: '<a href="/service/rhodes-boat-cruises">Croisières en bateau</a>' },
        { type: 'Speedboat privé vers Symi', bestFor: 'Groupes de 4 à 6, horaires flexibles', price: '1 000–1 300 € / bateau', bookHtml: '<a href="#boat-trips-catalog">Catalogue privé</a>' },
        { type: 'Croisière express Lindos', bestFor: 'Court temps à terre à Lindos', price: '39–100 € / personne', bookHtml: '<a href="/service/rhodes-boat-cruises">Croisières en bateau</a>' },
        { type: 'Journée privée côte est', bestFor: 'Familles, rythme libre', price: 'à partir de 350 € / bateau', bookHtml: '<a href="#boat-trips-catalog">Catalogue privé</a>' },
      ],
    },
  },
  home: {
    categoriesTitle: 'Nos services',
    categoryCards: [
      { slug: 'rhodes-boat-tours', title: 'Tours en bateau à Rhodes', description: 'Tours guidés en voilier le long de la superbe côte de Rhodes et des îles voisines.' },
      { slug: 'rhodes-boat-trips', title: 'Excursions en bateau à Rhodes', description: 'Sorties privées en voilier avec équipages expérimentés dans le Dodécanèse.' },
      { slug: 'rhodes-boat-cruises', title: 'Croisières en bateau à Rhodes', description: 'Croisières tout compris de jour ou au coucher du soleil, avec baignade, repas et musique.' },
      { slug: 'rhodes-rent-a-boat', title: 'Location de bateau à Rhodes', description: 'Pilotez votre propre bateau le long de la côte, sans permis, en toute liberté.' },
      { slug: 'rhodes-catamaran-tours', title: 'Croisières en catamaran à Rhodes', description: 'Catamarans spacieux pour sorties en groupe, événements et aventures d’île en île.' },
      { slug: 'rhodes-charter', title: 'Location de yacht à Rhodes', description: 'Plus de 80 voiliers et catamarans. Bareboat ou avec équipage, le Dodécanèse est à vous.' },
      { slug: 'rhodes-tender-boat', title: 'Services de bateau-tender à Rhodes', description: 'Transferts rapides et fiables entre le rivage et les navires dans les ports et baies de Rhodes.' },
      { slug: 'rhodes-mice-events', title: 'Événements MICE & incentive à Rhodes', description: 'Événements d’entreprise, voyages incentive et team building en mer.' },
    ],
    whyTitle: 'Pourquoi nos clients nous font confiance',
    whyItems: [
      { title: 'Connaissance locale', text: 'Nous vivons et travaillons à Rhodes. Nous connaissons personnellement chaque baie, chaque itinéraire et chaque capitaine.' },
      { title: 'Bateaux sélectionnés', text: 'Chaque bateau recommandé est vérifié personnellement par notre équipe pour la qualité, la sécurité et le confort.' },
      { title: 'Sécurité avant tout', text: 'Tous les navires sont entièrement autorisés et assurés, avec des équipages expérimentés pour toutes les conditions.' },
      { title: 'Accompagnement humain', text: 'De vraies personnes répondent à vos questions avant, pendant et après votre sortie. Pas de chatbot, pas de centre d’appel.' },
      { title: 'Organisation directe', text: 'Nous organisons chaque expérience directement avec des capitaines et opérateurs que nous connaissons, sans plateformes anonymes.' },
      { title: 'Conseils honnêtes', text: 'Nous vous disons franchement quel bateau, quel itinéraire ou quelle expérience convient à votre groupe et à votre budget.' },
    ],
    rentABoat: {
      imageAlt: 'Des clients profitant d’une croisière en speedboat à Rhodes',
      heading: 'Ce que nos clients aiment chez nous',
      paragraphs: [
        'Chaque année, des milliers de clients heureux découvrent Rhodes depuis la mer. Une baignade matinale dans une baie cachée, une croisière paisible sur la côte est, un déjeuner dans une taverne en bord de plage : voilà à quoi ressemble une belle journée en bateau ici.',
        'Que vous souhaitiez un bateau sans permis pour deux personnes ou une sortie avec skipper pour toute la famille, nous vous aidons à choisir la bonne option avec des conseils honnêtes et sans pression commerciale. De vrais bateaux, une vraie expertise locale, et des clients qui repartent avec le sourire. C’est ce qui compte pour nous.',
      ],
      ctaPrimary: 'Réserver maintenant',
      ctaSecondary: 'Voir les locations',
    },
    experiences: {
      title: 'Expériences en bateau à Rhodes',
      navigationLabel: 'Navigation du carrousel',
      previousLabel: 'Expériences précédentes',
      nextLabel: 'Expériences suivantes',
      browseCta: 'Parcourir toutes les expériences en bateau à Rhodes →',
      fullCatalogCta: 'Voir le catalogue complet avec filtres',
    },
  },
  about: {
    h1: 'Nous sommes Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Depuis 1998',
      title: 'Rencontrez le fondateur',
      lead: 'Giorgos R., Capitaine & Fondateur',
      paragraphs: [
        'Giorgos organise des expériences en bateau depuis Rhodes depuis 1998. Parti d’un seul voilier au port de Mandraki, il a fait de Rhodes Rent a Boat une activité maritime complète couvrant tours en bateau, charters privés et locations de yachts dans tout le Dodécanèse.',
        'Il travaille toujours comme au premier jour : d’abord parler avec les gens, comprendre ce qu’ils attendent de la mer, puis les orienter honnêtement vers le skipper ou le bateau local adapté, sans pousser l’option la plus chère.',
      ],
      note: 'Nous ne sommes pas une marketplace de réservation. Nous sommes l’équipe locale à qui les visiteurs parlent avant d’embarquer.',
    },
    philosophy: {
      eyebrow: 'Notre façon de travailler',
      title: 'Notre philosophie',
      quote: 'Rhodes se vit à travers les personnes, pas à travers des annonces anonymes.',
      paragraphs: [
        'Ce site a été créé par des professionnels locaux qui travaillent depuis de nombreuses années en mer et dans le tourisme sur l’île. Nous connaissons les bateaux, les itinéraires, les équipages et les personnes derrière chaque expérience.',
        'Nous pensons que les petites entreprises locales, les bateaux familiaux et les équipages expérimentés proposent certaines des meilleures expériences de l’île. C’est pourquoi nous sélectionnons soigneusement les expériences et partenaires présents sur ce site.',
        'Cette plateforme n’est pas basée sur des algorithmes, des publicités ou des annonces sponsorisées. Elle repose sur la connaissance locale, l’expérience réelle et les recommandations personnelles.',
      ],
      highlight: 'Nous ne cherchons pas à vous vendre l’excursion la plus chère. Nous cherchons à vous aider à choisir celle qui vous convient.',
      ctaServices: 'Nos services',
      ctaContact: 'Nous contacter',
    },
    whyBuilt: {
      eyebrow: 'Notre mission',
      title: 'Pourquoi nous avons créé ce site',
      paragraphs: [
        'Ce site a été créé par des personnes qui vivent et travaillent à Rhodes et passent l’essentiel de leur vie en mer.',
        'Après de nombreuses années dans le tourisme et le nautisme sur l’île, nous avons constaté que beaucoup de visiteurs ont du mal à comprendre la différence entre les nombreux tours en bateau, excursions et expériences en mer disponibles à Rhodes. En ligne, elles se ressemblent souvent, mais en réalité elles peuvent être très différentes.',
        'C’est pour cela que nous avons décidé de créer un site où les visiteurs trouvent des informations claires sur les expériences en mer à Rhodes et découvrent une sélection de bateaux, tours et entreprises locales qui offrent, selon nous, une excellente expérience globale.',
        'Notre objectif n’est pas de vendre le plus de tours possible. Notre objectif est d’aider les visiteurs à trouver la bonne expérience et à se connecter directement avec des locaux passionnés par leur métier.',
      ],
      quote: 'Rhodes est un endroit qui se découvre depuis la mer, et nous espérons que ce site vous aidera à découvrir cette facette de l’île.',
    },
    story: {
      title: 'Notre histoire',
      subtitle: 'Une histoire locale racontée sur l’eau',
      paragraphs: [
        'Ce qui a commencé avec un seul voilier et une passion pour le Dodécanèse est devenu une activité maritime complète : charters de yachts, croisières à la journée, tours en speedboat, locations sans permis et assistance marine professionnelle. Mais, malgré cette croissance, notre philosophie reste la même : écouter d’abord, comprendre les attentes, puis les réaliser en mer.',
        'Nos skippers connaissent chaque baie cachée entre Rhodes et Kastellorizo. Notre équipe connaît les meilleures tavernes, les mouillages les plus calmes et le meilleur moment de la journée pour chaque lieu. Cette expertise ne vient pas d’un guide touristique, mais d’une vie passée ici.',
      ],
      cta: 'En savoir plus',
    },
    safety: {
      title: 'Sécurité et honnêteté avant tout',
      subtitle: 'Nous préférons perdre une réservation plutôt que vous mettre sur le mauvais bateau',
      paragraphs: [
        'Chaque bateau que nous exploitons ou recommandons est régulièrement inspecté et entièrement équipé de matériel de sécurité moderne. Nos skippers possèdent des licences maritimes professionnelles et sont formés à toutes les conditions en mer. Quand vous montez à bord, tout a été vérifié et préparé avec soin.',
        'Nous croyons aussi à la transparence des prix. Le prix annoncé est le prix payé : aucun frais caché, aucune surprise au quai. Si quelque chose n’est pas inclus, nous vous le disons à l’avance. Cette honnêteté est la base de chaque relation que nous construisons.',
      ],
      cta: 'Prendre contact',
    },
    difference: {
      title: 'Ce qui nous distingue',
      subtitle: 'Direct, personnel et toujours disponible',
      paragraphs: [
        'Quand vous réservez avec nous, vous échangez avec les personnes qui exploitent réellement les bateaux. Aucun centre d’appel, aucun intermédiaire, aucun portail entre vous et nous. Vous envoyez un message, nous répondons. Une question au port ? Nous sommes à un appel. Cette proximité est rare dans ce secteur, et nos clients le remarquent tout de suite.',
        'Nous ne croyons pas non plus au modèle unique pour tous. Un couple à la recherche d’une croisière calme au coucher du soleil n’a pas les mêmes besoins qu’une famille avec de jeunes enfants ou qu’un groupe d’amis qui veut explorer des plages cachées. Nous écoutons, nous conseillons et nous adaptons l’expérience aux personnes.',
      ],
      cta: 'Découvrir les services',
    },
    experiences: {
      title: 'Quelques-unes de nos expériences',
      items: [
        { title: 'Croisières au coucher du soleil', desc: 'La côte de Rhodes à l’heure dorée, des boissons sur le pont, un ciel en feu et juste le plaisir du moment.' },
        { title: 'Island hopping', desc: 'Naviguez de Rhodes vers Symi, Halki ou Tilos. Chaque île a son caractère, et nous les connaissons toutes parfaitement.' },
        { title: 'Charters de yachts', desc: 'Votre yacht, votre skipper, votre programme. La façon la plus personnelle de découvrir le Dodécanèse.' },
        { title: 'Aventures en mer', desc: 'Snorkeling sur des récifs cachés, baignade dans des baies sans accès routier, ou simplement flotter dans une eau incroyablement claire.' },
      ],
    },
    ctaCards: {
      charter: { title: 'Charters de yachts', desc: 'Votre yacht, votre itinéraire, votre rythme. Dites-nous ce que vous souhaitez et nous le réalisons.', cta: 'Découvrir' },
      tours: { title: 'Tours en bateau', desc: 'Rejoignez une croisière journée, louez un speedboat ou prenez un bateau avec skipper. Nous avons une option pour chaque amoureux de la mer.', cta: 'Découvrir' },
    },
  },
  contact: {
    formIntro:
      'Pour toute question ou information sur nos services, veuillez remplir le formulaire ci-dessous et nous vous répondrons dès que possible.',
    infoIntro:
      'Notre équipe est disponible chaque jour par téléphone, WhatsApp ou e-mail. Nous répondons personnellement avec des conseils clairs, des prix équitables et des bateaux que nous connaissons bien.',
    location: {
      eyebrow: 'Nous trouver',
      title: 'Comment rejoindre notre bureau à Rhodes ville',
      text: 'Notre bureau se trouve au 39 Ionos Dragoumi, au centre de Rhodes ville. Passez pour des conseils, la paperasse ou votre briefing de sécurité ; de là, nous vous guiderons vers votre bateau pour le départ.',
      listItems: [
        '<strong>Depuis l\'aéroport de Rhodes (RHO) :</strong> 14 km / 25 minutes en voiture. Nous pouvons organiser un transfert privé, voir <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>Depuis le port croisières (Akandia / Kolona) :</strong> 5 minutes en taxi ou 15 minutes à pied le long de la promenade.',
        '<strong>Depuis la Vieille Ville :</strong> traversez la Porte de la Liberté (Eleftherias Pyli) ; Ionos Dragoumi traverse la Ville Nouvelle à quelques minutes à pied vers l\'intérieur.',
        '<strong>Parking :</strong> parkings publics près du Nouveau Marché (Nea Agora) et de la place Eleftherias, tous deux à quelques minutes à pied.',
        '<strong>Départs en bateau :</strong> nous nous retrouvons d\'abord au bureau, puis nous marchons ensemble jusqu\'au quai pour que vous sachiez exactement où embarquer.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Adresse',
          phone: 'Téléphone',
          whatsapp: 'WhatsApp',
          email: 'E-mail',
          hours: 'Horaires',
        },
        hoursValue: 'Disponibles 24 h/24 et 7 j/7, appels et messages',
        mapsLink: 'Ouvrir dans Google Maps',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rhodes',
    },
  },
  thingsToDo: {
    h1: 'Toutes les expériences en bateau à Rhodes',
    hiddenH2: 'Toutes les expériences en bateau approuvées à Rhodes',
    schemaName: 'Toutes les expériences en bateau à Rhodes : parcourir et filtrer',
    schemaDescription:
      'Parcourez toutes les expériences en bateau approuvées à Rhodes — sorties à la voile, croisières journée, bateaux privés, tours en catamaran et locations sans permis. Comparez et choisissez.',
    emptyTitle: 'Aucun tour disponible pour le moment',
    emptyText:
      'Nous ajoutons actuellement de nouvelles expériences en bateau à cette page. Revenez bientôt ou contactez-nous pour des recommandations personnalisées.',
  },
};

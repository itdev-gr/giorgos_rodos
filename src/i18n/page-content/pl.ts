import type { PageContent } from './en';

export const pl: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Przegląd rejsów łodzią po Rodos',
    ledeHtml:
      '<strong>Rejsy łodzią po Rodos</strong> obejmują całodniowe rejsy na Symi, ekspresowe trasy do Lindos oraz dni kąpielowe na wschodnim wybrzeżu przy Anthony Quinn Bay, Kalithea i Ladiko. Pomagamy wybrać między <a href="/service/rhodes-boat-cruises">wspólnymi rejsami dziennymi</a> (najlepsza cena na osobę) a <a href="#boat-trips-catalog">prywatnymi wycieczkami ze skipperem</a> (Twoja trasa, Twoje tempo) — uczciwie, od 1998 roku.',
    table: {
      caption: 'Porównaj formaty rejsów łodzią na Rodos',
      columns: { type: 'Typ rejsu', bestFor: 'Najlepsze dla', price: 'Typowa cena', book: 'Gdzie rezerwować' },
      rows: [
        { type: 'Wspólny całodniowy rejs na Symi', bestFor: 'Niski budżet, pierwszy raz', price: '€45–70 / osoba', bookHtml: '<a href="/service/rhodes-boat-cruises">Rejsy łodzią</a>' },
        { type: 'Prywatna łódź motorowa na Symi', bestFor: 'Grupy 4–6 osób, elastyczne godziny', price: '€1,000–1,300 / łódź', bookHtml: '<a href="#boat-trips-catalog">Katalog prywatny</a>' },
        { type: 'Ekspresowy rejs do Lindos', bestFor: 'Krótki pobyt na lądzie w Lindos', price: '€39–100 / osoba', bookHtml: '<a href="/service/rhodes-boat-cruises">Rejsy łodzią</a>' },
        { type: 'Prywatny dzień na wschodnim wybrzeżu', bestFor: 'Rodziny, własne tempo', price: 'od €350 / łódź', bookHtml: '<a href="#boat-trips-catalog">Katalog prywatny</a>' },
      ],
    },
  },
  home: {
    categoriesTitle: 'Nasze usługi',
    categoryCards: [
      { slug: 'rhodes-boat-tours', title: 'Wycieczki łodzią po Rodos', description: 'Prowadzone rejsy żeglarskie wzdłuż pięknego wybrzeża Rodos i pobliskich wysp.' },
      { slug: 'rhodes-boat-trips', title: 'Rejsy łodzią po Rodos', description: 'Prywatne rejsy jachtem żaglowym z doświadczonymi załogami po Dodekanezie.' },
      { slug: 'rhodes-boat-cruises', title: 'Rejsy morskie na Rodos', description: 'Całodniowe i zachodowe rejsy all-inclusive z pływaniem, jedzeniem i muzyką.' },
      { slug: 'rhodes-rent-a-boat', title: 'Wynajem łodzi na Rodos', description: 'Prowadź łódź samodzielnie wzdłuż wybrzeża, bez patentu, z pełną swobodą.' },
      { slug: 'rhodes-catamaran-tours', title: 'Rejsy katamaranem na Rodos', description: 'Przestronne katamarany na rejsy grupowe, wydarzenia i wyprawy między wyspami.' },
      { slug: 'rhodes-charter', title: 'Czarter jachtów na Rodos', description: 'Ponad 80 jachtów żaglowych i katamaranów. Bareboat lub z załogą — Dodekanez należy do Ciebie.' },
      { slug: 'rhodes-tender-boat', title: 'Usługi tender boat na Rodos', description: 'Szybkie i niezawodne transfery brzeg-statek po portach i zatokach Rodos.' },
      { slug: 'rhodes-mice-events', title: 'Wydarzenia MICE i incentive na Rodos', description: 'Wydarzenia firmowe, wyjazdy motywacyjne i team building na wodzie.' },
    ],
    whyTitle: 'Dlaczego goście nam ufają',
    whyItems: [
      { title: 'Lokalna wiedza', text: 'Mieszkamy i pracujemy na Rodos. Znamy każdą zatokę, każdą trasę i każdego kapitana osobiście.' },
      { title: 'Starannie wybrane łodzie', text: 'Każda polecana przez nas łódź została osobiście sprawdzona przez nasz zespół pod kątem jakości, bezpieczeństwa i komfortu.' },
      { title: 'Bezpieczeństwo przede wszystkim', text: 'Wszystkie jednostki są w pełni licencjonowane i ubezpieczone, a załogi mają doświadczenie w każdych warunkach.' },
      { title: 'Osobiste wsparcie', text: 'Na pytania odpowiadają prawdziwi ludzie — przed, w trakcie i po rejsie. Bez chatbotów i bez call center.' },
      { title: 'Bezpośrednia organizacja', text: 'Każde doświadczenie organizujemy bezpośrednio z kapitanami i operatorami, których znamy, bez anonimowych platform.' },
      { title: 'Rzetelne doradztwo', text: 'Uczciwie powiemy, jaka łódź, trasa lub oferta będzie najlepsza dla Twojej grupy i budżetu.' },
    ],
    rentABoat: {
      imageAlt: 'Goście cieszący się rejsem łodzią motorową na Rodos',
      heading: 'Co nasi goście w nas cenią',
      paragraphs: [
        'Każdego roku tysiące zadowolonych gości odkrywa Rodos od strony morza. Poranna kąpiel w ukrytej zatoce, spokojny rejs wzdłuż wschodniego wybrzeża, lunch w tawernie przy plaży — tak wygląda tutaj idealny dzień na łodzi.',
        'Niezależnie od tego, czy chcesz łódź bez patentu dla dwojga, czy rejs ze skipperem dla całej rodziny, pomożemy Ci wybrać właściwą opcję, uczciwie i bez presji sprzedażowej. Prawdziwe łodzie, lokalna wiedza i goście, którzy wracają z uśmiechem. To jest dla nas najważniejsze.',
      ],
      ctaPrimary: 'Zarezerwuj teraz',
      ctaSecondary: 'Zobacz wynajem',
    },
    experiences: {
      title: 'Morskie doświadczenia na Rodos',
      navigationLabel: 'Nawigacja karuzeli',
      previousLabel: 'Poprzednie doświadczenia',
      nextLabel: 'Następne doświadczenia',
      browseCta: 'Przeglądaj wszystkie morskie doświadczenia na Rodos →',
      fullCatalogCta: 'Zobacz pełny katalog z filtrami',
    },
  },
  about: {
    h1: 'Jesteśmy Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Od 1998 roku',
      title: 'Poznaj założyciela',
      lead: 'Giorgos R., kapitan i założyciel',
      paragraphs: [
        'Giorgos organizuje morskie doświadczenia na Rodos od 1998 roku. Zaczynając od jednej żaglówki w porcie Mandraki, zbudował Rhodes Rent a Boat w pełną działalność morską obejmującą wycieczki łodzią, prywatne czartery i wynajem jachtów na całym Dodekanezie.',
        'Wciąż pracuje tak, jak na początku: najpierw rozmawia z ludźmi, rozumie czego oczekują od morza, a potem uczciwie łączy ich z odpowiednim lokalnym skipperem lub jednostką — bez wciskania najdroższej opcji.',
      ],
      note: 'Nie jesteśmy marketplace’em rezerwacyjnym. Jesteśmy lokalnym zespołem, z którym goście rozmawiają, zanim wejdą na pokład.',
    },
    philosophy: {
      eyebrow: 'Jak pracujemy',
      title: 'Nasza filozofia',
      quote: 'Rodos poznaje się przez ludzi, nie przez anonimowe oferty.',
      paragraphs: [
        'Ta strona została stworzona przez lokalnych profesjonalistów, którzy od wielu lat pracują na morzu i w turystyce na wyspie. Znamy łodzie, trasy, załogi i ludzi stojących za każdą ofertą.',
        'Wierzymy, że małe lokalne firmy, rodzinne łodzie i doświadczone załogi oferują jedne z najlepszych doświadczeń na wyspie. Dlatego starannie wybieramy oferty i partnerów prezentowanych na tej stronie.',
        'Ta platforma nie opiera się na algorytmach, reklamach ani sponsorowanych listingach. Opiera się na lokalnej wiedzy, realnym doświadczeniu i osobistych rekomendacjach.',
      ],
      highlight: 'Nie próbujemy sprzedać Ci najdroższej wycieczki. Pomagamy wybrać doświadczenie, które naprawdę do Ciebie pasuje.',
      ctaServices: 'Nasze usługi',
      ctaContact: 'Skontaktuj się',
    },
    whyBuilt: {
      eyebrow: 'Nasza misja',
      title: 'Dlaczego stworzyliśmy tę stronę',
      paragraphs: [
        'Ta strona została stworzona przez ludzi, którzy mieszkają i pracują na Rodos i większość życia spędzają na morzu.',
        'Po wielu latach pracy w turystyce i żegludze na wyspie zauważyliśmy, że wielu odwiedzającym trudno zrozumieć różnice między licznymi wycieczkami łodzią i morskimi doświadczeniami dostępnymi na Rodos. W internecie często wyglądają podobnie, ale w rzeczywistości mogą być bardzo różne.',
        'Dlatego postanowiliśmy stworzyć miejsce, gdzie odwiedzający znajdą jasne informacje o morskich doświadczeniach na Rodos oraz odkryją wybrane łodzie, wycieczki i lokalne firmy, które naszym zdaniem oferują bardzo dobrą jakość całości.',
        'Naszym celem nie jest sprzedaż jak największej liczby wycieczek. Naszym celem jest pomoc w znalezieniu właściwego doświadczenia i bezpośrednim kontakcie z lokalnymi ludźmi, którzy kochają to, co robią.',
      ],
      quote: 'Rodos najlepiej doświadcza się od strony morza i mamy nadzieję, że ta strona pomoże Ci odkryć właśnie tę stronę wyspy.',
    },
    story: {
      title: 'Nasza historia',
      subtitle: 'Lokalna historia opowiedziana na wodzie',
      paragraphs: [
        'To, co zaczęło się od jednej żaglówki i pasji do Dodekanezu, rozwinęło się w pełną działalność morską: czartery jachtów, rejsy dzienne, wycieczki łodziami motorowymi, wynajem bez patentu i profesjonalne wsparcie morskie. Ale niezależnie od rozwoju, filozofia pozostała ta sama: najpierw słuchać, zrozumieć potrzeby i potem realizować je na morzu.',
        'Nasi skipperzy znają każdą ukrytą zatokę między Rodos a Kastelorizo. Nasz zespół zna najlepsze tawerny, najspokojniejsze kotwicowiska i idealną porę dnia dla każdego miejsca. Ta wiedza nie pochodzi z przewodnika, tylko z życia spędzonego tutaj.',
      ],
      cta: 'Dowiedz się więcej',
    },
    safety: {
      title: 'Bezpieczeństwo i uczciwość przede wszystkim',
      subtitle: 'Wolimy stracić rezerwację, niż wsadzić Cię na niewłaściwą łódź',
      paragraphs: [
        'Każda jednostka, którą obsługujemy lub polecamy, jest regularnie kontrolowana i w pełni wyposażona w nowoczesny sprzęt bezpieczeństwa. Nasi skipperzy posiadają profesjonalne licencje morskie i są szkoleni na wszystkie warunki. Wchodząc na pokład, możesz czuć spokój — wszystko zostało sprawdzone i przygotowane z dbałością.',
        'Wierzymy również w przejrzyste ceny. Cena, którą podajemy, to cena, którą płacisz: bez ukrytych opłat i niespodzianek w porcie. Jeśli czegoś nie ma w cenie, mówimy o tym od razu. Ta uczciwość jest fundamentem każdej relacji, którą budujemy.',
      ],
      cta: 'Skontaktuj się',
    },
    difference: {
      title: 'Co nas wyróżnia',
      subtitle: 'Bezpośrednio, osobiście i zawsze dostępni',
      paragraphs: [
        'Rezerwując u nas, kontaktujesz się z ludźmi, którzy naprawdę prowadzą łodzie. Bez call center, bez pośredników, bez portali między Tobą a nami. Ty piszesz, my odpowiadamy. Masz pytanie w porcie? Jesteśmy pod telefonem. Taka bezpośredniość jest rzadka w tej branży i nasi goście zauważają to od razu.',
        'Nie wierzymy też w podejście one-size-fits-all. Para szukająca spokojnego rejsu o zachodzie słońca potrzebuje czegoś zupełnie innego niż rodzina z małymi dziećmi czy grupa znajomych chcąca odkrywać ukryte plaże. Słuchamy, doradzamy i dopasowujemy doświadczenie do ludzi.',
      ],
      cta: 'Poznaj usługi',
    },
    experiences: {
      title: 'Kilka rzeczy, które robimy',
      items: [
        { title: 'Rejsy o zachodzie słońca', desc: 'Wybrzeże Rodos w złotej godzinie, drinki na pokładzie, płonące niebo i chwila, którą można po prostu celebrować.' },
        { title: 'Island hopping', desc: 'Popłyń z Rodos na Symi, Halki lub Tilos. Każda wyspa ma własny charakter, a my znamy je wszystkie bardzo dobrze.' },
        { title: 'Czartery jachtów', desc: 'Twój jacht, Twój skipper, Twój plan. Najbardziej osobisty sposób na odkrywanie Dodekanezu.' },
        { title: 'Morskie przygody', desc: 'Snorkeling nad ukrytymi rafami, pływanie w zatokach bez dojazdu drogą albo po prostu unoszenie się w krystalicznie czystej wodzie.' },
      ],
    },
    ctaCards: {
      charter: { title: 'Czartery jachtów', desc: 'Twój jacht, Twoja trasa, Twoje tempo. Powiedz nam, czego chcesz, a my to zorganizujemy.', cta: 'Odkryj więcej' },
      tours: { title: 'Wycieczki łodzią', desc: 'Dołącz do rejsu dziennego, wynajmij łódź motorową lub wybierz łódź ze skipperem. Mamy opcje dla każdego miłośnika morza.', cta: 'Odkryj więcej' },
    },
  },
  contact: {
    formIntro:
      'W razie pytań lub informacji o naszych usługach wypełnij poniższy formularz — odpowiemy tak szybko, jak to możliwe.',
    infoIntro:
      'Nasz zespół jest dostępny codziennie telefonicznie, przez WhatsApp lub e-mail. Odpowiadamy osobiście z jasnymi poradami, uczciwymi cenami i łodziami, które dobrze znamy.',
    location: {
      eyebrow: 'Jak nas znaleźć',
      title: 'Jak dotrzeć do naszego biura w mieście Rodos',
      text: 'Nasze biuro znajduje się przy Ionos Dragoumi 39, w centrum miasta Rodos. Wpadnij po poradę, dokumenty lub instruktaż bezpieczeństwa — stąd poprowadzimy Cię do łodzi na odpłynięcie.',
      listItems: [
        '<strong>Z lotniska Rodos (RHO):</strong> 14 km / 25 minut samochodem. Możemy zorganizować prywatny transfer, zob. <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>Z portu wycieczkowego (Akandia / Kolona):</strong> 5 minut taksówką lub 15 minut spacerem wzdłuż promenady.',
        '<strong>Ze Starego Miasta:</strong> przejdź przez Bramę Wolności (Eleftherias Pyli); Ionos Dragoumi biegnie przez Nowe Miasto, kilka minut spacerem w głąb.',
        '<strong>Parking:</strong> publiczne parkingi przy Nowym Rynku (Nea Agora) i na placu Eleftherias, oba w kilka minut spacerem.',
        '<strong>Wypłynięcia łodzią:</strong> najpierw spotykamy się w biurze, potem idziemy razem na nabrzeże, abyś dokładnie wiedział, gdzie wejść na pokład.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Adres',
          phone: 'Telefon',
          whatsapp: 'WhatsApp',
          email: 'E-mail',
          hours: 'Godziny',
        },
        hoursValue: 'Dostępni 24/7, telefon i wiadomości',
        mapsLink: 'Otwórz w Google Maps',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rodos',
    },
  },
  thingsToDo: {
    h1: 'Wszystkie doświadczenia łodziowe na Rodos',
    hiddenH2: 'Wszystkie zatwierdzone doświadczenia łodziowe na Rodos',
    schemaName: 'Wszystkie doświadczenia łodziowe na Rodos: przeglądaj i filtruj',
    schemaDescription:
      'Przeglądaj wszystkie zatwierdzone doświadczenia łodziowe na Rodos — rejsy żaglowe, wycieczki dzienne, prywatne łodzie, wycieczki katamaranem i wynajem bez patentu. Porównuj i wybieraj.',
    emptyTitle: 'Brak dostępnych wycieczek',
    emptyText:
      'Obecnie dodajemy nowe doświadczenia łodziowe na tej stronie. Wróć wkrótce lub skontaktuj się z nami po osobiste rekomendacje.',
  },
};

export type TourCategory = 'cyklo' | 'moto' | 'maraton' | 'turistika' | 'kanoistika' | 'trail'

export interface Tour {
  id: string
  slug: string
  category: TourCategory
  categoryLabel: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  location: string
  country: string
  duration: string
  difficulty: 'Lehká' | 'Střední' | 'Náročná' | 'Extrémní'
  distance: string
  startDate: string
  endDate: string
  maxParticipants: number
  included: string[]
  notIncluded: string[]
  itinerary: { day: number; title: string; description: string }[]
  highlights: string[]
  isEurope: boolean
  isFeatured: boolean
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'sumavska-cyklostezka',
    category: 'cyklo',
    categoryLabel: 'Cykloturistika',
    title: 'Šumavská cyklostezka',
    subtitle: 'Čtyři dny přírodou Národního parku Šumava',
    description: 'Epická jízda po hřebenech Šumavy s výhledy na nekonečné lesy, rašeliniště a tajemná jezera. Ideální pro zdatné cyklisty hledající napojení s divokou přírodou.',
    longDescription: 'Šumava — srdce Evropy a největší přírodní rezervace Česka — vás pohltí hned od prvních metrů. Naše autorská trasa vede po nejkrásnějších úsecích hřebenové cesty, místy přes kamenitou single‑trackovou stezku, místy po tiché lesní asfaltce bez dopravy. Během čtyř dnů přejdete většinu centrální Šumavy, přespíte v horských chatách a každý večer si vychutnáte domácí jihočeskou kuchyni. Průvodce vás provede historií krajiny i jejími ekologickými zajímavostmi. Náročnost trasy je středně vysoká — denně ujede 45–65 km s převýšením 600–900 m.',
    image: '/images/tour-cycling.jpg',
    location: 'Železná Ruda — Horní Planá',
    country: 'Česká republika',
    duration: '4 dny / 3 noci',
    difficulty: 'Střední',
    distance: '210 km',
    startDate: '2026-05-15',
    endDate: '2026-05-18',
    maxParticipants: 12,
    included: ['Ubytování v horských chatách', 'Snídaně a večeře', 'Průvodce na celou trasu', 'Přeprava zavazadel', 'GPS trasa a mapa', 'Pojištění'],
    notIncluded: ['Kolo (možnost pronájmu +990 Kč)', 'Obědy a nápoje', 'Doprava na start'],
    highlights: ['Výhled z vrcholu Plechého', 'Koupání v Plešném jezeře', 'Zlatá stezka — historická obchodní cesta', 'Západ slunce nad Šumavou z Boubína'],
    itinerary: [
      { day: 1, title: 'Železná Ruda → Kvilda', description: 'Start u hraniční hory, přejezd rašelinišť a první vrchol.' },
      { day: 2, title: 'Kvilda → Borová Lada', description: 'Hřebenová jízda s výhledem do Bavorska, zastávka u pramene Vltavy.' },
      { day: 3, title: 'Borová Lada → Zátoň', description: 'Strmý sjezd do údolí Vltavy, etapa plná adrenalinu.' },
      { day: 4, title: 'Zátoň → Horní Planá', description: 'Závěrečná etapa kolem Lipna, piknik na břehu.' },
    ],
    isEurope: false,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'alpska-mototura',
    category: 'moto',
    categoryLabel: 'Mototuristika',
    title: 'Alpská mototura',
    subtitle: 'Osm průsmyků v srdci Alp',
    description: 'Legendární alpské průsmyky na dvou kolech — svrbí tě ruka na plynu? Vyjeď s námi přes nejkrásnější silnice Rakouska, Švýcarska a Itálie.',
    longDescription: 'Alpy jsou stvořeny pro motorkáře. Tento osmidení zájezd vás provede osmi ikonickými průsmyky, od výšin přes 2800 m n. m. po malebná alpská údolí. Každý den čeká jiná scenérie — tyrkysová jezera, středověké vesničky a silnice, které vypadají jako z reklamního spotu. Skupina maximálně 10 jezdců, zkušený vedoucí vždy v čele. Ubytování v rodinných penzionech s garáží pro motorky. Denní přejezd 200–300 km.',
    image: '/images/tour-moto.jpg',
    location: 'Innsbruck — Lugano',
    country: 'Alpy (AT/CH/IT)',
    duration: '8 dní / 7 nocí',
    difficulty: 'Střední',
    distance: '1 950 km',
    startDate: '2026-06-20',
    endDate: '2026-06-27',
    maxParticipants: 10,
    included: ['Ubytování v penzionech', 'Snídaně', 'Vedoucí jezdec', 'Roadbook a GPS body', 'Pojištění záchranné služby', 'Společná večeře 3×'],
    notIncluded: ['Motorka a benzín', 'Obědy', 'Pojištění motorky', 'Letenka/jízdenka na start'],
    highlights: ['Průsmyk Grossglockner', 'Silniční smyčky Stelvio', 'Jezerní krajina Engadinu', 'Závěr v Luganu u jezera'],
    itinerary: [
      { day: 1, title: 'Innsbruck → Lienz', description: 'Rozjezdový den přes Brenner a první alpské průsmyky.' },
      { day: 2, title: 'Grossglockner Hochalpenstrasse', description: 'Hlavní hvězda výpravy — 48 km legend.' },
      { day: 3, title: 'Lienz → Cortina', description: 'Dolomity a Tři Zuby na obzoru.' },
      { day: 4, title: 'Cortina → Bormio', description: 'Stelvio — jedna z nejvyšších průjezdných silnic Evropy.' },
      { day: 5, title: 'Bormio → St. Moritz', description: 'Engadin, tyrkysová jezera, věčný sníh.' },
      { day: 6, title: 'St. Moritz → Andermatt', description: 'Přes Maloja a Gotthard.' },
      { day: 7, title: 'Andermatt → Lugano', description: 'Italské Švýcarsko, palmy a jezero.' },
      { day: 8, title: 'Volný den Lugano', description: 'Procházka, koupání, rozloučení.' },
    ],
    isEurope: true,
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'prazsky-ultramaraton',
    category: 'maraton',
    categoryLabel: 'Maraton',
    title: 'Středočeský půlmaraton',
    subtitle: 'Historické trasy kolem Prahy, 21 km na kamenných stezkách',
    description: 'Půlmaraton vinoucí se historickými vesnicemi a lesnatými kopci středních Čech. Trasa kombinuje polní cesty, lesní stezky a malebné aleje.',
    longDescription: 'Vybíráme každý rok nový okruh kolem historického jádra středních Čech. Letošní ročník vás provede krajinou kdysi obývanou slovanskými kmeny — přes skalní útvary, mlýnská náhony a barokní kapličky. Start a cíl v jedné obci, plné zázemí na trase. Dostupné pro každého, kdo pravidelně běhá. Kategorie 10 km, 21 km a 42 km.',
    image: '/images/tour-marathon.jpg',
    location: 'Středočeský kraj',
    country: 'Česká republika',
    duration: '2 dny / 1 noc',
    difficulty: 'Střední',
    distance: '21 km',
    startDate: '2026-09-12',
    endDate: '2026-09-13',
    maxParticipants: 80,
    included: ['Startovné', 'Citizen chip', 'Zásobovací stanice každé 3 km', 'Finišerská medaile', 'Startovní balíček', 'Sprchy a šatna'],
    notIncluded: ['Ubytování (doporučujeme rezervaci v okolí)', 'Doprava'],
    highlights: ['Start při východu slunce', 'Zásobovací stanice s domácí kuchyní', 'Živá hudba v cíli', 'Panoramatický výhled na Českou krajinu'],
    itinerary: [
      { day: 1, title: 'Registrace a příprava', description: 'Vyzvednutí čísel, prohlídka trati, večerní briefing.' },
      { day: 2, title: 'Den závodu', description: 'Ranní start, zásobování, slavnostní vyhlášení.' },
    ],
    isEurope: false,
    isFeatured: false,
  },
  {
    id: '4',
    slug: 'krkonose-horska-turistika',
    category: 'turistika',
    categoryLabel: 'Horská turistika',
    title: 'Krkonošský hřeben',
    subtitle: 'Přejezd celého hřebene — 5 dní, 120 km',
    description: 'Kompletní přechod Krkonoš od hranice na západě až po Sněžku a sestup do Pece. Každý den odměna v podobě dechberoucích výhledů.',
    longDescription: 'Krkonoše jsou symbolem české horské turistiky. Naše pětidení přejezdová trasa vede po červené hřebenové turistické trase, která je zároveň hranicí mezi Českem a Polskem. Průvodce skupinu povede přes nejkrásnější místa — kleče, karové jezírka, rašelinné louky. Ubytování v horských boudách s tradiční krkonošskou stravou. Maximálně 8 účastníků pro zachování intimity skupiny.',
    image: '/images/tour-hiking.jpg',
    location: 'Harrachov — Pec pod Sněžkou',
    country: 'Česká republika',
    duration: '5 dní / 4 noci',
    difficulty: 'Náročná',
    distance: '120 km',
    startDate: '2026-07-08',
    endDate: '2026-07-12',
    maxParticipants: 8,
    included: ['Ubytování v horských boudách', 'Polopenze', 'Průvodce', 'Pojištění v horách', 'Detailní mapa', 'Přeprava na start'],
    notIncluded: ['Turistická výbava', 'Přeprava domů z Pece', 'Kapesné na nápoje'],
    highlights: ['Výstup na Sněžku (1603 m)', 'Vodopády Mumlavy', 'Sunrise nad oblačností', 'Luční boudy — living history'],
    itinerary: [
      { day: 1, title: 'Harrachov → Vosecká bouda', description: 'Rozcvičení a první průhledy.' },
      { day: 2, title: 'Vosecká → Špindlerova bouda', description: 'Přes Lysou horu, nejdivočejší úsek.' },
      { day: 3, title: 'Špindlerova → Luční bouda', description: 'Travnaté hřebeny, historické boudy.' },
      { day: 4, title: 'Luční bouda → Sněžka', description: 'Vrcholový den — Sněžka z jihu.' },
      { day: 5, title: 'Sněžka → Pec pod Sněžkou', description: 'Sestup, oslava a návrat.' },
    ],
    isEurope: false,
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'vltava-kanoistika',
    category: 'kanoistika',
    categoryLabel: 'Kanoistika',
    title: 'Vltavský proud',
    subtitle: 'Sedm dní na nejkrásnější řece Česka',
    description: 'Sjezd Vltavy z Vyššího Brodu až po Písek — peřeje, klidná jezera, táboráky na břehu a hvězdné nebe nad stanem.',
    longDescription: 'Vltava je nejdelší řekou Česka a nabízí nespočet tváří — od divoké a kamenité v horních partiích po pomalou a meandrovitou před Prahou. Naše sedmidenní trasa využívá nejkrásnější úsek řeky. Plujeme na nafukovacích kanoích, s plně vybaveným táborovým zázemím. Každý večer stanujeme na legálních táborištích přímo u vody. Průvodce se stará o logistiku, historii a vaření.',
    image: '/images/tour-kayak.jpg',
    location: 'Vyšší Brod — Písek',
    country: 'Česká republika',
    duration: '7 dní / 6 nocí',
    difficulty: 'Lehká',
    distance: '185 km řeky',
    startDate: '2026-07-25',
    endDate: '2026-07-31',
    maxParticipants: 14,
    included: ['Kánoe a veškerý plovací materiál', 'Stan a karimatka', 'Tábořiště', 'Průvodce', 'Snídaně a večeře', 'Přeprava kanoí'],
    notIncluded: ['Spací pytel', 'Obědy a snacky', 'Doprava na start/z cíle'],
    highlights: ['Průjezd soutěskami Čertovy proudy', 'Zlatá Koruna — klášter na skále', 'Hvězdná obloha bez světelného znečištění', 'Táboráky s výhledem na řeku'],
    itinerary: [
      { day: 1, title: 'Vyšší Brod → Horní Planá', description: 'Přivítání s řekou, první peřeje.' },
      { day: 2, title: 'Horní Planá → Frymburk', description: 'Lipno — přenesení přes přehradu.' },
      { day: 3, title: 'Frymburk → Vyšný', description: 'Divoká voda, Čertovy proudy.' },
      { day: 4, title: 'Vyšný → Zlatá Koruna', description: 'Klidné části, návštěva kláštera.' },
      { day: 5, title: 'Zlatá Koruna → Písek', description: 'Závěrečné kilometry ke gotickému městu.' },
      { day: 6, title: 'Volný den Písek', description: 'Kamenny most, relaxace.' },
      { day: 7, title: 'Odjezd', description: 'Snídaně u řeky a rozloučení.' },
    ],
    isEurope: false,
    isFeatured: false,
  },
  {
    id: '6',
    slug: 'pyrenejsky-trail',
    category: 'trail',
    categoryLabel: 'Trail Running',
    title: 'Pyrenejský trail',
    subtitle: 'Divoký trail přes hraniční vrcholy Pyrenejí',
    description: 'Čtyřdenní trail s každodenním překonáváním výškových rozdílů přes 2000 m. Pro výkonné běžce s touhou po extrémní přírodní scenérii.',
    longDescription: 'Pyreneje — přirozená zeď mezi Francií a Španělskem — lákají nejnáročnější trail runnery z celé Evropy. Naše autorská čtyřdenní trasa vede po méně frekventovaných hřebenech na francouzsko-španělském pomezí. Trasy vedou přes hory přes 2500 m, kolem horských jezer a přes pastevní louky plné divoce žijící zvěře. Nocujeme v horských refugios. Podpora na každém vrcholu, zásobovací vůz v údolích.',
    image: '/images/tour-trail.jpg',
    location: 'Saint-Jean-Pied-de-Port — Candanchú',
    country: 'Francie / Španělsko',
    duration: '4 dny / 3 noci',
    difficulty: 'Extrémní',
    distance: '98 km',
    startDate: '2026-08-14',
    endDate: '2026-08-17',
    maxParticipants: 8,
    included: ['Ubytování v horských útulnách', 'Strava na trase', 'Průvodce', 'Podpora na trase', 'GPS tracker', 'Pojištění horské záchranné služby'],
    notIncluded: ['Letenka / doprava', 'Osobní výbava', 'Kineziologické pásky a doplňky stravy'],
    highlights: ['Výstup na Pic du Midi d\'Ossau (2885 m)', 'Noční běh pod hvězdami', 'Malebná údolí Bearn', 'Tajný průsmyk bez turistů'],
    itinerary: [
      { day: 1, title: 'Saint-Jean → Roncesvalles', description: '24 km s 1400 m výstupu přes Col de Bentarte.' },
      { day: 2, title: 'Roncesvalles → Ochagavía', description: 'Lesní stezky Irati, 28 km.' },
      { day: 3, title: 'Ochagavía → Ansó', description: 'Přejezd do španělských Pyrenejí, 26 km.' },
      { day: 4, title: 'Ansó → Candanchú', description: 'Finálový výstup, 20 km výhled na celé Pyreneje.' },
    ],
    isEurope: true,
    isFeatured: true,
  },
]

export const getCategoryColor = (category: TourCategory): string => {
  const map: Record<TourCategory, string> = {
    cyklo: '#f97316',
    moto: '#3b82f6',
    maraton: '#22c55e',
    turistika: '#a78bfa',
    kanoistika: '#06b6d4',
    trail: '#f43f5e',
  }
  return map[category]
}

export const CATEGORIES = [
  { value: 'all', label: 'Všechny' },
  { value: 'cyklo', label: 'Cykloturistika' },
  { value: 'moto', label: 'Mototuristika' },
  { value: 'maraton', label: 'Maraton' },
  { value: 'turistika', label: 'Horská turistika' },
  { value: 'kanoistika', label: 'Kanoistika' },
  { value: 'trail', label: 'Trail Running' },
]

export const LOCATIONS = [
  { value: 'all', label: 'Celý svět' },
  { value: 'cz', label: 'Česká republika' },
  { value: 'europe', label: 'Evropa' },
]

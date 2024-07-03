import {
  BriefcaseIcon,
  Building2Icon,
  FacebookIcon,
  FileTextIcon,
  InstagramIcon,
  MapIcon,
  RefreshCwIcon,
  SettingsIcon,
  TwitterIcon,
} from "@/components/Icons";

export const headerLinks = [
  {
    label: "O Nas",
    route: "/#about",
  },
  {
    label: "Usługi",
    route: "/#services",
  },
  {
    label: "Krok po kroku",
    route: "/#stepbystep",
  },
  {
    label: "Projekty",
    route: "/#projects",
  },
  {
    label: "Współprace",
    route: "/#partners",
  },
  {
    label: "Opinie",
    route: "/#testimonials",
  },
];

export const team = [
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
];

export const coop = [
  { name: "firma 1", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 2", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 3", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 4", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 5", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 6", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 7", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 8", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 9", logo: "/assets/icons/yourlogo.svg" },
];

export const testimonials = [
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "Firma",
    testimonial:
      "This product has been a game-changer for our business. The features are top-notch and the support team is incredibly responsive.",
  },
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "",
    testimonial:
      "I've tried many similar products, but this one stands out with its intuitive interface and powerful features. Highly recommended!",
  },
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "",
    testimonial:
      "This product has streamlined our workflow and helped us deliver projects more efficiently. I highly recommend it to any team.",
  },
];

export const projectTypes = [
  {
    name: "Wnętrza",
    image: "/assets/images/house-inside.jpg",
    href: "/projects/insides",
  },
  {
    name: "Budynki mieszkalne",
    image: "/assets/images/house1-1.jpg",
    href: "/projects/houses",
  },
  {
    name: "Budynki usługowe i przemysłowe",
    image: "/assets/images/house2-1.jpg",
    href: "/projects/offices",
  },
  {
    name: "Galeria",
    image: "/assets/images/house3-1.jpg",
    href: "/projects/gallery",
  },
];

export const projects = {
  insides: [
    {
      images: [
        "/assets/images/inside1-1.jpg",
        "/assets/images/inside1-2.jpg",
        "/assets/images/inside1-3.jpg",
        "/assets/images/inside1-4.jpg",
      ],
      label: "Wnętrze 1",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/inside2-1.jpg",
        "/assets/images/inside2-2.jpg",
        "/assets/images/inside2-3.jpg",
        "/assets/images/inside2-4.jpg",
      ],
      label: "Wnętrze 2",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/inside3-1.jpg",
        "/assets/images/inside3-2.jpg",
        "/assets/images/inside3-3.jpg",
        "/assets/images/inside3-4.jpg",
      ],
      label: "Wnętrze 3",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
  ],
  houses: [
    {
      images: [
        "/assets/images/house1-1.jpg",
        "/assets/images/house1-2.jpg",
        "/assets/images/house1-3.jpg",
        "/assets/images/house1-4.jpg",
      ],
      label: "Budynek 1",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/house2-1.jpg",
        "/assets/images/house2-2.jpg",
        "/assets/images/house2-3.jpg",
        "/assets/images/house2-4.jpg",
      ],
      label: "Budynek 2",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
  ],
  offices: [
    {
      images: [
        "/assets/images/inside1-1.jpg",
        "/assets/images/inside1-2.jpg",
        "/assets/images/inside1-3.jpg",
        "/assets/images/inside1-4.jpg",
      ],
      label: "Wnętrze 1",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/inside2-1.jpg",
        "/assets/images/inside2-2.jpg",
        "/assets/images/inside2-3.jpg",
        "/assets/images/inside2-4.jpg",
      ],
      label: "Wnętrze 2",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/inside3-1.jpg",
        "/assets/images/inside3-2.jpg",
        "/assets/images/inside3-3.jpg",
        "/assets/images/inside3-4.jpg",
      ],
      label: "Wnętrze 3",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
  ],
  gallery: [
    {
      images: [
        "/assets/images/house1-1.jpg",
        "/assets/images/house1-2.jpg",
        "/assets/images/house1-3.jpg",
        "/assets/images/house1-4.jpg",
      ],
      label: "Budynek 1",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
    {
      images: [
        "/assets/images/house2-1.jpg",
        "/assets/images/house2-2.jpg",
        "/assets/images/house2-3.jpg",
        "/assets/images/house2-4.jpg",
      ],
      label: "Budynek 2",
      details: {
        livingUA: "1000",
        totalUA: "2000",
        buildingArea: "3000",
        volume: "4000",
        localization: "Warszawa",
        price: "5000",
        description:
          "Ten nowoczesny dom jednorodzinny to połączenie elegancji, funkcjonalności i komfortu. Zaprojektowany z myślą o rodzinie, oferuje przestronne wnętrza i otwarte przestrzenie, które sprzyjają wspólnemu spędzaniu czasu. Jasne, naturalnie doświetlone pomieszczenia oraz starannie dobrane materiały tworzą harmonijną całość, która zachwyca zarówno estetyką, jak i praktycznością.",
      },
    },
  ],
};

export const offers = [
  {
    title: "Projekty indywidualne",
    description:
      "Budowa domu jednorodzinnego musi być przemyślana. w cenie projektu domu otrzymasz profesjonalne konsultacje doświadczonego architekta.",
    icon: (
      <BriefcaseIcon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Załatwianie formalności",
    description:
      "Pomagamy naszym Klientom w załatwianiu spraw w urzędach, opcjonalnie nadzorujemy procesy wydawania warunków zabudowy oraz pozwoleń na budowę.",
    icon: (
      <FileTextIcon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Budynki usługowe",
    description:
      "Posiadamy doświadczenie w projektowaniu budynków handlowo - usługowych oraz biurowych. Zapraszamy przedsiębiorców do współpracy.",
    icon: (
      <Building2Icon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Adaptacje projektów",
    description:
      "Oferujemy usługę adaptacji zakupionych przez Państwa projektów do działki inwestorów na terenie podlaskim.",
    icon: (
      <SettingsIcon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Mapy geodezyjne",
    description:
      "Dzięki współpracy z doświadczonymi geodetami oferujemy usługi w zakresie realizacji map do celów projektowych oraz wyznaczenia budynku na działce.",
    icon: (
      <MapIcon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Modernizacje i rozbudowy",
    description:
      "Wykonujemy również projekty indywidualne adaptacji starszych budynków oraz ich modernizacji, przebudowy czy zmian sposobu użytkowania.",
    icon: (
      <RefreshCwIcon className="size-10 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
];

export const projectSteps = [
  {
    title: "Projekt 1",
    steps: [
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
    ],
  },
  {
    title: "Projekt 2",
    steps: [
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
      "Krok",
    ],
  },
];

export const footerLinks = [
  {
    href: "https://www.facebook.com/",
    name: "Facebook",
    icon: <FacebookIcon className="size-6" />,
  },
  {
    href: "https://x.com/home?lang=pl",
    name: "X",
    icon: <TwitterIcon className="size-6" />,
  },
  {
    href: "https://www.instagram.com/",
    name: "Instagram",
    icon: <InstagramIcon className="size-6" />,
  },
];

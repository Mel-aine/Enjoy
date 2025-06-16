import image1 from '@/assets/imagesRestaurants/osan/image1.jpg';
import cerise from '@/assets/imageTravel/cerise/cerise.jpg';
import cerise1 from '@/assets/imageTravel/cerise/cerise1.jpg';
import men1 from '@/assets/imageTravel/agence/men1.jpg';
import buca1 from '@/assets/imageTravel/agence/buca1.jpg';
import men from '@/assets/imageTravel/agence/men.jpg';
import buca from '@/assets/imageTravel/agence/buca.jpg';
import mont2 from '@/assets/hotel/mont2.jpg';
import mont1 from '@/assets/hotel/mont1.jpg';
import djeuga from '@/assets/hotel/djeuga.jpg';


export const Categories = [
  {
    id: "2",
    label: "Restaurants",
    //route: "/recherche/restaurants",
    icon: "fa fa-utensils",
    link: "/hotels",
  },
  {
    id: "3",
    label: "Shopping",
    // route: "/recherche/shopping",
    icon: "fa fa-shopping-bag",
    link: "/hotels",
  },
  {
    id: "4",
    link: "/hotels",
    label: "Vie nocturne",
    icon: "fa fa-glass-cheers",
  },
  {
    id: "5",
    link: "/hotels",
    label: "Sports & Activités de loisirs",
    icon: "fa fa-football-ball",
  },
  {
    id: "6",
    link: "/hotels",
    label: "Salons de beauté & Spas",
    icon: "fa fa-spa",
  },
  {
    id: "7",
    link: "/hotels",
    label: "Automobile",
    icon: "fa fa-bus",

  },

  {
    id: "8",
    link: "/hotels",
    label: "Maisons & Travaux",
    icon: "fa fa-home",

  },
  {
    id: "9",
    link: "/hotels",
    label: "Cafés & Thés",
    icon: "fa fa-coffee",

  },
  {
    id: "10",
    link: "/hotels",
    label: "Alimentations",
    icon: "fa fa-apple-alt",

  },
  {
    id: "11",
    link: "/hotels",
    label: "Art & Loisirs",
    icon: "fa fa-palette",
    places: [
      {
        id: "PLACE-LOI-001",
        name: "Art",
        route: "/recherche/art/PLACE-LOI-001",
        description: "description.",
        address: "Avenue Kennedy, Yaoundé",
        location: "3.8756° N, 11.5189° E",
        phone: "+237695678901",
        email: "contact@art.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "Consultation: 5,000 FCFA",
        status: "active",
        category: ["Art"],
        images: [image1, image1, image1]
      },]
  },
  {
    id: "12",
    link: "/hotels",
    label: "Santé & Médical",
    icon: "fa fa-briefcase-medical",
    places: [
      {
        id: "PLACE-SEC-001",
        name: "Hôpital Central",
        route: "/recherche/sante/PLACE-SEC-001",
        description: "Centre hospitalier offrant des soins d'urgence et des services médicaux spécialisés.",
        address: "Avenue Kennedy, Yaoundé",
        location: "3.8756° N, 11.5189° E",
        phone: "+237695678901",
        email: "contact@hopitalcentral.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "Consultation: 5,000 FCFA",
        status: "active",
        category: ["Health"],
        images: [image1, image1, image1]
      },]
  },
  {
    id: "13",
    link: "/hotels",
    label: "Services destiné aux prof",
    icon: "fa fa-shield-alt",
    places: [
      {
        id: "PLACE-SERV-001",
        name: "Services",
        route: "/recherche/services/PLACE-SERV-001",
        description: "description.",
        address: "Avenue Kennedy, Yaoundé",
        location: "3.8756° N, 11.5189° E",
        phone: "+237695678901",
        email: "contact@services.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "5,000 FCFA",
        status: "active",
        category: ["Services"],
        images: [image1, image1, image1]
      },]
  },
  {
    id: "14",
    link: "/hotels",
    label: "Animaux de companie",
    icon: "fa fa-paw",
    places: [
      {
        id: "PLACE-ANI-001",
        name: "Animaux",
        route: "/recherche/animaux/PLACE-ANI-001",
        description: "description.",
        address: "Avenue Kennedy, Yaoundé",
        location: "3.8756° N, 11.5189° E",
        phone: "+237695678901",
        email: "contact@animals.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "5,000 FCFA",
        status: "active",
        category: ["Animals"],
        images: [image1, image1, image1]
      },]
  },
  {
    id: "15",
    link: "/hotels",
    label: "Immobilier",
    icon: "fa fa-home",
    places: [
      {
        id: "PLACE-IMM-001",
        name: "Building",
        route: "/recherche/immobilier/PLACE-IMM-001",
        description: "Agence proposant des liaisons interurbaines confortables et sécurisées.",
        address: "Odza, Yaoundé",
        location: "3.8589° N, 11.5170° E",
        phone: "+237692345678",
        email: "contact@express.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "7,500 FCFA",
        status: "active",
        category: ["Real Estate"],
        images: [image1, image1, image1]
      },
    ]
  },

  {
    id: "16",
    link: "/hotels",
    label: "Hôtels & Séjours",
    icon: "fa fa-hotel",
    places: [
      {
        id: "PLACE-HOTEL-001",
        name: "Hôtel Mont Fébé",
        route: "/all_service/PLACE-HOTEL-001",
        description: "Un hôtel luxueux avec une vue panoramique sur Yaoundé.",
        address: "Mont Fébé, Yaoundé",
        rating: 4,
        localisation: "Yaoundé",
        phone: "+237690987654",
        email: "contact@montfebe.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "saturday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "08h00", close: "14h00" }
        ],
        min_price: "50,000 FCFA",
        open_until: "01h00 ",
        category: ["Tourist Sites", "Habitat"],
        images: [mont1, mont2]
      },
      {
        id: "PLACE-HOTEL-002",
        name: "Hilton Yaoundé",
        route: "/all_service/PLACE-HOTEL-002",
        description: "Hôtel 5 étoiles avec restaurants raffinés, piscine et centre de remise en forme.",
        address: "Centre-ville, Yaoundé",
        rating: 5,
        location: "3.8640° N, 11.5174° E",
        phone: "+237677654321",
        email: "contact@hiltonyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "saturday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "08h00", close: "14h00" }
        ],
        min_price: "80,000 FCFA",
        open_until: "01h00 ",
        category: ["Hotels and Accommodations"],
        images: [mont1]
      },
      {
        id: "PLACE-HOTEL-003",
        name: "Djeuga Palace Hotel",
        route: "/all_service/PLACE-HOTEL-003",
        description: "Situé au Quartier Warda à Yaoundé à environ 21 km de l'aéroport international de Yaoundé Nsimalen, avec un service de navette aéroport disponible sur demande pour plus de commodité",
        address: "Warda, Yaoundé, CM",
        rating: 5,
        location: "AVENUE NARVICK",
        phone: "+237677654321",
        email: "contact@hiltonyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "saturday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "08h00", close: "14h00" }
        ],
        min_price: "80,000 FCFA",
        open_until: "01h00 ",
        category: ["Hotels and Accommodations", "Hotels"],
        images: [djeuga]
      },

    ]

  },
  {
    id: "17",
    link: "/hotels",
    label: "Services Locaux",
    icon: "fa fa-map-marker-alt",
    places: [
      {
        id: "PLACE-ENT-001",
        name: "services locaux",
        route: "/recherche/local/PLACE-ENT-001",
        description: "Un cinéma moderne proposant les derniers films internationaux et locaux.",
        address: "Centre-ville, Yaoundé",
        location: "3.8666° N, 11.5167° E",
        phone: "+237690123456",
        email: "contact@cinemaeden.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "5,000 FCFA",
        status: "active",
        category: ["Tourism"],
        images: [image1, image1, image1]
      },
    ]
  },
  {
    id: "18",
    link: "/hotels",
    label: "Organisation d événements",
    icon: "fa fa-calendar-alt",
    places: [
      {
        id: "PLACE-TOUR-001",
        name: "evenement",
        route: "/recherche/tourisme/PLACE-TOUR-001",
        description: "Un lieu emblématique retraçant l'histoire et la culture camerounaise.",
        address: "Boulevard du 20 Mai, Yaoundé",
        location: "3.8741° N, 11.5174° E",
        phone: "+237690654321",
        email: "contact@museenational.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "2,000 FCFA",
        status: "active",
        category: ["Tourism"],
        images: [image1, image1, image1]
      },

    ]
  },

  {
    id: "19",
    link: "/hotels",
    label: "Services publics & gouvernement",
    icon: "fa fa-landmark",
    places: [
      {
        id: "PLACE-ADMIN-001",
        name: "Mairie de Yaoundé",
        route: "/recherche/public/PLACE-ADMIN-001",
        description: "Institution publique gérant les affaires administratives et municipales de la ville.",
        address: "Hôtel de Ville, Yaoundé",
        location: "3.8647° N, 11.5135° E",
        phone: "+237693456789",
        email: "contact@mairieyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "Variable",
        status: "active",
        category: ["public"],
        images: [image1, image1, image1]
      },

    ]
  },


  {
    id: "20",
    link: "/hotels",
    label: "Services financiers",
    icon: "fa fa-chart-line",
    places: [
      {
        id: "PLACE-FIN-001",
        name: "Services",
        route: "/recherche/finance/PLACE-FIN-001",
        description: "description",
        address: "Hôtel de Ville, Yaoundé",
        location: "3.8767° N, 11.5198° E",
        phone: "+237696789012",
        email: "contact@mairieyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "N/A",
        status: "active",
        category: ["Tourism"],
        images: [image1, image1, image1]
      }
    ]
  },
  {
    id: "21",
    label: "Formation & Enseignement",
    icon: "fa fa-pencil-alt",
    link: "/hotels",
    places: [
      {
        id: "PLACE-FORM-001",
        name: "Services",
        route: "/recherche/formation/PLACE-FORM-001",
        description: "description",
        address: "Hôtel de Ville, Yaoundé",
        location: "3.8767° N, 11.5198° E",
        phone: "+237696789012",
        email: "contact@yaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "N/A",
        status: "active",
        category: ["Tourism"],
        images: [image1, image1, image1]
      }
    ]
  },
  {
    id: "22",
    label: "Organisation religieuse",
    icon: "fa fa-church",
    link: "/hotels",
    places: [
      {
        id: "PLACE-RELI-001",
        name: "Services",
        route: "/recherche/religion/PLACE-RELI-001",
        description: "description",
        address: "Hôtel de Ville, Yaoundé",
        location: "3.8767° N, 11.5198° E",
        phone: "+237696789012",
        email: "contact@yaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "N/A",
        status: "active",
        category: ["Church"],
        images: [image1, image1, image1]
      }
    ]
  },
  {
    id: "23",
    label: "Travel",
    icon: "fa fa-bus",
    link: "/hotels",
    places: [
      {
        id: "PLACE-TRAV-001",
        name: "Cerise Express Vip Yaoundé",
        route: "/travel/PLACE-TRAV-001",
        description: "Agence de transport interurbain haut de gamme au Cameroun, CERISES EXPRESS VIP, c'est la classe !!!",
        address: "Tsinga, Carrefour Fecafoo, Yaoundé, CM",
        location: "Tsinga, Carrefour Fecafoo",
        rating: 2,
        phone: "+237696789012",
        email: "contact@mairieyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        open_until: "01h00 ",
        category: ["Transportation", "Travel agency"],
        images: [cerise1, cerise]

      },
      {
        id: "PLACE-TRAV-002",
        name: "Men Travel Yaoundé",
        route: "/travel/PLACE-TRAV-002",
        description: "MEN TRAVEL est une agence de voyage, qui vous offre une autre vision du voyage. Le numéro mobile de paiement est donné via un appel standard et il s'agit en effet d'un code marchand avec pour identifiant MEN TRAVEL. Soyez vigilants",
        address: " Nylon bastos, Yaoundé, CM",
        location: "Nylon bastos face l’agence d’électrification rurale",
        phone: "+237696789012",
        rating: 2,
        email: "contact@mairieyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        open_until: "01h00 ",
        category: ["Transportation", "Travel agency"],
        images: [men1, men]

      },
      {
        id: "PLACE-TRAV-003",
        name: "Buca Voyages Yaoundé",
        route: "/travel/PLACE-TRAV-003",
        description: "Buca Voyages propose des services de transport entre les principales villes du Cameroun, notamment Yaoundé, Douala, Ebolowa. Elle met l'accent sur la sécurité, le confort et la ponctualité.",
        address: "Mvan, YAOUNDE, CM",
        rating: 1,
        location: "Mvan",
        phone: "+237696789012",
        email: "contact@mairieyaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        open_until: "01h00 ",
        category: ["Transportation", "Travel agency"],
        images: [buca1, buca]

      }
    ]
  },
  {
    id: "24",
    label: "Média",
    icon: "fa fa-newspaper",
    link: "/hotels",
    places: [
      {
        id: "PLACE-MEDI-001",
        name: "Services",
        route: "/recherche/media/PLACE-MEDI-001",
        description: "description",
        address: "Hôtel de Ville, Yaoundé",
        location: "3.8767° N, 11.5198° E",
        phone: "+237696789012",
        email: "contact@yaounde.cm",
        opening_hours: [
          { day: "monday", open: "12h00", close: "23h00" },
          { day: "wednesday", open: "14h00", close: "00h00" },
          { day: "sunday", open: "01h00", close: "00h00" }
        ],
        min_price: "N/A",
        status: "active",
        category: ["Media"],
        images: [image1, image1, image1]
      }
    ]
  },
];

import leSafariImage1 from '../assets/images/safari-night-club-logo.jpg';
export const Restaurants = [
  {
      id: "REST-001",
      label: "Restaurants",
      name: "Le Safari",
      description: "Restaurant chic proposant des spécialités africaines et européennes dans un cadre élégant.",
      address: "Bastos, Yaoundé",
      location: "3.8695° N, 11.5123° E",
      phone: "+237690123456",
      email: "contact@lesafari.cm",
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
      min_order: "5000 FCFA",
      status: "active",
      logo: leSafariImage1,
      images: [ leSafariImage1, leSafariImage1, leSafariImage1, leSafariImage1 ],
  },
  {
      id: "REST-002",
      label: "Restaurants",
      name: "Chez Wou",
      description: "Un des meilleurs restaurants chinois de Yaoundé, réputé pour ses plats savoureux et son service impeccable.",
      address: "Avenue Kennedy, Yaoundé",
      location: "3.8678° N, 11.5214° E",
      phone: "+237675987654",
      email: "contact@chezwou.cm",
      opening_hours:[],
      min_order: "3000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "REST-003",
      label: "Restaurants",
      name: "La Pirogue",
      description: "Un restaurant en bord de mer à Douala offrant une cuisine raffinée et une vue imprenable sur l'océan.",
      address: "Bonanjo, Douala",
      location: "4.0483° N, 9.7043° E",
      phone: "+237699456789",
      email: "contact@lapirogue.cm",
      opening_hours: [],
      min_order: "7000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "REST-004",
      label: "Restaurants",
      name: "Black & White Lounge",
      description: "Un restaurant moderne combinant gastronomie et ambiance lounge pour des soirées mémorables.",
      address: "Bonapriso, Douala",
      location: "4.0510° N, 9.7052° E",
      phone: "+237677123456",
      email: "contact@blackwhitelounge.cm",
      opening_hours: [],
      min_order: "10000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "REST-005",
      label: "Restaurants",
      name: "Le Biniou",
      description: "Un restaurant français réputé pour sa cuisine traditionnelle et son accueil chaleureux.",
      address: "Akwa, Douala",
      location: "4.0450° N, 9.7031° E",
      phone: "+237655321987",
      email: "contact@lebiniou.cm",
      opening_hours: [],
      min_order: "6000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
    id: "REST-006",
    label: "Restaurants",
    name: "Le Délice",
    description: "Un restaurant cosy proposant des plats faits maison inspirés des cuisines camerounaise et internationale.",
    address: "Bonamoussadi, Douala",
    location: "4.0700° N, 9.7365° E",
    phone: "+237699112233",
    email: "contact@ledelice.cm",
    opening_hours: [],
    min_order: "4000 FCFA",
    status: "active",
    logo: "logo",
    images: [ ]
},
{
    id: "REST-007",
    label: "Restaurants",
    name: "La Terrasse",
    description: "Un restaurant offrant une vue panoramique sur la ville avec un menu varié et des cocktails exquis.",
    address: "Golf, Yaoundé",
    location: "3.8725° N, 11.5089° E",
    phone: "+237674556789",
    email: "contact@laterrasse.cm",
    opening_hours: [],
    min_order: "8000 FCFA",
    status: "active",
    logo: "logo",
    images: [ ]
}
];
export const Hotels = [
  {
      id: "HOTEL-001",
      label:"Hôtels & Hébergements",
      name: "Hôtel Mont Fébé",
      description: "Un hôtel luxueux offrant une vue panoramique sur Yaoundé, avec un service haut de gamme.",
      address: "Mont Fébé, Yaoundé",
      location: "3.8869° N, 11.5021° E",
      phone: "+237690987654",
      email: "contact@montfebe.cm",
      opening_hours: "24/7",
      min_price: "50,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "HOTEL-002",
      label:"Hôtels & Hébergements",
      name: "Hilton Yaoundé",
      description: "Hôtel 5 étoiles avec restaurants raffinés, piscine et centre de remise en forme.",
      address: "Centre-ville, Yaoundé",
      location: "3.8640° N, 11.5174° E",
      phone: "+237677654321",
      email: "contact@hiltonyaounde.cm",
      opening_hours: "24/7",
      min_price: "80,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "HOTEL-003",
      label:"Hôtels & Hébergements",
      name: "Star Land Hôtel",
      description: "Un hôtel moderne situé à Douala avec des chambres élégantes et un excellent service.",
      address: "Bonapriso, Douala",
      location: "4.0515° N, 9.7073° E",
      phone: "+237699321456",
      email: "contact@starland.cm",
      opening_hours: "24/7",
      min_price: "60,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "HOTEL-004",
      label:"Hôtels & Hébergements",
      name: "Krystal Palace",
      description: "Un hôtel élégant offrant un hébergement de qualité et un restaurant gastronomique.",
      address: "Akwa, Douala",
      location: "4.0458° N, 9.7029° E",
      phone: "+237655789123",
      email: "contact@krystalpalace.cm",
      opening_hours: "24/7",
      min_price: "70,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  },
  {
      id: "HOTEL-005",
      label:"Hôtels & Hébergements",
      name: "Résidence La Falaise",
      description: "Un hébergement confortable au cœur de la ville avec un excellent rapport qualité-prix.",
      address: "Bonanjo, Douala",
      location: "4.0489° N, 9.7041° E",
      phone: "+237699654123",
      email: "contact@lafalaise.cm",
      opening_hours: "24/7",
      min_price: "55,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  }
];
export const Categories = [
    {
      id: "REST-001",
      label: "Restauration",
      icon: "fa fa-utensils",
      places: [
        {
          id: "PLACE-REST-001",
          name: "Le Gourmet",
          description: "Restaurant gastronomique proposant des plats raffinés.",
          address: "Bastos, Yaoundé",
          location: "3.8700° N, 11.5001° E",
          phone: "+237690111222",
          email: "contact@legourmet.cm",
          opening_hours: "12:00 - 23:00",
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
          id: "PLACE-REST-002",
          name: "Chez Tantie",
          description: "Restaurant populaire offrant des plats camerounais traditionnels.",
          address: "Mvog-Mbi, Yaoundé",
          location: "3.8550° N, 11.5050° E",
          phone: "+237690333444",
          email: "contact@cheztantie.cm",
          opening_hours: "07:00 - 22:00",
          min_price: "3,500 FCFA",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "HOTEL-001",
      label: "Hôtels & Hébergements",
      icon: "fa fa-hotel",
      places: [
        {
          id: "PLACE-HOTEL-001",
          name: "Hôtel Mont Fébé",
          description: "Un hôtel luxueux avec une vue panoramique sur Yaoundé.",
          address: "Mont Fébé, Yaoundé",
          location: "3.8869° N, 11.5021° E",
          phone: "+237690987654",
          email: "contact@montfebe.cm",
          opening_hours: "24/7",
          min_price: "50,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
            id: "PLACE-HOTEL-002",
            name: "Hilton Yaoundé",
            description: "Hôtel 5 étoiles avec restaurants raffinés, piscine et centre de remise en forme.",
            address: "Centre-ville, Yaoundé",
            location: "3.8640° N, 11.5174° E",
            phone: "+237677654321",
            email: "contact@hiltonyaounde.cm",
            opening_hours: "24/7",
            min_price: "80,000 FCFA",
            status: "active",
            logo: "logo",
            images: [ ]
        },

    ]

    },
    {
      id: "ENT-001",
      label: "Divertissements",
      icon: "fa fa-film",
      places: [
        {
          id: "PLACE-ENT-001",
          name: "Cinéma Eden",
          description: "Un cinéma moderne proposant les derniers films internationaux et locaux.",
          address: "Centre-ville, Yaoundé",
          location: "3.8666° N, 11.5167° E",
          phone: "+237690123456",
          email: "contact@cinemaeden.cm",
          opening_hours: "10:00 - 23:00",
          min_price: "5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
          id: "PLACE-ENT-002",
          name: "Bowling Club",
          description: "Un espace de bowling et de jeux en famille ou entre amis.",
          address: "Essos, Yaoundé",
          location: "3.8702° N, 11.5033° E",
          phone: "+237690987654",
          email: "contact@bowlingyaounde.cm",
          opening_hours: "14:00 - 01:00",
          min_price: "6,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "TOUR-001",
      label: "Sites Touristiques",
      icon: "fa fa-landmark",
      places: [
        {
          id: "PLACE-TOUR-001",
          name: "Musée National",
          description: "Un lieu emblématique retraçant l'histoire et la culture camerounaise.",
          address: "Boulevard du 20 Mai, Yaoundé",
          location: "3.8741° N, 11.5174° E",
          phone: "+237690654321",
          email: "contact@museenational.cm",
          opening_hours: "09:00 - 18:00",
          min_price: "2,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
          id: "PLACE-TOUR-002",
          name: "Mont Fébé",
          description: "Une magnifique montagne offrant une vue panoramique sur Yaoundé.",
          address: "Mont Fébé, Yaoundé",
          location: "3.8869° N, 11.5021° E",
          phone: "+237690777888",
          email: "contact@montfebe.cm",
          opening_hours: "24/7",
          min_price: "Gratuit",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "FASH-001",
      label: "Mode et Beauté",
      icon: "fa fa-shopping-bag",
      places: [
        {
          id: "PLACE-FASH-001",
          name: "Beauty & Style Spa",
          description: "Un salon de beauté et spa offrant des soins haut de gamme.",
          address: "Bastos, Yaoundé",
          location: "3.8688° N, 11.5023° E",
          phone: "+237691234567",
          email: "contact@beautystyle.cm",
          opening_hours: "08:00 - 20:00",
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
          id: "PLACE-FASH-002",
          name: "Elegance Boutique",
          description: "Boutique de vêtements de créateurs pour hommes et femmes.",
          address: "Warda, Yaoundé",
          location: "3.8645° N, 11.5100° E",
          phone: "+237692345678",
          email: "contact@eleganceboutique.cm",
          opening_hours: "09:00 - 20:00",
          min_price: "Variable",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "TRAN-001",
      label: "Transports",
      icon: "fa fa-bus",
      places: [
        {
          id: "PLACE-TRAN-001",
          name: "Express Voyages",
          description: "Agence de voyage proposant des liaisons interurbaines confortables et sécurisées.",
          address: "Gare Routière, Yaoundé",
          location: "3.8589° N, 11.5170° E",
          phone: "+237692345678",
          email: "contact@expressvoyages.cm",
          opening_hours: "06:00 - 22:00",
          min_price: "7,500 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
        {
          id: "PLACE-TRAN-002",
          name: "Taxi Rapide",
          description: "Service de taxi rapide et sécurisé dans tout Yaoundé.",
          address: "Toute la ville",
          location: "3.8610° N, 11.5055° E",
          phone: "+237693456789",
          email: "contact@taxirapide.cm",
          opening_hours: "24/7",
          min_price: "2,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "COMM-001",
      label: "Commerces",
      icon: "fa fa-store",
      places: [
        {
            id: "PLACE-COMM-001",
            name: "Supermarché Carrefour",
            description: "Un supermarché bien achalandé offrant une variété de produits locaux et importés.",
            address: "Warda, Yaoundé",
            location: "3.8647° N, 11.5135° E",
            phone: "+237693456789",
            email: "contact@carrefour.cm",
            opening_hours: "07:00 - 22:00",
            min_price: "Variable",
            status: "active",
            logo: "logo",
            images: []
        },
        {
            id: "PLACE-COMM-002",
            name: "Supermarché Carrefour",
            description: "Un supermarché bien achalandé offrant une variété de produits locaux et importés.",
            address: "Warda, Yaoundé",
            location: "3.8647° N, 11.5135° E",
            phone: "+237693456789",
            email: "contact@carrefour.cm",
            opening_hours: "07:00 - 22:00",
            min_price: "Variable",
            status: "active",
            logo: "logo",
            images: []
        }]
    },
    {
        id: "SPORT-001",
        label: "Sports",
        icon: "fa fa-football-ball",
        places: [
          {
            id: "PLACE-SPORT-001",
            name: "Fitness Club Yaoundé",
            description: "Salle de sport équipée avec des coachs professionnels pour un entraînement optimal.",
            address: "Omnisports, Yaoundé",
            location: "3.8734° N, 11.5201° E",
            phone: "+237694567890",
            email: "contact@fitnessyaounde.cm",
            opening_hours: "06:00 - 22:00",
            min_price: "15,000 FCFA",
            status: "active",
            logo: "logo",
            images: []
         },]
    },
    {
        id: "SEC-001",
        label: "Secours",
        icon: "fa fa-ambulance",
        places: [
          {
            id: "PLACE-SEC-001",
            name: "Hôpital Central",
            description: "Centre hospitalier offrant des soins d'urgence et des services médicaux spécialisés.",
            address: "Avenue Kennedy, Yaoundé",
            location: "3.8756° N, 11.5189° E",
            phone: "+237695678901",
            email: "contact@hopitalcentral.cm",
            opening_hours: "24/7",
            min_price: "Consultation: 5,000 FCFA",
            status: "active",
            logo: "logo",
            images: []
         },]
    },
    {
        id: "ADMIN-001",
        label: "Administrations",
        icon: "fa fa-building",
        places: [
          {
            id: "PLACE-ADMIN-001",
            name: "Mairie de Yaoundé",
            description: "Institution publique gérant les affaires administratives et municipales de la ville.",
            address: "Hôtel de Ville, Yaoundé",
            location: "3.8767° N, 11.5198° E",
            phone: "+237696789012",
            email: "contact@mairieyaounde.cm",
            opening_hours: "08:00 - 16:00",
            min_price: "N/A",
            status: "active",
            logo: "logo",
            images: []
          }
         ]
    },
  ];
 
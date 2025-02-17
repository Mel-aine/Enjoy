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
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
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
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
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
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
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
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
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
      opening_hours: [
        { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
        { day: "Samedi", open: "14h00", close: "00h00" },
        { day: "Dimanche", open: "Fermé", close: "Fermé" }
      ],
      min_price: "55,000 FCFA",
      status: "active",
      logo: "logo",
      images: [ ]
  }
];

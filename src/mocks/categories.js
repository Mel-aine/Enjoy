import image1 from '@/assets/imagesRestaurants/osan/image1.jpg';
import image2 from '@/assets/imagesRestaurants/osan/image2.jpg';
import image3 from '@/assets/imagesRestaurants/osan/image3.jpg';
import image4 from '@/assets/imagesRestaurants/osan/image4.jpg';
import vin from '@/assets/imagesRestaurants/osan/vin.jpg';
import grill from '@/assets/imagesRestaurants/grill/grill.jpg';
import grill1 from '@/assets/imagesRestaurants/grill/grill1.jpg';
import grill2 from '@/assets/imagesRestaurants/grill/grill2.jpg';
import grill3 from '@/assets/imagesRestaurants/grill/grill3.jpg';
import african from '@/assets/imagesRestaurants/african/african.jpg';
import africain1 from '@/assets/imagesRestaurants/african/african1.jpg';
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
      places: [
        {
          id: "PLACE-REST-001",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
        {
          id: "PLACE-REST-002",
          name: "Grill And Garden Artisan Barbecue",
          route: "/restaurant/PLACE-REST-002",
          description: " Grill and Garden Artisan Barbecue est un restaurant qui se distingue par son ambiance conviviale et ses délicieuses grillades",
          address: "Yassa, Douala, CM",
          location: "Yassa face ancien pesage, derriere Foka Construction",
          phone: "+237690333444",
          email: "contact@cheztantie.cm",
          rating : 4,
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "3,500 FCFA",
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant"],
          images: [grill, grill1, grill2, grill3]
        },
        {
          id: "PLACE-REST-003",
          name: "African Food By Emy ",
          route: "/restaurant/PLACE-REST-003",
          description: " African Food by Emy est un véritable joyau culinaire qui célèbre les saveurs authentiques de la cuisine camerounaise.",
          address: "Nlongkak, YAOUNDE, CM",
          location: " Feu vallée nlongkak",
          phone: "+237690333444",
          email: "contact@cheztantie.cm",
          rating : 4,
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "3,500 FCFA",
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant"],
          images: [african, africain1]
        },
        {
          id: "PLACE-REST-004",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
        {
          id: "PLACE-REST-005",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
        {
          id: "PLACE-REST-006",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
        {
          id: "PLACE-REST-007",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
        {
          id: "PLACE-REST-008",
          name: "O'san",
          route: "/restaurant/PLACE-REST-001",
          description: "O'SAN est Situé au cœur de Bonamoussadi à Douala, le restaurant O'SAN offre une ambiance chaleureuse et conviviale où les amateurs de vin et de gastronomie se retrouvent .",
          address: " Bonamoussadi, Douala, CM.",
          rating :4,
          location: "Bloc SONEL",
          phone: "+237690111222",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          open_until: "01h00 ",
          category: ["Restoration", "Restaurant", "Wine cellar", "Bar"],
          images: [image1, image2, image3, image4, vin]
        },
      ]
    },
    {
      id: "3",
      label: "Shopping",
     // route: "/recherche/shopping",
      icon: "fa fa-shopping-bag",
      places: [
        {
          id: "PLACE-SHOP-001",
          name: "Le Shop",
          route: "/recherche/shopping/PLACE-SHOP-001",
          description: "shopping de qualité.",
          address: "Bastos, Yaoundé",
          location: "3.8700° N, 11.5001° E",
          phone: "+237690111222",
          email: "contact@leshop.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          category: ["Fashion And Beauty", "Clothing store"],
          images: [image1,image1,image1]
        },
      ]
    },
    {
      id: "4",
      label: "Vie nocturne",
      icon: "fa fa-glass-cheers",
      places: [
        {
          id: "PLACE-VIE-001",
          name: "Le Club",
          route: "/recherche/vie nocturne/PLACE-VIE-001",
          description: "club de qualité.",
          address: "Bastos, Yaoundé",
          location: "3.8700° N, 11.5001° E",
          phone: "+237690111222",
          email: "contact@leshop.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          category: ["club",],
          images: [image1,image1,image1]
        },
      ]
    },
    {
      id: "5",
      label: "Sports & Activités de loisirs",
      icon: "fa fa-football-ball",
      places: [
        {
          id: "PLACE-SPORT-001",
          name: "Fitness Club Yaoundé",
          route: "/recherche/sport/PLACE-SPORT-001",
          description: "Salle de sport équipée avec des coachs professionnels pour un entraînement optimal.",
          address: "Omnisports, Yaoundé",
          location: "3.8734° N, 11.5201° E",
          phone: "+237694567890",
          email: "contact@fitnessyaounde.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "15,000 FCFA",
          status: "active",
          logo: "logo",
          category: ["sports"],
          images: [image1,image1,image1]
       },]
    },
    {
      id: "6",
      label: "Salons de beauté & Spas",
      icon: "fa fa-spa",
      places: [
        {
          id: "PLACE-FASH-001",
          name: "Beauty & Style Spa",
          route: "/recherche/salon/PLACE-FASH-001",
          description: "Un salon de beauté et spa offrant des soins haut de gamme.",
          address: "Bastos, Yaoundé",
          location: "3.8688° N, 11.5023° E",
          phone: "+237691234567",
          email: "contact@beautystyle.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          category: ["Beauty"],
          images: [image1,image1,image1]
        },



        {
          id: "PLACE-FASH-002",
          name: "Elegance Boutique",
          route: "/recherche/salon/PLACE-FASH-002",
          description: "Boutique de vêtements de créateurs pour hommes et femmes.",
          address: "Warda, Yaoundé",
          location: "3.8645° N, 11.5100° E",
          phone: "+237692345678",
          email: "contact@eleganceboutique.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "Variable",
          status: "active",
          logo: "logo",
          category: ["Beauty"],
          images: [image1,image1,image1]
        }
      ]
    },
    {
      id: "7",
      label: "Automobile",
      icon: "fa fa-bus",
      places: [
        {
          id: "PLACE-TRAN-001",
          name: "Express Voyages",
          route: "/recherche/automobile/PLACE-TRAN-001",
          description: "Agence de voyage proposant des liaisons interurbaines confortables et sécurisées.",
          address: "Gare Routière, Yaoundé",
          location: "3.8589° N, 11.5170° E",
          phone: "+237692345678",
          email: "contact@expressvoyages.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "7,500 FCFA",
          status: "active",
          logo: "logo",
          category: ["Automobile"],
          images: [image1,image1,image1]
        },
        {
          id: "PLACE-TRAN-002",
          name: "Taxi Rapide",
          route: "/recherche/automobile/PLACE-TRAN-002",
          description: "Service de taxi rapide et sécurisé dans tout Yaoundé.",
          address: "Toute la ville",
          location: "3.8610° N, 11.5055° E",
          phone: "+237693456789",
          email: "contact@taxirapide.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "2,000 FCFA",
          status: "active",
          logo: "logo",
          category: ["Automobile"],
          images: [image1,image1,image1]
        }
      ]
    },

    {
      id: "8",
      label: "Maisons & Travaux",
      icon: "fa fa-home",
      places: [
        {
          id: "PLACE-MAIS-001",
          name: "Building",
          route: "/recherche/maison/PLACE-MAIS-001",
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
          category: ["Building"],
          images: [image1,image1,image1]
        },
      ]
    },
    {
      id: "9",
      label: "Cafés & Thés",
      icon: "fa fa-coffee",
      places: [
        {
          id: "PLACE-COF-001",
          name: "Maison du café",
          route: "/recherche/cafe/PLACE-COF-001",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@maisoncafe.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: "5,000 FCFA",
          status: "active",
          category: ["coffee"],
          images: [image1,image1,image1]
       },]
    },
    {
      id: "10",
      label: "Alimentations",
      icon: "fa fa-apple-alt",
      places: [
        {
          id: "PLACE-ALI-001",
          name: "Alimentation Ali",
          route: "/recherche/alimentation/PLACE-ALI-001",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@alimentation.cm",
          opening_hours: [
            { day: "monday", open: "12h00", close: "23h00" },
            { day: "wednesday", open: "14h00", close: "00h00" },
            { day: "sunday", open: "01h00", close: "00h00" }
          ],
          min_price: " 5,000 FCFA",
          status: "active",
          category: ["Alimentation"],
          images: [image1,image1,image1]
       },]
    },
    {
      id: "11",
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
          images: [image1,image1,image1]
       },]
    },
    {
      id: "12",
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
          images: [image1,image1,image1]
       },]
    },
    {
      id: "13",
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
          images: [image1,image1,image1]
       },]
    },
    {
      id: "14",
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
          images: [image1,image1,image1]
       },]
    },
    {
      id: "15",
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
          images: [image1,image1,image1]
        },
      ]
    },

    {
      id: "16",
      label: "Hôtels & Séjours",
      icon: "fa fa-hotel",
      places: [
        {
          id: "PLACE-HOTEL-001",
          name: "Hôtel Mont Fébé",
          route : "/all_service/PLACE-HOTEL-001",
          description: "Un hôtel luxueux avec une vue panoramique sur Yaoundé.",
          address: "Mont Fébé, Yaoundé",
          rating : 4,
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
            route : "/all_service/PLACE-HOTEL-002",
            description: "Hôtel 5 étoiles avec restaurants raffinés, piscine et centre de remise en forme.",
            address: "Centre-ville, Yaoundé",
            rating : 5,
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
            images: [ mont1]
        },
        {
          id: "PLACE-HOTEL-003",
          name: "Djeuga Palace Hotel",
          route : "/all_service/PLACE-HOTEL-003",
          description: "Situé au Quartier Warda à Yaoundé à environ 21 km de l'aéroport international de Yaoundé Nsimalen, avec un service de navette aéroport disponible sur demande pour plus de commodité",
          address: "Warda, Yaoundé, CM",
          rating : 5,
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
          images: [ djeuga]
      },

    ]

    },
    {
      id: "17",
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
          images: [image1,image1,image1]
        },
      ]
    },
    {
      id: "18",
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
          images: [image1,image1,image1]
        },

      ]
    },

    {
      id: "19",
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
            images: [image1,image1,image1]
        },

        ]
    },


    {
        id: "20",
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
            images: [image1,image1,image1]
          }
         ]
    },
    {
      id: "21",
      label: "Formation & Enseignement",
      icon: "fa fa-pencil-alt",
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
          images: [image1,image1,image1]
        }
       ]
    },
    {
      id: "22",
      label: "Organisation religieuse",
      icon: "fa fa-church",
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
          images: [image1,image1,image1]
        }
       ]
    },
    {
      id: "23",
      label: "Travel",
      icon: "fa fa-bus",
      places: [
        {
          id: "PLACE-TRAV-001",
          name: "Cerise Express Vip Yaoundé",
          route : "/travel/PLACE-TRAV-001",
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
          route : "/travel/PLACE-TRAV-002",
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
          route : "/travel/PLACE-TRAV-003",
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
          images: [image1,image1,image1]
        }
      ]
    },
  ];

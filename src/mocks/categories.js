import leSafariImage1 from '../assets/images/safari-night-club-logo.jpg';
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "3,500 FCFA",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "SHOP-001",
      label: "Shopping",
      icon: "fa fa-shopping-bag",
      places: [
        {
          id: "PLACE-SHOP-001",
          name: "Le Shop",
          description: "shopping de qualité.",
          address: "Bastos, Yaoundé",
          location: "3.8700° N, 11.5001° E",
          phone: "+237690111222",
          email: "contact@leshop.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
      ]
    },
    {
      id: "VIE-001",
      label: "Vie nocturne",
      icon: "fa fa-glass-cheers",
      places: [
        {
          id: "PLACE-VIE-001",
          name: "Le Club",
          description: "club de qualité.",
          address: "Bastos, Yaoundé",
          location: "3.8700° N, 11.5001° E",
          phone: "+237690111222",
          email: "contact@leshop.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "10,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
      ]
    },
    {
      id: "SPORT-001",
      label: "Sports & Activités de loisirs",
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "15,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "FASH-001",
      label: "Salons de beauté & Spas",
      icon: "fa fa-spa",
      places: [
        {
          id: "PLACE-FASH-001",
          name: "Beauty & Style Spa",
          description: "Un salon de beauté et spa offrant des soins haut de gamme.",
          address: "Bastos, Yaoundé",
          location: "3.8688° N, 11.5023° E",
          phone: "+237691234567",
          email: "contact@beautystyle.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "Variable",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "TRAN-001",
      label: "Automobile",
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "2,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },

    {
      id: "MAIS-001",
      label: "Maisons & Travaux",
      icon: "fa fa-home",
      places: [
        {
          id: "PLACE-MAIS-001",
          name: "Building",
          description: "Agence proposant des liaisons interurbaines confortables et sécurisées.",
          address: "Odza, Yaoundé",
          location: "3.8589° N, 11.5170° E",
          phone: "+237692345678",
          email: "contact@expressvoyages.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "7,500 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
      ]
    },
    {
      id: "COF-001",
      label: "Cafés & Thés",
      icon: "fa fa-coffee",
      places: [
        {
          id: "PLACE-COF-001",
          name: "Maison du café",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "ALI-001",
      label: "Alimentations",
      icon: "fa fa-apple-alt",
      places: [
        {
          id: "PLACE-ALI-001",
          name: "Alimentation Ali",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: " 5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "LOI-001",
      label: "Art & Loisirs",
      icon: "fa fa-palette",
      places: [
        {
          id: "PLACE-LOI-001",
          name: "Art",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "Consultation: 5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "SEC-001",
      label: "Santé & Médical",
      icon: "fa fa-briefcase-medical",
      places: [
        {
          id: "PLACE-SEC-001",
          name: "Hôpital Central",
          description: "Centre hospitalier offrant des soins d'urgence et des services médicaux spécialisés.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "Consultation: 5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "SERV-001",
      label: "Services destiné aux prof",
      icon: "fa fa-shield-alt",
      places: [
        {
          id: "PLACE-SERV-001",
          name: "Services",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "ANI-001",
      label: "Animaux de companie",
      icon: "fa fa-paw",
      places: [
        {
          id: "PLACE-ANI-001",
          name: "Animaux",
          description: "description.",
          address: "Avenue Kennedy, Yaoundé",
          location: "3.8756° N, 11.5189° E",
          phone: "+237695678901",
          email: "contact@hopitalcentral.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
       },]
    },
    {
      id: "IMM-001",
      label: "Immobilier",
      icon: "fa fa-home",
      places: [
        {
          id: "PLACE-IMM-001",
          name: "Building",
          description: "Agence proposant des liaisons interurbaines confortables et sécurisées.",
          address: "Odza, Yaoundé",
          location: "3.8589° N, 11.5170° E",
          phone: "+237692345678",
          email: "contact@expressvoyages.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "7,500 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
      ]
    },

    {
      id: "HOTEL-001",
      label: "Hôtels & Séjours",
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
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
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

    ]

    },
    {
      id: "ENT-001",
      label: "Services Locaux",
      icon: "fa fa-map-marker-alt",
      places: [
        {
          id: "PLACE-ENT-001",
          name: "services locaux",
          description: "Un cinéma moderne proposant les derniers films internationaux et locaux.",
          address: "Centre-ville, Yaoundé",
          location: "3.8666° N, 11.5167° E",
          phone: "+237690123456",
          email: "contact@cinemaeden.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "5,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },
      ]
    },
    {
      id: "TOUR-001",
      label: "Organisation d événements",
      icon: "fa fa-calendar-alt",
      places: [
        {
          id: "PLACE-TOUR-001",
          name: "evenement",
          description: "Un lieu emblématique retraçant l'histoire et la culture camerounaise.",
          address: "Boulevard du 20 Mai, Yaoundé",
          location: "3.8741° N, 11.5174° E",
          phone: "+237690654321",
          email: "contact@museenational.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "2,000 FCFA",
          status: "active",
          logo: "logo",
          images: []
        },

      ]
    },

    {
      id: "ADMIN-001",
      label: "Services publics & gouvernement",
      icon: "fa fa-landmark",
      places: [
        {
            id: "PLACE-ADMIN-001",
            name: "Mairie de Yaoundé",
            description: "Institution publique gérant les affaires administratives et municipales de la ville.",
            address: "Hôtel de Ville, Yaoundé",
            location: "3.8647° N, 11.5135° E",
            phone: "+237693456789",
            email: "contact@mairieyaounde.cm",
            opening_hours: [
              { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
              { day: "Samedi", open: "14h00", close: "00h00" },
              { day: "Dimanche", open: "Fermé", close: "Fermé" }
            ],
            min_price: "Variable",
            status: "active",
            logo: "logo",
            images: []
        },

        ]
    },


    {
        id: "FIN-001",
        label: "Services financiers",
        icon: "fa fa-chart-line",
        places: [
          {
            id: "PLACE-FIN-001",
            name: "Services",
            description: "description",
            address: "Hôtel de Ville, Yaoundé",
            location: "3.8767° N, 11.5198° E",
            phone: "+237696789012",
            email: "contact@mairieyaounde.cm",
            opening_hours: [
              { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
              { day: "Samedi", open: "14h00", close: "00h00" },
              { day: "Dimanche", open: "Fermé", close: "Fermé" }
            ],
            min_price: "N/A",
            status: "active",
            logo: "logo",
            images: []
          }
         ]
    },
    {
      id: "FORM-001",
      label: "Formation & Enseignement",
      icon: "fa fa-pencil-alt",
      places: [
        {
          id: "PLACE-FORM-001",
          name: "Services",
          description: "description",
          address: "Hôtel de Ville, Yaoundé",
          location: "3.8767° N, 11.5198° E",
          phone: "+237696789012",
          email: "contact@mairieyaounde.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "N/A",
          status: "active",
          logo: "logo",
          images: []
        }
       ]
    },
    {
      id: "RELI-001",
      label: "Organisation religieuse",
      icon: "fa fa-church",
      places: [
        {
          id: "PLACE-RELI-001",
          name: "Services",
          description: "description",
          address: "Hôtel de Ville, Yaoundé",
          location: "3.8767° N, 11.5198° E",
          phone: "+237696789012",
          email: "contact@mairieyaounde.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "N/A",
          status: "active",
          logo: "logo",
          images: []
        }
       ]
    },
    {
      id: "COUL-001",
      label: "Couleur locale",
      icon: "fa fa-tree",
      places: [
        {
          id: "PLACE-COUL-001",
          name: "Services",
          description: "description",
          address: "Hôtel de Ville, Yaoundé",
          location: "3.8767° N, 11.5198° E",
          phone: "+237696789012",
          email: "contact@mairieyaounde.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "N/A",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
    {
      id: "MEDI-001",
      label: "Média",
      icon: "fa fa-newspaper",
      places: [
        {
          id: "PLACE-MEDI-001",
          name: "Services",
          description: "description",
          address: "Hôtel de Ville, Yaoundé",
          location: "3.8767° N, 11.5198° E",
          phone: "+237696789012",
          email: "contact@mairieyaounde.cm",
          opening_hours: [
            { day: "Lundi - Vendredi", open: "12h00", close: "23h00" },
            { day: "Samedi", open: "14h00", close: "00h00" },
            { day: "Dimanche", open: "Fermé", close: "Fermé" }
          ],
          min_price: "N/A",
          status: "active",
          logo: "logo",
          images: []
        }
      ]
    },
  ];

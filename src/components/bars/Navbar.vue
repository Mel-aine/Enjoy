<template>
  <div class="bg-customBlue">
    <!-- Top Bar -->
    <div id="topBar" class="flex items-center p-2 justify-between container mx-auto">
      <!-- Logo -->
      <div id="logo" class="rounded-full flex-shrink-0">
        <img class="rounded-full" src="@/assets/logo2.png" width="50" alt="Logo">
      </div>

      <!-- Menu Mobile: Bouton avec icône "fa-bars" -->
      <div id="menuToggle" class="block md:hidden">
        <button @click="toggleSidebar" class="text-white text-2xl">
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <!-- Menu Principal (Desktop) -->
      <div id="mainMenu" class="relative w-full hidden md:block">
        <nav>
          <div class="flex justify-center space-x-4">
            <router-link
              to="/"
              class="text-white hover:text-customRed px-4 py-2 rounded-sm font-medium font-poppins"
              >
              Accueil
            </router-link>

            <!-- Dropdown Menu -->
            <div class="relative group">
              <button
                @click="isDropdownVisible = !isDropdownVisible"
                :class="{ 'text-customRed': isDropdownVisible, 'text-customNeutreColor': !isDropdownVisible }"
                class="hover:text-customRed px-4 py-2 rounded-sm font-medium font-poppins"
              >
                Coins
                <i class="fa fa-chevron-down text-xs ml-1 " :class="{ 'text-white': isDropdownVisible, 'text-white': !isDropdownVisible }"></i>
              </button>

              <!-- Contenu du menu déroulant -->
              <div v-if="isDropdownVisible" class="absolute transform -translate-x-1/3 z-50 bg-white shadow-xl w-[2000px] sm:max-w-[650px] md:max-w-[850px] lg:max-w-[1100px] mt-2 rounded-lg">
                <div class="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 py-2">
                  <div v-for="category in menuData" :key="category.route" class="space-y-1">
                    <h3 class="text-lg font-semibold text-gray-800 mt-2">
                      <router-link :to="category.route" class="block text-sm text-customRed hover:text-gray-900">
                        {{ category.label }}
                      </router-link>
                    </h3>
                    <ul class="space-y-1">
                      <li v-for="subItem in category.subCategories" :key="subItem.route">
                        <router-link :to="subItem.route" class="block text-xs text-gray-700 hover:bg-gray-500">
                          {{ subItem.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <router-link
              to="/comunity"
              class="text-white hover:text-customRed px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Application Mobile
            </router-link>

            <router-link
              to="/comunity"
              class="text-white hover:text-customRed px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Contact
            </router-link>
            
          </div>
        </nav>
      </div>

      <!-- User Management (à droite) -->
      <div id="userManage" class="flex items-center space-x-4">
        <button>
          <i class="fa fa-star text-customWhite hover:text-gray-300"></i>
        </button>
        <Button variant="ligth" class="font-poppins">Inscription</Button>
        <Button variant="ligth" class="font-poppins">Connexion</Button>
      </div>
    </div>

    <!-- Sidebar Menu (Mobile) -->
    <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-40 md:hidden" @click.self="toggleSidebar">
      <div class="absolute left-0 top-0 w-3/4 h-full bg-customBlue shadow-lg p-4 transform transition-transform duration-300"
           :class="{'translate-x-0 ': isSidebarOpen, '-translate-x-full': !isSidebarOpen}">
        <button @click="toggleSidebar" class="absolute top-4 right-4 text-xl text-gray-600">
          <i class="fa fa-times text-gray-700 "></i>
        </button>
        <div class="flex flex-col space-y-6 mt-10">
          <router-link
            to="/home"
            class="text-lg text-white  px-4 py-2 rounded-md"
            @click="toggleSidebar">Accueil</router-link>
          
            <div class="relative group">
              <button
                @click="isDropdownVisible = !isDropdownVisible"
                class="text-white  px-4 py-2 rounded-sm font-medium font-poppins"
              >
                Coins
                <i class="fa fa-chevron-down text-xs ml-1" :class="{ 'text-customRed': isDropdownVisible, 'text-customRed': !isDropdownVisible }"></i>
              </button>

              <!-- Contenu du menu déroulant  mobile -->
              <div v-if="isDropdownVisible" class="absolute scroll-m-5 z-50 bg-white shadow-xl w-[250px] mt-2 rounded-lg p-5">
                <div class="grid grid-cols-1 gap-4">
                  <div v-for="category in menuData" :key="category.route" class="space-y-1">
                    <h3 class="text-lg font-semibold text-gray-800 mt-2">
                      <router-link :to="category.route" class="block text-sm text-customRed ">
                        {{ category.label }}
                      </router-link>
                    </h3>
                    <ul class="space-y-1">
                      <li v-for="subItem in category.subCategories" :key="subItem.route">
                        <router-link :to="subItem.route" class="block text-xs text-gray-700 hover:bg-customDarkVariant2">
                          {{ subItem.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
          <router-link
            to="/comunity"
            class="text-lg text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md"
            @click="toggleSidebar">Application Mobile</router-link>
          
          <router-link
            to="/comunity"
            class="text-lg text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md"
            @click="toggleSidebar">Contact</router-link>
        </div>
      </div>
    </div>

    <!-- MidleBar (menu défilant horizontal) -->
    <div id="midleBar" class="container mx-auto">
      <div class="w-full flex items-center p-4">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center relative">
            <!-- Menu principal avec défilement horizontal -->
            <ul ref="scrollMenu" class="flex overflow-x-auto whitespace-nowrap w-full space-x-6 scrollbar-hide transition-transform duration-200 ease-in-out">
              <li v-for="(menuItem, index) in menuItems" :key="index" class="menu-item">
                <router-link :to="menuItem.route" class="flex flex-col items-center text-xs text-white hover:text-gray-900  hover:border-customWhite hover:border-b-2 hover:bg-customNeutreColor hover:rounded-sm px-3 py-2 transition duration-200">
                  <BaseIcon :name="menuItem.icon" size="14" stroke-width="2" class="text-xs opacity-0 translate-y-2 transition-all duration-300 base-icon" />
                  <span>{{ menuItem.label }}</span>
                </router-link>
              </li>
            </ul>

            <!-- Boutons de défilement -->
            <button v-if="showLeftButton" @click="scrollLeft" class="absolute left-0 p-2 bg-gray-900 w-10 text-white rounded-full">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button v-if="showRightButton" @click="scrollRight" class="absolute right-0 p-2 w-10 bg-gray-900 text-white rounded-full">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SearchBar -->
    <div id="searchBar" class="container mx-auto px-4">
      <p class="text-white text-xl font-bold font-poppins">ENJOY ,</p>
      <p class="text-white text-lg font-bold font-poppins">Te trouve les coins de qualités !</p>
      <div class="flex flex-wrap gap-1 p-4 items-center justify-center">
        <!-- Inputs de recherche -->
        <FloatingInput ph="Nom du coin ou type de coin" icon="fa fa-search" class="text-sm w-[250px] max-w-[350px] sm:max-w-[200px] md:max-w-[250px]" />
        <FloatingInput ph="Ville ou région" icon="fa fa-location-dot" class="text-sm w-[250px] max-w-[350px] sm:max-w-[200px] md:max-w-[150px]" />
        <FloatingInput ph="Quartier ou adresse" icon="fa fa-location-arrow" class="text-sm w-[250px] max-w-[300px] sm:max-w-[250px] md:max-w-[200px]" />
        <Button variant="danger" size="md" class="w-[250px] max-w-[300px] sm:max-w-[250px] md:max-w-[200px] font-poppins px-6 py-2">
          Recherche
        </Button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Button from '@/components/buttons/Button.vue';
  import FloatingInput from '../input/FloatingInput.vue';
  import BaseIcon from '../icons/BaseIcon.vue';


  const isDropdownVisible = ref(false) ;
  const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);

const isSidebarOpen = ref(false); 

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const checkScrollButtonsVisibility = () => {
  if (!scrollMenu.value) return;

  const element = scrollMenu.value;
  showLeftButton.value = element.scrollLeft > 0;
  showRightButton.value = element.scrollWidth > element.clientWidth + element.scrollLeft;

};

const scrollLeft = () => {
  scrollMenu.value.scrollLeft -= 100;
  checkScrollButtonsVisibility(); 
};

const scrollRight = () => {
  scrollMenu.value.scrollLeft += 100;
  checkScrollButtonsVisibility(); // Update visibility after scrolling
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.group')) {
    isDropdownVisible.value = false;
  }
};

onMounted(() => {
  checkScrollButtonsVisibility(); // Initial check after component is mounted
  document.addEventListener('click', handleClickOutside);
  // Re-check when the window resizes (for responsiveness)
  window.addEventListener('resize', checkScrollButtonsVisibility);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

  const menuItems = [
  { route: "/fr/categorie/11/restauration", label: "Restauration", icon: "Utensils" },
  { route: "/fr/categorie/12/hotels-et-hebergements", label: "Hotels Et Hébergements", icon: "Hotel" },
  { route: "/fr/categorie/13/divertissements", label: "Divertissements", icon: "Gamepad2" },
  { route: "/fr/categorie/14/sites-touristiques", label: "Sites Touristiques", icon: "Camera" },
  { route: "/fr/categorie/15/modes-et-beaute", label: "Modes Et Beauté", icon: "Scissors" },
  { route: "/fr/categorie/16/transports", label: "Transports", icon: "BusFront" },
  { route: "/fr/categorie/17/commerces", label: "Commerces", icon: "ShoppingBag" },
  { route: "/fr/categorie/18/sports", label: "Sports", icon: "Dumbbell" },
  { route: "/fr/categorie/19/secours", label: "Secours", icon: "Ambulance" },
  { route: "/fr/categorie/20/administrations", label: "Administrations", icon: "Building2" },
];

const menuData = [
  {
    route: "/fr/categorie/11/restauration",
    label: "Restauration",
    subCategories: [
      { route: "/fr/categorie/21/restaurant", label: "Restaurant" },
      { route: "/fr/categorie/22/restaurant-dhotel", label: "Restaurant d'hôtel" },
      { route: "/fr/categorie/25/fast-food", label: "Fast food" },
      { route: "/fr/categorie/26/restaurant-livreur", label: "Restaurant livreur" },
      { route: "/fr/categorie/27/cuisine-a-la-commande", label: "Cuisine à la commande" },
      { route: "/fr/categorie/28/traiteur", label: "Traiteur" },
      { route: "/fr/categorie/642/restaurant-lounge", label: "RESTORANT LOUNGE" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "RESTORANT PLEIN AIR" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "Restaurant-Glacier" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "RESTAURANT/CAV" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "RESTAURANT/GRILL" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "LOUNGE/RESTAURANT" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "Creperie/Pizzaria/Patisserie" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "Restaurant en ligne" },
      { route: "/fr/categorie/643/restaurant-plein-air", label: "Café" },

    ],
  },
  {
    route: "/fr/categorie/12/hotels-et-hebergements",
    label: "Hôtels et Hébergements",
    subCategories: [
      { route: "/fr/categorie/56/hotel", label: "Hôtel" },
      { route: "/fr/categorie/57/centre-climatique", label: "Centre climatique" },
      { route: "/fr/categorie/58/58-appartements-studios-meubles", label: "Appartements/Studios meublés" },
      { route: "/fr/categorie/59/auberge-habitat-maison-d-hote", label: "Auberge/Maison d'hôte" },
      { route: "/fr/categorie/890/villa", label: "Site touristique avec hébergements" },
      { route: "/fr/categorie/890/villa", label: "Villa" },
      { route: "/fr/categorie/890/villa", label: "Complexe Hôtelier" },
      { route: "/fr/categorie/890/villa", label: "Motel" },

    ],
  },
  {
    route: "/fr/categorie/13/divertissements",
    label: "Divertissements",
    subCategories: [
      { route: "/fr/categorie/29/manege", label: "Manège" },
      { route: "/fr/categorie/30/cinema", label: "Cinéma" },
      { route: "/fr/categorie/31/salle-de-theatre", label: "Salle de théâtre" },
      { route: "/fr/categorie/32/snack-club-bar-boite", label: "Snack/Club/Bar/Boîte de nuit" },
      { route: "/fr/categorie/33/salle-de-concert", label: "Salle de concert" },
      { route: "/fr/categorie/35/parc-dattraction", label: "Parc d'attraction" },
      { route: "/fr/categorie/37/cabaret-lounge-cafe", label: "Cabaret/Lounge/Cafe" },
      { route: "/fr/categorie/38/stade-match-competition", label: "Stade/Match/Compétition" },
      { route: "/fr/categorie/79/centre_de-loisirs", label: "Centre de Loisirs" },
      { route: "/fr/categorie/88/complexe-sportif", label: "Complexe Sportif" },
      { route: "/fr/categorie/94/bowling", label: "BOWLING" },
      { route: "/fr/categorie/96/base-nautique", label: "BASE NAUTIQUE" },
      { route: "/fr/categorie/101/101-salle-lecture-bibliotheque", label: "SALLE LECTURE/Bibliothèque" },
      { route: "/fr/categorie/634/gallerie-dart", label: "GALLERIE D'ART" },
      { route: "/fr/categorie/710/complexe-touristique", label: "Complexe touristique" },
      { route: "/fr/categorie/881/snack", label: "SNACK" },
      { route: "/fr/categorie/888/studio-de-danse", label: "Studio de danse" },
      { route: "/fr/categorie/895/cabaret", label: "Cabaret" },
      { route: "/fr/categorie/904/snack-1", label: "Snack" },
      { route: "/fr/categorie/905/bar", label: "Bar" },
      { route: "/fr/categorie/906/boite-de-nuit-club", label: "Boîte de nuit/Club" },
      { route: "/fr/categorie/915/915-salle-des-fetes", label: "Salle des fêtes" },
      { route: "/fr/categorie/879/piscine", label: "Piscine" }
    ]
  },
  {
    route: '/fr/categorie/14/sites-touristiques',
    label: 'Sites Touristiques',
    subCategories: [
      { route: "/fr/categorie/34/plage", label: "Plage" },
      { route: "/fr/categorie/47/zoo-parcs-musee", label: "Monument/Zoo/Parcs/Musée" },
      { route: "/fr/categorie/50/habitat-construction-historique", label: "Habitat/construction historique" },
      { route: "/fr/categorie/52/chefferie-royaume", label: "Chefferie/Royaume" },
      { route: "/fr/categorie/53/53-fleuve", label: "Fleuve" },
      { route: "/fr/categorie/54/mont", label: "Mont" },
      { route: "/fr/categorie/55/pont", label: "Pont" },
      { route: "/fr/categorie/81/lac", label: "LAC" },
      { route: "/fr/categorie/82/ile", label: "ILE" },
      { route: "/fr/categorie/97/agence-decotourisme", label: "Agence d'écotourisme" },
      { route: "/fr/categorie/102/rocher", label: "ROCHER" },
      { route: "/fr/categorie/104/agence-de-tourisme", label: "Agence De Tourisme" },
      { route: "/fr/categorie/635/chutte-deau", label: "CHUTTE D'EAU" },
      { route: "/fr/categorie/761/761-port-barrage", label: "Port/Barrage" },
      { route: "/fr/categorie/887/centre-culturel-1", label: "Centre culturel" },
      { route: "/fr/categorie/896/zoo", label: "Zoo" },
      { route: "/fr/categorie/897/musee", label: "Musée" },
      { route: "/fr/categorie/898/parcs", label: "Parcs" },
      { route: "/fr/categorie/899/monument", label: "Monument" },
      { route: "/fr/categorie/900/chutes", label: "Chutes" },
      { route: "/fr/categorie/901/grottes", label: "Grottes" },
      { route: "/fr/categorie/902/gallerie-dart-1", label: "Gallérie d'art" },
      { route: "/fr/categorie/903/falaise", label: "Falaise" }
    ]
  },
  {
    route: '/fr/categorie/15/modes-et-beaute',
    label: 'Modes Et Beauté',
    subCategories: [
      { route: "/fr/categorie/61/instituts-de-beaute", label: "Instituts de beauté" },
      { route: "/fr/categorie/62/salon-de-coiffure", label: "Salon de coiffure" },
      { route: "/fr/categorie/63/shop-de-vetements", label: "Shop de vêtements" },
      { route: "/fr/categorie/64/stylistes-modelistes", label: "Stylistes-modélistes" },
      { route: "/fr/categorie/621/maison-de-couture", label: "MAISON DE COUTURE" },
      { route: "/fr/categorie/651/haute-couture", label: "Haute couture" },
      { route: "/fr/categorie/878/878-body-care-consulting", label: "Body care consulting" },
      { route: "/fr/categorie/883/883-salon-donglerie", label: "Salon d'onglerie" },
      { route: "/fr/categorie/886/salon-de-beaute", label: "Salon de beauté" },
      { route: "/fr/categorie/891/beaute-a-domicile", label: "Beauté à domicile" }
    ]
  },
  {
    route: '/fr/categorie/16/transports',
    label: 'Transports',
    subCategories: [
      { route: "/fr/categorie/39/agence-de-transport-aerien", label: "Agence de transport aérien" },
      { route: "/fr/categorie/40/agence-de-transport-maritime", label: "Agence de transport maritime" },
      { route: "/fr/categorie/41/agence-de-transport-ferroviaire", label: "Agence de transport ferroviaire" },
      { route: "/fr/categorie/43/agence-de-moto-taxi", label: "Agence de moto-taxi" },
      { route: "/fr/categorie/44/agence-de-location-de-vehicule", label: "Agence de location de véhicule" },
      { route: "/fr/categorie/45/agence-de-transport-pour-tourisme", label: "Agence de transport pour tourisme" },
      { route: "/fr/categorie/46/aeroport-port-gare-ferroviaire-gare-routiere", label: "Aéroport/Port/Gare ferroviaire/Gare routière" },
      { route: "/fr/categorie/108/agence-de-voyage", label: "Agence de voyage" },
      { route: "/fr/categorie/685/centre-d%C3%A9co-tourisme", label: "Centre d'éco-tourisme" }
    ]
  },
  {
    route: '/fr/categorie/17/commerces',
    label: 'Commerces',
    subCategories: [
      { route: "/fr/categorie/75/marche", label: "Marché" },
      { route: "/fr/categorie/76/supermarche", label: "Supermarché" },
      { route: "/fr/categorie/77/centre-commercial", label: "Centre commercial" },
      { route: "/fr/categorie/80/boulangerie", label: "BOULANGERIE" },
      { route: "/fr/categorie/87/decoration-interieure", label: "Décoration intérieure" },
      { route: "/fr/categorie/95/boutique", label: "BOUTIQUE" },
      { route: "/fr/categorie/98/shop-de-friandises", label: "SHOP DE FRIANDISES" },
      { route: "/fr/categorie/99/magasin-electro-menage", label: "MAGASIN ELECTRO-MENAGE" },
      { route: "/fr/categorie/100/magasin-deco", label: "MAGASIN DECO" },
      { route: "/fr/categorie/106/boutique-en-ligne", label: "Boutique en ligne" },
      { route: "/fr/categorie/633/magasin", label: "Magasin" },
      { route: "/fr/categorie/703/alimentation", label: "ALIMENTATION" },
      { route: "/fr/categorie/704/magasin-de-d%C3%A9co", label: "Magasin de déco" },
      { route: "/fr/categorie/749/decoration-interieure-boutique-en-ligne", label: "Decoration Interieure( Boutique en Ligne)" },
      { route: "/fr/categorie/777/services-%C3%A9v%C3%A8nementiels", label: "Services évènementiels" },
      { route: "/fr/categorie/798/shop", label: "Shop" },
      { route: "/fr/categorie/805/hypermarch%C3%A9", label: "Hypermarché" },
      { route: "/fr/categorie/876/livreur", label: "Livreur" },
      { route: "/fr/categorie/880/pressing", label: "Pressing" },
      { route: "/fr/categorie/884/cave-a-vins", label: "Cave à vins" },
      { route: "/fr/categorie/908/construction-btp", label: "Construction (BTP)" },
      { route: "/fr/categorie/913/service-de-nettoyage", label: "Service de Nettoyage" }
    ]
  },
  {
    route: '/fr/categorie/18/sports',
    label: 'Sports',
    subCategories: [
      { route: "/fr/categorie/78/salle-de-sport-fitness", label: "Salle de sport/Fitness" },
      { route: "/fr/categorie/664/salle-de-sports", label: "Salle de sports" }
    ]
  },
  {
    route: '/fr/categorie/19/secours',
    label: 'Secours',
    subCategories: [
      { route: "/fr/categorie/65/urgences", label: "Urgences" },
      { route: "/fr/categorie/66/pompier", label: "Pompier" },
      { route: "/fr/categorie/67/hopital-centre-de-sante", label: "Hôpital/Centre de santé" },
      { route: "/fr/categorie/68/police-gendarmerie", label: "Police/gendarmerie" },
      { route: "/fr/categorie/91/centre-ophtamologie", label: "CENTRE OPHTAMOLOGIE" },
      { route: "/fr/categorie/650/hopital", label: "Hopital" },
      { route: "/fr/categorie/652/centre-de-sant%C3%A9", label: "Centre de santé" },
      { route: "/fr/categorie/661/pompiers", label: "Pompiers" },
      { route: "/fr/categorie/758/centre-m%C3%A9dical-ophtalmologique", label: "Centre médical Ophtalmologique" },
      { route: "/fr/categorie/877/cabinet-dentaire", label: "Cabinet Dentaire" },
      { route: "/fr/categorie/889/opticien", label: "Opticien" },
      { route: "/fr/categorie/907/pharmacie", label: "Pharmacie" },
      { route: "/fr/categorie/909/laboratoire-danalyse", label: "Laboratoire d'Analyse" },
      { route: "/fr/categorie/107/clinique", label: "Clinique" },
      { route: "/fr/categorie/893/centre-medical", label: "Centre Médical" }
    ]
  },
  {
    route: '/fr/categorie/20/administrations',
    label: 'Administrations',
    subCategories: [
      { route: "/fr/categorie/69/ministere", label: "Ministère" },
      { route: "/fr/categorie/70/delegation-regionale_departementale_communale", label: "Délégation Régionale/Départementale/Communale" },
      { route: "/fr/categorie/71/mairie", label: "Mairie" },
      { route: "/fr/categorie/72/services-administratif", label: "Services Administratif" },
      { route: "/fr/categorie/73/office-du-tourisme", label: "Office du tourisme" },
      { route: "/fr/categorie/74/74-universite-institut-enseignement-superieur", label: "Université/Institut/Enseignement Supérieur" },
      { route: "/fr/categorie/660/organisation-a-but-non-lucratif", label: "Organisation à but non lucratif" },
      { route: "/fr/categorie/721/eglise-cathedrale", label: "EGLISE/CATHEDRALE" },
      { route: "/fr/categorie/885/centre-de-formation", label: "Centre de Formation" },
      { route: "/fr/categorie/910/creche-halte-garderie", label: "Crèche/Halte garderie" },
      { route: "/fr/categorie/911/primaire-education-de-base", label: "Primaire/Education de base" },
      { route: "/fr/categorie/912/college-lycee-enseignement-secondaire", label: "Collège/Lycée/Enseignement secondaire" }
    ]
  }
];
  </script>
  
  <style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.menu-item:hover .base-icon {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
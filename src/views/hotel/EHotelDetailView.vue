<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, MapPin, Star, Wifi, Tv } from 'lucide-vue-next'
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import {
    MailIcon,
    PhoneIcon,
    GlobeIcon,
    WifiIcon, SquareParkingIcon, AccessibilityIcon, SpadeIcon, SnowflakeIcon, SunIcon, WavesLadderIcon, DumbbellIcon, UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, HeartIcon, MapPinIcon, CreditCardIcon, DollarSignIcon, CheckIcon, AppleIcon
} from 'lucide-vue-next';
const router = useRouter()

const currentIndex = ref(0)
const imagesPerPage = 3
const iconMap = {
    'Wi-Fi': WifiIcon,
    'Parking': SquareParkingIcon,
    'Accessible PMR': AccessibilityIcon,
    'Climatisation': SnowflakeIcon,
    'Terrasse': SunIcon,
    'Piscine': WavesLadderIcon,
    'Salle de sport': DumbbellIcon,
    'Spa': SpadeIcon,
    'Restaurant': UtensilsIcon,
    'Bar': WineIcon,
    'Espace enfants': BabyIcon,
    'Animaux acceptés': DogIcon,
    'Salle de réunion': BriefcaseIcon
}

const dates = ref({
    checkin: null,
    checkout: null
})

const maxIndex = computed(() => {
    return Math.ceil(hotel.images.length / imagesPerPage) - 1
})

const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const nextImage = () => {
    if (currentIndex.value < maxIndex.value) {
        currentIndex.value++
    }
}

// const hotel = {
//     id: '001',
//     name: 'Grand Hôtel Parisien',
//     description: "Un superbe hôtel situé au cœur de Paris, offrant une vue imprenable sur la Tour Eiffel.",
//     location: '16 Avenue Kléber, 75016 Paris, France',
//     rating: 4.8,
//     reviews: 1243,
//     images: [
//         'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
//         'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
//         'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
//         'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop'
//     ],
//     amenities: [
//         'Wifi gratuit', 'Petit-déjeuner inclus', 'Climatisation', 'Centre de fitness',
//         'Piscine', 'Restaurant', 'Bar', 'Spa', 'Service en chambre'
//     ],
//     policies: [
//         "Check-in à partir de 14h00",
//         "Check-out jusqu'à 12h00",
//         "Animaux acceptés (des frais supplémentaires peuvent s'appliquer)",
//         'Non-fumeur'
//     ]
// }
const showAllPhotos = ref(false);
const rooms = ref([
    {
        id: 'r001',
        name: 'Chambre Classique',
        description: 'Chambre confortable avec lit queen-size, salle de bain privée et vue sur la ville.',
        price: 199,
        capacity: 2,
        images: [
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1594560913036-d15f23f8a81c?q=80&w=2069&auto=format&fit=crop'
        ],
        amenities: ['Wifi', 'TV', 'Climatisation', 'Mini-bar']
    },
    {
        id: 'r002',
        name: 'Suite Junior',
        description: 'Suite spacieuse avec lit king-size, salon séparé et balcon avec vue panoramique.',
        price: 349,
        capacity: 2,
        images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1629079448081-cf7c8999a0ad?q=80&w=1964&auto=format&fit=crop'
        ],
        amenities: ['Wifi', 'TV', 'Climatisation', 'Mini-bar', 'Coffre-fort', 'Machine à café']
    },
    {
        id: 'r003',
        name: 'Suite Exécutive',
        description: 'Suite luxueuse avec chambre séparée, grand salon et salle à manger, terrasse privée.',
        price: 599,
        capacity: 3,
        images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop'
        ],
        amenities: ['Wifi', 'TV', 'Climatisation', 'Mini-bar', 'Coffre-fort', 'Machine à café', 'Jacuzzi']
    }
])


const hotel = {
    id: 1,
    name: "Hotel La Falaise Yaoundé",
    logo: "https://res.cloudinary.com/demo/image/upload/v1629473090/logo_enjoy.png",
    description: "A 4-star hotel located in the heart of Yaoundé. Enjoy comfortable rooms, modern amenities, and exceptional service.",
    location: "Avenue Marechal Foch, Yaoundé, Cameroon",
    rating: "4.30",
    reviewCount: 126,
    capacity: 120,
    priceRange: "$$$",
    statusService: "active",
    emailService: "contact@lafalaiseyaounde.cm",
    phoneNumberService: "+237 222 21 10 00",
    website: "https://www.lafalaiseyaounde.cm",
    facilities: ["Wi-Fi", "Parking", "Terrace", "Air conditioning"],
    paymentMethods: ["Mobile Money", "Credit Card", "Check"],
    policies: [
        "Check-in from 2 PM.",
        "Check-out before 12 PM.",
        "No pets allowed."
    ],
    openings: {
        Monday: { open: "08:00", close: "22:00" },
        Tuesday: { open: "08:00", close: "22:00" },
        Wednesday: { open: "08:00", close: "22:00" },
        Thursday: { open: "08:00", close: "22:00" },
        Friday: { open: "08:00", close: "23:00" },
        Saturday: { open: "08:00", close: "23:00" },
        Sunday: { open: "09:00", close: "21:00" }
    },
    images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop'
    ],
    createdAt: "2025-05-20T10:28:38.597Z",
    updatedAt: "2025-05-20T10:28:38.598Z"
};


const checkinInput = ref(null)
const checkoutInput = ref(null)

onMounted(() => {
    flatpickr(".datepicker", {
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: "today",
        onChange: (selectedDates) => {
            if (selectedDates.length > 0) {
                const checkin = selectedDates[0]
                dates.value.checkin = checkin.toISOString().split("T")[0]
                checkinInput.value.value = formatDate(checkin)
            }
            if (selectedDates.length > 1) {
                const checkout = selectedDates[1]
                dates.value.checkout = checkout.toISOString().split("T")[0]
                checkoutInput.value.value = formatDate(checkout)
            }
        }
    })
})

// Util function to format dates for display
function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    return date.toLocaleDateString('fr-FR', options).replace(/\./g, '')
}

// flatpickr(".datepicker", {
//         mode: "range",
//         locale: lang === "en" ? English : French, // Vérifiez la valeur directement
//         dateFormat: "d M Y",
//         minDate: "today",
//         onChange: (selectedDates) => {
//     if (selectedDates.length > 0) {
//         if (datepickerAller.value) {
//             datepickerAller.value.value = formattedDateArrival.value;
//         }
//     }

//     if (selectedDates.length > 1) {
//         let departureDate = selectedDates[1];
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         // Si la date de retour est aujourd'hui, on ajoute +1 jour
//         if (departureDate.toDateString() === today.toDateString()) {
//             departureDate.setDate(departureDate.getDate() + 1);
//         }

//         formattedDateDeparture.value = _formatDate(departureDate);
//         if (datepickerRetour.value) {
//             datepickerRetour.value.value = formattedDateDeparture.value;
//         }
//     }
// } });
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-12">
        <!-- Header -->
        <div class="bg-white shadow-sm">
            <div class="container mx-auto px-4 py-4">
                <button @click="router.back()" class="inline-flex items-center text-gray-700 hover:text-blue-600">
                    <ArrowLeft class="w-5 h-5 mr-2" /> Retour aux résultats
                </button>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <!-- Galerie -->
            <div class="relative mb-8">
                <!-- Bouton précédent -->
                <button @click="prevImage" :disabled="currentIndex === 0"
                    class="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow hover:bg-white disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Conteneur du carrousel -->
                <div class="overflow-hidden rounded-xl relative">
                    <div class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)`, width: `${Math.ceil(hotel.images.length / imagesPerPage) * 100}%` }">
                        <div v-for="(img, index) in hotel.images" :key="index"
                            class="w-1/3 flex-shrink-0 h-64 relative px-2">
                            <img :src="img" class="w-full h-full object-cover rounded-xl -mx-2" />
                        </div>
                    </div>

                    <!-- Bouton "Voir toutes les photos" fixe -->
                    <button @click="showAllPhotos = true"
                        class="absolute text-xs bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 font-medium py-2 px-4 rounded-lg shadow-md z-10">
                        Voir toutes les photos ({{ hotel.images.length }})
                    </button>
                </div>

                <!-- Bouton suivant -->
                <button @click="nextImage" :disabled="currentIndex >= maxIndex"
                    class="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow hover:bg-white disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <!-- Sidebar au lieu d'un modal plein écran -->
            <transition name="sidebar">
                <div v-if="showAllPhotos" class="fixed inset-0 z-50 overflow-hidden">
                    <!-- Overlay sombre -->
                    <div class="absolute inset-0 bg-black/80 transition-opacity" @click="showAllPhotos = false"></div>

                    <!-- Sidebar qui glisse -->
                    <div class="absolute inset-y-0 right-0 max-w-full flex">
                        <div class="relative w-screen max-w-2xl">
                            <div class="h-full flex flex-col bg-white shadow-xl">
                                <!-- En-tête avec bouton fermer -->
                                <div class="flex items-center justify-between p-4 border-b">
                                    <h2 class="text-lg font-semibold">Toutes les photos</h2>
                                    <button @click="showAllPhotos = false" class="p-2 rounded-full hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <!-- Contenu scrollable -->
                                <div class="flex-1 overflow-y-auto p-4">
                                    <div class="grid grid-cols-2 gap-4">
                                        <img v-for="(img, index) in hotel.images" :key="index" :src="img"
                                            class="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                            @click="openLightbox(index)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>





            <!-- Infos hôtel -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Bloc gauche : Infos hôtel (2/3) -->
                <div class="lg:col-span-2">
                    <div class="mb-8">
                        <!-- Nom + Note -->
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-4">
                                <img :src="hotel.logo" alt="Logo" class="w-12 h-12 rounded-full object-cover" />
                                <h1 class="text-2xl font-bold text-gray-800">{{ hotel.name }}</h1>
                            </div>
                            <div
                                class="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                <Star class="w-4 h-4 mr-1" />
                                {{ hotel.averageRating }}
                            </div>
                        </div>

                        <!-- Adresse -->
                        <div class="flex items-center text-gray-600 mb-4 text-sm">
                            <MapPin class="w-5 h-5 mr-2" /> {{ hotel.addressService }}
                        </div>

                        <!-- Description -->
                        <p class="text-gray-700 mb-6 text-sm">{{ hotel.description }}</p>

                        <!-- Email / Téléphone / Site -->
                        <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 mb-6 text-sm text-gray-700">
                            <div>
                                <span class="font-semibold">
                                    <MailIcon class="mb-1" size="20" /> Email :
                                </span>
                                <a :href="`mailto:${hotel.emailService}`" class="text-blue-600 hover:underline">{{
                                    hotel.emailService }}</a>
                            </div>
                            <div>
                                <span class="font-semibold">
                                    <PhoneIcon class="mb-1" size="20" /> Téléphone :
                                </span> {{ hotel.phoneNumberService }}
                            </div>
                            <div>
                                <span class="font-semibold">
                                    <GlobeIcon class="mb-1" size="20" /> Site :
                                </span>
                                <a :href="hotel.website" target="_blank" class="text-blue-600 hover:underline"> Visiter
                                    Nous</a>
                            </div>
                        </div>

                        <!-- Équipements -->
                        <div class="mb-6 border-t pt-4">
                            <h2 class="text-lg font-semibold mb-3">Équipements</h2>
                            <ul class="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-sm text-gray-700 bg-customBlue/20 p-2 rounded">
                                <li v-for="(facility, index) in hotel.facilities" :key="index"
                                    class="flex items-center ">
                                    <component :is="iconMap[facility]" v-if="iconMap[facility]"
                                        class="text-customBlue mr-2" :size="16" />
                                    <span class="text-customBlue">{{ facility }}</span>
                                </li>
                            </ul>

                        </div>

                        <!-- Moyens de paiement -->
                        <div class="mb-6">
                            <h2 class="text-lg font-semibold mb-3">Moyens de paiement acceptés</h2>
                            <ul class="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-customRed/90 bg-customRed/20 p-2 rounded">
                                <li v-for="(method, index) in hotel.paymentMethods" :key="index"
                                    class="flex items-center">
                                    <span>{{ method }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Règles -->
                        <div>
                            <h2 class="text-lg font-semibold mb-3">Règles de l'hôtel</h2>
                            <ul class="text-sm text-gray-700">
                                <li v-for="(rule, index) in hotel.policies" :key="index" class="flex items-start">
                                    <span class="w-2 h-2 bg-amber-300 rounded-full mr-2 mt-1"></span>
                                    <span>{{ rule }}.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <!-- Bloc droit : Modifier les dates (1/3) -->
                <!-- doit recevoir les donnee de searchHoteldate aller et retour pour pouvoir les changee -->
                <div class="lg:col-span-1">
                    <div class="bg-white border rounded-lg  p-6 sticky top-20">
                        <div class="flex flex-col gap-4">
                            <!-- Input utilisé par Flatpickr -->
                            <div class="datepicker">
                                <label for="checkin" class="text-sm text-gray-600">Date d'arrivée</label>
                                <input id="checkin" ref="checkinInput"
                                    class="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                                    placeholder="Sélectionnez la date d'arrivée" readonly />
                            </div>

                            <div class="datepicker">
                                <label for="checkout" class="text-sm text-gray-600">Date de départ</label>
                                <input id="checkout" ref="checkoutInput"
                                    class="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                                    placeholder="Sélectionnez la date de départ" readonly />
                            </div>

                            <button class="bg-customRed text-white py-2 px-4 rounded hover:text-gray-800">
                                Modifier les dates
                            </button>
                        </div>
                    </div>
                </div>
            </div>









            <!-- Chambres -->
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Choisissez votre chambre</h2>
            <div class="space-y-6">
                <div class="space-y-6">
  <div
    v-for="room in rooms"
    :key="room.id"
    class="bg-white rounded-xl shadow overflow-hidden"
  >
    <div class="flex flex-col md:flex-row">
      <!-- Image principale -->
      <div class="md:w-1/3">
        <img
          :src="room.images?.[0] || 'https://via.placeholder.com/400x300?text=No+Image'"
          class="w-full h-64 object-cover"
          alt="Image chambre"
        />
      </div>

      <!-- Détails chambre -->
      <div class="p-6 md:w-2/3 flex flex-col">
        <!-- Nom -->
        <h3 class="text-xl font-bold text-gray-800">
          {{ room.productName || 'Chambre sans nom' }}
        </h3>

        <!-- Capacité (si dispo) -->
        <p
          v-if="room.capacity"
          class="text-gray-600 mt-1 mb-4"
        >
          Pour {{ room.capacity }} personne{{ room.capacity > 1 ? 's' : '' }}
        </p>

        <!-- Description -->
        <p v-if="room.description" class="text-gray-700 mb-4">
          {{ room.description }}
        </p>
        <p v-else class="text-gray-400 mb-4 italic">Aucune description disponible</p>

        <!-- Équipements -->
        <div v-if="room.amenities?.length" class="mb-6">
          <h4 class="font-medium mb-2">Équipements de la chambre</h4>
          <ul class="grid grid-cols-2 gap-y-2">
            <li
              v-for="(amenity, index) in room.amenities"
              :key="index"
              class="flex items-center text-sm"
            >
              <component
                :is="getAmenityIcon(amenity)"
                class="w-4 h-4 mr-2 text-blue-600"
                v-if="getAmenityIcon(amenity)"
              />
              <span v-else class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              {{ amenity }}
            </li>
          </ul>
        </div>

        <!-- Prix + bouton -->
        <div class="flex justify-between items-center mt-auto">
          <div>
            <p class="text-sm text-gray-500">Prix par nuit</p>
            <p class="text-2xl font-bold text-blue-600">
              {{ room.price }} €
            </p>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

        </div>
    </div>
</template>
<style scoped>
/* Animation de la sidebar */
.sidebar-enter-active,
.sidebar-leave-active {
    transition: opacity 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
    opacity: 0;
}

.sidebar-enter-active .absolute.inset-y-0.right-0,
.sidebar-leave-active .absolute.inset-y-0.right-0 {
    transition: transform 0.3s ease;
}

.sidebar-enter-from .absolute.inset-y-0.right-0,
.sidebar-leave-to .absolute.inset-y-0.right-0 {
    transform: translateX(100%);
}
</style>
<script>
function getAmenityIcon(amenity) {
    switch (amenity) {
        case 'Wifi':
            return Wifi
        case 'TV':
            return Tv
        default:
            return null
    }
}
</script>

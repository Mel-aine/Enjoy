<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllServicesByServiceId } from '@/servicesApi/hotelServicesApi.js'
import { ArrowLeft, MapPin, Star, Wifi, Tv, ImagesIcon } from 'lucide-vue-next'
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import {
    MailIcon,
    PhoneIcon,
    GlobeIcon,
    WifiIcon, CheckCircleIcon, SquareParkingIcon, AirVentIcon, AccessibilityIcon, SpadeIcon, SnowflakeIcon, SunIcon, WavesLadderIcon, DumbbellIcon, UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, HeartIcon, MapPinIcon, CreditCardIcon, DollarSignIcon, CheckIcon, AppleIcon, UsersIcon
} from 'lucide-vue-next';
import ContactItem from '@/components/hotel/ContactItem.vue'
import DateInput from '@/components/hotel/DateInput.vue'
import NumberInput from '@/components/hotel/NumberInput.vue'
import { useDataStore } from '@/stores/dataStore'
const router = useRouter()
const dataStore = useDataStore()
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
    'Salle de réunion': BriefcaseIcon,
    'Air conditioning': AirVentIcon,
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
console.log("composant monter")
const rooms = ref([])
const isLoading = ref(false);
onMounted( async () => {
try {
    console.log("composant monter")

    isLoading.value = true
    // Vérifier si l'ID de l'hôtel est passé dans les paramètres de la route
    const hotelId = router.currentRoute.value.params.hotelId
    console.log("idh", hotelId)

    if (hotelId) {
        const response = await getAllServicesByServiceId(hotelId)
        rooms.value = response.data
        console.log('Chargement des chambre de l hotel', rooms.value)
    } else {
        console.warn('Aucun chambre trouvé dans les paramètres de la route')
    }
} catch (error) {
    console.error('Erreur lors du chargement des chambre de l hotel:', error)
}finally{
    isLoading.value = false
}
})

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
const roomsTest = ref([
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

// const hotelObject = dataStore.serviceGeted;
// console.log('hotelObject', hotelObject)

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

        <div class="max-w-7xl mx-auto px-4 py-8">
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
                        class="absolute text-xs bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 font-medium py-2 px-2 rounded-lg shadow-md z-10">
                        <div class="flex items-center">
                        <ImagesIcon class="w-5 h-5"/> <span class="ml-2">({{ hotel.images.length }})+</span>
                        </div>
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
            <div class="">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Section principale -->
                    <div class="lg:col-span-2 space-y-8">
                        <!-- Carte Hôtel -->
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                <div class="flex items-center gap-4">
                                    <img :src="hotel.logo" alt="Logo hôtel"
                                        class="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-200" />
                                    <div>
                                        <h1 class="text-2xl lg:text-3xl font-bold text-gray-900">{{ dataStore.serviceGeted.name }}</h1>
                                        <div class="flex items-center gap-2 mt-2">
                                            <div class="flex items-center">
                                                <component v-for="i in 5" :is="Star" :key="i" class="w-4 h-4"
                                                    :class="i <= Math.floor(dataStore.serviceGeted.averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" />
                                            </div>
                                            <span class="font-semibold text-gray-900">{{ dataStore.serviceGeted.averageRating }}</span>
                                            <span class="text-gray-500">({{ dataStore.serviceGeted.reviewCount }} avis)</span>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    class="bg-customBlue/80 text-white px-4 py-2 text-sm font-medium rounded flex items-center">
                                    <Star class="w-4 h-4 mr-1" />
                                    {{ dataStore.serviceGeted.averageRating }} 
                                </span>
                            </div>

                            <!-- Adresse -->
                            <div class="flex items-start gap-2 text-gray-600 mb-4">
                                <MapPin class="w-5 h-5 mt-0.5 text-blue-600" />
                                <span class="text-sm">{{ dataStore.serviceGeted.addressService }}</span>
                            </div>

                            <!-- Description -->
                            <p class="text-gray-700 leading-relaxed">{{ dataStore.serviceGeted.description }}</p>
                        </div>

                        <!-- Contact -->
                        <div class="bg-white shadow rounded-lg p-6 space-y-6">
                            <h2 class="text-xl font-bold">Informations de contact</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <ContactItem icon="Mail" label="Email" :value="dataStore.serviceGeted.emailService"
                                    :link="'mailto:' + dataStore.serviceGeted.emailService" />
                                <ContactItem icon="Phone" label="Téléphone" :value="dataStore.serviceGeted.phoneNumberService" />
                                <ContactItem icon="Globe" label="Site web" value="Visiter le site"
                                    :link="dataStore.serviceGeted.website" />
                            </div>
                        </div>

                        <!-- Équipements -->
                        <div class="bg-white shadow rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4">Équipements et services</h2>
                            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div v-for="(facility, index) in dataStore.serviceGeted.facilities" :key="index"
                                    class="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                    <component :is="iconMap[facility] || CheckCircleIcon"
                                        class="w-5 h-5 text-blue-600" />
                                    <span class="text-sm font-medium text-gray-700 ">{{ facility }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Paiement -->
                        <div class="bg-white shadow rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4">Moyens de paiement acceptés</h2>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <div v-for="(method, index) in dataStore.serviceGeted.paymentMethods" :key="index"
                                    class="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                                    <CreditCardIcon class="w-5 h-5 text-green-600" />
                                    <span class="text-sm font-medium text-gray-700">{{ method }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Politiques -->
                        <div class="bg-white shadow rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4">Règles et politiques</h2>
                            <div class="space-y-3">
                                <div v-for="(rule, index) in hotel.policies" :key="index"
                                    class="flex items-start gap-3">
                                    <div class="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                                    <span class="text-gray-700">{{ rule }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="lg:col-span-1">
                        <div class="sticky top-6 bg-white shadow-lg rounded-lg p-6 space-y-6">
                            <h2 class="text-xl text-center font-bold">Modifier votre séjour</h2>

                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h3 class="font-medium text-gray-900 mb-2">Séjour actuel</h3>
                                <p class="text-sm text-gray-600">Arrivée : 15 Mars 2024</p>
                                <p class="text-sm text-gray-600">Départ : 18 Mars 2024</p>
                                <p class="font-medium text-sm mt-1">3 nuits • 2 adultes</p>
                            </div>

                            <hr class="border-t border-gray-200 my-4">

                            <!-- Formulaire -->
                            <div class="space-y-4">
                                <DateInput label="Nouvelle date d'arrivée" />
                                <DateInput label="Nouvelle date de départ" />
                                <NumberInput label="Nombre de voyageurs" />
                            </div>

                            <!-- Boutons -->
                            <div class="space-y-3">
                                <button
                                    class="w-full bg-customBlue/90 hover:bg-customBlue text-white py-3 rounded">Modifier
                                    les dates</button>
                            </div>

                            <!-- Note -->
                            <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                                <div class="flex items-start gap-2">
                                    <Clock class="w-4 h-4 text-amber-600 mt-0.5" />
                                    <div>
                                        <p class="font-medium">Modification gratuite</p>
                                        <p>Vous pouvez modifier vos dates jusqu'à 24h avant l'arrivée.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <!-- Chambres -->
            <div class="max-w-6xl mx-auto font-normal p-4 space-y-6 ">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Chambres disponibles</h1>
                    <p class="text-gray-600">Trouvez la chambre parfaite pour votre séjour</p>
                </div>

                <!-- Liste des chambres -->
                <div class="space-y-6">
                    <div v-for="room in rooms" :key="room.id"
                        class="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg border">
                        <div class="flex flex-col lg:flex-row">
                            <!-- Image -->
                            <div class="lg:w-80 relative">
                                <img :src="'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop'"
                                    :alt="room.productName" class="w-full h-64 lg:h-full object-cover" />
                                <!-- <img :src="room.images[0] || '/placeholder.svg?height=300&width=400'"
                                    :alt="room.productName" class="w-full h-64 lg:h-full object-cover" /> -->
                                <!-- <span v-if="room.discount"
                                    class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                    -{{ room.discount }}%
                                </span>
                                <span v-if="room.isPopular"
                                    class="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                                    Populaire
                                </span> -->
                                <button class="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full">
                                    <HeartIcon class="h-4 w-4" />
                                </button>
                            </div>

                            <!-- Contenu -->
                            <div class="flex-1 p-6 flex flex-col justify-between">
                                <!-- Titre et note -->
                                <div class="mb-4">
                                    <div class="flex items-start justify-between mb-2">
                                        <h3 class="text-xl font-bold text-gray-900 leading-tight">
                                            {{ room.productName }}
                                        </h3>
                                        <div class="flex items-center gap-1 ml-4">
                                            <div class="flex">
                                                <Star v-for="i in 5" :key="i" class="w-4 h-4"
                                                    :class="i <= Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'" />
                                            </div>
                                            <span class="text-sm font-medium text-gray-700 ml-1">{{ room.rating
                                                }}</span>
                                            <span class="text-sm text-gray-500">({{ room.reviewCount }} avis)</span>
                                        </div>
                                    </div>

                                    <!-- Capacité -->
                                    <div class="flex items-center text-gray-600 mb-3">
                                        <UsersIcon class="w-4 h-4 mr-1" />
                                        <span class="text-sm">Jusqu'à {{ room.capacity || 2 }} personnes{{ room.capacity > 1 ?
                                            "s" : "" }}</span>
                                    </div>
                                </div>

                                <!-- Description -->
                                <p class="text-gray-700 mb-4 line-clamp-2">{{ room.description }}</p>

                                <!-- Équipements -->
                                <div class="mb-6">
                                    <!-- <div class="flex flex-wrap gap-3">
                                        <div v-for="(amenity, index) in roomsTest.slice(0, 6)" :key="index"
                                            class="flex items-center text-sm text-gray-600">
                                            <component :is="getAmenityIcon(amenity)"
                                                v-if="getAmenityIcon(amenity)" class="w-4 h-4 mr-1.5 text-customBlue" />
                                            <div v-else class="w-1.5 h-1.5 bg-customBlue rounded-full mr-1.5" />
                                            <span>{{ amenity }}</span>
                                        </div>
                                        <span v-if="room.amenities.length > 6"
                                            class="text-sm text-customBlue font-medium">
                                            +{{ room.amenities.length - 6 }} autres
                                        </span>
                                    </div> -->
                                </div>

                                <!-- Prix et actions -->
                                <div class="flex items-end justify-between mt-auto">
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span v-if="room.originalPrice" class="text-sm text-gray-500 line-through">
                                                {{ room.originalPrice }} FCFA
                                            </span>
                                            <span class="text-sm text-gray-600">par nuit</span>
                                        </div>
                                        <div class="flex items-baseline gap-1">
                                            <span class="text-3xl font-bold">{{ room.price }} FCFA</span>
                                        </div>
                                        <p class="text-xs text-gray-500 mt-1">Taxes et frais inclus</p>
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <button class="bg-customRed hover:text-black text-white px-8 py-2 rounded">
                                            Réserver maintenant
                                        </button>
                                        <div class="flex justify-end">
                                            <span class="text-xs text-gray-700">
                                                Réserver maintenant vous permet de voir les détails
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bouton Voir plus -->
                <div class="flex justify-center mt-8">
                    <button class="border px-8 py-2 rounded hover:bg-gray-100">Voir plus de chambres</button>
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
            return CheckCircleIcon
    }
}
</script>

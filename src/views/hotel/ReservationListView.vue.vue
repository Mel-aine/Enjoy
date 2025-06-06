<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllServicesByServiceId } from '@/servicesApi/hotelServicesApi.js'
import { ArrowLeft, Wifi, Tv, } from 'lucide-vue-next'
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import BookingEdit from '@/components/hotel/BookingEditCard.vue'
const router = useRouter()

const dates = ref({
    checkin: null,
    checkout: null
})

console.log("composant monter")
const rooms = ref([])
const isLoading = ref(false);
onMounted(async () => {
    try {
        console.log("composant monter")

        isLoading.value = true
        // Vérifier si l'ID de l'hôtel est passé dans les paramètres de la route
        // const hotelId = router.currentRoute.value.params.hotelId
        // console.log("idh", hotelId)

        // if (!hotelId) {
        const response = await getAllServicesByServiceId(2)
        rooms.value = response.data
        console.log('Chargement des chambre de l hotel', rooms.value)
        // } else {
        //     console.warn('Aucun chambre trouvé dans les paramètres de la route')
        // }
    } catch (error) {
        console.error('Erreur lors du chargement des chambre de l hotel:', error)
    } finally {
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

// const hotelObject = hotel;
// console.log('hotelObject', hotelObject)

const checkinInput = ref(null)
const checkoutInput = ref(null)
console.log("dataStore", hotel)
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
    <div class="min-h-screen bg-gray-50 ">
        <!-- Header -->
        <div class="bg-white shadow-sm">
            <div class="container mx-auto px-4 py-4">
                <button @click="router.back()" class="inline-flex items-center text-gray-700 hover:text-blue-600">
                    <ArrowLeft class="w-5 h-5 mr-2" /> Retour aux résultats
                </button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-8">
            <!-- ist of reservation -->
            <div>
                <p class="text-3xl font-bold">{{ $t('listReservations') }} </p>
            </div>
            <div v-for="i in 5" :key="i">
                <BookingEdit />
            </div>
            <!-- <BookingEdit></BookingEdit> -->
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
<!-- <script>
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
</script> -->

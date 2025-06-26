<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import HotelCard from '../hotel/HotelCard.vue'
import { ArrowUpDownIcon } from 'lucide-vue-next'
import { getServiceProductByDate } from '@/servicesApi/hotelServicesApi.js'
import { useDataStore } from '@/stores/dataStore'
import LoaodingSpinner from '../spiner/LoaodingSpinner.vue'
import { formatDate } from '../../utils/functions'
import SearchInput from '../search/SearchInput.vue'
import { Categories } from '../../mocks/categories'
import GooglePlaceInput from '../search/GooglePlaceInput.vue'
import { useAddressStore } from '../../stores/addressStore'
const sercivesHotels = ref([]);
const serviceStore = useAddressStore()
const currentPlace = ref(serviceStore.currentPlace)
const dataStore = useDataStore()
const services = ref([]);
const isLoading = ref(true);
const props = defineProps({
    searchParams: Object,
    filters: Object,
    serviceType: {},
    sortOption: { type: String, default: 'recommended' }
})

const emit = defineEmits(['sortChange', 'address-change'])

const serviceType = ref(serviceStore.serviceType || props.serviceType || {})
const optionsService = ref([...Categories])
const sortedHotels = computed(() => {
    const hotels = []
    if (!hotels.length) return []

    // Créer une copie pour le tri
    const sorted = [...hotels]

    switch (props.sortOption) {
        case 'price-low':
            return sorted.sort((a, b) => (a.price || 0) - (b.price || 0))
        case 'price-high':
            return sorted.sort((a, b) => (b.price || 0) - (a.price || 0))
        case 'rating':
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        default:
            return sorted
    }
})


onMounted(async () => {
    fetchServices()
});
const changePlace = (place) => {
    console.log('service', place);
    currentPlace.value = place;
    serviceStore.setCurrentPlace(place);
    console.log('pace', serviceStore.currentPlace)
    emit('address-change', place)
}
const changeService = (st) => {
    serviceType.value = st
    serviceStore.setServiceType(st)
    fetchServices()
}

const fetchServices = async () => {
    if (!dataStore.searchFrom.destination || !dataStore.searchFrom.dateAller || !dataStore.searchFrom.dateRetour) {
        console.warn('Données de recherche manquantes, impossible de charger les services.')
        return
    }
    const guest_count = dataStore.searchFrom.rooms.reduce((sum, room) => {
        return sum + (room.adults || 0) + (room.childrens || 0);
    }, 0);
    console.log('currentPlace.value.address', currentPlace.value)
    const params = {

        address: currentPlace.value.address ?? '',
        start_date: formatDate('Today'),
        end_date: formatDate('Tomorrow'),
        guest_count,
        // Add filters, serviceType, etc. to params if needed
    };
    try {
        isLoading.value = true
        const response = await getServiceProductByDate(params);
        services.value = response.data ? response : { data: response }
        sercivesHotels.value = services.value.data.hotels || [];
        console.log('data', sercivesHotels.value);
        // Format and emit the hotel list
        const formattedList = sercivesHotels.value.map(hotel => {
            const address = JSON.parse(hotel.addressService);
            return {
                name: hotel.name || '',
                lat: address.lat || (address.location && hotel.location.lat) || 0,
                lng: address.lng || (address.location && hotel.location.lng) || 0,
                address: address.text || '',
                rating: hotel.averageRating || 0,
                category: hotel.categoryId || '',
            }
        })
        emit('hotels-loaded', formattedList);
        isLoading.value = false
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        isLoading.value = false;
    } finally {
        isLoading.value = false
    }
}
// Separated watchers
watch(() => props.serviceType, (newType) => {
    serviceType.value = newType
    serviceStore.setServiceType(newType)
    fetchServices()
})
watch(() => props.filters, fetchServices, { deep: true })
watch(() => props.searchParams, fetchServices, { deep: true });
watch(() => currentPlace.value, fetchServices, { deep: true })

</script>

<template>
    <div>
        <div class="flex">

        </div>
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center rounded shadow-sm bg-white">

                <SearchInput :options="optionsService" @select="changeService" v-model="serviceType.label" />

                <GooglePlaceInput @place-changed="changePlace" v-model="currentPlace.address" />

            </div>
            <h2 class="text-xl font-bold">
                <!-- <span v-if="!sortedHotels.length">{{ $t('appServices.hotel.justAMoment') }}</span> -->
                <span v-if="sortedHotels.length">{{ sortedHotels.length }} {{ $t('appServices.hotel.hotel') }}<span
                        v-if="sortedHotels.length > 1">s</span> {{ $t('appServices.hotel.found') }}<span
                        v-if="sortedHotels.length > 1">s </span></span>
                <span v-if="searchParams?.location && sortedHotels.length"> {{ $t('to') }} {{ searchParams.location
                }}</span>
            </h2>

            <div class="flex items-center">
                <span class="mr-2 text-sm">{{ $t('appServices.hotel.sortBy') }}</span>
                <div class="relative">
                    <select :value="sortOption" @change="emit('sortChange', $event.target.value)"
                        class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent">
                        <option value="recommended">{{ $t('appServices.hotel.recommended') }}</option>
                        <option value="price-low">{{ $t('appServices.hotel.priceLowToHigh') }}</option>
                        <option value="price-high">{{ $t('appServices.hotel.priceHighToLow') }}</option>
                        <option value="rating">{{ $t('appServices.hotel.guestRating') }}</option>
                    </select>
                    <ArrowUpDownIcon size="16"
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-customRed" />
                </div>
            </div>
        </div>
        <div>

            <!-- Liste des hôtels -->
            <div class="space-y-4">
                <template v-if="sercivesHotels.length > 0">
                    <HotelCard v-for="hotel in sercivesHotels" :key="hotel.id || hotel._id || Math.random()"
                        :hotel="hotel" />
                </template>

                <div v-else class="bg-white p-6 rounded-lg shadow-md text-center">
                    <p class="text-lg text-gray-600">
                        {{ $t('appServices.hotel.noHotelsMatch') }}
                    </p>
                    <p class="text-sm text-gray-500 mt-2">
                        {{ $t('appServices.hotel.adjustFilters') }}
                    </p>
                </div>
            </div>
        </div>
        <!-- Squelettes de chargement -->
        <LoaodingSpinner v-if="isLoading" />
    </div>
</template>

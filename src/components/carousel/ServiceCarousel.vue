<template>
    <!-- Actual Data -->
    <template v-if="!loading && services.length > 0">
        <div class="flex flex-col gap-2 mb-6  w-full  items-start mx-auto  max-w-screen-2xl">
            <div class="flex gap-3 items-center">
                <i :class="`${category.icon} text-2xl text-customRed`"></i>
                <a :href="'/categories/' + category.id" class="font-semibold text-3xl cursor-pointer"> {{
                    $t(category.categoryName) }}</a>
                <a :href="'/categories/' + category.id" class="font-semibold text-sm text-customRed cursor-pointer">{{
                    $t("view_more")
                }}</a>
            </div>
            <div class="relative w-full">
                <!-- Left Scroll Button -->
                <button @click="scrollLeft"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 ">
                    <ChevronLeft class="w-6 h-6" />
                </button>

                <!-- Scrollable Card Container -->
                <div ref="scrollContainer" class="flex gap-4 overflow-x-auto scroll-smooth px-10 py-4 no-scrollbar">
                    <div v-for="(service, index) in services" :key="index"
                        class="min-w-[250px] max-w-xs bg-white rounded-lg shadow-md p-4 flex-shrink-0 cursor-pointer"
                        @click="handleViewDeal(service)">
                        <img v-if="service.image" :src="service.image" alt="hotel"
                            class="w-full h-40 object-cover rounded-md mb-2" />
                        <h3 class="font-semibold text-lg">{{ service.name }}</h3>
                        <p class="text-sm text-gray-500">{{ service.location }}</p>
                        <p class="text-sm mt-1" v-if="service.price">
                            {{ $t("starting_from") }} {{ service.price }} / {{ $t("per_person") }}
                        </p>
                        <div class="flex items-center mt-2">
                            <Star class="w-4 h-4 text-yellow-400" />
                            <span class="ml-1 text-sm">{{ service.rating }}</span>
                            <span class="ml-auto text-sm text-gray-500" v-if="service.likes > 0"> ({{ service.likes }} {{
                                $t("likes") }})</span>
                        </div>
                    </div>
                </div>

                <!-- Right Scroll Button -->
                <button @click="scrollRight"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2">
                    <ChevronRight class="w-6 h-6" />
                </button>
            </div>
        </div>
    </template>
</template>

<script setup>
import { onMounted, ref,watch } from 'vue'
import { ChevronLeft, ChevronRight, Star } from 'lucide-vue-next'
import { getServicesCategoryIdBy } from '../../servicesApi/hotelServicesApi'
import { useMIHStore } from '@/stores/manageHotelInterface';

const hotelStore = useMIHStore();
const props = defineProps({
    category: {
        type: Object,
        required: true
    },
})
const emit = defineEmits(['display'])
const scrollContainer = ref(null)
const loading = ref(false);
const scrollLeft = () => {
    scrollContainer.value?.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
    scrollContainer.value?.scrollBy({ left: 300, behavior: 'smooth' })
}

const services = ref([
])

const getServiceListLocal = async () => {
    try {
        loading.value = true;
        const result = await getServicesCategoryIdBy(props.category.id);
        const datas = result.data;
        console.log("props.category.id",props.category.id)
        if (datas && datas.items.
            length > 0) {
            services.value = datas.items.map((e) => {
                return {
                    id:e.id,
                    name: e.name,
                     location: e.addressService
                      ? JSON.parse(e.addressService).text
                      : 'Location not available',
                    price: e.price,
                    rating: e.averageRating ?? 0,
                    likes: 0,
                    image: e.logo,
                };
            })
        }
        console.log('services.value', services.value);
        loading.value = false;
        emit('display');

    } catch (error) {
        loading.value = false;
        console.error('Erreur lors du chargement des services :', error)
    }
}


watch(() => props.category.id, async (newId) => {
  if (newId) {
    await getServiceListLocal()
  }
})

const handleViewDeal = (service) => {
    hotelStore.setHotel(service)
    hotelStore.getHotelId(service.id)
    window.location.href = `/all_service/${service.id}`;
}
onMounted(() => {
    getServiceListLocal();
})
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>

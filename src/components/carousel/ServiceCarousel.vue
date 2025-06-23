<template>
    <div class="flex flex-col gap-2 mb-6  w-full  items-start mx-auto  max-w-screen-2xl">
        <div class="flex gap-3 items-center">
            <i :class="`${category.icon} text-2xl text-customRed`"></i>
            <a :href="category.link" class="font-semibold text-3xl"> {{ $t('categories.' + category.label) }}</a>
            <a :href="category.link" class="font-semibold text-sm">{{ $t("view_more") }}</a>
        </div>
        <div class="relative w-full">
            <!-- Left Scroll Button -->
            <button @click="scrollLeft"
                class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 ">
                <ChevronLeft class="w-6 h-6" />
            </button>

            <!-- Scrollable Card Container -->
            <div ref="scrollContainer" class="flex gap-4 overflow-x-auto scroll-smooth px-10 py-4 no-scrollbar">
                <div v-for="(hotel, index) in hotels" :key="index"
                    class="min-w-[250px] max-w-xs bg-white rounded-lg shadow-md p-4 flex-shrink-0">
                    <img v-if="hotel.image" :src="hotel.image" alt="hotel"
                        class="w-full h-40 object-cover rounded-md mb-2" />
                    <h3 class="font-semibold text-lg">{{ hotel.name }}</h3>
                    <p class="text-sm text-gray-500">{{ hotel.location }}</p>
                    <p class="text-sm mt-1">À partir de {{ hotel.price }} XAF / personne</p>
                    <div class="flex items-center mt-2">
                        <Star class="w-4 h-4 text-yellow-400" />
                        <span class="ml-1 text-sm">{{ hotel.rating }}</span>
                        <span class="ml-auto text-sm text-gray-500">({{ hotel.likes }} like)</span>
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

<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, Star } from 'lucide-vue-next'

const props = defineProps({
    services: {
        type: Array,
        required: true,
    },
    category: {
        type: Object,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
const scrollContainer = ref(null)

const scrollLeft = () => {
    scrollContainer.value?.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
    scrollContainer.value?.scrollBy({ left: 300, behavior: 'smooth' })
}

const hotels = [
    {
        name: 'Résidence Lucianna',
        location: 'Yassa, Douala, Cameroun',
        price: '50,000',
        rating: 0.0,
        likes: 0,
        image: 'https://via.placeholder.com/250x150?text=Lucianna',
    },
    {
        name: 'Escale Désirée Deido',
        location: 'Deido, Douala, Cameroun',
        price: '30,000',
        rating: 0.0,
        likes: 0,
        image: 'https://via.placeholder.com/250x150?text=Escale',
    },
    {
        name: 'Meublés Georges House',
        location: 'Bonamoussadi, Douala, Cameroun',
        price: '25,000',
        rating: 0.0,
        likes: 0,
        image: 'https://via.placeholder.com/250x150?text=Georges',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },
    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },

    {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    }, {
        name: 'Lagon Lifestyle',
        location: 'Bastos, Yaounde, Cameroun',
        price: '100,000',
        rating: 4.0,
        likes: 2,
        image: 'https://via.placeholder.com/250x150?text=Lagon',
    },



]
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
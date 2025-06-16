<template>
    <div class="bg-white border-e">
        <div class="border-b p-2">
            <h2 class="font-bold text-lg ">{{ $t('appServices.hotel.filterBy') }} :</h2>
        </div>

        <!-- Price Range -->
        <div v-for="(sec, i) in filterList" :key="i" class=" p-2 border-b">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleSection(sec)">
                <h3 class="text-md font-semibold">{{ $t(sec.title) }}</h3>
                <span
                    class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">
                    {{ sec.expanded ? '-' : '+' }}
                </span>
            </div>
            <div class="mt-2 grid grid-cols-1 ">
                <div v-for="option in sec.options" :key="option.id" class="flex  py-2">
                    <input type="checkbox" :id="'price-' + option.id" v-model="option.checked"
                        class="accent-purple-500 mr-2 h-5 w-5" @change="updateFilters" />
                    <label :for="'price-' + option.id" class="cursor-pointer">
                        {{ option.label }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import data from '@/assets/datas/filter_h.json'
import {
    WifiIcon, SquareParkingIcon, AccessibilityIcon, SnowflakeIcon,
    SunIcon, WavesLadderIcon, DumbbellIcon, SpadeIcon,
    UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, StarIcon
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    activeFilters: Object,
    onFilterChange: Function
})

const expanded = ref({
    price: true,
    capacity: false,
    dates: false,
    stars: false,
    amenities: false,
    property: false
})
const filterList = ref(data.sections);
function toggleSection(section) {
    section.expanded = !section.expanded;
}



const updateFilters = () => {
}
const web = data;
console.log(web);
</script>

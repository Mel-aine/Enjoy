<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="font-bold text-lg mb-4">Filter by:</h2>
    <div class="mb-6">
      <h3 class="font-medium mb-2">Price per night</h3>
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm text-gray-600">{{ priceRange[0] }}</span>
        <span class="text-sm text-gray-600">{{ priceRange[1] }}</span>
      </div>
      <div class="relative h-2 bg-gray-200 rounded-full">
        <div class="absolute h-full bg-customBlue rounded-full" :style="{
          left: `${(priceRange[0] / 1000) * 100}%`,
          right: `${100 - (priceRange[1] / 1000) * 100}%`
        }"></div>
      </div>
      <div class="flex justify-between mt-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">Min Price</label>
          <input type="number" v-model="priceRange[0]" min="0" max="1000"
            class="w-24 border border-gray-300 rounded p-1 text-sm" @input="updateFilters" />
        </div>
        <div>
          <label class="block text-sm text-gray-600 mb-1">Max Price</label>
          <input type="number" v-model="priceRange[1]" min="0" max="1000"
            class="w-24 border border-gray-300 rounded p-1 text-sm" @input="updateFilters" />
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-medium mb-2">Star Rating</h3>
      <div class="space-y-2">
        <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="flex items-center">
          <input type="checkbox" :id="`star-${rating}`" v-model="starRating" :value="rating" class="mr-2"
            @change="updateFilters" />
          <label :for="`star-${rating}`" class="flex items-center cursor-pointer">
            <StarIcon v-for="i in rating" :key="i" size="16" class="text-customRed fill-customRed" />
            <StarIcon v-for="i in (5 - rating)" :key="i" size="16" class="text-gray-300" />
          </label>
        </div>
      </div>
    </div>

    <div>
      <h3 class="font-medium mb-2">Amenities</h3>
      <div class="space-y-2">
        <div v-for="amenity in amenitiesList" :key="amenity.id" class="flex items-center">
          <input type="checkbox" :id="amenity.id" v-model="amenities" :value="amenity.id" class="mr-2"
            @change="updateFilters" />
          <label :for="amenity.id" class="flex items-center cursor-pointer">
            <component :is="amenity.icon" size="16" class="mr-2" />
            <span>{{ amenity.label }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { StarIcon, WifiIcon, UtensilsIcon, DumbbellIcon } from 'lucide-vue-next';

const props = defineProps({
  activeFilters: Object,
  onFilterChange: Function
});

const priceRange = ref([...props.activeFilters.priceRange]);
const starRating = ref([...props.activeFilters.starRating]);
const amenities = ref([...props.activeFilters.amenities]);

const amenitiesList = [
  { id: 'wifi', label: 'Free WiFi', icon: WifiIcon },
  { id: 'breakfast', label: 'Breakfast Included', icon: UtensilsIcon },
  { id: 'gym', label: 'Fitness Center', icon: DumbbellIcon }
];

const updateFilters = () => {
  props.onFilterChange({
    priceRange: priceRange.value,
    starRating: starRating.value,
    amenities: amenities.value
  });
};
</script>
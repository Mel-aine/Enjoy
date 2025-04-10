<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="font-bold text-lg mb-4">{{ $t('appServices.hotel.filterBy') }} :</h2>
    <div class="">
      <!-- <h3 class="font-medium mb-2">{{ $t('appServices.hotel.pricePerNight') }} </h3> -->
      <!-- <div class="flex items-center justify-between mb-2">
        <span class="text-sm text-gray-600">{{ priceRange[0] }}</span>
        <span class="text-sm text-gray-600">{{ priceRange[1] }}</span>
      </div> -->
      <!-- <div class="relative h-2 bg-gray-200 rounded-full">
        <div class="absolute h-full bg-customBlue rounded-full" :style="{
          left: `${((priceRange[0] - 20000) / (40000 - 20000)) * 100}%`,
          right: `${100 - ((priceRange[1] - 20000) / (40000 - 20000)) * 100}%`
        }"></div>
      </div> -->
      <!-- <div class="flex justify-between mt-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">{{ $t('appServices.hotel.min') }} {{
            $t('appServices.hotel.price') }}</label>
          <input type="number" v-model="priceRange[0]" min="20000" max="40000"
            class="w-24 border border-gray-300 rounded p-1 text-sm" @input="updateFilters" />

        </div>
        <div>
          <label class="block text-sm text-gray-600 mb-1">{{ $t('appServices.hotel.max') }} {{
            $t('appServices.hotel.price') }}</label>
          <input type="number" v-model="priceRange[1]" min="20000" max="40000"
            class="w-24 border border-gray-300 rounded p-1 text-sm" @input="updateFilters" />
        </div>
      </div> -->
      <!-- <h3 class="font-medium mb-2">Price Range</h3> -->




    </div>
      <h3 class="font-medium mb-1">Price Range</h3>

    <div v-for="option in priceRangeOptions" :key="option.id" class="flex items-center">
  <input
    type="checkbox"
    :id="'price-' + option.id"
    v-model="priceRange"
    :value="option.id"
    class="mr-2"
    @change="updateFilters"
  />
  <label :for="'price-' + option.id" class="cursor-pointer">
    {{ option.label }}
  </label>
</div>


    <div class="mb-6">
      <h3 class="font-medium mb-2 mt-2">{{ $t('appServices.hotel.starRating') }}</h3>
      <div class="space-y-2">
        <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="grid grid-cols-[auto_1fr] gap-2 items-center">
          <input type="checkbox" :id="`star-${rating}`" v-model="starRating" :value="rating" class="cursor-pointer"
            @change="updateFilters" />
          <label :for="`star-${rating}`" class="flex items-center cursor-pointer space-x-1">
            <template v-for="i in 5" :key="i">
              <StarIcon size="16" :class="i <= rating ? 'text-customRed fill-customRed' : 'text-gray-300'" />
            </template>
          </label>
        </div>
      </div>
    </div>

    <h3 class="font-medium mb-2 mt-2">{{ $t('appServices.hotel.amenities') }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
  <div v-for="amenity in amenitiesList" :key="amenity.id" class="flex items-center">
    <input type="checkbox"
           :id="amenity.id"
           v-model="amenities"
           :value="amenity.id"
           class="mr-2"
           @change="updateFilters" />
    <label :for="amenity.id" class="flex items-center cursor-pointer ">
      <component :is="amenity.icon" size="16" class="mr-2" />
      <span>{{ amenity.label }}</span>
    </label>
  </div>
</div>
    <div class="mt-6">
  <h3 class="font-medium mb-2">{{ $t('appServices.hotel.propertyType') }}</h3>
  <div class="space-y-2">
    <div v-for="type in propertyTypeList" :key="type.id" class="flex items-center">
      <input type="checkbox" :id="type.id" v-model="propertyTypes" :value="type.id" class="mr-2" @change="updateFilters" />
      <label :for="type.id" class="cursor-pointer">{{ type.label }}</label>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, defineProps,computed } from 'vue';
import {
  StarIcon, WifiIcon, SquareParkingIcon, AccessibilityIcon, SnowflakeIcon,
  SunIcon, WavesLadderIcon, DumbbellIcon, SpadeIcon,
  UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  activeFilters: Object,
  onFilterChange: Function
});

// const priceRange = ref([...props.activeFilters.priceRange]);
const starRating = ref([...props.activeFilters.starRating]);
const amenities = ref([...props.activeFilters.amenities]);
const propertyTypes = ref([...props.activeFilters.propertyTypes || []]);
const priceRangeOptions = [
  { id: '$', label: t('appServices.hotel.budget') },       // ou simplement 'Économique'
  { id: '$$', label: t('appServices.hotel.standard') },     // ou 'Standard'
  { id: '$$$', label: t('appServices.hotel.premium') },     // ou 'Premium'
  { id: '$$$$', label: t('appServices.hotel.luxury') }      // ou 'Luxe'
];const priceRange = ref([]) // ou ton `props.activeFilters.priceRange` si tu fais du v-model direct



const propertyTypeList = [
  { id: 'room', label: t('appServices.hotel.room') },
  { id: 'apartment', label: t('appServices.hotel.apartment') },
  { id: 'suite', label: t('appServices.hotel.suite') },
  { id: 'duplex', label: t('appServices.hotel.duplex') }
];
const amenitiesList = computed(() => [
{ id: 'wifi', label: t('appServices.hotel.freeWifi'), icon: WifiIcon },
  { id: 'parking', label: t('appServices.hotel.parking'), icon: SquareParkingIcon },
  { id: 'pmr', label: t('appServices.hotel.accessiblePmr'), icon: AccessibilityIcon },
  { id: 'ac', label: t('appServices.hotel.airConditioning'), icon: SnowflakeIcon },
  { id: 'terrace', label: t('appServices.hotel.terrace'), icon: SunIcon },
  { id: 'pool', label: t('appServices.hotel.pool'), icon: WavesLadderIcon },
  { id: 'gym', label: t('appServices.hotel.fitnessCenter'), icon: DumbbellIcon },
  { id: 'spa', label: t('appServices.hotel.spa'), icon: SpadeIcon },
  { id: 'restaurant', label: t('appServices.hotel.restaurant'), icon: UtensilsIcon },
  { id: 'bar', label: t('appServices.hotel.bar'), icon: WineIcon },
  { id: 'kids', label: t('appServices.hotel.kidsSpace'), icon: BabyIcon },
  { id: 'pets', label: t('appServices.hotel.petsAllowed'), icon: DogIcon },
  { id: 'meeting', label: t('appServices.hotel.meetingRoom'), icon: BriefcaseIcon }
]);

const updateFilters = () => {
  props.onFilterChange({
    priceRange: priceRange.value,
    starRating: starRating.value,
    amenities: amenities.value,
    propertyTypes: propertyTypes.value
  });
};
</script>
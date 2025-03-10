<template>
  <div class="p-5 space-y-5  bg-white">
    <!-- Filtres -->
    <FilterSection :title="$t('filter')">
      <h2 class="text-gray-950 text-md mt-2">{{ $t('price') }}</h2>
      <div class="border rounded-full h-8 border-gray-300 flex items-center justify-between md:px-1 px-3 w-full md:w-[160px] mt-2">
        <span v-for="(symbol, index) in priceOptions" :key="index"
              class="text-gray-800 px-2 text-sm font-medium" :class="{ 'border-l': index > 0, 'border-gray-300': index > 0 }">
          {{ symbol }}
        </span>
      </div>
    </FilterSection>

    <!-- Suggestions -->
    <FilterSection :title="$t('suggested')">
      <CheckboxGroup :items="suggestedOptions" />
    </FilterSection>

    <!-- Categories -->
    <FilterSection :title="$t('categorie')">
      <div class="flex flex-row flex-wrap gap-2 w-[200px]">
        <RoundedButton v-for="item in mainCategory" :key="item.id" :label="item" />
        <button type="button" @click="isModalOpen = true" class="text-customBlueVariant font-bold hover:underline">{{ $t('see') }}</button>
      </div>
    </FilterSection>

    <!-- Features -->
    <FilterSection :title="$t('feature')">
      <CheckboxGroup :items="featuresOptions" />
      <button type="button" class="text-customBlueVariant font-bold mt-2 hover:underline">{{ $t('see') }}</button>
    </FilterSection>

    <ModalCategory
      :isOpen="isModalOpen"
      :showActionButton="true"
      actionText="Rechercher"
      @close="isModalOpen = false"
    >
    <div >
      <CheckboxGroup :items="Category" class="grid grid-cols-2  gap-2 mx-2" />
    </div>
    </ModalCategory>
  </div>
</template>

<script setup>
import {ref,computed} from'vue';
import FilterSection from '../filter/FilterSection.vue';
import CheckboxGroup from '../filter/CheckboxGroup.vue';
import RoundedButton from '../filter/RoundedButton.vue'
import ModalCategory from '../modals/ModalCategory.vue';
import { useI18n } from "vue-i18n";




const priceOptions = ref(['$', '$$', '$$$', '$$$$']);
const { t } = useI18n();
const isModalOpen = ref(false);
const suggestedOptions = computed(() => [
  t('open_now'),
  t('offers_delivery'),
  t('offers_takeout'),
  t('good_for_dinner'),
  t('outdoor_seating'),
  t('good_for_lunch')
]);

const mainCategory = computed(() => Category.value.slice(0, 6));

const featuresOptions = computed(()=>[t('good_for_kids'),t('good_for_groups'),t('dogs_allowed'),t('full_bar'),t('good_for_brunch'),t('takes_reservations')]);
const Category = computed(()=> [
  t('burgers'), t('hot_dogs'), t('fast_food'), t('american'), t('food_trucks'), t('diners'), t('salad'), t('restaurants'),
  t('food_delivery_services'), t('beer_bar'), t('vegan'), t('sandwiches'), t('sports_bars'), t('food_stands'), t('pubs'),
  t('fish_and_chips'), t('halal'), t('breakfast_and_brunch'), t('vegetarian'), t('pizza'), t('international'), t('cocktail_bars'),
  t('chicken_shops'), t('bars'), t('food'), t('steakhouses'), t('modern_european'), t('falafel')
]);

</script>

<template>


    <div class="container mx-auto bg-green/50">
        <span class="item-start">Agency</span>

    </div>

    <div class="container mx-auto">
        <RadioButton v-model="selectedOption" :options="radioOptions" />
  

    </div>

    <div class="container mx-auto">

        <div class="w-full max-w-sm min-w-[200px] relative ml-1">
    <div class="flex items-center rounded shadow-sm overflow-hidden bg-white">
      <input
        v-model="leftValue"
        @mouseenter="activeInput = 'left'"
        placeholder="Restaurant"
        class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <div class="h-6 border-l border-slate-200 ml-1"></div>
      <input
        v-model="rightValue"
        @mouseenter="activeInput = 'right'"
        placeholder="Yaoun"
        class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <router-link to="/recherche">
        <button class="bg-customRed px-4 py-3 text-white ml-2">
          <BaseIcon name="Search" size="20" stroke-width="2" />
        </button>
      </router-link>

              </div>

    <ul v-if="activeInput === 'left'" @mouseenter="activeInput = 'left'" @mouseleave="handleMouseLeave('left')" class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto ">
      <li v-for="item in menuItems" :key="item" @mouseenter="leftValue = item.label" @click="selectItem('left', item.label)" class=" flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
        <BaseIcon  :name="item.icon" size="18" stroke-width="2"></BaseIcon>
        <span class="ml-2">
          {{ item.label }}
        </span>
      </li>
    </ul>

    <ul v-if="activeInput === 'right'" @mouseenter="activeInput = 'right'" @mouseleave="handleMouseLeave('right')" class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto">
      <li class="flex justify-center items-center mt-3">
        <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3"/>
        <span class="text-md text-blue-400"> {{ $t('navbar.space') }} </span>
      </li>
      <li v-for="item in menuData" :key="item" @mouseenter="rightValue = item.label" @click="selectItem('right', item.label)" class="px-3 py-2 text-md z-[100] hover:bg-gray-100 cursor-pointer mx-2">
        {{ item.label }}
      </li>
    </ul>
  </div>
    </div>

</template>
<script setup>
import { ref, computed } from 'vue';
import RadioButton from '@/components/buttons/RadioButton.vue';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();

const selectedOption = ref('Aller');
const radioOptions = [
  { label: 'Aller', value: 'Aller' },
  { label: 'Aller et retour', value: 'Aller_et_retour' },
];

const menuItems = computed(() =>[
  {  label: t('navbar.restaurant'), icon: "Utensils" },
  {  label: t('navbar.delivery'), icon: "Package" },
  {  label: t('navbar.takeAway'), icon: "ShoppingBasket" },
  {  label: t('navbar.accountants'), icon: "Calculator" },
  {  label: t('navbar.plumbers'), icon: "Droplets" },
  {  label: t('navbar.autoRepair'), icon: "Wrench" },

]);


const menuData  = computed(() =>[
{ label: "Yaounde, CE,"+ t('navbar.cameroon') },
  { label: "Douala, LT , "+ t('navbar.cameroon') },
  { label: "Bamenda, NW, "+ t('navbar.cameroon') },
  { label: "Garoua, NO, "+ t('navbar.cameroon') },
  { label: "Bafoussam, OU, "+ t('navbar.cameroon') },
  { label: "Limbe, SO, "+ t('navbar.cameroon') },
  { label: "Kribi, SU, "+ t('navbar.cameroon') },
  { label: "Buea, SW, "+ t('navbar.cameroon') },
  { label: "Maroua, EN, "+ t('navbar.cameroon') },
  { label: "Dschang, OU, "+ t('navbar.cameroon') },
]);

</script>
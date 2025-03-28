<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { ClockIcon } from 'lucide-vue-next';

const props = defineProps({
  formData: Object
});
const emit = defineEmits(['updateFormData']);

const showDaySelector = ref(false);
const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const priceRanges = [
  { value: '$', label: '€ - Économique' },
  { value: '$$', label: '€€ - Modéré' },
  { value: '$$$', label: '€€€ - Élevé' },
  { value: '$$$$', label: '€€€€ - Luxe' }
];

const openingHours = ref(
  Object.fromEntries(daysOfWeek.map(day => [day, { opening: '09:00', closing: '18:00' }]))
);

const handleChange = (event) => {
  const { name, value, type, checked } = event.target;

  if (name === 'opening_days') {
    const updatedDays = [...props.formData.opening_days];
    if (checked) {
      updatedDays.push(value);
    } else {
      const index = updatedDays.indexOf(value);
      if (index > -1) updatedDays.splice(index, 1);
    }
    emit('updateFormData', { opening_days: updatedDays });
  } else if (type === 'number') {
    emit('updateFormData', { [name]: value === '' ? '' : parseInt(value, 10) });
  } else {
    emit('updateFormData', { [name]: value });
  }
};

const selectAllDays = () => {
  emit('updateFormData', { opening_days: [...daysOfWeek] });
};

const selectWeekdays = () => {
  emit('updateFormData', { opening_days: daysOfWeek.slice(0, 5) });
};

const selectSingleDay = (day) => {
  emit('updateFormData', { opening_days: [day] });
  showDaySelector.value = false;
};

const updateDayTime = (day, type, value) => {
  openingHours.value[day][type] = value;
  emit('updateFormData', { opening_hours: openingHours.value });
};
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Informations opérationnelles</h3>
    <p class="text-sm text-gray-500">Détails sur les horaires et la capacité de votre service.</p>
    
    <div>
      <fieldset>
        <legend class="text-sm font-medium text-gray-700">Jours d'ouverture</legend>
        <div class="flex flex-wrap gap-2">
          <button @click="selectAllDays" class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">Toute la semaine</button>
          <button @click="selectWeekdays" class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600">Sauf le week-end</button>
          <div class="relative">
            <button @click="showDaySelector = !showDaySelector" class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600">Un jour en particulier</button>
            <div v-if="showDaySelector" class="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
              <button v-for="day in daysOfWeek" :key="day" @click="selectSingleDay(day)" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ day }}</button>
            </div>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-y-2">
          <div v-for="day in daysOfWeek" :key="day" class="flex items-center">
            <input :id="`day-${day}`" name="opening_days" :value="day" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded" :checked="props.formData.opening_days.includes(day)" @change="handleChange" />
            <label :for="`day-${day}`" class="ml-2 text-sm text-gray-700">{{ day }}</label>
          </div>
        </div>
      </fieldset>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700">Horaires d'ouverture</label>
      <div v-for="day in props.formData.opening_days" :key="day" class="mt-2">
        <span class="text-gray-700 font-medium">{{ day }}</span>
        <div class="mt-1 flex items-center space-x-4">
          <input type="time" :value="openingHours[day].opening" @change="updateDayTime(day, 'opening', $event.target.value)" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
          <span class="text-gray-500">-</span>
          <input type="time" :value="openingHours[day].closing" @change="updateDayTime(day, 'closing', $event.target.value)" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
        </div>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Gamme de prix</label>
      <select id="price_range" name="price_range" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="props.formData.price_range" @change="handleChange" required>
        <option value="">Sélectionnez une gamme de prix</option>
        <option v-for="range in priceRanges" :key="range.value" :value="range.value">{{ range.label }}</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700">Capacité maximale</label>
      <input type="number" name="capacity" id="capacity" min="1" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: 50" v-model="props.formData.capacity" @change="handleChange" required />
      <p class="mt-1 text-sm text-gray-500">Nombre maximum de personnes que votre service peut accueillir simultanément.</p>
    </div>
  </div>
</template>

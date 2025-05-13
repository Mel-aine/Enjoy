<script setup>
import { ref, defineProps, defineEmits } from 'vue';

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

// Met à jour l'état des jours cochés
const handleDaySelection = (event) => {
  const { value, checked } = event.target;
  const updatedOpenings = { ...props.formData.openings || {} };

  if (checked) {
    updatedOpenings[value] = { opening: '09:00', closing: '18:00' };
  } else {
    delete updatedOpenings[value];
  }

  emit('updateFormData', { openings: updatedOpenings });
};

// Sélectionner tous les jours
const selectAllDays = () => {
  const allDays = Object.fromEntries(daysOfWeek.map(day => [day, { opening: '09:00', closing: '18:00' }]));
  emit('updateFormData', { openings: allDays });
  console.log('All days selected:', allDays);
};

// Sélectionner uniquement les jours de semaine
const selectWeekdays = () => {
  const weekdays = Object.fromEntries(daysOfWeek.slice(0, 5).map(day => [day, { opening: '09:00', closing: '18:00' }]));
  emit('updateFormData', { openings: weekdays });
};

// Sélectionner un seul jour
const selectSingleDay = (day) => {
  emit('updateFormData', { openings: { [day]: { opening: '09:00', closing: '18:00' } } });
  showDaySelector.value = false;
};

// Mettre à jour les horaires d'un jour donné
const updateDayTime = (day, type, value) => {
  if (!props.formData.openings?.[day]) return;
  
  const updatedOpenings = {
    ...props.formData.openings,
    [day]: { ...props.formData.openings[day], [type]: value }
  };

  emit('updateFormData', { openings: updatedOpenings });
};

// Gestion des changements génériques
const handleChange = (event) => {
  const { name, value } = event.target;
  emit('updateFormData', { [name]: value });
};
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">{{ $t('infoOperatinal')}}</h3>
    <p class="text-sm text-gray-500">{{ $t('detailsOnHour')}}</p>
    
    <!-- Sélection des jours -->
    <div>
      <fieldset>
        <legend class="text-sm font-medium text-gray-700">{{ $t('openingDays')}}</legend>
        <div class="flex flex-wrap gap-2">
          <button 
            type="button"
            @click="selectAllDays" 
            class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
          {{ $t('allWeek')}}
          </button>
          <button 
            type="button"
            @click="selectWeekdays" 
            class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
          {{ $t('mondayToFriday')}}
          </button>
          <div class="relative">
            <button 
              type="button"
              @click="showDaySelector = !showDaySelector" 
              class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
            {{ $t('aParticularDay')}}
            </button>
            <div v-if="showDaySelector" class="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
              <button 
                v-for="day in daysOfWeek" 
                :key="day" 
                type="button"
                @click="selectSingleDay(day)" 
                class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {{ day }}
              </button>
            </div>
          </div>
        </div>

        <!-- Checkbox des jours -->
        <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-y-2">
          <div v-for="day in daysOfWeek" :key="day" class="flex items-center">
            <input 
              :id="`day-${day}`"
              name="opening_days"
              :value="day"
              type="checkbox"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded"
              :checked="props.formData.openings && day in props.formData.openings"
              @change="handleDaySelection"
            />
            <label :for="`day-${day}`" class="ml-2 text-sm text-gray-700">{{ day }}</label>
          </div>
        </div>
      </fieldset>
    </div>
    
    <!-- Horaires d'ouverture -->
    <div v-if="props.formData.openings && Object.keys(props.formData.openings).length > 0">
      <label class="block text-sm font-medium text-gray-700">{{ $t('openingHour')}}</label>
      <div v-for="(times, day) in props.formData.openings" :key="day" class="mt-2">
        <span class="text-gray-700 font-medium">{{ day }}</span>
        <div class="mt-1 flex items-center space-x-4">
          <input 
            type="time" 
            :value="times.opening" 
            @change="updateDayTime(day, 'opening', $event.target.value)"
            class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
            required 
          />
          <span class="text-gray-500">-</span>
          <input 
            type="time" 
            :value="times.closing" 
            @change="updateDayTime(day, 'closing', $event.target.value)"
            class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" 
            required 
          />
        </div>
      </div>
    </div>

    <!-- Gamme de prix -->
    <div>
      <label for="price_range" class="block text-sm font-medium text-gray-700">{{ $t('priceRange')}}</label>
      <select 
        id="price_range"
        name="price_range"
        class="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :value="props.formData.price_range"
        @change="handleChange"
        required
      >
        <option value="">{{ $t('selectPriceRange')}}</option>
        <option v-for="range in priceRanges" :key="range.value" :value="range.value">
          {{ range.label }}
        </option>
      </select>
    </div>
    
    <!-- Capacité -->
    <div>
      <label for="capacity" class="block text-sm font-medium text-gray-700">{{ $t('maxCapacity')}}</label>
      <input 
        type="number" 
        name="capacity" 
        id="capacity" 
        min="1"
        class="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Ex: 50"
        :value="props.formData.capacity"
        @change="handleChange"
        required 
      />
      <p class="mt-1 text-sm text-gray-500">{{ $t('maxNumberPersons')}}</p>
    </div>
  </div>
</template>
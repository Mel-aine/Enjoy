<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
  formData: Object
});
const emit = defineEmits(['updateFormData']);

const showDaySelector = ref(false);
const daysOfWeek = computed(() => [
  { id: 'Monday', label: t('monday') },
  { id: 'Tuesday', label: t('tuesday') },
  { id: 'Wednesday', label: t('wednesday') },
  { id: 'Thursday', label: t('thursday') },
  { id: 'Friday', label: t('friday') },
  { id: 'Saturday', label: t('saturday') },
  { id: 'Sunday', label: t('sunday') },
]);const priceRanges = [
  { value: '$', label: t('appServices.hotel.budget') },
  { value: '$$', label: t('appServices.hotel.standard') },
  { value: '$$$', label: t('appServices.hotel.premium') },
  { value: '$$$$', label: t('appServices.hotel.luxury') }
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

const selectAllDays = () => {
  const allDays = Object.fromEntries(
    daysOfWeek.value.map(day => [day.id, { opening: '09:00', closing: '18:00' }])
  );
  emit('updateFormData', { openings: allDays });
};

const selectWeekdays = () => {
  const weekdays = Object.fromEntries(
    daysOfWeek.value.slice(0, 5).map(day => [day.id, { opening: '09:00', closing: '18:00' }])
  );
  emit('updateFormData', { openings: weekdays });
};

const selectSingleDay = (day) => {
  emit('updateFormData', { openings: { [day.id]: { opening: '09:00', closing: '18:00' } } });
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
  <!-- <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"></div> -->
  <div class="space-y-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">{{ $t('infoOperatinal') }}</h3>
    <p class="text-sm text-gray-500">{{ $t('detailsOnHour') }}</p>
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <!-- Sélection des jours -->
      <div>
        <fieldset>
          <legend class="text-sm font-medium text-gray-700 py-2">{{ $t('openingDays') }}<span class="text-red-500">*</span></legend>
          <div class="flex flex-wrap gap-2">
            <button type="button" @click="selectAllDays"
              class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {{ $t('allWeek') }}
            </button>
            <button type="button" @click="selectWeekdays"
              class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600">
              {{ $t('mondayToFriday') }}
            </button>
            <div class="relative">
              <button type="button" @click="showDaySelector = !showDaySelector"
                class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600">
                {{ $t('aParticularDay') }}
              </button>
              <div v-if="showDaySelector" class="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
                <button v-for="day in daysOfWeek" :key="day.id" type="button" @click="selectSingleDay(day)"
                  class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {{ day.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Checkbox des jours -->
          <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-y-2">
            <div v-for="day in daysOfWeek" :key="day.id" class="flex items-center">
              <input :id="`day-${day.id}`" name="opening_days" :value="day.id" type="checkbox"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded"
                :checked="props.formData.openings && day.id in props.formData.openings" @change="handleDaySelection" />
              <label :for="`day-${day.id}`" class="ml-2 text-sm text-gray-700">{{ day.label }}</label>
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Horaires d'ouverture -->
      <div v-if="props.formData.openings && Object.keys(props.formData.openings).length > 0" class="py-4">
        <label class="block text-sm font-medium text-gray-700 py-2">{{ $t('openingHour') }}</label>
        <div v-for="(times, day) in props.formData.openings" :key="day" class="mt-2">
          <span class="text-gray-700 font-medium">{{ day }}</span>
          <div class="mt-1 flex items-center space-x-4">
            <input type="time" :value="times.opening" @change="updateDayTime(day, 'opening', $event.target.value)"
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              required />
            <span class="text-gray-500">-</span>
            <input type="time" :value="times.closing" @change="updateDayTime(day, 'closing', $event.target.value)"
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              required />
          </div>
        </div>
      </div>
    </div>



    <!-- Gamme de prix -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <label for="price_range" class="block text-sm font-medium text-gray-700">{{ $t('priceRange') }}<span class="text-red-500">*</span></label>
      <select id="price_range" name="price_range"
        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm "
        :value="props.formData.price_range" @change="handleChange" required>
        <option value="">{{ $t('selectPriceRange') }}</option>
        <option v-for="range in priceRanges" :key="range.value" :value="range.value">
          {{ range.label }}
        </option>
      </select>
    </div>

    <!-- Capacité -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <label for="capacity" class="block text-sm font-medium text-gray-700">{{ $t('maxCapacity') }}<span class="text-red-500">*</span></label>
      <input type="number" name="capacity" id="capacity" min="1"
        class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm" placeholder="Ex: 50"
        :value="props.formData.capacity" @change="handleChange" required />
      <p class="mt-1 text-sm text-gray-500">{{ $t('maxNumberPersons') }}</p>
    </div>
  </div>
</template>
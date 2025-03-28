<template>
    <div class="space-y-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Informations opérationnelles
      </h3>
      <p class="text-sm text-gray-500">
        Détails sur les horaires et la capacité de votre service.
      </p>
  
      <!-- Sélection des jours d'ouverture -->
      <div>
        <fieldset>
            <div class="flex items-center justify-start">
                <legend class="text-sm font-medium text-gray-700 mr-4">Jours d'ouverture</legend>
                <!-- Boutons pour sélectionner tous les jours -->
                <div class="flex space-x-4">
                    <button 
                    type="button"
                    @click="selectAllDays"
                    class="px-3 py-1 text-sm bg-customBlue text-white rounded-md"
                    >
                    Toute la semaine
                    </button>
                    <button 
                    type="button"
                    @click="selectWeekdays"
                    class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md"
                    >
                    Sauf le week-end
                    </button>
                    <button 
                    type="button"
                    @click="selectWeekdays"
                    class="px-3 py-1 text-sm bg-gray-500 text-white rounded-md"
                    >
                    Un jour en particulier
                    </button>
                </div>
            </div>

          
  
          <!-- Liste des jours -->
          <div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-y-2">
            <div v-for="day in daysOfWeek" :key="day" class="flex items-center">
              <input
                :id="'day-' + day"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                :checked="formData.opening_days.includes(day)"
                @change="handleCheckboxChange(day)"
              />
              <label :for="'day-' + day" class="ml-2 text-sm text-gray-700">{{ day }}</label>
            </div>
          </div>
        </fieldset>
      </div>
  
      <!-- Heures d'ouverture et de fermeture sur la même ligne -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Horaires d'ouverture</label>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <input
              ref="openingTimeRef"
              type="text"
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Heure d'ouverture"
              required
            />
          </div>
          <div class="w-1/2">
            <input
              ref="closingTimeRef"
              type="text"
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Heure de fermeture"
              required
            />
          </div>
        </div>
        <p class="mt-1 text-sm text-gray-500">Format: HH:MM (ex: 09:00 - 18:00)</p>
      </div>
  
      <!-- Gamme de prix -->
      <div>
        <label for="price_range" class="block text-sm font-medium text-gray-700">
          Gamme de prix
        </label>
        <div class="mt-1">
          <select
            id="price_range"
            v-model="formData.price_range"
            class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            required
          >
            <option value="">Sélectionnez une gamme de prix</option>
            <option v-for="range in priceRanges" :key="range.value" :value="range.value">
              {{ range.label }}
            </option>
          </select>
        </div>
      </div>
  
      <!-- Capacité maximale -->
      <div>
        <label for="capacity" class="block text-sm font-medium text-gray-700">
          Capacité maximale
        </label>
        <div class="mt-1">
          <input
            type="number"
            id="capacity"
            v-model.number="formData.capacity"
            min="1"
            class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Ex: 50"
            required
          />
        </div>
        <p class="mt-1 text-sm text-gray-500">
          Nombre maximum de personnes que votre service peut accueillir simultanément.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, onMounted } from 'vue'
  import flatpickr from 'flatpickr'
  import 'flatpickr/dist/flatpickr.css'
  
  // Définition des props
  const props = defineProps({
    formData: Object
  })
  
  // Définition des événements émis vers le parent
  const emit = defineEmits(['updateFormData'])
  
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
  
  const priceRanges = [
    { value: '$', label: '€ - Économique' },
    { value: '$$', label: '€€ - Modéré' },
    { value: '$$$', label: '€€€ - Élevé' },
    { value: '$$$$', label: '€€€€ - Luxe' }
  ]
  
  // Références pour Flatpickr
  const openingTimeRef = ref(null)
  const closingTimeRef = ref(null)
  
  // Initialisation de Flatpickr
  onMounted(() => {
    flatpickr(openingTimeRef.value, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      minuteIncrement: 15,
      defaultDate: props.formData.opening_time || '07:00',
      onChange: (selectedDates, dateStr) => {
        emit('updateFormData', { opening_time: dateStr }) // Émission de l'événement
      }
    })
  
    flatpickr(closingTimeRef.value, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      minuteIncrement: 15,
      defaultDate: props.formData.closing_time || '18:00',
      onChange: (selectedDates, dateStr) => {
        emit('updateFormData', { closing_time: dateStr }) // Émission de l'événement
      }
    })
  })
  
  // Sélection de tous les jours
  const selectAllDays = () => {
    emit('updateFormData', { opening_days: [...daysOfWeek] })
  }
  
  // Sélection des jours de la semaine (sans le week-end)
  const selectWeekdays = () => {
    emit('updateFormData', { opening_days: daysOfWeek.slice(0, 5) })
  }
  
  // Gestion des jours cochés
  const handleCheckboxChange = (day) => {
    const updatedDays = [...props.formData.opening_days]
    if (updatedDays.includes(day)) {
      updatedDays.splice(updatedDays.indexOf(day), 1)
    } else {
      updatedDays.push(day)
    }
    emit('updateFormData', { opening_days: updatedDays })
  }
  </script>
  
  
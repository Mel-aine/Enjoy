<template>
  <div class="flex min-h-screen flex-col items-center justify-center ">
    <div class="w-full max-w-5xl mx-auto bg-white rounded-lg border shadow-sm h-[93vh] overflow-y-auto p-6">
      <!-- Header -->
      <div class="p-6 pb-4">
        <h2 class="text-xl font-semibold flex items-center gap-2">
          <CalendarIcon class="h-6 w-6" />
          {{ $t("editBooking") }}
        </h2>
      </div>
      <input ref="datepickerRange" type="text" class="hidden" />

      <!-- Content -->
      <div class="px-6 pb-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Dates et informations de base -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Date d'arrivée -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("appServices.hotel.arrival") }}</label>
              <input ref="datepickerRange" :value="formattedDateArrival" readonly @focus="openDatepicker" type="text"
                class="datepicker w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                :class="{ 'border-red-500': errors.arrivedDate }" />
              <p v-if="errors.arrivedDate" class="text-sm text-red-600">{{ errors.arrivedDate }}</p>
            </div>

            <!-- Date de départ -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("appServices.hotel.departure") }}</label>
              <input :value="formattedDateDeparture" readonly @focus="openDatepicker" type="text"
                class="datepicker w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                :class="{ 'border-red-500': errors.departDate }" />
              <p v-if="errors.departDate" class="text-sm text-red-600">{{ errors.departDate }}</p>
            </div>


            <!-- Heure de réservation -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("bookingTime") }}</label>
              <input v-model="formData.reservationTime" type="time"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                :class="{ 'border-red-500': errors.reservationTime }" />
              <p v-if="errors.reservationTime" class="text-sm text-red-600">{{ errors.reservationTime }}</p>
            </div>

            <!-- Nombre de places -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("appServices.hotel.persons") }}</label>
              <input v-model.number="formData.numberOfSeats" type="number" min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': errors.numberOfSeats }" />
              <p v-if="errors.numberOfSeats" class="text-sm text-red-600">{{ errors.numberOfSeats }}</p>
            </div>

            <!-- Statut de la réservation -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("bookingStatut") }}</label>
              <select v-model="formData.status"
                class="w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent">
                <option value="pending">{{ $t("pending") }}</option>
                <!-- <option value="checked-out">{{ $t("checked-out") }}</option>
                <option value="checked-in">{{ $t("checked-in") }}</option> -->

                <!-- <option value="confirmed">Confirmée</option>
                <option value="cancelled">Annulée</option>
                <option value="completed">Terminée</option> -->
              </select>
            </div>

            <!-- Statut du paiement -->
            <div class="space-y-2">
              <label class="text-sm font-medium">{{ $t("paymentStatus") }}</label>
              <select v-model="formData.paymentStatus"
                class="w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="pending">{{ $t("pending") }}</option>
                <!-- <option value="paid">{{ $t("paid") }}</option>
                <option value="unpaid">{{ $t("unpaid") }}</option> -->

                <!-- <option value="paid">Payé</option>
                <option value="partial">Partiel</option>
                <option value="refunded">Remboursé</option> -->
              </select>
            </div>
          </div>

          <!-- Section financière -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">{{ $t("financialInfo") }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Montant total -->
              <div class="space-y-2">
                <label class="text-sm font-medium">{{ $t("totalAmount") }} (FCFA)</label>
                <input v-model.number="formData.totalAmount" type="text"
                  class="w-full px-3 py-2 bg-gray-300 cursor-not-allowed border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>

              <!-- Taxes -->
              <div class="space-y-2">
                <label class="text-sm font-medium">{{ $t("taxes") }} (FCFA)</label>
                <input v-model.number="formData.taxAmount" type="text"
                  class="w-full px-3 py-2 border bg-gray-300 cursor-not-allowed border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>

              <!-- Remise -->
              <div class="space-y-2">
                <label class="text-sm font-medium">{{ $t("discount") }} (FCFA)</label>
                <input v-model.number="formData.discountAmount" type="text"
                  class="w-full px-3 py-2 border bg-gray-300 cursor-not-allowed border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>

              <!-- Montant payé -->
              <div class="space-y-2">
                <label class="text-sm font-medium">{{ $t("amountPaid") }} (FCFA)</label>
                <input v-model.number="formData.paidAmount" type="text"
                  class="w-full px-3 py-2 border bg-gray-300 cursor-not-allowed border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>

            <!-- Montant final -->
            <div class="p-2 bg-gray-50 rounded-lg">
              <p class="text-sm font-medium">
                {{ $t("finalAmount") }}: <span class="text-lg">{{ finalAmount.toFixed(2) }} FCFA</span>
              </p>
            </div>
          </div>

          <!-- Boutons d'action -->
          <div class="flex gap-4 justify-end">
            <button type="submit" :disabled="isLoading"
              class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              {{ isLoading ? 'Modification...' : $t('edit') }}
            </button>
            <button type="button" @click="handleCancel"
              class="inline-flex items-center gap-2 px-4 py-2 border bg-gray-500  rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
              {{ $t("cancel") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, defineProps, defineEmits } from 'vue'
import { Calendar as CalendarIcon, Save as SaveIcon, X as XIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { French, English } from "flatpickr/dist/l10n/fr.js";
const { t } = useI18n()
const { locale } = useI18n()
const formattedDateArrival = ref("");
const formattedDateDeparture = ref("");
// Props
const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({})
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['submit', 'cancel'])

// État réactif du formulaire
const formData = ref({
  arrivedDate: props.initialData?.arrivedDate || '',
  departDate: props.initialData?.departDate || '',
  reservationTime: props.initialData?.reservationTime || '',
  numberOfSeats: props.initialData?.numberOfSeats || 1,
  status: props.initialData?.status || 'pending',
  paymentStatus: props.initialData?.paymentStatus || 'pending',
  totalAmount: props.initialData?.totalAmount || 0,
  taxAmount: props.initialData?.taxAmount || 0,
  discountAmount: props.initialData?.discountAmount || 0,
  paidAmount: props.initialData?.paidAmount || 0,
  comment: props.initialData?.comment || '',
  specialRequests: props.initialData?.specialRequests || '',
  cancellationReason: props.initialData?.cancellationReason || ''
})

// État des erreurs
const errors = ref({})

// Montant final calculé
const finalAmount = computed(() => {
  return formData.value.totalAmount + formData.value.taxAmount - formData.value.discountAmount
})

// Validation simple
const validateForm = () => {
  const newErrors = {}

  if (!formData.value.arrivedDate) {
    newErrors.arrivedDate = t('appServices.hotel.arrival') + t('required')
  }

  if (!formData.value.departDate) {
    newErrors.departDate = t('appServices.hotel.departure') + t('required')
  }

  if (!formData.value.reservationTime) {
    newErrors.reservationTime = t('bookingTime') + t('required')
  }

  if (formData.value.numberOfSeats < 1) {
    newErrors.numberOfSeats = t('seatCountValidation')
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}
const datepickerRange = ref(null)

const openDatepicker = () => {
  if (datepickerRange.value && datepickerRange.value._flatpickr) {
    datepickerRange.value._flatpickr.open()
  }
}
// Gestionnaires d'événements
const handleSubmit = () => {
  if (validateForm()) {
    console.log('Submitting reservation data:', formData.value)
    emit('submit', formData.value)

    // Simulation d'un toast
    alert('Réservation mise à jour avec succès!')
  }
}

const handleCancel = () => {
  emit('cancel')
}


// Format utilitaire
const _formatDate = (date) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const currentLocale = locale.value || 'en';
  // Utiliser la bonne locale selon la langue
  const localeString = currentLocale === "en" ? "en-US" : "fr-FR";

  return new Intl.DateTimeFormat(localeString, options).format(date);
};

// Initialisation de flatpickr en mode range
onMounted(() => {
  flatpickr(datepickerRange.value, {
    mode: "range",
    locale: locale.value === "en" ? English : French,
    dateFormat: "Y-m-d",
    minDate: "today",
    defaultDate: [formData.value.arrivedDate, formData.value.departDate].filter(Boolean),
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        const arrivalDate = selectedDates[0];
        formData.value.arrivedDate = arrivalDate.toISOString().split("T")[0];
        formattedDateArrival.value = _formatDate(arrivalDate);
      }

      if (selectedDates.length > 1) {
        const departureDate = selectedDates[1];
        formData.value.departDate = departureDate.toISOString().split("T")[0];
        formattedDateDeparture.value = _formatDate(departureDate);
      }
    }
  });
  if (formData.value.arrivedDate) {
    formattedDateArrival.value = _formatDate(new Date(formData.value.arrivedDate));
  }
  if (formData.value.departDate) {
    formattedDateDeparture.value = _formatDate(new Date(formData.value.departDate));
  }
});

</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
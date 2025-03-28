<script setup>
// import { computed } from 'vue';

const props = defineProps({
  formData: Object,
});
const emit = defineEmits(['updateFormData']);

const facilitiesOptions = [
  'Wi-Fi', 'Parking', 'Accessible PMR', 'Climatisation', 'Terrasse', 'Piscine', 'Salle de sport', 'Spa',
  'Restaurant', 'Bar', 'Espace enfants', 'Animaux acceptés', 'Salle de réunion'
];

const paymentMethodsOptions = [
  'Carte bancaire', 'Espèces', 'Chèque', 'PayPal', 'Apple Pay', 'Google Pay', 'Virement bancaire', 'Chèques vacances'
];

const handleChange = (event) => {
  const { name, value } = event.target;
  emit('updateFormData', { [name]: value });
};

const handleCheckboxChange = (name, value, checked) => {
  const currentValues = [...props.formData[name]];
  if (checked) {
    if (!currentValues.includes(value)) {
      emit('updateFormData', { [name]: [...currentValues, value] });
    }
  } else {
    emit('updateFormData', { [name]: currentValues.filter(item => item !== value) });
  }
};
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Informations supplémentaires</h3>
    <p class="text-sm text-gray-500">Détails additionnels pour mieux présenter votre service.</p>
    
    <fieldset>
      <legend class="text-sm font-medium text-gray-700">Équipements et services</legend>
      <div class="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-2">
        <div v-for="facility in facilitiesOptions" :key="facility" class="flex items-center">
          <input type="checkbox" :id="`facility-${facility}`" name="facilities" :value="facility"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.facilities.includes(facility)"
                 @change="(e) => handleCheckboxChange('facilities', facility, e.target.checked)" />
          <label :for="`facility-${facility}`" class="ml-2 text-sm text-gray-700">{{ facility }}</label>
        </div>
      </div>
    </fieldset>
    
    <div>
      <label for="policies" class="block text-sm font-medium text-gray-700">Politiques et règlements</label>
      <textarea id="policies" name="policies" rows="4"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Ex: Annulation gratuite 24h avant l'arrivée. Interdiction de fumer dans l'établissement."
                :value="formData.policies" @input="handleChange" />
      <p class="mt-1 text-sm text-gray-500">Décrivez vos politiques d'annulation, règles de l'établissement, etc.</p>
    </div>
    
    <fieldset>
      <legend class="text-sm font-medium text-gray-700">Modes de paiement acceptés</legend>
      <div class="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-2">
        <div v-for="method in paymentMethodsOptions" :key="method" class="flex items-center">
          <input type="checkbox" :id="`payment-${method}`" name="payment_methods" :value="method"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.payment_methods.includes(method)"
                 @change="(e) => handleCheckboxChange('payment_methods', method, e.target.checked)" />
          <label :for="`payment-${method}`" class="ml-2 text-sm text-gray-700">{{ method }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

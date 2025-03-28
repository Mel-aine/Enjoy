<script setup>
import { defineProps, defineEmits } from 'vue';
import { WifiIcon, CarIcon, AccessibilityIcon,SpadeIcon, SnowflakeIcon, SunIcon,WavesLadderIcon, DumbbellIcon, UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, CreditCardIcon, DollarSignIcon, CheckIcon, AppleIcon } from 'lucide-vue-next';

const props = defineProps({
  formData: Object,
});
const emit = defineEmits(['updateFormData']);

const facilitiesOptions = [
  { name: 'Wi-Fi', icon: WifiIcon },
  { name: 'Parking', icon: CarIcon },
  { name: 'Accessible PMR', icon: AccessibilityIcon },
  { name: 'Climatisation', icon: SnowflakeIcon },
  { name: 'Terrasse', icon: SunIcon },
  { name: 'Piscine', icon: WavesLadderIcon },
  { name: 'Salle de sport', icon: DumbbellIcon },
  { name: 'Spa', icon: SpadeIcon },
  { name: 'Restaurant', icon: UtensilsIcon },
  { name: 'Bar', icon: WineIcon },
  { name: 'Espace enfants', icon: BabyIcon },
  { name: 'Animaux acceptés', icon: DogIcon },
  { name: 'Salle de réunion', icon: BriefcaseIcon }
];

const paymentMethodsOptions = [
  { name: 'Carte bancaire', icon: CreditCardIcon },
  { name: 'Espèces', icon: DollarSignIcon },
  { name: 'Chèque', icon: CheckIcon },
  { name: 'PayPal', icon: AppleIcon },
  { name: 'Small Pay', icon: AppleIcon },
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
        <div v-for="facility in facilitiesOptions" :key="facility.name" class="flex items-center gap-2">
          <component :is="facility.icon" class="w-5 h-5 text-gray-700" />
          <input type="checkbox" :id="`facility-${facility.name}`" name="facilities" :value="facility.name"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.facilities.includes(facility.name)"
                 @change="(e) => handleCheckboxChange('facilities', facility.name, e.target.checked)" />
          <label :for="`facility-${facility.name}`" class="text-sm text-gray-700">{{ facility.name }}</label>
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
        <div v-for="method in paymentMethodsOptions" :key="method.name" class="flex items-center gap-2">
          <component :is="method.icon" class="w-5 h-5 text-gray-700" />
          <input type="checkbox" :id="`payment-${method.name}`" name="payment_methods" :value="method.name"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.payment_methods.includes(method.name)"
                 @change="(e) => handleCheckboxChange('payment_methods', method.name, e.target.checked)" />
          <label :for="`payment-${method.name}`" class="text-sm text-gray-700">{{ method.name }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { WifiIcon, SquareParkingIcon, AccessibilityIcon,SpadeIcon, SnowflakeIcon, SunIcon,WavesLadderIcon, DumbbellIcon, UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, CreditCardIcon, DollarSignIcon, CheckIcon, AppleIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
  formData: Object,
});
const emit = defineEmits(['updateFormData']);

const facilitiesOptions = [
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
];

const paymentMethodsOptions = [
  { id: 'card', label: t('card'), icon: CreditCardIcon },
  { id: 'cash', label: t('cash'), icon: DollarSignIcon },
  { id: 'check', label: t('check'), icon: CheckIcon },
  { id: 'paypal', label: t('paypal'), icon: AppleIcon },
  { id: 'smallpay', label: t('smallPay'), icon: AppleIcon },

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
    <h3 class="text-lg font-medium leading-6 text-gray-900">{{ $t('title') }}</h3>
    <p class="text-sm text-gray-500">{{ $t('subtitle') }}</p>
    <div class="bg-white p-4 rounded-lg border border-gray-200">
    <fieldset>
      <legend class="text-sm font-medium text-gray-700">{{ $t('amenitiesTitle') }}</legend>
      <div class="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-2">
        <div v-for="facility in facilitiesOptions" :key="facility.label" class="flex items-center gap-2">
          <component :is="facility.icon" class="w-5 h-5 text-gray-700" />
          <input type="checkbox" :id="`facility-${facility.id}`" name="facilities" :value="facility.id"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.facilities.includes(facility.id)"
                 @change="(e) => handleCheckboxChange('facilities', facility.id, e.target.checked)" />
          <label :for="`facility-${facility.name}`" class="text-sm text-gray-700">{{ facility.label }}</label>
        </div>
      </div>
    </fieldset>
    </div>

    
    <div class="bg-white p-4 rounded-lg border border-gray-200">
      <label for="policies" class="block text-sm font-medium text-gray-700">{{ $t('policiesTitle') }}<span class="text-red-500">*</span></label>
      <textarea id="policies" name="policies" rows="4"
                class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                :placeholder="$t('policies.example')" required
                :value="formData.policies" @input="handleChange" />
      <p class="mt-1 text-sm text-gray-500">{{ $t('policiesPlaceholder') }}</p>
    </div>
    <div class="bg-white p-4 rounded-lg border border-gray-200">
          <fieldset>
      <legend class="text-sm font-medium text-gray-700">{{ $t('paymentTitle') }}<span class="text-red-500">*</span></legend>
      <div class="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-2">
        <div v-for="method in paymentMethodsOptions" :key="method.name" class="flex items-center gap-2">
          <component :is="method.icon" class="w-5 h-5 text-gray-700" />
          <input type="checkbox" :id="`payment-${method.id}`" name="payment_methods" :value="method.id"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 :checked="formData.payment_methods.includes(method.id)"
                 @change="(e) => handleCheckboxChange('payment_methods', method.id, e.target.checked)" />
          <label :for="`payment-${method.id}`" class="text-sm text-gray-700">{{ method.label }}</label>
        </div>
      </div>
    </fieldset>
    </div>

  </div>
</template>

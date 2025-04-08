<script setup>
import { ref } from 'vue';
import RoomDetails from '@/components/hotel/RoomDetails.vue';
import BookingSummary from '@/components/hotel/BookingSummary.vue';
import BookingPayement from '@/components/hotel/BookingPayement.vue';
import BookingConfirm from '@/components/hotel/BookingConfirm.vue';
import ProgressSteps from '@/components/hotel/Progress.vue';
import { useI18n } from 'vue-i18n';

const step2Active = ref(true);
const step3Active = ref(false);
const step4Active = ref(false);
const step2Completed = ref(false);
const step3Completed = ref(false);
const currentStep = ref(null);
const step = ref(1);
const { t } = useI18n();

const handleBackStep = () => {
  currentStep.value = step.value;
  if (step.value === 1) return;
  step.value--;
  
  if (currentStep.value === 3) {
    step3Active.value = true;
    step3Completed.value = false;
    step4Active.value = false;
  }
  
  if (currentStep.value === 2) {
    step2Active.value = true; 
    step3Active.value = false;
    step4Active.value = false;
  }
};

const goToStep3 = (roomData) => {
  // nextstep.value = true;
  if (roomData) {
    updateForm(roomData, 'room'); 
  }
  step2Active.value = false;
  step2Completed.value = true;
  step3Completed.value = false;
  step3Active.value = true;
  step4Active.value = false;
  step.value = 2; 


};

const goToStep4 = (paymentData) => {
  if (paymentData) {
    updateForm(paymentData, 'payment'); 
  }
  console.log('gostep3', step3Active.value);
  step3Completed.value = true;
  step4Active.value = true;
  console.log('step3', step3Active.value);
  console.log('step4', step4Active.value);
  console.log('step', step.value);
  if (step.value == 3) {
    return;
  } else {
    step.value = step.value + 1 ;
  }
  handleSubmitForm();

};

const formData = ref({
  roomDetails: null,
  paymentDetails: null
});

const updateForm = (data, stepName) => {
  switch(stepName) {
    case 'room':
      formData.value.roomDetails = data;
      break;
    case 'payment':
      formData.value.paymentDetails = data;
      break;
  }
  console.log('Form data updated:', formData.value);
};

const handleSubmitForm = () => {
  console.log('Form submitted:', formData.value);
};

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="flex-1">
      <ProgressSteps :steps="[t('appServices.hotel.datesRooms'), t('appServices.hotel.extras'), t('appServices.hotel.payment'), t('appServices.hotel.confirmation')]" :currentStep="step" />
      <RoomDetails v-if="step2Active && !step3Active && !step4Active" :roomData="formData.roomDetails" @next="goToStep3" @back="handleBackStep"/>
      <BookingPayement v-if="step3Active && !step3Completed && !step4Active" @next="goToStep4" @back="handleBackStep"/>
      <BookingConfirm v-if="step4Active" :bookingData="formData" @back="handleBackStep"/>
    </div>
    <div class="lg:w-96">
  <div class="lg:sticky lg:top-6">
    <BookingSummary/>
  </div>
</div>
  </div>
</template>

<style scoped>
.dashed-line {
  border-bottom: 3px dashed #ffffff;
  width: 20%;
}
</style>

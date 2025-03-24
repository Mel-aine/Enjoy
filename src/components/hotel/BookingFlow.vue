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

const goToStep3 = () => {
  // nextstep.value = true; // Set to null, not undefined.  Boolean values are best
  step2Active.value = false;
  step2Completed.value = true;
  step3Completed.value = false;
  step3Active.value = true;
  step4Active.value = false;

};

const goToStep4 = () => {
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

};
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="flex-1">
      <ProgressSteps :steps="[t('appServices.hotel.datesRooms'), t('appServices.hotel.extras'), t('appServices.hotel.payment'), t('appServices.hotel.confirmation')]" :currentStep="step" />
      
      <RoomDetails v-if="step2Active && !step3Active && !step4Active" />
      <BookingPayement v-if="step3Active && !step3Completed && !step4Active" />
      <BookingConfirm v-if="step4Active" />
    </div>
    <div class="lg:w-96">
      <BookingSummary @nextBook="goToStep3" @next="goToStep4" @back="handleBackStep" :stepCompleted="step3Active" :stepAllCompleted="step3Completed" />
    </div>
  </div>
</template>

<style scoped>
.dashed-line {
  border-bottom: 3px dashed #ffffff;
  width: 20%;
}
</style>

<script setup>
import { ref, computed } from 'vue';
import RoomDetails from '@/components/hotel/RoomDetails.vue';
import BookingSummary from '@/components/hotel/BookingSummary.vue';
import BookingPayement from '@/components/hotel/BookingPayement.vue';
import BookingConfirm from '@/components/hotel/BookingConfirm.vue';
import ProgressSteps from '@/components/hotel/Progress.vue';


// Assuming you'll eventually want these to be reactive, I'm making them refs
const step2Active = ref(true); // Initially true, as step 2 is active
const step3Active = ref(false);
const step4Active = ref(false);
const step2Completed = ref(false);
const step3Completed = ref(false);
const step = ref(1);
// const nextstep = ref(false);




// const step3TextColor = computed(() => (step3Active.value || step3Completed.value) ? 'text-white' : 'text-gray-600');
// const step4TextColor = computed(() => (step4Active.value || step4Completed.value) ? 'text-white' : 'text-gray-600');

// const step3FontWeight = computed(() => (step3Active.value || step3Completed.value) ? 'font-medium' : 'font-medium');
// const step4FontWeight = computed(() => (step4Active.value || step4Completed.value) ? 'font-medium' : 'font-medium');

// Method to advance to the next step
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
      <ProgressSteps :steps="['Dates & Rooms', 'Extras', 'Payment', 'Confirmation']" :currentStep="step" />

      <RoomDetails v-if="step2Active && !step3Active && !step4Active" />
      <BookingPayement v-if="!step3Completed && step3Active" />
      <BookingConfirm v-if="step4Active" />
    </div>
    <div class="lg:w-96">
      <BookingSummary @nextBook="goToStep3" @next="goToStep4" :stepCompleted="step3Active"  :stepAllCompleted="step3Completed" />
    </div>
  </div>
</template>

<style scoped>
.dashed-line {
  border-bottom: 3px dashed #ffffff;
  /* Adjust color as needed */
  width: 20%;
  /* Adjust width as needed */
}
</style>

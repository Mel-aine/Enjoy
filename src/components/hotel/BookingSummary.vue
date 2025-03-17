<script setup>
import { ref, defineEmits } from "vue";
import {
  CalendarIcon,
  LockIcon,

} from 'lucide-vue-next';

const checkInDate = ref("Sun, 22 May 2022");
const checkOutDate = ref("Wed, 25 May 2022");
const stayLength = ref("3 nights");
const selectedRoom = ref("King bed stylish Apartment with Loft style family room");
const emit = defineEmits(['nextBook', 'next'])

const nextBook = () => {
  // console.log('step4', props.stepCompleted);
  if (!props._stepCompleted) {
    emit('next');
    console.log('step4', props._stepCompleted);

  }

  if (!props.stepCompleted) {
    emit('nextBook');
    console.log('step3', props.stepCompleted);

    // return;
  }


  // emit('nextBook');
};

const priceDetails = ref([
  { label: "Rooms and offer:", price: 625.93 },
  { label: "8 % VAT:", price: 50.03 },
  { label: "City tax:", price: 16.44 },
]);
const totalPrice = ref(698.87);
const props = defineProps({
  stepCompleted: Boolean,
  stepAllCompleted: Boolean

});

</script>

<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Reservation Summary</h3>

    <div class="flex justify-between pb-4 border-b">
      <div>
        <div class="text-sm text-gray-600 mb-1">CHECK-IN</div>
        <div class="font-medium">{{ checkInDate }}</div>
        <div class="text-sm text-gray-600">from 16:00</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-gray-600 mb-1">CHECK-OUT</div>
        <div class="font-medium">{{ checkOutDate }}</div>
        <div class="text-sm text-gray-600">by 11:00</div>
      </div>
    </div>

    <div class="py-4 border-b">
      <div class="text-sm text-gray-600 mb-1">TOTAL LENGTH OF STAY:</div>
      <div class="font-medium flex">
        <span>{{ stayLength }}</span>
        <CalendarIcon size="16" class="ml-3 mt-1" />

      </div>
    </div>

    <div class="py-4 border-b">
      <div class="text-sm text-gray-600 mb-1">YOU SELECTED:</div>
      <div class="font-medium">{{ selectedRoom }}</div>
      <button class="text-customBlue text-sm mt-1">Change your selection</button>
    </div>

    <div class="py-4">
      <h4 class="font-medium mb-2">Your price summary</h4>
      <div class="space-y-2">
        <div v-for="(item, index) in priceDetails" :key="index" class="flex justify-between text-sm">
          <span>{{ item.label }}</span>
          <span>${{ item.price.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-medium text-customRed pt-2 border-t">
          <span>Total Price</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <button @click="nextBook"
    v-if="!props.stepAllCompleted"
      class="w-full bg-customRed text-white py-3 rounded-lg mt-4 hover:text-black  transition duration-200">

      <div :class="props.stepAllCompleted ? 'hidden' : ''">
        <span v-if="!props.stepCompleted">Request To Book</span>
        <div v-if="props.stepCompleted" class="flex items-center justify-center">
          <LockIcon size="16" />
          <span class="ml-2">Pay securely $788.87</span>
        </div>
      </div>
      <div v-if="props.stepAllCompleted">Download Invoice</div>
    </button>
    <button @click="nextBook"
    v-if="props.stepAllCompleted"
      class="w-full bg-customRed text-white py-3 rounded-lg mt-4 hover:text-black transition duration-200">
       Download Invoice
    </button>


    <div class="text-center text-xs text-gray-500 mt-4">
      We run on Enjoy Inc.
    </div>
  </div>
</template>

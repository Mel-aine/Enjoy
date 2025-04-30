<script setup>
import { ref } from 'vue';
import RoomDetails from '@/components/hotel/RoomDetails.vue';
import BookingSummary from '@/components/hotel/BookingSummary.vue';
import BookingPayement from '@/components/hotel/BookingPayement.vue';
import BookingConfirm from '@/components/hotel/BookingConfirm.vue';
import ProgressSteps from '@/components/hotel/Progress.vue';
import { useI18n } from 'vue-i18n';
import { useMIHStore } from '@/stores/manageHotelInterface';

import { makeReservation } from '@/servicesApi/hotelServicesApi.js';
const hotelStore = useMIHStore()


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
  console.log('handleBackStep');
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

const goToStep4 = async (paymentData) => {
  if (paymentData) {
    updateForm(paymentData, 'payment');
  }

  try {
    await handleSubmitForm(); // Attend le résultat de la soumission

    if (isReserved.value) {
      // Seulement avancer les étapes si la réservation a réussi
      step3Completed.value = true;
      step4Active.value = true;
      step.value = 3;
    } else {
      // Optionnel : afficher un message d'erreur à l'utilisateur
      console.warn("La réservation a échoué. Étape non avancée.");
    }
  } catch (err) {
    console.error("Erreur dans goToStep4 :", err);
  }
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
const isReserved = ref(false);
// const payload = {
//     userId: 4,
//     serviceId: 16,
//     reservationType: "Standard",
//     status: "pending",
//     totalPrice: hotelStore?.totalPrice,
//     createdBy: "",
//     lastModifiedBy: "",
//     create_at: new Date().toISOString(),
//     update_at: new Date().toISOString(),
//     totalPerson: hotelStore?.totalPerson,
//     arrivedDate: hotelStore?.dateArrived,
//     departDate: hotelStore?.dateDepart,
//     reservationTime: "",
//     comment: "No comment",
//     reservationProduct: 49,
//     payment: "paid"


//   }
const handleSubmitForm = async () => {
  const guest = formData.value.roomDetails.guestInfo;

  const reservationPayload = {
    // Champs utilisateur à plat
    first_name: guest.firstName,
    last_name: guest.lastName,
    email: guest.email,
    phone_number: guest.phone.number,
    // role_id: 3,
    // statusU: 'active',
    // created_by_U: 2,
    // last_modified_by:2 ,

    // Champs de réservation
    // user_id: 2,
    service_id: hotelStore.this_hotel.id,
    reservation_type: "Standard",
    statusR: "paid",
    total_price: hotelStore?.totalPrice || 0,
    total_person: hotelStore?.totalPerson || 1,
    arrived_date: new Date(hotelStore?.dateArrived).toISOString().split('T')[0],
    depart_date: new Date(hotelStore?.dateDepart).toISOString().split('T')[0],
    reservation_product: 49,
    reservation_time: new Date().toISOString().split('T')[1].split('.')[0], // "16:08:28"
    comment: "No comment",
    created_by_R: 2,
    last_modified_by_R: 2,
    payment: "paid",

  };

  try {
    const response = await makeReservation(reservationPayload);
    console.log("✅ Réservation réussie :", response.data);
    isReserved.value = true;
  } catch (error) {
    console.error("❌ Erreur de réservation :", error?.response?.data || error.message);
    isReserved.value = false;
  }
};



</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="flex-1">
      <ProgressSteps :steps="[t('appServices.hotel.datesRooms'), t('appServices.hotel.extras'), t('appServices.hotel.payment'), t('appServices.hotel.confirmation')]" :currentStep="step" />
      <RoomDetails v-if="step2Active && !step3Active && !step4Active" :roomData="formData.roomDetails" @next="goToStep3" @back="handleBackStep"/>
      <BookingPayement v-if="step3Active && !step3Completed && !step4Active" @next="goToStep4" @back="handleBackStep"/>
      <div v-if="isReserved">
        <BookingConfirm v-if="step4Active" :bookingData="formData" @back="handleBackStep"/>
      </div>
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

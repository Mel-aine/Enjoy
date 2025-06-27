<script setup>
import { computed, ref } from 'vue';
import RoomDetails from '@/components/hotel/RoomDetails.vue';
import BookingSummary from '@/components/hotel/BookingSummary.vue';
import BookingPayement from '@/components/hotel/BookingPayement.vue';
import BookingConfirm from '@/components/hotel/BookingConfirm.vue';
import ProgressSteps from '@/components/hotel/Progress.vue';
import { useI18n } from 'vue-i18n';
import { useMIHStore } from '@/stores/manageHotelInterface';

import { makeReservation, makePayment } from '@/servicesApi/hotelServicesApi.js';
import router from '../../router';



const hotelId = router.currentRoute.value.params.hotelId;

const reservationItems = computed(() => {
  return hotelStore.reservationItems;
})

const hotelStore = useMIHStore()
const step2Active = ref(true);
const step3Active = ref(false);
const step4Active = ref(false);
const step2Completed = ref(false);
const step3Completed = ref(false);
const currentStep = ref(null);
const tmpIdU = ref(null);
const tmpIdR = ref(null);
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

const goToStep3 = async (roomData, lowPriceRoomId) => {
  // nextstep.value = true;
  if (roomData) {
    updateForm(roomData, 'room');
  }
  try {
    // await handleSubmitReservation(lowPriceRoomId); // Attend le résultat de la soumission
    console.log(lowPriceRoomId)
    //if (isReserved.value) {
    // Seulement avancer les étapes si la réservation a réussi
    step2Active.value = false;
    step2Completed.value = true;
    step3Completed.value = false;
    step3Active.value = true;
    step4Active.value = false;
    step.value = 2;
    //} else {
    // Optionnel : afficher un message d'erreur à l'utilisateur
    //console.warn("La réservation a échoué. Étape non avancée.");
    //}
  } catch (err) {
    console.error("Erreur dans goToStep3 :", err);
  }

};

const goToStep4 = async (paymentData) => {
  if (paymentData) {
    updateForm(paymentData, 'payment');
  }

  try {
    await handleSubmitReservation(); // Attend le résultat de la soumission
    await handleSubmitPayment(tmpIdU.value, tmpIdR.value); // Attend le résultat de la soumission

    if (isPaid.value) {
      // Seulement avancer les étapes si le paiement a réussi
      step3Active.value = false;
      step3Completed.value = true;
      step4Active.value = true;
      step.value = 3;
    } else {
      // Optionnel : afficher un message d'erreur à l'utilisateur
      console.warn("Le paiement a échoué. Étape non avancée.");
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
  switch (stepName) {
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
const isPaid = ref(false);
const reservationDetail = ref({});
const handleSubmitReservation = async () => {
  const guest = formData.value.roomDetails.guestInfo;

  const reservationPayload = {
    // Champs utilisateur à plat
    first_name: guest.firstName,
    last_name: guest.lastName,
    email: guest.email,
    phone_number: guest.phone.number,

    // Champs de réservation
    service_id: hotelStore.this_hotel.id,
    total_amount: hotelStore?.totalPrice || 0,  // <-- ici le correctif
    total_person: hotelStore?.totalPerson || 1,
    arrived_date: new Date(hotelStore?.dateArrived).toISOString().split('T')[0],
    depart_date: new Date(hotelStore?.dateDepart).toISOString().split('T')[0],
    reservation_product: '',
    reservation_time: new Date().toISOString().split('T')[1].split('.')[0],
    comment: "No comment",
    created_by_R: 2,
    last_modified_by_R: 2,
    payment: "pending",
    products: reservationItems.value.map((p) => {
      return {
        service_product_id: p.id,
        start_date: new Date(hotelStore?.dateArrived).toISOString().split('T')[0],
        end_date: new Date(hotelStore?.dateDepart).toISOString().split('T')[0],
      }
    })
  };


  console.log("je tente de reserver", reservationPayload)

  try {
    console.log("je tente de reserver", reservationPayload)

    hotelStore.isSpinnerDisplayed = true;
    const response = await makeReservation(reservationPayload);
    tmpIdU.value = response.data.user.id;
    tmpIdR.value = response.data.reservation.id;
    console.log("✅ Réservation réussie :", response.data);
    isReserved.value = true;
    reservationDetail.value = response.data;
  } catch (error) {
    console.error("❌ Erreur de réservation :", error?.response?.data || error.message);
    isReserved.value = false;
  } finally {
    hotelStore.isSpinnerDisplayed = false;
    console.log("Réservation terminée avec succès !");
  }
};

const handleSubmitPayment = async (idU, idR) => {
  const pay = formData.value.paymentDetails;
  const currentDate = new Date().toISOString(); // Format ISO standard (ex: "2025-05-02T14:35:00.000Z")

  const status = pay.paymentMethod === 'cash' ? 'pending' : 'pending';
  const paymentPayload = {
    // Champs de paiement à plat
    user_id: idU,
    reservation_id: idR,
    // order_id: pay.order_id,
    amount_paid: hotelStore.totalPrice,
    payment_method: pay.paymentMethod,
    date: currentDate,
    status,
    transaction_id: '#123456789',
    created_by: idU,
    last_modified_by: idU,
  }

  console.log('paymentPayload', paymentPayload);
  try {
    hotelStore.isSpinnerDisplayed = true;
    const response = await makePayment(paymentPayload);
    console.log("✅ Paiement réussit :", response.data);
    isPaid.value = true;
  } catch (error) {
    console.error("❌ Erreur de payement :", error?.response?.data || error.message);
    isPaid.value = false;
  } finally {
    hotelStore.isSpinnerDisplayed = false;
    console.log("Payement terminée avec succès !");
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="flex-1">
      <ProgressSteps
        :steps="[t('appServices.hotel.datesRooms'), t('appServices.hotel.extras'), t('appServices.hotel.payment'), t('appServices.hotel.confirmation')]"
        :currentStep="step" />
      <RoomDetails v-if="step2Active && !step3Active && !step4Active" :roomData="formData.roomDetails" @next="goToStep3"
        :room-id="reservationItems[0]" @back="handleBackStep" />
      <BookingPayement v-if="step3Active && !step3Completed && !step4Active" @next="goToStep4" @back="handleBackStep" />
      <div v-if="isReserved">
        <BookingConfirm v-if="step4Active" :bookingData="reservationDetail" @back="handleBackStep" />
      </div>
    </div>
    <div class="lg:w-96">
      <div class="lg:sticky lg:top-6">
        <BookingSummary :isPaid="isPaid" />
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

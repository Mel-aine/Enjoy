<template>
  <!-- Payment form start -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('appServices.hotel.paymentMethod') }}
    </h2>
    <div class="space-y-4">
      <!-- Card Payment Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'card'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">{{ $t('appServices.hotel.creditDebitCard') }}
            </div>
            <div class="text-sm text-gray-500">{{ $t('appServices.hotel.acceptedCards') }}
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" class="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard"
            class="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex"
            class="h-6" />
        </div>
      </button>

      <!-- Small Pay Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'smallPay' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'smallPay'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">Small Pay</div>
            <div class="text-sm text-gray-500">{{ $t('appServices.hotel.payWith') }}
              Small Pay</div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <img src="@/assets/splash_new 2.png" class="w-30 h-10" />
        </div>
      </button>

      <!-- PayPal Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'paypal' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'paypal'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">PayPal</div>
            <div class="text-sm text-gray-500">{{ $t('appServices.hotel.paypalAccount') }}
            </div>
          </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" class="h-6" />
      </button>

      <!-- cash Pay Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'cash' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'cash'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">Espece</div>
            <div class="text-sm text-gray-500">Payer a l'hotel
            </div>
          </div>
        </div>
        <img
          src="data:image/jpeg;base64,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"
          alt="PayPal" class="h-6" />

      </button>
    </div>
  </div>

  <!-- Card Details Form -->
  <div v-if="paymentMethod === 'card'" class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('appServices.hotel.cardDetails') }}
    </h2>
    <div class="space-y-4">
      <!-- Card Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.cardNumber') }}
        </label>
        <input v-model="cardNumber" @input="formatCardNumber" @blur="validateCardNumber" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
          cardNumberError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="1234 5678 9012 3456" />
        <p v-if="cardNumberError" class="mt-1 text-sm text-red-600">{{ cardNumberError }}</p>
      </div>

      <!-- Expiry Date and Security Code -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.expiryDate') }}
          </label>
          <input v-model="expiryDate" @input="formatExpiryDate" @blur="validateExpiryDate" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
            expiryDateError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
            placeholder="MM/YY" />
          <p v-if="expiryDateError" class="mt-1 text-sm text-red-600">{{ expiryDateError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.securityCode') }}
          </label>
          <input v-model="securityCode" @input="validateSecurityCode" type="password" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
            securityCodeError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
            placeholder="CVC" maxlength="4" />
          <p v-if="securityCodeError" class="mt-1 text-sm text-red-600">{{ securityCodeError }}</p>
        </div>
      </div>

      <!-- Card Name -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.nameOnCard') }}
        </label>
        <input v-model="cardName" @input="validateCardName" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
          cardNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Enter name as shown on card" />
        <p v-if="cardNameError" class="mt-1 text-sm text-red-600">{{ cardNameError }}</p>
      </div>

      <!-- Save Card Option -->
      <div class="flex items-center">
        <input type="checkbox" id="save-card" v-model="saveCard"
          class="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" />
        <label for="save-card" class="ml-2 text-sm text-gray-600">
          {{ $t('appServices.hotel.saveCard') }}
        </label>
      </div>
    </div>
  </div>

  <!-- Small Pay Form -->
  <div v-if="paymentMethod === 'smallPay'" class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Small Pay {{ $t('appServices.hotel.details') }}
    </h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.smallPayId') }}
        </label>
        <input v-model="smallPayId" @input="validateSmallPay" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
          smallPayError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Enter your Small Pay ID or phone number" />
        <p v-if="smallPayError" class="mt-1 text-sm text-red-600">{{ smallPayError }}</p>
      </div>
    </div>
  </div>

  <!-- Billing Address Form -->
  <div class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('appServices.hotel.billingAddress') }}
    </h2>
    <div class="space-y-4">
      <!-- First and Last Name -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.firstName') }}
          </label>
          <input v-model="firstName" @blur="validateFirstName" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
            firstNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="firstNameError" class="mt-1 text-sm text-red-600">{{ firstNameError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.lastName') }}
          </label>
          <input v-model="lastName" @blur="validateLastName" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
            lastNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="lastNameError" class="mt-1 text-sm text-red-600">{{ lastNameError }}</p>
        </div>
      </div>

      <!-- Address -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.address') }}
        </label>
        <input v-model="address" @blur="validateAddress" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
          addressError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Street address" />
        <p v-if="addressError" class="mt-1 text-sm text-red-600">{{ addressError }}</p>
      </div>

      <!-- City and Postal Code -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.city') }}
          </label>
          <input v-model="city" @blur="validateCity" type="text" :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
            cityError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="cityError" class="mt-1 text-sm text-red-600">{{ cityError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.postalCode') }}
          </label>
          <input v-model="postalCode" @blur="validatePostalCode" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2',
              postalCodeError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="postalCodeError" class="mt-1 text-sm text-red-600">{{ postalCodeError }}</p>
        </div>
      </div>

      <!-- Country -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('appServices.hotel.country') }}
        </label>
        <select v-model="country"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
      </div>
      <!-- Navigation Buttons -->
      <div class="mx-auto max-w-5xl mt-12">
        <!-- Version mobile -->
        <div class="flex justify-between flex-1 sm:hidden">
          <button @click="handleBack"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isFirstPage">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('appServices.hotel.previous') }}

          </button>
          <button @click="handleNext" :class="paymentMethod === 'cash' ? 'hidden' : ''"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-customRed rounded-md hover:text-black transition duration-200 disabled:opacity-75 disabled:cursor-not-allowed">
            <LockIcon size="16" />
            <span class="ml-2">{{ $t('appServices.hotel.paySecurely') }}
            </span>
          </button>
          <button @click="handleNext" :class="paymentMethod === 'cash' ? '' : 'hidden'"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-customRed rounded-md hover:text-black transition duration-200 disabled:opacity-75 disabled:cursor-not-allowed">
            <LockIcon size="16" />
            <span class="ml-2">{{ $t('appServices.hotel.paySecurely') }}
            </span>
          </button>
        </div>

        <!-- Version desktop -->
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mt-6">
          <div class="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Navigation">
            <button @click="handleBack"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 sm:rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isFirstPage">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              {{ $t('appServices.hotel.previous') }}

            </button>
            <button @click="handleNext" :class="paymentMethod === 'cash' ? 'hidden' : ''"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-customRed sm:rounded-r-md hover:text-black transition duration-200 disabled:opacity-75 disabled:cursor-not-allowed">
              <LockIcon size="16" />
              <span  class="ml-2">{{ $t('appServices.hotel.paySecurely') }}
              </span>
            </button>
            <button @click="handleNext" :class="paymentMethod === 'cash' ? '' : 'hidden'"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-customRed sm:rounded-r-md hover:text-black transition duration-200 disabled:opacity-75 disabled:cursor-not-allowed">
              <LockIcon size="16" />
              <span class="ml-2">{{ $t('appServices.hotel.confirmed') }} 
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<LoaodingSpinner v-if="hotelStore.isSpinnerDisplayed"/>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { LockIcon } from 'lucide-vue-next';
import LoaodingSpinner from '../spiner/LoaodingSpinner.vue';
import { useMIHStore } from '@/stores/manageHotelInterface.js';

const hotelStore = useMIHStore();
const isLoading = ref(false);
const paymentMethod = ref('card');
const saveCard = ref(false);

// Card Details
const cardNumber = ref('');
const cardNumberError = ref('');
const expiryDate = ref('');
const expiryDateError = ref('');
const securityCode = ref('');
const securityCodeError = ref('');
const cardName = ref('');
const cardNameError = ref('');

// Small Pay
const smallPayId = ref('');
const smallPayError = ref('');

// Billing Address
const firstName = ref('');
const firstNameError = ref('');
const lastName = ref('');
const lastNameError = ref('');
const address = ref('');
const addressError = ref('');
const city = ref('');
const cityError = ref('');
const postalCode = ref('');
const postalCodeError = ref('');
const country = ref('United States');

const emit = defineEmits(['next', 'back']);

// Format card number with spaces every 4 digits
const formatCardNumber = () => {
  let value = cardNumber.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = value.match(/\d{4,16}/g);
  const match = matches && matches[0] || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    cardNumber.value = parts.join(' ');
  } else {
    cardNumber.value = value;
  }
};

// Format expiry date as MM/YY
const formatExpiryDate = () => {
  let value = expiryDate.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  if (value.length > 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4);
  }
  expiryDate.value = value;
};

// Validation functions
const validateCardNumber = () => {
  const cleaned = cardNumber.value.replace(/\s+/g, '');
  if (!cleaned) {
    cardNumberError.value = 'Card number is required';
    return false;
  }
  if (cleaned.length < 16) {
    cardNumberError.value = 'Card number must be 16 digits';
    return false;
  }
  cardNumberError.value = '';
  return true;
};

const validateExpiryDate = () => {
  if (!expiryDate.value) {
    expiryDateError.value = 'Expiry date is required';
    return false;
  }
  if (!/^\d{2}\/\d{2}$/.test(expiryDate.value)) {
    expiryDateError.value = 'Invalid format (MM/YY)';
    return false;
  }
  expiryDateError.value = '';
  return true;
};

const validateSecurityCode = () => {
  if (!securityCode.value) {
    securityCodeError.value = 'Security code is required';
    return false;
  }
  if (securityCode.value.length < 3 || securityCode.value.length > 4) {
    securityCodeError.value = 'Security code must be 3-4 digits';
    return false;
  }
  securityCodeError.value = '';
  return true;
};

const validateCardName = () => {
  if (!cardName.value) {
    cardNameError.value = 'Name on card is required';
    return false;
  }
  cardNameError.value = '';
  return true;
};

const validateSmallPay = () => {
  if (!smallPayId.value) {
    smallPayError.value = 'Small Pay ID is required';
    return false;
  }
  smallPayError.value = '';
  return true;
};

const validateFirstName = () => {
  if (!firstName.value) {
    firstNameError.value = 'First name is required';
    return false;
  }
  firstNameError.value = '';
  return true;
};

const validateLastName = () => {
  if (!lastName.value) {
    lastNameError.value = 'Last name is required';
    return false;
  }
  lastNameError.value = '';
  return true;
};

const validateAddress = () => {
  if (!address.value) {
    addressError.value = 'Address is required';
    return false;
  }
  addressError.value = '';
  return true;
};

const validateCity = () => {
  if (!city.value) {
    cityError.value = 'City is required';
    return false;
  }
  cityError.value = '';
  return true;
};

const validatePostalCode = () => {
  if (!postalCode.value) {
    postalCodeError.value = 'Postal code is required';
    return false;
  }
  postalCodeError.value = '';
  return true;
};

const validateForm = () => {
  let isValid = true;

  // Always validate billing address
  isValid = validateFirstName() && isValid;
  isValid = validateLastName() && isValid;
  isValid = validateAddress() && isValid;
  isValid = validateCity() && isValid;
  isValid = validatePostalCode() && isValid;

  // Validate payment method specific fields
  if (paymentMethod.value === 'card') {
    isValid = validateCardNumber() && isValid;
    isValid = validateExpiryDate() && isValid;
    isValid = validateSecurityCode() && isValid;
    isValid = validateCardName() && isValid;
  } else if (paymentMethod.value === 'smallPay') {
    isValid = validateSmallPay() && isValid;
  }
  // PayPal doesn't need additional validation

  return isValid;
};

const handleBack = () => {
  emit('back');
};

const handleNext = async () => {
  if (!validateForm()) {
    // Scroll to the first error
    const firstErrorField = document.querySelector('.border-red-500');
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  isLoading.value = true;

  // Prepare payment data according to selected method
  const paymentData = {
    paymentMethod: paymentMethod.value,
    cardDetails: paymentMethod.value === 'card' ? {
      cardNumber: cardNumber.value.replace(/\s+/g, ''),
      expiryDate: expiryDate.value,
      securityCode: securityCode.value,
      cardName: cardName.value,
      saveCard: saveCard.value
    } : null,
    smallPayDetails: paymentMethod.value === 'smallPay' ? {
      smallPayId: smallPayId.value
    } : null,
    billingAddress: {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      postalCode: postalCode.value,
      country: country.value
    },
    timestamp: new Date().toISOString()
  };

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    emit('next', paymentData);
  } catch (error) {
    console.error('Payment error:', error);
    alert('An error occurred during payment processing');
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  // Scroll en haut de la page quand le composant est monté
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
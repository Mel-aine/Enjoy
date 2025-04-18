<template>
  <!-- Payment form start -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
    <div class="space-y-4">
      <!-- Card Payment Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'card'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">Credit / Debit Card</div>
            <div class="text-sm text-gray-500">Visa, Mastercard, American Express</div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" class="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" class="h-6" />
        </div>
      </button>

      <!-- Small Pay Option -->
      <button class="w-full flex items-center justify-between p-4 rounded-lg border"
        :class="paymentMethod === 'smallPay' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
        @click="paymentMethod = 'smallPay'">
        <div class="flex items-center space-x-4">
          <div class="text-left">
            <div class="font-medium">Small Pay</div>
            <div class="text-sm text-gray-500">Pay with Small Pay</div>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" class="h-6" />
          <div class="text-left">
            <div class="font-medium">PayPal</div>
            <div class="text-sm text-gray-500">Pay with your PayPal account</div>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Card Details Form -->
  <div v-if="paymentMethod === 'card'" class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Card details</h2>
    <div class="space-y-4">
      <!-- Card Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Card number</label>
        <input v-model="cardNumber" @input="formatCardNumber" @blur="validateCardNumber" type="text"
          :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                  cardNumberError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="1234 5678 9012 3456" />
        <p v-if="cardNumberError" class="mt-1 text-sm text-red-600">{{ cardNumberError }}</p>
      </div>

      <!-- Expiry Date and Security Code -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
          <input v-model="expiryDate" @input="formatExpiryDate" @blur="validateExpiryDate" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    expiryDateError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
            placeholder="MM/YY" />
          <p v-if="expiryDateError" class="mt-1 text-sm text-red-600">{{ expiryDateError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Security code</label>
          <input v-model="securityCode" @input="validateSecurityCode" type="password"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    securityCodeError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
            placeholder="CVC" maxlength="4" />
          <p v-if="securityCodeError" class="mt-1 text-sm text-red-600">{{ securityCodeError }}</p>
        </div>
      </div>

      <!-- Card Name -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
        <input v-model="cardName" @input="validateCardName" type="text"
          :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                  cardNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Enter name as shown on card" />
        <p v-if="cardNameError" class="mt-1 text-sm text-red-600">{{ cardNameError }}</p>
      </div>

      <!-- Save Card Option -->
      <div class="flex items-center">
        <input type="checkbox" id="save-card" v-model="saveCard"
          class="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" />
        <label for="save-card" class="ml-2 text-sm text-gray-600">
          Save this card for future payments
        </label>
      </div>
    </div>
  </div>

  <!-- Small Pay Form -->
  <div v-if="paymentMethod === 'smallPay'" class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Small Pay details</h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Small Pay ID or Phone Number</label>
        <input v-model="smallPayId" @input="validateSmallPay" type="text"
          :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                  smallPayError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Enter your Small Pay ID or phone number" />
        <p v-if="smallPayError" class="mt-1 text-sm text-red-600">{{ smallPayError }}</p>
      </div>
    </div>
  </div>

  <!-- Billing Address Form -->
  <div class="bg-white rounded-xl shadow-sm p-6 mt-4">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Billing address</h2>
    <div class="space-y-4">
      <!-- First and Last Name -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
          <input v-model="firstName" @blur="validateFirstName" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    firstNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="firstNameError" class="mt-1 text-sm text-red-600">{{ firstNameError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
          <input v-model="lastName" @blur="validateLastName" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    lastNameError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="lastNameError" class="mt-1 text-sm text-red-600">{{ lastNameError }}</p>
        </div>
      </div>

      <!-- Address -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input v-model="address" @blur="validateAddress" type="text"
          :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                  addressError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']"
          placeholder="Street address" />
        <p v-if="addressError" class="mt-1 text-sm text-red-600">{{ addressError }}</p>
      </div>

      <!-- City and Postal Code -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input v-model="city" @blur="validateCity" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    cityError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="cityError" class="mt-1 text-sm text-red-600">{{ cityError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Postal code</label>
          <input v-model="postalCode" @blur="validatePostalCode" type="text"
            :class="['w-full px-3 py-2 border rounded-lg focus:ring-2', 
                    postalCodeError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-500']" />
          <p v-if="postalCodeError" class="mt-1 text-sm text-red-600">{{ postalCodeError }}</p>
        </div>
      </div>

      <!-- Country -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
        <select v-model="country" 
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Navigation Buttons -->
  <div class="flex justify-between items-center mt-6">
    <button @click="handleBack"
      class="w-full max-w-60 bg-gray-400 text-white py-3 rounded hover:text-black transition duration-200">
      Previous
    </button>
    <h1 class="w-full border border-top mx-4"></h1>
    <button @click="handleNext" :disabled="isLoading"
      class="w-full max-w-60 bg-customRed text-white py-3 rounded hover:text-black transition duration-200 disabled:opacity-75">
      <div class="flex items-center justify-center">
        <LockIcon size="16" />
        <span v-if="isLoading" class="ml-2 flex items-center">
          <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
        <span v-else class="ml-2">Pay Securely</span>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LockIcon } from 'lucide-vue-next';

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
</script>
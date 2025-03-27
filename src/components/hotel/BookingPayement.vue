<template>
      <!-- payement form start -->

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
        <div class="space-y-4">
          <button class="w-full flex items-center justify-between p-4 rounded-lg border"
            :class="paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
            @click="paymentMethod = 'card'">
            <div class="flex items-center space-x-4">
              <div class="text-left">
                <div class="font-medium">Credit / Debit Card</div>
                <div class="text-sm text-gray-500">Visa, Mastercard, American Express</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa"
                className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard"
                className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex"
                className="h-6" />
            </div>
          </button>
          <button class="w-full flex items-center justify-between p-4 rounded-lg border"
            :class="paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
            @click="paymentMethod = 'card'">
            <div class="flex items-center space-x-4">
              <div class="text-left">
                <div class="font-medium">Small Pay </div>
                <div class="text-sm text-gray-500">Pay with Small Pay </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src="@/assets/splash_new 2.png" class="w-30 h-10" />
            </div>
          </button>

          <button class="w-full flex items-center justify-between p-4 rounded-lg border"
            :class="paymentMethod === 'paypal' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'"
            @click="paymentMethod = 'paypal'">
            <div class="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal"
                className="h-6" />
              <div class="text-left">
                <div class="font-medium">PayPal</div>
                <div class="text-sm text-gray-500">Pay with your PayPal account</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div v-if="paymentMethod === 'card'" class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Card details</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Card number</label>
            <input v-model="cardNumber" type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="1234 5678 9012 3456" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
              <input v-model="expiryDate" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="MM / YY" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Security code</label>
              <input v-model="securityCode" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="CVC" />
            </div>

          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on card
            </label>
            <input type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter name as shown on card" />
          </div>
          <div class="flex items-center">
            <!-- Checkbox Input -->
            <input type="checkbox" id="save-card" :checked="saveCard" @change="toggleSaveCard"
              class="h-4 w-4 text-indigo-600 rounded" />
            <!-- Label -->
            <label for="save-card" class="ml-2 text-sm text-gray-600">
              Save this card for future payments
            </label>
          </div>

        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Billing address</h2>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input v-model="firstName" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input v-model="lastName" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input v-model="address" type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Street address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal code
              </label>
              <input type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
      </div>
      <!-- payement form end -->
</template>
<script setup>
import { ref } from 'vue';
const paymentMethod = ref('card');
const saveCard = ref(false);
// const agreedToTerms = ref(false);
const cardNumber = ref('');
const expiryDate = ref('');
const securityCode = ref('');
// const cardName = ref('');
const emit = defineEmits('next')

emit('next');
 


  // emit('nextBook');

</script>
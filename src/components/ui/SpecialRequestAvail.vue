<template>
  <div class="mx-auto space-y-6 mt-5 mb-5">
    <!-- Special Requests -->
    <div class="border-t p-4">
      <h3 class="text-lg font-semibold">{{ t('specialRequests.title') }}</h3>
      <p class="text-sm text-gray-700 mt-1">{{ t('specialRequests.description') }}</p>

      <label for="requests" class="block mt-4 text-sm font-medium text-gray-700">
        {{ t('specialRequests.inputLabel') }} <span class="text-gray-400">({{ t('common.optional') }})</span>
      </label>
      <textarea
        id="requests"
        v-model="specialRequests"
        rows="4"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>

    <!-- Arrival Time -->
    <div class="border-t  p-4">
      <h3 class="text-lg font-semibold">{{ t('arrival_.title') }}</h3>
      <p class="text-sm text-gray-700 mt-1">
        {{ t('arrival_.info') }}
      </p>

      <label for="arrivalTime" class="block mt-4 text-sm font-medium text-gray-700">
        {{ t('arrival_.label') }} <span class="text-gray-400">({{ t('common.optional') }})</span>
      </label>

      <select
        id="arrivalTime"
        v-model="arrivalTime"
        class="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option disabled value="">{{ t('arrival_.placeholder') }}</option>
        <option v-for="hour in hours" :key="hour" :value="hour">{{ hour }}</option>
      </select>

      <p class="text-xs text-gray-500 mt-2">
        {{ t('arrival_.timezoneNote') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const specialRequests = ref('')
const arrivalTime = ref('')

const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`)
</script>

<script setup>
import { ref, computed } from 'vue'
import { Search, Calendar, Users } from 'lucide-vue-next'
import DatePicker from './DatePicker.vue'

// Reactive state
const location = ref('')
const checkIn = ref(null)
const checkOut = ref(null)
const showDatePicker = ref(false)
const guests = ref(1)
const rooms = ref(1)
const showGuestOptions = ref(false)

// Computed properties
const dateRangeText = computed(() =>
  checkIn.value && checkOut.value
    ? `${checkIn.value.toLocaleDateString()} - ${checkOut.value.toLocaleDateString()}`
    : 'Select dates'
)

const guestRoomText = computed(() =>
  `${guests.value} guest${guests.value !== 1 ? 's' : ''}, ${rooms.value} room${rooms.value !== 1 ? 's' : ''}`
)

// Emit event for search
const emit = defineEmits(['search'])
const handleSubmit = () => {
  emit('search', {
    location: location.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value,
    rooms: rooms.value,
  })
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Destination -->
        <div class="relative">
          <label for="location" class="block text-sm font-medium text-gray-700 mb-1">
            Going to
          </label>
          <div class="relative">
            <input
              id="location"
              v-model="location"
              type="text"
              placeholder="Enter a destination"
              class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size="18" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <!-- Check-in / Check-out -->
        <div class="relative">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Check-in / Check-out
          </label>
          <div
            class="flex items-center pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md cursor-pointer"
            @click="showDatePicker = !showDatePicker"
          >
            <Calendar size="18" class="absolute left-3 text-gray-400" />
            <span class="text-gray-500">{{ dateRangeText }}</span>
          </div>
          <div v-if="showDatePicker" class="absolute z-10 mt-1 bg-white shadow-lg rounded-md p-4">
            <DatePicker
              v-model:checkIn="checkIn"
              v-model:checkOut="checkOut"
              @close="showDatePicker = false"
            />
          </div>
        </div>

        <!-- Travelers -->
        <div class="relative">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Travelers
          </label>
          <div
            class="flex items-center pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md cursor-pointer"
            @click="showGuestOptions = !showGuestOptions"
          >
            <Users size="18" class="absolute left-3 text-gray-400" />
            <span class="text-gray-500">{{ guestRoomText }}</span>
          </div>

          <!-- Dropdown -->
          <div v-if="showGuestOptions" class="absolute z-10 mt-1 bg-white shadow-lg rounded-md p-4 w-64">
            <div class="flex justify-between items-center mb-4">
              <span>Guests</span>
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-8 h-8 flex items-center justify-center border rounded-full"
                  @click="guests = Math.max(1, guests - 1)"
                >-</button>
                <span class="mx-2">{{ guests }}</span>
                <button
                  type="button"
                  class="w-8 h-8 flex items-center justify-center border rounded-full"
                  @click="guests++"
                >+</button>
              </div>
            </div>

            <div class="flex justify-between items-center">
              <span>Rooms</span>
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-8 h-8 flex items-center justify-center border rounded-full"
                  @click="rooms = Math.max(1, rooms - 1)"
                >-</button>
                <span class="mx-2">{{ rooms }}</span>
                <button
                  type="button"
                  class="w-8 h-8 flex items-center justify-center border rounded-full"
                  @click="rooms++"
                >+</button>
              </div>
            </div>

            <button
              type="button"
              class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
              @click="showGuestOptions = false"
            >
              Done
            </button>
          </div>
        </div>

        <!-- Search Button -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

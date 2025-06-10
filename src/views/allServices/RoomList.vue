<template>
  <div>
    <div v-if="rooms.length > 0">
      <!-- Mobile view -->
      <div class="space-y-4 md:hidden">
        <div
          v-for="room in rooms"
          :key="room.id"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <div class="relative">
             <button @click="openRoomModal(room)" class="w-full block focus:outline-none">
            <img
              :src="room.image"
              :alt="room.name"
              class="w-full h-48 object-cover rounded-lg"
            />
            </button>
            <div
              v-if="!room.available"
              class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
            >
              Complet
            </div>
          </div>
          <div class="mt-4">
            <button @click="openRoomModal(room)" class="text-left w-full focus:outline-none">
            <h3 class="text-lg font-bold text-gray-800">{{ room.name }}</h3>
            </button>
            <p class="text-sm text-gray-600 mt-1">{{ room.description }}</p>
            <div class="flex items-center mt-2 text-sm text-gray-600">
              <Users class="w-4 h-4 mr-1" />
              <span>{{ room.capacity }} personne{{ room.capacity > 1 ? 's' : '' }}</span>
              <span class="mx-2">•</span>
              <TrendingUp class="w-4 h-4 mr-1" />
              <span>{{ room.size }} m²</span>
            </div>
            <div class="flex flex-wrap gap-2 mt-2">
              <div
                v-for="(amenity, index) in room.amenities.slice(0, 3)"
                :key="index"
                class="flex items-center text-sm text-gray-600"
              >
                <component :is="getAmenityIcon(amenity)" class="w-4 h-4 mr-1" />
                <span>{{ amenity }}</span>
              </div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <div class="text-xl font-bold text-gray-800">
                {{ room.price }}€
                <span class="text-sm font-normal text-gray-600">/ nuit</span>
              </div>
              <button
                :class="[
                  'px-4 py-2 rounded-md text-white text-sm font-medium transition',
                  room.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                ]"
                :disabled="!room.available"
              >
                {{ room.available ? 'Réserver' : 'Complet' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop view -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="bg-purple-100">
            <tr class="text-left">
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">Chambre</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">Capacité</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">Services inclus</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Prix par nuit</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Disponibilité</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="room in rooms"
              :key="room.id"
              class="bg-white hover:bg-gray-50 transition-colors"
            >
              <td class="px-6 py-4">
                <div class="flex items-start space-x-4">
                  <button @click="openRoomModal(room)" class=" block focus:outline-none">
                  <img
                    :src="room.image"
                    :alt="room.name"
                    class="w-24 h-20 object-cover rounded-lg"
                  />
                  </button>
                  <div>
                    <button @click="openRoomModal(room)">
                    <h3 class="font-semibold text-gray-800">{{ room.name }}</h3>
                    </button>
                    <p class="text-sm text-gray-600 mt-1">{{ room.description }}</p>
                    <div class="flex items-center mt-1 text-sm text-gray-500">
                      <TrendingUp class="w-3.5 h-3.5 mr-1" />
                      <span>{{ room.size }} m²</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="items-start text-sm text-gray-600 inline-flex">
                  <Users class="w-4 h-4 mr-2" />
                  <span>{{ room.capacity }} personne{{ room.capacity > 1 ? 's' : '' }}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="(amenity, index) in room.amenities.slice(0, 3)"
                    :key="index"
                    class="flex items-center text-sm text-gray-600"
                  >
                    <component :is="getAmenityIcon(amenity)" class="w-4 h-4 mr-1 text-purple-500" />
                    <span>{{ amenity }}</span>
                  </div>
                  <span
                    v-if="room.amenities.length > 3"
                    class="text-sm text-purple-600"
                  >
                    +{{ room.amenities.length - 3 }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="text-lg font-bold text-gray-800">
                  {{ room.price }} FCFA
                </div>
                <div class="text-sm text-gray-600">Taxes incluses</div>
              </td>
              <td class="px-6 py-4 text-right">
                <button
                  :class="[
                    'px-6 py-2 rounded-md text-white text-sm font-medium transition',
                    room.available ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-400 cursor-not-allowed'
                  ]"
                  :disabled="!room.available"
                >
                  {{ room.available ? 'Réserver' : 'Complet' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- No results -->
    <div v-else class="text-center py-12">
      <p class="text-gray-600 text-lg">
        Aucune chambre ne correspond à vos critères.
      </p>
      <p class="text-gray-500">Veuillez modifier vos filtres.</p>
    </div>
  </div>
</template>

<script setup>
import { Users, TrendingUp, Wifi, Coffee, Check } from 'lucide-vue-next'
import { computed } from 'vue'
const props = defineProps({
  rooms: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectedRoom'])

const openRoomModal = (room) => {
  emit('selectedRoom',room)
  console.log('Ouvrir modal pour :', room.name)
  // ici tu peux assigner à selectedRoom etc.
}


const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'wi-fi':
      return Wifi
    case 'minibar':
    case 'bar privé':
      return Coffee
    default:
      return Check
  }
}
</script>

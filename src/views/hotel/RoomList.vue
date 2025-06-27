<template>
  <div>
    <div v-if="rooms.length > 0">
      <!-- Mobile view 
      <div class="space-y-4 md:hidden">
        <div v-for="room in rooms" :key="room.id" class="bg-white rounded-lg shadow-md p-4">
          <div class="relative">
            <button @click="openRoomModal(room)" class="w-full block focus:outline-none">
              <img :src="images" :alt="room.productName" class="w-full h-48 object-cover rounded-lg" />
            </button>
            <div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Reserver
            </div>
          </div>
          <div class="mt-4">
            <button @click="openRoomModal(room)" class="text-left w-full focus:outline-none">
              <h3 class="text-lg font-bold text-gray-800">{{ room.productName }}</h3>
            </button>
            <p class="text-sm text-gray-600 mt-1">{{ room.description }}</p>
            <div class="flex items-center mt-2 text-sm text-gray-600">
              <Users class="w-4 h-4 mr-1" />
              <span> {{ getRoomDetail(room, 'Maximum Occupancy') }} personne{{ getRoomDetail(room, 'Maximum Occupancy')
                > 1 ? 's' : '' }}
              </span>
              <span class="mx-2">•</span>
              <TrendingUp class="w-4 h-4 mr-1" />
              <span>{{ getRoomDetail(room, 'Room Size (sqm)') }} m²</span>
            </div>
            <div class="flex flex-column gap-2 mt-2">
              <div v-for="(option, index) in room.options.slice(0, 3)" :key="index"
                class="flex items-center text-sm text-gray-600">
                <component :is="getOptionIcon(option.optionName)" class="w-4 h-4 mr-1 text-purple-500" />
                <span>{{ option.optionName }}: {{ option.value }}</span>
              </div>

            </div>
            <div class="flex justify-between items-center mt-4">
              <div class="text-xl font-bold text-gray-800">
                {{ room.price }} FCFA
                <span class="text-sm font-normal text-gray-600">/ nuit</span>
              </div>
              <button :class="[
                'px-4 py-2 rounded-md text-white text-sm font-medium transition',
                room.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              ]" :disabled="!room.available">
                {{ room.available ? 'Réserver' : 'Complet' }}
              </button>
            </div>
          </div>
        </div>
      </div>-->

      <!-- Desktop view -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="bg-purple-100">
            <tr class="text-left">
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">{{ $t('roomType') }}</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">{{ $t('capacity') }}</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600">{{ $t('service_included') }}</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-right">{{ $t('pricePerNight') }}</th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-right">{{ $t('Sélectionner des chambres') }}
              </th>
              <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-right">{{ $t('') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <template v-for="(type, tyIn) in rooms" :key="type.accommodationType">
              <template tr v-for="(gp, index) in type.groups" :key="gp.accommodationType">
                <tr v-for="(room, id) in gp.products" :key="room.id"
                  class="bg-white hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4" v-if="index == 0" :rowspan="type.groups.length">{{ gp.accommodationType }}</td>
                  <td class="px-6 py-4">
                    <div class="items-start text-sm text-gray-600 inline-flex">
                      <Users class="w-4 h-4 mr-2" />
                      {{ getRoomDetail(room, 'Maximum Occupancy') }} {{ $t('people') }}

                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-col gap-2">
                      <div v-for="(option, index) in room.options.sort().slice(0, 6)" :key="index"
                        class="flex items-center text-sm text-gray-600">
                        <component :is="getOptionIcon(option.option.optionName)" class="w-4 h-4 mr-1 text-purple-500" />
                        <span>{{ option.option.optionName }}: {{ option.value }}</span>
                      </div>


                      <span v-if="room.options.length > 6" class="text-sm text-purple-600">
                        +{{ room.options.length - 6 }}
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class="text-sm font-bold text-gray-800">
                      {{ formatPrice(room.price) }}
                    </div>
                    <!-- <div class="text-sm text-gray-600">Taxes incluses</div> -->
                  </td>
                  <td class="px-6 py-4 text-right w-10">
                    <select @change="handleRoomQuantityChange(room, Number($event.target.value))"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-gray-700">
                      <option value="0">0</option>
                      <option v-for="i in gp.count" :key="i" :value="i">{{ i }} - {{ formatPrice(room.price) }}</option>
                    </select>

                  </td>
                  <td class=" w-2/12 px-6 py-4 text-left align-top " :rowspan="totalRows" v-if="tyIn == 0">

                    <div class="flex flex-col gap-2 mb-5" v-if="reservationItems && reservationItems.length>0">
                      <span>{{ reservationItems.length }} room(s) for</span>
                      <span class="text-gray-600 text-sm">{{ formatPrice(totalReservationPrice) }}</span>

                    </div>

                    <button @click="booking" :disabled="!reservationItems || reservationItems.length == 0" class="
                    px-6 py-2 rounded-md text-white text-sm font-medium transition bg-orange-600 hover:bg-orange-700 w-full">
                      {{ $t('book') }}
                    </button>
                  </td>
                </tr>
              </template>

            </template>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-600 text-lg">
        {{ $t('no_room') }}
      </p>
      <p class="text-gray-500">{{ $t('please_change') }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { BedDouble, Eye, Building2, Check, Users, TrendingUp } from 'lucide-vue-next'
import { formatPrice } from '../../utils/functions'
import router from '../../router'

const props = defineProps({
  rooms: {
    type: Array,
    required: true
  }
})
const reservationItems = ref([]);
const emit = defineEmits(['selectedRoom,bookRoom'])


const getRoomDetail = (room, key) => {
  console.log('room', room),
    console.log('room', room.options);
  const found = room.options?.find(opt =>
    opt.option.optionName?.toLowerCase() === key.toLowerCase()
  )
  return found?.value || '—'
}


const totalRows = computed(() => {
  if (!props.rooms || !props.rooms.length) return 0
  return props.rooms.reduce((typeAcc, type) => {
    return typeAcc + type.groups.reduce((groupAcc, group) => {
      return groupAcc + (group.products ? group.products.length : 0)
    }, 0)
  }, 0)
})

const getOptionIcon = (optionName) => {
  switch (optionName.toLowerCase()) {
    case 'accommodation type':
      return Building2
    case 'bed type':
      return BedDouble
    case 'view':
      return Eye
    default:
      return Check
  }
}

const booking = () => {
  emit('bookRoom', reservationItems);
}
// Gérer le changement de quantité
const handleRoomQuantityChange = (room, quantity) => {
  // Retirer la chambre si quantité = 0
  reservationItems.value = reservationItems.value.filter(item => item.id !== room.id)
  if (quantity > 0) {
    // Ajouter ou mettre à jour la chambre dans la liste
    reservationItems.value.push({
      id: room.id,
      quantity,
      options: room.options,
      room
    })
  }
  //emit('selectedRoom', reservationItems.value)
}
const totalReservationPrice = computed(() => {
  return reservationItems.value.reduce((sum, item) => {
    return sum + (item.quantity * (item.room.price || 0))
  }, 0)
})
</script>

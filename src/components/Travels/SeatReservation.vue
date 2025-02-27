<script setup>
import { ref ,computed } from 'vue';
import SeatRow from "./SeatRow.vue";

const selectedDeck = ref("upper");

const seats = ref({
    upper: [
        [{ id: 1, number: 'COND', type: 'conductor', available: false },
        { id: 2, number: 'Couloir', type: 'Couloir', available: false, size: 7 },
        { id: 3, number: '1', type: 'seat', available: true },
        { id: 4, number: '2', type: 'seat', available: true },
        { id: 5, number: '3', type: 'seat', available: false },
        { id: 6, number: '4', type: 'seat', available: true },
        { id: 3, number: '5', type: 'seat', available: true },
        { id: 7, number: '6', type: 'seat', available: true },
        { id: 8, number: '7', type: 'seat', available: true },
        { id: 9, number: '8', type: 'seat', available: true },
        { id: 10, number: '9', type: 'seat', available: false },
        { id: 11, number: '10', type: 'seat', available: true },
        { id: 12, number: '11', type: 'seat', available: true },
        { id: 13, number: '12', type: 'seat', available: true },
        { id: 14, number: '13', type: 'seat', available: true },
        { id: 15, number: '14', type: 'seat', available: true },
        { id: 16, number: '15', type: 'seat', available: false },
        { id: 16, number: 'Enter', type: 'seat', available: false },
        { id: 17, number: '16', type: 'seat', available: true },
        { id: 18, number: '17', type: 'seat', available: true },
        { id: 7, number: '18', type: 'seat', available: true },
        { id: 3, number: '19', type: 'seat', available: true },
        { id: 4, number: '20', type: 'seat', available: true },
        { id: 5, number: '21', type: 'seat', available: false },
        { id: 6, number: '22', type: 'seat', available: true },
        { id: 3, number: '23', type: 'seat', available: true },
        { id: 7, number: '24', type: 'seat', available: true },
        { id: 3, number: '25', type: 'seat', available: true },
        { id: 4, number: '26', type: 'seat', available: true },
        { id: 5, number: '27', type: 'seat', available: false },
        { id: 6, number: '28', type: 'seat', available: true },
        { id: 3, number: '29', type: 'seat', available: true },
        { id: 7, number: '30', type: 'seat', available: true },
        { id: 3, number: '31', type: 'seat', available: true },
        { id: 4, number: '32', type: 'seat', available: true },
        { id: 5, number: '33', type: 'seat', available: false },
        { id: 2, number: 'Couloir', type: 'Couloir', available: false, size: 7 },
        { id: 6, number: '34', type: 'seat', available: true },
        { id: 3, number: '35', type: 'seat', available: true },
        { id: 7, number: '36', type: 'seat', available: true },
        { id: 3, number: '37', type: 'seat', available: true },
        { id: 4, number: '38', type: 'seat', available: true },
        { id: 5, number: '39', type: 'seat', available: false },
        { id: 6, number: '40', type: 'seat', available: true },
        { id: 3, number: '41', type: 'seat', available: true },
        { id: 7, number: '42', type: 'seat', available: true },
        { id: 3, number: '43', type: 'seat', available: true },
        { id: 4, number: '44', type: 'seat', available: true },
        { id: 5, number: '45', type: 'seat', available: false },
        { id: 6, number: '46', type: 'seat', available: true },
        { id: 3, number: '47', type: 'seat', available: true },
        { id: 7, number: '48', type: 'seat', available: true },
        { id: 3, number: '49', type: 'seat', available: true },
        { id: 4, number: '50', type: 'seat', available: true },
        { id: 5, number: '51', type: 'seat', available: false },
        { id: 6, number: '52', type: 'seat', available: true },
        { id: 3, number: '53', type: 'seat', available: true },
        { id: 7, number: '54', type: 'seat', available: true },
        { id: 3, number: '55', type: 'seat', available: true },
        { id: 4, number: '56', type: 'seat', available: true },

        { id: 5, number: '57', type: 'seat', available: false },
        { id: 6, number: '58', type: 'seat', available: true },
        { id: 16, number: 'Enter', type: 'seat', available: false },

        { id: 3, number: '59', type: 'seat', available: true },
        { id: 7, number: '60', type: 'seat', available: true },
        { id: 3, number: '61', type: 'seat', available: true },
        { id: 4, number: '62', type: 'seat', available: true },
        { id: 5, number: '63', type: 'seat', available: false },
        { id: 6, number: '64', type: 'seat', available: true },

        ],
    ],
    lower: [
        ["classic", "classic", "empty", "empty"],
        ["table", "table", "classic", "classic"],
    ],
});

// const seats = ref({
//     upper: [
//         [{ id: 1, number: 'COND', type: 'conductor', available: false },
//         { id: 2, number: 'Couloir', type: 'Couloir', available: false, size: 7 },
//         { id: 3, number: '1', type: 'seat', available: true },
//         { id: 4, number: '2', type: 'seat', available: true },
//         { id: 5, number: '3', type: 'seat', available: false },
//         { id: 6, number: '4', type: 'seat', available: true },
//         { id: 7, number: '5', type: 'seat', available: true },
//         { id: 8, number: '6', type: 'seat', available: true },
//         { id: 9, number: '7', type: 'seat', available: true },
//         { id: 10, number: '8', type: 'seat', available: true },
//         { id: 11, number: '9', type: 'seat', available: false },
//         { id: 12, number: '10', type: 'seat', available: true },
//         { id: 13, number: '11', type: 'seat', available: true },
//         { id: 14, number: '12', type: 'seat', available: true },
//         { id: 15, number: '13', type: 'seat', available: true },
//         { id: 16, number: '14', type: 'seat', available: true },
//         { id: 17, number: '15', type: 'seat', available: false },
//         { id: 18, number: 'Enter', type: 'seat', available: false },
//         { id: 19, number: '16', type: 'seat', available: true },
//         { id: 20, number: '17', type: 'seat', available: true },
//         { id: 21, number: '18', type: 'seat', available: true },
//         { id: 22, number: '19', type: 'seat', available: true },
//         { id: 23, number: '20', type: 'seat', available: true },
//         { id: 24, number: '21', type: 'seat', available: false },
//         { id: 25, number: '22', type: 'seat', available: true },
//         { id: 26, number: '23', type: 'seat', available: true },
//         { id: 27, number: '24', type: 'seat', available: true },
//         { id: 28, number: '25', type: 'seat', available: true },
//         { id: 29, number: '26', type: 'seat', available: true },
//         { id: 30, number: '27', type: 'seat', available: false },
//         { id: 31, number: '28', type: 'seat', available: true },
//         { id: 32, number: '29', type: 'seat', available: true },
//         { id: 33, number: '30', type: 'seat', available: true },
//         { id: 34, number: '31', type: 'seat', available: true },
//         { id: 35, number: '32', type: 'seat', available: true },
//         { id: 36, number: '33', type: 'seat', available: false },
//         { id: 37, number: 'Couloir', type: 'Couloir', available: false, size: 6 },
//         { id: 38, number: '34', type: 'seat', available: true },
//         { id: 39, number: '35', type: 'seat', available: true },
//         { id: 40, number: '36', type: 'seat', available: true },
//         { id: 41, number: '37', type: 'seat', available: true },
//         { id: 42, number: '38', type: 'seat', available: true },
//         { id: 43, number: '39', type: 'seat', available: false },
//         { id: 44, number: '40', type: 'seat', available: true },
//         { id: 45, number: '41', type: 'seat', available: true },
//         { id: 46, number: '42', type: 'seat', available: true },
//         { id: 47, number: '43', type: 'seat', available: true },
//         { id: 48, number: '44', type: 'seat', available: true },
//         { id: 49, number: '45', type: 'seat', available: false },
//         { id: 50, number: '46', type: 'seat', available: true },
//         { id: 51, number: '47', type: 'seat', available: true },
//         { id: 52, number: '48', type: 'seat', available: true },
//         { id: 53, number: '49', type: 'seat', available: true },
//         { id: 54, number: '50', type: 'seat', available: true },
//         { id: 55, number: '51', type: 'seat', available: false },
//         { id: 56, number: '52', type: 'seat', available: true },
//         { id: 57, number: '53', type: 'seat', available: true },
//         { id: 58, number: '54', type: 'seat', available: true },
//         { id: 59, number: '55', type: 'seat', available: true },
//         { id: 60, number: '56', type: 'seat', available: true },

//         { id: 61, number: '57', type: 'seat', available: false },
//         { id: 62, number: '58', type: 'seat', available: true },
//         { id: 63, number: 'Enter', type: 'seat', available: false },

//         { id: 64, number: '59', type: 'seat', available: true },
//         { id: 65, number: '60', type: 'seat', available: true },
//         { id: 66, number: '61', type: 'seat', available: true },
//         { id: 65, number: '62', type: 'seat', available: true },
//         { id: 66, number: '63', type: 'seat', available: false },
//         { id: 67, number: '64', type: 'seat', available: true },

//         ],
//     ],
//     lower: [
//         ["classic", "classic", "empty", "empty"],
//         ["table", "table", "classic", "classic"],
//     ],
// });



const selectedSeats = ref([]);

console.log("seats",seats.value.upper)

const toggleSeat = (seatType) => {
  console.log("Siège sélectionné :", seatType);
    if (!seatType.available) return;

    const index = selectedSeats.value.findIndex(seat => seat.number === seatType.number);

    if (index == -1) {
        selectedSeats.value.push(seatType);
    } else {
        selectedSeats.value.splice(index, 1);
    }

    console.log("Sièges sélectionnés :", selectedSeats.value);
};
const confirm = () => {
  selectedSeats.value.forEach((seat) => {
          if (seat.number == seat.number && seat.available) {
              seat.available = false;
              console.log("Siège réservé avec succès!");
          }
          emit("update:selectedSeats", selectedSeats.value);

      });
};



defineProps({
  isSidebarOpen : Boolean,
})
const emit = defineEmits(['close','update:selectedSeats'])
</script>

<template>
  <transition name="slide">
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-40  flex justify-end">
      <!-- Sidebar -->
      <div
        class="w-[450px] h-full bg-gray-50 shadow-lg p-4 rounded-l-lg overflow-auto scrollbar-hidden"
        @click.stop
      >
        <div class="p-4 min-h-screen">
          <div class="flex flex-row items-center mb-8">
            <div class="flex flex-col items-center mx-8">
              <span class="text-xl font-bold text-center">Réservation de siège</span>
              <span class="text-center text-gray-500 text-md font-normal">Berlin - Hambourg</span>
            </div>
            <button @click="$emit('close')" class="text-slate-500 bg-purple-200 px-3 py-2 rounded-lg ml-auto">
              <svg class="h-6 w-6 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- <div class="flex justify-center my-4">
            <button class="px-4 py-2 mx-2 bg-gray-200 rounded" @click="selectedDeck = 'lower'">Pont inférieur</button>
            <button class="px-4 py-2 mx-2 bg-green-500 text-white rounded" @click="selectedDeck = 'upper'">Premier étage</button>
          </div> -->

          <div class="justify-center border-2 p-4 self-center w-full rounded-t-3xl border-gray-400">
            <SeatRow v-for="(row, index) in seats[selectedDeck]" :key="index" :seats="row" @select="toggleSeat" />
          </div>

          <div class="text-center mt-4 space-x-3 space-y-2">
            <p v-if="selectedSeats.length == 0"> Aucun siège réservé</p>
             <p v-else>{{ selectedSeats.length }} siège{{ selectedSeats.length > 1? 's':'' }} réservé{{ selectedSeats.length>1? 's':'' }} </p>
            <!-- <button @click="$emit('cancel')" class="bg-gray-200 px-4 py-2 rounded">Annuler</button> -->
            <button @click="confirm" class="bg-green-500 text-white px-4 py-2 rounded">Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.seats-module-seatBtn {
    position: relative;
    width: 100%;
    height: 100%;
    border: var(--ant-seat-border);
    border-color: var(--hcr-grayscale-70-color);
    border-radius: 18px 18px 6px 6px;
    color: var(--hcr-grayscale-70-color);
    overflow: hidden;
}
slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
.scrollbar-hidden {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
    }

    .scrollbar-hidden::-webkit-scrollbar {
      display: none; /* Chrome, Safari et Edge */
    }

</style>

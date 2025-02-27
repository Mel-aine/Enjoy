<template>
    <div class="grid grid-cols-6 gap-1">
        <div v-for="(seat, index) in seats" :key="index"
        :class="seat.number == 'COND' ? 'col-span-3' : (seat.number == 'Enter' ? 'col-span-2' : '')"
        :style="seat.number == 'Couloir' ? `grid-row: span ${seat.size}` : ''">

            <div v-if="seat.number == 'COND'"
                class="bg-gray-400 text-center justify-center align-middle self-center flex flex-col text-white w-full h-10">
                {{
                    seat.number
                }}</div>
            <div v-else-if="seat.number == 'Couloir'"
                class="bg-gray-400 text-center justify-center align-middle self-center flex flex-col text-white w-full h-full">
                {{ seat.number }}</div>
            <div v-else-if="seat.number == 'Enter'"
                class="bg-gray-400 text-center justify-center align-middle self-center flex flex-col text-white w-full h-full">
                {{ seat.number }}</div>
            <div v-else>
                <Seat @click="seatSelect(seat)" :type="seat" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Seat from "./Seat.vue";

defineProps({
    seats: Array,
});
const emit = defineEmits(['select'])
const seatSelect = (seat) => {

    emit('select', seat),
        seat.select = true;
}

</script>

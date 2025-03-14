<script setup>
import { ref, computed } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  checkIn: Date,
  checkOut: Date,
});

const emit = defineEmits(["update:checkIn", "update:checkOut", "close"]);

const currentMonth = ref(new Date());
const hoverDate = ref(null);

const nextMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() + 1,
    1
  );
};

const prevMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() - 1,
    1
  );
};

const handleDateClick = (date) => {
  if (!props.checkIn || (props.checkIn && props.checkOut)) {
    emit("update:checkIn", date);
    emit("update:checkOut", null);
  } else {
    if (date < props.checkIn) {
      emit("update:checkIn", date);
      emit("update:checkOut", null);
    } else {
      emit("update:checkOut", date);
      emit("close");
    }
  }
};

const isDateInRange = (date) => {
  if (!props.checkIn || !hoverDate.value) return false;
  if (props.checkOut) return date > props.checkIn && date < props.checkOut;
  return date > props.checkIn && date < hoverDate.value;
};

// Générer les jours du calendrier
const getCalendarDays = (monthOffset = 0) => {
  const month = new Date(currentMonth.value);
  month.setMonth(month.getMonth() + monthOffset);
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const monthName = month.toLocaleString("default", { month: "long" });

  const days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({ empty: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, monthIndex, day);
    const isToday = new Date().toDateString() === date.toDateString();
    const isSelected =
      (props.checkIn && props.checkIn.toDateString() === date.toDateString()) ||
      (props.checkOut && props.checkOut.toDateString() === date.toDateString());
    const isInRange = isDateInRange(date);

    days.push({
      date,
      day,
      isSelected,
      isInRange,
      isToday,
    });
  }

  return { monthName, year, days };
};
</script>

<template>
  <div class="inline-block">
    <!-- Navigation des mois -->
    <div class="flex justify-between mb-4">
      <button type="button" @click="prevMonth" class="p-1 rounded-full hover:bg-gray-200">
        <ChevronLeft size="20" />
      </button>
      <button type="button" @click="nextMonth" class="p-1 rounded-full hover:bg-gray-200">
        <ChevronRight size="20" />
      </button>
    </div>

    <!-- Affichage des deux mois -->
    <div class="flex gap-4">
      <div v-for="offset in [0, 1]" :key="offset" class="w-64">
        <div class="mb-2 text-center font-medium">
          {{ getCalendarDays(offset).monthName }} {{ getCalendarDays(offset).year }}
        </div>
        <div class="grid grid-cols-7 gap-1 text-center text-xs mb-1">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div class="grid grid-cols-7 gap-1">
          <div
            v-for="(day, index) in getCalendarDays(offset).days"
            :key="index"
            class="h-10 flex items-center justify-center cursor-pointer rounded-full"
            :class="{
              'bg-blue-600 text-white': day.isSelected,
              'bg-blue-100': day.isInRange,
              'border border-blue-600': day.isToday && !day.isSelected,
              'hover:bg-gray-200': !day.empty
            }"
            @click="!day.empty && handleDateClick(day.date)"
            @mouseenter="!props.checkOut && props.checkIn && !day.empty ? hoverDate = day.date : null"
          >
            <span v-if="!day.empty">{{ day.day }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Texte d'information -->
    <div class="mt-4 text-sm text-gray-500">
      {{ checkIn ? `Check-in: ${checkIn.toLocaleDateString()}` : "Sélectionner une date d'arrivée" }}
      <br />
      {{ checkOut ? `Check-out: ${checkOut.toLocaleDateString()}` : checkIn ? "Sélectionner une date de départ" : "" }}
    </div>
  </div>
</template>

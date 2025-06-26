<template>
  <div class="flex items-center space-x-2 text-lg">
    <span :class="isOpen ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'">
      {{ $t(isOpen ? 'open' : 'closed') }}
    </span>
    <span class="text-white/80">
      {{ nextOpeningDisplay }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BusinessHours",
  props: {
    openings: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      now: new Date()
    };
  },
  computed: {
    currentDay() {
      return this.now.toLocaleDateString('en-US', { weekday: 'long' });
    },
    currentTimeMinutes() {
      return this.now.getHours() * 60 + this.now.getMinutes();
    },
    isOpen() {
      const today = this.openings[this.currentDay];
      if (!today) return false;

      const [openH, openM] = today.opening.split(':').map(Number);
      const [closeH, closeM] = today.closing.split(':').map(Number);
      const openMin = openH * 60 + openM;
      const closeMin = closeH * 60 + closeM;

      // Overnight case (e.g., 22:00 - 02:00)
      if (closeMin <= openMin) {
        return this.currentTimeMinutes >= openMin || this.currentTimeMinutes < closeMin;
      }
      return this.currentTimeMinutes >= openMin && this.currentTimeMinutes < closeMin;
    },
    nextOpeningDisplay() {
      const days = Object.keys(this.openings);
      const today = this.openings[this.currentDay];
      const todayIndex = days.indexOf(this.currentDay);
      const nowMins = this.currentTimeMinutes;

      const [openH, openM] = today.opening.split(':').map(Number);
      const [closeH, closeM] = today.closing.split(':').map(Number);
      const openMin = openH * 60 + openM;

      if (this.isOpen || nowMins < openMin) {
        return this.$t('timeRange', {
          start: this.formatTime(today.opening),
          end: this.formatTime(today.closing)
        });
      }

      for (let i = 1; i <= 7; i++) {
        const index = (todayIndex + i) % 7;
        const day = days[index];
        const schedule = this.openings[day];
        if (schedule) {
          const label = i === 1
            ? this.$t('tomorrow')
            : this.$t('inDays', { count: i });

          return `${this.$t('timeRange', {
            start: this.formatTime(schedule.opening),
            end: this.formatTime(schedule.closing)
          })} ${label}`;
        }
      }

      return this.$t('unavailable');
    },
    formatTime() {
      return (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        const date = new Date();
        date.setHours(h);
        date.setMinutes(m);
        return date.toLocaleTimeString(this.$i18n.locale, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }
    }
  }
};
</script>

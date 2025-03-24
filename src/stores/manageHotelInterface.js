

import { defineStore } from 'pinia';

export const useMIHStore = defineStore('MIH', {
  state: () => ({
    isListed: true,
    isSingleBooking: false,
    isPaymentStepBooking: false,
    isConfirmedBooking: false

  }),
  actions: {
  
  singleBooking () {
    this.isSingleBooking = true;
    this.isPaymentStepBooking = false;
    this.isConfirmedBooking = false;
    this.isListed = false;
  },
  
  paymentStepBooking () {
    this.isSingleBooking = false;
    this.isPaymentStepBooking = true;
    this.isConfirmedBooking = false;
    this.isListed = false;
  },

  confirmedBooking () {
    this.isSingleBooking = false;
    this.isPaymentStepBooking = false;
    this.isConfirmedBooking = true;
    this.isListed = false;
  }
  }
//   ,
//   getters: {
//     getShowCount: (state) => state.count,
//   }
});

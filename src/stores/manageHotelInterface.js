

import { defineStore } from 'pinia';

export const useMIHStore = defineStore('MIH', {
  state: () => ({
    hotelId: null,
    this_hotel: null,
    isListed: true,
    isSingleBooking: false,
    isPaymentStepBooking: false,
    isConfirmedBooking: false,
    searchFrom: null,


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
  },
  getHotelId (hotelId) {
    this.hotelId = hotelId;
  },
  setHotel(hotel) {
    this.this_hotel = { ...hotel }; 
  },
  setOthersData (arrivalDate, departureDate, persons) {
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.persons = persons;
  }
}
//   ,
//   getters: {
//     getShowCount: (state) => state.count,
//   }
});

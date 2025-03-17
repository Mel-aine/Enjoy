

import { defineStore } from 'pinia';

export const useReservationHotelStore = defineStore('reservationHotel', {
  state: () => ({
    booking: false,
    hotel: null 

  }),
  actions: {

    setViewDeal () {
      this.booking = true;
    },
    setHotel (hotel) {
      this.hotel = hotel;
    }
  
//    increment () {
//     if (this.count < 42) {
//         this.count++;
//     }
//   },
  
//    decrement () {
//     if (this.count > 0) {
//         this.count--;
//     }
//   }
  },
  getters: {
    // getShowCount: (state) => state.count,
  }
});

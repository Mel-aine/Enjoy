import { defineStore } from "pinia";

export const useMIHStore = defineStore("MIH", {
  state: () => ({
    hotelId: null,
    this_hotel: null,
    isListed: true,
    isSingleBooking: false,
    isPaymentStepBooking: false,
    isConfirmedBooking: false,
    searchFrom: null,
    isCarParkSelected: null,
    roomPrice: null,
    totalPrice: null,
    priceOption: [],
    carParkPrice: null,
    winePrice: null,
    petPrice: null,
    dateArrived: null,
    dateDepart: null,
    totalPerson: null,
    stayLength: null,
    roomNumber: [],
    isSpinnerDisplayed: false,
    allCategories: [],
  }),

  actions: {
    listHotel(){
      this.isListed = true;
      this.isSingleBooking = false;
    },

    singleBooking() {
      this.isSingleBooking = true;
      this.isPaymentStepBooking = false;
      this.isConfirmedBooking = false;
      this.isListed = false;
    },

    paymentStepBooking() {
      this.isSingleBooking = false;
      this.isPaymentStepBooking = true;
      this.isConfirmedBooking = false;
      this.isListed = false;
    },

    confirmedBooking() {
      this.isSingleBooking = false;
      this.isPaymentStepBooking = false;
      this.isConfirmedBooking = true;
      this.isListed = false;
    },
    getHotelId(hotelId) {
      this.hotelId = hotelId;
    },
    setHotel(hotel) {
      this.this_hotel = { ...hotel };
    },
    setOthersData(arrivalDate, departureDate, persons) {
      this.arrivalDate = arrivalDate;
      this.departureDate = departureDate;
      this.persons = persons;
    },
    setIsCarParkSelected() {
      this.isCarParkSelected = true;
    },
    getRoomNumber(rooms) {
      this.roomNumber = rooms.length;
      return this.roomNumber;
    }
  },
  //   ,
  //   getters: {
  //     getShowCount: (state) => state.count,
  //   }
  persist: {
    storage: sessionStorage,
},
});

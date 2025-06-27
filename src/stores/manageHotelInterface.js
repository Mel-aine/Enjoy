import { defineStore } from "pinia";

export const useMIHStore = defineStore("MIH", {
  state: () => ({
    hotelId: null,
    isListed: true,
    this_hotel: null,
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
    idfound: null,
    reservationItems:[]
  }),

  actions: {
    listHotel(){
      this.isSingleBooking = false;
    },

    singleBooking() {
      this.isSingleBooking = true;
      this.isPaymentStepBooking = false;
      this.isConfirmedBooking = false;
    },

    paymentStepBooking() {
      this.isSingleBooking = false;
      this.isPaymentStepBooking = true;
      this.isConfirmedBooking = false;
    },

    confirmedBooking() {
      this.isSingleBooking = false;
      this.isPaymentStepBooking = false;
      this.isConfirmedBooking = true;
    },
    getHotelId(hotelId) {
      this.hotelId = hotelId;
      console.log("Hotel ID set to:", this.hotelId);
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
    },
    setReservationItems(rs){
      this.reservationItems = rs;
    }
  },
  //   ,
  //   getters: {
  //     getShowCount: (state) => state.count,
  //   }
  persist: true
});

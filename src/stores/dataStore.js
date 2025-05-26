import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: '',
    parentType: '', // Identifiant du parent
    searchFrom: null,
    serviceGeted : null,
    filtedHotel: {
      hotelId: null,
      hotelName: null,
      hotelImage: null,
      hotelAddress: null,
      hotelCity: null,
      hotelPrice: null,
      hotelRating: null,
      hotelDescription: null,
      hotelPhoneNumber: null,
      hotelEmail: null,
      hotelWebsite: null,
      hotelLatitude: null,
      hotelLongitude: null
    }

  }),
  actions: {
    
    setData(newData, newParentType) {
      this.data = newData;
      this.parentType = newParentType;
    },
    setFiltedHotel (fHotel) {
      this.filtedHotel = { ...fHotel }
    },
    setSearchParams(searchFrom) {
      this.searchFrom = searchFrom;
    }
  },
  persist: true
});
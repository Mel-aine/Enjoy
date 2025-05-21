import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: '',
    parentType: '', // Identifiant du parent
    searchFrom: null,

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
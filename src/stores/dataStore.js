import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: '',
    parentType: '', // Identifiant du parent
  }),
  actions: {
    setData(newData, newParentType) {
      this.data = newData;
      this.parentType = newParentType;
    },
  },
});
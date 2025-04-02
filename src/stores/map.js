import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    category: '',
    location: '',
    servicesName: '',
  }),
  actions: {
    setSearchData(category, location,name) {
      this.category = category;
      this.location = location;
      this.servicesName = name;
    }
  }
});

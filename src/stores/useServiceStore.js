import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', {
  state: () => ({
    services: {},
    hotels: [],
    // rooms: [] // si nécessaire
  }),
  actions: {
    setServices(data) {
      this.services = data
      this.hotels = data.hotels || []
      // this.rooms = data.serviceProducts || []
    }
  },
 persist: true
})

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('addressService', () => {
    const currentPlace = ref({})
    const serviceType = ref('')

    function setCurrentPlace(place) {
        currentPlace.value = place
    }

    function setServiceType(type) {
        serviceType.value = type
    }

    return { currentPlace, setCurrentPlace, serviceType, setServiceType }
}, {
    persist: true
})


import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0 

  }),
  actions: {
  
   increment () {
    if (this.count < 42) {
        this.count++;
    }
  },
  
   decrement () {
    if (this.count > 0) {
        this.count--;
    }
  }
  },
  getters: {
    getShowCount: (state) => state.count,
  },
  persist: true
});

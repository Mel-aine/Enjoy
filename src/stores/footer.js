

import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footer', {
  state: () => ({
    showMoreFooter: false
  }),
  actions: {
    updateFooter(value) {
      this.showMoreFooter = value;
      console.log('updateFooter', this.showMoreFooter);
    }
  },
  getters: {
    getShowMoreFooter: (state) => state.showMoreFooter
  }
});

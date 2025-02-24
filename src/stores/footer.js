

import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footer', {
  state: () => ({
    showMoreFooter: false,
    showNavbar: true,

  }),
  actions: {
    updateFooter(value) {
      console.log(('LOCATION', window.location))
      this.showMoreFooter = value;
      //console.log('updateFooter', this.showMoreFooter);
    },
    updateNavbar(value) {
      console.log(('LOCATION', window.location))
      this.showNavbar = value;
      console.log(' updateNavbar111', this.showNavbar);
    }
  },
  getters: {
    getShowMoreFooter: (state) => state.showMoreFooter,
    getShowNavbar: (state) => state.showNavbar,
  }
});

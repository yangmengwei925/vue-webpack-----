import Vue from 'vue';

import App from './App.vue';

import router from './router';

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});

window.$vm = vm;
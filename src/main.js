import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './axios';
import i18n from './localization';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

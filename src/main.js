import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueI18n);
const messages = {
  vi: {
    nav: {
      products: 'Sản Phẩm',
      contact: 'Liên Hệ',
      addPuzzle: 'Đăng Sản Phẩm',
      login: 'Đăng Nhập',
    },
    announcement: {
      label: 'Thông báo',
      content: 'Vì shop không còn quản lý trang rubiksaigon.com nữa, '
      + 'xin quý khách vui lòng vào {0} ({1}).{2}{3}Rubik-saigon.com '
      + 'chỉ có 1 shop duy nhất tại 300/11 Đội Cung, phường 9, quận 11.',
      disclaimer: 'có dấu gạch nối',
    },
  },
  en: {
    nav: {
      products: 'Products',
      contact: 'Contact Us',
      addPuzzle: 'Add Puzzle',
      login: 'Login',
    },
    announcement: {
      label: 'Announcement(s)',
      content: 'Since rubiksaigon.com domain is no longer under our management, '
      + 'please kindly visit our store at {0} ({1}).{2}{3}Rubik-saigon.com\'s '
      + 'only store is located at 300/11 Đội Cung street, ward 9, district 11, '
      + 'Hồ Chí Minh city.',
      disclaimer: 'with a hyphen',
    },
  },
};
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

Vue.use(BootstrapVue);

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

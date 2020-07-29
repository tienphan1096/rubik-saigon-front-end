import Vue from 'vue';
import VueI18n from 'vue-i18n';

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
    search: 'Tìm kiếm',
    price: {
      label: 'Giá',
      contact: 'Liên hệ',
    },
    puzzleType: 'Loại rubik',
    puzzleTypes: {
      1: '2x2',
      2: '3x3',
      3: '4x4',
      4: '5x5',
      5: '6x6',
      6: '7x7',
      7: 'Biến thể 4 mặt',
      8: 'Biến thể 6 mặt',
      9: 'Biến thể 8 mặt',
      10: 'Biến thể 10 mặt',
      11: 'Biến thể 12 mặt',
      12: 'Big cube',
      13: 'Truyền thống big cube',
      14: 'Khác',
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
    search: 'Search',
    price: {
      label: 'Price',
      contact: 'Contact us',
    },
    puzzleType: 'Puzzle type',
    puzzleTypes: {
      1: '2x2',
      2: '3x3',
      3: '4x4',
      4: '5x5',
      5: '6x6',
      6: '7x7',
      7: 'Tetrahedron',
      8: 'Cuboid',
      9: 'Octahedron',
      10: 'Octagonal prism',
      11: 'Dodecahedron',
      12: 'Big cubes',
      13: 'Traditional big cubes',
      14: 'Others',
    },
  },
};
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;

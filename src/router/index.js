import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-rubik',
    name: 'Add Rubik',
    component: () => import(/* webpackChunkName: "add-rubik" */ '../views/AddRubik.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/rubik/:name',
    name: 'Puzzle Details',
    component: () => import(/* webpackChunkName: "puzzle-details") */ '../views/PuzzleDetails.vue'),
  },
  {
    path: '/search/:keywords',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search") */ '../views/Search.vue'),
  },
  {
    path: '/category/:category',
    name: 'Puzzle Category',
    component: () => import(/* webpackChunkName: "puzzle-category") */ '../views/PuzzleCategory.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

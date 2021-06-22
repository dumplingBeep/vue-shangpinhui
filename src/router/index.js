import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

import Search from '../views/Search';
import Login from '../views/Login';
import Register from '../views/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isFooterHide: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      isFooterHide: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

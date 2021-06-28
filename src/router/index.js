import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

import Search from '../views/Search';
import Login from '../views/Login';
import Register from '../views/Register';
import Detail from '../views/Detail';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:keyword?',
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
  {
    path: '/detail/:skuId',
    name: 'Detail',
    component: Detail,
    meta: {
      isFooterHide: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

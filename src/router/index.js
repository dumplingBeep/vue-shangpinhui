import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

import Search from '../views/Search';
import Login from '../views/Login';
import Register from '../views/Register';
import Detail from '../views/Detail';
import AddCart from '../views/AddCart';
import ShopCart from './../views/ShopCart';
import Center from './../views/Center';
import Pay from './../views/Pay';
import PaySuccess from './../views/PaySuccess';
import Trade from './../views/Trade';

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
  {
    path: '/addcart',
    name: 'AddCart',
    component: AddCart,
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
  },
  {
    path: '/center',
    name: 'Center',
    component: Center,
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    beforeEnter: (to, from, next) => {
      if (from.name === 'Pay' || from.name === 'Center') {
        next();
        return;
      }
      next(from);
    },
  },
  {
    path: '/paysuccess',
    name: 'PaySuccess',
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      if (from.name === 'Trade') {
        next();
        return;
      }
      next(from);
    },
  },
  {
    path: '/trade',
    name: 'Trade',
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.name === 'ShopCart') {
        next();
        return;
      }
      next(from);
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

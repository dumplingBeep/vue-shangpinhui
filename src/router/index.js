import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('../views/Home');
const Search = () => import('../views/Search');
const Login = () => import('../views/Login');
const Register = () => import('../views/Register');
const Detail = () => import('../views/Detail');
const AddCart = () => import('../views/AddCart');
const ShopCart = () => import('../views/ShopCart');
const Center = () => import('../views/Center');
const Pay = () => import('../views/Pay');
const PaySuccess = () => import('../views/PaySuccess');
const Trade = () => import('../views/Trade');

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
      if (from.name === 'Trade' || from.name === 'Center') {
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
      if (from.name === 'Pay') {
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

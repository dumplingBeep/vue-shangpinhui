import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import error from './assets/images/error.jpg';
import loading from './assets/images/loading.gif';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 2,
});
Vue.config.productionTip = false;

import './mock';
import './styles/reset.css';
import './assets/common.less';
import './styles/iconfont.css';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './routers';
import store from './store';
/* import 'amfe-flexible' */

axios.defaults.baseURL = 'http://39.108.187.102:1904';

import axios from 'axios'

Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
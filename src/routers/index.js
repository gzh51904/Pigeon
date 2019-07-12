import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import Recommend from '../components/Recommend.vue';
import Features from '../components/Features.vue';
import Basis from '../components/Basis.vue';
import Insurance from '../components/Insurance.vue';
import Claims from '../components/Claims.vue';

let router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home,
    }, {
      name: 'Production',
      path: '/production',
      component: Production,
    }, {
      name: 'Discover',
      path: '/discover',
      component: Discover,
      // 嵌套路由
      children: [
        {
          name: 'Recommend',
          path: 'recommend',
          component: Recommend
        }, {
          name: 'Features',
          path: 'reatures',
          component: Features
        }, {
          name: 'Basis',
          path: 'basis',
          component: Basis
        }, {
          name: 'Insurance',
          path: 'insurance',
          component: Insurance
        }, {
          name: 'Claims',
          path: 'claims',
          component: Claims
        }
      ]
    }, {
      name: 'Mine',
      path: '/mine',
      component: Mine,
    }]
})



export default router;
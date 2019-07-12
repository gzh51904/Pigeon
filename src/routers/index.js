import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import feature from "../pages/feature.vue";
import health from "../pages/health.vue";
import accident from "../pages/accident.vue";
import lifetime from "../pages/lifetime.vue";
import travel from "../pages/travel.vue";
import wealth from "../pages/wealth.vue";
import duty from "../pages/duty.vue";
import Recommend from '../components/Recommend.vue';
import Features from '../components/Features.vue';
import Basis from '../components/Basis.vue';
import Insurance from '../components/Insurance.vue';
import Claims from '../components/Claims.vue';

let router = new VueRouter({
  routes: [{
    name: 'Home',
    path: '/home',
    component: Home,
  },
  {
    name: 'Production',
    path: '/production',
    component: Production,
    children: [
      {
        name: "feature",
        path: "feature",
        component: feature
      },
      {
        name: "accident",
        path: "accident",
        component: accident
      },
      {
        name: "health",
        path: "health",
        component: health
      },
      {
        name: "lifetime",
        path: "lifetime",
        component: lifetime
      },
      {
        name: "travel",
        path: "travel",
        component: travel
      },
      {
        name: "wealth",
        path: "wealth",
        component: wealth
      },
      {
        name: "duty",
        path: "duty",
        component: duty
      }

    ]
  },
  {
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
});


export default router;
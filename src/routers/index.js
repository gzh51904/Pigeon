import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue';
import Consultant from '../pages/Consultant.vue'
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
<<<<<<< HEAD
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
=======
import Search from '../pages/Search.vue';
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3
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
Vue.use(VueRouter);

let router = new VueRouter({
<<<<<<< HEAD
    routes: [{
            name: 'Home',
            path: '/home',
            component: Home,
=======
    routes: [
        {
            //重定向
            path: '/',
            redirect: '/home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
        },
        {
            name: 'Search',
            path: '/search',
            component: Search,
        },
        {
            name: 'Consultant',
            path: '/consultant',
            component: Consultant,
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,
        }, {
            name: 'Mine',
            path: '/mine',
            component: Mine,
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3
        }, {
            name: 'Production',
            path: '/production',
            component: Production,
<<<<<<< HEAD
            children: [{
=======
            children: [
                {
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3
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
<<<<<<< HEAD

            ]
        }, {
            name: 'Discover',
            path: '/discover',
            component: Discover,
=======
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
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3
        }, {
            name: 'Mine',
            path: '/mine',
            component: Mine,
<<<<<<< HEAD
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'Reg',
            path: '/reg',
            component: Reg,
        }
    ]
});

=======
        }]
})
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3

export default router;
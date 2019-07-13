import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue';
import Consultant from '../pages/Consultant.vue'
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Search from '../pages/Search.vue';
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

Vue.use(VueRouter);

let router = new VueRouter({



    routes: [{
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
            name: 'Mine',
            path: '/mine',
            component: Mine,
        },
        {
            name: 'Production',
            path: '/production',
            component: Production,
            children: [{
                    name: "feature",
                    path: "feature",
                    component: feature
                },
                {
                    name: "accident",
                    path: "accident",
                    component: feature
                },
                {
                    name: "health",
                    path: "health",
                    component: feature
                },
                {
                    name: "lifetime",
                    path: "lifetime",
                    component: feature
                },
                {
                    name: "travel",
                    path: "travel",
                    component: feature
                },
                {
                    name: "wealth",
                    path: "wealth",
                    component: feature
                },
                {
                    name: "duty",
                    path: "duty",
                    component: feature
                }
            ]
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,
            // 嵌套路由
            children: [{
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
                component: Basis
            }, {
                name: 'Claims',
                path: 'claims',
                component: Basis
            }]
        }, {
            name: 'Mine',
            path: '/mine',
            component: Mine,
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


export default router;
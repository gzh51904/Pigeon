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
import Recommend from '../components/Recommend.vue';
import Features from '../components/Features.vue';
import Basis from '../components/Basis.vue';
<<<<<<< HEAD
import Insurance from '../components/Insurance.vue';
import Claims from '../components/Claims.vue';
import Yanxuan from '../pages/Yanxuan.vue';
import Myorder from '../pages/Myorder.vue';
=======

>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab
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
<<<<<<< HEAD
            name: 'Yanxuan',
            path: '/yanxuan',
            component: Yanxuan,
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,
        }, {
            name: 'Mine',
            path: '/mine',
            component: Mine,
        }, {
=======
>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab
            name: 'Production',
            path: '/production',
            component: Production,
            children: [
                // {
                //     path: '/',
                //     component: feature
                // },
                {
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
                }, {
                    name: "travel",
                    path: "travel",
                    component: feature
                }, {
                    name: "wealth",
                    path: "wealth",
                    component: feature
                }, {
                    name: "duty",
                    path: "duty",
                    component: feature
                },
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
                path: 'features',
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
<<<<<<< HEAD
        },{
            name: 'Myorder',
            path: '/myorder',
            component: Myorder,
        }]
})
=======
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


>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab

export default router;
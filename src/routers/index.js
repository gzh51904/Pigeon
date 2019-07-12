import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import feature from "../pages/feature.vue";
import health from "../pages/health.vue";
import accident from "../pages/accident.vue";
import lifetime from "../pages/lifetime.vue";
import travel from "../pages/travel.vue";
import wealth from "../pages/wealth.vue";
import duty from "../pages/duty.vue";

let router = new VueRouter({
    routes: [{
            name: 'Home',
            path: '/home',
            component: Home,
        }, {
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
        }, {
            name: 'Discover',
            path: '/discover',
            component: Discover,
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
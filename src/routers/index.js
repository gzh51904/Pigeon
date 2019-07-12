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

let router = new VueRouter({
    routes: [{
        name: 'Home',
        path: '/home',
        component: Home,
    }, {
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
    }, {
        name: 'Discover',
        path: '/discover',
        component: Discover,
    }, {
        name: 'Mine',
        path: '/mine',
        component: Mine,
    }]
});


export default router;
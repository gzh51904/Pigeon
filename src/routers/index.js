import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import tese from "../pages/tese.vue";
import health from "../pages/health.vue";

let router = new VueRouter({
    routes: [{
        name: 'Production',
        path: '/production',
        component: Production,
        children : [
            {
                name:"tese",
                path:"tese",
                component:tese
            },
            {
                name:"health",
                path:"health",
                component:health
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
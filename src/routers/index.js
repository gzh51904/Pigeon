import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';

let router = new VueRouter({
    routes: [{
        name: 'Production',
        path: '/production',
        component: Production,
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
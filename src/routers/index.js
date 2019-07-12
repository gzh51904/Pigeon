import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Consultant from '../pages/Consultant.vue'
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import Search from '../pages/Search.vue';

let router = new VueRouter({
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
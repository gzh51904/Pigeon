import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

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
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,
        },
        {
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
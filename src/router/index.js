import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/new',
        name: 'New',
        component: () => import('../views/New.vue')
    },
    {
        path: '/past',
        name: 'Past',
        component: () => import('../views/Past.vue')
    },
    {
        path: '/comments',
        name: 'Comments',
        component: () => import('../views/Comments.vue')
    },
    {
        path: '/ask',
        name: 'Ask',
        component: () => import('../views/Ask.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

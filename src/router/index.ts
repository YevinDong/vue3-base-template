import { Router, createRouter, createWebHashHistory } from 'vue-router';
import Hooks from './hooks';
const page_a = () => import(/* webpackChunkName: "page-a" */ '@/views/pageA/index.vue');
const page_b = () => import(/* webpackChunkName: "page-b" */ '@/views/pageB/index.vue');
const routes = [
    {
        path: '/',
        name: 'page-a',
        alias: '/page-a',
        component: page_a,
        meta: {
            title: 'page-A',
            keepAlive: false,
        },
    },
    {
        path: '/page-b',
        name: 'page-b',
        component: page_b,
        meta: {
            title: 'page-B',
            keepAlive: true,
        },
    },
];
const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { top: 0 };
    },
});

Hooks(router);

export default router;

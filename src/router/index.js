import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    redirect: '/home',
    component: () => import('../layouts/MainLayout'),
    children: [
        {
            name: 'Home',
            path: '/home',
            component: () => import('../views/Home')
        },
        {
            name: 'Home',
            path: '/movies',
            component: () => import('../views/Movies')
        },
        {
            name: 'TVSeries',
            path: '/tv',
            component: () => import('../views/TVSeries')
        },
        {
            name: 'Software',
            path: '/software',
            component: () => import('../views/Software')
        },
        {
            name: 'OS',
            path: '/os',
            component: () => import('../views/OS')
        },
        {
            name: 'Other',
            path: '/other',
            component: () => import('../views/Other')
        },
        {
            name: 'Upload',
            path: '/upload',
            component: () => import('../views/Upload')
        }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router

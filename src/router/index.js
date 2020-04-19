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
            name: 'Files',
            path: '/files',
            component: () => import('../views/Files')
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router

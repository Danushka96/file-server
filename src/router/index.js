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
        name: 'TVSeries',
        path: '/tv',
        component: () => import('../views/TVSeries')
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

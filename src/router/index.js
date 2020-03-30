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
        name: "Home",
        path: "/home",
        component: () => import('../views/Home')
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router

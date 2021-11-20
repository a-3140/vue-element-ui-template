import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutLoggedIn from '@/layouts/LayoutLoggedIn.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: LayoutDefault }
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: LayoutDefault },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Sign up',
    meta: { layout: LayoutDefault },
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/profile',
    name: 'My Profile',
    meta: { layout: LayoutLoggedIn },
    component: () => import('../views/Profile.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

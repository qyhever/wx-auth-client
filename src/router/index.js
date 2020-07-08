import Vue from 'vue'
import Router from 'vue-router'
// import BasicLayout from '@/layouts/basic-layout'

Vue.use(Router)
export default new Router({
  base: '/',
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import( /* webpackChunkName: "home" */ '@/views/home')
    }
  ]
})

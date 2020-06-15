import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import LeftNav from '../views/LeftNav'
import HeaderTop from '../views/HeaderTop'
import Login from '../views/Login'
import Yuanindex from '../views/Yuanindex'
import Yuanleft from '../views/Yuanleft'
import Yuantop from '../views/Yuantop'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/yuanindex',
      name: '/Yuanindex',
      component: Yuanindex,
      children: [
        {
          path: 'yuanx',
          name: 'Yuanx',
          component: () => import(/* webpackChunkName: "Yuanx" */ '../views/Yuanx.vue')
        },
        {
          path: 'yuans',
          name: 'Yuans',
          component: () => import(/* webpackChunkName: "Yuans" */ '../views/Yuans.vue')
        },
        {
          path: 'yuant',
          name: 'Yuant',
          component: () => import(/* webpackChunkName: "Yuant" */ '../views/Yuant.vue')
        }]
    },
    {
      path: '/yuantop',
      name: '/Yuantop',
      component: Yuantop
    },
    {
      path: '/yuanleft',
      name: '/Yuanleft',
      components: Yuanleft
    },
    {
      path: '/',
      name: '/Login',
      component: Login
    },
    {
      path: '/index',
      name: '/Index',
      component: Index,
      children: [
        {
          path: 'gL',
          name: 'GL',
          component: () => import(/* webpackChunkName: "gL" */ '../views/GL.vue')
        },
        {
          path: 'yuan',
          name: 'Yuan',
          component: () => import(/* webpackChunkName: "yuan" */ '../views/Yuan.vue')
        },
        {
          path: 'pu',
          name: 'Pu',
          component: () => import(/* webpackChunkName: "pu" */ '../views/Pu.vue')
        },
        {
          path: 'zg',
          name: 'Zg',
          component: () => import(/* webpackChunkName: "zg" */ '../views/Zg.vue')
        },
        {
          path: 'wen',
          name: 'Wen',
          component: () => import(/* webpackChunkName: "wen" */ '../views/Wen.vue')
        },
        {
          path: 'ti',
          name: 'Ti',
          component: () => import(/* webpackChunkName: "ti" */ '../views/Ti.vue')
        },
        {
          path: 'xs',
          name: 'Xs',
          component: () => import(/* webpackChunkName: "xs" */ '../views/Xs.vue')
        },
        {
          path: 'ku',
          name: 'Ku',
          component: () => import(/* webpackChunkName: "ku" */ '../views/Ku.vue')
        }
      ]
    },
    {
      path: '/leftNav',
      name: '/LeftNav',
      component: LeftNav
    },
    {
      path: '/headerTop',
      name: '/HeaderTop',
      component: HeaderTop
    }
  ]
})

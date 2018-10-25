/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import a1 from '../views/About-1'
import a2 from '../views/About-2'
Vue.use(VueRouter)

export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/about',
      component: About,
      children: [{
        path: '/about/about-1',
        component: a1
      },
      {
        path: '/about/about-2',
        component: a2
      }
      ]
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

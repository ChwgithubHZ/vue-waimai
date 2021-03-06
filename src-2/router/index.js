/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
Vue.use(VueRouter)

export default new VueRouter({
  //配置路由
  routes:[
    {
      path: '/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})

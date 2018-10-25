/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
// import {Button} from 'mint-ui'
//  import router from './router'
// 创建vm
/* eslint-disable no-new */

//  注册成标签（全局）
// Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
  // router配置路由器
})

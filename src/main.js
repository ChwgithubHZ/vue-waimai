/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
let vue = new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  router // 引入配置路由
})
Vue.use(
  vue
)

/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http = axios

let v = new Vue({
  methods: {
    postData () {
      this.$http({
        method: 'post',
        url: 'localhost:8082/ljnet/carbody/service/getPassedCheckList',
        data: {
          id: 1,
          pageNum: 2,
          appointmentServicerDateString: '2018-09-24 16:23:24',
          driverName: '司机11',
          licensePlateNumber: '浙A12345'
        }
      })
    }
  },
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
Vue.use({
  v
})

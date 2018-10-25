/*
vuex的核心管理对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = { // 初始化状态
  a ({commit}) {
    commit('add')
  },
  b ({commit}) {
    commit('remove')
  }
}
const mutations = { // 包含多个对应事件回调函数的对象
  add (state) {
    state.count++
  },
  remove (state) {
    state.count--
  }
}
const state = { // 数据
  count: 0
}
const getters = {
  even (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }

}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个对应事件回调函数的对象
  actions, // 包含多个对应事件的回调函数
  getters // 包含多个getter计算属性的对象
})

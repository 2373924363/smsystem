import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: ''
  },
  mutations: {
    addItem (state, value) {
      sessionStorage.setItem('value', value)
      state.value = value
    }
  },
  actions: {
  },
  getters: {
    getadd (state) {
      if (state.user === null) {
        state.value = sessionStorage.getItem('value')
      }
      return state.value
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: null ?? JSON.parse(localStorage.getItem('IS_LOGIN_IN')),
  },
  mutations: {
    SET_LOGIN: (state, val) => {
      state.isLoggedIn = val
      localStorage.setItem('IS_LOGIN_IN', JSON.stringify(val))
    },
  },
  actions: {},
  modules: {},
})

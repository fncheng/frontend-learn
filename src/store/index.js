import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerCacheList: [],
  },
  mutations: {
    ADD_CACHE(state, val) {
      state.routerCacheList.push(val)
    },
    REMOVE_CACHE(state, val) {
      state.routerCacheList = state.routerCacheList.filter(
        (item) => item !== val
      )
    },
  },
  actions: {},
  modules: {},
})

const state = {
  name: 'name',
}
const mutations = {
  SET_NAME: (state, val) => {
    state.name = val
  },
}
const actions = {
  setName({ commit }, val) {
    commit('SET_NAME', val)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

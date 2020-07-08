export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT(state, value) {
      state.count = state.count + value
    }
  }
}

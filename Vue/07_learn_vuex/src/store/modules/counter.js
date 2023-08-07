const counter = {
  namespaced: true,
  state: () => ({
    count: 99
  }),
  mutations: {
    addCount(state) {
      state.count++
    }
  },
  getters: {
    doubleCount(state, getters, rootState) {
      return state.count + rootState.rootCounter
    }
  },
  actions: {
    addCountAction(context) {
      context.commit("addCount")
    }
  }
}

export default counter
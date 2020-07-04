import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMain: true
  },
  getters: {
    isMain (state) {
      console.log('getter isMain()', state.isMain)
      return state.isMain
    }
  },
  mutations: {
    setMain (state, value) {
      console.log('mutation setMain()', value)
      state.isMain = value
    }
  },
  actions: {
  },
  modules: {
  }
})

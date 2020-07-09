import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMain: true,
    title: {
      text: 'Interview Helper',
      icon: ''
    }
  },
  getters: {
    isMain (state) {
      return state.isMain
    },
    title (state) {
      return state.title
    }
  },
  mutations: {
    setMain (state, value) {
      state.isMain = value
    },
    setTitle (state, payload) {
      state.title = { text: payload.text, icon: payload.icon }
    }
  },
  actions: {
  },
  modules: {
  }
})

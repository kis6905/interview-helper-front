import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMain: true,
    title: {
      text: 'Interview Helper',
      icon: ''
    },
    interview: {
      interviewDate: '',
      interviewer: '',
      candidate: '',
      questionSetList: []
    }
  },
  getters: {
    isMain (state) {
      return state.isMain
    },
    title (state) {
      return state.title
    },
    interview (state) {
      return state.interview
    }
  },
  mutations: {
    setMain (state, value) {
      state.isMain = value
    },
    setTitle (state, payload) {
      state.title = { text: payload.text, icon: payload.icon }
    },
    initInterview (state, payload) {
      const today = new Date()
      state.interview = {
        interviewDate: today.yyyymmdd('yyyy-mm-dd'),
        interviewer: '',
        candidate: '',
        communicationRating: 0,
        technicalRating: 0,
        expectationRating: 0,
        comment: '',
        questionSetList: []
      }
    },
    setInterviewQuestionSetList (state, payload) {
      const questionSetList = payload.questionSetList
      for (const set of questionSetList) {
        set.questionList = set.questionList.map((question) => {
          return {
            ...question,
            comment: '',
            rating: 0
          }
        })
      }
      state.interview.questionSetList = questionSetList
    }
  },
  actions: {
  },
  modules: {
  }
})

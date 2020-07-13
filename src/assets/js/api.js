import axios from 'axios'

const getConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
const formConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data'
  }
}
const apiDomain = process.env.VUE_APP_API_DOMAIN
// const jwtForLocal = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9BUFBST1ZBTCxST0xFX1VTRVIiLCJpc3MiOiJkZXZlbGVhZiIsIm5hbWUiOiLqtozsnbzsiJgiLCJyYW5rIjoi64yA66asIiwiZXhwIjoxNTY5MzAwOTMzLCJ1c2VySWQiOiJpc2t3b24iLCJ1c2VyU2VxIjoxfQ.wHaSZCk6ZYXME0ugIK9hIwXziJZeecQeQ2eQ30JiOLI'

export default {
  async login (data) {
    const requestConfigForLogin = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const response = await axios.post(`${apiDomain}/login`, data, requestConfigForLogin)
    const jwtHeader = response.headers['jwt-header']
    getConfig.headers['jwt-header'] = jwtHeader
    formConfig.headers['jwt-header'] = jwtHeader
    return response
  },
  request (url, method, data) {
    const form = new FormData()
    for (const paramName in data) {
      const value = data[paramName]
      if (value) {
        form.append(paramName, data[paramName])
      }
    }
    if (process.env.VUE_APP_MODE === 'L') {
      // formConfig.headers['jwt-header'] = jwtForLocal
    }
    formConfig.url = url
    formConfig.method = method
    formConfig.data = form
    return axios.request(formConfig)
  },
  requestGet (url) {
    if (process.env.VUE_APP_MODE === 'L') {
      // getConfig.headers['jwt-header'] = jwtForLocal
    }
    return axios.get(`${apiDomain}${url}`, getConfig)
  },

  async getQuestionSetList () {
    // return this.requestGet('/question/set/list')
    return setList
  },
  async saveQuestionSet (set) {
    // return this.request('/question/set', 'post', set)
    let maxSetId = setList.reduce((e1, e2) => Number(e1.setId) < Number(e2.setId) ? e2 : e1, { setId: -1 })
    maxSetId = Number(maxSetId.setId) + 1
    setList.push({ ...set, setId: maxSetId })
  },
  async modifyQuestionSet (set) {
    // return this.request('/question/set', 'put', set)
    const foundSet = setList.find((e) => e.setId === set.setId)
    foundSet.setName = set.setName
    foundSet.questionList = set.questionList
  },
  async saveInterview (interview) {
    // return this.request('/interview', 'post', interview)
    let maxInterviewId = finishedInterview.reduce((e1, e2) => Number(e1.interviewId) < Number(e2.interviewId) ? e2 : e1, { interviewId: -1 })
    maxInterviewId = Number(maxInterviewId.interviewId) + 1
    finishedInterview.push({ ...interview, interviewId: maxInterviewId })
  },
  async getFinishedInterviewList () {
    // return this.request('/interview/list', 'get')
    return finishedInterview.sort((e1, e2) => e2.interviewDate.localeCompare(e1.interviewDate))
  }
}

const setList = [{
  setId: '3',
  setName: '공통 질문',
  author: 'develeaf',
  questionList: [{
    questionId: '1',
    question: '자신의 장단점?'
  }, {
    questionId: '2',
    question: '타인과 갈등이 생기면 어떻게 해결하는가?'
  }, {
    questionId: '3',
    question: '파견근무는 괜찮은가?'
  }, {
    questionId: '4',
    question: '본인의 멘탈은 강한편이라고 생각하는가?'
  }]
}, {
  setId: '1',
  setName: '서버개발자 - 신입',
  author: 'develeaf',
  questionList: [{
    questionId: '11',
    question: 'Java란?'
  }, {
    questionId: '12',
    question: 'Spring 이란?'
  }, {
    questionId: '13',
    question: 'IoC 란?'
  }]
}, {
  setId: '2',
  setName: '안드로이드개발자 - 신입',
  author: 'develeaf',
  questionList: [{
    questionId: '21',
    question: 'Java란?'
  }, {
    questionId: '22',
    question: 'Kotlin 이란?'
  }]
}]

const finishedInterview = [{
  interviewId: '1',
  interviewDate: '2020-07-01',
  interviewer: 'develeaf',
  interviewee: 'junior developer #1',
  communicationRating: 3.5,
  technicalRating: 4,
  expectationRating: 4.5,
  comment: '훌륭함!',
  questionSetList: [{
    setId: '3',
    setName: '서버개발자 - 신입',
    author: 'develeaf',
    questionList: [{
      questionId: '11',
      question: 'Java란?',
      comment: '개념 있음',
      rating: 4
    }, {
      questionId: '12',
      question: 'Spring 이란?',
      comment: '적당함',
      rating: 3.5
    }, {
      questionId: '13',
      question: 'IoC 란?',
      comment: '부족함',
      rating: 2
    }]
  }]
}]

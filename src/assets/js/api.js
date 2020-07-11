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
  },
  async getQuestionList (setId) {
    // return this.requestGet(`/question/list/${setId}`)
    return setList.find((set) => set.setId === setId).questionList
  }
}

const setList = [{
  setId: '1',
  setName: '서버개발자 - 신입',
  author: 'develeaf',
  questionList: [{
    questionId: '1',
    question: 'Java란?'
  }, {
    questionId: '2',
    question: 'Spring 이란?'
  }, {
    questionId: '3',
    question: 'IoC 란?'
  }]
}, {
  setId: '2',
  setName: '안드로이드개발자 - 신입',
  author: 'develeaf',
  questionList: [{
    questionId: '11',
    question: 'Java란?'
  }, {
    questionId: '12',
    question: 'Kotlin 이란?'
  }]
}]

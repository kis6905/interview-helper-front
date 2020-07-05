import axios from 'axios'

const getConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
const postConfig = {
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
    postConfig.headers['jwt-header'] = jwtHeader
    return response
  },
  requestGet (url) {
    if (process.env.VUE_APP_MODE === 'L') {
      // getConfig.headers['jwt-header'] = jwtForLocal
    }
    return axios.get(`${apiDomain}${url}`, getConfig)
  },
  requestPost (url, data) {
    if (process.env.VUE_APP_MODE === 'L') {
      // postConfig.headers['jwt-header'] = jwtForLocal
    }
    const form = new FormData()
    for (const paramName in data) {
      const value = data[paramName]
      if (value) {
        form.append(paramName, data[paramName])
      }
    }
    return axios.post(`${apiDomain}${url}`, form, postConfig)
  },
  async getQuestionSetList () {
    // return this.requestGet('/question/set/list')
    return [{
      setId: '1',
      setName: '서버개발자 - 신입',
      author: 'develeaf',
      questionList: [{
        questionId: '1',
        question: 'Java란?'
      }, {
        questionId: '2',
        question: 'Spring 이란?'
      }]
    }, {
      setId: '2',
      setName: '안드로이드개발자 - 신입',
      author: 'develeaf',
      questionList: [{
        questionId: '3',
        question: 'Java란?'
      }, {
        questionId: '4',
        question: 'Kotlin 이란?'
      }]
    }]
  },
  getQuestionList (setId) {
    return this.requestGet(`/question/list/${setId}`)
  }
}

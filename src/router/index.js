import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }, {
    path: '/question/set',
    name: 'QuestionSetList',
    component: () => import('../views/questionset/QuestionSetList.vue')
  }, {
    path: '/question/set/detail',
    name: 'QuestionSetDetail',
    props: true,
    component: () => import('../views/questionset/QuestionSetDetail.vue')
  }, {
    path: '/interview/step1',
    name: 'InterviewStep1',
    component: () => import('../views/interview/InterviewStep1.vue')
  }, {
    path: '/interview/step2',
    name: 'InterviewStep2',
    component: () => import('../views/interview/InterviewStep2.vue')
  }, {
    path: '/finishedinterview',
    name: 'FinishedInterviewList',
    component: () => import('../views/finishedinterview/FinishedInterviewList.vue')
  }, {
    path: '/finishedinterview/detail',
    name: 'FinishedInterviewDetail',
    props: true,
    component: () => import('../views/finishedinterview/FinishedInterviewDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

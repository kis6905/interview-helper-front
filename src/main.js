import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import api from './assets/js/api'
import common from './mixins/common'
import ListCardType from '@/components/ListCardType'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false
Vue.prototype.API = api

Vue.mixin(common)

Vue.component('ListCardType', ListCardType)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

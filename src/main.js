import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './assets/js/api'
import common from './mixins/common'
import ListCardType from '@/components/ListCardType'
import ListCardItemEmpty from '@/components/ListCardItemEmpty'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import vuetify from './plugins/vuetify'

Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false
Vue.prototype.API = api

Vue.mixin(common)

Vue.component('ListCardType', ListCardType)
Vue.component('ListCardItemEmpty', ListCardItemEmpty)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

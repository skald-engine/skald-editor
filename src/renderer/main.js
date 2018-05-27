import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

import axios from 'axios'

import App from '@/App'
import router from '@/router'
import store from '@/store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

import '@/../../node_modules/@vuikit/theme/dist/vuikit.min.css'
Vue.use(Vuikit)
Vue.use(VuikitIcons)

import '@/style/index.scss'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

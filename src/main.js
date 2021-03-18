import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
require('./assets/sass/common.scss')

Vue.config.productionTip = false

const globalMixIn = {
  props: {
    username: String
  }
}

Vue.mixin(globalMixIn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

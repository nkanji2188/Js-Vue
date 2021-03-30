import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import jQuery from 'jquery'
import './assets/sass/settings/_base.scss'

global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
require('./assets/sass/common.scss')

Vue.config.productionTip = false
// Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

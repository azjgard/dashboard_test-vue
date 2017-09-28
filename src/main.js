import Vue from 'vue'
import App from './App'
import router from './router.js'

// Font Awesome
import './assets/lib/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

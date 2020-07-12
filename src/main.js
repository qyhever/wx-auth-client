import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VConsole from 'vconsole'

import './assets/icons'
import './plugins'
import './assets/styles/index.less'
new VConsole()
document.body.addEventListener('ontouchmove', e => {
  e.preventDefault()
}, {
  passive: true
})
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

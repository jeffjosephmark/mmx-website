import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/fonts.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

if (typeof window.fetch === 'undefined') {
  import(/* webpackChunkName: "fetch" */ 'whatwg-fetch')
}

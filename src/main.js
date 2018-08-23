import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/fonts.css'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', 'UA-124481827-1')
}

new Vue({
  render: h => h(App)
}).$mount('#app')

if (typeof window.fetch === 'undefined') {
  import(/* webpackChunkName: "fetch" */ 'whatwg-fetch')
}

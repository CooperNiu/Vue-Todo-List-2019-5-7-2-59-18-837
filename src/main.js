import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
var fly=require("flyio")
Vue.config.productionTip = false
fly.config.baseURL="http://localhost:8080"
Vue.prototype.$fly=fly
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

export {fly}

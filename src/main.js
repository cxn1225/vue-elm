import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./utils/http"
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

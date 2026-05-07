import Vue from 'vue'
import App from './App.vue'
import bunnyUi from '../src/packages'

Vue.use(bunnyUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

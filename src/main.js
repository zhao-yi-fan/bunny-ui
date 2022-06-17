import Vue from 'vue'
import App from './App.vue'

import bnUi from './packages/index'
Vue.use(bnUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

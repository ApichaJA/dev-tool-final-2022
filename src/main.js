import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import VueWait from 'vue-wait'
import store from './store'


Vue.config.productionTip = false

Vue.use(VueWait)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)


new Vue({
  vuetify,
  store,
  router,
  wait: new VueWait(),
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// VeeValidate
import es from "vee-validate/dist/locale/es";
import VeeValidate, { Validator } from "vee-validate";
import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(VeeValidate);
Validator.localize("es", es);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

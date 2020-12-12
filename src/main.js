import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// VeeValidate
import es from 'vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
import { ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VeeValidate);
Validator.localize('es', es);

// VueSidebarMenu
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
Vue.use(VueSidebarMenu);

// Lodash
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
Vue.use(VueLodash, { lodash: lodash });

// Sweet alert 2
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

// IdleVue
import IdleVue from 'idle-vue';
const evenStub = new Vue();
Vue.use(IdleVue, {
  evebtEmmiter: evenStub,
  store,
  idleTime: 240000,
  startAtIdle: false,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'
import App from './App.vue'
// element-ui
import ElementUI from 'element-ui'
//validate
import '@/utils/validate.js'

// router setup
import router from './routes/router'

// plugin setup
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(ElementUI);
// Validation plugin used to validate forms
import * as VeeValidate from 'vee-validate';
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from 'src/components/SidebarPlugin';
Vue.use(SideBar);
Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });
// vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from 'src/components/Cards/Card.vue';
import BaseInput from 'src/components/Inputs/BaseInput.vue';
import BaseButton from 'src/components/BaseButton.vue';
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component(Card.name, Card);
Vue.component(BaseButton.name, BaseButton);
Vue.component(BaseInput.name, BaseInput);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);


// asset imports
import 'src/assets/sass/black-dashboard-pro.scss';
// import 'src/assets/css/nucleo-icons.css';
// import 'src/assets/css/demo.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});


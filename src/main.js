import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false;
Vue.config.performance = true; // TODO: Remove before production

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

new Vue({
  render: h => h(App)
}).$mount('#app');

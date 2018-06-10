import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.performance = true; // TODO: Remove before production

new Vue({
  render: h => h(App)
}).$mount('#app');

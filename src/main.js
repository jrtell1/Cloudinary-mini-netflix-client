import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import 'cloudinary-video-player/dist/cld-video-player.light.min.css'

require('cloudinary-video-player');
window.cloudinary = require('cloudinary-core');

Vue.config.productionTip = false;

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

new Vue({
  render: h => h(App)
}).$mount('#app');

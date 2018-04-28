import Vue from 'vue';
import App from './App.vue';

import BabyeyeUI from '../packages'

Vue.use(BabyeyeUI)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

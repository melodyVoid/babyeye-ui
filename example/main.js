import Vue from 'vue';
import App from './App.vue';

import * as BabyeyeUI from '../packages'
// import { Button } from '../packages'

Vue.use(BabyeyeUI)
// Vue.use(Button)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

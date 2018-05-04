import Vue from 'vue';
import App from './App.vue';

import * as BabyeyeUI from '../packages'
// import { Button } from '../packages'

const { MessageBox } = BabyeyeUI

MessageBox.alert({
  message: '请遮盖右眼，进行左眼检查',
  icon: 'fourlamp',
  btnItalic: false,
  size: 'large'
}).then(() => console.log(2))

setTimeout(() => {
  MessageBox.close()
}, 3000)
Vue.use(BabyeyeUI)
// Vue.use(Button)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

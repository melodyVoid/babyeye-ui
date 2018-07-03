import Vue from 'vue';
import App from './App.vue';

// import * as BabyeyeUI from '../packages'
// import { Button } from '../packages'

// const { MessageBox } = BabyeyeUI

// const arr = [1, 2, 3, 4]
// const str = `${arr.map(item => `<div>${item}</div>`).join('')}`
// const str1 = arr.map(item => `<div>${item}</div>`).join('')
// MessageBox.alert({
//   message: '请遮盖右眼，进行左眼检查',
//   icon: 'fourlamp',
//   btnItalic: false,
//   size: 'large',
//   template: str1
//   sensitivity: {
//     OD: {
//       '1.5': '1.5',
//       '3': '3',
//       '6': '6',
//       '12': '12',
//       '18': '18'
//     },
//     OS: {
//       '1.5': '1.5',
//       '3': '3',
//       '6': '6',
//       '12': '12',
//       '18': '18'
//     }
//   },
//   vergence: {
//     BI: ['模糊点BI', '破裂点BI', '恢复点BI'],
//     BO: ['模糊点BO', '破裂点BO', '恢复点BO']
//   }
// }).then(() => console.log(2))

// setTimeout(() => {
//   MessageBox.close()
// }, 3000)
// Vue.use(BabyeyeUI)
// Vue.use(Button)

// Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

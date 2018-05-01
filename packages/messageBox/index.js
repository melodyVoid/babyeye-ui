import Vue from 'vue'
import MessageBox from './src/main.vue'

MessageBox.install = Vue => {
  Vue.component(MessageBox.name, MessageBox)
}

MessageBox.alert = (options = { title: '', icon: '', message: ''}) => {
  if (typeof options === 'string' || typeof options === 'number') {
    options = {
      title: '',
      icon: '',
      message: options,
      btnItalic: false
    }
  }

  const alert = Vue.extend(MessageBox)

  const component = new alert({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}
export default MessageBox

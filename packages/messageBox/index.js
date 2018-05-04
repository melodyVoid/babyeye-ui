import Vue from 'vue'
import MessageBox from './src/main.vue'

MessageBox.install = Vue => {
  Vue.component(MessageBox.name, MessageBox)
}
const alert = Vue.extend(MessageBox)
  
const component = new alert({
  data: null,
  mounted() {
    this.$on('click', () => {
      resolve()
    })
  }
}).$mount()

MessageBox.alert = (options = { title: '', icon: '', message: '', size: ''}) => {
  return new Promise(resolve => {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        title: '',
        icon: '',
        message: options,
        btnItalic: false,
        size: ''
      }
    }
    Object.assign(component.$data, options)
    document.querySelector('body').appendChild(component.$el)
  })
}

MessageBox.close = () => {
  component.$data.isShow = false
}
export default MessageBox

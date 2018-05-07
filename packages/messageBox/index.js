import Vue from 'vue'
import MessageBox from './src/main.vue'

MessageBox.install = Vue => {
  Vue.component(MessageBox.name, MessageBox)
}

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
    const alert = Vue.extend(MessageBox)
  
    const component = new alert({
      data: options
    }).$mount()
    // Object.assign(component.$data, options)
    component.$on('click', resolve)
    component.$el.style.height = document.body.offsetHeight + 'px'
    document.querySelector('body').appendChild(component.$el)
  })
}

MessageBox.close = () => {
  // component.$data.isShow = false
  const oMsg = document.querySelector('.be-msg-box-wrapper')
  oMsg && (oMsg.style.display = 'none')
}
export default MessageBox

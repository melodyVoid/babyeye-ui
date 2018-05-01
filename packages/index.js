import Button from './button'
import MessageBox from './messageBox'

const components = [
  Button,
  MessageBox
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$alert = MessageBox.alert
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
  MessageBox
}
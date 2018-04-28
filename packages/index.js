import Button from './button'

const components = [
  Button
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button
}
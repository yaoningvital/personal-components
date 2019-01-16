// 入口文件。 该文件的作用是：使这个组件作为组件库导入时能自动在Vue中注册我们的Component

import Vue from 'vue'
import Count from './Count.vue'

const Components = {
  Count
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components

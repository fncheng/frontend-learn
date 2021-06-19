import { extend, ValidationProvider } from 'vee-validate'
import Vue from 'vue'

extend('secret', {
  validate: (value) => value === 'example',
  message: 'This is not the magic word',
})

// 注册全局组件
Vue.component('ValidationProvider', ValidationProvider)

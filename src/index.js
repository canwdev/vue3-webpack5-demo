import App from './App.vue'
import { createApp } from 'vue'

export const init = (options = {}) => {
  console.log('myLib init')
  const {
    renderId = 'my_render'
  } = options

  const el = document.createElement('div')
  el.id = renderId

  document.body.append(el)
  createApp(App).mount('#' + renderId)
}
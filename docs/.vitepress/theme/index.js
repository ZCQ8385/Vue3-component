import DefaultTheme from 'vitepress/theme'

import ZIcon from '@zi-shui/components/icon'
import '@zi-shui/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ZIcon', ZIcon) //在vitepress中注册全局组件
  }
}

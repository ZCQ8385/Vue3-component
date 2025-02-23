import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@zi-shui/components/icon'
import '@zi-shui/theme-chalk/src/index.scss'
import Tree from '@zi-shui/components/tree'

const plugins = [Icon, Tree]

const app = createApp(App)
// 注册插件
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')

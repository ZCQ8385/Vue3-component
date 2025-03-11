import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@zi-shui/components/icon'
import Tree from '@zi-shui/components/tree'
import '@zi-shui/theme-chalk/src/index.scss'
import Checkbox from '@zi-shui/components/checkbox'
import Button from '@zi-shui/components/button'
import input from '@zi-shui/components/input'
import FormItem from '@zi-shui/components/form'
import { Form } from '@zi-shui/components/form'
import ZUpload from '@zi-shui/components/upload'

const plugins = [Icon, Tree, Checkbox, Button, input, FormItem, Form, ZUpload]

const app = createApp(App)
// 注册插件
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')

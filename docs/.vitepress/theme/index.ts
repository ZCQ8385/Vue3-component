import DefaultTheme from 'vitepress/theme'
import ZIcon from '@zi-shui/components/icon'
import '@zi-shui/theme-chalk/src/index.scss'
import type { Theme } from 'vitepress'
import DemoPreview, { useComponents } from '@vitepress-code-preview/container'
import '@vitepress-code-preview/container/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // 注册全局组件
    ctx.app.component('ZIcon', ZIcon)
    // 使用 DemoPreview 组件
    useComponents(ctx.app, DemoPreview)
  }
} satisfies Theme

// import { defineConfig } from 'vite'
// import DefineOptions from 'unplugin-vue-define-options/vite'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import { viteDemoPreviewPlugin } from '@vitepress-code-preview/plugin'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [DefineOptions(), viteDemoPreviewPlugin(), vueJsx()]
// })

import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 动态导入 viteDemoPreviewPlugin 插件
export default defineConfig(async () => {
  const { viteDemoPreviewPlugin } = await import(
    '@vitepress-code-preview/plugin'
  )
  return {
    plugins: [DefineOptions(), viteDemoPreviewPlugin(), vueJsx()]
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const COMP_NAMES = [
  'icon',
  'tree',
  'checkbox',
  'button',
  'input',
  'upload',
  'form'
] as const

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'ToyElement',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        //分包处理
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // return id.toString().split("node_modules/")[1].split("/")[0];
            return 'vendor'
          }
          for (const item of COMP_NAMES) {
            if (id.includes(`/packages/components/${item}`)) {
              return item
            }
            if (id.includes('/packages/hooks')) {
              return 'hooks'
            }
            if (id.includes('/packages/utils')) {
              return 'utils'
            }
          }
        }
      }
    }
  }
})

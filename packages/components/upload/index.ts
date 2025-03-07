import _Upload from './src/upload.vue'
import { withInstall } from '../../utils/with-install'

const Upload = withInstall(_Upload) // 为组件添加 install 方法

export default Upload

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZUpload: typeof Upload
  }
}

// export * from './src/upload'

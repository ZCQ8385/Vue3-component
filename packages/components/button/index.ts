import _Button from './src/button.vue'
import { withInstall } from '../../utils/with-install'

const Button = withInstall(_Button) // 为组件添加 install 方法

export default Button

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZButton: typeof Button
  }
}

export * from './src/button'

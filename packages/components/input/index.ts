import _Input from './src/input.vue'
import { withInstall } from '../../utils/with-install'

const Input = withInstall(_Input) // 为组件添加 install 方法

export default Input

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZInput: typeof Input
  }
}

export * from './src/input'

import _Checkbox from './src/checkbox.vue'
import { withInstall } from '../../utils/with-install'

const Checkbox = withInstall(_Checkbox) // 为组件添加 install 方法

export default Checkbox

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZCheckbox: typeof Checkbox
  }
}

export * from './src/checkbox'

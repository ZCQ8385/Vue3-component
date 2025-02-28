import _Virtual from './src/virtual'
import { withInstall } from '../../utils/with-install'

const Virtual = withInstall(_Virtual) // 为组件添加 install 方法

export default Virtual

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZVirtualList: typeof _Virtual
  }
}

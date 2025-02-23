import _Tree from './src/tree.vue'
import { withInstall } from '../../utils/with-install'

const Tree = withInstall(_Tree) // 为组件添加 install 方法

export default Tree

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZTree: typeof Tree
  }
}

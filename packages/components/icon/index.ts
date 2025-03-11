// 整合组件，最终导出组件
import _Icon from './src/icon.vue';
import { withInstall } from '../../utils/with-install';


const Icon = withInstall(_Icon); // 为组件添加 install 方法

// 导出组件,可以使用 import Icon from 'icon' 导入组件， 也可以使用 app.use(Icon) 注册组件
export default Icon;

export * from './src/icon';

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {// 接口可以自动合并
    ZIcon: typeof Icon;
  }
}
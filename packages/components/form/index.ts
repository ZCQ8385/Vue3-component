import _FormItem from './src/form-item.vue'
import _Form from './src/form.vue'
import { withInstall } from '../../utils/with-install'

const FormItem = withInstall(_FormItem) // 为组件添加 install 方法
const Form = withInstall(_Form)

export default FormItem
export { Form }

export type FormInstance = InstanceType<typeof Form>

// 为 vue 添加全局组件声明
declare module 'vue' {
  export interface GlobalComponents {
    // 接口可以自动合并
    ZFormItem: typeof FormItem
    ZForm: typeof Form
  }
}

export * from './src/form-item'

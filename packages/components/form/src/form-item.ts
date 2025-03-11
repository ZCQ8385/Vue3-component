//prop 校验输入框的属性
//label 输入框的标题
//rules 输入框的校验规则
//show-message 是否显示校验信息

//change / blur事件

import type { RuleItem } from 'async-validator'
import { ExtractPropTypes, PropType, InjectionKey } from 'vue'

export type Arrayable<T> = T | T[]

export interface FormItemRules extends RuleItem {
  trigger?: Arrayable<string>
}

export const formItemValidateState = ['success', 'error', ''] as const
export type FormItemValidateState = (typeof formItemValidateState)[number]

export const FormItemProps = {
  prop: String,
  label: String,
  rules: [Array, Object] as PropType<Arrayable<FormItemRules>>,
  showMessage: {
    type: Boolean,
    default: true
  }
} as const

export interface FormItemContext extends FormItem {
  validate: (
    trigger: string,
    callbak?: (isValid: boolean) => any
  ) => Promise<any>
}

export type FormItem = Partial<ExtractPropTypes<typeof FormItemProps>>
//FormItemContextKey 用于在子组件中获取父组件的数据
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('')

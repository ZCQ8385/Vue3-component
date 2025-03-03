//type属性 默认为text
//modelValue / v-model = modelValue + @uqdate:modelValue
//placeholder默认展示的内容
//disabled是否禁用
// clearable是否显示清空按钮
// readonly是否只读
//label标签内容
//show-password是否显示密码切换按钮

import { ExtractPropTypes, PropType } from 'vue'
import { isString } from '@vue/shared'

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  placeholder: {
    type: String
  },
  clearable: {
    type: Boolean
  },
  showPassword: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  label: { type: String }
} as const

export const inputEmits = {
  'update:modelValue': (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits

//储存组件的属性和相关事件

import { ExtractPropTypes, PropType } from 'vue'

//size组件大小
//type组件类型
//disabled是否禁用
//loading是否加载中
//round是否为圆角
//native-type原生按钮类型
//icon-placement图标位置

//插槽 icon

export type Size = 'small' | 'medium' | 'large'
export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
export type NativeType = 'button' | 'submit' | 'reset'
export type Placement = 'left' | 'right'

export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    //自定义校验规则
    validator: (val: string) => {
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default',
        ''
      ].includes(val)
    },
    default: ''
  },
  disabled: Boolean,
  loading: Boolean,
  round: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left'
  }
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

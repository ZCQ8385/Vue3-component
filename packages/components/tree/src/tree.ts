//准备组件相关属性 和 ts 类型
import { ExtractPropTypes, PropType } from 'vue'

type key = string | number

export interface TreeNode extends Required<TreeOption> {
  level: number
  rewNode: TreeOption
  children: TreeNode[]
}

export interface TreeOption {
  label?: key
  key?: key
  children?: TreeOption[]
  [key: string]: any
}

export const TreeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  }
} as const

// 使用 ExtractPropTypes 提取 iconProps 的类型
export type IconProps = Partial<ExtractPropTypes<typeof TreeProps>>

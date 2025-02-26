//准备组件相关属性 和 ts 类型
import { ExtractPropTypes, PropType } from 'vue'

export type key = string | number

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
  defaultExpandedKeys: {
    type: Array as PropType<key[]>,
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
  },
  onLoad: Function as PropType<(node: TreeOption) => Promise<TreeOption[]>>,
  selectedKeys: {
    type: Array as PropType<key[]>
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  }
} as const

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  selectedKeys: {
    type: Array as PropType<key[]>,
    default: () => []
  }
}

export const treeNodeEmitts = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node
}

export const treeEmitts = {
  //内部发射的事件用来同步响应数据
  'update:selectedKeys': (keys: key[]) => keys
}

// 使用 ExtractPropTypes 提取 iconProps 的类型
export type IconProps = Partial<ExtractPropTypes<typeof TreeProps>>

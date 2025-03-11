//准备组件相关属性 和 ts 类型
import { ExtractPropTypes, PropType } from "vue";

// 定义 iconProps 对象，包含组件的属性
export const iconProps = {
  color: String, // color 属性，类型为 String
  size: [String, Number] as PropType<string | number>, // size 属性，类型可以是 String 或 Number
} as const;

// 使用 ExtractPropTypes 提取 iconProps 的类型
export type IconProps = ExtractPropTypes<typeof iconProps>;
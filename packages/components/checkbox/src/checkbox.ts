import { ExtractPropTypes, PropType } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>
  },
  indeterminate: Boolean,
  disabled: Boolean,
  label: {
    type: String as PropType<string>
  }
} as const

export const checkboxEmits = {
  'update:modelValue': (value: boolean | string | number) => true,
  change: (value: boolean) => true
}

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>
export type CheckboxEmits = typeof checkboxEmits

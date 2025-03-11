<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <div v-if="slots.prepend" :class="bem.be('group', 'prepend')">
        <slot name="prepend"></slot>
      </div>

      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prefixIcon" :class="bem.e('prefix')">
          <slot name="prefixIcon"></slot>
        </span>

        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          :class="bem.e('inner')"
          ref="input"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
        />

        <span v-if="slots.suffixIcon" :class="bem.e('suffix')">
          <slot name="suffixIcon"></slot>

          <z-icon
            v-if="showPasswordVisible"
            @click="handlePasswordVisible"
            style="cursor: pointer; line-height: 13px; font-weight: bold"
            >e</z-icon
          >

          <z-icon
            v-if="showClear"
            @click="clear"
            style="cursor: pointer; line-height: 13px; font-weight: bold"
            >x</z-icon
          >
        </span>
      </div>

      <div v-if="slots.append" :class="bem.be('group', 'append')">
        <slot name="prepend"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from '@zi-shui/utils/create'
import {
  computed,
  inject,
  nextTick,
  onMounted,
  ref,
  useAttrs,
  useSlots,
  watch
} from 'vue'
import { inputProps, inputEmits } from './input'
import { FormItemContextKey } from '@zi-shui/components/form/src/form-item'

//跨组件通信
const formItemContext = inject(FormItemContextKey)

defineOptions({
  name: 'z-input',
  inheritAttrs: false
})

const bem = createNamespace('input')
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const slots = useSlots()
const attrs = useAttrs()

const input = ref<HTMLInputElement | null>(null)
const passwordVisible = ref(false)

watch(
  () => props.modelValue,
  () => {
    formItemContext?.validate('change').catch(() => {})
    setNativeInputValue()
  }
)

const focus = async () => {
  await nextTick() // 等待组件渲染完成
  input.value?.focus() // 获取焦点
}

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const setNativeInputValue = () => {
  const inputEle = input.value
  if (inputEle) {
    inputEle.value = String(props.modelValue)
  }
}

const showPasswordVisible = computed(
  () =>
    props.modelValue && props.showPassword && !props.disabled && !props.readonly
)

const showClear = computed(() => {
  return (
    props.clearable && props.modelValue && !props.disabled && !props.readonly
  )
})

const clear = () => {
  emit('update:modelValue', '')
  emit('clear')
  focus()
}

onMounted(() => {
  setNativeInputValue()
})

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}

function handleChange(event: Event) {
  emit('change', (event.target as HTMLInputElement).value)
}

function handleFocus(event: FocusEvent) {
  emit('focus', event)
}

function handleBlur(event: FocusEvent) {
  formItemContext?.validate('blur').catch(() => {})
  emit('blur', event)
}
</script>

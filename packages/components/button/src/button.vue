<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
  >
    <z-icon>
      <template v-if="slots.icon">
        <Component :is="slots.icon"></Component>
      </template>
    </z-icon>

    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import { createNamespace } from '@zi-shui/utils/create'
import { buttonProps, buttonEmits } from './button'
import ZIcon from '@zi-shui/components/icon'

const bem = createNamespace('button') //z-button
defineOptions({
  name: 'z-button',
  inheritAttrs: false
})

// console.log('点击')

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const emitClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

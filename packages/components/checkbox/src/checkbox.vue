<template>
  <label :class="bem.b()">
    <span :class="bem.e('input')">
      <input
        type="checkbox"
        v-model="model"
        ref="inputRef"
        :disabled="disabled"
        :value="label"
        @change="handleChange"
      />
    </span>

    <span v-if="$slots.default || label" :class="bem.e('label')">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { createNamespace } from '@zi-shui/utils/create'
import { checkboxProps, checkboxEmits } from './checkbox'
import { computed, onMounted, ref, watch } from 'vue'

const bem = createNamespace('checkbox')
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

defineOptions({
  name: 'z-checkbox'
})

const model = computed({
  get() {
    return props.modelValue
  },
  set(val: boolean) {
    emit('update:modelValue', val)
  }
})

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.checked ? true : false
  emit('change', value)
}

const inputRef = ref<HTMLInputElement | null>(null)
function inderterminate(val: boolean) {
  inputRef.value!.indeterminate = val
}

watch(() => props.indeterminate, inderterminate)

onMounted(() => {
  inderterminate(props.indeterminate)
})
</script>

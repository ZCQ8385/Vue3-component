//上传拖拽功能
<template>
  <div
    :class="[bem.b()]"
    @dragover.prevent="onDragover"
    @dragleave.prevent="$event => (isOver = false)"
    @drop.prevent="onDrop"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createNamespace } from '@zi-shui/utils/create'

const bem = createNamespace('uploadDragger')

const isOver = ref(false)
const emit = defineEmits({})

const onDrop = (e: DragEvent) => {
  e.stopPropagation()
  emit('file', Array.from(e.dataTransfer!.files))
  console.log(e.dataTransfer!.files)
}
const onDragover = (e: DragEvent) => {
  // e.preventDefault()
  isOver.value = true
}
</script>

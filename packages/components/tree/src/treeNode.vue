<template>
  <div :class="[bem.b(), bem.is('selected', isSelected)]">
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          bem.is('Leaf', node?.isLeaf),
          { expanded: expanded && !node?.isLeaf }
        ]"
        @click="handleExpand()"
      >
        <z-icon size="25" color="pink">
          <Switcher></Switcher>
        </z-icon>
      </span>

      <span @click="handleSelected" :class="bem.e('label')">{{
        node?.label
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create'
import { treeNodeProps, treeNodeEmitts } from './tree'
import Switcher from './icon/Switcher'
import ZIcon from '@zi-shui/components/icon'
import { computed } from 'vue'

const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const { node } = props
const emit = defineEmits(treeNodeEmitts)

function handleExpand() {
  if (props.node) {
    emit('toggle', props.node)
  }
}

const isSelected = computed(() => {
  return (
    props.node?.key !== undefined && props.selectedKeys.includes(props.node.key)
  )
})

function handleSelected() {
  if (props.node) {
    emit('select', props.node)
  }
}
</script>

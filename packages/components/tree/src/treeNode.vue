<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', node.disabled)
    ]"
  >
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

      <span @click="handleSelected()" :class="bem.e('label')">
        <z-tree-node-content :node="node"></z-tree-node-content>
        {{ node?.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create'
import { treeNodeProps, treeNodeEmitts } from './tree'
import Switcher from './icon/Switcher'
import ZIcon from '@zi-shui/components/icon'
import ZTreeNodeContent from './icon/tree-node-content'
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
    if (props.node.disabled) return
    emit('select', props.node)
  }
}
</script>

<template>
  <div :class="bem.b()">
    <div
      :class="bem.e('content')"
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

      <span>{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create'
import { treeNodeProps, treeNodeEmitts } from './tree'
import Switcher from './icon/Switcher'
import ZIcon from '@zi-shui/components/icon'

const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const { node } = props
const emit = defineEmits(treeNodeEmitts)

function handleExpand() {
  if (props.node) {
    emit('toggle', props.node)
  }
}
</script>

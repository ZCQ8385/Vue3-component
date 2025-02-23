<template>tree</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { TreeProps, TreeNode, TreeOption } from './tree'

defineOptions({
  name: 'z-tree'
})

// props要对用户得数据进行格式化，格式化一个固定的结果
//label, key ,children
const props = defineProps(TreeProps)

//将props.data和石化后放到tree中
const tree = ref<TreeNode[]>([])

function createTree(data: TreeOption[]): any {
  console.log(data)
}

watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
  },
  { immediate: true }
)
</script>

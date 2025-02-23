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

function createOptions(key: string, label: string, children: string) {
  return {
    getkey(node: TreeOption) {
      return node[key] as string
    },
    getLabel(node: TreeOption) {
      return node[label] as string
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[]
    }
  }
}

const treeOptions = createOptions(
  props.keyField as string,
  props.labelField as string,
  props.childrenField as string
)

function createTree(data: TreeOption[]) {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map(node => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getkey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rewNode: node,
        level: parent ? parent.level + 1 : 0,
        //判断节点是否自带isLeaf属性，如果没有孩子节点则为叶子节点
        isLeaf: node.isLeaf ?? children.length === 0
      }
      if (children.length) {
        //有孩子递归， 将其格式化成treeNode类型
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data)
  return result
}

watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
    console.log(tree.value)
  },
  { immediate: true }
)
</script>

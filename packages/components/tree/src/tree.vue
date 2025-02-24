<template>
  <div :class="bem.b()">
    <z-tree-node
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
      :expanded="isExpanded(node)"
    ></z-tree-node>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { TreeProps, TreeNode, TreeOption } from './tree'
import { createNamespace } from '@zi-shui/utils/create'
import ZTreeNode from './treeNode.vue'
// import TreeNode from './treeNode.vue'
const bem = createNamespace('tree')

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

//希望将一棵树拍平，点击还能实现展开操作
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))

const flattenTree = computed(() => {
  //要展开的keys有哪些
  const expandedKeys = expandedKeysSet.value

  //最终拍平的节点
  //拍平后的结果
  const flattenNodes: TreeNode[] = []
  //被格式化后的节点
  const nodes = tree.value || []
  //将节点放入栈中stack
  const stack: TreeNode[] = []

  for (let i = nodes.length - 1; i >= 0; i--) {
    stack.push(nodes[i])
  }

  //深度遍历
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push(node.children[i])
        }
      }
    }
  }
  return flattenNodes
})
console.log(flattenTree.value)

function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key)
}
</script>

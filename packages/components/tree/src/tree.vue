<template>
  <div :class="bem.b()">
    <z-virtual-list :items="flattenTree" :remain="8" :size="35">
      <template #default="{ node }">
        <z-tree-node
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          @toggle="toggleExpand(node)"
          :selectedKeys="selectedKeys"
          @select="handleSelect(node)"
          :show-checkbox="showCheckbox"
          :checked="isChecked(node)"
          :disabled="isDisabled(node)"
          :indeterminate="isIndeterminate(node)"
          @check="toggleCheck"
        ></z-tree-node>
      </template>
    </z-virtual-list>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, useSlots, provide, onMounted } from 'vue'
import {
  TreeProps,
  TreeNode,
  TreeOption,
  treeEmitts,
  treeTnjectKey
} from './tree'
import { createNamespace } from '@zi-shui/utils/create'
import ZTreeNode from './treeNode.vue'
import ZVirtualList from '@zi-shui/components/virtual-list'
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
//将数据格式化成树形结构
function createTree(data: TreeOption[], parent: TreeNode | null = null) {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map(node => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getkey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rewNode: node,
        level: parent ? parent.level + 1 : 0,
        disabled: !!node.disabled, //判断节点是否禁用
        //判断节点是否自带isLeaf属性，如果没有孩子节点则为叶子节点
        isLeaf: node.isLeaf ?? children.length === 0,
        parentKey: parent?.key
      }
      if (children.length > 0) {
        //有孩子递归， 将其格式化成treeNode类型
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }

  const result: TreeNode[] = traversal(data, parent)
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
  //将节点放入栈中stack，用于遍历树的栈
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
// console.log(flattenTree.value)

function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key)
}

//折叠功能
function collpase(node: TreeNode) {
  expandedKeysSet.value.delete(node.key)
}

type Key = string | number
const loadingKeysRef = ref(new Set<Key>())

function triggerLoading(node: TreeNode) {
  if (!node.children.length && !node.isLeaf) {
    //没有加载过，就加载节点
    const loadingKeys = loadingKeysRef.value
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key)
      const onLoad = props.onLoad
      if (onLoad) {
        // console.log(node.rawNode)
        onLoad(node.rewNode).then(children => {
          //修改原来的节点
          node.rewNode.children = children
          //更新自定义的node
          node.children = createTree(children, node)
          // console.log(node.children)
          loadingKeys.delete(node.key)
        })
      }
    }
  }
}

//展开功能
function expand(node: TreeNode) {
  expandedKeysSet.value.add(node.key)
  triggerLoading(node)
}
//切换展开和折叠
function toggleExpand(node: TreeNode) {
  const expandKeys = expandedKeysSet.value
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collpase(node)
  } else {
    expand(node)
  }
}

//实现选中节点
const emit = defineEmits(treeEmitts)

const selectedKeys = ref<Key[]>([])

watch(
  () => props.selectedKeys,
  value => {
    if (value) {
      selectedKeys.value = value
      // console.log(selectedKeys, value)
    }
  },
  {
    immediate: true
  }
)

function handleSelect(node: TreeNode) {
  let keys = Array.from(selectedKeys.value)
  if (!props.selectable) return //如果不可选中，直接返回

  if (props.multiple) {
    const index = keys.findIndex(key => key === node.key)
    if (index > -1) {
      keys.splice(index, 1)
    } else {
      keys.push(node.key)
    }
  } else {
    if (keys.includes(node.key)) {
      keys = []
    } else {
      keys = [node.key]
    }
  }
  emit('update:selectedKeys', keys)
}

provide(treeTnjectKey, {
  slots: useSlots()
})

const checkedKeysRefs = ref(new Set(props.defaultCheckedKeys))

function isChecked(node: TreeNode) {
  return checkedKeysRefs.value.has(node.key)
}

function isDisabled(node: TreeNode) {
  return !!node.disabled
}

const inderterminateRef = ref(new Set(props.defaultCheckedKeys))

function isIndeterminate(node: TreeNode) {
  return inderterminateRef.value.has(node.key)
}

//切换选中状态
function toggle(node: TreeNode, checked: boolean) {
  const checkedKeys = checkedKeysRefs.value

  if (checked) {
    inderterminateRef.value.delete(node.key)
  }

  //如果是禁用的节点，直接返回
  checkedKeys[checked ? 'add' : 'delete'](node.key)
  const children = node.children
  if (children) {
    children.forEach(childNode => {
      if (!childNode.disabled) {
        toggleCheck(childNode, checked)
      }
    })
  }
}

function findNode(key: Key) {
  return flattenTree.value.find(node => node.key === key)
}

function updateCheckedKeys(node: TreeNode) {
  if (node.parentKey) {
    const parentNode = findNode(node.parentKey)

    if (parentNode) {
      let allChecked = true //默认儿子全选
      let hasChecked = false //儿子有没有被选中

      let nodes = parentNode.children
      for (const node of nodes) {
        if (checkedKeysRefs.value.has(node.key)) {
          hasChecked = true //儿子有被选中
        } else if (inderterminateRef.value.has(node.key)) {
          allChecked = false
          hasChecked = true
        } else {
          allChecked = false
        }
      }
      if (allChecked) {
        checkedKeysRefs.value.add(parentNode.key)
        inderterminateRef.value.delete(parentNode.key)
      } else if (hasChecked) {
        checkedKeysRefs.value.delete(parentNode.key)
        inderterminateRef.value.add(parentNode.key)
      }
      updateCheckedKeys(parentNode)
    }
  }
}

function toggleCheck(node: TreeNode, checked: boolean) {
  toggle(node, checked)

  updateCheckedKeys(node)
}

onMounted(() => {
  checkedKeysRefs.value.forEach(key => {
    toggleCheck(flattenTree.value[key as any], true)
  })
})
</script>

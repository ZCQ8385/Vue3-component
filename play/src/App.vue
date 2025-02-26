<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
import { ref } from 'vue'
import type { TreeOption } from '@zi-shui/components/tree'

// function createData(level = 4, parentKey = ''): any {
//   if (!level) return []
//   const arr = new Array(6 - level).fill(0)
//   return arr.map((_, idx: number) => {
//     const key = parentKey + level + idx
//     return {
//       label: createLabel(level),
//       key,
//       children: createData(level - 1, key)
//     }
//   })
// }

// function createLabel(level: number): string {
//   if (level === 4) return '遵生一'
//   if (level === 3) return '一生二'
//   if (level === 2) return '二生三'
//   if (level === 1) return '三生万物'
//   return ''
// }

// 创建数据的函数
function createData() {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false //表示点击的时候动态加载子节点
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false
    }
  ]
}

// 生成下一个标签的函数
function nextLabel(currentLabel?: string | undefined | number): string {
  if (!currentLabel) return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three')
    return 'Out of Three, the created universe'
  if (currentLabel === 'Out of Three, the created universe')
    return 'Out of Tao, One is born'
  return ''
}

const data = ref(createData())
console.log(data)

const handleLoad = (node: TreeOption) => {
  //内部需要将展开的节点传递给我
  return new Promise<TreeOption[]>(resolve => {
    setTimeout(() => {
      resolve([
        //这里是动态加载的数据，会作为node的children
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ])
    }, 1000)
  })
}
</script>

<template>
  <z-icon :color="'red'" :size="20">
    <AddCircle></AddCircle>
  </z-icon>
  <z-icon :color="'red'" :size="20">
    <AddCircle></AddCircle>
  </z-icon>
  <z-tree :data="data" :on-load="handleLoad"></z-tree>
  <!-- label-field="label"
    key-field="key"
    children-field="children" -->
</template>

<style scoped></style>

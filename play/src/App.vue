<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
import { reactive, ref } from 'vue'
// import type { Key } from '@zi-shui/components/tree'
import type { TreeOption } from '@zi-shui/components/tree'

type Key = string | number

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(20 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level: number): string {
  if (level === 4) return '遵生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

// 创建数据的函数
// function createData() {
//   return [
//     {
//       label: nextLabel(),
//       key: 1,
//       isLeaf: false //表示点击的时候动态加载子节点
//     },
//     {
//       label: nextLabel(),
//       key: 2,
//       isLeaf: false
//     }
//   ]
// }

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

// const data = ref<TreeOption[]>([
//   {
//     key: '0',
//     label: '0',
//     children: [
//       {
//         key: '0-0',
//         label: '0-0',
//         disabled: true,
//         children: [
//           {
//             key: '0-1-0',
//             label: '0-1-0'
//           },
//           {
//             key: '0-1-1',
//             label: '0-1-1'
//           }
//         ]
//       },
//       {
//         key: '0-1',
//         label: '0-1',
//         children: []
//       }
//     ]
//   }
// ])

const data = ref(createData())

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
const value = ref<Key[]>()
// const check = ref<boolean | string | number>(true)

// const handleChange = (val: boolean) => {
//   console.log(val)
// }

const handleClick = (e: MouseEvent) => {
  console.log('按钮被点击了')
}

const username = ref('hello')

function handleFocus(event: FocusEvent) {
  console.log((event.target as HTMLInputElement).value)
}

function handleBlur(event: FocusEvent) {
  console.log((event.target as HTMLInputElement).value)
}
</script>

<template>
  <z-icon :color="'red'" :size="20">
    <AddCircle></AddCircle>
  </z-icon>
  <z-icon :color="'red'" :size="20">
    <AddCircle></AddCircle>
  </z-icon>

  <z-tree
    :data="data"
    :on-load="handleLoad"
    v-model:selected-keys="value"
    selectable
    multiple
    show-checkbox
    :default-checked-keys="['40', '41']"
  >
    <template #default="{ node }">{{ node.key }} - {{ node.label }}</template>
  </z-tree>
  <!-- selectable意味着可以选择节点 multiple意味着可以多选 selected-keys是选中的节点 -->
  <!-- <z-checkbox
    v-model="check"
    :disabled="false"
    :indeterminate="true"
    label="节点"
    @change="handleChange"
  ></z-checkbox> -->
  <z-button size="medium" type="danger" :round="true" @click="handleClick">
    按钮
    <template #icon>
      <z-icon>
        <AddCircle></AddCircle>
      </z-icon>
    </template>
  </z-button>

  <z-input
    v-model="username"
    @blur="handleBlur"
    @focus="handleFocus"
    placeholder="请输入用户名"
    :show-password="true"
    :clearable="true"
  >
    <template #prepend>aaa</template>

    <template #prefixIcon>
      <z-icon>
        <AddCircle></AddCircle>
      </z-icon>
    </template>

    <template #suffixIcon>
      <z-icon> <AddCircle></AddCircle> </z-icon>
    </template>

    <template #append> aaa </template>
  </z-input>
</template>

<style scoped></style>

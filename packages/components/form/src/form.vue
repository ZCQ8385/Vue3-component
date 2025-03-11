<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create'
import { computed, provide, ref, toRef, toRefs } from 'vue'
import { FormContext, FormContextKey, formProps } from './form'
import { FormItemContextKey } from './form-item'
import { FormItemContext } from './form-item'

const bm = createNamespace('form')
defineOptions({
  name: 'z-form',
  inheritAttrs: false
})

const props = defineProps(formProps)

const fields: FormItemContext[] = []

//form的校验逻辑， 在父级中调用所有子级的校验逻辑
const validate = async (callback?: (valid: boolean, fields?: any) => void) => {
  let errors = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (error) {
      errors = {
        ...errors,
        ...(error as any).fields
      }
    }
  }
  //没错误成功
  if (Object.keys(errors).length === 0) return callback?.(true)
  else {
    //有错误失败
    if (callback) {
      callback?.(false, errors)
    } else {
      return Promise.reject(errors)
    }
  }
}

const addField: FormContext['addField'] = context => {
  fields.push(context)
  // console.log(fields)
}

const context = {
  ...props,
  addField
}
provide(FormContextKey, context)

defineExpose({
  validate
})
</script>

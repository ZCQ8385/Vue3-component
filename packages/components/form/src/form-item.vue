<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState === 'success'),
      bem.is('error', validateState === 'error')
    ]"
  >
    <label :class="bem.e('label')"
      ><slot name="label">{{ label }}</slot>
    </label>

    <div :class="bem.e('content')">
      <slot></slot>

      <div :class="bem.e('error')">
        <slot name="error">{{ validateMessage }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create'
import { computed, inject, onMounted, provide, ref, toRef, toRefs } from 'vue'
import {
  FormItemContext,
  FormItemContextKey,
  FormItemProps,
  FormItemValidateState,
  FormItemRules,
  Arrayable
} from './form-item'
import { FormContextKey } from './form'
//表单校验的库AsyncValidator
import AsyncValidator from 'async-validator'

const formContext = inject(FormContextKey)
// console.log(FormContext)

const bem = createNamespace('form-item')

const props = defineProps(FormItemProps)

defineOptions({
  name: 'z-form-item',
  inheritAttrs: false
})

//主要检测逻辑
const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('')

const converArray = (rules: Arrayable<FormItemRules> | undefined) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}

const _rules = computed(() => {
  const myRules: FormItemRules[] = converArray(props.rules) //自己的规则

  const formRules = formContext?.rules //父级的规则

  if (formRules && props.prop) {
    const _temp = formRules[props.prop]

    if (_temp) {
      return myRules.concat(converArray(_temp))
    }
  }
  return myRules
})

const getRuleFiltered = (trigger: string) => {
  const rules = _rules.value
  return rules.filter(rule => {
    //无论什么情况都要校验
    if (!rule.trigger || !trigger) {
      return true
    }
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    }
    return rule.trigger === trigger
  })
}

//校验
const onValidationSuccessed = () => {
  validateState.value = 'success'
  validateMessage.value = ''
}

const onValidationFailed = (error: any) => {
  validateState.value = 'error'
  validateMessage.value = error ? error.errors[0].message : ''
}

const validate: FormItemContext['validate'] = async (trigger, callback?) => {
  //拿到触发时机，校验是否通过可以调用callback或promise.then方法
  const rules = getRuleFiltered(trigger)
  //rules是规则，trigger是触发时机
  //需找到对应的数据源头，在上面找到对应的prop
  //触发事件，找到对应的规则，和数据源在哪里，然后校验
  const modelName = props.prop!

  const validator = new AsyncValidator({
    [modelName]: rules
  })
  const model = formContext?.model!

  return validator
    .validate({
      [modelName]: model[modelName]
    })
    .then(() => {
      onValidationSuccessed()
    })
    .catch(error => {
      onValidationFailed(error)
      return Promise.reject(error)
    })
  // console.log('校验', trigger, rules, formContext?.model, props.prop)
}

const context: FormItemContext = {
  ...props,
  validate
}
// console.log(context.validate('blur'))

provide(FormItemContextKey, context)
onMounted(() => {
  formContext?.addField(context) //将自己的校验逻辑添加到父级的校验逻辑中
})
</script>

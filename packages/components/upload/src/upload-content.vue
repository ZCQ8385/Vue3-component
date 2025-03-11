<template>
  <div @click="handleClick" :class="[bem.b()]">
    <template v-if="drag">
      <UploadDragger @file="uploadFiles">
        <slot></slot>
      </UploadDragger>
    </template>

    <template v-else>
      <slot></slot>
    </template>

    <input
      type="file"
      ref="inputRef"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from '@zi-shui/utils/create'
import { ref } from 'vue'
import { UploadRawFile, getId } from './upload'
import { uploadContentProps } from './upload-content'
import { httpRequest } from './ajax'
import UploadDragger from './upload-dragger.vue'

const bem = createNamespace('upload')

defineOptions({
  name: 'z-upload-content'
})

const props = defineProps(uploadContentProps)

async function upload(rawfile: UploadRawFile) {
  //输入框清空
  inputRef.value!.value = '' //上传之前清空input的值
  let result = await props.beforeUpload(rawfile)

  if (!result) return props.onRemove(rawfile) //如果返回false则不上传

  //添加上传过程 调用ajxa

  //上传文件 ajax 处理
  const { method, FileList, name, action, headers, data } = props
  httpRequest({
    method,
    file: rawfile,
    name,
    action,
    headers,
    data,
    onError: e => {
      props.onError(e, rawfile)
    },
    onSuccess: e => {
      props.onSuccess(e, rawfile)
    },
    onProgress: e => {
      props.onProgress(e, rawfile)
    }
  })
}

function uploadFiles(files: FileList) {
  for (let i = 0; i < files.length; i++) {
    const rawFile = files[i] as UploadRawFile
    rawFile.uid = getId()
    props.onStart(rawFile)
    upload(rawFile)
  }
}

async function handleChange(e: Event) {
  const files = (e.target as HTMLInputElement).files!
  uploadFiles(files)
}

const inputRef = ref<HTMLInputElement>()
const handleClick = () => {
  if (inputRef.value) {
    inputRef.value.value = ''
    inputRef.value.click()
  }
}
</script>

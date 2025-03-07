<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  {{ uploadFiles }}
  <img id="image" ref="image" />
</template>

<script lang="ts" setup>
import { UploadFile, UploadFiles, uploadProps, UploadRawFile } from './upload'
import UploadContent from './upload-content.vue'
import { UploadContentProps } from './upload-content'
import { computed, ref, watch } from 'vue'

defineOptions({
  name: 'z-upload',
  inheritAttrs: false
})

//父组件传递的props
const props = defineProps(uploadProps)

//props中的数据是动态的，改了之后计算属性也能修改
const uploadFiles = ref<UploadFiles>(props.FileList)
const image = ref<HTMLImageElement | null>(null)
const emit = defineEmits()

watch(uploadFiles, newVal => {
  emit('update:fileList', newVal)
})

const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find(file => file.uid === rawFile.uid)
}

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  onStart: rwaFile => {
    //上传逻辑
    console.log('start')
    const uploadFile: UploadFile = {
      uid: rwaFile.uid,
      name: rwaFile.name,
      percentage: 0,
      raw: rwaFile,
      size: rwaFile.size,
      status: 'start'
    }
    //使用 URL.createObjectURL() 来创建文件的 URL，并用该 URL 来显示文件内容，提供预览
    uploadFile.url = URL.createObjectURL(rwaFile)
    uploadFiles.value = [...uploadFiles.value, uploadFile]
    image.value!.src = uploadFile.url

    console.log(uploadFiles)
    props.onChange(uploadFile)
  },
  onProgress: (e, rawFile) => {
    const uploadFile = findFile(rawFile)!
    uploadFile.status = 'uploading'
    uploadFile.percentage = e.percent
    props.onProgress(e, uploadFile, uploadFiles.value)
  },
  onRemove: async rawFile => {
    const uploadFile = findFile(rawFile)
    const r = await props.beforeRemove(uploadFile!, uploadFiles.value)
    if (r == false) {
      const fileList = uploadFiles.value
      fileList.splice(fileList.indexOf(uploadFile!), 1)
      props.onRemove(uploadFile!, uploadFiles.value)
    }
  },
  onError: (err, rawFile) => {
    const uploadFile = findFile(rawFile)!
    uploadFile.status = 'error'
    const fileList = uploadFiles.value
    fileList.splice(fileList.indexOf(uploadFile), 1)
    props.onError(err, uploadFile, fileList)
  },
  onSuccess: (res, rawFile) => {
    const uploadFile = findFile(rawFile)!
    uploadFile.status = 'success'
    const fileList = uploadFiles.value
    props.onSuccess(res, uploadFile, fileList)
  }
}))
</script>

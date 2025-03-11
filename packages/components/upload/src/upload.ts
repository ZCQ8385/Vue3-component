import { PropType, ExtractPropTypes } from 'vue'

//给每个组件进行包装 包装一个全新的类型
export interface UploadFile {
  uid?: number
  name: string
  url?: string
  percentage?: number
  raw?: File
  size?: number
  status: string
}

// export type UploadFiles = UploadFiles[]
export type UploadFiles = UploadFile[]

//定义上传组件的属性
export const baseProps = {
  FileList: {
    type: Array as PropType<UploadFile[]>,
    default: () => [] as const //默认值是一个空数组
  },
  action: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: true
  },
  //input中所需的属性
  name: {
    type: String,
    default: 'file'
  },
  accept: {
    type: String,
    default: ''
  },
  //上传文件调用ajax请求的时候所需要的
  method: {
    type: String,
    default: 'post'
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  },
  drag: {
    type: Boolean
    // default: false
  }
} as const

export type UploadRawFile = File & { uid: number }
export type UploadProgressEvent = ProgressEvent & { percent: number }
const NOOP = () => {}
export const uploadProps = {
  ...baseProps,
  onPreview: {
    //预览的时候，可以用这个回调拿到上次的图片
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  },
  beforeUpload: {
    type: Function as PropType<
      (file: UploadRawFile) => Promise<boolean> | boolean
    >,
    default: NOOP
  },
  onChange: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  },
  beforeRemove: {
    type: Function as PropType<
      (file: UploadFile, UploadFiles: UploadFiles) => Promise<boolean> | boolean
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<
      (file: UploadFile, UploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },

  onProgress: {
    type: Function as PropType<
      (file: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<
      (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  onError: {
    type: Function as PropType<
      (error: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  onStart: {
    type: Function as PropType<(file: UploadRawFile) => void>,
    default: NOOP
  }
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>

let id = 0
export const getId = () => id++

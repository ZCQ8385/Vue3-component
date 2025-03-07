import { ExtractPropTypes, PropType } from 'vue'
import {
  baseProps,
  uploadProps,
  UploadProgressEvent,
  UploadRawFile
} from './upload'

const Noop = () => {}
export const uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps['beforeUpload'],
  onStart: {
    type: Function as PropType<(file: UploadRawFile) => void>,
    default: Noop
  },
  onProgress: {
    type: Function as PropType<
      (e: UploadProgressEvent, rawFile: UploadRawFile) => void
    >,
    default: Noop
  },
  onRemove: {
    type: Function as PropType<(file: UploadRawFile) => void>,
    default: Noop
  },
  onError: {
    type: Function as PropType<(error: any, rawFile: UploadRawFile) => void>,
    default: Noop
  },
  onSuccess: {
    type: Function as PropType<(response: any, rawFile: UploadRawFile) => void>,
    default: Noop
  }
} as const

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>

//xhr
export interface RequestOptions {
  method: string
  file: File
  name: string
  action: string
  headers: Headers | Record<string, any>
  data: Record<string, any>
  onError: (e: any) => void
  onSuccess: (res: any) => void
  onProgress: (e: any) => void
}

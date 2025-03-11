declare const Upload: {
    new (...args: any[]): any;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<any, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, any, string, {
    readonly name: string;
    readonly data: Record<string, any>;
    readonly onChange: (file: import('./src/upload').UploadFile) => void;
    readonly onError: (error: any, uploadFile: import('./src/upload').UploadFile, uploadFiles: import('./src/upload').UploadFiles) => void;
    readonly onProgress: (file: any, uploadFile: import('./src/upload').UploadFile, uploadFiles: import('./src/upload').UploadFiles) => void;
    readonly multiple: boolean;
    readonly onPreview: (file: import('./src/upload').UploadFile) => void;
    readonly beforeUpload: (file: import('./src/upload').UploadRawFile) => Promise<boolean> | boolean;
    readonly beforeRemove: (file: import('./src/upload').UploadFile, UploadFiles: import('./src/upload').UploadFiles) => Promise<boolean> | boolean;
    readonly onRemove: (file: import('./src/upload').UploadFile, UploadFiles: import('./src/upload').UploadFiles) => void;
    readonly onSuccess: (response: any, uploadFile: import('./src/upload').UploadFile, uploadFiles: import('./src/upload').UploadFiles) => void;
    readonly onStart: (file: import('./src/upload').UploadRawFile) => void;
    readonly FileList: import('./src/upload').UploadFile[];
    readonly action: string;
    readonly accept: string;
    readonly method: string;
    readonly headers: Record<string, any>;
    readonly drag: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default Upload;
declare module 'vue' {
    interface GlobalComponents {
        ZUpload: typeof Upload;
    }
}

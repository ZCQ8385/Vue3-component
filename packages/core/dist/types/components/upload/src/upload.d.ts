import { PropType, ExtractPropTypes } from 'vue';

export interface UploadFile {
    uid?: number;
    name: string;
    url?: string;
    percentage?: number;
    raw?: File;
    size?: number;
    status: string;
}
export type UploadFiles = UploadFile[];
export declare const baseProps: {
    readonly FileList: {
        readonly type: PropType<UploadFile[]>;
        readonly default: () => readonly [];
    };
    readonly action: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "file";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly method: {
        readonly type: StringConstructor;
        readonly default: "post";
    };
    readonly headers: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly data: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly drag: {
        readonly type: BooleanConstructor;
    };
};
export type UploadRawFile = File & {
    uid: number;
};
export type UploadProgressEvent = ProgressEvent & {
    percent: number;
};
export declare const uploadProps: {
    readonly onPreview: {
        readonly type: PropType<(file: UploadFile) => void>;
        readonly default: () => void;
    };
    readonly beforeUpload: {
        readonly type: PropType<(file: UploadRawFile) => Promise<boolean> | boolean>;
        readonly default: () => void;
    };
    readonly onChange: {
        readonly type: PropType<(file: UploadFile) => void>;
        readonly default: () => void;
    };
    readonly beforeRemove: {
        readonly type: PropType<(file: UploadFile, UploadFiles: UploadFiles) => Promise<boolean> | boolean>;
        readonly default: () => void;
    };
    readonly onRemove: {
        readonly type: PropType<(file: UploadFile, UploadFiles: UploadFiles) => void>;
        readonly default: () => void;
    };
    readonly onProgress: {
        readonly type: PropType<(file: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>;
        readonly default: () => void;
    };
    readonly onSuccess: {
        readonly type: PropType<(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>;
        readonly default: () => void;
    };
    readonly onError: {
        readonly type: PropType<(error: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>;
        readonly default: () => void;
    };
    readonly onStart: {
        readonly type: PropType<(file: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly FileList: {
        readonly type: PropType<UploadFile[]>;
        readonly default: () => readonly [];
    };
    readonly action: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "file";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly method: {
        readonly type: StringConstructor;
        readonly default: "post";
    };
    readonly headers: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly data: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly drag: {
        readonly type: BooleanConstructor;
    };
};
export type UploadProps = ExtractPropTypes<typeof uploadProps>;
export declare const getId: () => number;

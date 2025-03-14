import { ExtractPropTypes, PropType } from 'vue';
import { UploadProgressEvent, UploadRawFile } from './upload';

export declare const uploadContentProps: {
    readonly beforeUpload: {
        readonly type: PropType<(file: UploadRawFile) => Promise<boolean> | boolean>;
        readonly default: () => void;
    };
    readonly onStart: {
        readonly type: PropType<(file: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onProgress: {
        readonly type: PropType<(e: UploadProgressEvent, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onRemove: {
        readonly type: PropType<(file: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onError: {
        readonly type: PropType<(error: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onSuccess: {
        readonly type: PropType<(response: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly FileList: {
        readonly type: PropType<import('./upload').UploadFile[]>;
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
export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>;
export interface RequestOptions {
    method: string;
    file: File;
    name: string;
    action: string;
    headers: Headers | Record<string, any>;
    data: Record<string, any>;
    onError: (e: any) => void;
    onSuccess: (res: any) => void;
    onProgress: (e: any) => void;
}

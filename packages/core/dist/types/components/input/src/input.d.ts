import { ExtractPropTypes, PropType } from 'vue';

export declare const inputProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "text";
    };
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly label: {
        readonly type: StringConstructor;
    };
};
export declare const inputEmits: {
    readonly 'update:modelValue': (value: string) => boolean;
    readonly input: (value: string) => boolean;
    readonly change: (value: string) => boolean;
    readonly focus: (e: FocusEvent) => boolean;
    readonly blur: (e: FocusEvent) => boolean;
    readonly clear: () => boolean;
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;

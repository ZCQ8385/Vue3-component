import { ExtractPropTypes, PropType } from 'vue';

export declare const checkboxProps: {
    readonly modelValue: {
        readonly type: PropType<boolean | string | number>;
    };
    readonly indeterminate: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly label: {
        readonly type: PropType<string>;
    };
};
export declare const checkboxEmits: {
    'update:modelValue': (value: boolean | string | number) => boolean;
    change: (value: boolean) => boolean;
};
export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>;
export type CheckboxEmits = typeof checkboxEmits;

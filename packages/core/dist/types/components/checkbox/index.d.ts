declare const Checkbox: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<boolean | string | number>;
        };
        readonly indeterminate: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly label: {
            readonly type: import('vue').PropType<string>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string | number | boolean) => void;
        change: (value: boolean) => void;
    }, import('vue').PublicProps, {
        readonly disabled: boolean;
        readonly indeterminate: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import('vue').PropType<boolean | string | number>;
        };
        readonly indeterminate: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly label: {
            readonly type: import('vue').PropType<string>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly indeterminate: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import('vue').PropType<boolean | string | number>;
    };
    readonly indeterminate: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly label: {
        readonly type: import('vue').PropType<string>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => void;
    change: (value: boolean) => void;
}, string, {
    readonly disabled: boolean;
    readonly indeterminate: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default Checkbox;
declare module 'vue' {
    interface GlobalComponents {
        ZCheckbox: typeof Checkbox;
    }
}
export * from './src/checkbox';

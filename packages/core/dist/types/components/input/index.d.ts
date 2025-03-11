declare const Input: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly type: {
            readonly type: StringConstructor;
            readonly default: "text";
        };
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number>;
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
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onFocus?: ((e: FocusEvent) => any) | undefined;
        onBlur?: ((e: FocusEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        clear: () => void;
        input: (value: string) => void;
        "update:modelValue": (value: string) => void;
        change: (value: string) => void;
        focus: (e: FocusEvent) => void;
        blur: (e: FocusEvent) => void;
    }, import('vue').PublicProps, {
        readonly disabled: boolean;
        readonly type: string;
        readonly modelValue: string | number;
        readonly clearable: boolean;
        readonly showPassword: boolean;
        readonly readonly: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly type: {
            readonly type: StringConstructor;
            readonly default: "text";
        };
        readonly modelValue: {
            readonly type: import('vue').PropType<string | number>;
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
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onFocus?: ((e: FocusEvent) => any) | undefined;
        onBlur?: ((e: FocusEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly type: string;
        readonly modelValue: string | number;
        readonly clearable: boolean;
        readonly showPassword: boolean;
        readonly readonly: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "text";
    };
    readonly modelValue: {
        readonly type: import('vue').PropType<string | number>;
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
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onBlur?: ((e: FocusEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clear: () => void;
    input: (value: string) => void;
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
    focus: (e: FocusEvent) => void;
    blur: (e: FocusEvent) => void;
}, string, {
    readonly disabled: boolean;
    readonly type: string;
    readonly modelValue: string | number;
    readonly clearable: boolean;
    readonly showPassword: boolean;
    readonly readonly: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefixIcon?(_: {}): any;
        suffixIcon?(_: {}): any;
    };
}) & import('vue').Plugin;
export default Input;
declare module 'vue' {
    interface GlobalComponents {
        ZInput: typeof Input;
    }
}
export * from './src/input';

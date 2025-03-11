declare const FormItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly prop: StringConstructor;
        readonly label: StringConstructor;
        readonly rules: import('vue').PropType<import('.').Arrayable<import('.').FormItemRules>>;
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        readonly showMessage: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly prop: StringConstructor;
        readonly label: StringConstructor;
        readonly rules: import('vue').PropType<import('.').Arrayable<import('.').FormItemRules>>;
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly showMessage: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import('vue').PropType<import('.').Arrayable<import('.').FormItemRules>>;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly showMessage: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {}): any;
        default?(_: {}): any;
        error?(_: {}): any;
    };
}) & import('vue').Plugin;
declare const Form: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import('vue').PropType<Record<string, import('.').Arrayable<import('.').FormItemRules>>>;
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {
        validate: (callback?: (valid: boolean, fields?: any) => void) => Promise<void>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        readonly showMessage: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import('vue').PropType<Record<string, import('.').Arrayable<import('.').FormItemRules>>>;
        };
        readonly showMessage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & Readonly<{}>, {
        validate: (callback?: (valid: boolean, fields?: any) => void) => Promise<void>;
    }, {}, {}, {}, {
        readonly showMessage: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import('vue').PropType<Record<string, import('.').Arrayable<import('.').FormItemRules>>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & Readonly<{}>, {
    validate: (callback?: (valid: boolean, fields?: any) => void) => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly showMessage: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default FormItem;
export { Form };
export type FormInstance = InstanceType<typeof Form>;
declare module 'vue' {
    interface GlobalComponents {
        ZFormItem: typeof FormItem;
        ZForm: typeof Form;
    }
}
export * from './src/form-item';

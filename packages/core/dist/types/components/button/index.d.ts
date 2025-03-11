declare const Button: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly size: import('vue').PropType<import('.').Size>;
        readonly type: {
            readonly type: import('vue').PropType<import('.').Type>;
            readonly validator: (val: string) => boolean;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly nativeType: {
            readonly type: import('vue').PropType<import('.').NativeType>;
            readonly default: "button";
        };
        readonly iconPlacement: {
            readonly type: import('vue').PropType<import('.').Placement>;
            readonly default: "left";
        };
    }>> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onMousedown?: ((e: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => void;
        mousedown: (e: MouseEvent) => void;
    }, import('vue').PublicProps, {
        readonly disabled: boolean;
        readonly type: import('.').Type;
        readonly loading: boolean;
        readonly round: boolean;
        readonly nativeType: import('.').NativeType;
        readonly iconPlacement: import('.').Placement;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly size: import('vue').PropType<import('.').Size>;
        readonly type: {
            readonly type: import('vue').PropType<import('.').Type>;
            readonly validator: (val: string) => boolean;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly nativeType: {
            readonly type: import('vue').PropType<import('.').NativeType>;
            readonly default: "button";
        };
        readonly iconPlacement: {
            readonly type: import('vue').PropType<import('.').Placement>;
            readonly default: "left";
        };
    }>> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onMousedown?: ((e: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly type: import('.').Type;
        readonly loading: boolean;
        readonly round: boolean;
        readonly nativeType: import('.').NativeType;
        readonly iconPlacement: import('.').Placement;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly size: import('vue').PropType<import('.').Size>;
    readonly type: {
        readonly type: import('vue').PropType<import('.').Type>;
        readonly validator: (val: string) => boolean;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly nativeType: {
        readonly type: import('vue').PropType<import('.').NativeType>;
        readonly default: "button";
    };
    readonly iconPlacement: {
        readonly type: import('vue').PropType<import('.').Placement>;
        readonly default: "left";
    };
}>> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
    onMousedown?: ((e: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
    mousedown: (e: MouseEvent) => void;
}, string, {
    readonly disabled: boolean;
    readonly type: import('.').Type;
    readonly loading: boolean;
    readonly round: boolean;
    readonly nativeType: import('.').NativeType;
    readonly iconPlacement: import('.').Placement;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default Button;
declare module 'vue' {
    interface GlobalComponents {
        ZButton: typeof Button;
    }
}
export * from './src/button';

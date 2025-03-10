import { default as _Virtual } from './src/virtual';

declare const Virtual: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: NumberConstructor;
            default: number;
        };
        remain: {
            default: number;
            type: NumberConstructor;
        };
        items: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: number;
        remain: number;
        items: unknown[];
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: NumberConstructor;
            default: number;
        };
        remain: {
            default: number;
            type: NumberConstructor;
        };
        items: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        size: number;
        remain: number;
        items: unknown[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        default: number;
        type: NumberConstructor;
    };
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: number;
    remain: number;
    items: unknown[];
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export default Virtual;
declare module 'vue' {
    interface GlobalComponents {
        ZVirtualList: typeof _Virtual;
    }
}

declare const Tree: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        readonly data: {
            readonly type: import('vue').PropType<import('.').TreeOption[]>;
            readonly default: () => never[];
        };
        readonly defaultExpandedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
            readonly default: () => never[];
        };
        readonly labelField: {
            readonly type: StringConstructor;
            readonly default: "label";
        };
        readonly keyField: {
            readonly type: StringConstructor;
            readonly default: "key";
        };
        readonly childrenField: {
            readonly type: StringConstructor;
            readonly default: "children";
        };
        readonly onLoad: import('vue').PropType<(node: import('.').TreeOption) => Promise<import('.').TreeOption[]>>;
        readonly selectedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
        };
        readonly selectable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly multiple: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly defaultCheckedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
            readonly default: () => never[];
        };
        readonly showCheckbox: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checked: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly indeterminate: BooleanConstructor;
    }>> & Readonly<{
        "onUpdate:selectedKeys"?: ((keys: import('.').key[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:selectedKeys": (keys: import('.').key[]) => void;
    }, import('vue').PublicProps, {
        readonly data: import('.').TreeOption[];
        readonly disabled: boolean;
        readonly defaultExpandedKeys: import('.').key[];
        readonly labelField: string;
        readonly keyField: string;
        readonly childrenField: string;
        readonly selectable: boolean;
        readonly multiple: boolean;
        readonly defaultCheckedKeys: import('.').key[];
        readonly showCheckbox: boolean;
        readonly checked: boolean;
        readonly indeterminate: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        readonly data: {
            readonly type: import('vue').PropType<import('.').TreeOption[]>;
            readonly default: () => never[];
        };
        readonly defaultExpandedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
            readonly default: () => never[];
        };
        readonly labelField: {
            readonly type: StringConstructor;
            readonly default: "label";
        };
        readonly keyField: {
            readonly type: StringConstructor;
            readonly default: "key";
        };
        readonly childrenField: {
            readonly type: StringConstructor;
            readonly default: "children";
        };
        readonly onLoad: import('vue').PropType<(node: import('.').TreeOption) => Promise<import('.').TreeOption[]>>;
        readonly selectedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
        };
        readonly selectable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly multiple: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly defaultCheckedKeys: {
            readonly type: import('vue').PropType<import('.').key[]>;
            readonly default: () => never[];
        };
        readonly showCheckbox: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checked: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly indeterminate: BooleanConstructor;
    }>> & Readonly<{
        "onUpdate:selectedKeys"?: ((keys: import('.').key[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        readonly data: import('.').TreeOption[];
        readonly disabled: boolean;
        readonly defaultExpandedKeys: import('.').key[];
        readonly labelField: string;
        readonly keyField: string;
        readonly childrenField: string;
        readonly selectable: boolean;
        readonly multiple: boolean;
        readonly defaultCheckedKeys: import('.').key[];
        readonly showCheckbox: boolean;
        readonly checked: boolean;
        readonly indeterminate: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    readonly data: {
        readonly type: import('vue').PropType<import('.').TreeOption[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import('vue').PropType<import('.').key[]>;
        readonly default: () => never[];
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly onLoad: import('vue').PropType<(node: import('.').TreeOption) => Promise<import('.').TreeOption[]>>;
    readonly selectedKeys: {
        readonly type: import('vue').PropType<import('.').key[]>;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import('vue').PropType<import('.').key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly indeterminate: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:selectedKeys"?: ((keys: import('.').key[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:selectedKeys": (keys: import('.').key[]) => void;
}, string, {
    readonly data: import('.').TreeOption[];
    readonly disabled: boolean;
    readonly defaultExpandedKeys: import('.').key[];
    readonly labelField: string;
    readonly keyField: string;
    readonly childrenField: string;
    readonly selectable: boolean;
    readonly multiple: boolean;
    readonly defaultCheckedKeys: import('.').key[];
    readonly showCheckbox: boolean;
    readonly checked: boolean;
    readonly indeterminate: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export default Tree;
declare module 'vue' {
    interface GlobalComponents {
        ZTree: typeof Tree;
    }
}
export * from './src/tree';

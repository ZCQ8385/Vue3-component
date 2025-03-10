import { ExtractPropTypes, PropType, SetupContext, InjectionKey } from 'vue';

export type key = string | number;
export interface TreeNode extends Required<TreeOption> {
    level: number;
    rewNode: TreeOption;
    children: TreeNode[];
    parentKey: key | undefined;
}
export interface TreeOption {
    label?: key;
    key?: key;
    children?: TreeOption[];
    [key: string]: any;
    disabled?: boolean;
}
export declare const TreeProps: {
    readonly data: {
        readonly type: PropType<TreeOption[]>;
        readonly default: () => never[];
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<key[]>;
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
    readonly onLoad: PropType<(node: TreeOption) => Promise<TreeOption[]>>;
    readonly selectedKeys: {
        readonly type: PropType<key[]>;
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
        readonly type: PropType<key[]>;
        readonly default: () => never[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checked: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly indeterminate: BooleanConstructor;
};
export declare const treeNodeProps: {
    node: {
        type: PropType<TreeNode>;
        required: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        required: boolean;
    };
    selectedKeys: {
        type: PropType<key[]>;
        default: () => never[];
    };
    showCheckbox: BooleanConstructor;
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    indeterminate: BooleanConstructor;
};
export declare const treeNodeEmitts: {
    toggle: (node: TreeNode) => TreeNode;
    select: (node: TreeNode) => TreeNode;
    check: (node: TreeNode, value: boolean) => boolean;
};
export declare const treeEmitts: {
    'update:selectedKeys': (keys: key[]) => key[];
};
export type IconProps = Partial<ExtractPropTypes<typeof TreeProps>>;
export interface TreeContext {
    slots: SetupContext['slots'];
}
export declare const treeTnjectKey: InjectionKey<TreeContext>;
export declare const treeNodeContentProps: {
    node: {
        type: PropType<TreeNode>;
        required: boolean;
    };
};

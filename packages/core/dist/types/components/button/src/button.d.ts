import { ExtractPropTypes, PropType } from 'vue';

export type Size = 'small' | 'medium' | 'large';
export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export type NativeType = 'button' | 'submit' | 'reset';
export type Placement = 'left' | 'right';
export declare const buttonProps: {
    readonly size: PropType<Size>;
    readonly type: {
        readonly type: PropType<Type>;
        readonly validator: (val: string) => boolean;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly nativeType: {
        readonly type: PropType<NativeType>;
        readonly default: "button";
    };
    readonly iconPlacement: {
        readonly type: PropType<Placement>;
        readonly default: "left";
    };
};
export declare const buttonEmits: {
    click: (e: MouseEvent) => boolean;
    mousedown: (e: MouseEvent) => boolean;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;

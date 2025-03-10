import { ExtractPropTypes, PropType } from 'vue';

export declare const iconProps: {
    readonly color: StringConstructor;
    readonly size: PropType<string | number>;
};
export type IconProps = ExtractPropTypes<typeof iconProps>;

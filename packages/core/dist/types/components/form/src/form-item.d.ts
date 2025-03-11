import { RuleItem } from 'async-validator';
import { ExtractPropTypes, PropType, InjectionKey } from 'vue';

export type Arrayable<T> = T | T[];
export interface FormItemRules extends RuleItem {
    trigger?: Arrayable<string>;
}
export declare const formItemValidateState: readonly ["success", "error", ""];
export type FormItemValidateState = (typeof formItemValidateState)[number];
export declare const FormItemProps: {
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: PropType<Arrayable<FormItemRules>>;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export interface FormItemContext extends FormItem {
    validate: (trigger: string, callbak?: (isValid: boolean) => any) => Promise<any>;
}
export type FormItem = Partial<ExtractPropTypes<typeof FormItemProps>>;
export declare const FormItemContextKey: InjectionKey<FormItemContext>;

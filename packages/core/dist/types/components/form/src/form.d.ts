import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import { Arrayable, FormItemContext, FormItemRules } from './form-item';

export declare const formProps: {
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: PropType<Record<string, Arrayable<FormItemRules>>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
}
export declare const FormContextKey: InjectionKey<FormContext>;

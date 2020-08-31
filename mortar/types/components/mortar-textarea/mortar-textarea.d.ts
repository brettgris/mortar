export declare class MortarTextarea {
    label: string;
    error: string;
    haserror: boolean;
    maxlength: string;
    message: (amount: any) => string;
    name: string;
    disabled: boolean;
    required: boolean;
    value: string;
    placeholder: string;
    private inputEl?;
    className: () => any;
    handleInput: () => void;
    handleRef: (ref: any) => void;
    handleValue(val: String): void;
    render(): any;
}

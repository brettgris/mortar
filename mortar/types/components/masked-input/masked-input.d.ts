import { EventEmitter } from '../../stencil-public-runtime';
export declare class MaskedInput {
    placeholder: string;
    elementclass: string;
    value: string;
    type: string;
    inputmode: string;
    name: string;
    pattern: string;
    options: {
        mask: Array<String>;
        pipe: Function;
        guide: Boolean;
        keepCharPositions: Boolean;
        showMask: Boolean;
    };
    maskedBlur: EventEmitter<string>;
    inputChange: EventEmitter<string>;
    root: HTMLElement;
    private mask?;
    componentDidLoad(): void;
    createTextMask(options: any): void;
    handleValue(v: any): void;
    handleBlur: () => void;
    handleInput: (evt: any) => void;
    render(): any;
}

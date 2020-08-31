export declare class MortarDropdownItem {
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    label: string;
    value: string;
    root: HTMLElement;
    getEl(): Promise<HTMLElement>;
    className: () => any;
    render(): any;
}

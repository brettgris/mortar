export declare class MortarAlert {
    kind: string;
    open: boolean;
    headline: string;
    btnlabel: string;
    btnkind: string;
    overlay: boolean;
    root: HTMLElement;
    className: () => any;
    handleOpen(openVal: Boolean): void;
    iconKind: () => "close" | "warning" | "check";
    overlayClassName: () => any;
    handleClose: () => void;
    render(): any;
}

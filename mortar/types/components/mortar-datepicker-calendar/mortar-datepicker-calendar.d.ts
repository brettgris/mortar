import { EventEmitter } from '../../stencil-public-runtime';
export declare class MortarDatepicker {
    days: string[];
    months: string[];
    monthPlaceholder: string;
    yearPlaceholder: string;
    selected: Date;
    current: Date;
    minDate: Date;
    maxDate: Date;
    open: boolean;
    focused: boolean;
    highlight: number;
    header: boolean;
    embed: boolean;
    customClass: (_year: any, _month: any, _date: any) => string;
    clearDate: EventEmitter<void>;
    selectDate: EventEmitter<Date>;
    clickDate: EventEmitter<Date>;
    keyboardSelect: EventEmitter<KeyboardEvent>;
    keyboardExit: EventEmitter<void>;
    root: HTMLElement;
    handleSelected(val: Date): void;
    handleClose(openVal: boolean): void;
    handleFocused(): void;
    /***
     * Dropdowns
     * ***/
    getAvailableMonths: () => any[];
    getAvailableYears: () => any;
    getMonthValue: () => string;
    getYearValue: () => string;
    /***
     * Clear Value
     * ***/
    handleClear: () => void;
    /***
    * Change Current Month
    * ***/
    changeCurrent: (month: any, year: any, highlight?: number) => void;
    handleChangeMonth: (val: any) => void;
    handleChangeCurrentMonth: (evt: any) => void;
    handleChangeCurrentYear: (evt: any) => void;
    getCurrentMonth: () => string;
    getDefaultDate: () => Date;
    /***
     * Select A Day
     * ***/
    handleClickDay: (y: any, m: any, d: any) => void;
    handleSelectDay: (y: any, m: any, d: any, evt: any) => void;
    /***
     * Focus Trap
     */
    handleCalendarFocus: () => void;
    handleCalendarBlur: () => void;
    /***
     * Keyboard Navigate
     */
    handleKeySelect(evt: any): void;
    changeHighlight(amt: any): void;
    selectHighlight(evt: any): void;
    getDaysInMonth: (d: Date) => {
        first: number;
        length: number;
        total: number;
        rows: number;
        year: number;
        month: number;
        previous: {
            month: number;
            year: number;
            length: number;
        };
        next: {
            month: number;
            year: number;
            length: number;
        };
    };
    /***
     * Month Display
     * ***/
    getCalendarDays: () => any;
    isToday: (y: any, m: any, d: any) => boolean;
    isSelected: (y: any, m: any, d: any) => boolean;
    isAvailable: (y: any, m: any, d: any) => boolean;
    /***
     * Render
     * ***/
    className: () => any;
    render(): any;
    renderEl(): any;
}

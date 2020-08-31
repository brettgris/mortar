import { r as registerInstance, c as createEvent, h } from './index-96277151.js';

const MortarDatepicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.open = false;
        this.min = new Date(1900, 0, 1);
        this.max = new Date(2100, 11, 31);
        this.dateToString = (date) => {
            if (!date)
                return '';
            const m = date.getMonth() + 1;
            const ms = (m >= 10) ? m : '0' + m;
            const d = date.getDate();
            const ds = (d >= 10) ? d : '0' + d;
            return `${ms}/${ds}/${date.getFullYear()}`;
        };
        this.valueString = '';
        this.mask = 'Date';
        this.required = true;
        this.disabled = false;
        this.placeholder = "mm/dd/yyyy";
        this.name = '';
        this.header = true;
        this.handleOpen = () => {
            this.open = !this.open;
        };
        this.handleSelect = (evt) => {
            this.value = evt.detail;
            this.selectDate.emit(evt.detail);
        };
        this.handleClear = () => {
            this.value = null;
            this.open = false;
            this.clearDate.emit();
            this.setToggleFocus();
        };
        this.handleCalendarRef = (ref) => {
            this.calendarElement = ref;
        };
        this.handleToggleRef = (ref) => {
            this.toggleElement = ref;
        };
        this.handleClickDate = () => {
            this.open = false;
        };
        this.handleKeyboardSelect = () => {
            this.open = false;
            this.setToggleFocus();
        };
        this.handleKeyboardExit = () => {
            this.open = false;
            this.setToggleFocus();
        };
        this.setToggleFocus = () => {
            const el = this.toggleElement;
            setTimeout(function () {
                el.focus();
            }, 10);
        };
        this.handleBlur = (evt) => {
            const os = this.valueString;
            this.valueString = evt.detail;
            setTimeout(() => {
                this.updateValueFromInput(evt.detail, os);
            }, 10);
        };
        this.updateValueFromInput = (val, os) => {
            if (val) {
                const d = val.split("/").map(v => {
                    if (v) {
                        if (Number(v)) {
                            return v;
                        }
                        else if (Number(v.slice(1))) {
                            return v.slice(1);
                        }
                        else if (Number(v.slice(0, -1))) {
                            return v.slice(0, -1);
                        }
                        else {
                            return v;
                        }
                    }
                    return v;
                }).join("/");
                const nd = new Date(d);
                if (nd.getTime() && nd > this.min && nd < this.max) {
                    this.valueString = this.dateToString(nd);
                    this.value = nd;
                    this.selectDate.emit(nd);
                }
                else {
                    this.valueString = os;
                }
            }
        };
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clearDate = createEvent(this, "clearDate", 7);
        this.inputChange = createEvent(this, "inputChange", 7);
        this.dateOutOfRange = createEvent(this, "dateOutOfRange", 7);
    }
    handleOutsideClick(evt) {
        if (this.open) {
            if (!(evt.target === this.toggleElement || this.toggleElement.contains(evt.target)) && !(evt.target === this.calendarElement || this.calendarElement.contains(evt.target))) {
                this.open = false;
            }
        }
    }
    componentWillLoad() {
        if (this.value) {
            this.valueString = this.dateToString(this.value);
        }
    }
    handleValue(v) {
        this.valueString = this.dateToString(v);
    }
    render() {
        return (h("mortar-form-element", { label: this.label, haserror: this.haserror, error: this.error, elementclass: "datepicker", name: this.name }, h("div", { class: "datepicker-outer" }, h("div", { class: "datepicker-inner" }, h("masked-input", { placeholder: this.placeholder, value: this.valueString, elementclass: "datepicker-input", type: this.mask, onMaskedBlur: this.handleBlur, pattern: "[0-9]*", inputmode: "numeric", name: this.name }), h("button", { class: "datepicker-toggle", onClick: this.handleOpen, ref: this.handleToggleRef }, h("mortar-icon", { kind: "calendar" }))), h("mortar-datepicker-calendar", { ref: this.handleCalendarRef, minDate: this.min, maxDate: this.max, onSelectDate: this.handleSelect, onClearDate: this.handleClear, onClickDate: this.handleClickDate, onKeyboardSelect: this.handleKeyboardSelect, onKeyboardExit: this.handleKeyboardExit, selected: this.value, open: this.open, header: this.header }))));
    }
    static get watchers() { return {
        "value": ["handleValue"]
    }; }
};

export { MortarDatepicker as mortar_datepicker };

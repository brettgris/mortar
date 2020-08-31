import { Component, h, Prop, Event, Listen, Watch } from '@stencil/core';
export class MortarDatepicker {
    constructor() {
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
        return (h("mortar-form-element", { label: this.label, haserror: this.haserror, error: this.error, elementclass: "datepicker", name: this.name },
            h("div", { class: "datepicker-outer" },
                h("div", { class: "datepicker-inner" },
                    h("masked-input", { placeholder: this.placeholder, value: this.valueString, elementclass: "datepicker-input", type: this.mask, onMaskedBlur: this.handleBlur, pattern: "[0-9]*", inputmode: "numeric", name: this.name }),
                    h("button", { class: "datepicker-toggle", onClick: this.handleOpen, ref: this.handleToggleRef },
                        h("mortar-icon", { kind: "calendar" }))),
                h("mortar-datepicker-calendar", { ref: this.handleCalendarRef, minDate: this.min, maxDate: this.max, onSelectDate: this.handleSelect, onClearDate: this.handleClear, onClickDate: this.handleClickDate, onKeyboardSelect: this.handleKeyboardSelect, onKeyboardExit: this.handleKeyboardExit, selected: this.value, open: this.open, header: this.header }))));
    }
    static get is() { return "mortar-datepicker"; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "error": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "''"
        },
        "haserror": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "haserror",
            "reflect": false,
            "defaultValue": "false"
        },
        "open": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        },
        "min": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "new Date(1900, 0, 1)"
        },
        "max": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "new Date(2100, 11, 31)"
        },
        "dateToString": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(date: any) => string",
                "resolved": "(date: any) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "(date) => {\r\n    if (!date) return '';\r\n\r\n    const m = date.getMonth() + 1;\r\n    const ms = (m >= 10) ? m : '0'+m;\r\n    const d = date.getDate();\r\n    const ds = (d >= 10) ? d : '0'+d;\r\n    return `${ms}/${ds}/${date.getFullYear()}`;\r\n  }"
        },
        "value": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "valueString": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value-string",
            "reflect": false,
            "defaultValue": "''"
        },
        "mask": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "mask",
            "reflect": false,
            "defaultValue": "'Date'"
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "true"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"mm/dd/yyyy\""
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
        "header": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "header",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "selectDate",
            "name": "selectDate",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "clearDate",
            "name": "clearDate",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "inputChange",
            "name": "inputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "dateOutOfRange",
            "name": "dateOutOfRange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Date",
                "resolved": "Date",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "handleValue"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleOutsideClick",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}

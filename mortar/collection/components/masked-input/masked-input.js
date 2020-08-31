import { Component, Host, h, Prop, Element, Watch, Event } from '@stencil/core';
import textMask from 'vanilla-text-mask';
import types from './types';
export class MaskedInput {
    constructor() {
        this.placeholder = '';
        this.elementclass = '';
        this.value = '';
        this.type = '';
        this.inputmode = 'text';
        this.name = 'input';
        this.pattern = '';
        this.handleBlur = () => {
            if (this.mask) {
                this.maskedBlur.emit(this.mask.textMaskInputElement.state.previousConformedValue);
            }
        };
        this.handleInput = (evt) => {
            this.inputChange.emit(evt.target.value);
        };
    }
    componentDidLoad() {
        if (this.type && types[this.type]) {
            this.createTextMask(Object.assign(Object.assign({}, types[this.type]), this.options));
        }
        else if (this.options) {
            this.createTextMask(this.options);
        }
    }
    createTextMask(options) {
        const inputElement = this.root.querySelector('input');
        this.mask = textMask(Object.assign({ inputElement }, options));
    }
    handleValue(v) {
        if (this.mask) {
            this.mask.textMaskInputElement.update(v);
        }
        else {
            const inputElement = this.root.querySelector('input');
            inputElement.value = v;
        }
    }
    render() {
        return (h(Host, null,
            h("input", { class: this.elementclass, placeholder: this.placeholder, type: "text", onBlur: this.handleBlur, onInput: this.handleInput, pattern: this.pattern, inputmode: this.inputmode, id: this.name })));
    }
    static get is() { return "masked-input"; }
    static get properties() { return {
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
            "defaultValue": "''"
        },
        "elementclass": {
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
            "attribute": "elementclass",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "''"
        },
        "inputmode": {
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
            "attribute": "inputmode",
            "reflect": false,
            "defaultValue": "'text'"
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
            "defaultValue": "'input'"
        },
        "pattern": {
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
            "attribute": "pattern",
            "reflect": false,
            "defaultValue": "''"
        },
        "options": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{\r\n    mask: Array<String>,\r\n    pipe: Function,\r\n    guide: Boolean,\r\n    keepCharPositions: Boolean,\r\n    showMask: Boolean\r\n  }",
                "resolved": "{ mask: String[]; pipe: Function; guide: Boolean; keepCharPositions: Boolean; showMask: Boolean; }",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "String": {
                        "location": "global"
                    },
                    "Function": {
                        "location": "global"
                    },
                    "Boolean": {
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
        }
    }; }
    static get events() { return [{
            "method": "maskedBlur",
            "name": "maskedBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
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
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "handleValue"
        }]; }
}

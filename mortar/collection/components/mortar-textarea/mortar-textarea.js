import { Component, h, Prop, Watch } from '@stencil/core';
import classnames from 'classnames';
export class MortarTextarea {
    constructor() {
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.maxlength = '';
        this.message = (amount) => {
            return `${amount} characters remaining`;
        };
        this.name = 'textarea';
        this.disabled = false;
        this.required = true;
        this.value = '';
        this.placeholder = '';
        this.className = () => {
            return classnames({
                error: this.haserror
            });
        };
        this.handleInput = () => {
            this.value = this.inputEl.value;
        };
        this.handleRef = (ref) => {
            this.inputEl = ref;
        };
    }
    handleValue(val) {
        this.inputEl.value = val;
    }
    render() {
        const n = Number(this.maxlength);
        const text = this.value.slice(0, n);
        const remaining = n - text.length;
        return (h("mortar-form-element", { label: this.label, error: this.error, haserror: this.haserror, elementclass: "text-area", name: this.name },
            h("textarea", { class: this.className(), id: this.name, disabled: this.disabled === true, required: this.required === true, placeholder: this.placeholder, onInput: this.handleInput, ref: this.handleRef }, text),
            this.maxlength &&
                h("div", { class: "character-message show" }, this.message(remaining))));
    }
    static get is() { return "mortar-textarea"; }
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
        "maxlength": {
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
            "attribute": "maxlength",
            "reflect": false,
            "defaultValue": "''"
        },
        "message": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(amount: any) => string",
                "resolved": "(amount: any) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "(amount) => {\r\n    return `${amount} characters remaining`;\r\n  }"
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
            "defaultValue": "'textarea'"
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
        }
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "handleValue"
        }]; }
}

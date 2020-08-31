import { Component, h, Prop } from '@stencil/core';
import classnames from 'classnames';
export class MortarRange {
    constructor() {
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.minlabel = '';
        this.maxlabel = '';
        this.minrequired = true;
        this.maxrequired = true;
        this.disabled = false;
        this.minplaceholder = '';
        this.maxplaceholder = '';
        this.name = 'input-range';
        this.minvalue = '';
        this.maxvalue = '';
        this.size = 'md';
        this.className = () => {
            return `range-min-max ${this.size}`;
        };
        this.inputClassName = () => {
            return classnames({
                'error': this.haserror === true
            });
        };
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: this.className() },
            h("div", null,
                this.minlabel &&
                    h("label", { htmlFor: `${this.name}-min`, class: "screen-reader-only" }, this.minlabel),
                h("input", { id: `${this.name}-min`, type: "text", disabled: this.disabled === true, required: this.minrequired, class: this.inputClassName(), placeholder: this.minplaceholder, value: this.minvalue }),
                this.maxlabel &&
                    h("label", { htmlFor: `${this.name}-max`, class: "screen-reader-only" }, this.maxlabel),
                h("input", { id: `${this.name}-max`, type: "text", disabled: this.disabled === true, required: this.maxrequired, class: this.inputClassName(), placeholder: this.maxplaceholder, value: this.maxvalue }))));
    }
    static get is() { return "mortar-range"; }
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
        "minlabel": {
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
            "attribute": "minlabel",
            "reflect": false,
            "defaultValue": "''"
        },
        "maxlabel": {
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
            "attribute": "maxlabel",
            "reflect": false,
            "defaultValue": "''"
        },
        "minrequired": {
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
            "attribute": "minrequired",
            "reflect": false,
            "defaultValue": "true"
        },
        "maxrequired": {
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
            "attribute": "maxrequired",
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
        "minplaceholder": {
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
            "attribute": "minplaceholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "maxplaceholder": {
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
            "attribute": "maxplaceholder",
            "reflect": false,
            "defaultValue": "''"
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
            "defaultValue": "'input-range'"
        },
        "minvalue": {
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
            "attribute": "minvalue",
            "reflect": false,
            "defaultValue": "''"
        },
        "maxvalue": {
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
            "attribute": "maxvalue",
            "reflect": false,
            "defaultValue": "''"
        },
        "size": {
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
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'md'"
        }
    }; }
}

import { Component, h, Prop } from '@stencil/core';
import classnames from 'classnames';
export class MortarFileUpload {
    constructor() {
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.name = 'file-upload';
        this.disabled = false;
        this.text = '';
        this.descriptor = '';
        this.multiple = true;
        this.required = true;
        this.labelClassName = () => {
            return classnames('input-label', {
                'error': this.haserror
            });
        };
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, legendId: `${this.name}-label`, disabled: this.disabled, elementclass: "file-upload", haserror: this.haserror, error: this.error, name: this.name },
            h("input", { id: this.name, type: "file", multiple: this.multiple, required: this.required }),
            h("label", { htmlFor: this.name, class: this.labelClassName() },
                h("span", { class: "message" },
                    h("mortar-icon", { kind: "upload" }),
                    this.text),
                this.descriptor && h("span", { class: "descriptor" }, this.descriptor))));
    }
    static get is() { return "mortar-file-upload"; }
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
            "defaultValue": "'file-upload'"
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
        "text": {
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
            "attribute": "text",
            "reflect": false,
            "defaultValue": "''"
        },
        "descriptor": {
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
            "attribute": "descriptor",
            "reflect": false,
            "defaultValue": "''"
        },
        "multiple": {
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
            "attribute": "multiple",
            "reflect": false,
            "defaultValue": "true"
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
        }
    }; }
}

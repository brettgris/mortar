import { Component, h, Prop, Element, Method } from '@stencil/core';
import classnames from 'classnames';
export class MortarDropdownItem {
    constructor() {
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.value = '';
        this.className = () => {
            return classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !this.disabled,
                'dropdown-item-disabled': this.disabled,
                'is-highlighted': !this.disabled && this.highlighted
            });
        };
    }
    async getEl() {
        return this.root;
    }
    render() {
        return (h("div", { class: this.className(), role: "option", "aria-selected": this.selected, "data-value": this.value, "data-disabled": this.disabled }, this.label));
    }
    static get is() { return "mortar-dropdown-item"; }
    static get properties() { return {
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
        "highlighted": {
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
            "attribute": "highlighted",
            "reflect": false,
            "defaultValue": "false"
        },
        "selected": {
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
            "attribute": "selected",
            "reflect": false,
            "defaultValue": "false"
        },
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
        }
    }; }
    static get methods() { return {
        "getEl": {
            "complexType": {
                "signature": "() => Promise<HTMLElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "root"; }
}

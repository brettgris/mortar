import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';
export class MortarTooltip {
    constructor() {
        this.position = "top-right";
        this.transition = true;
        this.hover = true;
        this.open = false;
    }
    classname() {
        return classnames('mortar-tooltip-text', this.position, {
            'transition': this.transition === true,
            'hover': this.hover === true,
            'mortar-tooltip-open': this.open === true
        });
    }
    render() {
        return (h(Host, null,
            h("span", { class: "mortar-tooltip", tabindex: "0" },
                h("span", { class: "mortar-tooltip-icon" },
                    h("slot", { name: "icon" })),
                h("span", { class: this.classname(), role: "status" },
                    h("span", { class: "mortar-tooltip-inner-text-container" },
                        h("span", { class: "mortar-tooltip-title" },
                            h("slot", { name: "headline" })),
                        h("slot", { name: "copy" }))))));
    }
    static get is() { return "mortar-tooltip"; }
    static get properties() { return {
        "position": {
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
            "attribute": "position",
            "reflect": false,
            "defaultValue": "\"top-right\""
        },
        "transition": {
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
            "attribute": "transition",
            "reflect": false,
            "defaultValue": "true"
        },
        "hover": {
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
            "attribute": "hover",
            "reflect": false,
            "defaultValue": "true"
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
        }
    }; }
}

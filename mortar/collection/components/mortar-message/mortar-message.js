import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';
export class MortarMessage {
    constructor() {
        this.kind = 'success';
        this.open = false;
        this.className = () => {
            return classnames('message', `message-${this.kind}`, {
                'show': this.open === true
            });
        };
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.className(), role: "alert" },
                h("div", { class: "header5" },
                    h("slot", { name: "headline" })),
                h("div", { class: "copy" },
                    h("slot", { name: "copy" })))));
    }
    static get is() { return "mortar-message"; }
    static get properties() { return {
        "kind": {
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
            "attribute": "kind",
            "reflect": false,
            "defaultValue": "'success'"
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

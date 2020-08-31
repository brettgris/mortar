import { Component, Host, h, Prop } from '@stencil/core';
export class MortarIcon {
    constructor() {
        this.kind = "";
        this.arialabel = "";
        this.class = "";
    }
    className() {
        return `storyicon ${this.kind}StoryIcon ${this.class}`;
    }
    render() {
        return (h(Host, null,
            h("i", { class: this.className(), "aria-label": this.arialabel })));
    }
    static get is() { return "mortar-icon"; }
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
            "defaultValue": "\"\""
        },
        "arialabel": {
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
            "attribute": "arialabel",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "class": {
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
            "attribute": "class",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
}

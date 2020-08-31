import { Component, Host, h, Prop } from '@stencil/core';
import { icons } from './selection.json';
export class MortarIllustration {
    constructor() {
        this.kind = '';
    }
    renderChildren(length) {
        const arr = Array.apply(null, Array(length));
        return arr.map((v, k) => (h("span", { class: `path${k + 1}` }, v)));
    }
    render() {
        var _a;
        const icon = icons.find((i) => i.properties.name === this.kind);
        const length = (_a = icon === null || icon === void 0 ? void 0 : icon.attrs) === null || _a === void 0 ? void 0 : _a.length;
        return (h(Host, null,
            length && length <= 1 &&
                h("i", { class: `storyillustration ${this.kind}StoryIllustration` }),
            length && length > 1 &&
                h("i", { class: `storyillustration ${this.kind}StoryIllustration` }, this.renderChildren(length))));
    }
    static get is() { return "mortar-illustration"; }
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
            "defaultValue": "''"
        }
    }; }
}

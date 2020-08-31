import { Component, Watch, Element, h, Prop, Host } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';
export class MortarModal {
    constructor() {
        this.open = false;
        this.handleClose = () => {
            this.open = false;
        };
    }
    className() {
        return classnames('modal', {
            'show': this.open === true
        });
    }
    ;
    overlayClassName() {
        return classnames('modal-overlay', {
            'show': this.open === true
        });
    }
    ;
    handleOpen(openVal) {
        const el = this.root.querySelector('.modal');
        if (!openVal) {
            focusLock.off(el);
        }
        else {
            focusLock.on(el);
            const btn = el.querySelector('.modal-close');
            setTimeout(function () {
                if (btn)
                    btn.focus();
            }, 10);
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.className() },
                h("button", { onClick: this.handleClose, class: "modal-close" },
                    h("mortar-icon", { kind: "close" })),
                h("div", { id: "modal-header", class: "header3" },
                    h("slot", { name: "headline" })),
                h("div", { id: "modal-description" },
                    h("slot", { name: "copy" })),
                h("div", { class: "modal-actions" },
                    h("slot", { name: "actions" }))),
            h("div", { onClick: this.handleClose, class: this.overlayClassName() })));
    }
    static get is() { return "mortar-modal"; }
    static get properties() { return {
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
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpen"
        }]; }
}

import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';
export class MortarAlert {
    constructor() {
        this.kind = 'success';
        this.open = false;
        this.headline = '';
        this.btnlabel = 'Close Window';
        this.btnkind = 'text';
        this.overlay = true;
        this.className = () => {
            return classnames('alert', `alert-${this.kind}`, {
                'show': this.open === true
            });
        };
        this.iconKind = () => {
            switch (this.kind) {
                case "error":
                    return "close";
                case "warning":
                    return "warning";
                case "success":
                    return "check";
                default:
                    return "close";
            }
        };
        this.overlayClassName = () => {
            return classnames('alert-overlay', {
                'show': this.open === true && this.overlay === true
            });
        };
        this.handleClose = () => {
            this.open = false;
        };
    }
    handleOpen(openVal) {
        const el = this.root.querySelector('.alert');
        if (!openVal) {
            focusLock.off(el);
        }
        else {
            focusLock.on(el);
            const btn = el.querySelector('.alert-close');
            setTimeout(function () {
                if (btn)
                    btn.focus();
            }, 10);
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.className(), role: "dialog", "aria-modal": "true", "aria-labelledby": "alert-header", "aria-describedby": "alert-description" },
                h("mortar-icon", { kind: this.iconKind() }),
                h("div", { id: "alert-header", class: "header3" },
                    h("slot", { name: "headline" })),
                h("div", { id: "alert-description" },
                    h("slot", { name: "copy" })),
                this.btnlabel && h("mortar-button", { elementclass: "alert-close", kind: this.btnkind, onClick: this.handleClose }, this.btnlabel),
                h("slot", { name: "action" })),
            h("div", { class: this.overlayClassName(), onClick: this.handleClose })));
    }
    static get is() { return "mortar-alert"; }
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
        },
        "headline": {
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
            "attribute": "headline",
            "reflect": false,
            "defaultValue": "''"
        },
        "btnlabel": {
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
            "attribute": "btnlabel",
            "reflect": false,
            "defaultValue": "'Close Window'"
        },
        "btnkind": {
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
            "attribute": "btnkind",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "overlay": {
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
            "attribute": "overlay",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpen"
        }]; }
}

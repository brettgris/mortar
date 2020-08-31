'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');
const index_esm = require('./index.esm-cc4d61ed.js');

const MortarAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.headline = '';
        this.btnlabel = 'Close Window';
        this.btnkind = 'text';
        this.overlay = true;
        this.className = () => {
            return index$1.classnames('alert', `alert-${this.kind}`, {
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
            return index$1.classnames('alert-overlay', {
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
            index_esm.focusLock.off(el);
        }
        else {
            index_esm.focusLock.on(el);
            const btn = el.querySelector('.alert-close');
            setTimeout(function () {
                if (btn)
                    btn.focus();
            }, 10);
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.className(), role: "dialog", "aria-modal": "true", "aria-labelledby": "alert-header", "aria-describedby": "alert-description" }, index.h("mortar-icon", { kind: this.iconKind() }), index.h("div", { id: "alert-header", class: "header3" }, index.h("slot", { name: "headline" })), index.h("div", { id: "alert-description" }, index.h("slot", { name: "copy" })), this.btnlabel && index.h("mortar-button", { elementclass: "alert-close", kind: this.btnkind, onClick: this.handleClose }, this.btnlabel), index.h("slot", { name: "action" })), index.h("div", { class: this.overlayClassName(), onClick: this.handleClose })));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
};

exports.mortar_alert = MortarAlert;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');
const index_esm = require('./index.esm-cc4d61ed.js');

const MortarModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.handleClose = () => {
            this.open = false;
        };
    }
    className() {
        return index$1.classnames('modal', {
            'show': this.open === true
        });
    }
    ;
    overlayClassName() {
        return index$1.classnames('modal-overlay', {
            'show': this.open === true
        });
    }
    ;
    handleOpen(openVal) {
        const el = this.root.querySelector('.modal');
        if (!openVal) {
            index_esm.focusLock.off(el);
        }
        else {
            index_esm.focusLock.on(el);
            const btn = el.querySelector('.modal-close');
            setTimeout(function () {
                if (btn)
                    btn.focus();
            }, 10);
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.className() }, index.h("button", { onClick: this.handleClose, class: "modal-close" }, index.h("mortar-icon", { kind: "close" })), index.h("div", { id: "modal-header", class: "header3" }, index.h("slot", { name: "headline" })), index.h("div", { id: "modal-description" }, index.h("slot", { name: "copy" })), index.h("div", { class: "modal-actions" }, index.h("slot", { name: "actions" }))), index.h("div", { onClick: this.handleClose, class: this.overlayClassName() })));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
};

exports.mortar_modal = MortarModal;

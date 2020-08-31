import { r as registerInstance, h, H as Host, g as getElement } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';
import { f as focusLock } from './index.esm-5ad7665d.js';

const MortarModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("div", { class: this.className() }, h("button", { onClick: this.handleClose, class: "modal-close" }, h("mortar-icon", { kind: "close" })), h("div", { id: "modal-header", class: "header3" }, h("slot", { name: "headline" })), h("div", { id: "modal-description" }, h("slot", { name: "copy" })), h("div", { class: "modal-actions" }, h("slot", { name: "actions" }))), h("div", { onClick: this.handleClose, class: this.overlayClassName() })));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
};

export { MortarModal as mortar_modal };

import { r as registerInstance, h, H as Host, g as getElement } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
import { f as focusLock } from './index.esm-267e7bcc.js';

const MortarAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("div", { class: this.className(), role: "dialog", "aria-modal": "true", "aria-labelledby": "alert-header", "aria-describedby": "alert-description" }, h("mortar-icon", { kind: this.iconKind() }), h("div", { id: "alert-header", class: "header3" }, h("slot", { name: "headline" })), h("div", { id: "alert-description" }, h("slot", { name: "copy" })), this.btnlabel && h("mortar-button", { elementclass: "alert-close", kind: this.btnkind, onClick: this.handleClose }, this.btnlabel), h("slot", { name: "action" })), h("div", { class: this.overlayClassName(), onClick: this.handleClose })));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
};

export { MortarAlert as mortar_alert };

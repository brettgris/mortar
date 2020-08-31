import { r as registerInstance, h, H as Host, g as getElement } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
import { f as focusLock } from './index.esm-267e7bcc.js';
var MortarModal = /** @class */ (function () {
    function MortarModal(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.open = false;
        this.handleClose = function () {
            _this.open = false;
        };
    }
    MortarModal.prototype.className = function () {
        return classnames('modal', {
            'show': this.open === true
        });
    };
    ;
    MortarModal.prototype.overlayClassName = function () {
        return classnames('modal-overlay', {
            'show': this.open === true
        });
    };
    ;
    MortarModal.prototype.handleOpen = function (openVal) {
        var el = this.root.querySelector('.modal');
        if (!openVal) {
            focusLock.off(el);
        }
        else {
            focusLock.on(el);
            var btn_1 = el.querySelector('.modal-close');
            setTimeout(function () {
                if (btn_1)
                    btn_1.focus();
            }, 10);
        }
    };
    MortarModal.prototype.render = function () {
        return (h(Host, null, h("div", { class: this.className() }, h("button", { onClick: this.handleClose, class: "modal-close" }, h("mortar-icon", { kind: "close" })), h("div", { id: "modal-header", class: "header3" }, h("slot", { name: "headline" })), h("div", { id: "modal-description" }, h("slot", { name: "copy" })), h("div", { class: "modal-actions" }, h("slot", { name: "actions" }))), h("div", { onClick: this.handleClose, class: this.overlayClassName() })));
    };
    Object.defineProperty(MortarModal.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarModal, "watchers", {
        get: function () {
            return {
                "open": ["handleOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarModal;
}());
export { MortarModal as mortar_modal };

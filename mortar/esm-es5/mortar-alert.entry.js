import { r as registerInstance, h, H as Host, g as getElement } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
import { f as focusLock } from './index.esm-267e7bcc.js';
var MortarAlert = /** @class */ (function () {
    function MortarAlert(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.headline = '';
        this.btnlabel = 'Close Window';
        this.btnkind = 'text';
        this.overlay = true;
        this.className = function () {
            return classnames('alert', "alert-" + _this.kind, {
                'show': _this.open === true
            });
        };
        this.iconKind = function () {
            switch (_this.kind) {
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
        this.overlayClassName = function () {
            return classnames('alert-overlay', {
                'show': _this.open === true && _this.overlay === true
            });
        };
        this.handleClose = function () {
            _this.open = false;
        };
    }
    MortarAlert.prototype.handleOpen = function (openVal) {
        var el = this.root.querySelector('.alert');
        if (!openVal) {
            focusLock.off(el);
        }
        else {
            focusLock.on(el);
            var btn_1 = el.querySelector('.alert-close');
            setTimeout(function () {
                if (btn_1)
                    btn_1.focus();
            }, 10);
        }
    };
    MortarAlert.prototype.render = function () {
        return (h(Host, null, h("div", { class: this.className(), role: "dialog", "aria-modal": "true", "aria-labelledby": "alert-header", "aria-describedby": "alert-description" }, h("mortar-icon", { kind: this.iconKind() }), h("div", { id: "alert-header", class: "header3" }, h("slot", { name: "headline" })), h("div", { id: "alert-description" }, h("slot", { name: "copy" })), this.btnlabel && h("mortar-button", { elementclass: "alert-close", kind: this.btnkind, onClick: this.handleClose }, this.btnlabel), h("slot", { name: "action" })), h("div", { class: this.overlayClassName(), onClick: this.handleClose })));
    };
    Object.defineProperty(MortarAlert.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarAlert, "watchers", {
        get: function () {
            return {
                "open": ["handleOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarAlert;
}());
export { MortarAlert as mortar_alert };

import { r as registerInstance, h, H as Host } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
var MortarButton = /** @class */ (function () {
    function MortarButton(hostRef) {
        registerInstance(this, hostRef);
        this.kind = 'primary';
        this.size = 'md';
        this.disabled = false;
        this.href = '';
        this.target = '_self';
        this.elementclass = '';
    }
    MortarButton.prototype.className = function () {
        return classnames('btn', "btn-" + this.kind, "btn-" + this.size, this.elementclass, {
            'disabled': this.disabled === true
        });
    };
    MortarButton.prototype.render = function () {
        return (h(Host, null, !this.href &&
            h("button", { class: this.className(), disabled: this.disabled === true }, h("slot", null)), this.href &&
            h("a", { class: this.className(), href: this.href, target: this.target }, h("slot", null))));
    };
    return MortarButton;
}());
export { MortarButton as mortar_button };

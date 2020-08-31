import { r as registerInstance, h, H as Host } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
var MortarMessage = /** @class */ (function () {
    function MortarMessage(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.className = function () {
            return classnames('message', "message-" + _this.kind, {
                'show': _this.open === true
            });
        };
    }
    MortarMessage.prototype.render = function () {
        return (h(Host, null, h("div", { class: this.className(), role: "alert" }, h("div", { class: "header5" }, h("slot", { name: "headline" })), h("div", { class: "copy" }, h("slot", { name: "copy" })))));
    };
    return MortarMessage;
}());
export { MortarMessage as mortar_message };

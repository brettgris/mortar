import { r as registerInstance, h } from './index-96277151.js';
var MortarCheckbox = /** @class */ (function () {
    function MortarCheckbox(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
    }
    MortarCheckbox.prototype.render = function () {
        return (h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: "checkbox" }, h("slot", null)));
    };
    return MortarCheckbox;
}());
export { MortarCheckbox as mortar_checkbox };

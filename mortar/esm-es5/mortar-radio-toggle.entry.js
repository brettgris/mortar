import { r as registerInstance, h } from './index-96277151.js';
var MortarRadioToggle = /** @class */ (function () {
    function MortarRadioToggle(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
    }
    MortarRadioToggle.prototype.render = function () {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-button-group" }, h("slot", null)));
    };
    return MortarRadioToggle;
}());
export { MortarRadioToggle as mortar_radio_toggle };

import { r as registerInstance, h } from './index-96277151.js';
var MortarRadio = /** @class */ (function () {
    function MortarRadio(hostRef) {
        registerInstance(this, hostRef);
        this.error = '';
        this.haserror = false;
        this.label = '';
    }
    MortarRadio.prototype.render = function () {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-group" }, h("slot", null)));
    };
    return MortarRadio;
}());
export { MortarRadio as mortar_radio };

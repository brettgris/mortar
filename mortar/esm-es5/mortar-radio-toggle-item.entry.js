import { r as registerInstance, h, H as Host } from './index-96277151.js';
var MortarRadioToggleItem = /** @class */ (function () {
    function MortarRadioToggleItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.value = '';
        this.disabled = false;
        this.required = false;
        this.group = '';
        this.name = '';
        this.checked = false;
        this.haserror = false;
        this.size = 'md';
        this.className = function () {
            return "btn btn-" + _this.size + " btn-secondary";
        };
    }
    MortarRadioToggleItem.prototype.render = function () {
        return (h(Host, null, h("input", { type: "radio", id: this.name, name: this.group, disabled: this.disabled, required: this.required, checked: this.checked, value: this.value }), h("label", { htmlFor: this.name, class: this.className() }, this.label)));
    };
    return MortarRadioToggleItem;
}());
export { MortarRadioToggleItem as mortar_radio_toggle_item };

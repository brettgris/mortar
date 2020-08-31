import { r as registerInstance, h } from './index-00dbcdb2.js';

const MortarRadioToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-button-group" }, h("slot", null)));
    }
};

export { MortarRadioToggle as mortar_radio_toggle };

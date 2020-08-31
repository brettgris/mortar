import { r as registerInstance, h } from './index-96277151.js';

const MortarRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = '';
        this.haserror = false;
        this.label = '';
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-group" }, h("slot", null)));
    }
};

export { MortarRadio as mortar_radio };

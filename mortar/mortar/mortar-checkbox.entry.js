import { r as registerInstance, h } from './index-00dbcdb2.js';

const MortarCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: "checkbox" }, h("slot", null)));
    }
};

export { MortarCheckbox as mortar_checkbox };

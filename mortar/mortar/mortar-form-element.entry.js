import { r as registerInstance, h } from './index-00dbcdb2.js';

const MortarFormElement = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.elementclass = '';
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.help = '';
        this.legend = '';
        this.disabled = false;
        this.legendId = '';
        this.name = '';
    }
    render() {
        return (h("fieldset", { class: this.elementclass, disabled: this.disabled === true }, this.label && h("label", { htmlFor: this.name }, this.label), this.legend && h("legend", { id: this.legendId }, this.legend), h("slot", null), this.help && h("div", { class: "helper-message show" }, this.help), this.haserror === true && h("div", { class: "error-message show", role: "alert" }, this.error)));
    }
};

export { MortarFormElement as mortar_form_element };

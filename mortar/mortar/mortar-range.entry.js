import { r as registerInstance, h } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.minlabel = '';
        this.maxlabel = '';
        this.minrequired = true;
        this.maxrequired = true;
        this.disabled = false;
        this.minplaceholder = '';
        this.maxplaceholder = '';
        this.name = 'input-range';
        this.minvalue = '';
        this.maxvalue = '';
        this.size = 'md';
        this.className = () => {
            return `range-min-max ${this.size}`;
        };
        this.inputClassName = () => {
            return classnames({
                'error': this.haserror === true
            });
        };
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: this.className() }, h("div", null, this.minlabel &&
            h("label", { htmlFor: `${this.name}-min`, class: "screen-reader-only" }, this.minlabel), h("input", { id: `${this.name}-min`, type: "text", disabled: this.disabled === true, required: this.minrequired, class: this.inputClassName(), placeholder: this.minplaceholder, value: this.minvalue }), this.maxlabel &&
            h("label", { htmlFor: `${this.name}-max`, class: "screen-reader-only" }, this.maxlabel), h("input", { id: `${this.name}-max`, type: "text", disabled: this.disabled === true, required: this.maxrequired, class: this.inputClassName(), placeholder: this.maxplaceholder, value: this.maxvalue }))));
    }
};

export { MortarRange as mortar_range };

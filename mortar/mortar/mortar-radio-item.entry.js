import { r as registerInstance, h, H as Host } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarRadioItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.value = '';
        this.disabled = false;
        this.required = true;
        this.group = '';
        this.name = '';
        this.checked = false;
        this.light = true;
        this.haserror = false;
        this.className = () => {
            return classnames('radio-default', {
                'error': this.haserror
            });
        };
    }
    render() {
        return (h(Host, null, h("input", { type: "radio", id: this.name, class: this.className(), name: this.group, disabled: this.disabled === true, required: this.required === true, checked: this.checked === true, value: this.value }), h("label", { htmlFor: this.name }, !this.light && this.label, this.light &&
            h("span", { class: "light-text" }, this.label))));
    }
};

export { MortarRadioItem as mortar_radio_item };

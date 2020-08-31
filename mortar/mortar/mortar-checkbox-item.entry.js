import { r as registerInstance, h, H as Host } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarCheckboxItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.value = '';
        this.disabled = false;
        this.required = true;
        this.group = '';
        this.name = '';
        this.checked = false;
        this.indeterminate = false;
        this.haserror = false;
        this.className = () => {
            return classnames({
                'checkbox-default': this.indeterminate !== true,
                'checkbox-indeterminate': this.indeterminate === true,
                'error': this.haserror === true
            });
        };
    }
    render() {
        return (h(Host, null, h("input", { type: "checkbox", id: this.name, class: this.className(), disabled: this.disabled === true, required: this.required === true, checked: this.checked === true }), h("label", { htmlFor: this.name }, this.label)));
    }
};

export { MortarCheckboxItem as mortar_checkbox_item };

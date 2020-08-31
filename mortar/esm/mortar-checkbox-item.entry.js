import { r as registerInstance, h, H as Host } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';

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

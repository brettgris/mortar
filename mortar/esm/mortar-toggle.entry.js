import { r as registerInstance, h } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';

const MortarToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.name = 'toggle';
        this.disabled = false;
        this.required = false;
        this.size = 'md';
        this.checked = false;
        this.className = () => {
            return classnames('toggle', `toggle-${this.size}`, {
                'error': this.haserror
            });
        };
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "toggle-wrapper", name: this.name }, h("input", { class: this.className(), type: "checkbox", name: this.name, id: this.name, disabled: this.disabled, required: this.required, checked: this.checked }), h("label", { htmlFor: this.name })));
    }
};

export { MortarToggle as mortar_toggle };

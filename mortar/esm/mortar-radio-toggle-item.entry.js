import { r as registerInstance, h, H as Host } from './index-96277151.js';

const MortarRadioToggleItem = class {
    constructor(hostRef) {
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
        this.className = () => {
            return `btn btn-${this.size} btn-secondary`;
        };
    }
    render() {
        return (h(Host, null, h("input", { type: "radio", id: this.name, name: this.group, disabled: this.disabled, required: this.required, checked: this.checked, value: this.value }), h("label", { htmlFor: this.name, class: this.className() }, this.label)));
    }
};

export { MortarRadioToggleItem as mortar_radio_toggle_item };

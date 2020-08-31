import { r as registerInstance, h } from './index-96277151.js';

const MortarInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'md';
        this.error = '';
        this.haserror = false;
        this.label = '';
        this.help = '';
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
        this.mask = '';
        this.type = "text";
        this.inputmode = 'text';
        this.pattern = '';
        this.name = 'input';
    }
    className() {
        return `text ${this.size}`;
    }
    ;
    render() {
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: this.className(), name: this.name }, h("masked-input", { elementclass: (this.haserror) ? 'error' : '', value: this.value, placeholder: this.placeholder, type: this.mask, inputmode: this.inputmode, pattern: this.pattern, name: this.name })));
    }
};

export { MortarInput as mortar_input };

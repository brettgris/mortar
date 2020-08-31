import { r as registerInstance, h } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';

const MortarTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.maxlength = '';
        this.message = (amount) => {
            return `${amount} characters remaining`;
        };
        this.name = 'textarea';
        this.disabled = false;
        this.required = true;
        this.value = '';
        this.placeholder = '';
        this.className = () => {
            return classnames({
                error: this.haserror
            });
        };
        this.handleInput = () => {
            this.value = this.inputEl.value;
        };
        this.handleRef = (ref) => {
            this.inputEl = ref;
        };
    }
    handleValue(val) {
        this.inputEl.value = val;
    }
    render() {
        const n = Number(this.maxlength);
        const text = this.value.slice(0, n);
        const remaining = n - text.length;
        return (h("mortar-form-element", { label: this.label, error: this.error, haserror: this.haserror, elementclass: "text-area", name: this.name }, h("textarea", { class: this.className(), id: this.name, disabled: this.disabled === true, required: this.required === true, placeholder: this.placeholder, onInput: this.handleInput, ref: this.handleRef }, text), this.maxlength &&
            h("div", { class: "character-message show" }, this.message(remaining))));
    }
    static get watchers() { return {
        "value": ["handleValue"]
    }; }
};

export { MortarTextarea as mortar_textarea };

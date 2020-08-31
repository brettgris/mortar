'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index$1.classnames({
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
        return (index.h("mortar-form-element", { label: this.label, error: this.error, haserror: this.haserror, elementclass: "text-area", name: this.name }, index.h("textarea", { class: this.className(), id: this.name, disabled: this.disabled === true, required: this.required === true, placeholder: this.placeholder, onInput: this.handleInput, ref: this.handleRef }, text), this.maxlength &&
            index.h("div", { class: "character-message show" }, this.message(remaining))));
    }
    static get watchers() { return {
        "value": ["handleValue"]
    }; }
};

exports.mortar_textarea = MortarTextarea;

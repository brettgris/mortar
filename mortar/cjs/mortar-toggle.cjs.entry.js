'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.name = 'toggle';
        this.disabled = false;
        this.required = false;
        this.size = 'md';
        this.checked = false;
        this.className = () => {
            return index$1.classnames('toggle', `toggle-${this.size}`, {
                'error': this.haserror
            });
        };
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "toggle-wrapper", name: this.name }, index.h("input", { class: this.className(), type: "checkbox", name: this.name, id: this.name, disabled: this.disabled, required: this.required, checked: this.checked }), index.h("label", { htmlFor: this.name })));
    }
};

exports.mortar_toggle = MortarToggle;

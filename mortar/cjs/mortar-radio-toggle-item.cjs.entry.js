'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarRadioToggleItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, null, index.h("input", { type: "radio", id: this.name, name: this.group, disabled: this.disabled, required: this.required, checked: this.checked, value: this.value }), index.h("label", { htmlFor: this.name, class: this.className() }, this.label)));
    }
};

exports.mortar_radio_toggle_item = MortarRadioToggleItem;

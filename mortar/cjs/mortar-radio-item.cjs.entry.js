'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarRadioItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index$1.classnames('radio-default', {
                'error': this.haserror
            });
        };
    }
    render() {
        return (index.h(index.Host, null, index.h("input", { type: "radio", id: this.name, class: this.className(), name: this.group, disabled: this.disabled === true, required: this.required === true, checked: this.checked === true, value: this.value }), index.h("label", { htmlFor: this.name }, !this.light && this.label, this.light &&
            index.h("span", { class: "light-text" }, this.label))));
    }
};

exports.mortar_radio_item = MortarRadioItem;

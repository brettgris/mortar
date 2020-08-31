'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarCheckboxItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index$1.classnames({
                'checkbox-default': this.indeterminate !== true,
                'checkbox-indeterminate': this.indeterminate === true,
                'error': this.haserror === true
            });
        };
    }
    render() {
        return (index.h(index.Host, null, index.h("input", { type: "checkbox", id: this.name, class: this.className(), disabled: this.disabled === true, required: this.required === true, checked: this.checked === true }), index.h("label", { htmlFor: this.name }, this.label)));
    }
};

exports.mortar_checkbox_item = MortarCheckboxItem;

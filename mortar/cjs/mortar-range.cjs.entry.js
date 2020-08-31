'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.minlabel = '';
        this.maxlabel = '';
        this.minrequired = true;
        this.maxrequired = true;
        this.disabled = false;
        this.minplaceholder = '';
        this.maxplaceholder = '';
        this.name = 'input-range';
        this.minvalue = '';
        this.maxvalue = '';
        this.size = 'md';
        this.className = () => {
            return `range-min-max ${this.size}`;
        };
        this.inputClassName = () => {
            return index$1.classnames({
                'error': this.haserror === true
            });
        };
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: this.className() }, index.h("div", null, this.minlabel &&
            index.h("label", { htmlFor: `${this.name}-min`, class: "screen-reader-only" }, this.minlabel), index.h("input", { id: `${this.name}-min`, type: "text", disabled: this.disabled === true, required: this.minrequired, class: this.inputClassName(), placeholder: this.minplaceholder, value: this.minvalue }), this.maxlabel &&
            index.h("label", { htmlFor: `${this.name}-max`, class: "screen-reader-only" }, this.maxlabel), index.h("input", { id: `${this.name}-max`, type: "text", disabled: this.disabled === true, required: this.maxrequired, class: this.inputClassName(), placeholder: this.maxplaceholder, value: this.maxvalue }))));
    }
};

exports.mortar_range = MortarRange;

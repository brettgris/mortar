'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: "checkbox" }, index.h("slot", null)));
    }
};

exports.mortar_checkbox = MortarCheckbox;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = '';
        this.haserror = false;
        this.label = '';
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-group" }, index.h("slot", null)));
    }
};

exports.mortar_radio = MortarRadio;

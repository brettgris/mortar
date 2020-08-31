'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarRadioToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-button-group" }, index.h("slot", null)));
    }
};

exports.mortar_radio_toggle = MortarRadioToggle;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'md';
        this.error = '';
        this.haserror = false;
        this.label = '';
        this.help = '';
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
        this.mask = '';
        this.type = "text";
        this.inputmode = 'text';
        this.pattern = '';
        this.name = 'input';
    }
    className() {
        return `text ${this.size}`;
    }
    ;
    render() {
        return (index.h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: this.className(), name: this.name }, index.h("masked-input", { elementclass: (this.haserror) ? 'error' : '', value: this.value, placeholder: this.placeholder, type: this.mask, inputmode: this.inputmode, pattern: this.pattern, name: this.name })));
    }
};

exports.mortar_input = MortarInput;

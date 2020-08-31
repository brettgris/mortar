'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.kind = 'primary';
        this.size = 'md';
        this.disabled = false;
        this.href = '';
        this.target = '_self';
        this.elementclass = '';
    }
    className() {
        return index$1.classnames('btn', `btn-${this.kind}`, `btn-${this.size}`, this.elementclass, {
            'disabled': this.disabled === true
        });
    }
    render() {
        return (index.h(index.Host, null, !this.href &&
            index.h("button", { class: this.className(), disabled: this.disabled === true }, index.h("slot", null)), this.href &&
            index.h("a", { class: this.className(), href: this.href, target: this.target }, index.h("slot", null))));
    }
};

exports.mortar_button = MortarButton;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.className = () => {
            return index$1.classnames('message', `message-${this.kind}`, {
                'show': this.open === true
            });
        };
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.className(), role: "alert" }, index.h("div", { class: "header5" }, index.h("slot", { name: "headline" })), index.h("div", { class: "copy" }, index.h("slot", { name: "copy" })))));
    }
};

exports.mortar_message = MortarMessage;

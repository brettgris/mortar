'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarFormElement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.elementclass = '';
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.help = '';
        this.legend = '';
        this.disabled = false;
        this.legendId = '';
        this.name = '';
    }
    render() {
        return (index.h("fieldset", { class: this.elementclass, disabled: this.disabled === true }, this.label && index.h("label", { htmlFor: this.name }, this.label), this.legend && index.h("legend", { id: this.legendId }, this.legend), index.h("slot", null), this.help && index.h("div", { class: "helper-message show" }, this.help), this.haserror === true && index.h("div", { class: "error-message show", role: "alert" }, this.error)));
    }
};

exports.mortar_form_element = MortarFormElement;

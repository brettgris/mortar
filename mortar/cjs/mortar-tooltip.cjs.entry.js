'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = "top-right";
        this.transition = true;
        this.hover = true;
        this.open = false;
    }
    classname() {
        return index$1.classnames('mortar-tooltip-text', this.position, {
            'transition': this.transition === true,
            'hover': this.hover === true,
            'mortar-tooltip-open': this.open === true
        });
    }
    render() {
        return (index.h(index.Host, null, index.h("span", { class: "mortar-tooltip", tabindex: "0" }, index.h("span", { class: "mortar-tooltip-icon" }, index.h("slot", { name: "icon" })), index.h("span", { class: this.classname(), role: "status" }, index.h("span", { class: "mortar-tooltip-inner-text-container" }, index.h("span", { class: "mortar-tooltip-title" }, index.h("slot", { name: "headline" })), index.h("slot", { name: "copy" }))))));
    }
};

exports.mortar_tooltip = MortarTooltip;

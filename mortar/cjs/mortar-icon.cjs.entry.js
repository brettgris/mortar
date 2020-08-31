'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');

const MortarIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.kind = "";
        this.arialabel = "";
        this.class = "";
    }
    className() {
        return `storyicon ${this.kind}StoryIcon ${this.class}`;
    }
    render() {
        return (index.h(index.Host, null, index.h("i", { class: this.className(), "aria-label": this.arialabel })));
    }
};

exports.mortar_icon = MortarIcon;

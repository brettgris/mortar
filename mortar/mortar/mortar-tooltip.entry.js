import { r as registerInstance, h, H as Host } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = "top-right";
        this.transition = true;
        this.hover = true;
        this.open = false;
    }
    classname() {
        return classnames('mortar-tooltip-text', this.position, {
            'transition': this.transition === true,
            'hover': this.hover === true,
            'mortar-tooltip-open': this.open === true
        });
    }
    render() {
        return (h(Host, null, h("span", { class: "mortar-tooltip", tabindex: "0" }, h("span", { class: "mortar-tooltip-icon" }, h("slot", { name: "icon" })), h("span", { class: this.classname(), role: "status" }, h("span", { class: "mortar-tooltip-inner-text-container" }, h("span", { class: "mortar-tooltip-title" }, h("slot", { name: "headline" })), h("slot", { name: "copy" }))))));
    }
};

export { MortarTooltip as mortar_tooltip };

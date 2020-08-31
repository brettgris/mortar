import { r as registerInstance, h, g as getElement } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarDropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.value = '';
        this.className = () => {
            return classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !this.disabled,
                'dropdown-item-disabled': this.disabled,
                'is-highlighted': !this.disabled && this.highlighted
            });
        };
    }
    async getEl() {
        return this.root;
    }
    render() {
        return (h("div", { class: this.className(), role: "option", "aria-selected": this.selected, "data-value": this.value, "data-disabled": this.disabled }, this.label));
    }
    get root() { return getElement(this); }
};

export { MortarDropdownItem as mortar_dropdown_item };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c4c0ae9.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'md';
        this.label = '';
        this.help = '';
        this.haserror = false;
        this.error = '';
        this.placeholder = '';
        this.disabled = false;
        this.open = false;
        this.focused = false;
        this.highlight = -1;
        this.value = null;
        this.options = [];
        this.optionsKeys = {
            'value': 'value',
            'label': 'label',
            'disabled': 'disabled'
        };
        this.className = () => {
            return index$1.classnames('dropdown-outer', `${this.size}`, {
                'is-open': this.open,
                'is-focused': this.focused,
                'is-disabled': this.disabled,
                'has-error': this.haserror
            });
        };
        this.dropClassName = () => {
            return index$1.classnames('dropdown-list', 'dropdown-list-dropdown', {
                'is-active': this.open
            });
        };
        this.displayClassName = () => {
            return index$1.classnames('dropdown-item', 'dropdown-item-selectable', {
                'dropdown-placeholder': !this.value
            });
        };
        this.handleClick = () => {
            if (!this.disabled) {
                this.open = !this.open;
            }
        };
        this.handleFocus = () => {
            if (!this.disabled) {
                this.focused = true;
            }
        };
        this.handleBlur = () => {
            if (!this.disabled) {
                this.focused = false;
                this.open = false;
            }
        };
        this.handleItemSelect = (option) => {
            if (!option[this.optionsKeys['disabled']]) {
                this.value = option;
                this.itemSelect.emit(option);
                this.open = false;
            }
        };
        this.handleDropdownRef = (ref) => {
            this.dropdownEl = ref;
        };
        this.loadOptions = () => {
            const options = Array.prototype.slice.call(this.el.querySelectorAll('option'));
            options.forEach((v) => {
                const label = v.innerHTML;
                const value = v.getAttribute('value');
                const disabled = v.getAttribute('disabled');
                const selected = v.getAttribute('selected');
                const obj = {};
                obj[this.optionsKeys['label']] = label || value || '';
                obj[this.optionsKeys['value']] = value || label || '';
                obj[this.optionsKeys['disabled']] = (disabled !== null);
                this.options.push(obj);
                if (selected !== null && disabled === null) {
                    this.value = obj;
                }
                this.el.removeChild(v);
            });
        };
        this.getAvailable = () => {
            const arr = this.options.map((o, k) => {
                return {
                    o: o,
                    k: k
                };
            });
            return arr.filter((o) => !o.o[this.optionsKeys['disabled']]);
        };
        this.clearHighlight = () => {
            this.highlight = -1;
        };
        this.setHighlight = (next) => {
            const arr = this.getAvailable();
            if (next) {
                if (this.highlight === -1) {
                    if (this.value) {
                        const o = arr.find(v => {
                            return (this.value[this.optionsKeys['value']] === v.o[this.optionsKeys['value']]);
                        });
                        this.highlight = (o) ? o.k : arr[0].k;
                    }
                    else {
                        this.highlight = arr[0].k;
                    }
                }
                else {
                    const n = arr.find((v) => v.k > this.highlight);
                    this.highlight = (n) ? n.k : -1;
                }
            }
            else {
                const rArr = arr.reverse();
                if (this.highlight === -1) {
                    if (this.value) {
                        const o = rArr.find(v => {
                            return (this.value[this.optionsKeys['value']] === v.o[this.optionsKeys['value']]);
                        });
                        this.highlight = (o) ? o.k : rArr[0].k;
                    }
                    else {
                        this.highlight = rArr[0].k;
                    }
                }
                else {
                    const p = rArr.find((v) => v.k < this.highlight);
                    this.highlight = (p) ? p.k : -1;
                }
            }
            if (this.highlight >= 0) {
                const listEl = this.el.querySelector('.dropdown-list[role="listbox"]');
                const itemEl = this.el.querySelector(`mortar-dropdown-item:nth-child(${this.highlight + 1})`);
                listEl.scrollTop = itemEl.offsetTop;
            }
        };
        this.selectHighlight = () => {
            if (this.highlight > -1) {
                this.handleItemSelect(this.options[this.highlight]);
            }
        };
        this.itemSelect = index.createEvent(this, "itemSelect", 7);
    }
    handleOutsideClick(evt) {
        if (this.open && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
            this.open = false;
        }
    }
    componentWillLoad() {
        this.loadOptions();
    }
    handleOpen(openValue) {
        if (!openValue) {
            this.clearHighlight();
        }
        else {
            if (this.value) {
                const key = this.options.findIndex(v => v.value === this.value.value && v.label === this.value.label);
                if (key >= 0) {
                    const listEl = this.el.querySelector('.dropdown-list[role="listbox"]');
                    const itemEl = this.el.querySelector(`mortar-dropdown-item:nth-child(${key + 1})`);
                    listEl.scrollTop = itemEl.offsetTop;
                }
            }
        }
    }
    handleKeySelect(evt) {
        if (this.open) {
            //UP
            if (evt.keyCode === 38) {
                evt.preventDefault();
                this.setHighlight(false);
            }
            //DOWN 
            if (evt.keyCode === 40) {
                evt.preventDefault();
                this.setHighlight(true);
            }
            //SPACE OR ENTER SELECT
            if (evt.keyCode === 13 || evt.keyCode === 32) {
                evt.preventDefault();
                this.selectHighlight();
                this.open = false;
            }
            if (evt.keyCode === 27) {
                evt.preventDefault();
                this.open = false;
            }
        }
        else if (this.focused) {
            //SPACE OR ENTER OPEN SELECT MENU WHEN FOCUSED
            if (evt.keyCode === 13 || evt.keyCode === 32) {
                evt.preventDefault();
                this.open = true;
            }
        }
    }
    render() {
        return (index.h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: "dropdown", ref: this.handleDropdownRef }, index.h("div", { class: this.className(), tabindex: "0", role: "listbox", "aria-haspopup": "true", "aria-expanded": this.open, onFocus: this.handleFocus, onBlur: this.handleBlur }, index.h("div", { class: "dropdown-inner", onClick: this.handleClick }, index.h("div", { class: "dropdown-list dropdown-list-single" }, index.h("div", { class: this.displayClassName(), "aria-selected": "true" }, (this.value) ? this.value[this.optionsKeys['label']] : this.placeholder))), index.h("div", { class: this.dropClassName(), "aria-expanded": this.open }, index.h("div", { class: "dropdown-list", role: "listbox" }, this.options.map((option, key) => {
            return (index.h("mortar-dropdown-item", { highlighted: this.highlight === key, selected: (this.highlight > -1) ? (this.highlight === key) : (this.value && this.value.value === option.value), disabled: option[this.optionsKeys['disabled']], label: option[this.optionsKeys['label']], onClick: () => this.handleItemSelect(option) }));
        }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
};

const DropdownItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.className = () => {
            return index$1.classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !this.disabled,
                'dropdown-item-disabled': this.disabled,
                'is-highlighted': !this.disabled && this.highlighted
            });
        };
    }
    render() {
        return (index.h("div", { class: this.className(), role: "option", "aria-selected": this.selected }, this.label));
    }
};

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
        return (index.h("fieldset", { class: this.elementclass, disabled: this.disabled }, this.label && index.h("label", { htmlFor: this.name }, this.label), this.legend && index.h("legend", { id: this.legendId }, this.legend), index.h("slot", null), this.help && index.h("div", { class: "helper-message show" }, this.help), this.haserror && index.h("div", { class: "error-message show", role: "alert" }, this.error)));
    }
};

exports.mortar_dropdown = MortarDropdown;
exports.mortar_dropdown_item = DropdownItem;
exports.mortar_form_element = MortarFormElement;

import { Component, h, Prop, Listen, Watch, Event, Element } from '@stencil/core';
import classnames from 'classnames';
export class MortarDropdown {
    constructor() {
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
        this.value = '';
        this.className = () => {
            return classnames('dropdown-outer', `${this.size}`, {
                'is-open': this.open === true,
                'is-focused': this.focused === true,
                'is-disabled': this.disabled === true,
                'has-error': this.haserror === true
            });
        };
        this.dropClassName = () => {
            return classnames('dropdown-list', 'dropdown-list-dropdown', {
                'is-active': this.open === true
            });
        };
        this.displayClassName = () => {
            return classnames('dropdown-item', 'dropdown-item-selectable', {
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
        this.handleListClick = (evt) => {
            const el = evt.target;
            const val = el.getAttribute('data-value');
            const disabled = el.getAttribute('data-disabled');
            if (disabled === null) {
                const o = this.options.find(o => o.value === val);
                if (o) {
                    this.handleItemSelect(o);
                }
            }
        };
        this.handleItemSelect = (option) => {
            if (option.disabled !== true) {
                const c = this.getCurrent();
                if (c) {
                    c.selected = false;
                }
                option.selected = true;
                this.value = option.value;
                this.itemSelect.emit(option);
                this.open = false;
            }
        };
        this.handleDropdownRef = (ref) => {
            this.dropdownEl = ref;
        };
        this.loadOptions = () => {
            this.options = Array.prototype.slice.call(this.el.querySelectorAll('mortar-dropdown-item'));
            const current = this.options.find((o) => o.selected === true);
            if (current) {
                this.value = current.value;
            }
        };
        this.getAvailable = () => {
            return this.options.reduce((t, o, k) => {
                if (!o.disabled) {
                    t.push({
                        o: o,
                        k: k
                    });
                }
                return t;
            }, []);
        };
        this.getCurrent = () => {
            if (this.value && this.options) {
                const o = this.options.find(o => o.value === this.value);
                return o || null;
            }
            else {
                return null;
            }
        };
        this.clearHighlight = () => {
            const el = this.options[this.highlight];
            if (el) {
                el.highlighted = false;
            }
            this.highlight = -1;
        };
        this.setHighlight = (next) => {
            const arr = this.getAvailable();
            if (next) {
                if (this.highlight === -1) {
                    let k = 0;
                    if (this.value) {
                        const i = arr.find(o => o.o.value === this.value);
                        k = i.k;
                    }
                    this.highlight = k;
                    this.options[k].highlighted = true;
                }
                else {
                    this.options[this.highlight].highlighted = false;
                    const n = arr.find((v) => v.k > this.highlight);
                    this.highlight = (n) ? n.k : arr[0].k;
                    this.options[this.highlight].highlighted = true;
                }
            }
            else {
                const rArr = arr.reverse();
                if (this.highlight === -1) {
                    let k = 0;
                    if (this.value) {
                        const i = rArr.find(o => o.o.value === this.value);
                        k = i.k;
                    }
                    this.highlight = k;
                    this.options[k].highlighted = true;
                }
                else {
                    this.options[this.highlight].highlighted = false;
                    const n = rArr.find((v) => v.k < this.highlight);
                    this.highlight = (n) ? n.k : rArr[0].k;
                    this.options[this.highlight].highlighted = true;
                }
            }
            if (this.highlight > -1) {
                this.options[this.highlight].getEl().then(v => {
                    const listEl = this.el.querySelector('.dropdown-list[role="listbox"]');
                    listEl.scrollTop = v.offsetTop;
                });
            }
        };
        this.selectHighlight = () => {
            if (this.highlight > -1) {
                this.handleItemSelect(this.options[this.highlight]);
            }
        };
    }
    handleOutsideClick(evt) {
        if (this.open === true && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
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
                const c = this.getCurrent();
                if (c) {
                    c.getEl().then((el) => {
                        const listEl = this.el.querySelector('.dropdown-list[role="listbox"]');
                        listEl.scrollTop = el.offsetTop;
                    });
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
        const current = this.getCurrent();
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: "dropdown", ref: this.handleDropdownRef },
            h("div", { class: this.className(), tabindex: "0", role: "listbox", "aria-haspopup": "true", "aria-expanded": this.open, onFocus: this.handleFocus, onBlur: this.handleBlur },
                h("div", { class: "dropdown-inner", onClick: this.handleClick },
                    h("div", { class: "dropdown-list dropdown-list-single" },
                        h("div", { class: this.displayClassName(), "aria-selected": "true" }, (current) ? current.label : this.placeholder))),
                h("div", { class: this.dropClassName(), "aria-expanded": this.open },
                    h("div", { class: "dropdown-list", role: "listbox", onClick: this.handleListClick },
                        h("slot", null))))));
    }
    static get is() { return "mortar-dropdown"; }
    static get properties() { return {
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'md'"
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "help": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "help",
            "reflect": false,
            "defaultValue": "''"
        },
        "haserror": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "haserror",
            "reflect": false,
            "defaultValue": "false"
        },
        "error": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "''"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "open": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        },
        "focused": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "focused",
            "reflect": false,
            "defaultValue": "false"
        },
        "highlight": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "highlight",
            "reflect": false,
            "defaultValue": "-1"
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "itemSelect",
            "name": "itemSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Object",
                "resolved": "Object",
                "references": {
                    "Object": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpen"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleOutsideClick",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeySelect",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
/*
{
                this.options.map((option, key) => {
                  return (
                    <mortar-dropdown-item
                      highlighted={this.highlight === key}
                      selected={(this.highlight > -1) ? (this.highlight === key) : (this.value && this.value.value === option.value)}
                      disabled={option[this.optionsKeys['disabled']]}
                      label={option[this.optionsKeys['label']]}
                      onClick={() => this.handleItemSelect(option)}
                    ></mortar-dropdown-item>
                  )
                })
              }
              */ 

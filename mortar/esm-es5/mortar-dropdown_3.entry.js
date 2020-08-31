import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f58b287b.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
var MortarDropdown = /** @class */ (function () {
    function MortarDropdown(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
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
        this.className = function () {
            return classnames('dropdown-outer', "" + _this.size, {
                'is-open': _this.open,
                'is-focused': _this.focused,
                'is-disabled': _this.disabled,
                'has-error': _this.haserror
            });
        };
        this.dropClassName = function () {
            return classnames('dropdown-list', 'dropdown-list-dropdown', {
                'is-active': _this.open
            });
        };
        this.displayClassName = function () {
            return classnames('dropdown-item', 'dropdown-item-selectable', {
                'dropdown-placeholder': !_this.value
            });
        };
        this.handleClick = function () {
            if (!_this.disabled) {
                _this.open = !_this.open;
            }
        };
        this.handleFocus = function () {
            if (!_this.disabled) {
                _this.focused = true;
            }
        };
        this.handleBlur = function () {
            if (!_this.disabled) {
                _this.focused = false;
                _this.open = false;
            }
        };
        this.handleItemSelect = function (option) {
            if (!option[_this.optionsKeys['disabled']]) {
                _this.value = option;
                _this.itemSelect.emit(option);
                _this.open = false;
            }
        };
        this.handleDropdownRef = function (ref) {
            _this.dropdownEl = ref;
        };
        this.loadOptions = function () {
            var options = Array.prototype.slice.call(_this.el.querySelectorAll('option'));
            options.forEach(function (v) {
                var label = v.innerHTML;
                var value = v.getAttribute('value');
                var disabled = v.getAttribute('disabled');
                var selected = v.getAttribute('selected');
                var obj = {};
                obj[_this.optionsKeys['label']] = label || value || '';
                obj[_this.optionsKeys['value']] = value || label || '';
                obj[_this.optionsKeys['disabled']] = (disabled !== null);
                _this.options.push(obj);
                if (selected !== null && disabled === null) {
                    _this.value = obj;
                }
                _this.el.removeChild(v);
            });
        };
        this.getAvailable = function () {
            var arr = _this.options.map(function (o, k) {
                return {
                    o: o,
                    k: k
                };
            });
            return arr.filter(function (o) { return !o.o[_this.optionsKeys['disabled']]; });
        };
        this.clearHighlight = function () {
            _this.highlight = -1;
        };
        this.setHighlight = function (next) {
            var arr = _this.getAvailable();
            if (next) {
                if (_this.highlight === -1) {
                    if (_this.value) {
                        var o = arr.find(function (v) {
                            return (_this.value[_this.optionsKeys['value']] === v.o[_this.optionsKeys['value']]);
                        });
                        _this.highlight = (o) ? o.k : arr[0].k;
                    }
                    else {
                        _this.highlight = arr[0].k;
                    }
                }
                else {
                    var n = arr.find(function (v) { return v.k > _this.highlight; });
                    _this.highlight = (n) ? n.k : -1;
                }
            }
            else {
                var rArr = arr.reverse();
                if (_this.highlight === -1) {
                    if (_this.value) {
                        var o = rArr.find(function (v) {
                            return (_this.value[_this.optionsKeys['value']] === v.o[_this.optionsKeys['value']]);
                        });
                        _this.highlight = (o) ? o.k : rArr[0].k;
                    }
                    else {
                        _this.highlight = rArr[0].k;
                    }
                }
                else {
                    var p = rArr.find(function (v) { return v.k < _this.highlight; });
                    _this.highlight = (p) ? p.k : -1;
                }
            }
            if (_this.highlight >= 0) {
                var listEl = _this.el.querySelector('.dropdown-list[role="listbox"]');
                var itemEl = _this.el.querySelector("mortar-dropdown-item:nth-child(" + (_this.highlight + 1) + ")");
                listEl.scrollTop = itemEl.offsetTop;
            }
        };
        this.selectHighlight = function () {
            if (_this.highlight > -1) {
                _this.handleItemSelect(_this.options[_this.highlight]);
            }
        };
        this.itemSelect = createEvent(this, "itemSelect", 7);
    }
    MortarDropdown.prototype.handleOutsideClick = function (evt) {
        if (this.open && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
            this.open = false;
        }
    };
    MortarDropdown.prototype.componentWillLoad = function () {
        this.loadOptions();
    };
    MortarDropdown.prototype.handleOpen = function (openValue) {
        var _this = this;
        if (!openValue) {
            this.clearHighlight();
        }
        else {
            if (this.value) {
                var key = this.options.findIndex(function (v) { return v.value === _this.value.value && v.label === _this.value.label; });
                if (key >= 0) {
                    var listEl = this.el.querySelector('.dropdown-list[role="listbox"]');
                    var itemEl = this.el.querySelector("mortar-dropdown-item:nth-child(" + (key + 1) + ")");
                    listEl.scrollTop = itemEl.offsetTop;
                }
            }
        }
    };
    MortarDropdown.prototype.handleKeySelect = function (evt) {
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
    };
    MortarDropdown.prototype.render = function () {
        var _this = this;
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: "dropdown", ref: this.handleDropdownRef }, h("div", { class: this.className(), tabindex: "0", role: "listbox", "aria-haspopup": "true", "aria-expanded": this.open, onFocus: this.handleFocus, onBlur: this.handleBlur }, h("div", { class: "dropdown-inner", onClick: this.handleClick }, h("div", { class: "dropdown-list dropdown-list-single" }, h("div", { class: this.displayClassName(), "aria-selected": "true" }, (this.value) ? this.value[this.optionsKeys['label']] : this.placeholder))), h("div", { class: this.dropClassName(), "aria-expanded": this.open }, h("div", { class: "dropdown-list", role: "listbox" }, this.options.map(function (option, key) {
            return (h("mortar-dropdown-item", { highlighted: _this.highlight === key, selected: (_this.highlight > -1) ? (_this.highlight === key) : (_this.value && _this.value.value === option.value), disabled: option[_this.optionsKeys['disabled']], label: option[_this.optionsKeys['label']], onClick: function () { return _this.handleItemSelect(option); } }));
        }))))));
    };
    Object.defineProperty(MortarDropdown.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarDropdown, "watchers", {
        get: function () {
            return {
                "open": ["handleOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDropdown;
}());
var DropdownItem = /** @class */ (function () {
    function DropdownItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.className = function () {
            return classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !_this.disabled,
                'dropdown-item-disabled': _this.disabled,
                'is-highlighted': !_this.disabled && _this.highlighted
            });
        };
    }
    DropdownItem.prototype.render = function () {
        return (h("div", { class: this.className(), role: "option", "aria-selected": this.selected }, this.label));
    };
    return DropdownItem;
}());
var MortarFormElement = /** @class */ (function () {
    function MortarFormElement(hostRef) {
        registerInstance(this, hostRef);
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
    MortarFormElement.prototype.render = function () {
        return (h("fieldset", { class: this.elementclass, disabled: this.disabled }, this.label && h("label", { htmlFor: this.name }, this.label), this.legend && h("legend", { id: this.legendId }, this.legend), h("slot", null), this.help && h("div", { class: "helper-message show" }, this.help), this.haserror && h("div", { class: "error-message show", role: "alert" }, this.error)));
    };
    return MortarFormElement;
}());
export { MortarDropdown as mortar_dropdown, DropdownItem as mortar_dropdown_item, MortarFormElement as mortar_form_element };

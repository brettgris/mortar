var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-96277151.js';
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
        this.value = '';
        this.className = function () {
            return classnames('dropdown-outer', "" + _this.size, {
                'is-open': _this.open === true,
                'is-focused': _this.focused === true,
                'is-disabled': _this.disabled === true,
                'has-error': _this.haserror === true
            });
        };
        this.dropClassName = function () {
            return classnames('dropdown-list', 'dropdown-list-dropdown', {
                'is-active': _this.open === true
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
        this.handleListClick = function (evt) {
            var el = evt.target;
            var val = el.getAttribute('data-value');
            var disabled = el.getAttribute('data-disabled');
            if (disabled === null) {
                var o = _this.options.find(function (o) { return o.value === val; });
                if (o) {
                    _this.handleItemSelect(o);
                }
            }
        };
        this.handleItemSelect = function (option) {
            if (option.disabled !== true) {
                var c = _this.getCurrent();
                if (c) {
                    c.selected = false;
                }
                option.selected = true;
                _this.value = option.value;
                _this.itemSelect.emit(option);
                _this.open = false;
            }
        };
        this.handleDropdownRef = function (ref) {
            _this.dropdownEl = ref;
        };
        this.loadOptions = function () {
            _this.options = Array.prototype.slice.call(_this.el.querySelectorAll('mortar-dropdown-item'));
            var current = _this.options.find(function (o) { return o.selected === true; });
            if (current) {
                _this.value = current.value;
            }
        };
        this.getAvailable = function () {
            return _this.options.reduce(function (t, o, k) {
                if (!o.disabled) {
                    t.push({
                        o: o,
                        k: k
                    });
                }
                return t;
            }, []);
        };
        this.getCurrent = function () {
            if (_this.value && _this.options) {
                var o = _this.options.find(function (o) { return o.value === _this.value; });
                return o || null;
            }
            else {
                return null;
            }
        };
        this.clearHighlight = function () {
            var el = _this.options[_this.highlight];
            if (el) {
                el.highlighted = false;
            }
            _this.highlight = -1;
        };
        this.setHighlight = function (next) {
            var arr = _this.getAvailable();
            if (next) {
                if (_this.highlight === -1) {
                    var k = 0;
                    if (_this.value) {
                        var i = arr.find(function (o) { return o.o.value === _this.value; });
                        k = i.k;
                    }
                    _this.highlight = k;
                    _this.options[k].highlighted = true;
                }
                else {
                    _this.options[_this.highlight].highlighted = false;
                    var n = arr.find(function (v) { return v.k > _this.highlight; });
                    _this.highlight = (n) ? n.k : arr[0].k;
                    _this.options[_this.highlight].highlighted = true;
                }
            }
            else {
                var rArr = arr.reverse();
                if (_this.highlight === -1) {
                    var k = 0;
                    if (_this.value) {
                        var i = rArr.find(function (o) { return o.o.value === _this.value; });
                        k = i.k;
                    }
                    _this.highlight = k;
                    _this.options[k].highlighted = true;
                }
                else {
                    _this.options[_this.highlight].highlighted = false;
                    var n = rArr.find(function (v) { return v.k < _this.highlight; });
                    _this.highlight = (n) ? n.k : rArr[0].k;
                    _this.options[_this.highlight].highlighted = true;
                }
            }
            if (_this.highlight > -1) {
                _this.options[_this.highlight].getEl().then(function (v) {
                    var listEl = _this.el.querySelector('.dropdown-list[role="listbox"]');
                    listEl.scrollTop = v.offsetTop;
                });
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
        if (this.open === true && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
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
                var c = this.getCurrent();
                if (c) {
                    c.getEl().then(function (el) {
                        var listEl = _this.el.querySelector('.dropdown-list[role="listbox"]');
                        listEl.scrollTop = el.offsetTop;
                    });
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
        var current = this.getCurrent();
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: "dropdown", ref: this.handleDropdownRef }, h("div", { class: this.className(), tabindex: "0", role: "listbox", "aria-haspopup": "true", "aria-expanded": this.open, onFocus: this.handleFocus, onBlur: this.handleBlur }, h("div", { class: "dropdown-inner", onClick: this.handleClick }, h("div", { class: "dropdown-list dropdown-list-single" }, h("div", { class: this.displayClassName(), "aria-selected": "true" }, (current) ? current.label : this.placeholder))), h("div", { class: this.dropClassName(), "aria-expanded": this.open }, h("div", { class: "dropdown-list", role: "listbox", onClick: this.handleListClick }, h("slot", null))))));
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
var MortarDropdownItem = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.value = '';
        this.className = function () {
            return classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !_this.disabled,
                'dropdown-item-disabled': _this.disabled,
                'is-highlighted': !_this.disabled && _this.highlighted
            });
        };
    }
    class_1.prototype.getEl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.root];
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("div", { class: this.className(), role: "option", "aria-selected": this.selected, "data-value": this.value, "data-disabled": this.disabled }, this.label));
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { MortarDropdown as mortar_dropdown, MortarDropdownItem as mortar_dropdown_item };

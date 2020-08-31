import { r as registerInstance, h, c as createEvent, g as getElement } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
import { f as focusLock } from './index.esm-267e7bcc.js';
var MortarDatepicker = /** @class */ (function () {
    function MortarDatepicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.days = ['S', 'M', 'T', 'W', 'R', 'F', 'S'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthPlaceholder = 'Month';
        this.yearPlaceholder = 'Year';
        this.open = false;
        this.focused = false;
        this.highlight = -1;
        this.header = true;
        this.embed = false;
        this.customClass = function (_year, _month, _date) { return ''; };
        /***
         * Dropdowns
         * ***/
        this.getAvailableMonths = function () {
            return _this.months.map(function (v, k) { return (h("mortar-dropdown-item", { value: "" + k, label: v })); });
        };
        this.getAvailableYears = function () {
            var today = new Date();
            var min = _this.minDate || new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
            var max = _this.maxDate || new Date(today.getFullYear() + 5, today.getMonth(), today.getDate());
            var minYear = min.getFullYear();
            var maxYear = max.getFullYear();
            var range = maxYear - minYear;
            var arr = Array.apply(null, Array(range + 1));
            return arr.map(function (_v, k) {
                var s = "" + (minYear + k);
                return (h("mortar-dropdown-item", { value: s, label: s }));
            });
        };
        this.getMonthValue = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return "" + v.getMonth();
        };
        this.getYearValue = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return "" + v.getFullYear();
        };
        /***
         * Clear Value
         * ***/
        this.handleClear = function () {
            _this.current = null;
            _this.selected = null;
            _this.clearDate.emit();
        };
        /***
        * Change Current Month
        * ***/
        this.changeCurrent = function (month, year, highlight) {
            if (highlight === void 0) { highlight = -1; }
            var c = new Date(year, month);
            if (_this.minDate) {
                var min = new Date(_this.minDate.getFullYear(), _this.minDate.getMonth());
                if (c < min) {
                    c = min;
                }
            }
            if (_this.maxDate) {
                var max = new Date(_this.maxDate.getFullYear(), _this.maxDate.getMonth());
                if (c > max) {
                    c = max;
                }
            }
            _this.current = c;
            _this.highlight = highlight;
        };
        //Next & Previous Buttons, change current by val
        this.handleChangeMonth = function (val) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            var m = v.getMonth() + val;
            var y = v.getFullYear();
            if (m === -1) {
                m = 11;
                y--;
            }
            if (m === 12) {
                m = 0;
                y++;
            }
            _this.changeCurrent(m, y);
        };
        //Month Dropdown Select Month
        this.handleChangeCurrentMonth = function (evt) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            _this.changeCurrent(evt.detail.value, v.getFullYear());
        };
        //Year Dropdown Select Year
        this.handleChangeCurrentYear = function (evt) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            _this.changeCurrent(v.getMonth(), evt.detail.value);
        };
        //Display Current Month
        this.getCurrentMonth = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return _this.months[v.getMonth()] + " " + v.getFullYear();
        };
        //Get Default Date if Today is
        this.getDefaultDate = function () {
            var d = new Date();
            if (_this.minDate && d < _this.minDate) {
                d = _this.minDate;
            }
            if (_this.maxDate && d > _this.maxDate) {
                d = _this.maxDate;
            }
            return d;
        };
        /***
         * Select A Day
         * ***/
        this.handleClickDay = function (y, m, d) {
            var s = new Date(y, m, d);
            _this.selected = s;
            _this.selectDate.emit(s);
            _this.clickDate.emit(s);
        };
        //Keyboard Select - Doesn't fire click event (used to close)
        this.handleSelectDay = function (y, m, d, evt) {
            var s = new Date(y, m, d);
            _this.selected = s;
            _this.selectDate.emit(s);
            _this.keyboardSelect.emit(evt);
        };
        /***
         * Focus Trap
         */
        this.handleCalendarFocus = function () {
            _this.focused = true;
        };
        this.handleCalendarBlur = function () {
            _this.focused = false;
        };
        this.getDaysInMonth = function (d) {
            var first = new Date(d.getFullYear(), d.getMonth()).getDay();
            var length = 40 - new Date(d.getFullYear(), d.getMonth(), 40).getDate();
            var total = first + length;
            var rows = 6;
            var year = d.getFullYear();
            var month = d.getMonth();
            var previous = {
                month: (month > 0) ? month - 1 : 11,
                year: (month > 0) ? year : year - 1,
                length: 0
            };
            previous.length = 40 - new Date(previous.year, previous.month, 40).getDate();
            var next = {
                month: (month < 11) ? month + 1 : 0,
                year: (month < 11) ? year : year + 1,
                length: 0
            };
            next.length = 40 - new Date(next.year, next.month, 40).getDate();
            return {
                first: first,
                length: length,
                total: total,
                rows: rows,
                year: year,
                month: month,
                previous: previous,
                next: next
            };
        };
        /***
         * Month Display
         * ***/
        this.getCalendarDays = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            var cm = _this.getDaysInMonth(v);
            var arr = Array.apply(null, Array(cm.rows));
            var current = 0;
            var next = 0;
            return arr.map(function (_r, r) {
                var rArr = Array.apply(null, Array(7));
                return (h("div", { class: "datepicker-content-row" }, rArr.map(function (_c, c) {
                    if (r === 0 && c < cm.first) {
                        var pD = cm.previous.length - (cm.first - 1 - c);
                        return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.previous.year, cm.previous.month, pD) }, h("div", { class: "datepicker-content-display" }, h("span", null, pD))));
                    }
                    else if (current < cm.length) {
                        current++;
                        var cd_1 = current;
                        if (_this.isAvailable(cm.year, cm.month, cd_1)) {
                            var cn = _this.customClass(cm.year, cm.month, cd_1);
                            if (_this.isToday(cm.year, cm.month, cd_1)) {
                                cn += ' datepicker-today';
                            }
                            if (_this.isSelected(cm.year, cm.month, cd_1)) {
                                cn += ' datepicker-selected';
                            }
                            if (_this.highlight === cd_1 && _this.focused) {
                                cn += ' datepicker-highlight';
                            }
                            return (h("div", { class: "datepicker-content-item " + cn, onClick: function () { return _this.handleClickDay(cm.year, cm.month, cd_1); } }, h("div", { class: "datepicker-content-display" }, h("span", null, cd_1))));
                        }
                        else {
                            return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.year, cm.month, cd_1) }, h("div", { class: "datepicker-content-display" }, h("span", null, cd_1))));
                        }
                    }
                    else {
                        next++;
                        return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.next.year, cm.next.month, next) }, h("div", { class: "datepicker-content-display" }, h("span", null, next))));
                    }
                })));
            });
        };
        this.isToday = function (y, m, d) {
            var today = new Date();
            return (y === today.getFullYear() && m === today.getMonth() && d === today.getDate());
        };
        this.isSelected = function (y, m, d) {
            return (_this.selected && y === _this.selected.getFullYear() && m === _this.selected.getMonth() && d === _this.selected.getDate());
        };
        this.isAvailable = function (y, m, d) {
            var v = new Date(y, m, d);
            if (_this.minDate && _this.maxDate) {
                return (v >= _this.minDate && v <= _this.maxDate);
            }
            else if (_this.minDate) {
                return v >= _this.minDate;
            }
            else if (_this.maxDate) {
                return v <= _this.maxDate;
            }
            else {
                return true;
            }
        };
        /***
         * Render
         * ***/
        this.className = function () {
            return classnames('datepicker-list-outer', {
                'show': _this.open,
                'no-header': !_this.header && _this.embed,
                'embed': _this.embed
            });
        };
        this.clearDate = createEvent(this, "clearDate", 7);
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clickDate = createEvent(this, "clickDate", 7);
        this.keyboardSelect = createEvent(this, "keyboardSelect", 7);
        this.keyboardExit = createEvent(this, "keyboardExit", 7);
    }
    MortarDatepicker.prototype.handleSelected = function (val) {
        if (!val) {
            this.current = null;
        }
    };
    MortarDatepicker.prototype.handleClose = function (openVal) {
        if (!openVal) {
            this.current = null;
            this.focused = false;
            focusLock.off(this.root);
        }
        else {
            focusLock.on(this.root);
            var r_1 = this.root;
            console.log("here", this.root, focusLock);
            setTimeout(function () {
                var el = r_1.querySelector('.datepicker-body');
                el.focus();
            }, 1);
        }
    };
    MortarDatepicker.prototype.handleFocused = function () {
        this.highlight = -1;
    };
    /***
     * Keyboard Navigate
     */
    MortarDatepicker.prototype.handleKeySelect = function (evt) {
        if (this.open && this.focused) {
            switch (evt.keyCode) {
                case 37:
                    this.changeHighlight(-1);
                    evt.preventDefault();
                    break;
                case 38:
                    this.changeHighlight(-7);
                    evt.preventDefault();
                    break;
                case 39:
                    this.changeHighlight(1);
                    evt.preventDefault();
                    break;
                case 40:
                    this.changeHighlight(7);
                    evt.preventDefault();
                    break;
                case 13:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
                case 32:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
            }
        }
        if (this.open && evt.keyCode === 27) {
            var dd = Array.prototype.slice.call(this.root.querySelectorAll('mortar-dropdown'));
            var e = dd.find(function (v) {
                var d = v.querySelector('.dropdown-outer');
                return d === document.activeElement;
            });
            if ((!e || !e.open) && !this.embed) {
                this.open = false;
                this.keyboardExit.emit();
            }
        }
    };
    MortarDatepicker.prototype.changeHighlight = function (amt) {
        var d = this.current || this.selected || this.getDefaultDate();
        var cm = this.getDaysInMonth(d);
        if (this.highlight === -1) {
            var today = new Date();
            if (this.selected && this.selected.getMonth() === cm.month && this.selected.getFullYear() === cm.year) {
                this.highlight = this.selected.getDate();
            }
            else if (today.getMonth() === cm.month && today.getFullYear() === cm.year) {
                this.highlight = today.getDate();
            }
            else {
                this.highlight = Math.floor(cm.length / 2);
            }
        }
        this.highlight += amt;
        if (this.highlight <= 0) {
            this.changeCurrent(cm.previous.month, cm.previous.year, cm.previous.length + this.highlight);
        }
        else if (this.highlight > cm.length) {
            this.changeCurrent(cm.next.month, cm.next.year, this.highlight - cm.length);
        }
    };
    MortarDatepicker.prototype.selectHighlight = function (evt) {
        if (this.highlight >= 0) {
            var d = this.current || this.selected || this.getDefaultDate();
            this.handleSelectDay(d.getFullYear(), d.getMonth(), this.highlight, evt);
        }
    };
    MortarDatepicker.prototype.render = function () {
        if (this.embed) {
            return h("fieldset", { class: "datepicker" }, this.renderEl());
        }
        else {
            return this.renderEl();
        }
    };
    MortarDatepicker.prototype.renderEl = function () {
        var _this = this;
        return (h("div", { class: this.className() }, this.header &&
            h("div", { class: "datepicker-selector" }, h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getMonthValue(), placeholder: this.monthPlaceholder, onItemSelect: this.handleChangeCurrentMonth }, this.getAvailableMonths())), h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getYearValue(), placeholder: this.yearPlaceholder, onItemSelect: this.handleChangeCurrentYear }, this.getAvailableYears())), h("div", { class: "datepicker-select-clear" }, h("button", { onClick: this.handleClear }, h("mortar-icon", { kind: "close", arialabel: "close" })))), h("div", { class: "datepicker-header" }, h("div", { class: "datepicker-header-previous" }, h("button", { onClick: function () { return _this.handleChangeMonth(-1); } }, h("mortar-icon", { kind: "back", arialabel: "Previous Month" }))), h("div", { class: "datepicker-header-display" }, h("span", null, this.getCurrentMonth())), h("div", { class: "datepicker-header-next" }, h("button", { onClick: function () { return _this.handleChangeMonth(1); } }, h("mortar-icon", { kind: "next", arialabel: "Next Month" })))), h("div", { class: "datepicker-body", tabindex: "0", onFocus: this.handleCalendarFocus, onBlur: this.handleCalendarBlur }, h("div", { class: "datepicker-days" }, this.days.map(function (v) {
            return (h("div", { class: "datepicker-day" }, h("div", { class: "datepicker-day-display" }, h("span", null, v))));
        })), h("div", { class: "datepicker-content" }, this.getCalendarDays()))));
    };
    Object.defineProperty(MortarDatepicker.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarDatepicker, "watchers", {
        get: function () {
            return {
                "selected": ["handleSelected"],
                "open": ["handleClose"],
                "focused": ["handleFocused"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDatepicker;
}());
export { MortarDatepicker as mortar_datepicker_calendar };

import { r as registerInstance, h, c as createEvent, g as getElement } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';
import { f as focusLock } from './index.esm-5ad7665d.js';

const MortarDatepicker = class {
    constructor(hostRef) {
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
        this.customClass = (_year, _month, _date) => '';
        /***
         * Dropdowns
         * ***/
        this.getAvailableMonths = () => {
            return this.months.map((v, k) => (h("mortar-dropdown-item", { value: `${k}`, label: v })));
        };
        this.getAvailableYears = () => {
            const today = new Date();
            const min = this.minDate || new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
            const max = this.maxDate || new Date(today.getFullYear() + 5, today.getMonth(), today.getDate());
            const minYear = min.getFullYear();
            const maxYear = max.getFullYear();
            const range = maxYear - minYear;
            const arr = Array.apply(null, Array(range + 1));
            return arr.map((_v, k) => {
                const s = `${minYear + k}`;
                return (h("mortar-dropdown-item", { value: s, label: s }));
            });
        };
        this.getMonthValue = () => {
            const v = this.current || this.selected || this.getDefaultDate();
            return `${v.getMonth()}`;
        };
        this.getYearValue = () => {
            const v = this.current || this.selected || this.getDefaultDate();
            return `${v.getFullYear()}`;
        };
        /***
         * Clear Value
         * ***/
        this.handleClear = () => {
            this.current = null;
            this.selected = null;
            this.clearDate.emit();
        };
        /***
        * Change Current Month
        * ***/
        this.changeCurrent = (month, year, highlight = -1) => {
            let c = new Date(year, month);
            if (this.minDate) {
                const min = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
                if (c < min) {
                    c = min;
                }
            }
            if (this.maxDate) {
                const max = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
                if (c > max) {
                    c = max;
                }
            }
            this.current = c;
            this.highlight = highlight;
        };
        //Next & Previous Buttons, change current by val
        this.handleChangeMonth = (val) => {
            const v = this.current || this.selected || this.getDefaultDate();
            let m = v.getMonth() + val;
            let y = v.getFullYear();
            if (m === -1) {
                m = 11;
                y--;
            }
            if (m === 12) {
                m = 0;
                y++;
            }
            this.changeCurrent(m, y);
        };
        //Month Dropdown Select Month
        this.handleChangeCurrentMonth = (evt) => {
            const v = this.current || this.selected || this.getDefaultDate();
            this.changeCurrent(evt.detail.value, v.getFullYear());
        };
        //Year Dropdown Select Year
        this.handleChangeCurrentYear = (evt) => {
            const v = this.current || this.selected || this.getDefaultDate();
            this.changeCurrent(v.getMonth(), evt.detail.value);
        };
        //Display Current Month
        this.getCurrentMonth = () => {
            const v = this.current || this.selected || this.getDefaultDate();
            return `${this.months[v.getMonth()]} ${v.getFullYear()}`;
        };
        //Get Default Date if Today is
        this.getDefaultDate = () => {
            let d = new Date();
            if (this.minDate && d < this.minDate) {
                d = this.minDate;
            }
            if (this.maxDate && d > this.maxDate) {
                d = this.maxDate;
            }
            return d;
        };
        /***
         * Select A Day
         * ***/
        this.handleClickDay = (y, m, d) => {
            const s = new Date(y, m, d);
            this.selected = s;
            this.selectDate.emit(s);
            this.clickDate.emit(s);
        };
        //Keyboard Select - Doesn't fire click event (used to close)
        this.handleSelectDay = (y, m, d, evt) => {
            const s = new Date(y, m, d);
            this.selected = s;
            this.selectDate.emit(s);
            this.keyboardSelect.emit(evt);
        };
        /***
         * Focus Trap
         */
        this.handleCalendarFocus = () => {
            this.focused = true;
        };
        this.handleCalendarBlur = () => {
            this.focused = false;
        };
        this.getDaysInMonth = (d) => {
            const first = new Date(d.getFullYear(), d.getMonth()).getDay();
            const length = 40 - new Date(d.getFullYear(), d.getMonth(), 40).getDate();
            const total = first + length;
            const rows = 6;
            const year = d.getFullYear();
            const month = d.getMonth();
            const previous = {
                month: (month > 0) ? month - 1 : 11,
                year: (month > 0) ? year : year - 1,
                length: 0
            };
            previous.length = 40 - new Date(previous.year, previous.month, 40).getDate();
            const next = {
                month: (month < 11) ? month + 1 : 0,
                year: (month < 11) ? year : year + 1,
                length: 0
            };
            next.length = 40 - new Date(next.year, next.month, 40).getDate();
            return {
                first,
                length,
                total,
                rows,
                year,
                month,
                previous,
                next
            };
        };
        /***
         * Month Display
         * ***/
        this.getCalendarDays = () => {
            const v = this.current || this.selected || this.getDefaultDate();
            const cm = this.getDaysInMonth(v);
            let arr = Array.apply(null, Array(cm.rows));
            let current = 0;
            let next = 0;
            return arr.map((_r, r) => {
                const rArr = Array.apply(null, Array(7));
                return (h("div", { class: "datepicker-content-row" }, rArr.map((_c, c) => {
                    if (r === 0 && c < cm.first) {
                        const pD = cm.previous.length - (cm.first - 1 - c);
                        return (h("div", { class: `datepicker-content-item datepicker-content-out ${this.customClass(cm.previous.year, cm.previous.month, pD)}` }, h("div", { class: "datepicker-content-display" }, h("span", null, pD))));
                    }
                    else if (current < cm.length) {
                        current++;
                        const cd = current;
                        if (this.isAvailable(cm.year, cm.month, cd)) {
                            let cn = this.customClass(cm.year, cm.month, cd);
                            if (this.isToday(cm.year, cm.month, cd)) {
                                cn += ' datepicker-today';
                            }
                            if (this.isSelected(cm.year, cm.month, cd)) {
                                cn += ' datepicker-selected';
                            }
                            if (this.highlight === cd && this.focused) {
                                cn += ' datepicker-highlight';
                            }
                            return (h("div", { class: `datepicker-content-item ${cn}`, onClick: () => this.handleClickDay(cm.year, cm.month, cd) }, h("div", { class: "datepicker-content-display" }, h("span", null, cd))));
                        }
                        else {
                            return (h("div", { class: `datepicker-content-item datepicker-content-out ${this.customClass(cm.year, cm.month, cd)}` }, h("div", { class: "datepicker-content-display" }, h("span", null, cd))));
                        }
                    }
                    else {
                        next++;
                        return (h("div", { class: `datepicker-content-item datepicker-content-out ${this.customClass(cm.next.year, cm.next.month, next)}` }, h("div", { class: "datepicker-content-display" }, h("span", null, next))));
                    }
                })));
            });
        };
        this.isToday = (y, m, d) => {
            const today = new Date();
            return (y === today.getFullYear() && m === today.getMonth() && d === today.getDate());
        };
        this.isSelected = (y, m, d) => {
            return (this.selected && y === this.selected.getFullYear() && m === this.selected.getMonth() && d === this.selected.getDate());
        };
        this.isAvailable = (y, m, d) => {
            const v = new Date(y, m, d);
            if (this.minDate && this.maxDate) {
                return (v >= this.minDate && v <= this.maxDate);
            }
            else if (this.minDate) {
                return v >= this.minDate;
            }
            else if (this.maxDate) {
                return v <= this.maxDate;
            }
            else {
                return true;
            }
        };
        /***
         * Render
         * ***/
        this.className = () => {
            return classnames('datepicker-list-outer', {
                'show': this.open,
                'no-header': !this.header && this.embed,
                'embed': this.embed
            });
        };
        this.clearDate = createEvent(this, "clearDate", 7);
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clickDate = createEvent(this, "clickDate", 7);
        this.keyboardSelect = createEvent(this, "keyboardSelect", 7);
        this.keyboardExit = createEvent(this, "keyboardExit", 7);
    }
    handleSelected(val) {
        if (!val) {
            this.current = null;
        }
    }
    handleClose(openVal) {
        if (!openVal) {
            this.current = null;
            this.focused = false;
            focusLock.off(this.root);
        }
        else {
            focusLock.on(this.root);
            const r = this.root;
            console.log("here", this.root, focusLock);
            setTimeout(function () {
                const el = r.querySelector('.datepicker-body');
                el.focus();
            }, 1);
        }
    }
    handleFocused() {
        this.highlight = -1;
    }
    /***
     * Keyboard Navigate
     */
    handleKeySelect(evt) {
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
                default:
                    break;
            }
        }
        if (this.open && evt.keyCode === 27) {
            const dd = Array.prototype.slice.call(this.root.querySelectorAll('mortar-dropdown'));
            const e = dd.find(v => {
                const d = v.querySelector('.dropdown-outer');
                return d === document.activeElement;
            });
            if ((!e || !e.open) && !this.embed) {
                this.open = false;
                this.keyboardExit.emit();
            }
        }
    }
    changeHighlight(amt) {
        const d = this.current || this.selected || this.getDefaultDate();
        const cm = this.getDaysInMonth(d);
        if (this.highlight === -1) {
            const today = new Date();
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
    }
    selectHighlight(evt) {
        if (this.highlight >= 0) {
            const d = this.current || this.selected || this.getDefaultDate();
            this.handleSelectDay(d.getFullYear(), d.getMonth(), this.highlight, evt);
        }
    }
    render() {
        if (this.embed) {
            return h("fieldset", { class: "datepicker" }, this.renderEl());
        }
        else {
            return this.renderEl();
        }
    }
    renderEl() {
        return (h("div", { class: this.className() }, this.header &&
            h("div", { class: "datepicker-selector" }, h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getMonthValue(), placeholder: this.monthPlaceholder, onItemSelect: this.handleChangeCurrentMonth }, this.getAvailableMonths())), h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getYearValue(), placeholder: this.yearPlaceholder, onItemSelect: this.handleChangeCurrentYear }, this.getAvailableYears())), h("div", { class: "datepicker-select-clear" }, h("button", { onClick: this.handleClear }, h("mortar-icon", { kind: "close", arialabel: "close" })))), h("div", { class: "datepicker-header" }, h("div", { class: "datepicker-header-previous" }, h("button", { onClick: () => this.handleChangeMonth(-1) }, h("mortar-icon", { kind: "back", arialabel: "Previous Month" }))), h("div", { class: "datepicker-header-display" }, h("span", null, this.getCurrentMonth())), h("div", { class: "datepicker-header-next" }, h("button", { onClick: () => this.handleChangeMonth(1) }, h("mortar-icon", { kind: "next", arialabel: "Next Month" })))), h("div", { class: "datepicker-body", tabindex: "0", onFocus: this.handleCalendarFocus, onBlur: this.handleCalendarBlur }, h("div", { class: "datepicker-days" }, this.days.map((v) => {
            return (h("div", { class: "datepicker-day" }, h("div", { class: "datepicker-day-display" }, h("span", null, v))));
        })), h("div", { class: "datepicker-content" }, this.getCalendarDays()))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "selected": ["handleSelected"],
        "open": ["handleClose"],
        "focused": ["handleFocused"]
    }; }
};

export { MortarDatepicker as mortar_datepicker_calendar };

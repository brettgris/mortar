import { r as registerInstance, c as createEvent, h } from './index-96277151.js';
var MortarDatepicker = /** @class */ (function () {
    function MortarDatepicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.open = false;
        this.min = new Date(1900, 0, 1);
        this.max = new Date(2100, 11, 31);
        this.dateToString = function (date) {
            if (!date)
                return '';
            var m = date.getMonth() + 1;
            var ms = (m >= 10) ? m : '0' + m;
            var d = date.getDate();
            var ds = (d >= 10) ? d : '0' + d;
            return ms + "/" + ds + "/" + date.getFullYear();
        };
        this.valueString = '';
        this.mask = 'Date';
        this.required = true;
        this.disabled = false;
        this.placeholder = "mm/dd/yyyy";
        this.name = '';
        this.header = true;
        this.handleOpen = function () {
            _this.open = !_this.open;
        };
        this.handleSelect = function (evt) {
            _this.value = evt.detail;
            _this.selectDate.emit(evt.detail);
        };
        this.handleClear = function () {
            _this.value = null;
            _this.open = false;
            _this.clearDate.emit();
            _this.setToggleFocus();
        };
        this.handleCalendarRef = function (ref) {
            _this.calendarElement = ref;
        };
        this.handleToggleRef = function (ref) {
            _this.toggleElement = ref;
        };
        this.handleClickDate = function () {
            _this.open = false;
        };
        this.handleKeyboardSelect = function () {
            _this.open = false;
            _this.setToggleFocus();
        };
        this.handleKeyboardExit = function () {
            _this.open = false;
            _this.setToggleFocus();
        };
        this.setToggleFocus = function () {
            var el = _this.toggleElement;
            setTimeout(function () {
                el.focus();
            }, 10);
        };
        this.handleBlur = function (evt) {
            var os = _this.valueString;
            _this.valueString = evt.detail;
            setTimeout(function () {
                _this.updateValueFromInput(evt.detail, os);
            }, 10);
        };
        this.updateValueFromInput = function (val, os) {
            if (val) {
                var d = val.split("/").map(function (v) {
                    if (v) {
                        if (Number(v)) {
                            return v;
                        }
                        else if (Number(v.slice(1))) {
                            return v.slice(1);
                        }
                        else if (Number(v.slice(0, -1))) {
                            return v.slice(0, -1);
                        }
                        else {
                            return v;
                        }
                    }
                    return v;
                }).join("/");
                var nd = new Date(d);
                if (nd.getTime() && nd > _this.min && nd < _this.max) {
                    _this.valueString = _this.dateToString(nd);
                    _this.value = nd;
                    _this.selectDate.emit(nd);
                }
                else {
                    _this.valueString = os;
                }
            }
        };
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clearDate = createEvent(this, "clearDate", 7);
        this.inputChange = createEvent(this, "inputChange", 7);
        this.dateOutOfRange = createEvent(this, "dateOutOfRange", 7);
    }
    MortarDatepicker.prototype.handleOutsideClick = function (evt) {
        if (this.open) {
            if (!(evt.target === this.toggleElement || this.toggleElement.contains(evt.target)) && !(evt.target === this.calendarElement || this.calendarElement.contains(evt.target))) {
                this.open = false;
            }
        }
    };
    MortarDatepicker.prototype.componentWillLoad = function () {
        if (this.value) {
            this.valueString = this.dateToString(this.value);
        }
    };
    MortarDatepicker.prototype.handleValue = function (v) {
        this.valueString = this.dateToString(v);
    };
    MortarDatepicker.prototype.render = function () {
        return (h("mortar-form-element", { label: this.label, haserror: this.haserror, error: this.error, elementclass: "datepicker", name: this.name }, h("div", { class: "datepicker-outer" }, h("div", { class: "datepicker-inner" }, h("masked-input", { placeholder: this.placeholder, value: this.valueString, elementclass: "datepicker-input", type: this.mask, onMaskedBlur: this.handleBlur, pattern: "[0-9]*", inputmode: "numeric", name: this.name }), h("button", { class: "datepicker-toggle", onClick: this.handleOpen, ref: this.handleToggleRef }, h("mortar-icon", { kind: "calendar" }))), h("mortar-datepicker-calendar", { ref: this.handleCalendarRef, minDate: this.min, maxDate: this.max, onSelectDate: this.handleSelect, onClearDate: this.handleClear, onClickDate: this.handleClickDate, onKeyboardSelect: this.handleKeyboardSelect, onKeyboardExit: this.handleKeyboardExit, selected: this.value, open: this.open, header: this.header }))));
    };
    Object.defineProperty(MortarDatepicker, "watchers", {
        get: function () {
            return {
                "value": ["handleValue"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDatepicker;
}());
export { MortarDatepicker as mortar_datepicker };

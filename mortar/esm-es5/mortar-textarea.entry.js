import { r as registerInstance, h } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';
var MortarTextarea = /** @class */ (function () {
    function MortarTextarea(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.maxlength = '';
        this.message = function (amount) {
            return amount + " characters remaining";
        };
        this.name = 'textarea';
        this.disabled = false;
        this.required = true;
        this.value = '';
        this.placeholder = '';
        this.className = function () {
            return classnames({
                error: _this.haserror
            });
        };
        this.handleInput = function () {
            _this.value = _this.inputEl.value;
        };
        this.handleRef = function (ref) {
            _this.inputEl = ref;
        };
    }
    MortarTextarea.prototype.handleValue = function (val) {
        this.inputEl.value = val;
    };
    MortarTextarea.prototype.render = function () {
        var n = Number(this.maxlength);
        var text = this.value.slice(0, n);
        var remaining = n - text.length;
        return (h("mortar-form-element", { label: this.label, error: this.error, haserror: this.haserror, elementclass: "text-area", name: this.name }, h("textarea", { class: this.className(), id: this.name, disabled: this.disabled === true, required: this.required === true, placeholder: this.placeholder, onInput: this.handleInput, ref: this.handleRef }, text), this.maxlength &&
            h("div", { class: "character-message show" }, this.message(remaining))));
    };
    Object.defineProperty(MortarTextarea, "watchers", {
        get: function () {
            return {
                "value": ["handleValue"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarTextarea;
}());
export { MortarTextarea as mortar_textarea };

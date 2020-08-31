import { r as registerInstance, h } from './index-96277151.js';
var MortarInput = /** @class */ (function () {
    function MortarInput(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'md';
        this.error = '';
        this.haserror = false;
        this.label = '';
        this.help = '';
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
        this.mask = '';
        this.type = "text";
        this.inputmode = 'text';
        this.pattern = '';
        this.name = 'input';
    }
    MortarInput.prototype.className = function () {
        return "text " + this.size;
    };
    ;
    MortarInput.prototype.render = function () {
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: this.className(), name: this.name }, h("masked-input", { elementclass: (this.haserror) ? 'error' : '', value: this.value, placeholder: this.placeholder, type: this.mask, inputmode: this.inputmode, pattern: this.pattern, name: this.name })));
    };
    return MortarInput;
}());
export { MortarInput as mortar_input };

import { r as registerInstance, h } from './index-00dbcdb2.js';
import './_commonjsHelpers-66986d5b.js';
import { c as classnames } from './index-6b7e594d.js';

const MortarTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.message = '';
        this.name = 'textarea';
        this.disabled = false;
        this.required = true;
        this.value = '';
        this.placeholder = '';
        this.className = () => {
            return classnames({
                error: this.haserror
            });
        };
    }
    render() {
        return (h("mortar-form-element", { label: this.label, error: this.error, haserror: this.haserror, elementclass: "text-area", name: this.name }, h("textarea", { class: this.className(), id: this.name, disabled: this.disabled === true, required: this.required === true, placeholder: this.placeholder }, this.value), this.message &&
            h("div", { class: "character-message show" }, this.message)));
    }
};

export { MortarTextarea as mortar_textarea };

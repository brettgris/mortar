import { r as registerInstance, h } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';

const MortarFileUpload = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.name = 'file-upload';
        this.disabled = false;
        this.text = '';
        this.descriptor = '';
        this.multiple = true;
        this.required = true;
        this.labelClassName = () => {
            return classnames('input-label', {
                'error': this.haserror
            });
        };
    }
    render() {
        return (h("mortar-form-element", { legend: this.label, legendId: `${this.name}-label`, disabled: this.disabled, elementclass: "file-upload", haserror: this.haserror, error: this.error, name: this.name }, h("input", { id: this.name, type: "file", multiple: this.multiple, required: this.required }), h("label", { htmlFor: this.name, class: this.labelClassName() }, h("span", { class: "message" }, h("mortar-icon", { kind: "upload" }), this.text), this.descriptor && h("span", { class: "descriptor" }, this.descriptor))));
    }
};

export { MortarFileUpload as mortar_file_upload };

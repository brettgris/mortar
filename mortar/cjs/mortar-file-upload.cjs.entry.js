'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5a723c48.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-48587f91.js');

const MortarFileUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index$1.classnames('input-label', {
                'error': this.haserror
            });
        };
    }
    render() {
        return (index.h("mortar-form-element", { legend: this.label, legendId: `${this.name}-label`, disabled: this.disabled, elementclass: "file-upload", haserror: this.haserror, error: this.error, name: this.name }, index.h("input", { id: this.name, type: "file", multiple: this.multiple, required: this.required }), index.h("label", { htmlFor: this.name, class: this.labelClassName() }, index.h("span", { class: "message" }, index.h("mortar-icon", { kind: "upload" }), this.text), this.descriptor && index.h("span", { class: "descriptor" }, this.descriptor))));
    }
};

exports.mortar_file_upload = MortarFileUpload;

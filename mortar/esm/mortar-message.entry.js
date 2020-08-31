import { r as registerInstance, h, H as Host } from './index-96277151.js';
import './_commonjsHelpers-97e6d7b1.js';
import { c as classnames } from './index-4ebb3392.js';

const MortarMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.className = () => {
            return classnames('message', `message-${this.kind}`, {
                'show': this.open === true
            });
        };
    }
    render() {
        return (h(Host, null, h("div", { class: this.className(), role: "alert" }, h("div", { class: "header5" }, h("slot", { name: "headline" })), h("div", { class: "copy" }, h("slot", { name: "copy" })))));
    }
};

export { MortarMessage as mortar_message };

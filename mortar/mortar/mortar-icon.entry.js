import { r as registerInstance, h, H as Host } from './index-00dbcdb2.js';

const MortarIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kind = "";
        this.arialabel = "";
        this.class = "";
    }
    className() {
        return `storyicon ${this.kind}StoryIcon ${this.class}`;
    }
    render() {
        return (h(Host, null, h("i", { class: this.className(), "aria-label": this.arialabel })));
    }
};

export { MortarIcon as mortar_icon };

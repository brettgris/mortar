import { r as registerInstance, h, H as Host } from './index-96277151.js';
var MortarIcon = /** @class */ (function () {
    function MortarIcon(hostRef) {
        registerInstance(this, hostRef);
        this.kind = "";
        this.arialabel = "";
        this.class = "";
    }
    MortarIcon.prototype.className = function () {
        return "storyicon " + this.kind + "StoryIcon " + this.class;
    };
    MortarIcon.prototype.render = function () {
        return (h(Host, null, h("i", { class: this.className(), "aria-label": this.arialabel })));
    };
    return MortarIcon;
}());
export { MortarIcon as mortar_icon };

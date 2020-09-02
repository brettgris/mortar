/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MaskedInput {
        "elementclass": string;
        "inputmode": string;
        "inputtype": string;
        "name": string;
        "options": {
            mask: Array<String>;
            pipe: Function;
            guide: Boolean;
            keepCharPositions: Boolean;
            showMask: Boolean;
        };
        "pattern": string;
        "placeholder": string;
        "required": boolean;
        "type": string;
        "value": string;
    }
    interface MortarAlert {
        "btnkind": string;
        "btnlabel": string;
        "focusEl": HTMLElement;
        "headline": string;
        "kind": string;
        "open": boolean;
        "overlay": boolean;
    }
    interface MortarButton {
        "buttontype": string;
        "disabled": boolean;
        "elementclass": string;
        "href": string;
        "kind": string;
        "size": string;
        "target": string;
    }
    interface MortarCheckbox {
        "error": string;
        "haserror": boolean;
        "label": string;
        "name": string;
        "screenreaderlabel": boolean;
    }
    interface MortarCheckboxItem {
        "checked": boolean;
        "disabled": boolean;
        "haserror": boolean;
        "indeterminate": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface MortarDatepicker {
        "clearlabel": string;
        "dateToString": (date: any) => string;
        "days": string[];
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "header": boolean;
        "label": string;
        "mask": string;
        "max": Date | string;
        "min": Date | string;
        "monthplaceholder": string;
        "months": string[];
        "monthselectlabel": string;
        "name": string;
        "nextlabel": string;
        "open": boolean;
        "placeholder": string;
        "previouslabel": string;
        "required": boolean;
        "screenreaderlabel": boolean;
        "togglelabel": (date: any) => string;
        "value": Date | string;
        "valueString": string;
        "yearplaceholder": string;
        "yearselectlabel": string;
    }
    interface MortarDatepickerCalendar {
        "clearlabel": string;
        "current": Date | string;
        "customClass": (_year: any, _month: any, _date: any) => string;
        "days": string[];
        "embed": boolean;
        "error": string;
        "haserror": boolean;
        "header": boolean;
        "highlight": number;
        "label": string;
        "max": Date | string;
        "min": Date | string;
        "monthlabel": string;
        "monthplaceholder": string;
        "months": string[];
        "monthselectlabel": string;
        "name": string;
        "nextlabel": string;
        "open": boolean;
        "previouslabel": string;
        "screenreaderlabel": boolean;
        "selected": Date | string;
        "yearlabel": string;
        "yearplaceholder": string;
        "yearselectlabel": string;
    }
    interface MortarDropdown {
        "disabled": boolean;
        "error": string;
        "focused": boolean;
        "haserror": boolean;
        "help": string;
        "highlight": number;
        "label": string;
        "name": string;
        "open": boolean;
        "placeholder": string;
        "required": boolean;
        "screenreaderlabel": boolean;
        "size": string;
        "value": string;
    }
    interface MortarDropdownItem {
        "disabled": boolean;
        "getEl": () => Promise<HTMLElement>;
        "highlighted": boolean;
        "label": string;
        "selected": boolean;
        "value": string;
    }
    interface MortarFileUpload {
        "descriptor": string;
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "label": string;
        "multiple": boolean;
        "name": string;
        "required": boolean;
        "screenreaderlabel": boolean;
        "text": string;
    }
    interface MortarFormElement {
        "disabled": boolean;
        "elementclass": string;
        "error": string;
        "haserror": boolean;
        "help": string;
        "label": string;
        "legend": string;
        "legendId": string;
        "name": string;
        "screenreaderlabel": boolean;
    }
    interface MortarIcon {
        "arialabel": string;
        "class": string;
        "kind": string;
        "label": string;
    }
    interface MortarIllustration {
        "arialabel": string;
        "kind": string;
        "label": string;
    }
    interface MortarInput {
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "help": string;
        "inputmode": string;
        "label": string;
        "mask": string;
        "name": string;
        "pattern": string;
        "placeholder": string;
        "required": boolean;
        "screenreaderlabel": boolean;
        "size": string;
        "type": string;
        "value": string;
    }
    interface MortarMessage {
        "kind": string;
        "open": boolean;
    }
    interface MortarModal {
        "closebtnlabel": string;
        "focusEl": HTMLElement;
        "name": string;
        "open": boolean;
    }
    interface MortarRadio {
        "error": string;
        "haserror": boolean;
        "label": string;
        "name": string;
        "screenreaderlabel": boolean;
    }
    interface MortarRadioItem {
        "checked": boolean;
        "disabled": boolean;
        "group": string;
        "haserror": boolean;
        "label": string;
        "light": boolean;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface MortarRadioToggle {
        "error": string;
        "haserror": boolean;
        "label": string;
        "name": string;
        "screenreaderlabel": boolean;
    }
    interface MortarRadioToggleItem {
        "checked": boolean;
        "disabled": boolean;
        "group": string;
        "haserror": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "size": string;
        "value": string;
    }
    interface MortarRange {
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "label": string;
        "maxlabel": string;
        "maxplaceholder": string;
        "maxrequired": boolean;
        "maxvalue": string;
        "minlabel": string;
        "minplaceholder": string;
        "minrequired": boolean;
        "minvalue": string;
        "name": string;
        "screenreaderlabel": boolean;
        "size": string;
    }
    interface MortarTextarea {
        "cols": string;
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "hasmessage": boolean;
        "label": string;
        "maxlength": string;
        "message": (amount: any) => string;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "rows": string;
        "screenreaderlabel": boolean;
        "value": string;
    }
    interface MortarToggle {
        "checked": boolean;
        "disabled": boolean;
        "error": string;
        "haserror": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "screenreaderlabel": boolean;
        "size": string;
    }
    interface MortarTooltip {
        "hover": boolean;
        "open": boolean;
        "position": string;
        "transition": boolean;
    }
}
declare global {
    interface HTMLMaskedInputElement extends Components.MaskedInput, HTMLStencilElement {
    }
    var HTMLMaskedInputElement: {
        prototype: HTMLMaskedInputElement;
        new (): HTMLMaskedInputElement;
    };
    interface HTMLMortarAlertElement extends Components.MortarAlert, HTMLStencilElement {
    }
    var HTMLMortarAlertElement: {
        prototype: HTMLMortarAlertElement;
        new (): HTMLMortarAlertElement;
    };
    interface HTMLMortarButtonElement extends Components.MortarButton, HTMLStencilElement {
    }
    var HTMLMortarButtonElement: {
        prototype: HTMLMortarButtonElement;
        new (): HTMLMortarButtonElement;
    };
    interface HTMLMortarCheckboxElement extends Components.MortarCheckbox, HTMLStencilElement {
    }
    var HTMLMortarCheckboxElement: {
        prototype: HTMLMortarCheckboxElement;
        new (): HTMLMortarCheckboxElement;
    };
    interface HTMLMortarCheckboxItemElement extends Components.MortarCheckboxItem, HTMLStencilElement {
    }
    var HTMLMortarCheckboxItemElement: {
        prototype: HTMLMortarCheckboxItemElement;
        new (): HTMLMortarCheckboxItemElement;
    };
    interface HTMLMortarDatepickerElement extends Components.MortarDatepicker, HTMLStencilElement {
    }
    var HTMLMortarDatepickerElement: {
        prototype: HTMLMortarDatepickerElement;
        new (): HTMLMortarDatepickerElement;
    };
    interface HTMLMortarDatepickerCalendarElement extends Components.MortarDatepickerCalendar, HTMLStencilElement {
    }
    var HTMLMortarDatepickerCalendarElement: {
        prototype: HTMLMortarDatepickerCalendarElement;
        new (): HTMLMortarDatepickerCalendarElement;
    };
    interface HTMLMortarDropdownElement extends Components.MortarDropdown, HTMLStencilElement {
    }
    var HTMLMortarDropdownElement: {
        prototype: HTMLMortarDropdownElement;
        new (): HTMLMortarDropdownElement;
    };
    interface HTMLMortarDropdownItemElement extends Components.MortarDropdownItem, HTMLStencilElement {
    }
    var HTMLMortarDropdownItemElement: {
        prototype: HTMLMortarDropdownItemElement;
        new (): HTMLMortarDropdownItemElement;
    };
    interface HTMLMortarFileUploadElement extends Components.MortarFileUpload, HTMLStencilElement {
    }
    var HTMLMortarFileUploadElement: {
        prototype: HTMLMortarFileUploadElement;
        new (): HTMLMortarFileUploadElement;
    };
    interface HTMLMortarFormElementElement extends Components.MortarFormElement, HTMLStencilElement {
    }
    var HTMLMortarFormElementElement: {
        prototype: HTMLMortarFormElementElement;
        new (): HTMLMortarFormElementElement;
    };
    interface HTMLMortarIconElement extends Components.MortarIcon, HTMLStencilElement {
    }
    var HTMLMortarIconElement: {
        prototype: HTMLMortarIconElement;
        new (): HTMLMortarIconElement;
    };
    interface HTMLMortarIllustrationElement extends Components.MortarIllustration, HTMLStencilElement {
    }
    var HTMLMortarIllustrationElement: {
        prototype: HTMLMortarIllustrationElement;
        new (): HTMLMortarIllustrationElement;
    };
    interface HTMLMortarInputElement extends Components.MortarInput, HTMLStencilElement {
    }
    var HTMLMortarInputElement: {
        prototype: HTMLMortarInputElement;
        new (): HTMLMortarInputElement;
    };
    interface HTMLMortarMessageElement extends Components.MortarMessage, HTMLStencilElement {
    }
    var HTMLMortarMessageElement: {
        prototype: HTMLMortarMessageElement;
        new (): HTMLMortarMessageElement;
    };
    interface HTMLMortarModalElement extends Components.MortarModal, HTMLStencilElement {
    }
    var HTMLMortarModalElement: {
        prototype: HTMLMortarModalElement;
        new (): HTMLMortarModalElement;
    };
    interface HTMLMortarRadioElement extends Components.MortarRadio, HTMLStencilElement {
    }
    var HTMLMortarRadioElement: {
        prototype: HTMLMortarRadioElement;
        new (): HTMLMortarRadioElement;
    };
    interface HTMLMortarRadioItemElement extends Components.MortarRadioItem, HTMLStencilElement {
    }
    var HTMLMortarRadioItemElement: {
        prototype: HTMLMortarRadioItemElement;
        new (): HTMLMortarRadioItemElement;
    };
    interface HTMLMortarRadioToggleElement extends Components.MortarRadioToggle, HTMLStencilElement {
    }
    var HTMLMortarRadioToggleElement: {
        prototype: HTMLMortarRadioToggleElement;
        new (): HTMLMortarRadioToggleElement;
    };
    interface HTMLMortarRadioToggleItemElement extends Components.MortarRadioToggleItem, HTMLStencilElement {
    }
    var HTMLMortarRadioToggleItemElement: {
        prototype: HTMLMortarRadioToggleItemElement;
        new (): HTMLMortarRadioToggleItemElement;
    };
    interface HTMLMortarRangeElement extends Components.MortarRange, HTMLStencilElement {
    }
    var HTMLMortarRangeElement: {
        prototype: HTMLMortarRangeElement;
        new (): HTMLMortarRangeElement;
    };
    interface HTMLMortarTextareaElement extends Components.MortarTextarea, HTMLStencilElement {
    }
    var HTMLMortarTextareaElement: {
        prototype: HTMLMortarTextareaElement;
        new (): HTMLMortarTextareaElement;
    };
    interface HTMLMortarToggleElement extends Components.MortarToggle, HTMLStencilElement {
    }
    var HTMLMortarToggleElement: {
        prototype: HTMLMortarToggleElement;
        new (): HTMLMortarToggleElement;
    };
    interface HTMLMortarTooltipElement extends Components.MortarTooltip, HTMLStencilElement {
    }
    var HTMLMortarTooltipElement: {
        prototype: HTMLMortarTooltipElement;
        new (): HTMLMortarTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "masked-input": HTMLMaskedInputElement;
        "mortar-alert": HTMLMortarAlertElement;
        "mortar-button": HTMLMortarButtonElement;
        "mortar-checkbox": HTMLMortarCheckboxElement;
        "mortar-checkbox-item": HTMLMortarCheckboxItemElement;
        "mortar-datepicker": HTMLMortarDatepickerElement;
        "mortar-datepicker-calendar": HTMLMortarDatepickerCalendarElement;
        "mortar-dropdown": HTMLMortarDropdownElement;
        "mortar-dropdown-item": HTMLMortarDropdownItemElement;
        "mortar-file-upload": HTMLMortarFileUploadElement;
        "mortar-form-element": HTMLMortarFormElementElement;
        "mortar-icon": HTMLMortarIconElement;
        "mortar-illustration": HTMLMortarIllustrationElement;
        "mortar-input": HTMLMortarInputElement;
        "mortar-message": HTMLMortarMessageElement;
        "mortar-modal": HTMLMortarModalElement;
        "mortar-radio": HTMLMortarRadioElement;
        "mortar-radio-item": HTMLMortarRadioItemElement;
        "mortar-radio-toggle": HTMLMortarRadioToggleElement;
        "mortar-radio-toggle-item": HTMLMortarRadioToggleItemElement;
        "mortar-range": HTMLMortarRangeElement;
        "mortar-textarea": HTMLMortarTextareaElement;
        "mortar-toggle": HTMLMortarToggleElement;
        "mortar-tooltip": HTMLMortarTooltipElement;
    }
}
declare namespace LocalJSX {
    interface MaskedInput {
        "elementclass"?: string;
        "inputmode"?: string;
        "inputtype"?: string;
        "name"?: string;
        "onInputChange"?: (event: CustomEvent<string>) => void;
        "onMaskedBlur"?: (event: CustomEvent<string>) => void;
        "options"?: {
            mask: Array<String>;
            pipe: Function;
            guide: Boolean;
            keepCharPositions: Boolean;
            showMask: Boolean;
        };
        "pattern"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface MortarAlert {
        "btnkind"?: string;
        "btnlabel"?: string;
        "focusEl"?: HTMLElement;
        "headline"?: string;
        "kind"?: string;
        "open"?: boolean;
        "overlay"?: boolean;
    }
    interface MortarButton {
        "buttontype"?: string;
        "disabled"?: boolean;
        "elementclass"?: string;
        "href"?: string;
        "kind"?: string;
        "size"?: string;
        "target"?: string;
    }
    interface MortarCheckbox {
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "name"?: string;
        "screenreaderlabel"?: boolean;
    }
    interface MortarCheckboxItem {
        "checked"?: boolean;
        "disabled"?: boolean;
        "haserror"?: boolean;
        "indeterminate"?: boolean;
        "label"?: string;
        "name"?: string;
        "required"?: boolean;
        "value"?: string;
    }
    interface MortarDatepicker {
        "clearlabel"?: string;
        "dateToString"?: (date: any) => string;
        "days"?: string[];
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "header"?: boolean;
        "label"?: string;
        "mask"?: string;
        "max"?: Date | string;
        "min"?: Date | string;
        "monthplaceholder"?: string;
        "months"?: string[];
        "monthselectlabel"?: string;
        "name"?: string;
        "nextlabel"?: string;
        "onClearDate"?: (event: CustomEvent<void>) => void;
        "onDateOutOfRange"?: (event: CustomEvent<Date>) => void;
        "onInputChange"?: (event: CustomEvent<Date>) => void;
        "onSelectDate"?: (event: CustomEvent<Date>) => void;
        "open"?: boolean;
        "placeholder"?: string;
        "previouslabel"?: string;
        "required"?: boolean;
        "screenreaderlabel"?: boolean;
        "togglelabel"?: (date: any) => string;
        "value"?: Date | string;
        "valueString"?: string;
        "yearplaceholder"?: string;
        "yearselectlabel"?: string;
    }
    interface MortarDatepickerCalendar {
        "clearlabel"?: string;
        "current"?: Date | string;
        "customClass"?: (_year: any, _month: any, _date: any) => string;
        "days"?: string[];
        "embed"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "header"?: boolean;
        "highlight"?: number;
        "label"?: string;
        "max"?: Date | string;
        "min"?: Date | string;
        "monthlabel"?: string;
        "monthplaceholder"?: string;
        "months"?: string[];
        "monthselectlabel"?: string;
        "name"?: string;
        "nextlabel"?: string;
        "onClearDate"?: (event: CustomEvent<void>) => void;
        "onClickDate"?: (event: CustomEvent<Date>) => void;
        "onKeyboardExit"?: (event: CustomEvent<void>) => void;
        "onKeyboardSelect"?: (event: CustomEvent<KeyboardEvent>) => void;
        "onSelectDate"?: (event: CustomEvent<Date>) => void;
        "open"?: boolean;
        "previouslabel"?: string;
        "screenreaderlabel"?: boolean;
        "selected"?: Date | string;
        "yearlabel"?: string;
        "yearplaceholder"?: string;
        "yearselectlabel"?: string;
    }
    interface MortarDropdown {
        "disabled"?: boolean;
        "error"?: string;
        "focused"?: boolean;
        "haserror"?: boolean;
        "help"?: string;
        "highlight"?: number;
        "label"?: string;
        "name"?: string;
        "onItemSelect"?: (event: CustomEvent<Object>) => void;
        "open"?: boolean;
        "placeholder"?: string;
        "required"?: boolean;
        "screenreaderlabel"?: boolean;
        "size"?: string;
        "value"?: string;
    }
    interface MortarDropdownItem {
        "disabled"?: boolean;
        "highlighted"?: boolean;
        "label"?: string;
        "selected"?: boolean;
        "value"?: string;
    }
    interface MortarFileUpload {
        "descriptor"?: string;
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "multiple"?: boolean;
        "name"?: string;
        "required"?: boolean;
        "screenreaderlabel"?: boolean;
        "text"?: string;
    }
    interface MortarFormElement {
        "disabled"?: boolean;
        "elementclass"?: string;
        "error"?: string;
        "haserror"?: boolean;
        "help"?: string;
        "label"?: string;
        "legend"?: string;
        "legendId"?: string;
        "name"?: string;
        "screenreaderlabel"?: boolean;
    }
    interface MortarIcon {
        "arialabel"?: string;
        "class"?: string;
        "kind"?: string;
        "label"?: string;
    }
    interface MortarIllustration {
        "arialabel"?: string;
        "kind"?: string;
        "label"?: string;
    }
    interface MortarInput {
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "help"?: string;
        "inputmode"?: string;
        "label"?: string;
        "mask"?: string;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "screenreaderlabel"?: boolean;
        "size"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface MortarMessage {
        "kind"?: string;
        "open"?: boolean;
    }
    interface MortarModal {
        "closebtnlabel"?: string;
        "focusEl"?: HTMLElement;
        "name"?: string;
        "open"?: boolean;
    }
    interface MortarRadio {
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "name"?: string;
        "screenreaderlabel"?: boolean;
    }
    interface MortarRadioItem {
        "checked"?: boolean;
        "disabled"?: boolean;
        "group"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "light"?: boolean;
        "name"?: string;
        "required"?: boolean;
        "value"?: string;
    }
    interface MortarRadioToggle {
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "name"?: string;
        "screenreaderlabel"?: boolean;
    }
    interface MortarRadioToggleItem {
        "checked"?: boolean;
        "disabled"?: boolean;
        "group"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "name"?: string;
        "required"?: boolean;
        "size"?: string;
        "value"?: string;
    }
    interface MortarRange {
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "maxlabel"?: string;
        "maxplaceholder"?: string;
        "maxrequired"?: boolean;
        "maxvalue"?: string;
        "minlabel"?: string;
        "minplaceholder"?: string;
        "minrequired"?: boolean;
        "minvalue"?: string;
        "name"?: string;
        "screenreaderlabel"?: boolean;
        "size"?: string;
    }
    interface MortarTextarea {
        "cols"?: string;
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "hasmessage"?: boolean;
        "label"?: string;
        "maxlength"?: string;
        "message"?: (amount: any) => string;
        "name"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "rows"?: string;
        "screenreaderlabel"?: boolean;
        "value"?: string;
    }
    interface MortarToggle {
        "checked"?: boolean;
        "disabled"?: boolean;
        "error"?: string;
        "haserror"?: boolean;
        "label"?: string;
        "name"?: string;
        "required"?: boolean;
        "screenreaderlabel"?: boolean;
        "size"?: string;
    }
    interface MortarTooltip {
        "hover"?: boolean;
        "open"?: boolean;
        "position"?: string;
        "transition"?: boolean;
    }
    interface IntrinsicElements {
        "masked-input": MaskedInput;
        "mortar-alert": MortarAlert;
        "mortar-button": MortarButton;
        "mortar-checkbox": MortarCheckbox;
        "mortar-checkbox-item": MortarCheckboxItem;
        "mortar-datepicker": MortarDatepicker;
        "mortar-datepicker-calendar": MortarDatepickerCalendar;
        "mortar-dropdown": MortarDropdown;
        "mortar-dropdown-item": MortarDropdownItem;
        "mortar-file-upload": MortarFileUpload;
        "mortar-form-element": MortarFormElement;
        "mortar-icon": MortarIcon;
        "mortar-illustration": MortarIllustration;
        "mortar-input": MortarInput;
        "mortar-message": MortarMessage;
        "mortar-modal": MortarModal;
        "mortar-radio": MortarRadio;
        "mortar-radio-item": MortarRadioItem;
        "mortar-radio-toggle": MortarRadioToggle;
        "mortar-radio-toggle-item": MortarRadioToggleItem;
        "mortar-range": MortarRange;
        "mortar-textarea": MortarTextarea;
        "mortar-toggle": MortarToggle;
        "mortar-tooltip": MortarTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "masked-input": LocalJSX.MaskedInput & JSXBase.HTMLAttributes<HTMLMaskedInputElement>;
            "mortar-alert": LocalJSX.MortarAlert & JSXBase.HTMLAttributes<HTMLMortarAlertElement>;
            "mortar-button": LocalJSX.MortarButton & JSXBase.HTMLAttributes<HTMLMortarButtonElement>;
            "mortar-checkbox": LocalJSX.MortarCheckbox & JSXBase.HTMLAttributes<HTMLMortarCheckboxElement>;
            "mortar-checkbox-item": LocalJSX.MortarCheckboxItem & JSXBase.HTMLAttributes<HTMLMortarCheckboxItemElement>;
            "mortar-datepicker": LocalJSX.MortarDatepicker & JSXBase.HTMLAttributes<HTMLMortarDatepickerElement>;
            "mortar-datepicker-calendar": LocalJSX.MortarDatepickerCalendar & JSXBase.HTMLAttributes<HTMLMortarDatepickerCalendarElement>;
            "mortar-dropdown": LocalJSX.MortarDropdown & JSXBase.HTMLAttributes<HTMLMortarDropdownElement>;
            "mortar-dropdown-item": LocalJSX.MortarDropdownItem & JSXBase.HTMLAttributes<HTMLMortarDropdownItemElement>;
            "mortar-file-upload": LocalJSX.MortarFileUpload & JSXBase.HTMLAttributes<HTMLMortarFileUploadElement>;
            "mortar-form-element": LocalJSX.MortarFormElement & JSXBase.HTMLAttributes<HTMLMortarFormElementElement>;
            "mortar-icon": LocalJSX.MortarIcon & JSXBase.HTMLAttributes<HTMLMortarIconElement>;
            "mortar-illustration": LocalJSX.MortarIllustration & JSXBase.HTMLAttributes<HTMLMortarIllustrationElement>;
            "mortar-input": LocalJSX.MortarInput & JSXBase.HTMLAttributes<HTMLMortarInputElement>;
            "mortar-message": LocalJSX.MortarMessage & JSXBase.HTMLAttributes<HTMLMortarMessageElement>;
            "mortar-modal": LocalJSX.MortarModal & JSXBase.HTMLAttributes<HTMLMortarModalElement>;
            "mortar-radio": LocalJSX.MortarRadio & JSXBase.HTMLAttributes<HTMLMortarRadioElement>;
            "mortar-radio-item": LocalJSX.MortarRadioItem & JSXBase.HTMLAttributes<HTMLMortarRadioItemElement>;
            "mortar-radio-toggle": LocalJSX.MortarRadioToggle & JSXBase.HTMLAttributes<HTMLMortarRadioToggleElement>;
            "mortar-radio-toggle-item": LocalJSX.MortarRadioToggleItem & JSXBase.HTMLAttributes<HTMLMortarRadioToggleItemElement>;
            "mortar-range": LocalJSX.MortarRange & JSXBase.HTMLAttributes<HTMLMortarRangeElement>;
            "mortar-textarea": LocalJSX.MortarTextarea & JSXBase.HTMLAttributes<HTMLMortarTextareaElement>;
            "mortar-toggle": LocalJSX.MortarToggle & JSXBase.HTMLAttributes<HTMLMortarToggleElement>;
            "mortar-tooltip": LocalJSX.MortarTooltip & JSXBase.HTMLAttributes<HTMLMortarTooltipElement>;
        }
    }
}

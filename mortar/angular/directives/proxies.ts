/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'mortar';

import { MaskedInput as IMaskedInput } from 'mortar/dist/types/components/masked-input/masked-input';
export declare interface MaskedInput extends Components.MaskedInput {}
@ProxyCmp({
  inputs: ['elementclass', 'inputmode', 'name', 'options', 'pattern', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'masked-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['elementclass', 'inputmode', 'name', 'options', 'pattern', 'placeholder', 'type', 'value'],
  outputs: ['maskedBlur', 'inputChange']
})
export class MaskedInput {
  /**  */
  maskedBlur!: IMaskedInput['maskedBlur'];
  /**  */
  inputChange!: IMaskedInput['inputChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['maskedBlur', 'inputChange']);
  }
}


export declare interface MortarAlert extends Components.MortarAlert {}
@ProxyCmp({
  inputs: ['btnkind', 'btnlabel', 'headline', 'kind', 'open', 'overlay']
})
@Component({
  selector: 'mortar-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['btnkind', 'btnlabel', 'headline', 'kind', 'open', 'overlay']
})
export class MortarAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarButton extends Components.MortarButton {}
@ProxyCmp({
  inputs: ['disabled', 'elementclass', 'href', 'kind', 'size', 'target']
})
@Component({
  selector: 'mortar-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'elementclass', 'href', 'kind', 'size', 'target']
})
export class MortarButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarCheckbox extends Components.MortarCheckbox {}
@ProxyCmp({
  inputs: ['error', 'haserror', 'label']
})
@Component({
  selector: 'mortar-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['error', 'haserror', 'label']
})
export class MortarCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarCheckboxItem extends Components.MortarCheckboxItem {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'group', 'haserror', 'indeterminate', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'mortar-checkbox-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'group', 'haserror', 'indeterminate', 'label', 'name', 'required', 'value']
})
export class MortarCheckboxItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { MortarDatepicker as IMortarDatepicker } from 'mortar/dist/types/components/mortar-datepicker/mortar-datepicker';
export declare interface MortarDatepicker extends Components.MortarDatepicker {}
@ProxyCmp({
  inputs: ['dateToString', 'disabled', 'error', 'haserror', 'header', 'label', 'mask', 'max', 'min', 'name', 'open', 'placeholder', 'required', 'value', 'valueString']
})
@Component({
  selector: 'mortar-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dateToString', 'disabled', 'error', 'haserror', 'header', 'label', 'mask', 'max', 'min', 'name', 'open', 'placeholder', 'required', 'value', 'valueString'],
  outputs: ['selectDate', 'clearDate', 'inputChange', 'dateOutOfRange']
})
export class MortarDatepicker {
  /**  */
  selectDate!: IMortarDatepicker['selectDate'];
  /**  */
  clearDate!: IMortarDatepicker['clearDate'];
  /**  */
  inputChange!: IMortarDatepicker['inputChange'];
  /**  */
  dateOutOfRange!: IMortarDatepicker['dateOutOfRange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectDate', 'clearDate', 'inputChange', 'dateOutOfRange']);
  }
}

import { MortarDatepicker as IMortarDatepicker } from 'mortar/dist/types/components/mortar-datepicker-calendar/mortar-datepicker-calendar';
export declare interface MortarDatepickerCalendar extends Components.MortarDatepickerCalendar {}
@ProxyCmp({
  inputs: ['current', 'customClass', 'days', 'embed', 'focused', 'header', 'highlight', 'maxDate', 'minDate', 'monthPlaceholder', 'months', 'open', 'selected', 'yearPlaceholder']
})
@Component({
  selector: 'mortar-datepicker-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['current', 'customClass', 'days', 'embed', 'focused', 'header', 'highlight', 'maxDate', 'minDate', 'monthPlaceholder', 'months', 'open', 'selected', 'yearPlaceholder'],
  outputs: ['clearDate', 'selectDate', 'clickDate', 'keyboardSelect', 'keyboardExit']
})
export class MortarDatepickerCalendar {
  /**  */
  clearDate!: IMortarDatepicker['clearDate'];
  /**  */
  selectDate!: IMortarDatepicker['selectDate'];
  /**  */
  clickDate!: IMortarDatepicker['clickDate'];
  /**  */
  keyboardSelect!: IMortarDatepicker['keyboardSelect'];
  /**  */
  keyboardExit!: IMortarDatepicker['keyboardExit'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clearDate', 'selectDate', 'clickDate', 'keyboardSelect', 'keyboardExit']);
  }
}

import { MortarDropdown as IMortarDropdown } from 'mortar/dist/types/components/mortar-dropdown/mortar-dropdown';
export declare interface MortarDropdown extends Components.MortarDropdown {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'focused', 'haserror', 'help', 'highlight', 'label', 'open', 'placeholder', 'size', 'value']
})
@Component({
  selector: 'mortar-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'focused', 'haserror', 'help', 'highlight', 'label', 'open', 'placeholder', 'size', 'value'],
  outputs: ['itemSelect']
})
export class MortarDropdown {
  /**  */
  itemSelect!: IMortarDropdown['itemSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelect']);
  }
}


export declare interface MortarDropdownItem extends Components.MortarDropdownItem {}
@ProxyCmp({
  inputs: ['disabled', 'highlighted', 'label', 'selected', 'value'],
  methods: ['getEl']
})
@Component({
  selector: 'mortar-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'highlighted', 'label', 'selected', 'value']
})
export class MortarDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarFileUpload extends Components.MortarFileUpload {}
@ProxyCmp({
  inputs: ['descriptor', 'disabled', 'error', 'haserror', 'label', 'multiple', 'name', 'required', 'text']
})
@Component({
  selector: 'mortar-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['descriptor', 'disabled', 'error', 'haserror', 'label', 'multiple', 'name', 'required', 'text']
})
export class MortarFileUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarFormElement extends Components.MortarFormElement {}
@ProxyCmp({
  inputs: ['disabled', 'elementclass', 'error', 'haserror', 'help', 'label', 'legend', 'legendId', 'name']
})
@Component({
  selector: 'mortar-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'elementclass', 'error', 'haserror', 'help', 'label', 'legend', 'legendId', 'name']
})
export class MortarFormElement {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarIcon extends Components.MortarIcon {}
@ProxyCmp({
  inputs: ['arialabel', 'class', 'kind']
})
@Component({
  selector: 'mortar-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['arialabel', 'class', 'kind']
})
export class MortarIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarIllustration extends Components.MortarIllustration {}
@ProxyCmp({
  inputs: ['kind']
})
@Component({
  selector: 'mortar-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['kind']
})
export class MortarIllustration {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarInput extends Components.MortarInput {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'haserror', 'help', 'inputmode', 'label', 'mask', 'name', 'pattern', 'placeholder', 'size', 'type', 'value']
})
@Component({
  selector: 'mortar-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'haserror', 'help', 'inputmode', 'label', 'mask', 'name', 'pattern', 'placeholder', 'size', 'type', 'value']
})
export class MortarInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarMessage extends Components.MortarMessage {}
@ProxyCmp({
  inputs: ['kind', 'open']
})
@Component({
  selector: 'mortar-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['kind', 'open']
})
export class MortarMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarModal extends Components.MortarModal {}
@ProxyCmp({
  inputs: ['open']
})
@Component({
  selector: 'mortar-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['open']
})
export class MortarModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarRadio extends Components.MortarRadio {}
@ProxyCmp({
  inputs: ['error', 'haserror', 'label']
})
@Component({
  selector: 'mortar-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['error', 'haserror', 'label']
})
export class MortarRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarRadioItem extends Components.MortarRadioItem {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'group', 'haserror', 'label', 'light', 'name', 'required', 'value']
})
@Component({
  selector: 'mortar-radio-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'group', 'haserror', 'label', 'light', 'name', 'required', 'value']
})
export class MortarRadioItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarRadioToggle extends Components.MortarRadioToggle {}
@ProxyCmp({
  inputs: ['error', 'haserror', 'label']
})
@Component({
  selector: 'mortar-radio-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['error', 'haserror', 'label']
})
export class MortarRadioToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarRadioToggleItem extends Components.MortarRadioToggleItem {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'group', 'haserror', 'label', 'name', 'required', 'size', 'value']
})
@Component({
  selector: 'mortar-radio-toggle-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'group', 'haserror', 'label', 'name', 'required', 'size', 'value']
})
export class MortarRadioToggleItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarRange extends Components.MortarRange {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'haserror', 'label', 'maxlabel', 'maxplaceholder', 'maxrequired', 'maxvalue', 'minlabel', 'minplaceholder', 'minrequired', 'minvalue', 'name', 'size']
})
@Component({
  selector: 'mortar-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'haserror', 'label', 'maxlabel', 'maxplaceholder', 'maxrequired', 'maxvalue', 'minlabel', 'minplaceholder', 'minrequired', 'minvalue', 'name', 'size']
})
export class MortarRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarTextarea extends Components.MortarTextarea {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'haserror', 'label', 'maxlength', 'message', 'name', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'mortar-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'haserror', 'label', 'maxlength', 'message', 'name', 'placeholder', 'required', 'value']
})
export class MortarTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarToggle extends Components.MortarToggle {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'haserror', 'label', 'name', 'required', 'size']
})
@Component({
  selector: 'mortar-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'error', 'haserror', 'label', 'name', 'required', 'size']
})
export class MortarToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MortarTooltip extends Components.MortarTooltip {}
@ProxyCmp({
  inputs: ['hover', 'open', 'position', 'transition']
})
@Component({
  selector: 'mortar-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hover', 'open', 'position', 'transition']
})
export class MortarTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

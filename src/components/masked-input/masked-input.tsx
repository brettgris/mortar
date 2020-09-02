import { Component, Host, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';
import textMask from 'vanilla-text-mask';
import types from './types';

@Component({
  tag: 'masked-input',
  scoped: false,
})
export class MaskedInput {
  @Prop() placeholder = '';
  @Prop() elementclass = '';
  @Prop() required = false;
  @Prop() value = '';
  @Prop() type = '';
  @Prop() inputtype = 'text';
  @Prop() inputmode = 'text';
  @Prop() name = 'input';
  @Prop() pattern = '';
  @Prop() options: {
    mask: Array<String>,
    pipe: Function,
    guide: Boolean,
    keepCharPositions: Boolean,
    showMask: Boolean
  }
  @Event() maskedBlur: EventEmitter<string>;
  @Event() inputChange: EventEmitter<string>;
  
  @Element() root: HTMLElement;
  private mask?;

  componentDidLoad() {
    if (this.type && types[this.type]) {
      this.createTextMask({
        ...types[this.type],
        ...this.options
      });
    } else if (this.options) {
      this.createTextMask(this.options);
    }
  }

  createTextMask(options) {
    const inputElement = this.root.querySelector('input');
    inputElement.value = this.value;
    if (this.inputtype === 'text') {
      this.mask = textMask({
        inputElement,
        ...options
      });
    }
  }

  @Watch('value')
  handleValue(v) {
    if (this.mask) {
      this.mask.textMaskInputElement.update(v);
    } else {
      const inputElement = this.root.querySelector('input');
      inputElement.value = v;
    }
  }

  handleBlur = () => {
    if (this.mask) {
      this.maskedBlur.emit(this.mask.textMaskInputElement.state.previousConformedValue);
    }
  }

  handleInput = (evt) => {
    this.inputChange.emit(evt.target.value);
  }

  render() {
    return (
      <Host>
        <input 
          class={this.elementclass} 
          placeholder={this.placeholder} 
          type={this.inputtype}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
          pattern={this.pattern}
          inputmode={this.inputmode}
          id={this.name}
          required={this.required}
          aria-required={this.required}
        />
      </Host>
      
    );
  }

}
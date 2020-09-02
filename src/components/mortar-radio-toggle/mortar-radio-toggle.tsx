import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-radio-toggle',
  scoped: false,
})
export class MortarRadioToggle {
  @Prop() label = '';
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() name = '';

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="radio-button-group"
        name={this.name}
      >
        <slot></slot>
      </mortar-form-element>
    );
  }
}

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-radio-toggle',
  scoped: false,
})
export class MortarRadioToggle {
  @Prop() label = '';
  @Prop() error = '';
  @Prop() haserror = false;

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="radio-button-group"
      >
        <slot></slot>
      </mortar-form-element>
    );
  }
}

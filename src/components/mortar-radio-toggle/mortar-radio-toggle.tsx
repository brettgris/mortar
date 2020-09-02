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
  @Prop() screenreaderlabel = false;

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="radio-button-group"
        name={this.name}
        screenreaderlabel={this.screenreaderlabel}
      >
        <slot></slot>
      </mortar-form-element>
    );
  }
}

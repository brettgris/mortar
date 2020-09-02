import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-radio',
  scoped: false,
})
export class MortarRadio {
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() label = '';
  @Prop() name = 'radio';
  @Prop() screenreaderlabel = false;

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="radio-group"
        name={this.name}
        screenreaderlabel={this.screenreaderlabel}
      >
          <slot></slot>
      </mortar-form-element>
    );
  }
}

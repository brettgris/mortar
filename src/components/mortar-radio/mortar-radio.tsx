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

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="radio-group"
        name={this.name}
      >
          <slot></slot>
      </mortar-form-element>
    );
  }
}

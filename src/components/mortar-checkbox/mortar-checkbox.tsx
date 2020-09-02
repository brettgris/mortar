import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-checkbox',
  scoped: false,
})
export class MortarCheckbox {
  @Prop() label = '';
  @Prop() haserror = false;
  @Prop() error = '';
  @Prop() name = '';
  @Prop() screenreaderlabel = false;

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        haserror={this.haserror}
        error={this.error}
        elementclass="checkbox"
        name={this.name}
        screenreaderlabel={this.screenreaderlabel}
      >
        <slot></slot>
      </mortar-form-element>
      
    );
  }

}
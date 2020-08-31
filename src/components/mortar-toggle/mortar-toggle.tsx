import { Component, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-toggle',
  scoped: false,
})
export class MortarToggle {
  @Prop() label = '';
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() name = 'toggle';
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() size = 'md';
  @Prop() checked = false;

  className = () => {
    return classnames('toggle', `toggle-${this.size}`, {
      'error': this.haserror
    })
  }

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="toggle-wrapper"
        name={this.name}
      >
        <input 
          class={this.className()}
          type="checkbox" 
          name={this.name} 
          id={this.name}
          disabled={this.disabled}
          required={this.required}
          checked={this.checked}
        /> 
        <label htmlFor={this.name}></label>
      </mortar-form-element>
    );
  }
}

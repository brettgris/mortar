import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-form-element'
})
export class MortarFormElement implements ComponentInterface {
  @Prop() elementclass = '';
  @Prop() label = '';
  @Prop() haserror = false;
  @Prop() error = '';
  @Prop() help = '';
  @Prop() legend = '';
  @Prop() disabled = false;
  @Prop() legendId = '';
  @Prop() name = '';

  render() {
    return (
      <fieldset class={this.elementclass} disabled={this.disabled === true}>
        {this.label && <label htmlFor={this.name}>{this.label}</label>}
        {this.legend && <legend id={this.legendId}>{this.legend}</legend>}
        <slot></slot>
        {this.help && <div class="helper-message show">{this.help}</div>}
        {this.haserror === true && <div class="error-message show" role="alert">{this.error}</div>}
      </fieldset>
    );
  }
}
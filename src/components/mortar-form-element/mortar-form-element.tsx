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
  @Prop() screenreaderlabel = false;

  render() {
    return (
      <fieldset class={this.elementclass}>
        {this.label && <label htmlFor={this.name} class={(this.screenreaderlabel) ? 'screen-reader-only' : ''}>{this.label}</label>}
        {this.legend && <legend id={this.legendId} class={(this.screenreaderlabel) ? 'screen-reader-only' : ''}>{this.legend}</legend>}
        <slot></slot>
        {this.help && <div class="helper-message show">{this.help}</div>}
        {this.haserror && <div class="error-message show" role="alert">{this.error}</div>}
      </fieldset>
    );
  }
}
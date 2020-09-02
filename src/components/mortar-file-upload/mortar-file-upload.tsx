import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-file-upload',
  scoped: false,
})
export class MortarFileUpload implements ComponentInterface {
  @Prop() label = '';
  @Prop() haserror = false;
  @Prop() error = '';
  @Prop() name = 'file-upload';
  @Prop() disabled = false;
  @Prop() text = '';
  @Prop() descriptor = '';
  @Prop() multiple = true;
  @Prop() required = false;

  labelClassName = () => {
    return classnames('input-label', {
      'error': this.haserror
    });
  }

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        legendId={`${this.name}-label`}
        disabled={this.disabled}
        elementclass="file-upload"
        haserror={this.haserror}
        error={this.error}
        name={this.name}
      >
        <input id={this.name} type="file" multiple={this.multiple} required={this.required} aria-required={this.required} />
        <label htmlFor={this.name} class={this.labelClassName()}>
            <span class="message"><mortar-icon kind="upload"></mortar-icon>{this.text}</span>
            {this.descriptor && <span class="descriptor">{this.descriptor}</span>}
        </label>
      </mortar-form-element>
    );
  }

}

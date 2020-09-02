import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-input',
  scoped: false,
})
export class MortarInput {
  @Prop() size = 'md';
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() label = '';
  @Prop() help = '';
  @Prop() placeholder = '';
  @Prop() value = '';
  @Prop() disabled = false;
  @Prop() mask = '';
  @Prop() type = "text";
  @Prop() inputmode = 'text';
  @Prop() pattern = '';
  @Prop() name = 'input';
  @Prop() required = false;

  className() {
    return `text ${this.size}`;
  };

  render() {
    
    return (
      <mortar-form-element 
        label={this.label}
        help={this.help}
        haserror={this.haserror}
        error={this.error}
        elementclass={this.className()}
        name={this.name}
      >
        <masked-input
          elementclass={(this.haserror) ? 'error' : ''} 
          value={this.value}
          placeholder={this.placeholder}
          type={this.mask}
          inputmode={this.inputmode}
          pattern={this.pattern}
          name={this.name}
          required={this.required}
        />
      </mortar-form-element>
    );
  }
}
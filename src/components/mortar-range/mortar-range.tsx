import { Component, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-range',
  scoped: false,
})
export class MortarRange {
  @Prop() label = '';
  @Prop() haserror = false;
  @Prop() error = '';
  @Prop() minlabel = '';
  @Prop() maxlabel = '';
  @Prop() minrequired = true;
  @Prop() maxrequired = true;
  @Prop() disabled = false;
  @Prop() minplaceholder = '';
  @Prop() maxplaceholder = '';
  @Prop() name = 'input-range';
  @Prop() minvalue = '';
  @Prop() maxvalue = '';
  @Prop() size = 'md';

  className = () => {
    return `range-min-max ${this.size}`;
  }

  inputClassName = () => {
    return classnames({
      'error': this.haserror === true
    })
  }

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        haserror={this.haserror}
        error={this.error}
        elementclass={this.className()}
      >
        <div>
            {this.minlabel && 
              <label htmlFor={`${this.name}-min`} class="screen-reader-only">{this.minlabel}</label>
            }
            <input 
              id={`${this.name}-min`} 
              type="text" 
              disabled={this.disabled === true} 
              required={this.minrequired} 
              class={this.inputClassName()} 
              placeholder={this.minplaceholder}
              value={this.minvalue}
            />
            {this.maxlabel && 
              <label htmlFor={`${this.name}-max`} class="screen-reader-only">{this.maxlabel}</label>
            }
            <input 
              id={`${this.name}-max`}
              type="text" 
              disabled={this.disabled === true} 
              required={this.maxrequired} 
              class={this.inputClassName()} 
              placeholder={this.maxplaceholder}
              value={this.maxvalue}
            />
        </div>
      </mortar-form-element>
    );
  }
}

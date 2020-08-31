import { Component, h, Host, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-checkbox-item',
  scoped: false
})
export class MortarCheckboxItem {
    @Prop() label = '';
    @Prop() value = '';
    @Prop() disabled = false;
    @Prop() required = true;
    @Prop() group = '';
    @Prop() name = '';
    @Prop() checked = false;
    @Prop() indeterminate = false;
    @Prop() haserror = false;

    className = () => {
        return classnames({
            'checkbox-default': this.indeterminate !== true,
            'checkbox-indeterminate': this.indeterminate === true,
            'error': this.haserror === true
        })
    }

    render() {
        return (
            <Host>
                <input type="checkbox" 
                    id={this.name} 
                    class={this.className()} 
                    disabled={this.disabled === true} 
                    required={this.required === true}
                    checked={this.checked === true}
                />
                <label htmlFor={this.name}>{this.label}</label>
            </Host>
        );
    }
}
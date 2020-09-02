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
    @Prop() required = false;
    @Prop() name = '';
    @Prop() checked = false;
    @Prop() indeterminate = false;
    @Prop() haserror = false;

    className = () => {
        return classnames({
            'checkbox-default': !this.indeterminate,
            'checkbox-indeterminate': this.indeterminate,
            'error': this.haserror
        })
    }

    render() {
        return (
            <Host>
                <input type="checkbox" 
                    id={this.name} 
                    class={this.className()} 
                    disabled={this.disabled} 
                    required={this.required}
                    checked={this.checked}
                />
                <label htmlFor={this.name}>{this.label}</label>
            </Host>
        );
    }
}
import { Component, h, Host, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-radio-item'
})
export class MortarRadioItem {
    @Prop() label = '';
    @Prop() value = '';
    @Prop() disabled = false;
    @Prop() required = true;
    @Prop() group = '';
    @Prop() name = '';
    @Prop() checked = false;
    @Prop() light = true;
    @Prop() haserror = false;

    className = () => {
        return classnames('radio-default', {
            'error': this.haserror
        });
    }

    render() {
        return (
            <Host>
                <input type="radio" 
                    id={this.name} 
                    class={this.className()} 
                    name={this.group} 
                    disabled={this.disabled === true} 
                    required={this.required === true}
                    checked={this.checked === true}
                    value={this.value}
                />
                <label htmlFor={this.name}>
                    {!this.light && this.label}
                    {this.light && 
                        <span class="light-text">{this.label}</span>
                    }
                </label>
            </Host>
        );
    }
}
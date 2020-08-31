import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-radio-toggle-item'
})
export class MortarRadioToggleItem {
    @Prop() label = '';
    @Prop() value = '';
    @Prop() disabled = false;
    @Prop() required = false;
    @Prop() group = '';
    @Prop() name = '';
    @Prop() checked = false;
    @Prop() haserror = false;
    @Prop() size = 'md';

    className = () => {
        return `btn btn-${this.size} btn-secondary`;
    }

    render() {
        return (
            <Host>
                <input type="radio" 
                    id={this.name} 
                    name={this.group} 
                    disabled={this.disabled} 
                    required={this.required}
                    checked={this.checked}
                    value={this.value}
                />
                <label htmlFor={this.name} class={this.className()}>
                    {this.label}
                </label>
            </Host>
        );
    }
}
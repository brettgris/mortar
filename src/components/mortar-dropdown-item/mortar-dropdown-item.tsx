import { Component, h, Prop, Element, Method } from '@stencil/core';
import classnames from 'classnames';

@Component({
    tag: 'mortar-dropdown-item'
})
export class MortarDropdownItem {
    @Prop() disabled = false;
    @Prop() highlighted = false;
    @Prop() selected = false;
    @Prop() label = '';
    @Prop() value = '';

    @Element() root:HTMLElement;

    @Method()
    async getEl() {
        return this.root;
    }

    className = () => {
        return classnames('dropdown-item', 'dropdown-item-choice',{
            'dropdown-item-selectable': !this.disabled,
            'dropdown-item-disabled': this.disabled,
            'is-highlighted': !this.disabled && this.highlighted
        });
    }

    render() {
        return (
            <div class={this.className()}
                role="option"
                aria-selected={this.selected}
                data-value={this.value}
                data-disabled={this.disabled}
            >
                {this.label}
            </div>
        );
    }
}
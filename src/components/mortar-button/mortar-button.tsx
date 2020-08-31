import { Component, h, Prop, Host } from '@stencil/core';
import classnames from 'classnames';
@Component({
  tag: 'mortar-button',
  scoped: false
})
export class MortarButton {
  @Prop() kind = 'primary';
  @Prop() size = 'md';
  @Prop() disabled = false;
  @Prop() href = '';
  @Prop() target = '_self';
  @Prop() elementclass = '';

  className() {
    return classnames('btn', `btn-${this.kind}`, `btn-${this.size}`, this.elementclass, {
      'disabled': this.disabled === true
    })
  }

  render() {
    return (
      <Host>
        {!this.href && 
          <button class={this.className()} disabled={this.disabled === true}>
            <slot />
          </button>
        }
        {this.href && 
          <a class={this.className()} href={this.href} target={this.target}>
            <slot />
          </a>
        }
      </Host>
    );
  }
}
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-badge',
  scoped: false,
})
export class MortarBadge {
  @Prop() kind = 'grey';

  className = () => {
    return `mortar-badge mortar-badge-${this.kind}`;
  }

  render() {
    return (
      <Host class={this.className()}>
        <slot></slot>
      </Host>
    );
  }
}

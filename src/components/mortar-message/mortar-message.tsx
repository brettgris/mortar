import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-message',
  scoped: false,
})
export class MortarMessage {
  @Prop() kind = 'success';
  @Prop() open = true;

  render() {
    return (
      <Host class={(this.open) ? '' : 'hide'}>
        <div class={`system-message message-${this.kind}`} role="alert">
          <div class="header5">
            <slot name="headline"></slot>
          </div>
          <div class="copy">
            <slot name="copy"></slot>
          </div>
        </div>
      </Host>
    );
  }
}

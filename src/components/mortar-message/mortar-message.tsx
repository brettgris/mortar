import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-message',
  scoped: false,
})
export class MortarMessage {
  @Prop() kind = 'success';
  @Prop() open = false;

  className = () => {
    return classnames('system-message', `message-${this.kind}`, {
      'show': this.open
    });
  }

  render() {
    return (
      <Host>
        <div class={this.className()} role="alert">
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

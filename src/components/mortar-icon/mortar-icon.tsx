import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mortar-icon',
  scoped: false
})
export class MortarIcon implements ComponentInterface {
  @Prop() kind = "";
  @Prop() arialabel = "";
  @Prop() class = "";

  className() {
    return `storyicon ${this.kind}StoryIcon ${this.class}`;
  }

  render() {
    return (
      <Host>
        <i class={this.className()} aria-label={this.arialabel}>
          <slot></slot>
        </i>
      </Host>
    );
  }

}

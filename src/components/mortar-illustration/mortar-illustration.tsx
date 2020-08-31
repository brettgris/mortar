import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { icons } from './selection.json';

@Component({
  tag: 'mortar-illustration',
  scoped: false,
})
export class MortarIllustration implements ComponentInterface {
  @Prop() kind = '';

  renderChildren(length) {
    const arr = Array.apply(null, Array(length));
    return arr.map((v,k) => (<span class={`path${k+1}`}>{v}</span>));
  }

  render() {
    const icon = icons.find((i) => i.properties.name === this.kind);
    const length = icon?.attrs?.length;

    return (
      <Host>
        {
          length && length <= 1 && 
            <i class={`storyillustration ${this.kind}StoryIllustration`}></i>
        }
        {
          length && length > 1 &&
            <i class={`storyillustration ${this.kind}StoryIllustration`}>{this.renderChildren(length)}</i>
        }
      </Host>
    );
  }

}

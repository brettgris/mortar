import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import icons from './icons';

@Component({
  tag: 'mortar-illustration',
  scoped: false,
})
export class MortarIllustration implements ComponentInterface {
  @Prop() kind = '';
  @Prop() label = '';
  @Prop() arialabel = '';

  renderChildren(length) {
    const arr = Array.apply(null, Array(length));
    return arr.map((v,k) => (<span class={`path${k+1}`}>{v}</span>));
  }

  render() {
    const icon = icons.find((i) => i.name === this.kind);
    const length = icon?.length;

    return (
      <Host>
        {
          length && length <= 1 && 
            <i class={`storyillustration ${this.kind}StoryIllustration`} aria-label={this.arialabel}>
              {this.label &&
                <span class="screen-reader-only">{this.label}</span>
              }
            </i>
        }
        {
          length && length > 1 &&
            <i class={`storyillustration ${this.kind}StoryIllustration`} aria-label={this.arialabel}>
              {this.renderChildren(length)}
              {this.label &&
                <span class="screen-reader-only">{this.label}</span>
              }
            </i>
        }
      </Host>
    );
  }

}

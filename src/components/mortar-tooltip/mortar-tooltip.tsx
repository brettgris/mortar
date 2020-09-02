import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-tooltip'
})
export class MortarTooltip implements ComponentInterface {
  @Prop() position = "top-right"
  @Prop() transition = true;
  @Prop() hover = true;
  @Prop() open = false;

  classname() { 
    return classnames(
      'mortar-tooltip-text', this.position,
      {
        'transition': this.transition,
        'hover': this.hover,
        'mortar-tooltip-open': this.open
      }
    );
  }

  render() {
    return (
      <Host>
        <span class="mortar-tooltip" tabindex="0">
            <span class="mortar-tooltip-icon">
              <slot name="icon"></slot>
            </span>
            <span class={this.classname()} role="status">
                <span class="mortar-tooltip-inner-text-container">
                    <span class="mortar-tooltip-title">
                      <slot name="headline"></slot>
                    </span>
                  <slot name="copy"></slot>
                </span>
            </span>
        </span>
      </Host>
    );
  }

}

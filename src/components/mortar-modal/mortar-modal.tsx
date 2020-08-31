import { Component, Watch, Element, h, Prop, Host } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';

@Component({
  tag: 'mortar-modal',
  scoped: false
})
export class MortarModal {
  @Prop() open = false;
  @Element() root: HTMLElement;

  handleClose = () => {
    this.open = false;
  };

  className() {
    return classnames('modal', {
      'show': this.open === true
    });
  };

  overlayClassName() {
    return classnames('modal-overlay', {
      'show': this.open === true
    })
  };

  @Watch('open') 
  handleOpen(openVal: Boolean) {
    const el = this.root.querySelector('.modal');

    if (!openVal) {
      focusLock.off(el);
    } else {
      focusLock.on(el);

      const btn: HTMLElement = el.querySelector('.modal-close');
      setTimeout(function() {
        if (btn) btn.focus();
      }, 10);
    }
  }

  render() {
    return (
      <Host>
        <div class={this.className()}>
          <button onClick={this.handleClose} class="modal-close">
            <mortar-icon kind="close"></mortar-icon>
          </button>
          <div id="modal-header" class="header3">
            <slot name="headline"></slot>
          </div>
          <div  id="modal-description">
            <slot name="copy"></slot>
          </div>
          <div class="modal-actions">
            <slot name="actions"></slot>
          </div>
        </div>
        <div onClick={this.handleClose} class={this.overlayClassName()}></div>
      </Host>
    );
  }

}

import { Component, Watch, Element, h, Prop, Host, Listen } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';

@Component({
  tag: 'mortar-modal',
  scoped: false
})
export class MortarModal {
  @Prop() open = false;
  @Prop() name = '';
  @Prop() closebtnlabel = 'Close';
  @Prop() focusEl: HTMLElement = null;

  @Element() root: HTMLElement;

  handleClose = () => {
    this.open = false;
  };

  className() {
    return classnames('modal', {
      'show': this.open
    });
  };

  overlayClassName() {
    return classnames('modal-overlay', {
      'show': this.open
    })
  };

  @Watch('open') 
  handleOpen(openVal: Boolean) {
    const el = this.root.querySelector('.modal');

    if (!openVal) {
      focusLock.off(el);
      setTimeout(function() {
        if (this.focusEl) this.focusEl.focus();
      }, 10);
    } else {
      this.focusEl = document.activeElement as HTMLElement;
      focusLock.on(el);

      const btn: HTMLElement = el.querySelector('.modal-close');
      setTimeout(function() {
        if (btn) btn.focus();
      }, 10);
    }
  }

  @Listen('keydown', { target: 'document'})
  handleKeySelect(evt) {
    if (this.open) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        this.open = false;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={this.className()}
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-header" 
          aria-describedby="modal-description"
        >
          <button onClick={this.handleClose} class="modal-close">
            <mortar-icon kind="close" label={this.closebtnlabel}></mortar-icon>
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

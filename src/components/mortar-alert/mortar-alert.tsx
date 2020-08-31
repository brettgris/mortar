import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';

@Component({
  tag: 'mortar-alert',
  scoped: false
})
export class MortarAlert {
  @Prop() kind = 'success';
  @Prop() open = false;
  @Prop() headline = '';
  @Prop() btnlabel = 'Close Window';
  @Prop() btnkind = 'text';
  @Prop() overlay = true;

  @Element() root: HTMLElement;

  className = () => {
    return classnames('alert', `alert-${this.kind}`, {
      'show': this.open === true
    })
  }

  @Watch('open') 
  handleOpen(openVal: Boolean) {
    const el = this.root.querySelector('.alert');

    if (!openVal) {
      focusLock.off(el);
    } else {
      focusLock.on(el);

      const btn:HTMLElement = el.querySelector('.alert-close');
      setTimeout(function() {
        if (btn) btn.focus();
      }, 10);
    }
  }

  iconKind = () => {
    switch(this.kind) {
      case "error":
        return "close";
      case "warning":
        return "warning";
      case "success":
        return "check";
      default:
        return "close";
    }
  }

  overlayClassName = () => {
    return classnames('alert-overlay', {
      'show': this.open === true && this.overlay === true
    });
  }

  handleClose = () => {
    this.open = false;
  };

  render() {
    return (
      <Host>
        <div class={this.className()}
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="alert-header" 
          aria-describedby="alert-description"
        >
          <mortar-icon kind={this.iconKind()}></mortar-icon>
          <div id="alert-header" class="header3">
            <slot name="headline"></slot>
          </div>
          <div id="alert-description">
            <slot name="copy"></slot>
          </div>
          {this.btnlabel && <mortar-button elementclass="alert-close" kind={this.btnkind} onClick={this.handleClose}>{this.btnlabel}</mortar-button>}
          <slot name="action"></slot>
        </div>
        <div class={this.overlayClassName()} onClick={this.handleClose}></div>
      </Host>
    );
  }

}

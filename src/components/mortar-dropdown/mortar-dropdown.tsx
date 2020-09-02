import { Component, h, Prop, Listen, Watch, Event, EventEmitter, Element } from '@stencil/core';
import classnames from 'classnames';
import { MortarDropdownItem } from '../mortar-dropdown-item/mortar-dropdown-item';

@Component({
  tag: 'mortar-dropdown',
  scoped: false
})
export class MortarDropdown {
  @Prop() size = 'md';
  @Prop() label = '';
  @Prop() help = '';
  @Prop() haserror = false;
  @Prop() error = '';
  @Prop() placeholder = '';
  @Prop() disabled = false;
  @Prop() open = false;
  @Prop() focused = false;
  @Prop() highlight = -1;
  @Prop() value = '';
  @Prop() required = false;
  @Prop() name = 'dropdown';
  @Event() itemSelect: EventEmitter<Object>;

  @Element() el: HTMLElement;
  private dropdownEl: HTMLElement;
  private options: Array<MortarDropdownItem>;

  className = () => {
    return classnames('dropdown-outer', `${this.size}`, {
      'is-open': this.open,
      'is-focused': this.focused,
      'is-disabled': this.disabled,
      'has-error': this.haserror
    });
  }

  dropClassName = () => {
    return classnames('dropdown-list','dropdown-list-dropdown', {
      'is-active': this.open
    });
  }

  displayClassName = () => {
    return classnames('dropdown-item', 'dropdown-item-selectable', {
      'dropdown-placeholder': !this.value
    });
  }

  handleClick = () => {
    if (!this.disabled) {
      this.open = !this.open;
    }
  }

  handleFocus = () => {
    if (!this.disabled) {
      this.focused = true;
    }
  }

  handleBlur = () => {
    if (!this.disabled) {
      this.focused = false;
      this.open = false;
    }
  }

  handleListClick = (evt) => {
    const el:HTMLElement = evt.target;
    const val = el.getAttribute('data-value');
    const disabled = el.getAttribute('data-disabled');

    if (disabled === null) {
      const o = this.options.find(o => o.value === val);
      if (o) {
        this.handleItemSelect(o);
      }
    } 
  }

  handleItemSelect = (option: MortarDropdownItem) => { 
   if (option.disabled !== null) {
      const c = this.getCurrent();
      if (c) {
        c.selected = false;
      }
      option.selected = true;
      this.value = option.value;
      this.itemSelect.emit(option);
      this.open = false;
    }
  }

  @Listen('click', { target: 'document' })
  handleOutsideClick(evt) {
    if (this.open && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
      this.open = false;
    }
  }

  handleDropdownRef = (ref) => {
    this.dropdownEl = ref;
  }

  componentWillLoad() {
    this.loadOptions();
  }

  loadOptions = () => {
    this.options = Array.prototype.slice.call(this.el.querySelectorAll('mortar-dropdown-item'));
    const current = this.options.find((o) => o.selected);
    if (current) {
      this.value = current.value;
    }
  }

  @Watch('open')
  handleOpen(openValue) {
    if (!openValue) {
      this.clearHighlight();
    } else {
      if (this.value) {
        const c = this.getCurrent();
        if (c) {
          c.getEl().then((el: HTMLElement) => {
            const listEl:HTMLElement = this.el.querySelector('.dropdown-list[role="listbox"]');
            listEl.scrollTop = el.offsetTop;
          });
        }
      }
    }
  }

  getAvailable = () => {
    return this.options.reduce((t, o, k) => {
      if (!o.disabled) {
        t.push({
          o: o,
          k: k
        });
      }

      return t;
    }, []);
  }

  getCurrent = () => {
    if (this.value && this.options) {
      const o: MortarDropdownItem = this.options.find(o => o.value === this.value);
      return o || null;
    } else {
      return null;
    }
  }

  clearHighlight = () => {
    const el = this.options[this.highlight];
    if (el) {
      el.highlighted = false;
    }
    this.highlight = -1;
  }

  changeHighlight = (next) => {
    const arr = this.getAvailable();
    
    if (next) {
      if (this.highlight === -1) {
        let k = 0;
        if (this.value) {
          const i = arr.find(o => o.o.value === this.value);
          k = i.k;
        }
        this.setHighlight(k);
      } else {
        const n = arr.find((v) => v.k > this.highlight);
        const v = (n) ? n.k : arr[0].k;
        this.setHighlight(v);
      }
    } else {
      const rArr = arr.reverse();

      if (this.highlight === -1) {
        let k = 0;
        if (this.value) {
          const i = rArr.find(o => o.o.value === this.value);
          k = i.k;
        }
        this.setHighlight(k);
      } else {
        const n = rArr.find((v) => v.k < this.highlight);
        const v = (n) ? n.k : rArr[0].k;
        this.setHighlight(v);
      }
    }
  }

  setHighlight = (v) => {
    if (this.highlight > -1) {
      this.options[this.highlight].highlighted = false;
    }
   
    this.highlight = v;

    if (v > -1) {
      this.options[v].highlighted = true;
      this.options[v].getEl().then(v => {
        const listEl:HTMLElement = this.el.querySelector('.dropdown-list[role="listbox"]');
        listEl.scrollTop = v.offsetTop;
      });  
    }
  }

  selectHighlight = () => {
    if (this.highlight > -1) {
      this.handleItemSelect(this.options[this.highlight]);
    }
  }

  @Listen('keydown', { target: 'document'})
  handleKeySelect(evt) {
    if (this.open) {
      //UP
      if (evt.keyCode === 38) {
        evt.preventDefault();
        this.changeHighlight(false);
      }

      //DOWN 
      if (evt.keyCode === 40) {
        evt.preventDefault();
        this.changeHighlight(true);
      }

      //HOME
      if (evt.keyCode === 36) {
        evt.preventDefault();
        const arr = this.getAvailable();
        this.setHighlight(arr[0].k);
      }

      //END
      if (evt.keyCode === 35) {
        evt.preventDefault();
        const arr = this.getAvailable();
        this.setHighlight(arr[arr.length - 1].k);
      }

      //SPACE OR ENTER SELECT
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        evt.preventDefault();
        this.selectHighlight();
        this.open = false;
      }

      //ESC
      if (evt.keyCode === 27) {
        evt.preventDefault();
        this.open = false;
      }
    } else if (this.focused) {
      //SPACE OR ENTER OPEN SELECT MENU WHEN FOCUSED
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        evt.preventDefault();
        this.open = true;
      }
    }
  }

  render() {
    const current = this.getCurrent();
    return (
      <mortar-form-element 
        label={this.label}
        help={this.help}
        haserror={this.haserror}
        error={this.error}
        elementclass="dropdown"
        ref={this.handleDropdownRef}
        name={this.name}
      >
        <div class={this.className()}  
            tabindex="0" 
            role="listbox" 
            aria-haspopup="true" 
            aria-expanded={this.open}
            onFocus={this.handleFocus} 
            onBlur={this.handleBlur}
            aria-required={this.required}
            id={this.name}
        >
          <div class="dropdown-inner" onClick={this.handleClick} >
            <div class="dropdown-list dropdown-list-single">
              <div class={this.displayClassName()}>
                { (current) ? current.label : this.placeholder }
              </div>
            </div>
          </div>
          <div class={this.dropClassName()} aria-expanded={this.open}>
            <div class="dropdown-list" role="listbox" onClick={this.handleListClick}>
              <slot></slot>
            </div>
          </div>
        </div>
      </mortar-form-element>
    );
  }
}
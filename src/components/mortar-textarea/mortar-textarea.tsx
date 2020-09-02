import { Component, h, Prop, Watch } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mortar-textarea',
  scoped: false,
})
export class MortarTextarea {
  @Prop() label = '';
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() maxlength = '';
  @Prop() cols = '20';
  @Prop() rows = '2';
  @Prop() hasmessage = true;
  @Prop() message = (amount) => {
    return `${amount} characters remaining`;
  }
  @Prop() name = 'textarea';
  @Prop() disabled = false;
  @Prop() required = true;
  @Prop() value = '';
  @Prop() placeholder = '';
  @Prop() screenreaderlabel = false;

  private inputEl?;

  className = () => {
    return classnames({
      error: this.haserror
    })
  }

  handleInput = () => {
    this.value = this.inputEl.value;
  }

  handleRef = (ref) => {
    this.inputEl = ref;
  } 

  @Watch('value')
  handleValue(val: String) {
    this.inputEl.value = val;
  }

  render() {
    const n = Number(this.maxlength);
    const text = this.value.slice(0, n);
    const remaining = n - text.length;
    return (
      <mortar-form-element
        label={this.label}
        error={this.error}
        haserror={this.haserror}
        elementclass="text-area"
        name={this.name}
        screenreaderlabel={this.screenreaderlabel}
      >
        <textarea 
          class={this.className()}
          id={this.name} 
          disabled={this.disabled} 
          required={this.required} 
          placeholder={this.placeholder}
          onInput={this.handleInput}
          ref={this.handleRef}
          maxLength={n}
          cols={Number(this.cols)}
          rows={Number(this.rows)}
        ></textarea>
        {this.maxlength && this.hasmessage && 
          <div class="character-message show">
            {this.message(remaining)}
          </div>
        }
      </mortar-form-element>
    );
  }
}
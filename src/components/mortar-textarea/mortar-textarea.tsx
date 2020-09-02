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
  @Prop() message = (amount) => {
    return `${amount} characters remaining`;
  }
  @Prop() name = 'textarea';
  @Prop() disabled = false;
  @Prop() required = true;
  @Prop() value = '';
  @Prop() placeholder = '';

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
      >
        <textarea 
          class={this.className()}
          id={this.name} 
          disabled={this.disabled} 
          required={this.required} 
          placeholder={this.placeholder}
          onInput={this.handleInput}
          ref={this.handleRef}
        >
          {text}
        </textarea>
        {this.maxlength && 
          <div class="character-message show">
            {this.message(remaining)}
          </div>
        }
      </mortar-form-element>
    );
  }
}
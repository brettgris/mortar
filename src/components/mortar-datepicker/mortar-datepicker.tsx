import { Component, h, Prop, EventEmitter, Event, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'mortar-datepicker',
  scoped: false
})
export class MortarDatepicker {
  @Prop() label = '';
  @Prop() error = '';
  @Prop() haserror = false;
  @Prop() open = false;
  @Prop() min: Date | string = new Date(1900, 0, 1);
  @Prop() max: Date | string = new Date(2100, 11, 31);
  @Prop() dateToString = (date) => {
    if (!date) return '';

    let nd = new Date(date);

    const m = nd.getMonth() + 1;
    const ms = (m >= 10) ? m : '0'+m;
    const d = nd.getDate();
    const ds = (d >= 10) ? d : '0'+d;
    return `${ms}/${ds}/${nd.getFullYear()}`;
  }
  @Prop() value: Date | string;
  @Prop() valueString = '';
  @Prop() mask = 'Date';
  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() placeholder = "mm/dd/yyyy";
  @Prop() name = 'datepicker';
  @Prop() monthselectlabel = "choose month";
  @Prop() yearselectlabel = "choose year";
  @Prop() nextlabel = "next month";
  @Prop() previouslabel = "previous month";
  @Prop() clearlabel = "clear";
  @Prop() days = ['S', 'M', 'T', 'W', 'R', 'F', 'S'];
  @Prop() months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Prop() monthplaceholder = 'Month';
  @Prop() yearplaceholder = 'Year';
  @Prop() header = true;
  @Prop() screenreaderlabel = false;
  @Prop() togglelabel = (date) => {
    if (!date) {
      return 'Choose Date';
    } else {
      return `Choose Date, Selected Date is ${new Date(date).toDateString()}`
    }
  };
  @Event() selectDate: EventEmitter<Date>;
  @Event() clearDate: EventEmitter<void>;
  @Event() inputChange: EventEmitter<Date>;
  @Event() dateOutOfRange: EventEmitter<Date>;

  private calendarElement: HTMLElement;
  private toggleElement: HTMLElement;

  handleOpen = () => {
    this.open = !this.open;
  }

  handleSelect = (evt) => {
    this.value = evt.detail;
    this.selectDate.emit(evt.detail);
  }

  handleClear = () => {
    this.value = null;
    this.open = false;
    this.clearDate.emit();
    this.setToggleFocus();
  }

  @Listen('click', { target: 'document' })
  handleOutsideClick(evt) {
    if (this.open) {
      if (!(evt.target === this.toggleElement || this.toggleElement.contains(evt.target)) && !(evt.target === this.calendarElement || this.calendarElement.contains(evt.target)) ) {
        this.open = false;
      }
    }
  }

  handleCalendarRef = (ref) => {
    this.calendarElement = ref;
  }

  handleToggleRef = (ref) => {
    this.toggleElement = ref;
  }

  handleClickDate = () => {
    this.open = false;
  }

  handleKeyboardSelect = () => {
    this.open = false;
    this.setToggleFocus();
  }

  handleKeyboardExit = () => {
    this.open = false;
    this.setToggleFocus();
  }

  setToggleFocus = () => {
    const el = this.toggleElement;
    setTimeout(function() {
      el.focus();
    }, 10);
  }

  handleBlur = (evt) => {
    const os = this.valueString;
    this.valueString = evt.detail;
    setTimeout(() => {
      this.updateValueFromInput(evt.detail, os);
    }, 10);
  }

  updateValueFromInput = (val, os) => {
    if (val) {      
      const d = val.split("/").map(v => {
        if (v) {
          if (Number(v)) {
            return v;
          } else if (Number(v.slice(1))){
            return v.slice(1);
          } else if (Number(v.slice(0, -1))){
            return v.slice(0, -1);
          } else {
            return v;
          }
        }
        return v;
      }).join("/");


      const nd = new Date(d);
      if (nd.getTime() && nd > new Date(this.min) && nd < new Date(this.max)) {
        this.valueString = this.dateToString(nd);
        this.value = nd;
        this.selectDate.emit(nd);
      } else {
        this.valueString = os;
      }
    }
  }

  componentWillLoad() {
    if (this.value) {
      this.valueString = this.dateToString(this.value);
    }
  }

  @Watch('value')
  handleValue(v) {
    this.valueString = this.dateToString(v);
  }

  render() {
    return (
      <mortar-form-element
        legend={this.label}
        haserror={this.haserror}
        error={this.error}
        elementclass="mortar-datepicker"
        name={this.name}
        screenreaderlabel={this.screenreaderlabel}
      >
        <div class="datepicker-outer">
          <div class="datepicker-inner">
            <masked-input
              placeholder={this.placeholder}
              value={this.valueString}
              elementclass="datepicker-input"
              type={this.mask}
              onMaskedBlur={this.handleBlur}
              pattern="[0-9]*"
              inputmode="numeric"
              name={this.name}
              required={this.required}
            ></masked-input>
            <button class="datepicker-toggle" onClick={this.handleOpen} ref={this.handleToggleRef}>
              <mortar-icon kind="calendar" label={this.togglelabel(this.value)}></mortar-icon>
            </button>
          </div>
          <mortar-datepicker-calendar
            ref={this.handleCalendarRef}
            min={this.min}
            max={this.max}
            onSelectDate={this.handleSelect}
            onClearDate={this.handleClear}
            onClickDate={this.handleClickDate}
            onKeyboardSelect={this.handleKeyboardSelect}
            onKeyboardExit={this.handleKeyboardExit}
            selected={this.value}
            open={this.open}
            header={this.header}
            name={`${this.name}-calendar`}
            monthselectlabel={this.monthselectlabel}
            yearselectlabel={this.yearselectlabel}
            nextlabel={this.nextlabel}
            previouslabel={this.yearselectlabel}
            clearlabel={this.clearlabel}
            days={this.days}
            months={this.months}
            monthplaceholder={this.monthplaceholder}
            yearplaceholder={this.yearselectlabel}
          ></mortar-datepicker-calendar>
        </div>
      </mortar-form-element>
    );
  }

}

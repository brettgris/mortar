import { Component, h, Prop, Event, EventEmitter, Watch, Listen, Element } from '@stencil/core';
import classnames from 'classnames';
import focusLock from 'dom-focus-lock';

@Component({
  tag: 'mortar-datepicker-calendar',
  scoped: false,
})
export class MortarDatepickerCalendar {
    @Prop() label = '';
    @Prop() error = '';
    @Prop() haserror = false;
    @Prop() name = 'calendar';
    @Prop() days = ['S', 'M', 'T', 'W', 'R', 'F', 'S'];
    @Prop() daystr: string;
    @Prop() months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    @Prop() monthstr: string;
    @Prop() monthplaceholder = 'Month';
    @Prop() yearplaceholder = 'Year';
    @Prop() nextlabel = "next month";
    @Prop() previouslabel = "previous month";
    @Prop() clearlabel = "clear";
    @Prop() monthselectlabel = "choose month";
    @Prop() yearselectlabel = "choose year";
    @Prop() selected: Date | string;
    @Prop() current: Date | string;
    @Prop() min: Date | string = new Date(1900, 0, 1);
    @Prop() max: Date | string = new Date(2100, 11, 31);
    @Prop() open = false;
    @Prop() highlight = -1;
    @Prop() header = true;
    @Prop() embed = false;
    @Prop() screenreaderlabel = false;
    @Prop() monthlabel = 'select month';
    @Prop() yearlabel = 'select year';
    @Prop() customClass = (_year, _month, _date) => '';
    @Event() clearDate: EventEmitter<void>;
    @Event() selectDate: EventEmitter<Date>;
    @Event() clickDate: EventEmitter<Date>;
    @Event() keyboardSelect: EventEmitter<KeyboardEvent>;
    @Event() keyboardExit: EventEmitter<void>;

    @Element() root: HTMLElement;

    private timeout?;
    private calendarEl: HTMLElement;

    @Watch('selected')
    handleSelected(val: Date) {
        if (!val) {
            this.current = null;
        }
    }

    @Watch('open')
    handleClose(openVal: boolean) {
        if (!openVal) {
            this.current = null;
            focusLock.off(this.root);
        } else {
            focusLock.on(this.root);
            this.focusHighlight();
        }
    }

    @Watch('monthstr')
    handleMonthStr(val: string) {
        this.months = val.split(",");
    } 

    @Watch('daystr')
    handleDayStr(val: string) {
        this.days = val.split(",");
    } 

    componentWillLoad() {
        this.currentHighlight();
        if (this.monthstr) {
            this.handleMonthStr(this.monthstr);
        }
        if (this.daystr) {
            this.handleDayStr(this.daystr);
        }
    }

    /*** 
     * Dropdowns
     * ***/

    getAvailableMonths = () => {
        return this.months.map((v, k) => (
            <mortar-dropdown-item value={`${k}`} label={v}></mortar-dropdown-item>
        ))
    }

    getAvailableYears = () => {
        const today = new Date();
        const min = new Date(this.min) || new Date(today.getFullYear()-5,today.getMonth(),today.getDate());
        const max = new Date(this.max) || new Date(today.getFullYear()+5,today.getMonth(),today.getDate());

        const minYear = min.getFullYear();
        const maxYear = max.getFullYear();
        const range = maxYear - minYear;
        const arr = Array.apply(null, Array(range + 1));
    
        return arr.map((_v,k) =>  {
            const s = `${minYear +k}`;

            return (
                <mortar-dropdown-item value={s} label={s}></mortar-dropdown-item>
            );
        });
    }

    getMonthValue = () => {
        const v = this.getCurrentDate();
        return `${v.getMonth()}`;
    }

    getYearValue = () => {
        const v = this.getCurrentDate();
        return `${v.getFullYear()}`;
    }

    /*** 
     * Clear Value
     * ***/

    handleClear = () => {
        this.current = null;
        this.selected = null;
        this.clearDate.emit();
    }

    /*** 
    * Change Current Month
    * ***/
    changeCurrent = (month, year, highlight = -1) => {
        let c = new Date(year, month);
        if (this.min) {
            const md = new Date(this.min);
            const min = new Date(md.getFullYear(), md.getMonth());
            if (c < min) {
                c = min;
            }
        }
        
        if (this.max) {
            const md = new Date(this.max);
            const max = new Date(md.getFullYear(), md.getMonth());
            if (c > max) {
                c = max;
            }
        }
        const l = 40 - new Date(c.getFullYear(), c.getMonth(), 40).getDate();
        this.current = c;
        if (highlight > -1) {
            this.highlight = (highlight < l) ? highlight : l;
        } else {
            this.currentHighlight();
        }
    }  

    //Next & Previous Buttons, change current by val
    handleChangeMonth = (val) => {
        const v = this.getCurrentDate();
        let m = v.getMonth() + val;
        let y = v.getFullYear();
        if (m === -1) {
            m = 11;
            y--;
        }
        if (m === 12) {
            m = 0;
            y++;
        }

        this.changeCurrent(m, y);
    }

    //Month Dropdown Select Month
    handleChangeCurrentMonth = (evt) => {
        const v = this.getCurrentDate();
        this.changeCurrent(evt.detail.value, v.getFullYear());
    }

    //Year Dropdown Select Year
    handleChangeCurrentYear = (evt) => {
        const v = this.getCurrentDate();
        this.changeCurrent(v.getMonth(), evt.detail.value);
    }

    //Display Current Month
    getCurrentMonth = () => {
        const v = this.getCurrentDate();
        return `${this.months[v.getMonth()]} ${v.getFullYear()}`
    }

    getCurrentDate = () => {
        if (this.current) {
            return new Date(this.current);
        } else if (this.selected) {
            return new Date(this.selected);
        } else {
            return this.getDefaultDate();
        }
    }

    //Get Default Date if Today is
    getDefaultDate = () => {
        let d = new Date();

        if (this.min && d < new Date(this.min)) {
            d = new Date(this.min);
        }

        if (this.max && d > new Date(this.max)) {
            d = new Date(this.max);
        }

        return d;
    }

    /*** 
     * Select A Day
     * ***/
    handleClickDay = (y, m, d) => {
        const s = new Date(y, m, d);
        this.selected = s;
        this.selectDate.emit(s);
        this.clickDate.emit(s);
        this.highlight = d;
    }

    //Keyboard Select - Doesn't fire click event (used to close)
    handleSelectDay = (y, m, d, evt) => {
        const s = new Date(y, m, d);
        this.selected = s;
        this.selectDate.emit(s);
        this.keyboardSelect.emit(evt);
    }

    /***
     * Keyboard Navigate
     */
    @Listen('keydown', { target: 'document'})
    handleKeySelect(evt) {
        const isFocused = this.calendarEl.contains(document.activeElement);
        if (this.open && isFocused) {
            const d = this.getCurrentDate();
            switch(evt.keyCode) {
                //left
                case 37: 
                    this.changeHighlight(-1);
                    evt.preventDefault();
                    break;
                //up
                case 38:
                    this.changeHighlight(-7);
                    evt.preventDefault();
                    break;
                //right
                case 39:
                    this.changeHighlight(1);
                    evt.preventDefault();
                    break;
                //down
                case 40: 
                    this.changeHighlight(7);
                    evt.preventDefault();
                    break;
                //HOME
                case 36:
                    this.changeWeekDay(0);
                    evt.preventDefault();
                    break;
                //END
                case 35:
                    this.changeWeekDay(6);
                    evt.preventDefault();
                    break;
                //PAGE DOWN
                case 34:
                    if (evt.shiftKey) {
                        this.changeCurrent(d.getMonth(), d.getFullYear() + 1, this.highlight);
                    } else {
                        const m = d.getMonth();
                        const nm = (m !== 11) ? m + 1 : 0;
                        const ny = (m !== 11) ? d.getFullYear() : d.getFullYear() + 1;
                        this.changeCurrent(nm, ny, this.highlight);
                    }
                    this.focusHighlight();
                    evt.preventDefault();
                    break;
                //PAGE UP
                case 33:
                    if (evt.shiftKey) {
                        this.changeCurrent(d.getMonth(), d.getFullYear() - 1, this.highlight);
                    } else {
                        const m = d.getMonth();
                        const nm = (m !== 0) ? m - 1 : 11;
                        const ny = (m !== 0) ? d.getFullYear() : d.getFullYear() - 1;
                        this.changeCurrent(nm, ny, this.highlight);
                    }
                    this.focusHighlight();
                    evt.preventDefault();
                    break;
                // SPACE
                case 13:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
                //ENTER
                case 32:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
                default:
                    break;
            }
        }

        //ESC closes if dropdown isn't open
        if (this.open && evt.keyCode === 27) {
            const dd = Array.prototype.slice.call(this.root.querySelectorAll('mortar-dropdown'));
            const e = dd.find(v => {
                const d = v.querySelector('.dropdown-outer');
                return d === document.activeElement;
            });
            if ((!e || !e.open) && !this.embed) {
                
                this.open = false;
                this.keyboardExit.emit();
            }
        } 
    }

    currentHighlight = () => {
        const d = this.getCurrentDate();
        const cm = this.getDaysInMonth(d);
        const today = new Date();
        const sd = new Date(this.selected);
        
        if (this.selected && sd.getMonth() === cm.month && sd.getFullYear() === cm.year) {
            this.highlight = sd.getDate();
        } else if (today.getMonth() === cm.month && today.getFullYear() === cm.year) {
            this.highlight = today.getDate();
        } else {
            this.highlight = 1;
        }
    }

    changeHighlight = (amt) => {
        const d = this.getCurrentDate();
        const cm = this.getDaysInMonth(d);

        this.highlight += amt;

        if (this.highlight <= 0) {
            this.changeCurrent(cm.previous.month, cm.previous.year, cm.previous.length + this.highlight);
        } else if (this.highlight > cm.length) {
            this.changeCurrent(cm.next.month, cm.next.year, this.highlight - cm.length);
        }

        this.focusHighlight();
    }

    changeWeekDay = (day) => {
        const d = this.getCurrentDate();

        const hd = new Date(d.getFullYear(), d.getMonth(), this.highlight);
        const diff = day - hd.getDay();

        if (diff !== 0) {
            this.changeHighlight(diff);
        }
    }
    
    focusHighlight = () => {
        this.timeout = setTimeout(() => {
            clearTimeout(this.timeout);
            const el:HTMLElement = this.calendarEl.querySelector('button[tabIndex="0"]');
            el.focus();
        }, 100);
    }

    handleCalendarRef = (ref) => {
        this.calendarEl = ref;
    }

    selectHighlight(evt) {
        if (this.highlight >= 0) {
            const d = this.getCurrentDate();
            this.handleSelectDay(d.getFullYear(), d.getMonth(), this.highlight, evt);
        } 
    }

    getDaysInMonth = (d: Date) => {
        const first = new Date(d.getFullYear(), d.getMonth()).getDay();
        const length = 40 - new Date(d.getFullYear(), d.getMonth(), 40).getDate();
        const total = first + length;
        const rows = 6; 
        const year = d.getFullYear();
        const month = d.getMonth();
        const previous = {
            month: (month > 0) ? month - 1 : 11,
            year: (month > 0) ? year : year - 1,
            length: 0
        };
        previous.length = 40 - new Date(previous.year, previous.month, 40).getDate();

        const next = {
            month: (month < 11) ? month + 1 : 0,
            year: (month < 11) ? year : year + 1,
            length: 0
        }
        next.length = 40 - new Date(next.year, next.month, 40).getDate();

        return {
            first,
            length, 
            total,
            rows,
            year,
            month,
            previous, 
            next
        };
    }

    /*** 
     * Month Display
     * ***/
    getCalendarDays = (cm) => {
        let arr = Array.apply(null, Array(cm.rows));
        let current = 0;
        let next = 0;

        return arr.map((_r, r) => {
            const rArr = Array.apply(null, Array(7));
            return (
                <div class="datepicker-content-row">
                    {
                        rArr.map((_c, c) => {
                            if (r === 0 && c < cm.first) {
                                const pD = cm.previous.length - (cm.first - 1 - c);
                                return (
                                    <div class={`datepicker-content-item datepicker-content-out ${this.customClass(cm.previous.year, cm.previous.month, pD)}`}>
                                        <div class="datepicker-content-display">
                                            <span>{pD}</span>
                                        </div>
                                    </div>
                                )
                            } else if (current < cm.length) {
                                current ++;
                                const cd = current;
                                
                                if(this.isAvailable(cm.year, cm.month, cd)) {
                                    let cn = this.customClass(cm.year, cm.month, cd);
                                    const isSelected = this.isSelected(cm.year, cm.month, cd);
                                    const isHighlighted = (this.highlight === cd);

                                    if (this.isToday(cm.year, cm.month, cd)) {
                                        cn += ' datepicker-today';
                                    }

                                    if (isSelected) {
                                        cn += ' datepicker-selected';
                                    }

                                    return (
                                        <button class={`datepicker-content-item ${cn}`} 
                                            onClick={() => this.handleClickDay(cm.year, cm.month, cd)}
                                            aria-selected={isSelected}
                                            tabIndex={(isHighlighted) ? 0 : -1}
                                        >
                                            <div class="datepicker-content-display">
                                                <span>{cd}</span>
                                            </div>
                                        </button>
                                    );
                                } else {
                                    return (
                                        <div class={`datepicker-content-item datepicker-content-out ${this.customClass(cm.year, cm.month, cd)}`}>
                                            <div class="datepicker-content-display">
                                                <span>{cd}</span>
                                            </div>
                                        </div>
                                    );
                                }
                            } else {
                                next ++;
                                return (
                                    <div class={`datepicker-content-item datepicker-content-out ${this.customClass(cm.next.year, cm.next.month, next)}`}>
                                        <div class="datepicker-content-display">
                                            <span>{next}</span>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            );
        });
    }

    isToday = (y, m, d) => {
        const today = new Date();
        return (y === today.getFullYear() && m === today.getMonth() && d === today.getDate());
    }

    isSelected = (y, m, d) => {
        const sd = new Date(this.selected);
        return (this.selected && y === sd.getFullYear() && m === sd.getMonth() && d === sd.getDate());
    }

    isAvailable = (y, m, d) => {
        const v = new Date(y, m, d);
        const md = new Date(this.min);
        const xd = new Date(this.max);
        if (this.min && this.max) {
            return (v >= md && v <= xd);
        } else if (this.min) {
            return v >= md;
        } else if (this.max) {
            return v <= xd;
        } else {
            return true;
        }
       
    }

    /*** 
     * Render
     * ***/

    className = () => {
        return classnames('datepicker-list-outer', {
            'show': this.open,
            'no-header': !this.header && this.embed,
            'embed': this.embed
        });
    }

    render() {
        if (this.embed) {
            return(
                <mortar-form-element
                    legend={this.label}
                    haserror={this.haserror}
                    error={this.error}
                    elementclass="mortar-datepicker"
                    name={this.name}
                    screenreaderlabel={this.screenreaderlabel}
                >
                    {this.renderEl()}
                </mortar-form-element>
            )
        } else {
            return this.renderEl();
        }
    }
    
    renderEl() {
        const v = this.getCurrentDate();
        const cm = this.getDaysInMonth(v);

        const minallowed = (this.min) ? new Date(cm.previous.year, cm.previous.month, cm.length) > new Date(this.min): true;
        const maxallowed = (this.max) ? new Date(cm.next.year, cm.next.month, 1) < new Date(this.max) : true;
        return (
            <div class={this.className()} 
                role={(!this.embed) ? 'dialog' : ''}
                aria-modal={!this.embed}
                id={this.name}
                aria-labelledby={`${this.name}-label`}
            >
                {this.header && 
                    <div class="datepicker-selector">
                        <div class="datepicker-select-dropdown">
                            <mortar-dropdown 
                                value={this.getMonthValue()}
                                placeholder={this.monthplaceholder}
                                onItemSelect={this.handleChangeCurrentMonth}
                                name={`${this.name}-month-select`}
                                label={this.monthselectlabel}
                                screenreaderlabel={true}
                                size="sm"
                            >
                                {this.getAvailableMonths()}
                            </mortar-dropdown>
                        </div>
                        <div class="datepicker-select-dropdown">
                            <mortar-dropdown
                                value={this.getYearValue()}
                                placeholder={this.yearplaceholder}
                                onItemSelect={this.handleChangeCurrentYear}
                                name={`${this.name}-year-select`}
                                label={this.yearselectlabel}
                                screenreaderlabel={true}
                                size="sm"
                            >
                                {this.getAvailableYears()}
                            </mortar-dropdown>
                        </div>
                        <div class="datepicker-select-clear">
                            <button onClick={this.handleClear}>
                                <mortar-icon kind="close" label={this.clearlabel}></mortar-icon>
                            </button>
                        </div>
                    </div>
                }
                <div class="datepicker-header">
                    <div class="datepicker-header-previous">
                        <button onClick={() => this.handleChangeMonth(-1)} disabled={!minallowed}>
                            <mortar-icon kind="back" arialabel="Previous Month" label={this.previouslabel}></mortar-icon>
                        </button>
                    </div>
                    <div class="datepicker-header-display">
                        <span id={`${this.name}-label`}
                            aria-live="polite"
                        >
                            {this.getCurrentMonth()}
                        </span>
                    </div>
                    <div class="datepicker-header-next">
                        <button onClick={() => this.handleChangeMonth(1)} disabled={!maxallowed}>
                            <mortar-icon kind="next" label={this.nextlabel}></mortar-icon>
                        </button>
                    </div>
                </div>
                <div class="datepicker-body"
                    role="grid"
                    aria-labelledby={`${this.name}-label`}
                >
                    <div class="datepicker-days">
                        {
                            this.days.map((v) => {
                                return (
                                    <div class="datepicker-day">
                                        <div class="datepicker-day-display">
                                            <span>{v}</span>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div class="datepicker-content" ref={this.handleCalendarRef}>
                        {this.getCalendarDays(cm)}
                    </div>
                </div>
            </div>
        );
  }

}

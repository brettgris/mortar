---
type: "Components"
name: "Mortar-Datepicker-Calendar"
include: true
---
# mortar-datepicker-calendar

```example
<mortar-datepicker-calendar embed="true" header="false" open="true"></mortar-datepicker-calendar>
```


<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                                              | Default                                                                                                                      |
| ------------------ | ------------------- | ----------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `clearlabel`       | `clearlabel`        |             | `string`                                          | `"Clear"`                                                                                                                    |
| `current`          | `current`           |             | `Date \| string`                                  | `undefined`                                                                                                                  |
| `customClass`      | --                  |             | `(_year: any, _month: any, _date: any) => string` | `(_year, _month, _date) => ''`                                                                                               |
| `days`             | --                  |             | `string[]`                                        | `['S', 'M', 'T', 'W', 'R', 'F', 'S']`                                                                                        |
| `embed`            | `embed`             |             | `boolean`                                         | `false`                                                                                                                      |
| `error`            | `error`             |             | `string`                                          | `''`                                                                                                                         |
| `haserror`         | `haserror`          |             | `boolean`                                         | `false`                                                                                                                      |
| `header`           | `header`            |             | `boolean`                                         | `true`                                                                                                                       |
| `highlight`        | `highlight`         |             | `number`                                          | `-1`                                                                                                                         |
| `label`            | `label`             |             | `string`                                          | `''`                                                                                                                         |
| `max`              | `max`               |             | `Date \| string`                                  | `new Date(2100, 11, 31)`                                                                                                     |
| `min`              | `min`               |             | `Date \| string`                                  | `new Date(1900, 0, 1)`                                                                                                       |
| `monthPlaceholder` | `month-placeholder` |             | `string`                                          | `'Month'`                                                                                                                    |
| `months`           | --                  |             | `string[]`                                        | `['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` |
| `name`             | `name`              |             | `string`                                          | `'calendar'`                                                                                                                 |
| `nextlabel`        | `nextlabel`         |             | `string`                                          | `"Next Month"`                                                                                                               |
| `open`             | `open`              |             | `boolean`                                         | `false`                                                                                                                      |
| `previouslabel`    | `previouslabel`     |             | `string`                                          | `"Previous Month"`                                                                                                           |
| `selected`         | `selected`          |             | `Date \| string`                                  | `undefined`                                                                                                                  |
| `yearPlaceholder`  | `year-placeholder`  |             | `string`                                          | `'Year'`                                                                                                                     |


## Events

| Event            | Description | Type                         |
| ---------------- | ----------- | ---------------------------- |
| `clearDate`      |             | `CustomEvent<void>`          |
| `clickDate`      |             | `CustomEvent<Date>`          |
| `keyboardExit`   |             | `CustomEvent<void>`          |
| `keyboardSelect` |             | `CustomEvent<KeyboardEvent>` |
| `selectDate`     |             | `CustomEvent<Date>`          |


## Dependencies

### Used by

 - [mortar-datepicker](../mortar-datepicker)

### Depends on

- [mortar-dropdown-item](../mortar-dropdown-item)
- [mortar-form-element](../mortar-form-element)
- [mortar-dropdown](../mortar-dropdown)
- [mortar-icon](../mortar-icon)

### Graph
```mermaid
graph TD;
  mortar-datepicker-calendar --> mortar-dropdown-item
  mortar-datepicker-calendar --> mortar-form-element
  mortar-datepicker-calendar --> mortar-dropdown
  mortar-datepicker-calendar --> mortar-icon
  mortar-dropdown --> mortar-form-element
  mortar-datepicker --> mortar-datepicker-calendar
  style mortar-datepicker-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------



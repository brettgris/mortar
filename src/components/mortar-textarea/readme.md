---
type: "Components"
name: "Mortar-Textarea"
include: true
---
# mortar-textarea

```example
<mortar-textarea label="Message" placeholder="Enter Message" maxlength="500"></mortar-textarea>
```

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description | Type                      | Default                                                          |
| ------------------- | ------------------- | ----------- | ------------------------- | ---------------------------------------------------------------- |
| `cols`              | `cols`              |             | `string`                  | `'20'`                                                           |
| `disabled`          | `disabled`          |             | `boolean`                 | `false`                                                          |
| `error`             | `error`             |             | `string`                  | `''`                                                             |
| `haserror`          | `haserror`          |             | `boolean`                 | `false`                                                          |
| `hasmessage`        | `hasmessage`        |             | `boolean`                 | `true`                                                           |
| `label`             | `label`             |             | `string`                  | `''`                                                             |
| `maxlength`         | `maxlength`         |             | `string`                  | `''`                                                             |
| `message`           | --                  |             | `(amount: any) => string` | `(amount) => {     return `${amount} characters remaining`;   }` |
| `name`              | `name`              |             | `string`                  | `'textarea'`                                                     |
| `placeholder`       | `placeholder`       |             | `string`                  | `''`                                                             |
| `required`          | `required`          |             | `boolean`                 | `true`                                                           |
| `rows`              | `rows`              |             | `string`                  | `'2'`                                                            |
| `screenreaderlabel` | `screenreaderlabel` |             | `boolean`                 | `false`                                                          |
| `value`             | `value`             |             | `string`                  | `''`                                                             |


## Dependencies

### Depends on

- [mortar-form-element](../mortar-form-element)

### Graph
```mermaid
graph TD;
  mortar-textarea --> mortar-form-element
  style mortar-textarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------



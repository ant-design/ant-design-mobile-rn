# Tag

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

### Rules

- The content should be displayed completely.

## Examples

```tsx
import { Tag, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

function onChange(selected: any) {
  console.log(`tag selected: ${selected}`)
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose')
          }}
          afterClose={() => {
            console.log('afterClose')
          }}>
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
        <WhiteSpace />
        <Tag
          onLongPress={() => {
            console.log('onLongPress')
          }}>
          LongPress
        </Tag>
      </View>
    )
  }
}
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| small   |  Whether to show a smaller size  |   Boolean    |  `false`  |
| disabled   | Whether is disabled      | Boolean |    `false`  |
| closable   | Whether can be closed(invalid in `small` or `disabled` mode) | Boolean | `false` |
| selected   | Whether is selected by default     | Boolean |   `false`  |
| onChange   | The callback function that is triggered when the selected state changes. | (selected: bool): void |   -  |
| onClose   | The callback function that is triggered when the tag is closed. | (): void |   -  |
| afterClose   | The callback function that is triggered after close. | (): void |   -  |
| onLongPress   | The callback function that is triggered when the tag is long pressed. | (): void |   -  |

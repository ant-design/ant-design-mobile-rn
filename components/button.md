# Button

To trigger an operation.

## Examples

```tsx
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

export default () => (
  <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button type="primary">primary</Button>
    <WhiteSpace />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <WhiteSpace />

    <Button type="warning">warning</Button>
    <WhiteSpace />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>No click feedback</Button>
    <WhiteSpace />
    <Button underlayColor={'blue'}>Custom Underlay</Button>
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <Button
      styles={{
        rawText: { color: 'darkgray' },
      }}
      style={{
        backgroundColor: 'red',
      }}>
      custon background and text color
    </Button>

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button type="primary">
      <Icon name="login" />
    </Button>
  </WingBlank>
)
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| type     | can be set to `primary`/`ghost`/`warning` or omitted  |   string   |   -  |
| size     | can be set to `large`、`small` or omitted | string | `large`|
| activeStyle | the feedback's custom style (set to false to disable click feedback) | {}/false | {} |
| activeClassName  | the feedback's custom class name | string |  |
| disabled   | set disabled   | boolean |  false  |
| onPress    | set the handler to handle `click` event | (e: Object): void |  -  |
| style    | custom style |   Object  | - |
| styles | Semantic DOM style | [ButtonStyles](#buttonStyles-interface) | - |
| onPressIn  | same as RN Pressable onPressIn | (e: Object): void |   - |
| onPressOut | same as RN Pressable onPressOut | (e: Object): void |  - |
| onShowUnderlay | same as RN Pressable onPressIn but only triggered if `activeStyle` is not false | (e: Object): void | - |
| onHideUnderlay | same as RN Pressable onPressOut but only triggered if `activeStyle` is not false | (e: Object): void | - |


### ButtonStyles interface

```typescript
interface ButtonStyles {
  container: ViewStyle
  defaultHighlight: ViewStyle
  primaryHighlight: ViewStyle
  ghostHighlight: ViewStyle
  warningHighlight: ViewStyle
  wrapperStyle: ViewStyle
  underlayStyle: ViewStyle
  largeRaw: ViewStyle
  largeUnderlayContainerRaw: ViewStyle
  smallRaw: ViewStyle
  smallUnderlayContainerRaw: ViewStyle
  defaultRaw: ViewStyle
  defaultUnderlayContainerRaw: ViewStyle
  primaryRaw: ViewStyle
  primaryUnderlayContainerRaw: ViewStyle
  ghostRaw: ViewStyle
  ghostUnderlayContainerRaw: ViewStyle
  warningRaw: ViewStyle
  warningUnderlayContainerRaw: ViewStyle
  defaultDisabledRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  defaultHighlightText: TextStyle
  primaryHighlightText: TextStyle
  ghostHighlightText: TextStyle
  warningHighlightText: TextStyle
  rawText: TextStyle
  largeRawText: TextStyle
  smallRawText: TextStyle
  defaultRawText: TextStyle
  primaryRawText: TextStyle
  ghostRawText: TextStyle
  warningRawText: TextStyle
  defaultDisabledRawText: TextStyle
  primaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  indicator: ViewStyle
}
```

# Badge

The red dot at corner for notification and getting user attention.

### When to use

- Use plain dot badge when user just need to know there is something new, eg: one-to-one new messages.
- Use numberic badge when user need to know specific number of notifications, eg: new messages from a group.

## Examples

```tsx
import { Badge, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} overflowCount={100}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text="new">
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} dot>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={33} corner>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>
        </View>
      </ScrollView>
    )
  }
}
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
size | size of badge, optional: `large` `small` | string | `small`
text | text or number inside badge | string\|number | -
corner | whether is badge at corner position | boolean | `false`
dot | show badge as a red dot | boolean | `false`
overflowCount | max count to show | number | `99`

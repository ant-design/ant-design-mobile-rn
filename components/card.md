# Card

Card can be used to organize information and operations, usually also as an entry for detailed information.

### Rules
- The shape is rectangular.
- The content can consist of multiple elements of varying type, eg: images, texts, buttons, etc.

## Examples

```tsx
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>Card Content</Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    )
  }
}
```

## API

### Card

Properties | Descrition | Type | Default
-----------|------------|------|--------
|   full  |  whether is full column | boolean | `false` |

### Card.Header

Properties | Descrition | Type | Default
-----------|------------|------|--------
|title| title for `Card.Header` | React.Element、String | |
|thumb| thumb to render in the left of  `Card.Header`  | String、React.Element |  |
|thumbStyle| style of thumb | Object | {} |
|extra| extra content to render in the right of `Card.Header` | React.Element、String |  |

### Card.Body

Properties | Descrition | Type | Default
-----------|------------|------|--------
| | | | |

### Card.Footer

Properties | Descrition | Type | Default
-----------|------------|------|--------
|content| content of `Card.Footer` | React.Element、String | |
|extra| extra content of `Card.Footer` | React.Element、String |  |

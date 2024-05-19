---
category: Components
type: Layout
title: View
---

Safe View

### Rules

- Support `string`/`number` ReactNode

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| children | child component | `React.ReactNode` \| `React.ReactText` |  -  |
| style    | style | `StyleProp<ViewStyle>` \| `StyleProp<TextStyle>` | - |

> More available react-native `View` API can be found at [react-native View](http://facebook.github.io/react-native/docs/view.html)

## FAQ

### What difference between it and React Native's built-in components View and Text?

React Native's View does not support `children` of type `string` / `number`. 

Misinformation will cause crash and no Code Line Numbers 

**This component can be used to evacuate errors once, giving priority to ensuring that the device does not crash.**

Common mistakes:
```jsx
const length = arr.length;

<View>
  {length && <Component />}
</View>

// when length=0, actually render:
<View>
  0
</View>
```

Attention, only one layer of protection can be achieved,  even `<React.Fragment>` children maked worng type:
```jsx
import {View} from '@ant-design/react-native'

<View>
  {/* still crash */}
  <React.Fragment>
    0
  </React.Fragment>

  {/* still crash */}
  <>''</>
</View>
```
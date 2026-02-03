---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/index-bar/demo/basic.tsx)

```jsx
import React from 'react'
import {
  IndexBar,
} from '@ant-design/react-native'
class IndexBarExample extends React.Component {
  render() {
    // lodash/shuffle
    const shuffleLetters = ["B", "D", "S", "N", "H", "V", "F", "T", "X", "W", "Z", "J", "E", "L", "U", "A", "M", "G", "Q", "K", "Y", "R", "P", "O", "I", "C"];
    const sections = shuffleLetters .map((letter) => ({
      key: letter,
      title: `Title ${letter}`,
      data: Array.from({length: 3}, (_, index) => `Content ${letter}${index}`),
    }));
    return <IndexBar sections={sections} />
    ;
  }
}



export default IndexBarExample;
```

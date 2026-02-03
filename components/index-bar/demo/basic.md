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
    const sections = Array.from({length: 26}, (_, index) => {
      const key = String.fromCharCode(65 + index);
      const randomCount = Math.floor(Math.random() * 3) + 3;
      const data = Array.from({length: randomCount}, (_, index) => `Content ${key}${index}`);
      return {
        key,
        title: `Title ${key}`,
        data,
      }
    });
    return <IndexBar sections={sections}/>
    ;
  }
}


export default IndexBarExample;
```

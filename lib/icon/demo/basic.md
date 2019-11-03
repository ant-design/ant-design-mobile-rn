---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/icon/demo/basic.tsx)

```jsx
import React from 'react';
import { Grid, Icon } from '@ant-design/react-native';
import { ScrollView } from 'react-native';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';
export default class IConDemo extends React.Component {
  render() {
    const outlineData = Object.keys(outlineGlyphMap).map(item => ({
      icon: <Icon name={item} />,
      text: item,
    }));
    return (
      <ScrollView>
        <Grid data={outlineData} columnNum={3} hasLine={false} />
      </ScrollView>
    );
  }
}
```

---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/textarea-item/demo/basic.tsx)

```jsx
/* tslint:disable:no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { List, TextareaItem } from '@ant-design/react-native';
export default class BasicTextAreaItemExample extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = val => {
      // console.log(val);
      this.setState({ val });
    };
    this.state = {
      val: '默认带value',
    };
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={'基本'}>
          <TextareaItem rows={4} placeholder="固定行数" />

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem
            rows={4}
            placeholder="高度自适应"
            autoHeight
            style={{ paddingVertical: 5 }}
          />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => console.log('err')}
          />
        </List>
      </ScrollView>
    );
  }
}
```

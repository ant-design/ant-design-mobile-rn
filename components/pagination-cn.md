# Pagination

分隔长列表，每次只加载一个页面。

### 规则
- 当加载/渲染所有数据将花费很多时间或者流量时使用

## 代码演示

```tsx
import { Pagination, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

const locale = {
  prevText: '上一步',
  nextText: '下一步',
}

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    )
  }
}
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  mode  | 形态，可选`button`,`number`,`pointer` | string | `button`  |
|  current  | 当前页号 | number  |  1  |
|  total  | 数据总数 | number  |  0  |
|  simple  | 是否隐藏数值 | boolean | false  |
|  disabled  | 禁用状态 | boolean | false  |
| locale |  国际化, 可以覆盖全局`LocaleProvider`的配置 | Object：{prevText, nextText} | 无 |
|  onChange | change 事件触发的回调函数 | (e: Object): void | 无 |

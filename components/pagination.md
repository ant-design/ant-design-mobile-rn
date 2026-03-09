# Pagination

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

### Rule

- When it will take a long time to load/render all items.

## Examples

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

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  mode  | the mode of `Pagination` which can be one of `button`,`number`,`pointer` | string | `button`  |
|  current  | current page index | number  |  1 |
|  total  | total number of data | number  |  0  |
|  simple  | whether to hide number | boolean | false  |
|  disabled  | whether is disabled | boolean | false  |
| locale |  [i18n](/components/locale-provider/) setting, you can override the configuration of the global `LocaleProvider | Object：{prevText, nextText} |  |
|  onChange | invoked with the new index when the value changes. | (index: Number): void |  |

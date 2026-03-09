# Provider

为组件提供统一的全局化配置。

## 何时使用

 - 您想使用除`中文`之外的语言。
 - 您想修改默认主题色。
 - 您想为组件添加震动反馈。
 - 您想使用Portal类组件。

### Portal类组件
`ActionSheet` `Modal` `Picker` `Toast` `ToolTip`属于Portal类组件；

若要使用这些组件，必须使用`Provider`包裹根组件（通常在App.js）。

## 代码演示

```tsx
import {
  DatePicker,
  List,
  Pagination,
  Picker,
  Provider,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import enUS from '@ant-design/react-native/lib/locale-provider/en_US'
import esES from '@ant-design/react-native/lib/locale-provider/es_ES'
import faIR from '@ant-design/react-native/lib/locale-provider/fa_IR'
import koKR from '@ant-design/react-native/lib/locale-provider/ko_KR'
import ptBR from '@ant-design/react-native/lib/locale-provider/pt_BR'
import ruRU from '@ant-design/react-native/lib/locale-provider/ru_RU'
import svSE from '@ant-design/react-native/lib/locale-provider/sv_SE'
import zhCN from '@ant-design/react-native/lib/locale-provider/zh_CN'
import React from 'react'
import { View } from 'react-native'

const maxDate = new Date(2018, 11, 3, 22, 0)
const minDate = new Date(2015, 7, 6, 8, 30)

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

const Page = React.memo(() => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode="date"
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}>
        <List.Item arrow="horizontal">DatePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">Picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
))

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      locale: 'English',
    }
  }

  onChange = (value: any) => {
    this.setState({
      locale: value[0],
    })
  }

  render() {
    const { locale } = this.state
    const languages: Array<any> = [
      {
        value: '中国',
        label: '中国',
        language: zhCN,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: 'Русский',
        label: 'Русский',
        language: ruRU,
      },
      {
        value: 'Español',
        label: 'Español',
        language: esES,
      },
      {
        value: 'Português - BR',
        label: 'Português - BR',
        language: ptBR,
      },
      {
        value: 'Sverige',
        label: 'Sverige',
        language: svSE,
      },
      {
        value: 'Persian',
        label: 'Persian',
        language: faIR,
      },
      {
        value: '한국',
        label: '한국',
        language: koKR,
      },
    ]
    const currentLocale = languages.find(
      (item) => item.value === locale,
    ).language

    return (
      <Provider locale={currentLocale}>
        <WingBlank>
          <Picker
            data={languages}
            onChange={this.onChange}
            cols={1}
            value={[locale]}>
            <List.Item arrow="horizontal">Choose language</List.Item>
          </Picker>
          <WhiteSpace />
          <Page />
        </WingBlank>
      </Provider>
    )
  }
}
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| -----|-----|-----|-------|------|
| locale | 语言包配置（`默认语言是中文`）。可通过[`@ant-design/react-native/lib/locale-provider/{lan}`](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider)引入 | [Locale](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/index.tsx#L4) | - | |
| theme  | 主题样式配置，可根据需要覆盖部分或者全部变量 | [Theme](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx) | - | |
| onHaptics | 设置震动引擎，内置组件需要震动反馈时会触发该方法 | `(componentName: 'picker' | 'stepper' | 'slider' | 'switch') => void` | - | `5.2.1` |
| isRTL | 是否使用从右到左（RTL）语言。<br/>目前只应用于`<SwipeAction/>`组件 | `Boolean` | `I18nManager.isRTL` | `5.2.1` |

## FAQ

### 如何自定义主题？

举例：修改以下几个theme变量的影响是比较大的
```jsx
<Provider theme={{
    brand_primary: palette[5],  // 品牌基础色 #108ee9
    fill_base: palette[0],      // 组件默认背景色 #ffffff
    primary_button_fill: palette[5],     // 按钮背景颜色 <Button type="primary">
    primary_button_fill_tap: palette[3], // 按钮下压时背景颜色
    color_icon_base: palette[4],         // 许多小图标的背景颜色
}}>
...
</Provider>
```

### 暗黑模式
```json
{
    "fill_body": "#262629",
    "fill_base": "#1a1a1a",
    "fill_tap": "#2b2b2b",
    "fill_grey": "#0a0a0a",
    "color_text_base": "#e6e6e6",
    "color_text_placeholder": "#4d4d4d",
    "border_color_base": "#2b2b2b",
    "border_color_thin": "#2b2b2b",
}
```

### 如何启动组件震动？
由于不同平台的震动引擎不同，为此我们将震动事件暴露出来，由外挂引擎执行。

通常在expo中会使用`expo-haptics`引擎；在Native开发中使用`react-native-haptic-feedback`引擎；

这里以expo CLI为例
```jsx
import * as Haptics from 'expo-haptics'
import { Platform } from 'react-native'

<Provider 
    onHaptics={() => Platform.OS !== 'web' && Haptics.impactAsync('light')}
>
...
</Provider>
```

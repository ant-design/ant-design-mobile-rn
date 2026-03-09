# Provider

`Provider` provides a uniform localization support for built-in text of components.

## When to use

 - You want to use other languages than `Chinese`
 - You want to change the default theme color.
 - You want to add vibration feedback to built-in component.
 - You want to use the `Portal component`.

## Examples

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

### Portal Component

`ActionSheet` `Modal` `Picker` `Toast` `ToolTip` belongs to Portal component;

To use these components, you must wrap your root component (usually in App.js) with `Provider` component.

## API

| Property | Description | Type | Default | Version |
| -----|-----|-----|-------|------|
| locale | Language package setting(`The default language is Chinese`), <br/>you can find the packages in this path: [`@ant-design/react-native/lib/locale-provider/`](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider) | [Locale](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/index.tsx#L4) | - | |
| theme  | Theme customization, you can override some or all variables as needed | [Theme](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx) | - | |
| onHaptics | Set the vibration engine. This method will be triggered when the built-in component needs vibration feedback. | `(componentName: 'picker' | 'stepper' | 'slider' | 'switch') => void` | - | `5.2.1` |
| isRTL | Whether use Right-to-Left (RTL) languages. <br/>Currently only applies to `<SwipeAction/>` | `Boolean` | `I18nManager.isRTL` | `5.2.1` |

## FAQ

### How do I customize my theme?

For example: Modifying the following theme variables has a relatively large impact
```jsx
<Provider theme={{
    brand_primary: palette[5],  // Brand base color #108ee9
    fill_base: palette[0],      // Component default background color #ffffff
    primary_button_fill: palette[5],     // <Button type="primary"> background color
    primary_button_fill_tap: palette[3], // <Button type="primary"> onTap background color
    color_icon_base: palette[4],         // Background color for many icons
}}>
...
</Provider>
```

### Dark Mode
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

### How to activate component vibration?
Since the vibration engines of different platforms are different, we expose the vibration events and execute them by the plug-in engine.

Usually, the `expo-haptics` engine is used in Expo; the `react-native-haptic-feedback` engine is used in React-Native-CLI;

Here we take Expo CLI as an example
```jsx
import * as Haptics from 'expo-haptics'
import { Platform } from 'react-native'

<Provider 
    onHaptics={() => Platform.OS !== 'web' && Haptics.impactAsync('light')}
>
...
</Provider>
```

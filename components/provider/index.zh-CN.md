---
category: Components
title: Provider
subtitle: 全局化配置
type: Other
version: update
---

为组件提供统一的全局化配置。

## 何时使用

 - 您想使用除`中文`之外的语言。
 - 您想修改默认主题色。
 - 您想为组件添加震动反馈。
 - 您想使用Portal类组件。

### Portal类组件
`ActionSheet` `Modal` `Picker` `Toast` `ToolTip`属于Portal类组件；

若要使用这些组件，必须使用`Provider`包裹根组件（通常在App.js）。

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
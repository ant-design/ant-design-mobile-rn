---
category: Components
title: Provider
type: Other
version: update
---

`Provider` provides a uniform localization support for built-in text of components.

## When to use

 - You want to use other languages than `Chinese`
 - You want to change the default theme color.
 - You want to add vibration feedback to built-in component.
 - You want to use the `Portal component`.

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
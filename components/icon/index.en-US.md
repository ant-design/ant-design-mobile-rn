---
category: Components
type: Data Display
title: Icon
---

## How to Use

### 安装依赖

```bash
npm install @ant-design/icons-react-native@latest
```


### Linking

 - Add assets to your `react-native.config.js` ( If not exist, please create in project’s root directory )

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - Run the [`react-native-asset`](https://github.com/unimonkiez/react-native-asset)'s command and linking + unlinking is automatic

   ```bash
   npx react-native-asset
   ```
   will copy fonts to `ios` and `android` assets folder.


## API

| Properties | Description         | Type                               | Default |
| ---------- | ------------------- | ---------------------------------- | ------- |
| name       | `OutlineGlyphMapType` | string                             |
| size       | icon size           | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`    |
| color      | icon color          | Color                              | '#000'  |

 - Tips1: Clicking the icon in the demo will automatically copy the code to the `<Icon />`.
 - Tips2: By default, Icon uses the `outline` icon in `ant-design-icons`
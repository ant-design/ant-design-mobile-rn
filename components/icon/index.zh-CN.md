---
category: Components
type: Data Display
title: Icon
subtitle: 图标
---

## 如何使用

### 安装依赖

```bash
npm install @ant-design/icons-react-native@latest
```


### Linking

 - 将字体资源路径配置到根目录下的 `react-native.config.js` 文件中 ( 如果没有，请创建 )

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - 然后执行 [react-native-asset](https://github.com/unimonkiez/react-native-asset) 的命令

   ```bash
   npx react-native-asset
   ```
   字体文件将会自动复制到`ios` 和 `android` 资源文件中。


## API

| 属性  | 说明                | 类型                               | 默认值 |
| ----- | ------------------- | ---------------------------------- | ------ |
| name  | OutlineGlyphMapType | string                             |
| size  | 图标大小            | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`   |
| color | 图标颜色            | Color                              | '#000' |

 - 注1：Demo中点击图标可自动复制`<Icon />`代码。
 - 注2：关于`OutlineGlyphMapType`，默认现在Icon使用了 `ant-design-icons` 里面的`outline` 图标。
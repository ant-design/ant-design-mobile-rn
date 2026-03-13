---
category: Components
type: Data Display
title: Watermark
subtitle: 水印
---

给页面或组件添加水印，用于标识版权或防止信息泄露。

### 规则

- 适用于需要保护内容版权的场景。
- 支持文字和图片两种水印形式。
- 水印会自动平铺填充整个容器。

## API

| 属性          | 说明                                                      | 类型                    | 默认值  |
| ------------- | --------------------------------------------------------- | ----------------------- | ------- |
| content       | 水印文字内容，支持字符串或字符串数组                       | `string \| string[]`    | -       |
| contentStyle  | 水印文字样式                                               | `StyleProp<TextStyle>`  | -       |
| image         | 水印图片                                               | `string \| React.ReactNode`                | -       |
| imageStyle    | 水印图片样式                                               | `StyleProp<ImageStyle>`  | -       |
| width         | 单个水印的宽度                                             | `number`                | `120`   |
| height        | 单个水印的高度                                             | `number`                | `64`    |
| gapX          | 水印之间的水平间距                                         | `number`                | `0`     |
| gapY          | 水印之间的垂直间距                                         | `number`                | `0`     |
| rotate        | 水印的旋转角度（单位：度）                                 | `number`                | `-22`   |
| foreground    | 是否将水印显示在前景层（`true` 时水印在内容上方）         | `boolean`               | `true` |
| children      | 需要添加水印的内容                                         | `React.ReactNode`        | -       |
| style         | 容器样式                                                   | `ViewStyle`             | -       |
| styles        | 内部组件样式集                                             | [Partial\<WatermarkStyle\>](#watermarkstyle-语义化样式) | -       |

### WatermarkStyle 语义化样式
```jsx
interface WatermarkStyle {
  container: ViewStyle
  wmContainer: ViewStyle
  wmItem: ViewStyle
  wmImage: ImageStyle
  wmText: TextStyle
}
```
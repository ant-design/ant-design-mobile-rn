---
category: Components
type: Data Display
title: Icon
subtitle: 图标
---

## 如何使用

从`3.0.0` 开始使用 `ant-design-icons` 字体图标不需要单独安装但是需要`link`

更多信息请查看https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react-native

安装完成后需要link字体文件

```bash
react-native link @ant-design/icons-react-native
```

使用方式：

```jsx
<Icon name="account-book" size="md" color="red" />
```

> 注： 默认现在Icon使用了 `ant-design-icons` 里面的`outline` 图标

## API

| 属性  | 说明                | 类型                               | 默认值 |
| ----- | ------------------- | ---------------------------------- | ------ |
| name  | OutlineGlyphMapType | string                             |
| size  | 图标大小            | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`   |
| color | 图标颜色            | Color                              | '#000' |

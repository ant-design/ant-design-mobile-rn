---
category: Components
type: Data Display
title: Icon
subtitle: 图标
---

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

> 由于 Icon 无法做纯 UI，需要 native 支持。另外 `loading`(废弃) icon 没有动画，建议自己使用 RN `ActivityIndicator` 来代替

- 下载 `https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf` 重命名为 `anticon.ttf`
- 打开 iOS 项目 `info.plist` 文件，添加 `Fonts provided by application`，指定一个 item 的值为 `anticon.ttf`， 将 `anticon.ttf` 拖进项目；
- Android 项目将 `anticon.ttf` 放在 `android/app/src/main/assets/fonts/` 目录下;

> 另外，在 [pull/2270](https://github.com/ant-design/ant-design-mobile/pull/2270) 里提出了另一种利用 `react-native link` / rpm 的使用方式，可以关注下。

使用方式：

```html
内置的几个图标： <Icon type="check" size="md" color="red" />
自定义图标：<Icon type={'\ue601'} size={55} /> (具体参看 demo)
```
> 注： 自定义图标需要先查找对应图标的 unicode 字符，可以去 ant.design 官网用 chrome 调试工具查看对应图标的值

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称 或 unicode    | String   |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg' / number  | `md` |
| color   | 图标颜色  | Color | '#000' |

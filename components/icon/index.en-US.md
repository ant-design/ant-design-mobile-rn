---
category: Components
type: Data Display
title: Icon
---

## Naming Conventions

Each icon has its own semantic naming，the naming rules are as follows:

- The solid and line icons have same name，we use `-o` to distinguish it. eg: `question-circle` (solid icon), `question-circle-o` (line icon)
- Sequence in naming: `[icon name]-[shape(optional)]-[`-o` or not]-[direction(optional)]`。

## How to Use

> You need to use custom font(`anticon.ttf`). And `loading`(Deprecated) icon is not animated, it is recommended to use RN `ActivityIndicator` instead.

- Download`https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf` and rename to `anticon.ttf`
- Open `info.plist` file in your xcode project, add `Fonts provided by application` property with one item and value `anticon.ttf`, then drag `anticon.ttf` to your xcode project.
- In Android project, you need place `anticon.ttf` in the `android/app/src/main/assets/fonts/` folder;

> In addition, in [pull/2270](https://github.com/ant-design/ant-design-mobile/pull/2270), another way of using `react-native link`/rpm is proposed. Maybe you can try it.

example：

```html
built-in icon： <Icon type="check" size="md" color="red" />
customized icon：<Icon type={'\ue601'} size={55} /> (具体参看 demo)
```
> Note: You can find some unicode characters in [https://ant.design/components/icon/](https://ant.design/components/icon/) by using Chrome Developer Tool to inspect icons.

## API

| Properties        | Description           | Type            | Default       |
|------------|----------------|----------------|--------------|
| type    |   string name of built-in icon or unicode string for `RN`    | String   |
| size    |   icon size     | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md` |
| color   | icon color  | Color | '#000' |

---
category: Components
type: Data Display
title: Icon
---

## How to Use

Starting with `3.0.0` The `ant-design-icons` font icon does not need to be installed separately but requires `link`

For more informations please checkout
https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react-native

```bash
react-native link @ant-design/icons-react-native
```

example:

```html
<Icon name="account-book" size="md" color="red" />
```

> Note： By default, Icon uses the `outline` icon in `ant-design-icons`

## API

| Properties | Description         | Type                               | Default |
| ---------- | ------------------- | ---------------------------------- | ------- |
| name       | OutlineGlyphMapType | string                             |
| size       | icon size           | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`    |
| color      | icon color          | Color                              | '#000'  |

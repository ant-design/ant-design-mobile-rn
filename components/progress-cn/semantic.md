# Progress Semantic

## Component Description

表明某个任务的当前进度。

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View"
    },
    {
      "component": "Animated.View"
    }
  ]
}
```

## Styles Schema

```json
{
  "progressOuter": {
    "type": "ViewStyle",
    "description": "外层容器的基础样式，如背景色、尺寸等",
    "defaultValue": {
      "backgroundColor": "theme.border_color_base",
      "flex": 1
    }
  },
  "progressBar": {
    "type": "ViewStyle",
    "description": "进度条填充颜色和高度等基础样式",
    "defaultValue": {
      "borderBottomWidth": 4,
      "borderStyle": "solid",
      "borderColor": "theme.brand_primary"
    }
  }
}
```

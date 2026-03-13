# Progress Semantic

## Component Description

Progress Bar to indicate your task's progress.

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
    "description": "Base style of the outer container, such as background color, size, etc.",
    "defaultValue": {
      "backgroundColor": "theme.border_color_base",
      "flex": 1
    }
  },
  "progressBar": {
    "type": "ViewStyle",
    "description": "Base style of the progress bar fill color and height, etc.",
    "defaultValue": {
      "borderBottomWidth": 4,
      "borderStyle": "solid",
      "borderColor": "theme.brand_primary"
    }
  }
}
```

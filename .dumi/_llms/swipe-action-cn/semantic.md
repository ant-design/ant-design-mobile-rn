# SwipeAction Semantic

## Component Description

滑动操作组件。

---

## DOM Structure

```json
{
  "component": "Swipeable",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "Animated.View",
          "children": [
            {
              "component": "RectButton",
              "style": "actionButton",
              "children": [
                {
                  "component": "Text",
                  "style": "actionText"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "actionButton": {
    "type": "ViewStyle",
    "description": "操作按钮容器样式",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "操作按钮文本样式",
    "defaultValue": {
      "color": "theme.color_text_base_inverse",
      "fontSize": "theme.font_size_base",
      "backgroundColor": "transparent",
      "padding": 10
    }
  }
}
```

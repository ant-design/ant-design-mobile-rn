# SwipeAction Semantic

## Component Description

iOS-style swipeout buttons that appear from behind a component.

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
    "description": "action button container style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "Action button text style",
    "defaultValue": {
      "color": "theme.color_text_base_inverse",
      "fontSize": "theme.font_size_base",
      "backgroundColor": "transparent",
      "padding": 10
    }
  }
}
```

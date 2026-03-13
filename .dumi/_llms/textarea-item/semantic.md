# TextareaItem Semantic

## Component Description

A foundational component for inputting multi-line text into the app via a keyboard.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "TextInput",
      "style": "input"
    },
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "style": "errorIcon",
          "children": [
            {
              "component": "Icon"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "count",
      "children": [
        {
          "component": "Text",
          "style": "countText"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "Container overall style",
    "defaultValue": {
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "Text input field style",
    "defaultValue": {
      "paddingHorizontal": 8,
      "backgroundColor": "#ffffff",
      "fontSize": 17,
      "lineHeight": "Math.round(1.3 * theme.font_size_heading)",
      "textAlignVertical": "top"
    }
  },
  "icon": {
    "type": "ViewStyle",
    "description": "Icon style",
    "defaultValue": {
      "position": "absolute",
      "top": 8,
      "width": 18,
      "height": 18
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "Error icon container style",
    "defaultValue": {
      "position": "absolute",
      "right": 18,
      "top": 12
    }
  },
  "count": {
    "type": "ViewStyle",
    "description": "Character count container style",
    "defaultValue": {
      "position": "absolute",
      "right": 8,
      "bottom": 8
    }
  },
  "countText": {
    "type": "TextStyle",
    "description": "Character count text style",
    "defaultValue": {}
  }
}
```

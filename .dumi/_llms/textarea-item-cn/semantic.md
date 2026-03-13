# TextareaItem Semantic

## Component Description

用于接受多行文本。

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
    "description": "容器整体样式",
    "defaultValue": {
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "文本输入框样式",
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
    "description": "图标样式",
    "defaultValue": {
      "position": "absolute",
      "top": 8,
      "width": 18,
      "height": 18
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "错误图标容器样式",
    "defaultValue": {
      "position": "absolute",
      "right": 18,
      "top": 12
    }
  },
  "count": {
    "type": "ViewStyle",
    "description": "字数统计容器样式",
    "defaultValue": {
      "position": "absolute",
      "right": 8,
      "bottom": 8
    }
  },
  "countText": {
    "type": "TextStyle",
    "description": "字数文本样式",
    "defaultValue": {}
  }
}
```

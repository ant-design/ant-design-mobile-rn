# Tag Semantic

## Component Description

进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "tag",
  "children": [
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "style": [
            "wrap",
            "normalWrap",
            "wrapSmall",
            "activeWrap",
            "disabledWrap"
          ],
          "children": [
            {
              "component": "Text",
              "style": [
                "text",
                "textSmall",
                "normalText",
                "activeText",
                "disabledText"
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Icon",
      "style": "close"
    }
  ]
}
```

## Styles Schema

```json
{
  "tag": {
    "type": "ViewStyle",
    "description": "标签根容器样式",
    "defaultValue": {
      "position": "relative",
      "flexDirection": "row",
      "overflow": "visible"
    }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "标签默认外层容器样式",
    "defaultValue": {
      "height": 25,
      "justifyContent": "center",
      "borderRadius": 3,
      "borderWidth": 0.5,
      "borderStyle": "solid",
      "paddingVertical": 0,
      "paddingHorizontal": 15
    }
  },
  "wrapSmall": {
    "type": "ViewStyle",
    "description": "small 类型标签的容器样式（动态可能生效）",
    "defaultValue": {
      "height": "theme.tag_height_sm",
      "paddingVertical": 0,
      "paddingHorizontal": 5
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "标签文本基础样式",
    "defaultValue": {
      "fontSize": 12,
      "textAlign": "center"
    }
  },
  "textSmall": {
    "type": "TextStyle",
    "description": "small 类型标签文本样式（动态可能生效）",
    "defaultValue": {
      "fontSize": 10
    }
  },
  "normalWrap": {
    "type": "ViewStyle",
    "description": "非禁用且未选中标签的容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#dddddd"
    }
  },
  "normalText": {
    "type": "TextStyle",
    "description": "非禁用且未选中标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#888888"
    }
  },
  "activeWrap": {
    "type": "ViewStyle",
    "description": "被选中且非禁用标签的容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#108ee9"
    }
  },
  "activeText": {
    "type": "TextStyle",
    "description": "被选中且非禁用标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "disabledWrap": {
    "type": "ViewStyle",
    "description": "禁用状态标签容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "borderColor": "#dddddd"
    }
  },
  "disabledText": {
    "type": "TextStyle",
    "description": "禁用状态标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "close": {
    "type": "ViewStyle",
    "description": "关闭图标样式",
    "defaultValue": {
      "position": "absolute",
      "top": -6,
      "left": -6,
      "color": "#bbbbbb",
      "backgroundColor": "transparent",
      "borderRadius": 999,
      "fontSize": 16
    }
  }
}
```

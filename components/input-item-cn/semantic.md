# InputItem Semantic

## Component Description

用于接受单行文本。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Text",
      "style": "text"
    },
    {
      "component": "View"
    },
    {
      "component": "Input",
      "style": [
        "input",
        "inputErrorColor",
        "inputDisabled"
      ]
    },
    {
      "component": "TouchableOpacity",
      "style": "clear"
    },
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "Text",
              "style": "extra"
            }
          ]
        }
      ]
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
    }
  ]
}
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "容器整体样式，包含边框样式",
    "defaultValue": {
      "height": "44 + 0.5",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "#dddddd",
      "marginLeft": "15",
      "paddingRight": "15",
      "marginTop": 0,
      "marginBottom": 0,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "标签文本样式，宽度可根据 labelNumber 变量调整",
    "defaultValue": {
      "marginRight": "5",
      "textAlignVertical": "center",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "输入框文本样式",
    "defaultValue": {
      "flex": 1,
      "backgroundColor": "transparent",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "inputDisabled": {
    "type": "TextStyle",
    "description": "输入框禁用样式",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "color": "#bbbbbb"
    }
  },
  "inputErrorColor": {
    "type": "TextStyle",
    "description": "输入框错误颜色样式",
    "defaultValue": {
      "color": "#f50"
    }
  },
  "clear": {
    "type": "ViewStyle",
    "description": "清除按钮区域样式",
    "defaultValue": {
      "backgroundColor": "#cccccc",
      "borderRadius": 15,
      "padding": 2
    }
  },
  "extra": {
    "type": "TextStyle",
    "description": "额外说明文字样式",
    "defaultValue": {
      "marginLeft": "5",
      "fontSize": "15",
      "color": "#888888"
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "错误图标容器样式",
    "defaultValue": {
      "marginLeft": "5",
      "width": "21",
      "height": "21"
    }
  }
}
```

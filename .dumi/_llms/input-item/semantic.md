# InputItem Semantic

## Component Description

A foundational component for inputting text into the app via a keyboard.

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
      "style": ["input", "inputErrorColor", "inputDisabled"]
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
    "description": "container overall style, includes border style",
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
    "description": "label text style, width can be adjusted by labelNumber variable",
    "defaultValue": {
      "marginRight": "5",
      "textAlignVertical": "center",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "input box text style",
    "defaultValue": {
      "flex": 1,
      "backgroundColor": "transparent",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "inputDisabled": {
    "type": "TextStyle",
    "description": "inputDisabled style",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "color": "#bbbbbb"
    }
  },
  "inputErrorColor": {
    "type": "TextStyle",
    "description": "inputErrorColor style",
    "defaultValue": { "color": "#f50" }
  },
  "clear": {
    "type": "ViewStyle",
    "description": "clear button area style",
    "defaultValue": {
      "backgroundColor": "#cccccc",
      "borderRadius": 15,
      "padding": 2
    }
  },
  "extra": {
    "type": "TextStyle",
    "description": "extra description text style",
    "defaultValue": {
      "marginLeft": "5",
      "fontSize": "15",
      "color": "#888888"
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "error icon container style",
    "defaultValue": {
      "marginLeft": "5",
      "width": "21",
      "height": "21"
    }
  }
}
```

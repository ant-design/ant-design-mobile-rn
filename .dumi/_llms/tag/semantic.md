# Tag Semantic

## Component Description

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

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
    "description": "Tag root container style",
    "defaultValue": {
      "position": "relative",
      "flexDirection": "row",
      "overflow": "visible"
    }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "Tag default outer container style",
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
    "description": "Small size tag container style (dynamically applied)",
    "defaultValue": {
      "height": "theme.tag_height_sm",
      "paddingVertical": 0,
      "paddingHorizontal": 5
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "Tag text base style",
    "defaultValue": {
      "fontSize": 12,
      "textAlign": "center"
    }
  },
  "textSmall": {
    "type": "TextStyle",
    "description": "Small size tag text style (dynamically applied)",
    "defaultValue": {
      "fontSize": 10
    }
  },
  "normalWrap": {
    "type": "ViewStyle",
    "description": "Non-disabled and non-active tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#dddddd"
    }
  },
  "normalText": {
    "type": "TextStyle",
    "description": "Non-disabled and non-active tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#888888"
    }
  },
  "activeWrap": {
    "type": "ViewStyle",
    "description": "Active and non-disabled tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#108ee9"
    }
  },
  "activeText": {
    "type": "TextStyle",
    "description": "Active and non-disabled tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "disabledWrap": {
    "type": "ViewStyle",
    "description": "Disabled state tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "borderColor": "#dddddd"
    }
  },
  "disabledText": {
    "type": "TextStyle",
    "description": "Disabled state tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "close": {
    "type": "ViewStyle",
    "description": "Close icon style",
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

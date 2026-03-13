# ActionSheet Semantic

## Component Description

The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Modal",
      "style": "content",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "style": "title",
              "children": [
                {
                  "component": "Text",
                  "style": "titleText"
                }
              ]
            },
            {
              "component": "AntmView",
              "style": "message"
            },
            {
              "component": "View",
              "children": [
                {
                  "component": "View",
                  "style": "cancelBtn",
                  "children": [
                    {
                      "component": "TouchableHighlight",
                      "style": "btn"
                    },
                    {
                      "component": "Text",
                      "style": ["btnText", "destructiveBtn"]
                    },
                    {
                      "component": "View",
                      "style": "cancelBtnMask"
                    }
                  ]
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
  "container": {
    "type": "ViewStyle",
    "description": "Container area, overall wrapper for ActionSheet, handles layout",
    "defaultValue": { "zIndex": 1000 }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "Wrap style",
    "defaultValue": { "position": "absolute", "left": 0, "right": 0, "top": 0 }
  },
  "content": {
    "type": "ViewStyle",
    "description": "Content style",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0,
      "backgroundColor": "#ffffff"
    }
  },
  "mask": {
    "type": "ViewStyle",
    "description": "Mask style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "backgroundColor": "rgba(0, 0, 0, .4)"
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "Title area, displays title text, only rendered when title is configured",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "marginTop": 15,
      "marginBottom": 15
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "Title text",
    "defaultValue": { "fontWeight": "500", "color": "#000000" }
  },
  "message": {
    "type": "ViewStyle",
    "description": "Message area, displays extra text information, only rendered when message is configured",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "marginBottom": 15,
      "color": "#000000",
      "textAlign": "center"
    }
  },
  "btn": {
    "type": "ViewStyle",
    "description": "Button touch area, supports button base style btn",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "height": 50,
      "borderStyle": "solid",
      "borderTopWidth": 1,
      "borderTopColor": "#dddddd"
    }
  },
  "btnText": {
    "type": "TextStyle",
    "description": "Button text, base style btnText, destructive button style destructiveBtn conditionally applied",
    "defaultValue": { "color": "#000000" }
  },
  "cancelBtn": {
    "type": "ViewStyle",
    "description": "Option container, supports cancel button style conditionally applied (cancelBtn)",
    "defaultValue": { "marginTop": 9, "position": "relative" }
  },
  "cancelBtnMask": {
    "type": "ViewStyle",
    "description": "Cancel button mask layer, conditionally rendered",
    "defaultValue": {
      "position": "absolute",
      "top": "-theme.v_spacing_md",
      "left": 0,
      "right": 0,
      "height": 9,
      "backgroundColor": "#f7f7f7",
      "borderStyle": "solid",
      "borderTopWidth": 1,
      "borderTopColor": "#dddddd"
    }
  },
  "destructiveBtn": {
    "type": "TextStyle",
    "description": "Destructive button style",
    "defaultValue": { "color": "#f4333c", "fontSize": 18 }
  }
}
```

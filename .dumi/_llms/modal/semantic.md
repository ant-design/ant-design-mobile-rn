# Modal Semantic

## Component Description

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "wrap",
      "children": [
        {
          "component": "TouchableWithoutFeedback",
          "children": [
            {
              "component": "Animated.View",
              "style": "maskClosable",
              "children": [
                {
                  "component": "View",
                  "style": "maskClosable"
                }
              ]
            }
          ]
        },
        {
          "component": "Animated.View",
          "style": "container",
          "children": [
            {
              "component": "View",
              "style": [
                "innerContainer",
                "popupContainer",
                "popupSlideUp",
                "popupSlideDown"
              ],
              "children": [
                {
                  "component": "Text",
                  "style": "header"
                },
                {
                  "component": "View",
                  "style": "body"
                },
                {
                  "component": "View",
                  "style": ["footer", "buttonGroupV", "buttonGroupH"],
                  "children": [
                    {
                      "component": "TouchableHighlight",
                      "children": [
                        {
                          "component": "View",
                          "style": ["buttonWrapV", "buttonWrapH"],
                          "children": [
                            {
                              "component": "Text",
                              "style": ["buttonText", "buttonTextOperation"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "component": "View",
                  "style": "closeWrap",
                  "children": [
                    {
                      "component": "TouchableWithoutFeedback",
                      "children": [
                        {
                          "component": "View",
                          "children": [
                            {
                              "component": "Text",
                              "style": "close"
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
    "description": "mask layer container, full screen, floating mask",
    "defaultValue": { "zIndex": "999" }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "mask layer wrapper container",
    "defaultValue": {
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "transparent"
    }
  },
  "popupContainer": {
    "type": "ViewStyle",
    "description": "popupContainer style",
    "defaultValue": {}
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "dialog content wrapper container, for popup mode applies popupContainer, popupSlideUp, popupSlideDown dynamic styles",
    "defaultValue": {
      "borderRadius": "5",
      "width": 286,
      "paddingTop": "21",
      "overflow": "hidden",
      "backgroundColor": "#ffffff"
    }
  },
  "popupSlideUp": {
    "type": "ViewStyle",
    "description": "popupSlideUp style",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0
    }
  },
  "popupSlideDown": {
    "type": "ViewStyle",
    "description": "popupSlideDown style",
    "defaultValue": {}
  },
  "footer": {
    "type": "ViewStyle",
    "description": "footer button area, footer area",
    "defaultValue": {}
  },
  "header": {
    "type": "TextStyle",
    "description": "header title area, displays title text",
    "defaultValue": {
      "fontSize": "18",
      "color": "#000000",
      "textAlign": "center",
      "paddingHorizontal": "15"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "content area, wraps children view, supports body and bodyStyle pass-through",
    "defaultValue": {
      "paddingTop": 0,
      "paddingBottom": "15",
      "paddingHorizontal": "15"
    }
  },
  "maskClosable": {
    "type": "ViewStyle",
    "description": "maskClosable style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "backgroundColor": "transparent"
    }
  },
  "closeWrap": {
    "type": "ViewStyle",
    "description": "close button area (conditional rendering, when closable is true)",
    "defaultValue": {
      "position": "absolute",
      "top": "21",
      "left": "15"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "close style",
    "defaultValue": {
      "fontSize": 40,
      "fontWeight": "200",
      "color": "#bcbcbc",
      "lineHeight": 30
    }
  },
  "buttonGroupH": {
    "type": "ViewStyle",
    "description": "buttonGroupH style",
    "defaultValue": { "flexGrow": 1, "flexDirection": "row" }
  },
  "buttonGroupV": {
    "type": "ViewStyle",
    "description": "buttonGroupV style",
    "defaultValue": { "flexGrow": 1, "flexDirection": "column" }
  },
  "buttonWrapH": {
    "type": "ViewStyle",
    "description": "buttonWrapH style",
    "defaultValue": {
      "height": "50",
      "flexGrow": 1,
      "justifyContent": "center",
      "borderColor": "#dddddd",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderRightWidth": "StyleSheet.hairlineWidth",
      "paddingVertical": 11
    }
  },
  "buttonWrapV": {
    "type": "ViewStyle",
    "description": "buttonWrapV style",
    "defaultValue": {
      "flexGrow": 1,
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderColor": "#dddddd",
      "paddingVertical": 11
    }
  },
  "buttonText": {
    "type": "TextStyle",
    "description": "buttonText style",
    "defaultValue": {
      "textAlign": "center",
      "color": "#108ee9",
      "fontSize": "18",
      "backgroundColor": "transparent"
    }
  },
  "operationContainer": {
    "type": "ViewStyle",
    "description": "operationContainer style",
    "defaultValue": { "paddingTop": 0 }
  },
  "operationBody": {
    "type": "ViewStyle",
    "description": "operationBody style",
    "defaultValue": { "paddingBottom": 0, "paddingHorizontal": 0 }
  },
  "buttonTextOperation": {
    "type": "TextStyle",
    "description": "buttonTextOperation style",
    "defaultValue": {
      "color": "#000000",
      "textAlign": "left",
      "paddingHorizontal": 15
    }
  }
}
```

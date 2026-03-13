# Modal Semantic

## Component Description

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

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
    "description": "遮罩层容器，屏幕全屏，悬浮遮罩",
    "defaultValue": { "zIndex": "999" }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "遮罩层包裹容器",
    "defaultValue": {
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "transparent"
    }
  },
  "popupContainer": {
    "type": "ViewStyle",
    "description": "弹出容器样式",
    "defaultValue": {}
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "对话框内容包裹容器，对于popup模式应用：popupContainer、popupSlideUp、popupSlideDown 动态样式",
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
    "description": "向上滑动弹出样式",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0
    }
  },
  "popupSlideDown": {
    "type": "ViewStyle",
    "description": "向下滑动弹出样式",
    "defaultValue": {}
  },
  "footer": {
    "type": "ViewStyle",
    "description": "底部按钮区域，footer区域",
    "defaultValue": {}
  },
  "header": {
    "type": "TextStyle",
    "description": "头部标题区域，显示标题文本",
    "defaultValue": {
      "fontSize": "18",
      "color": "#000000",
      "textAlign": "center",
      "paddingHorizontal": "15"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "内容区域，包裹 children 视图，支持 body 和 bodyStyle 透传",
    "defaultValue": {
      "paddingTop": 0,
      "paddingBottom": "15",
      "paddingHorizontal": "15"
    }
  },
  "maskClosable": {
    "type": "ViewStyle",
    "description": "遮罩可关闭样式",
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
    "description": "关闭按钮区域（条件渲染，当 closable 为 true）",
    "defaultValue": {
      "position": "absolute",
      "top": "21",
      "left": "15"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "关闭样式",
    "defaultValue": {
      "fontSize": 40,
      "fontWeight": "200",
      "color": "#bcbcbc",
      "lineHeight": 30
    }
  },
  "buttonGroupH": {
    "type": "ViewStyle",
    "description": "水平按钮组样式",
    "defaultValue": { "flexGrow": 1, "flexDirection": "row" }
  },
  "buttonGroupV": {
    "type": "ViewStyle",
    "description": "垂直按钮组样式",
    "defaultValue": { "flexGrow": 1, "flexDirection": "column" }
  },
  "buttonWrapH": {
    "type": "ViewStyle",
    "description": "水平按钮包裹样式",
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
    "description": "垂直按钮包裹样式",
    "defaultValue": {
      "flexGrow": 1,
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderColor": "#dddddd",
      "paddingVertical": 11
    }
  },
  "buttonText": {
    "type": "TextStyle",
    "description": "按钮文本样式",
    "defaultValue": {
      "textAlign": "center",
      "color": "#108ee9",
      "fontSize": "18",
      "backgroundColor": "transparent"
    }
  },
  "operationContainer": {
    "type": "ViewStyle",
    "description": "操作容器样式",
    "defaultValue": { "paddingTop": 0 }
  },
  "operationBody": {
    "type": "ViewStyle",
    "description": "操作主体样式",
    "defaultValue": { "paddingBottom": 0, "paddingHorizontal": 0 }
  },
  "buttonTextOperation": {
    "type": "TextStyle",
    "description": "操作按钮文本样式",
    "defaultValue": {
      "color": "#000000",
      "textAlign": "left",
      "paddingHorizontal": 15
    }
  }
}
```

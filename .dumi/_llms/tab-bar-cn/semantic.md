# TabBar Semantic

## Component Description

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

---

## DOM Structure

```json
{
  "component": "SafeAreaView",
  "children": [
    {
      "component": "View",
      "style": "tabbar",
      "children": [
        {
          "component": "View",
          "style": "content",
          "children": [
            {
              "component": "View",
              "style": ["contentItem", "contentItemSelected"]
            }
          ]
        },
        {
          "component": "View",
          "style": "tabs",
          "children": [
            {
              "component": "TouchableWithoutFeedback",
              "children": [
                {
                  "component": "View",
                  "style": "barItem",
                  "children": [
                    {
                      "component": "View",
                      "children": [
                        {
                          "component": "ImageOrIcon",
                          "style": "barIcon"
                        },
                        {
                          "component": "View",
                          "style": "badge",
                          "children": [
                            {
                              "component": "Text",
                              "style": "badgeText"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "component": "Text",
                      "style": "barItemTitle"
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
  "tabbar": {
    "type": "ViewStyle",
    "description": "TabBar 主容器样式",
    "defaultValue": {
      "flex": 1
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "内容区容器样式",
    "defaultValue": {
      "flex": 1
    }
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "底部标签栏容器样式",
    "defaultValue": {
      "height": "theme.tab_bar_height",
      "borderTopWidth": "theme.border_width_md",
      "borderColor": "theme.border_color_base",
      "borderStyle": "solid",
      "flexDirection": "row"
    }
  },
  "barItem": {
    "type": "ViewStyle",
    "description": "标签项默认样式",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "barIcon": {
    "type": "ImageStyle",
    "description": "图标样式",
    "defaultValue": {
      "width": 28,
      "height": 28,
      "marginTop": 2
    }
  },
  "barItemSelected": {
    "type": "ViewStyle",
    "description": "选中标签项样式，动态饰品",
    "defaultValue": {}
  },
  "barItemTitle": {
    "type": "TextStyle",
    "description": "标签文字样式",
    "defaultValue": {
      "fontSize": "theme.font_size_icontext",
      "marginTop": 2
    }
  },
  "contentItem": {
    "type": "ViewStyle",
    "description": "内容项样式",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "right": 0,
      "bottom": 0,
      "backgroundColor": "white",
      "height": 0
    }
  },
  "contentItemSelected": {
    "type": "ViewStyle",
    "description": "选中内容项的额外样式",
    "defaultValue": {
      "height": "undefined"
    }
  },
  "badge": {
    "type": "ViewStyle",
    "description": "徽章背景样式",
    "defaultValue": {
      "minWidth": 20,
      "height": 20,
      "borderRadius": 10,
      "backgroundColor": "theme.brand_important",
      "position": "absolute",
      "top": 0,
      "left": 20,
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "badgeText": {
    "type": "TextStyle",
    "description": "徽章文字样式",
    "defaultValue": {
      "textAlign": "center",
      "color": "white"
    }
  }
}
```

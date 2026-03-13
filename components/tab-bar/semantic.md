# TabBar Semantic

## Component Description

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

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
    "description": "TabBar 主 container style",
    "defaultValue": {
      "flex": 1
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "content 区 container style",
    "defaultValue": {
      "flex": 1
    }
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "Footer label bar container style",
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
    "description": "Label item default style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "barIcon": {
    "type": "ImageStyle",
    "description": "Icon style",
    "defaultValue": {
      "width": 28,
      "height": 28,
      "marginTop": 2
    }
  },
  "barItemSelected": {
    "type": "ViewStyle",
    "description": "Active label item style, dynamic decoration",
    "defaultValue": {}
  },
  "barItemTitle": {
    "type": "TextStyle",
    "description": "Label text style",
    "defaultValue": {
      "fontSize": "theme.font_size_icontext",
      "marginTop": 2
    }
  },
  "contentItem": {
    "type": "ViewStyle",
    "description": "Content item style",
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
    "description": "Active content item extra style",
    "defaultValue": {
      "height": "undefined"
    }
  },
  "badge": {
    "type": "ViewStyle",
    "description": "Badge background style",
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
    "description": "Badge text style",
    "defaultValue": {
      "textAlign": "center",
      "color": "white"
    }
  }
}
```

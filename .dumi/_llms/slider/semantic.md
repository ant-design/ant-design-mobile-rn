# Slider Semantic

## Component Description

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

---

## DOM Structure

```json
{
  "component": "GestureDetector",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View"
            },
            {
              "component": "Animated.View"
            },
            {
              "component": "View",
              "children": [
                {
                  "component": "Animated.View"
                }
              ]
            },
            {
              "component": "Animated.View",
              "children": [
                {
                  "component": "View"
                }
              ]
            },
            {
              "component": "Animated.View",
              "children": [
                {
                  "component": "View"
                }
              ]
            }
          ]
        },
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "children": [
                {
                  "component": "View"
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
  "slider": {
    "type": "ViewStyle",
    "description": "Slider 组件主 container style",
    "defaultValue": {
      "paddingVertical": 5,
      "paddingHorizontal": 14
    }
  },
  "disabled": {
    "type": "ViewStyle",
    "description": "disabled 时叠加 style",
    "defaultValue": {}
  },
  "trackContianer": {
    "type": "ViewStyle",
    "description": "滑轨 container style",
    "defaultValue": {
      "paddingVertical": 8,
      "position": "relative",
      "width": "100%",
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "track": {
    "type": "ViewStyle",
    "description": "Slider track background style",
    "defaultValue": {
      "position": "absolute",
      "width": "100%",
      "zIndex": 1,
      "height": 3,
      "borderRadius": 3,
      "backgroundColor": "theme.fill_grey"
    }
  },
  "fill": {
    "type": "ViewStyle",
    "description": "Fill bar style",
    "defaultValue": {
      "position": "absolute",
      "zIndex": 1,
      "height": 3,
      "borderRadius": 3,
      "backgroundColor": "theme.brand_primary"
    }
  },
  "thumb": {
    "type": "ViewStyle",
    "description": "Handle button style",
    "defaultValue": {
      "zIndex": 3
    }
  },
  "ticks": {
    "type": "ViewStyle",
    "description": "Tick mark container style",
    "defaultValue": {
      "position": "absolute",
      "width": "100%",
      "height": 3,
      "backgroundColor": "transparent",
      "zIndex": 2
    }
  },
  "tick": {
    "type": "ViewStyle",
    "description": "Tick mark default style",
    "defaultValue": {
      "position": "absolute",
      "top": -2,
      "width": 7,
      "height": 7,
      "marginLeft": -3,
      "backgroundColor": "theme.fill_grey",
      "borderRadius": 7
    }
  },
  "tickActive": {
    "type": "ViewStyle",
    "description": "Active state tick mark style",
    "defaultValue": {
      "backgroundColor": "theme.brand_primary"
    }
  },
  "mark": {
    "type": "ViewStyle",
    "description": "Mark container style",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": 11
    }
  },
  "markText": {
    "type": "TextStyle",
    "description": "Mark text style",
    "defaultValue": {
      "transform": "[{ translateX: -theme.font_size_caption_sm / 2 }]",
      "fontSize": "theme.font_size_caption_sm",
      "color": "theme.color_text_paragraph"
    }
  }
}
```

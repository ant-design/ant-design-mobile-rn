# Slider Semantic

## Component Description

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

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
    "description": "Slider 组件主容器样式",
    "defaultValue": {
      "paddingVertical": 5,
      "paddingHorizontal": 14
    }
  },
  "disabled": {
    "type": "ViewStyle",
    "description": "禁用时叠加样式",
    "defaultValue": {}
  },
  "trackContianer": {
    "type": "ViewStyle",
    "description": "滑轨容器样式",
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
    "description": "滑轨条背景样式",
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
    "description": "填充条样式",
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
    "description": "滑块按钮样式",
    "defaultValue": {
      "zIndex": 3
    }
  },
  "ticks": {
    "type": "ViewStyle",
    "description": "刻度点容器样式",
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
    "description": "刻度点默认样式",
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
    "description": "激活状态刻度点样式",
    "defaultValue": {
      "backgroundColor": "theme.brand_primary"
    }
  },
  "mark": {
    "type": "ViewStyle",
    "description": "标记容器样式",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": 11
    }
  },
  "markText": {
    "type": "TextStyle",
    "description": "标记文本样式",
    "defaultValue": {
      "transform": "[{ translateX: -theme.font_size_caption_sm / 2 }]",
      "fontSize": "theme.font_size_caption_sm",
      "color": "theme.color_text_paragraph"
    }
  }
}
```

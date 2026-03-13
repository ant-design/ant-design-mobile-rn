# Switch Semantic

## Component Description

Select between two status, e.g. Select On or Off.

---

## DOM Structure

```json
{
  "component": "Pressable",
  "children": [
    {
      "component": "View",
      "style": [
        "switch",
        "switch_checked",
        "switch_unchecked",
        "switch_checked_disabled",
        "switch_unchecked_disabled"
      ],
      "children": [
        {
          "component": "Animated.View",
          "style": [
            "switch_handle",
            "switch_handle_checked",
            "switch_handle_unchecked",
            "switch_handle_disabled"
          ],
          "children": [
            {
              "component": "RNActivityIndicator"
            }
          ]
        },
        {
          "component": "AnimatedView",
          "style": [
            "switch_inner",
            "switch_inner_checked",
            "switch_inner_unchecked"
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
  "switch": {
    "type": "ViewStyle",
    "description": "开关 track base style",
    "defaultValue": {
      "position": "relative",
      "width": 55,
      "height": 31,
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center",
      "padding": 0,
      "borderRadius": 31
    }
  },
  "switch_inner": {
    "type": "ViewStyle",
    "description": "内 layer container base style",
    "defaultValue": {
      "color": "#fff",
      "fontSize": 12,
      "flex": 1,
      "textAlign": "center",
      "alignItems": "center",
      "justifyContent": "center",
      "zIndex": -1
    }
  },
  "switch_handle": {
    "type": "ViewStyle",
    "description": "手柄 base style",
    "defaultValue": {
      "position": "absolute",
      "width": 27,
      "height": 27,
      "borderRadius": 27,
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "#ffffff",
      "shadowColor": "rgb(0, 35, 11)",
      "shadowOffset": {
        "width": 0,
        "height": 2
      },
      "shadowOpacity": 0.2,
      "shadowRadius": 10,
      "elevation": 10
    }
  },
  "switch_checked": {
    "type": "ViewStyle",
    "description": "Switch track style when active",
    "defaultValue": {
      "borderColor": "theme.brand_primary",
      "backgroundColor": "theme.brand_primary"
    }
  },
  "switch_unchecked": {
    "type": "ViewStyle",
    "description": "Switch track style when not active",
    "defaultValue": {
      "borderColor": "theme.switch_unchecked",
      "backgroundColor": "theme.switch_unchecked"
    }
  },
  "switch_inner_checked": {
    "type": "ViewStyle",
    "description": "active state 下内 layer 变化 style",
    "defaultValue": {
      "marginLeft": 7,
      "marginRight": 27
    }
  },
  "switch_inner_unchecked": {
    "type": "ViewStyle",
    "description": "未 active state 下内 layer 变化 style",
    "defaultValue": {
      "marginLeft": 27,
      "marginRight": 7
    }
  },
  "switch_handle_checked": {
    "type": "ViewStyle",
    "description": "手柄 active state style",
    "defaultValue": {
      "right": 0
    }
  },
  "switch_handle_unchecked": {
    "type": "ViewStyle",
    "description": "手柄未 active state style",
    "defaultValue": {
      "left": 0
    }
  },
  "switch_checked_disabled": {
    "type": "ViewStyle",
    "description": "active 且 disabled state track style",
    "defaultValue": {
      "borderColor": "#108ee966",
      "backgroundColor": "#108ee966"
    }
  },
  "switch_unchecked_disabled": {
    "type": "ViewStyle",
    "description": "未 active 且 disabled state track style",
    "defaultValue": {
      "borderColor": "#cccccc66",
      "backgroundColor": "#cccccc66"
    }
  },
  "switch_handle_disabled": {
    "type": "ViewStyle",
    "description": "手柄 disabled state style",
    "defaultValue": {}
  }
}
```

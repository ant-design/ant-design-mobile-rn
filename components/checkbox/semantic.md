# Checkbox Semantic

## Component Description

Checkbox

---

## DOM Structure

```json
{
  "component": "Pressable",
  "style": "checkbox_wrapper",
  "children": [
    {
      "component": "View",
      "style": "checkbox_wave",
      "children": [
        {
          "component": "View",
          "style": ["checkbox", "checkbox_checked", "checkbox_disabled"],
          "children": [
            {
              "component": "Animated.View",
              "style": [
                "checkbox_inner",
                "checkbox_inner_disabled",
                "checkbox_inner_indeterminate"
              ]
            },
            {
              "component": "Animated.View",
              "style": [
                "checkbox_inner_before",
                "checkbox_inner_before_disabled",
                "checkbox_inner_before_indeterminate"
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "AntmView",
      "style": ["checkbox_label", "checkbox_label_disabled"]
    }
  ]
}
```

## Styles Schema

```json
{
  "checkbox_wrapper": {
    "type": "ViewStyle",
    "description": "container overall style, supports style base property pass-through",
    "defaultValue": {
      "margin": 0,
      "padding": 0,
      "position": "relative",
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "checkbox_wave": {
    "type": "ViewStyle",
    "description": "ripple animation outer",
    "defaultValue": {
      "width": 20,
      "height": 20,
      "padding": 2,
      "overflow": "hidden"
    }
  },
  "checkbox": {
    "type": "ViewStyle",
    "description": "checkbox style",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": "100%",
      "borderRadius": 2,
      "borderWidth": 1,
      "borderStyle": "solid",
      "borderColor": "#d9d9d9",
      "backgroundColor": "transparent",
      "justifyContent": "center",
      "alignItems": "center"
    }
  },
  "checkbox_checked": {
    "type": "ViewStyle",
    "description": "checkbox_checked style",
    "defaultValue": {
      "borderColor": "#108ee9"
    }
  },
  "checkbox_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_disabled style",
    "defaultValue": {
      "borderColor": "#b9b9b9",
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner": {
    "type": "ViewStyle",
    "description": "checkbox_inner style",
    "defaultValue": {
      "width": "103%",
      "height": "103%",
      "backgroundColor": "#108ee9"
    }
  },
  "checkbox_inner_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_inner_disabled style",
    "defaultValue": {
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner_before": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before style"
  },
  "checkbox_inner_before_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before_disabled style",
    "defaultValue": {
      "borderColor": "#b9b9b9"
    }
  },
  "checkbox_label": {
    "type": "ViewStyle",
    "description": "checkbox_label style",
    "defaultValue": {
      "backgroundColor": "transparent",
      "marginRight": "8",
      "marginLeft": "8",
      "color": "#000000"
    }
  },
  "checkbox_label_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_label_disabled style",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "checkbox_inner_indeterminate": {
    "type": "ViewStyle",
    "description": "checkbox_inner_indeterminate style",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "checkbox_inner_before_indeterminate": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before_indeterminate style",
    "defaultValue": {
      "position": "absolute",
      "width": 8,
      "height": 8,
      "backgroundColor": "#108ee9"
    }
  }
}
```

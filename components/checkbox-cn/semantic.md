# Checkbox Semantic

## Component Description

属性 | 说明 | 类型 | 默认值 ----|-----|------|------

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
    "description": "容器总体样式，支持 style 基础属性透传",
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
    "description": "波纹动画外层",
    "defaultValue": {
      "width": 20,
      "height": 20,
      "padding": 2,
      "overflow": "hidden"
    }
  },
  "checkbox": {
    "type": "ViewStyle",
    "description": "复选框样式",
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
    "description": "复选框选中样式",
    "defaultValue": { "borderColor": "#108ee9" }
  },
  "checkbox_disabled": {
    "type": "ViewStyle",
    "description": "复选框禁用样式",
    "defaultValue": {
      "borderColor": "#b9b9b9",
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner": {
    "type": "ViewStyle",
    "description": "复选框内部样式",
    "defaultValue": {
      "width": "103%",
      "height": "103%",
      "backgroundColor": "#108ee9"
    }
  },
  "checkbox_inner_disabled": {
    "type": "ViewStyle",
    "description": "复选框内部禁用样式",
    "defaultValue": { "backgroundColor": "#f5f5f5" }
  },
  "checkbox_inner_before": {
    "type": "ViewStyle",
    "description": "复选框内部前置样式"
  },
  "checkbox_inner_before_disabled": {
    "type": "ViewStyle",
    "description": "复选框内部前置禁用样式",
    "defaultValue": { "borderColor": "#b9b9b9" }
  },
  "checkbox_label": {
    "type": "ViewStyle",
    "description": "复选框标签样式",
    "defaultValue": {
      "backgroundColor": "transparent",
      "marginRight": 8,
      "marginLeft": 8,
      "color": "#000000"
    }
  },
  "checkbox_label_disabled": {
    "type": "ViewStyle",
    "description": "复选框标签禁用样式",
    "defaultValue": { "color": "#bbbbbb" }
  },
  "checkbox_inner_indeterminate": {
    "type": "ViewStyle",
    "description": "复选框半选样式",
    "defaultValue": { "backgroundColor": "transparent" }
  },
  "checkbox_inner_before_indeterminate": {
    "type": "ViewStyle",
    "description": "复选框内部前置半选样式",
    "defaultValue": {
      "position": "absolute",
      "width": 8,
      "height": 8,
      "backgroundColor": "#108ee9"
    }
  }
}
```

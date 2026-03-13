# Stepper Semantic

## Component Description

用作增加或者减少当前数值。

---

## DOM Structure

```json
{
  "component": "Input",
  "style": ["container", "input", "inputDisabled"],
  "children": [
    {
      "component": "TouchableHighlight",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "TouchableHighlight",
      "children": [
        {
          "component": "Text"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "inputDisabled": {
    "type": "TextStyle",
    "description": "输入禁用样式",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "stepWrap": {
    "type": "ViewStyle",
    "description": "步骤按钮包裹样式",
    "defaultValue": {
      "width": 28,
      "flex": 1,
      "justifyContent": "center",
      "borderRadius": "theme.radius_xs",
      "backgroundColor": "theme.fill_grey"
    }
  },
  "stepText": {
    "type": "TextStyle",
    "description": "步骤按钮文字样式",
    "defaultValue": {
      "textAlign": "center",
      "fontSize": 20,
      "color": "theme.brand_primary",
      "backgroundColor": "transparent"
    }
  },
  "stepDisabled": {
    "type": "ViewStyle",
    "description": "步骤按钮禁用样式",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "disabledStepTextColor": {
    "type": "TextStyle",
    "description": "禁用步骤按钮文字颜色样式",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

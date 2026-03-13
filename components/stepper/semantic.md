# Stepper Semantic

## Component Description

- New in `5.2.1`. In addition, all properties of react-native TextInput are supported, eg: **`readOnly`** **`onFocus`** **`onBlur`**

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
    "description": "Input disabled style",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "stepWrap": {
    "type": "ViewStyle",
    "description": "Step button wrapper style",
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
    "description": "Step button text style",
    "defaultValue": {
      "textAlign": "center",
      "fontSize": 20,
      "color": "theme.brand_primary",
      "backgroundColor": "transparent"
    }
  },
  "stepDisabled": {
    "type": "ViewStyle",
    "description": "Step button disabled style",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "disabledStepTextColor": {
    "type": "TextStyle",
    "description": "Disabled step button text color style",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

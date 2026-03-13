# Picker Semantic

## Component Description

Choose from a set of data, e.g. Country choice.

---

## DOM Structure

```json
{
  "component": "Modal",
  "style": ["modal", "container"],
  "children": [
    {
      "component": "View",
      "style": "header",
      "children": [
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": ["actionText", "dismissText"]
            }
          ]
        },
        {
          "component": "View",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": "title"
            }
          ]
        },
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": ["actionText", "okText"]
            }
          ]
        }
      ]
    },
    {
      "component": "RMCPickerView",
      "style": [
        "wrappper",
        "wheelWrapper",
        "itemWrap",
        "itemStyle",
        "itemActiveStyle",
        "mask",
        "maskTop",
        "maskMiddle",
        "maskBottom"
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "modal": {
    "type": "ViewStyle",
    "description": "Popup layer wrapper style (positioning, background mask, etc.)",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "flex-end"
    }
  },
  "container": {
    "type": "ViewStyle",
    "description": "Popup layer content container (layout and background)",
    "defaultValue": {}
  },
  "header": {
    "type": "ViewStyle",
    "description": "Header container layout",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "alignItems": "center",
      "flexDirection": "row",
      "justifyContent": "center",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "theme.border_color_thin",
      "backgroundColor": "theme.fill_base"
    }
  },
  "headerItem": {
    "type": "ViewStyle",
    "description": "Button position and size",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "Button text base style",
    "defaultValue": {
      "color": "theme.brand_primary",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "title": {
    "type": "TextStyle",
    "description": "Title text style",
    "defaultValue": {
      "color": "theme.color_text_caption",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "okText": {
    "type": "TextStyle",
    "description": "Confirm button text variant style",
    "defaultValue": {}
  },
  "dismissText": {
    "type": "TextStyle",
    "description": "Cancel button text variant style",
    "defaultValue": {}
  }
}
```

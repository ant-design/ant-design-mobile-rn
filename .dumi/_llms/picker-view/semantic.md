# PickerView Semantic

## Component Description

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrappper",
  "children": [
    {
      "component": "View",
      "style": "wheelWrapper",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "ActivityIndicator"
            }
          ]
        },
        {
          "component": "Wheel",
          "style": "itemWrap",
          "children": [
            {
              "component": "Text",
              "style": ["itemStyle", "itemActiveStyle"]
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "mask",
      "children": [
        {
          "component": "View",
          "style": "maskTop"
        },
        {
          "component": "View",
          "style": "maskMiddle"
        },
        {
          "component": "View",
          "style": "maskBottom"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrappper": {
    "type": "ViewStyle",
    "description": "Container overall layout style",
    "defaultValue": {
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "overflow": "hidden",
      "backgroundColor": "theme.fill_base"
    }
  },
  "wheelWrapper": {
    "type": "ViewStyle",
    "description": "Wheel area wrapper style",
    "defaultValue": {
      "zIndex": 1,
      "display": "flex",
      "flexDirection": "row"
    }
  },
  "itemWrap": {
    "type": "ViewStyle",
    "description": "Item wrapper style",
    "defaultValue": {
      "overflow": "hidden",
      "justifyContent": "center",
      "height": "theme.picker_item_height",
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "itemStyle": {
    "type": "TextStyle",
    "description": "Single option container with fixed height, wrapping text",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_base",
      "textAlign": "center",
      "includeFontPadding": "false"
    }
  },
  "itemActiveStyle": {
    "type": "TextStyle",
    "description": "Active item style",
    "defaultValue": {}
  },
  "mask": {
    "type": "ViewStyle",
    "description": "Mask layer container style",
    "defaultValue": {
      "position": "absolute",
      "zIndex": 2,
      "left": 0,
      "top": 0,
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "flexDirection": "column"
    }
  },
  "maskTop": {
    "type": "ViewStyle",
    "description": "Top gradient mask style",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  },
  "maskMiddle": {
    "type": "ViewStyle",
    "description": "Middle area highlight mask style",
    "defaultValue": {
      "borderColor": "theme.border_color_thin",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderBottomWidth": "StyleSheet.hairlineWidth"
    }
  },
  "maskBottom": {
    "type": "ViewStyle",
    "description": "Footer gradient mask style",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  }
}
```

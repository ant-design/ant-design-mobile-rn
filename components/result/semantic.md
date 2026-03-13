# Result Semantic

## Component Description

Result page contains feedback like illustrations, icons and text.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View"
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Button"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "result": {
    "type": "ViewStyle",
    "description": "Result container layout",
    "defaultValue": {
      "alignItems": "center",
      "paddingVertical": "theme.v_spacing_xl",
      "backgroundColor": "theme.fill_base",
      "borderBottomColor": "theme.border_color_base"
    }
  },
  "imgWrap": {
    "type": "ViewStyle",
    "description": "Icon container positioning and size",
    "defaultValue": {
      "margin": 0
    }
  },
  "img": {
    "type": "ImageStyle",
    "description": "Image style",
    "defaultValue": {
      "width": 60,
      "height": 60
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "Title container layout",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "Title text style",
    "defaultValue": {
      "fontSize": 21,
      "color": "theme.color_text_base"
    }
  },
  "message": {
    "type": "ViewStyle",
    "description": "Information area layout",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "messageText": {
    "type": "TextStyle",
    "description": "Information text style",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_caption"
    }
  },
  "buttonWrap": {
    "type": "ViewStyle",
    "description": "Button container layout",
    "defaultValue": {
      "flexDirection": "row",
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "button": {
    "type": "ViewStyle",
    "description": "Button style",
    "defaultValue": {
      "flex": 1
    }
  }
}
```

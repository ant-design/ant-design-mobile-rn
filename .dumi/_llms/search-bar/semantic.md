# SearchBar Semantic

## Component Description

Normally located below NavBar, the activation status is exited by the Cancel button.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrapper",
  "children": [
    {
      "component": "View",
      "style": "inputWrapper",
      "children": [
        {
          "component": "TextInput",
          "style": "input"
        }
      ]
    },
    {
      "component": "Icon",
      "style": "search"
    },
    {
      "component": "View",
      "style": "cancelTextContainer",
      "children": [
        {
          "component": "Text",
          "style": "cancelText"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "input": {
    "type": "TextStyle",
    "description": "Text input box, supports style base property pass-through, used for input search content",
    "defaultValue": {
      "borderRadius": "theme.radius_md",
      "backgroundColor": "theme.fill_grey",
      "borderColor": "theme.border_color_base",
      "borderWidth": "theme.border_width_sm",
      "height": "theme.search_bar_input_height",
      "color": "theme.color_text_base",
      "fontSize": "theme.font_size_base",
      "flex": 1,
      "paddingTop": 0,
      "paddingBottom": 0
    }
  },
  "inputWrapper": {
    "type": "ViewStyle",
    "description": "Input box outer container, used for input box layout",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "Overall container, wraps the entire search bar area",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "height": "theme.search_bar_height",
      "paddingLeft": "theme.h_spacing_md",
      "paddingRight": "theme.h_spacing_md",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "cancelTextContainer": {
    "type": "ViewStyle",
    "description": "Cancel button container, conditionally rendered, displayed when showCancelButton or input box is focused",
    "defaultValue": {
      "height": "theme.search_bar_input_height",
      "justifyContent": "center",
      "alignItems": "center"
    }
  },
  "cancelText": {
    "type": "TextStyle",
    "description": "Cancel button text, click to trigger cancel action",
    "defaultValue": {
      "fontSize": "theme.link_button_font_size",
      "color": "theme.color_link",
      "paddingLeft": "theme.h_spacing_lg"
    }
  },
  "search": {
    "type": "TextStyle",
    "description": "Search icon, displays search magnifying glass icon",
    "defaultValue": {
      "color": "theme.color_icon_base",
      "position": "absolute",
      "left": "theme.h_spacing_md + 8",
      "top": "(theme.search_bar_height - theme.icon_size_xxs) / 2",
      "fontSize": "theme.icon_size_xxs"
    }
  }
}
```

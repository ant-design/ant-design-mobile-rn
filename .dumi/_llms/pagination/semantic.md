# Pagination Semantic

## Component Description

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Flex",
      "children": [
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "View",
              "style": "numberStyle",
              "children": [
                {
                  "component": "Text",
                  "style": "activeTextStyle"
                },
                {
                  "component": "Text",
                  "style": "totalStyle"
                }
              ]
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "numberStyle",
      "children": [
        {
          "component": "Text",
          "style": "activeTextStyle"
        },
        {
          "component": "Text",
          "style": "totalStyle"
        }
      ]
    },
    {
      "component": "View",
      "style": "indicatorStyle",
      "children": [
        {
          "component": "View",
          "style": [
            "pointStyle",
            "spaceStyle"
          ]
        },
        {
          "component": "View",
          "style": [
            "pointStyle",
            "spaceStyle",
            "pointActiveStyle"
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
  "container": {
    "type": "ViewStyle",
    "description": "Overall container style",
    "defaultValue": {
      "justifyContent": "center"
    }
  },
  "numberStyle": {
    "type": "ViewStyle",
    "description": "Style for the area displaying current page and total pages when mode is 'number'",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center"
    }
  },
  "totalStyle": {
    "type": "TextStyle",
    "description": "Style for displaying total page count",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_text_base"
    }
  },
  "activeTextStyle": {
    "type": "TextStyle",
    "description": "Style for highlighting the current page number",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_link"
    }
  },
  "indicatorStyle": {
    "type": "ViewStyle",
    "description": "Style for the dot indicator container when mode is 'pointer'",
    "defaultValue": {
      "flexDirection": "row",
      "alignSelf": "center"
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "Style for individual dot",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "theme.color_icon_base"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "Style for the active dot",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "Style for spacing between dots",
    "defaultValue": {
      "marginHorizontal": "theme.h_spacing_sm / 2",
      "marginVertical": "theme.v_spacing_sm / 2"
    }
  }
}
```

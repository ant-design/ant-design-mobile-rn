# Card Semantic

## Component Description

Card can be used to organize information and operations, usually also as an entry for detailed information.

---

## DOM Structure

```json
{
  "component": "View",
  "style": ["card", "full"],
  "children": [
    {
      "component": "View",
      "style": "headerWrap",
      "children": [
        {
          "component": "View",
          "style": "headerTitle",
          "children": [
            {
              "component": "Image",
              "style": "headerImage"
            },
            {
              "component": "View",
              "style": "headerContentWrap"
            },
            {
              "component": "Text",
              "style": "headerContent"
            }
          ]
        },
        {
          "component": "View",
          "style": "headerExtraWrap"
        },
        {
          "component": "Text",
          "style": "headerExtra"
        }
      ]
    },
    {
      "component": "View",
      "style": "body"
    },
    {
      "component": "View",
      "style": "footerWrap",
      "children": [
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerContent"
        },
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerExtra"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "card": {
    "type": "ViewStyle",
    "description": "card base container style",
    "defaultValue": {
      "borderWidth": 1,
      "borderColor": "#dddddd",
      "borderRadius": 5,
      "paddingBottom": 6,
      "flexDirection": "column",
      "backgroundColor": "#ffffff"
    }
  },
  "full": {
    "type": "ViewStyle",
    "description": "full style",
    "defaultValue": {
      "borderRadius": 0,
      "borderLeftWidth": 0,
      "borderRightWidth": 0
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "header container style",
    "defaultValue": {
      "flexDirection": "row",
      "paddingVertical": 6,
      "paddingRight": 15,
      "marginLeft": 15,
      "alignItems": "center"
    }
  },
  "headerTitle": {
    "type": "ViewStyle",
    "description": "title container style",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "headerImage": {
    "type": "ImageStyle",
    "description": "thumbnail image style",
    "defaultValue": {
      "marginRight": 5,
    }
  },
  "headerContentWrap": {
    "type": "ViewStyle",
    "description": "title content wrapper (when title is a JSX element)",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerContent": {
    "type": "TextStyle",
    "description": "title text style (when title is a string or text)",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "flex": 1
    }
  },
  "headerExtraWrap": {
    "type": "ViewStyle",
    "description": "extra content wrapper (when extra content is a JSX element)",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerExtra": {
    "type": "TextStyle",
    "description": "extra content text style (when extra content is text)",
    "defaultValue": {
      "flex": 1,
      "fontSize": "17",
      "color": "#888888",
      "textAlign": "right"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "body container style",
    "defaultValue": {
      "flexGrow": 1,
      "paddingVertical": 9,
      "minHeight": 48,
      "borderTopWidth": 1,
      "borderColor": "#dddddd"
    }
  },
  "footerWrap": {
    "type": "ViewStyle",
    "description": "footer container style",
    "defaultValue": {
      "flexDirection": "row",
      "paddingHorizontal": 15
    }
  },
  "footerContent": {
    "type": "TextStyle",
    "description": "footer content text style",
    "defaultValue": {
      "flex": 1,
      "fontSize": "14",
      "color": "#888888",
    }
  },
  "footerExtra": {
    "type": "TextStyle",
    "description": "footer extra text style",
    "defaultValue": {
      "textAlign": "right",
      "fontSize": "14",
      "color": "#888888",
    }
  }
}
```

# List Semantic

## Component Description

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "List",
  "children": [
    {
      "component": "Text",
      "style": "Header"
    },
    {
      "component": "View",
      "style": "Body",
      "children": [
        {
          "component": "View",
          "style": "Item",
          "children": [
            {
              "component": "Image",
              "style": "Thumb"
            },
            {
              "component": "View",
              "style": "Line",
              "children": [
                {
                  "component": "Text",
                  "style": "Content"
                },
                {
                  "component": "Text",
                  "style": "Extra"
                },
                {
                  "component": "Text",
                  "style": "Arrow"
                },
                {
                  "component": "Text",
                  "style": "ArrowV"
                }
              ]
            }
          ]
        },
        {
          "component": "View",
          "style": "BodyBottomLine"
        }
      ]
    },
    {
      "component": "Text",
      "style": "Footer"
    }
  ]
}
```

## Styles Schema

```json
{
  "List": {
    "type": "ViewStyle",
    "description": "overall list container area, wraps entire list content",
    "defaultValue": { "backgroundColor": "#f5f5f9" }
  },
  "Header": {
    "type": "TextStyle",
    "description": "list header text style",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingTop": "15",
      "paddingBottom": "9"
    }
  },
  "Footer": {
    "type": "TextStyle",
    "description": "list footer text style",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingVertical": "9"
    }
  },
  "Body": {
    "type": "ViewStyle",
    "description": "list body content area, contains all child elements",
    "defaultValue": {
      "position": "relative",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderTopColor": "#eeeeee"
    }
  },
  "BodyBottomLine": {
    "type": "ViewStyle",
    "description": "list body footer divider",
    "defaultValue": {
      "position": "absolute",
      "bottom": 0,
      "left": 0,
      "right": 0,
      "height": "StyleSheet.hairlineWidth",
      "backgroundColor": "#eeeeee"
    }
  },
  "underlayColor": {
    "type": "ViewStyle",
    "description": "underlayColor style",
    "defaultValue": { "backgroundColor": "#dddddd" }
  },
  "Item": {
    "type": "ViewStyle",
    "description": "generally rendered by List.Item, shown here as placeholder example",
    "defaultValue": {
      "flexGrow": 1,
      "alignItems": "center",
      "flexDirection": "row",
      "paddingLeft": "15",
      "backgroundColor": "#ffffff"
    }
  },
  "Line": {
    "type": "ViewStyle",
    "description": "content area, displays main text and extra information",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center",
      "paddingRight": "15",
      "paddingVertical": "6",
      "minHeight": "44",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "#dddddd"
    }
  },
  "Thumb": {
    "type": "ImageStyle",
    "description": "left thumbnail area",
    "defaultValue": {
      "width": "22",
      "height": "22",
      "marginRight": "15"
    }
  },
  "Content": {
    "type": "TextStyle",
    "description": "main content text",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "textAlignVertical": "center",
      "flex": 1
    }
  },
  "Extra": {
    "type": "TextStyle",
    "description": "extra content text",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "17",
      "textAlign": "right",
      "textAlignVertical": "center",
      "paddingLeft": "8",
      "maxWidth": "70%"
    }
  },
  "Arrow": {
    "type": "TextStyle",
    "description": "arrow icon",
    "defaultValue": {
      "marginLeft": "8",
      "marginTop": "3"
    }
  },
  "ArrowV": {
    "type": "TextStyle",
    "description": "or vertical arrow style",
    "defaultValue": { "marginLeft": "8" }
  },
  "multipleLine": {
    "type": "ViewStyle",
    "description": "multipleLine style",
    "defaultValue": { "paddingVertical": "6" }
  },
  "multipleThumb": {
    "type": "ImageStyle",
    "description": "multipleThumb style",
    "defaultValue": {
      "width": "36",
      "height": "36"
    }
  },
  "Brief": {
    "type": "ViewStyle",
    "description": "Brief style",
    "defaultValue": { "minHeight": "10" }
  },
  "BriefText": {
    "type": "TextStyle",
    "description": "BriefText style",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "15",
      "paddingTop": "3",
      "textAlignVertical": "center"
    }
  }
}
```

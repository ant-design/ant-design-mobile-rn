# Accordion Semantic

## Component Description

You can collapse / expand the content area.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "header",
      "children": [
        {
          "component": "View",
          "style": "headerWrap",
          "children": [
            {
              "component": "Text",
              "style": "headerText"
            }
          ]
        },
        {
          "component": "View",
          "style": "arrow",
          "children": [
            {
              "component": "Icon",
              "style": "arrow"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "content",
      "children": [
        {
          "component": "Text",
          "style": "contentText"
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
    "description": "Container that wraps the entire accordion panel, layout outer container",
    "defaultValue": { "borderTopWidth": 0.5, "borderTopColor": "#dddddd" }
  },
  "header": {
    "type": "ViewStyle",
    "description": "Accordion panel header, header area for each panel item",
    "defaultValue": {
      "flexDirection": "row",
      "alignItems": "center",
      "paddingLeft": 15,
      "paddingRight": 30,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Arrow icon container that displays up or down arrow",
    "defaultValue": { "color": "#cccccc" }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "Wrapper container for header content, used to display text content when header is not a React element",
    "defaultValue": {
      "flex": 1,
      "height": 44,
      "alignItems": "center",
      "flexDirection": "row"
    }
  },
  "headerText": {
    "type": "TextStyle",
    "description": "Header text content",
    "defaultValue": { "color": "#000000", "fontSize": 17 }
  },
  "content": {
    "type": "ViewStyle",
    "description": "Accordion panel content area",
    "defaultValue": {
      "paddingVertical": 9,
      "paddingHorizontal": 8,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "contentText": {
    "type": "TextStyle",
    "description": "Accordion content text",
    "defaultValue": { "fontSize": 15, "color": "#333333" }
  }
}
```

# Badge Semantic

## Component Description

The red dot at corner for notification and getting user attention.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrap",
  "children": [
    {
      "component": "View",
      "style": ["textCornerWrap", "textDomWrap"],
      "children": [
        {
          "component": "View",
          "style": ["textDom", "textDomlarge"],
          "children": [
            {
              "component": "Text",
              "style": "text"
            }
          ]
        },
        {
          "component": "View",
          "style": ["dot", "dotSizelarge"]
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrap": {
    "type": "ViewStyle",
    "description": "Wrapper layer style",
    "defaultValue": { "flexDirection": "row" }
  },
  "textCornerWrap": {
    "type": "ViewStyle",
    "description": "Text corner wrapper style",
    "defaultValue": { "overflow": "hidden" }
  },
  "dot": {
    "type": "ViewStyle",
    "description": "Dot style",
    "defaultValue": {
      "width": "2 * grid",
      "height": "2 * grid",
      "borderRadius": "grid",
      "backgroundColor": "#ff5b05",
      "position": "absolute",
      "top": "-1 * grid",
      "right": "-1 * grid"
    }
  },
  "dotSizelarge": {
    "type": "ViewStyle",
    "description": "Dot size large style",
    "defaultValue": {
      "width": "4 * grid",
      "height": "4 * grid",
      "borderRadius": "2 * grid"
    }
  },
  "textDom": {
    "type": "ViewStyle",
    "description": "Text DOM style",
    "defaultValue": {
      "paddingVertical": "0.5 * grid",
      "paddingHorizontal": "(Platform.OS === 'ios' ? 1.5 : 2) * grid",
      "backgroundColor": "#ff5b05",
      "borderRadius": 12,
      "borderStyle": "solid",
      "position": "absolute",
      "top": -10,
      "right": -15
    }
  },
  "textCorner": {
    "type": "ViewStyle",
    "description": "Text corner style",
    "defaultValue": {
      "width": "18 * grid",
      "backgroundColor": "#ff5b05",
      "transform": "[",
      "rotate": "45deg",
      "position": "absolute",
      "top": "2 * grid"
    }
  },
  "textCornerlarge": {
    "type": "ViewStyle",
    "description": "Text corner large style",
    "defaultValue": { "width": "26 * grid", "top": "3 * grid" }
  },
  "text": {
    "type": "TextStyle",
    "description": "Text style",
    "defaultValue": { "color": "#ffffff", "textAlign": "center" }
  }
}
```

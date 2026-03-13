# ActivityIndicator Semantic

## Component Description

Properties | Descrition | Type | Default -----------|------------|------|--------

---

## DOM Structure

```json
[
  {
    "component": "View",
    "style": "container",
    "children": [
      {
        "component": "View",
        "style": "innerContainer",
        "children": [
          {
            "component": "View",
            "style": "wrapper",
            "children": [
              {
                "component": "ActivityIndicator"
              },
              {
                "component": "Text",
                "style": "toast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "component": "View",
    "style": "spinner",
    "children": [
      {
        "component": "ActivityIndicator"
      },
      {
        "component": "Text",
        "style": "tip"
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "Container layout style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "bottom": 0,
      "right": 0,
      "backgroundColor": "transparent",
      "zIndex": 1999
    }
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "Inner layer container style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "transparent"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "Wrapper for loading indicator and text area",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "width": 89,
      "height": 89,
      "borderRadius": 5,
      "backgroundColor": "rgba(0, 0, 0, .8)"
    }
  },
  "tip": {
    "type": "TextStyle",
    "description": "Spinner text style",
    "defaultValue": { "color": "#000000", "fontSize": 14, "marginLeft": 8 }
  },
  "toast": {
    "type": "TextStyle",
    "description": "Toast text style",
    "defaultValue": { "color": "#ffffff", "fontSize": 14, "marginTop": 6 }
  },
  "spinner": {
    "type": "ViewStyle",
    "description": "Normal mode container style",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center"
    }
  }
}
```

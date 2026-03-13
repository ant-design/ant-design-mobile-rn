# Toast Semantic

## Component Description

A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "innerContainer",
      "children": [
        {
          "component": "Animated.View",
          "children": [
            {
              "component": "View",
              "style": ["innerWrap", "iconToast", "textToast"]
            }
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
    "description": "Top layer positioning container, controls modal position (top/bottom/center) and overall container style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "bottom": 0,
      "right": 0,
      "backgroundColor": "transparent",
      "alignItems": "center",
      "zIndex": 1999
    }
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "Inner container, background layer style",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "innerWrap": {
    "type": "ViewStyle",
    "description": "Content wrapper container, selects iconToast or textToast style based on whether there is an icon",
    "defaultValue": {
      "alignItems": "center",
      "backgroundColor": "rgba(0, 0, 0, .8)",
      "minWidth": 100
    }
  },
  "iconToast": {
    "type": "ViewStyle",
    "description": "Icon toast style",
    "defaultValue": {
      "borderRadius": 7,
      "padding": 15
    }
  },
  "textToast": {
    "type": "ViewStyle",
    "description": "Text toast style",
    "defaultValue": {
      "borderRadius": 3,
      "paddingVertical": 9,
      "paddingHorizontal": 15
    }
  },
  "content": {
    "type": "TextStyle",
    "description": "Content style",
    "defaultValue": {
      "color": "#ffffff",
      "fontSize": 15
    }
  },
  "image": {
    "type": "TextStyle",
    "description": "Image style",
    "defaultValue": {
      "marginBottom": 3
    }
  },
  "centering": {
    "type": "ViewStyle",
    "description": "Centering style",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 9
    }
  }
}
```

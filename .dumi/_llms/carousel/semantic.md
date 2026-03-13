# Carousel Semantic

## Component Description

Properties | Descrition | Type | Default | Version -----------|------------|------|---------|----------

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "ScrollView",
      "style": "wrapperStyle",
      "children": [
        {
          "component": "View",
          "style": "wrapperStyle"
        }
      ]
    },
    {
      "component": "View",
      "style": ["pagination", "paginationX", "paginationY"],
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "style": ["pointStyle", "spaceStyle", "pointActiveStyle"]
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
  "pagination": {
    "type": "ViewStyle",
    "description": "pagination style",
    "defaultValue": {
      "position": "absolute",
      "alignItems": "center"
    }
  },
  "paginationX": {
    "type": "ViewStyle",
    "description": "paginationX style",
    "defaultValue": {
      "bottom": 10,
      "left": 0,
      "right": 0
    }
  },
  "paginationY": {
    "type": "ViewStyle",
    "description": "paginationY style",
    "defaultValue": {
      "right": 10,
      "top": 0,
      "bottom": 0
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "pointStyle style",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "#cccccc"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "pointActiveStyle style",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "spaceStyle style",
    "defaultValue": {
      "marginHorizontal": 5 / 2,
      "marginVertical": 6 / 2
    }
  },
  "wrapperStyle": {
    "type": "ViewStyle",
    "description": "wrapperStyle style",
    "defaultValue": {
      "overflow": "hidden"
    }
  }
}
```

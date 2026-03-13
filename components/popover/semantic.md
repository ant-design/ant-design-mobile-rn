# Popover Semantic

## Component Description

After clicking on a control or an area, a Popover menu appears for doing more. If set mask prop, it is recommended to exit by clicking on any of the mask layers.

---

## DOM Structure

```json
[
  {
    "component": "TouchableOpacity"
  },
  {
    "component": "View",
    "style": "content",
    "children": [
      {
        "component": "View",
        "style": "arrow"
      },
      {
        "component": "View",
        "style": "background"
      },
      {
        "component": "ScrollView",
        "children": [
          {
            "component": "TouchableOpacity"
          }
        ]
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "content": {
    "type": "ViewStyle",
    "description": "Popup layer container. The popup layer content area appearance can be controlled via styles.content",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "borderRadius": "theme.radius_sm",
      "padding": 0,
      "elevation": 3
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Popup layer indicator arrow. The arrow appearance can be controlled via styles.arrow",
    "defaultValue": {
      "borderTopColor": "transparent"
    }
  },
  "background": {
    "type": "ViewStyle",
    "description": "Popup layer background mask. The mask layer visual can be controlled via styles.background",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  }
}
```

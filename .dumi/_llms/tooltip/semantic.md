# Tooltip Semantic

## Component Description

After clicking on a control or an area, a Tooltip menu appears for doing more. If set mask prop, it is recommended to exit by clicking on any of the mask layers.

---

## DOM Structure

```json
[
  {
    "component": "Wrapper"
  },
  {
    "component": "View",
    "style": "tooltip",
    "children": [
      {
        "component": "View",
        "style": "arrow"
      },
      {
        "component": "AntmView",
        "style": "tooltipText"
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "tooltip": {
    "type": "ViewStyle",
    "description": "Main container style, defines layout, background, etc.",
    "defaultValue": {
      "zIndex": 999,
      "backgroundColor": "mode === 'dark' ? theme.tooltip_dark : theme.fill_base",
      "borderRadius": 8,
      "shadowColor": "rgba(51, 51, 51, 1)",
      "shadowOffset": {
        "width": 1,
        "height": 1
      },
      "shadowOpacity": 0.2,
      "shadowRadius": 12,
      "elevation": 12,
      "minWidth": 32,
      "paddingVertical": 8,
      "paddingHorizontal": 12
    }
  },
  "tooltipText": {
    "type": "TextStyle",
    "description": "Content text style, controls font color, size, etc.",
    "defaultValue": {
      "color": "mode === 'dark' ? '#ffffff' : theme.color_text_base"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Arrow style, includes size, color, and rotation (dynamically applied)",
    "defaultValue": {
      "width": 0,
      "height": 0,
      "borderRightColor": "transparent",
      "borderBottomColor": "transparent",
      "borderLeftColor": "transparent",
      "borderStyle": "solid",
      "borderWidth": 8,
      "position": "absolute"
    }
  }
}
```

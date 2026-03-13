# Tabs Semantic

## Component Description

A `Tabs` is used to allow users to switch between different views.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "style": "container",
          "children": [
            {
              "component": "ScrollView",
              "children": [
                {
                  "component": "View",
                  "style": "tabs",
                  "children": [
                    {
                      "component": "TouchableOpacity",
                      "children": [
                        {
                          "component": "View",
                          "style": "tab",
                          "children": [
                            {
                              "component": "Text",
                              "style": "textStyle"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "component": "Animated.View",
                      "style": "underline"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Carousel",
      "children": [
        {
          "component": "View"
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
    "description": "Overall container view that holds the entire Tabs component",
    "defaultValue": {}
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "Container for tab labels, holding all label items and underline",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "backgroundColor": "#ffffff",
      "justifyContent": "space-around",
      "shadowRadius": 0,
      "shadowOpacity": 0,
      "elevation": 0
    }
  },
  "tab": {
    "type": "ViewStyle",
    "description": "Label base layout style",
    "defaultValue": {
      "height": 42,
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 0,
      "flexDirection": "row"
    }
  },
  "underline": {
    "type": "ViewStyle",
    "description": "Underline base style",
    "defaultValue": {
      "height": 2,
      "backgroundColor": "#108ee9"
    }
  },
  "textStyle": {
    "type": "TextStyle",
    "description": "Text base style",
    "defaultValue": {
      "fontSize": 15
    }
  }
}
```

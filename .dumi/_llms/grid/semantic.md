# Grid Semantic

## Component Description

We divided the design area into a number of aliquots in horizontal and vertical.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "Flex",
      "style": "grayBorderBox",
      "children": [
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Flex",
              "children": [
                {
                  "component": "Image",
                  "style": "icon"
                },
                {
                  "component": "Text",
                  "style": "text"
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
          "component": "View",
          "style": "grayBorderBox",
          "children": [
            {
              "component": "Flex",
              "style": "grayBorderBox",
              "children": [
                {
                  "component": "Flex.Item"
                }
              ]
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
  "grayBorderBox": {
    "type": "ViewStyle",
    "description": "gray border box, used to separate rows",
    "defaultValue": { "borderColor": "#dddddd" }
  },
  "icon": {
    "type": "ImageStyle",
    "description": "image style, size and color",
    "defaultValue": {
      "width": "22",
      "height": "22"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "text style",
    "defaultValue": {
      "fontSize": "12",
      "color": "#000000",
      "marginTop": "9"
    }
  }
}
```

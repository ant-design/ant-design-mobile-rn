# Grid Semantic

## Component Description

在水平和垂直方向，将布局切分成若干等大的区块。

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
    "description": "灰色边框盒子，用于分隔行",
    "defaultValue": { "borderColor": "#dddddd" }
  },
  "icon": {
    "type": "ImageStyle",
    "description": "图片样式，尺寸及颜色",
    "defaultValue": {
      "width": "22",
      "height": "22"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "文字样式",
    "defaultValue": {
      "fontSize": "12",
      "color": "#000000",
      "marginTop": "9"
    }
  }
}
```

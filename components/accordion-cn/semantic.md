# Accordion Semantic

## Component Description

可以折叠/展开的内容区域。

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
    "description": "容器，包裹整个折叠面板，布局外层容器",
    "defaultValue": {
      "borderTopWidth": 0.5,
      "borderTopColor": "#dddddd"
    }
  },
  "header": {
    "type": "ViewStyle",
    "description": "折叠面板头部，每个面板项的头部区域",
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
    "type": "TextStyle",
    "description": "箭头图标容器，显示向上或向下箭头",
    "defaultValue": {
      "color": "#cccccc"
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "头部内容的包裹容器，若 header 不是 React 元素，则显示文本内容用",
    "defaultValue": {
      "flex": 1,
      "height": 44,
      "alignItems": "center",
      "flexDirection": "row"
    }
  },
  "headerText": {
    "type": "TextStyle",
    "description": "头部文字内容",
    "defaultValue": {
      "color": "#000000",
      "fontSize": 17
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "折叠面板内容区域",
    "defaultValue": {
      "paddingVertical": 9,
      "paddingHorizontal": 8,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "contentText": {
    "type": "TextStyle",
    "description": "折叠内容文本",
    "defaultValue": {
      "fontSize": 15,
      "color": "#333333"
    }
  }
}
```

# Card Semantic

## Component Description

用于组织信息和操作，通常也作为详细信息的入口。

---

## DOM Structure

```json
{
  "component": "View",
  "style": ["card", "full"],
  "children": [
    {
      "component": "View",
      "style": "headerWrap",
      "children": [
        {
          "component": "View",
          "style": "headerTitle",
          "children": [
            {
              "component": "Image",
              "style": "headerImage"
            },
            {
              "component": "View",
              "style": "headerContentWrap"
            },
            {
              "component": "Text",
              "style": "headerContent"
            }
          ]
        },
        {
          "component": "View",
          "style": "headerExtraWrap"
        },
        {
          "component": "Text",
          "style": "headerExtra"
        }
      ]
    },
    {
      "component": "View",
      "style": "body"
    },
    {
      "component": "View",
      "style": "footerWrap",
      "children": [
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerContent"
        },
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerExtra"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "card": {
    "type": "ViewStyle",
    "description": "卡片基础容器样式",
    "defaultValue": {
      "borderWidth": 1,
      "borderColor": "#dddddd",
      "borderRadius": 5,
      "paddingBottom": 6,
      "flexDirection": "column",
      "backgroundColor": "#ffffff"
    }
  },
  "full": {
    "type": "ViewStyle",
    "defaultValue": {
      "borderRadius": 0,
      "borderLeftWidth": 0,
      "borderRightWidth": 0
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "头部容器样式",
    "defaultValue": {
      "flexDirection": "row",
      "paddingVertical": 6,
      "paddingRight": 15,
      "marginLeft": 15,
      "alignItems": "center"
    }
  },
  "headerTitle": {
    "type": "ViewStyle",
    "description": "标题容器样式",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "headerImage": {
    "type": "ImageStyle",
    "description": "缩略图图片样式",
    "defaultValue": {
      "marginRight": 5,
    }
  },
  "headerContentWrap": {
    "type": "ViewStyle",
    "description": "标题内容包装器（当标题为 JSX 元素）",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerContent": {
    "type": "TextStyle",
    "description": "标题文本样式（当标题为字符串或文本）",
    "defaultValue": {
      "color": "#000000",
      "fontSize": 17,
      "flex": 1
    }
  },
  "headerExtraWrap": {
    "type": "ViewStyle",
    "description": "额外内容包装器（当额外内容为 JSX 元素）",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerExtra": {
    "type": "TextStyle",
    "description": "额外内容文本样式（当额外内容为文本）",
    "defaultValue": {
      "flex": 1,
      "fontSize": 17,
      "color": "#888888",
      "textAlign": "right"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "主体容器样式",
    "defaultValue": {
      "flexGrow": 1,
      "paddingVertical": 9,
      "minHeight": 48,
      "borderTopWidth": 1,
      "borderColor": "#dddddd"
    }
  },
  "footerWrap": {
    "type": "ViewStyle",
    "description": "底部容器样式",
    "defaultValue": {
      "flexDirection": "row",
      "paddingHorizontal": 15
    }
  },
  "footerContent": {
    "type": "TextStyle",
    "description": "底部内容文本样式",
    "defaultValue": {
      "flex": 1,
      "fontSize": 14,
      "color": "#888888"
    }
  },
  "footerExtra": {
    "type": "TextStyle",
    "description": "底部额外文本样式",
    "defaultValue": {
      "textAlign": "right",
      "fontSize": 14,
      "color": "#888888"
    }
  }
}
```

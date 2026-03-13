# List Semantic

## Component Description

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "List",
  "children": [
    {
      "component": "Text",
      "style": "Header"
    },
    {
      "component": "View",
      "style": "Body",
      "children": [
        {
          "component": "View",
          "style": "Item",
          "children": [
            {
              "component": "Image",
              "style": "Thumb"
            },
            {
              "component": "View",
              "style": "Line",
              "children": [
                {
                  "component": "Text",
                  "style": "Content"
                },
                {
                  "component": "Text",
                  "style": "Extra"
                },
                {
                  "component": "Text",
                  "style": "Arrow"
                },
                {
                  "component": "Text",
                  "style": "ArrowV"
                }
              ]
            }
          ]
        },
        {
          "component": "View",
          "style": "BodyBottomLine"
        }
      ]
    },
    {
      "component": "Text",
      "style": "Footer"
    }
  ]
}
```

## Styles Schema

```json
{
  "List": {
    "type": "ViewStyle",
    "description": "整体列表容器区域，包裹整个列表内容",
    "defaultValue": { "backgroundColor": "#f5f5f9" }
  },
  "Header": {
    "type": "TextStyle",
    "description": "列表头部文字样式",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingTop": "15",
      "paddingBottom": "9"
    }
  },
  "Footer": {
    "type": "TextStyle",
    "description": "列表尾部文字样式",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingVertical": "9"
    }
  },
  "Body": {
    "type": "ViewStyle",
    "description": "列表主体内容区域，包含所有子元素",
    "defaultValue": {
      "position": "relative",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderTopColor": "#eeeeee"
    }
  },
  "BodyBottomLine": {
    "type": "ViewStyle",
    "description": "列表主体底部分割线",
    "defaultValue": {
      "position": "absolute",
      "bottom": 0,
      "left": 0,
      "right": 0,
      "height": "StyleSheet.hairlineWidth",
      "backgroundColor": "#eeeeee"
    }
  },
  "underlayColor": {
    "type": "ViewStyle",
    "description": "按下列表项颜色样式",
    "defaultValue": { "backgroundColor": "#dddddd" }
  },
  "Item": {
    "type": "ViewStyle",
    "description": "一般由 List.Item 负责渲染，这里以占位示例展示",
    "defaultValue": {
      "flexGrow": 1,
      "alignItems": "center",
      "flexDirection": "row",
      "paddingLeft": "15",
      "backgroundColor": "#ffffff"
    }
  },
  "Line": {
    "type": "ViewStyle",
    "description": "内容区，显示主要文本和额外信息",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center",
      "paddingRight": "15",
      "paddingVertical": "6",
      "minHeight": "44",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "#dddddd"
    }
  },
  "Thumb": {
    "type": "ImageStyle",
    "description": "左侧缩略图区域",
    "defaultValue": {
      "width": "22",
      "height": "22",
      "marginRight": "15"
    }
  },
  "Content": {
    "type": "TextStyle",
    "description": "主内容文本",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "textAlignVertical": "center",
      "flex": 1
    }
  },
  "Extra": {
    "type": "TextStyle",
    "description": "额外内容文本",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "17",
      "textAlign": "right",
      "textAlignVertical": "center",
      "paddingLeft": "8",
      "maxWidth": "70%"
    }
  },
  "Arrow": {
    "type": "TextStyle",
    "description": "箭头图标",
    "defaultValue": {
      "marginLeft": "8",
      "marginTop": "3"
    }
  },
  "ArrowV": {
    "type": "TextStyle",
    "description": "或竖直箭头样式",
    "defaultValue": { "marginLeft": "8" }
  },
  "multipleLine": {
    "type": "ViewStyle",
    "description": "多行样式",
    "defaultValue": { "paddingVertical": "6" }
  },
  "multipleThumb": {
    "type": "ImageStyle",
    "description": "多行缩略图样式",
    "defaultValue": {
      "width": "36",
      "height": "36"
    }
  },
  "Brief": {
    "type": "ViewStyle",
    "description": "Brief样式",
    "defaultValue": { "minHeight": "10" }
  },
  "BriefText": {
    "type": "TextStyle",
    "description": "BriefText样式",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "15",
      "paddingTop": "3",
      "textAlignVertical": "center"
    }
  }
}
```

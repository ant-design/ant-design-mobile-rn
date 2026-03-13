# Result Semantic

## Component Description

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View"
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Button"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "result": {
    "type": "ViewStyle",
    "description": "结果容器布局",
    "defaultValue": {
      "alignItems": "center",
      "paddingVertical": "theme.v_spacing_xl",
      "backgroundColor": "theme.fill_base",
      "borderBottomColor": "theme.border_color_base"
    }
  },
  "imgWrap": {
    "type": "ViewStyle",
    "description": "图标容器定位和尺寸",
    "defaultValue": {
      "margin": 0
    }
  },
  "img": {
    "type": "ImageStyle",
    "description": "图片样式",
    "defaultValue": {
      "width": 60,
      "height": 60
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "标题容器布局",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "标题文字样式",
    "defaultValue": {
      "fontSize": 21,
      "color": "theme.color_text_base"
    }
  },
  "message": {
    "type": "ViewStyle",
    "description": "信息区域布局",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "messageText": {
    "type": "TextStyle",
    "description": "信息文字样式",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_caption"
    }
  },
  "buttonWrap": {
    "type": "ViewStyle",
    "description": "按钮容器布局",
    "defaultValue": {
      "flexDirection": "row",
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "button": {
    "type": "ViewStyle",
    "description": "按钮样式",
    "defaultValue": {
      "flex": 1
    }
  }
}
```

# Picker Semantic

## Component Description

在一组预设数据中进行选择，e.g. 省市区选择。

---

## DOM Structure

```json
{
  "component": "Modal",
  "style": [
    "modal",
    "container"
  ],
  "children": [
    {
      "component": "View",
      "style": "header",
      "children": [
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": [
                "actionText",
                "dismissText"
              ]
            }
          ]
        },
        {
          "component": "View",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": "title"
            }
          ]
        },
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": [
                "actionText",
                "okText"
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "RMCPickerView",
      "style": [
        "wrappper",
        "wheelWrapper",
        "itemWrap",
        "itemStyle",
        "itemActiveStyle",
        "mask",
        "maskTop",
        "maskMiddle",
        "maskBottom"
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "modal": {
    "type": "ViewStyle",
    "description": "弹出层包装样式（定位、背景遮罩等）",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "flex-end"
    }
  },
  "container": {
    "type": "ViewStyle",
    "description": "弹出层内容容器（布局与背景）",
    "defaultValue": {}
  },
  "header": {
    "type": "ViewStyle",
    "description": "头部容器布局",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "alignItems": "center",
      "flexDirection": "row",
      "justifyContent": "center",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "theme.border_color_thin",
      "backgroundColor": "theme.fill_base"
    }
  },
  "headerItem": {
    "type": "ViewStyle",
    "description": "按钮位置与尺寸",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "按钮文字基础样式",
    "defaultValue": {
      "color": "theme.brand_primary",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "title": {
    "type": "TextStyle",
    "description": "标题文字样式",
    "defaultValue": {
      "color": "theme.color_text_caption",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "okText": {
    "type": "TextStyle",
    "description": "确定按钮文字差异化样式",
    "defaultValue": {}
  },
  "dismissText": {
    "type": "TextStyle",
    "description": "取消按钮文字差异化样式",
    "defaultValue": {}
  }
}
```

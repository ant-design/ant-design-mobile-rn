# PickerView Semantic

## Component Description

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrappper",
  "children": [
    {
      "component": "View",
      "style": "wheelWrapper",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "ActivityIndicator"
            }
          ]
        },
        {
          "component": "Wheel",
          "style": "itemWrap",
          "children": [
            {
              "component": "Text",
              "style": ["itemStyle", "itemActiveStyle"]
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "mask",
      "children": [
        {
          "component": "View",
          "style": "maskTop"
        },
        {
          "component": "View",
          "style": "maskMiddle"
        },
        {
          "component": "View",
          "style": "maskBottom"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrappper": {
    "type": "ViewStyle",
    "description": "容器整体布局样式",
    "defaultValue": {
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "overflow": "hidden",
      "backgroundColor": "theme.fill_base"
    }
  },
  "wheelWrapper": {
    "type": "ViewStyle",
    "description": "轮子区域包裹样式",
    "defaultValue": {
      "zIndex": 1,
      "display": "flex",
      "flexDirection": "row"
    }
  },
  "itemWrap": {
    "type": "ViewStyle",
    "description": "单项包裹样式",
    "defaultValue": {
      "overflow": "hidden",
      "justifyContent": "center",
      "height": "theme.picker_item_height",
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "itemStyle": {
    "type": "TextStyle",
    "description": "单个选项容器，固定高度，包裹文本",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_base",
      "textAlign": "center",
      "includeFontPadding": "false"
    }
  },
  "itemActiveStyle": {
    "type": "TextStyle",
    "description": "激活项样式",
    "defaultValue": {}
  },
  "mask": {
    "type": "ViewStyle",
    "description": "遮罩层容器样式",
    "defaultValue": {
      "position": "absolute",
      "zIndex": 2,
      "left": 0,
      "top": 0,
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "flexDirection": "column"
    }
  },
  "maskTop": {
    "type": "ViewStyle",
    "description": "顶部渐变遮罩样式",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  },
  "maskMiddle": {
    "type": "ViewStyle",
    "description": "中间区域高亮遮罩样式",
    "defaultValue": {
      "borderColor": "theme.border_color_thin",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderBottomWidth": "StyleSheet.hairlineWidth"
    }
  },
  "maskBottom": {
    "type": "ViewStyle",
    "description": "底部渐变遮罩样式",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  }
}
```

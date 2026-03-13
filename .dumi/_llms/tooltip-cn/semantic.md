# Tooltip Semantic

## Component Description

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

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
    "description": "主容器样式，定义布局、背景等",
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
    "description": "内容文本样式，控制字体颜色、大小等",
    "defaultValue": {
      "color": "mode === 'dark' ? '#ffffff' : theme.color_text_base"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "箭头的样式，包含大小颜色和旋转（动态）",
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

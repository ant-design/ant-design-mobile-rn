# Popover Semantic

## Component Description

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

---

## DOM Structure

```json
[
  {
    "component": "TouchableOpacity"
  },
  {
    "component": "View",
    "style": "content",
    "children": [
      {
        "component": "View",
        "style": "arrow"
      },
      {
        "component": "View",
        "style": "background"
      },
      {
        "component": "ScrollView",
        "children": [
          {
            "component": "TouchableOpacity"
          }
        ]
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "content": {
    "type": "ViewStyle",
    "description": "弹出层容器，样式可通过 styles.content 控制弹出层内容区域外观",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "borderRadius": "theme.radius_sm",
      "padding": 0,
      "elevation": 3
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "弹出层指示箭头，样式可通过 styles.arrow 控制箭头外观",
    "defaultValue": {
      "borderTopColor": "transparent"
    }
  },
  "background": {
    "type": "ViewStyle",
    "description": "弹出层背景遮罩，样式可通过 styles.background 控制遮罩层视觉",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  }
}
```

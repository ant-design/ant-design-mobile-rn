# Badge Semantic

## Component Description

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrap",
  "children": [
    {
      "component": "View",
      "style": "textCornerWrap",
      "children": [
        {
          "component": "children"
        },
        {
          "component": "View",
          "style": ["textDom", "textDomlarge"],
          "children": [
            {
              "component": "Text",
              "style": "text"
            }
          ]
        },
        {
          "component": "View",
          "style": ["dot", "dotSizelarge"]
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrap": {
    "type": "ViewStyle",
    "description": "包裹层样式",
    "defaultValue": {
      "flexDirection": "row"
    }
  },
  "textCornerWrap": {
    "type": "ViewStyle",
    "description": "内容包裹容器",
    "defaultValue": {
      "overflow": "hidden"
    }
  },
  "dot": {
    "type": "ViewStyle",
    "description": "点徽标容器",
    "defaultValue": {
      "width": "2 * grid",
      "height": "2 * grid",
      "borderRadius": "grid",
      "backgroundColor": "#ff5b05",
      "position": "absolute",
      "top": "-1 * grid",
      "right": "-1 * grid"
    }
  },
  "dotSizelarge": {
    "type": "ViewStyle",
    "description": "大尺寸点徽标容器",
    "defaultValue": {
      "width": "4 * grid",
      "height": "4 * grid",
      "borderRadius": "2 * grid"
    }
  },
  "textDom": {
    "type": "ViewStyle",
    "description": "普通文本徽标容器",
    "defaultValue": {
      "paddingVertical": "0.5 * grid",
      "paddingHorizontal": "(Platform.OS === 'ios' ? 1.5 : 2) * grid",
      "backgroundColor": "#ff5b05",
      "borderRadius": "4 * theme.radius_sm",
      "borderStyle": "solid",
      "position": "absolute",
      "top": -10,
      "right": -15
    }
  },
  "textDomlarge": {
    "type": "ViewStyle",
    "description": "大尺寸文本徽标容器",
    "defaultValue": {}
  },
  "textCorner": {
    "type": "ViewStyle",
    "description": "角标容器",
    "defaultValue": {
      "width": "18 * grid",
      "backgroundColor": "#ff5b05",
      "transform": "[",
      "rotate": "45deg",
      "position": "absolute",
      "top": "2 * grid"
    }
  },
  "textCornerlarge": {
    "type": "ViewStyle",
    "description": "大尺寸角标容器",
    "defaultValue": {
      "width": "26 * grid",
      "top": "3 * grid"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "文本样式",
    "defaultValue": {
      "color": "#ffffff",
      "textAlign": "center"
    }
  }
}
```

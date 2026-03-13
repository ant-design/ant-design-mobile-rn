# Pagination Semantic

## Component Description

分隔长列表，每次只加载一个页面。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Flex",
      "children": [
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "View",
              "style": "numberStyle",
              "children": [
                {
                  "component": "Text",
                  "style": "activeTextStyle"
                },
                {
                  "component": "Text",
                  "style": "totalStyle"
                }
              ]
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "numberStyle",
      "children": [
        {
          "component": "Text",
          "style": "activeTextStyle"
        },
        {
          "component": "Text",
          "style": "totalStyle"
        }
      ]
    },
    {
      "component": "View",
      "style": "indicatorStyle",
      "children": [
        {
          "component": "View",
          "style": ["pointStyle", "spaceStyle"]
        },
        {
          "component": "View",
          "style": ["pointStyle", "spaceStyle", "pointActiveStyle"]
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
    "description": "整体容器样式",
    "defaultValue": {
      "justifyContent": "center"
    }
  },
  "numberStyle": {
    "type": "ViewStyle",
    "description": "模式为 'number' 时，显示当前页数和总页数区域",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center"
    }
  },
  "totalStyle": {
    "type": "TextStyle",
    "description": "总页数显示",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_text_base"
    }
  },
  "activeTextStyle": {
    "type": "TextStyle",
    "description": "高亮当前页数",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_link"
    }
  },
  "indicatorStyle": {
    "type": "ViewStyle",
    "description": "模式为 'pointer' 时，显示圆点指示器",
    "defaultValue": {
      "flexDirection": "row",
      "alignSelf": "center"
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "单个圆点",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "theme.color_icon_base"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "当前激活圆点样式",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "圆点间距样式",
    "defaultValue": {
      "marginHorizontal": "theme.h_spacing_sm / 2",
      "marginVertical": "theme.v_spacing_sm / 2"
    }
  }
}
```

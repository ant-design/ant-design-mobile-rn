# Tabs Semantic

## Component Description

用于让用户在不同的视图中进行切换。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "style": "container",
          "children": [
            {
              "component": "ScrollView",
              "children": [
                {
                  "component": "View",
                  "style": "tabs",
                  "children": [
                    {
                      "component": "TouchableOpacity",
                      "children": [
                        {
                          "component": "View",
                          "style": "tab",
                          "children": [
                            {
                              "component": "Text",
                              "style": "textStyle"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "component": "Animated.View",
                      "style": "underline"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Carousel",
      "children": [
        {
          "component": "View"
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
    "description": "整体容器视图，承载整个 Tabs 组件",
    "defaultValue": {}
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "标签集合容器，承载所有的标签项和下划线",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "backgroundColor": "#ffffff",
      "justifyContent": "space-around",
      "shadowRadius": 0,
      "shadowOpacity": 0,
      "elevation": 0
    }
  },
  "tab": {
    "type": "ViewStyle",
    "description": "标签基础布局样式",
    "defaultValue": {
      "height": 42,
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 0,
      "flexDirection": "row"
    }
  },
  "underline": {
    "type": "ViewStyle",
    "description": "下划线基础样式",
    "defaultValue": {
      "height": 2,
      "backgroundColor": "#108ee9"
    }
  },
  "textStyle": {
    "type": "TextStyle",
    "description": "文字基础样式",
    "defaultValue": {
      "fontSize": 15
    }
  }
}
```

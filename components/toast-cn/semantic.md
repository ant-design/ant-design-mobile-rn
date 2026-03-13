# Toast Semantic

## Component Description

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "innerContainer",
      "children": [
        {
          "component": "Animated.View",
          "children": [
            {
              "component": "View",
              "style": ["innerWrap", "iconToast", "textToast"]
            }
          ]
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
    "description": "顶层定位容器，控制弹窗位置（顶部/底部/居中）和整体容器样式",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "bottom": 0,
      "right": 0,
      "backgroundColor": "transparent",
      "alignItems": "center",
      "zIndex": 1999
    }
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "内部容器，背景层样式",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "innerWrap": {
    "type": "ViewStyle",
    "description": "内容包裹容器：根据是否有 icon 选择iconToast或textToast样式",
    "defaultValue": {
      "alignItems": "center",
      "backgroundColor": "rgba(0, 0, 0, .8)",
      "minWidth": 100
    }
  },
  "iconToast": {
    "type": "ViewStyle",
    "description": "图标提示样式",
    "defaultValue": {
      "borderRadius": 7,
      "padding": 15
    }
  },
  "textToast": {
    "type": "ViewStyle",
    "description": "文本提示样式",
    "defaultValue": {
      "borderRadius": 3,
      "paddingVertical": 9,
      "paddingHorizontal": 15
    }
  },
  "content": {
    "type": "TextStyle",
    "description": "内容样式",
    "defaultValue": {
      "color": "#ffffff",
      "fontSize": 15
    }
  },
  "image": {
    "type": "TextStyle",
    "description": "图片样式",
    "defaultValue": {
      "marginBottom": 3
    }
  },
  "centering": {
    "type": "ViewStyle",
    "description": "居中样式",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 9
    }
  }
}
```

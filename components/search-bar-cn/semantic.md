# SearchBar Semantic

## Component Description

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrapper",
  "children": [
    {
      "component": "View",
      "style": "inputWrapper",
      "children": [
        {
          "component": "TextInput",
          "style": "input"
        }
      ]
    },
    {
      "component": "Icon",
      "style": "search"
    },
    {
      "component": "View",
      "style": "cancelTextContainer",
      "children": [
        {
          "component": "Text",
          "style": "cancelText"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "input": {
    "type": "TextStyle",
    "description": "文本输入框，支持 style 基础属性透传，用于输入搜索内容",
    "defaultValue": {
      "borderRadius": "theme.radius_md",
      "backgroundColor": "theme.fill_grey",
      "borderColor": "theme.border_color_base",
      "borderWidth": "theme.border_width_sm",
      "height": "theme.search_bar_input_height",
      "color": "theme.color_text_base",
      "fontSize": "theme.font_size_base",
      "flex": 1,
      "paddingTop": 0,
      "paddingBottom": 0
    }
  },
  "inputWrapper": {
    "type": "ViewStyle",
    "description": "输入框外层容器，用于输入框布局",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "整体容器，包裹整个搜索栏区域",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "height": "theme.search_bar_height",
      "paddingLeft": "theme.h_spacing_md",
      "paddingRight": "theme.h_spacing_md",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "cancelTextContainer": {
    "type": "ViewStyle",
    "description": "取消按钮容器，条件渲染，当 showCancelButton 或输入框聚焦时显示",
    "defaultValue": {
      "height": "theme.search_bar_input_height",
      "justifyContent": "center",
      "alignItems": "center"
    }
  },
  "cancelText": {
    "type": "TextStyle",
    "description": "取消按钮文字，点击触发取消操作",
    "defaultValue": {
      "fontSize": "theme.link_button_font_size",
      "color": "theme.color_link",
      "paddingLeft": "theme.h_spacing_lg"
    }
  },
  "search": {
    "type": "TextStyle",
    "description": "搜索图标，显示搜索放大镜图标",
    "defaultValue": {
      "color": "theme.color_icon_base",
      "position": "absolute",
      "left": "theme.h_spacing_md + 8",
      "top": "(theme.search_bar_height - theme.icon_size_xxs) / 2",
      "fontSize": "theme.icon_size_xxs"
    }
  }
}
```

# ActionSheet Semantic

## Component Description

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Modal",
      "style": "content",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "style": "title",
              "children": [
                {
                  "component": "Text",
                  "style": "titleText"
                }
              ]
            },
            {
              "component": "AntmView",
              "style": "message"
            },
            {
              "component": "View",
              "children": [
                {
                  "component": "View",
                  "style": "cancelBtn",
                  "children": [
                    {
                      "component": "TouchableHighlight",
                      "style": "btn"
                    },
                    {
                      "component": "Text",
                      "style": ["btnText", "destructiveBtn"]
                    },
                    {
                      "component": "View",
                      "style": "cancelBtnMask"
                    }
                  ]
                }
              ]
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
    "description": "容器区域，整体包裹 ActionSheet，负责布局",
    "defaultValue": { "zIndex": 1000 }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "包裹样式",
    "defaultValue": { "position": "absolute", "left": 0, "right": 0, "top": 0 }
  },
  "content": {
    "type": "ViewStyle",
    "description": "内容样式",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0,
      "backgroundColor": "#ffffff"
    }
  },
  "mask": {
    "type": "ViewStyle",
    "description": "遮罩样式",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "backgroundColor": "rgba(0, 0, 0, .4)"
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "标题区域，显示标题文字，只在配置有 title 时渲染",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "marginTop": 15,
      "marginBottom": 15
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "标题文字",
    "defaultValue": { "fontWeight": "500", "color": "#000000" }
  },
  "message": {
    "type": "ViewStyle",
    "description": "信息区域，显示附加文字信息，只在配置有 message 时渲染",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "marginBottom": 15,
      "color": "#000000",
      "textAlign": "center"
    }
  },
  "btn": {
    "type": "ViewStyle",
    "description": "按钮触摸区域，支持按钮基础样式 btn",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "height": 50,
      "borderStyle": "solid",
      "borderTopWidth": 1,
      "borderTopColor": "#dddddd"
    }
  },
  "btnText": {
    "type": "TextStyle",
    "description": "按钮文字，基础样式 btnText，销毁按钮样式 destructiveBtn 条件应用",
    "defaultValue": { "color": "#000000" }
  },
  "cancelBtn": {
    "type": "ViewStyle",
    "description": "选项容器，支持取消按钮样式条件应用（cancelBtn）",
    "defaultValue": { "marginTop": 9, "position": "relative" }
  },
  "cancelBtnMask": {
    "type": "ViewStyle",
    "description": "取消按钮遮罩层，条件渲染",
    "defaultValue": {
      "position": "absolute",
      "top": "-theme.v_spacing_md",
      "left": 0,
      "right": 0,
      "height": 9,
      "backgroundColor": "#f7f7f7",
      "borderStyle": "solid",
      "borderTopWidth": 1,
      "borderTopColor": "#dddddd"
    }
  },
  "destructiveBtn": {
    "type": "TextStyle",
    "description": "销毁按钮样式",
    "defaultValue": { "color": "#f4333c", "fontSize": 18 }
  }
}
```

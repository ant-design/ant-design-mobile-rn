# Form Semantic

## Component Description

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。基于rc-field-form。

---

## DOM Structure

```json
{
  "component": "FieldForm",
  "style": "List",
  "children": [
    {
      "component": "AntmList",
      "style": "List",
      "children": [
        {
          "component": "List.Item",
          "style": "Item",
          "children": [
            {
              "component": "View",
              "style": "formItemLabel",
              "children": [
                {
                  "component": "Text",
                  "style": "asterisk"
                },
                {
                  "component": "AntdView",
                  "style": "formItemLabelText"
                },
                {
                  "component": "Text",
                  "style": "optional"
                }
              ]
            },
            {
              "component": "View",
              "style": "formItemControl",
              "children": [
                {
                  "component": "Brief",
                  "style": ["error", "warning", "success", "validating"]
                }
              ]
            },
            {
              "component": "View",
              "style": "feedbackIcon",
              "children": [
                {
                  "component": "Icon",
                  "style": ["success", "warning", "error", "validating"]
                },
                {
                  "component": "ActivityIndicator",
                  "style": "validating"
                }
              ]
            },
            {
              "component": "View",
              "style": "Line"
            },
            {
              "component": "Image",
              "style": "Thumb"
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
  "formItemLabel": {
    "type": "ViewStyle",
    "description": "表单项标签容器，负责渲染label及必选标记",
    "defaultValue": {
      "minWidth": "65",
      "position": "relative",
      "flexDirection": "row",
      "paddingTop": "6"
    }
  },
  "formItemLabelText": {
    "type": "ViewStyle",
    "description": "标签文本样式",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17"
    }
  },
  "formItemControl": {
    "type": "ViewStyle",
    "description": "表单控件容器，包含表单控件及校验错误提示",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "center"
    }
  },
  "asterisk": {
    "type": "TextStyle",
    "description": "必填星号样式",
    "defaultValue": {
      "position": "absolute",
      "left": "-17 / 2",
      "top": "6",
      "color": "#f4333c",
      "fontSize": "17"
    }
  },
  "optional": {
    "type": "TextStyle",
    "description": "可选标记样式",
    "defaultValue": {
      "color": "rgba(0, 0, 0, 0.45)",
      "fontSize": "17"
    }
  },
  "error": {
    "type": "TextStyle",
    "description": "错误提示列表，条件渲染，有错误或帮助提示时显示",
    "defaultValue": { "color": "#f4333c" }
  },
  "warning": {
    "type": "TextStyle",
    "description": "警告样式",
    "defaultValue": { "color": "#faad14" }
  },
  "success": {
    "type": "TextStyle",
    "description": "成功样式",
    "defaultValue": { "color": "#6abf47" }
  },
  "validating": {
    "type": "TextStyle",
    "description": "验证中样式",
    "defaultValue": { "color": "#108ee9" }
  },
  "feedbackIcon": {
    "type": "ViewStyle",
    "description": "验证状态反馈图标，条件渲染hasFeedback为true，动态样式",
    "defaultValue": {}
  }
}
```

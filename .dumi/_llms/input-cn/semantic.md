# Input Semantic

## Component Description

通过键盘输入内容，是最基础的表单域包装。

---

## DOM Structure

```json
{
  "component": "View",
  "style": ["container", "style"],
  "children": [
    {
      "component": "AntmView",
      "style": "prefix"
    },
    {
      "component": "TextInput",
      "style": "input"
    },
    {
      "component": "TouchableOpacity",
      "style": "clearIcon"
    },
    {
      "component": "Text",
      "style": "showCount"
    },
    {
      "component": "AntmView",
      "style": "suffix"
    }
  ]
}
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "输入框整体布局样式",
    "defaultValue": {
      "width": "100%",
      "maxWidth": "100%",
      "maxHeight": "100%",
      "minHeight": 24,
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center",
      "position": "relative"
    }
  },
  "input": {
    "type": "ViewStyle",
    "description": "输入框基础样式；动态状态样式 statusClassName（styles.error、styles.warning）；支持外层传入 inputStyle 透传样式",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden",
      "width": "100%",
      "maxWidth": "100%",
      "maxHeight": "100%",
      "minHeight": 24,
      "fontSize": "17",
      "color": "#000000",
      "paddingVertical": "6",
      "textAlignVertical": "center",
      "includeFontPadding": "true"
    }
  },
  "clearIcon": {
    "type": "ViewStyle",
    "description": "清除按钮样式",
    "defaultValue": {
      "backgroundColor": "rgba(0,0,0,0.2)",
      "borderRadius": 15,
      "padding": 2,
      "marginLeft": "6"
    }
  },
  "prefix": {
    "type": "ViewStyle",
    "description": "前缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning）",
    "defaultValue": {
      "fontSize": "17",
      "color": "#000000",
      "marginRight": "6"
    }
  },
  "showCount": {
    "type": "TextStyle",
    "description": "计数文字样式；动态状态样式 statusClassName（styles.error、styles.warning）",
    "defaultValue": {
      "fontSize": "17",
      "color": "#bbbbbb",
      "paddingLeft": "6"
    }
  },
  "suffix": {
    "type": "ViewStyle",
    "description": "后缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning）",
    "defaultValue": {
      "fontSize": "17",
      "color": "#000000",
      "marginLeft": "6"
    }
  },
  "warning": {
    "type": "TextStyle",
    "description": "警告样式",
    "defaultValue": { "color": "#faad14" }
  },
  "error": {
    "type": "TextStyle",
    "description": "错误样式",
    "defaultValue": { "color": "#f4333c" }
  }
}
```

# Input Semantic

## Component Description

Entering content through the keyboard is the most basic form field wrapper.

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
    "description": "input box overall layout style",
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
    "description": "input box base style; dynamic state style statusClassName (styles.error, styles.warning); supports outer inputStyle pass-through",
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
    "description": "clear button style",
    "defaultValue": {
      "backgroundColor": "rgba(0,0,0,0.2)",
      "borderRadius": 15,
      "padding": 2,
      "marginLeft": "6"
    }
  },
  "prefix": {
    "type": "ViewStyle",
    "description": "prefix area style; dynamic state style statusClassName (styles.error, styles.warning)",
    "defaultValue": {
      "fontSize": "17",
      "color": "#000000",
      "marginRight": "6"
    }
  },
  "showCount": {
    "type": "TextStyle",
    "description": "count text style; dynamic state style statusClassName (styles.error, styles.warning)",
    "defaultValue": {
      "fontSize": "17",
      "color": "#bbbbbb",
      "paddingLeft": "6"
    }
  },
  "suffix": {
    "type": "ViewStyle",
    "description": "suffix area style; dynamic state style statusClassName (styles.error, styles.warning)",
    "defaultValue": {
      "fontSize": "17",
      "color": "#000000",
      "marginLeft": "6"
    }
  },
  "warning": {
    "type": "TextStyle",
    "description": "warning style",
    "defaultValue": { "color": "#faad14" }
  },
  "error": {
    "type": "TextStyle",
    "description": "error style",
    "defaultValue": { "color": "#f4333c" }
  }
}
```

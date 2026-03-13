# NoticeBar Semantic

## Component Description

在导航栏下方，一般用作系统提醒、活动提醒等通知。

---

## DOM Structure

```json
[
  {
    "component": "View",
    "style": ["container", "background", "style"],
    "children": [
      {
        "component": "View",
        "style": "iconWrap"
      },
      {
        "component": "Marquee",
        "style": ["font", "marquee"]
      },
      {
        "component": "View",
        "style": "actionWrap",
        "children": [
          {
            "component": "Text",
            "style": ["font", "close"]
          },
          {
            "component": "Text",
            "style": ["font", "link"]
          }
        ]
      }
    ]
  },
  {
    "component": "TouchableWithoutFeedback"
  }
]
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "容器区域样式",
    "defaultValue": {
      "minHeight": "36",
      "overflow": "hidden",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "font": {
    "type": "TextStyle",
    "description": "字体样式",
    "defaultValue": { "color": "#f4333c" }
  },
  "background": {
    "type": "ViewStyle",
    "description": "背景样式",
    "defaultValue": { "backgroundColor": "#fffada" }
  },
  "marquee": {
    "type": "TextStyle",
    "description": "滚动文本容器样式，styles.font：文本字体样式，支持传入 style 透传",
    "defaultValue": { "fontSize": "15" }
  },
  "iconWrap": {
    "type": "ViewStyle",
    "description": "图标包裹区域",
    "defaultValue": {
      "marginLeft": "15",
      "marginRight": "5"
    }
  },
  "actionWrap": {
    "type": "ViewStyle",
    "description": "操作区域包裹容器",
    "defaultValue": {
      "justifyContent": "center",
      "paddingRight": "15",
      "paddingLeft": "5"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "关闭按钮文本样式，styles.font：字体样式",
    "defaultValue": { "fontSize": 18, "fontWeight": "200", "textAlign": "left" }
  },
  "link": {
    "type": "TextStyle",
    "description": "链接文本样式，styles.font：字体样式",
    "defaultValue": {
      "transform": "[{ rotate: '225deg' }]",
      "fontWeight": "500",
      "textAlign": "left"
    }
  }
}
```

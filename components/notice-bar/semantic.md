# NoticeBar Semantic

## Component Description

Component to display a system message, event notice and etc. Which is under the navigation bar.

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
    "description": "container area style",
    "defaultValue": {
      "minHeight": "36",
      "overflow": "hidden",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "font": {
    "type": "TextStyle",
    "description": "font style",
    "defaultValue": { "color": "#f4333c" }
  },
  "background": {
    "type": "ViewStyle",
    "description": "background style",
    "defaultValue": { "backgroundColor": "#fffada" }
  },
  "marquee": {
    "type": "TextStyle",
    "description": "scrolling text container style, styles.font: text font style, supports style pass-through",
    "defaultValue": { "fontSize": "15" }
  },
  "iconWrap": {
    "type": "ViewStyle",
    "description": "icon wrapper area",
    "defaultValue": {
      "marginLeft": "15",
      "marginRight": "5"
    }
  },
  "actionWrap": {
    "type": "ViewStyle",
    "description": "action area wrapper container",
    "defaultValue": {
      "justifyContent": "center",
      "paddingRight": "15",
      "paddingLeft": "5"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "close button text style, styles.font: font style",
    "defaultValue": { "fontSize": 18, "fontWeight": "200", "textAlign": "left" }
  },
  "link": {
    "type": "TextStyle",
    "description": "link text style, styles.font: font style",
    "defaultValue": {
      "transform": "[{ rotate: '225deg' }]",
      "fontWeight": "500",
      "textAlign": "left"
    }
  }
}
```

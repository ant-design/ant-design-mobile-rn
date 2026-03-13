# Button Semantic

## Component Description

点击后会触发一个操作。

---

## DOM Structure

```json
{
  "component": "Pressable",
  "style": [
    "wrapperStyle",
    "largeRaw",
    "smallRaw",
    "defaultRaw",
    "primaryRaw",
    "ghostRaw",
    "warningRaw",
    "defaultDisabledRaw",
    "primaryDisabledRaw",
    "ghostDisabledRaw",
    "warningDisabledRaw"
  ],
  "children": [
    {
      "component": "View",
      "style": [
        "underlayStyle",
        "largeUnderlayContainerRaw",
        "smallUnderlayContainerRaw",
        "defaultUnderlayContainerRaw",
        "primaryUnderlayContainerRaw",
        "ghostUnderlayContainerRaw",
        "warningUnderlayContainerRaw",
        "defaultHighlight",
        "primaryHighlight",
        "ghostHighlight",
        "warningHighlight"
      ]
    },
    {
      "component": "View",
      "style": "container",
      "children": [
        {
          "component": "ActivityIndicator",
          "style": "indicator"
        },
        {
          "component": "AntmView",
          "style": [
            "rawText",
            "largeRawText",
            "smallRawText",
            "defaultRawText",
            "primaryRawText",
            "ghostRawText",
            "warningRawText",
            "defaultDisabledRawText",
            "primaryDisabledRawText",
            "ghostDisabledRawText",
            "warningDisabledRawText",
            "defaultHighlightText",
            "primaryHighlightText",
            "ghostHighlightText",
            "warningHighlightText"
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
    "description": "按钮内容容器，布局按钮文本和加载指示器，固定样式 container",
    "defaultValue": {
      "flexDirection": "row",
      "height": "100%",
      "alignItems": "center",
      "justifyContent": "center",
      "overflow": "hidden"
    }
  },
  "defaultHighlight": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#dddddd4D",
      "borderColor": "#dddddd"
    }
  },
  "primaryHighlight": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#1284d64D",
      "borderColor": "#108ee9"
    }
  },
  "ghostHighlight": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "transparent",
      "borderColor": "#108ee999"
    }
  },
  "warningHighlight": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#d247474D",
      "borderColor": "#e94f4f"
    }
  },
  "wrapperStyle": {
    "type": "ViewStyle",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "borderRadius": 5,
      "borderWidth": 1
    }
  },
  "underlayStyle": {
    "type": "ViewStyle",
    "defaultValue": {
      "width": "100%",
      "height": "100%",
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "largeRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "height": 47
    }
  },
  "largeUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "paddingLeft": 15,
      "paddingRight": 15,
    }
  },
  "smallRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "height": 23
    }
  },
  "smallUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "paddingLeft": 5,
      "paddingRight": 5,
    }
  },
  "defaultRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#dddddd"
    }
  },
  "defaultUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {}
  },
  "primaryRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#108ee9",
      "borderColor": "#108ee9"
    }
  },
  "primaryUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {}
  },
  "ghostRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "transparent",
      "borderColor": "#108ee9"
    }
  },
  "ghostUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {}
  },
  "warningRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#e94f4f",
      "borderColor": "#e94f4f"
    }
  },
  "warningUnderlayContainerRaw": {
    "type": "ViewStyle",
    "defaultValue": {}
  },
  "defaultDisabledRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "borderColor": "#dddddd"
    }
  },
  "primaryDisabledRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "ghostDisabledRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "borderColor": "#0000001A"
    }
  },
  "warningDisabledRaw": {
    "type": "ViewStyle",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "defaultHighlightText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#0000004D"
    }
  },
  "primaryHighlightText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff4D"
    }
  },
  "ghostHighlightText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#108ee999"
    }
  },
  "warningHighlightText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff4D"
    }
  },
  "rawText": {
    "type": "TextStyle",
    "defaultValue": {}
  },
  "largeRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "fontSize": 18
    }
  },
  "smallRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "fontSize": 12
    }
  },
  "defaultRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#000000"
    }
  },
  "primaryRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff"
    }
  },
  "ghostRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "warningRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff"
    }
  },
  "defaultDisabledRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#0000004D"
    }
  },
  "primaryDisabledRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff99"
    }
  },
  "ghostDisabledRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#0000001A"
    }
  },
  "warningDisabledRawText": {
    "type": "TextStyle",
    "defaultValue": {
      "color": "#ffffff99"
    }
  },
  "indicator": {
    "type": "ViewStyle",
    "description": "条件渲染：加载指示器，按 loading 显示，大小固定，颜色根据按下状态和禁用状态动态计算",
    "defaultValue": {
      "marginRight": 8
    }
  }
}
```

# Button Semantic

## Component Description

To trigger an operation.

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
    "description": "Button content container, layouts button text and loading indicator, fixed style container",
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
    "description": "Default highlight style",
    "defaultValue": { "backgroundColor": "#dddddd4D", "borderColor": "#dddddd" }
  },
  "primaryHighlight": {
    "type": "ViewStyle",
    "description": "Primary highlight style",
    "defaultValue": { "backgroundColor": "#1284d64D", "borderColor": "#108ee9" }
  },
  "ghostHighlight": {
    "type": "ViewStyle",
    "description": "Ghost highlight style",
    "defaultValue": {
      "backgroundColor": "transparent",
      "borderColor": "#108ee999"
    }
  },
  "warningHighlight": {
    "type": "ViewStyle",
    "description": "Warning highlight style",
    "defaultValue": { "backgroundColor": "#d247474D", "borderColor": "#e94f4f" }
  },
  "wrapperStyle": {
    "type": "ViewStyle",
    "description": "Wrapper style",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "borderRadius": 5,
      "borderWidth": 1
    }
  },
  "underlayStyle": {
    "type": "ViewStyle",
    "description": "Underlay style",
    "defaultValue": {
      "width": "100%",
      "height": "100%",
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "largeRaw": {
    "type": "ViewStyle",
    "description": "Large raw style",
    "defaultValue": { "height": 47 }
  },
  "largeUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Large underlay container raw style",
    "defaultValue": { "paddingLeft": 15, "paddingRight": 15 }
  },
  "smallRaw": {
    "type": "ViewStyle",
    "description": "Small raw style",
    "defaultValue": { "height": 23 }
  },
  "smallUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Small underlay container raw style",
    "defaultValue": { "paddingLeft": 5, "paddingRight": 5 }
  },
  "defaultRaw": {
    "type": "ViewStyle",
    "description": "Default raw style",
    "defaultValue": { "backgroundColor": "#ffffff", "borderColor": "#dddddd" }
  },
  "defaultUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Default underlay container raw style",
    "defaultValue": {}
  },
  "primaryRaw": {
    "type": "ViewStyle",
    "description": "Primary raw style",
    "defaultValue": { "backgroundColor": "#108ee9", "borderColor": "#108ee9" }
  },
  "primaryUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Primary underlay container raw style",
    "defaultValue": {}
  },
  "ghostRaw": {
    "type": "ViewStyle",
    "description": "Ghost raw style",
    "defaultValue": {
      "backgroundColor": "transparent",
      "borderColor": "#108ee9"
    }
  },
  "ghostUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Ghost underlay container raw style",
    "defaultValue": {}
  },
  "warningRaw": {
    "type": "ViewStyle",
    "description": "Warning raw style",
    "defaultValue": { "backgroundColor": "#e94f4f", "borderColor": "#e94f4f" }
  },
  "warningUnderlayContainerRaw": {
    "type": "ViewStyle",
    "description": "Warning underlay container raw style",
    "defaultValue": {}
  },
  "defaultDisabledRaw": {
    "type": "ViewStyle",
    "description": "Default disabled raw style",
    "defaultValue": { "backgroundColor": "#dddddd", "borderColor": "#dddddd" }
  },
  "primaryDisabledRaw": {
    "type": "ViewStyle",
    "description": "Primary disabled raw style",
    "defaultValue": { "opacity": 0.4 }
  },
  "ghostDisabledRaw": {
    "type": "ViewStyle",
    "description": "Ghost disabled raw style",
    "defaultValue": { "borderColor": "#0000001A" }
  },
  "warningDisabledRaw": {
    "type": "ViewStyle",
    "description": "Warning disabled raw style",
    "defaultValue": { "opacity": 0.4 }
  },
  "defaultHighlightText": {
    "type": "TextStyle",
    "description": "Default highlight text style",
    "defaultValue": { "color": "#0000004D" }
  },
  "primaryHighlightText": {
    "type": "TextStyle",
    "description": "Primary highlight text style",
    "defaultValue": { "color": "#ffffff4D" }
  },
  "ghostHighlightText": {
    "type": "TextStyle",
    "description": "Ghost highlight text style",
    "defaultValue": { "color": "#108ee999" }
  },
  "warningHighlightText": {
    "type": "TextStyle",
    "description": "Warning highlight text style",
    "defaultValue": { "color": "#ffffff4D" }
  },
  "rawText": {
    "type": "TextStyle",
    "description": "Raw text style",
    "defaultValue": {}
  },
  "largeRawText": {
    "type": "TextStyle",
    "description": "Large raw text style",
    "defaultValue": { "fontSize": 18 }
  },
  "smallRawText": {
    "type": "TextStyle",
    "description": "Small raw text style",
    "defaultValue": { "fontSize": 12 }
  },
  "defaultRawText": {
    "type": "TextStyle",
    "description": "Default raw text style",
    "defaultValue": { "color": "#000000" }
  },
  "primaryRawText": {
    "type": "TextStyle",
    "description": "Primary raw text style",
    "defaultValue": { "color": "#ffffff" }
  },
  "ghostRawText": {
    "type": "TextStyle",
    "description": "Ghost raw text style",
    "defaultValue": { "color": "#108ee9" }
  },
  "warningRawText": {
    "type": "TextStyle",
    "description": "Warning raw text style",
    "defaultValue": { "color": "#ffffff" }
  },
  "defaultDisabledRawText": {
    "type": "TextStyle",
    "description": "Default disabled raw text style",
    "defaultValue": { "color": "#0000004D" }
  },
  "primaryDisabledRawText": {
    "type": "TextStyle",
    "description": "Primary disabled raw text style",
    "defaultValue": { "color": "#ffffff99" }
  },
  "ghostDisabledRawText": {
    "type": "TextStyle",
    "description": "Ghost disabled raw text style",
    "defaultValue": { "color": "#0000001A" }
  },
  "warningDisabledRawText": {
    "type": "TextStyle",
    "description": "Warning disabled raw text style",
    "defaultValue": { "color": "#ffffff99" }
  },
  "indicator": {
    "type": "ViewStyle",
    "description": "Conditionally rendered loading indicator, displays based on loading state, fixed size, color dynamically calculated based on pressed state and disabled state",
    "defaultValue": { "marginRight": 8 }
  }
}
```

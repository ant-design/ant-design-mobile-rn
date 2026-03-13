# Ant Design Mobile RN Semantic Documentation

Aggregated semantic descriptions for all components.

> 34 components with semantic descriptions

# accordion Semantic

Source: https://rn.mobile.ant.design/components/accordion/semantic.md

# Accordion Semantic

## Component Description

You can collapse / expand the content area.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "header",
      "children": [
        {
          "component": "View",
          "style": "headerWrap",
          "children": [
            {
              "component": "Text",
              "style": "headerText"
            }
          ]
        },
        {
          "component": "View",
          "style": "arrow",
          "children": [
            {
              "component": "Icon",
              "style": "arrow"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "content",
      "children": [
        {
          "component": "Text",
          "style": "contentText"
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
    "description": "Container that wraps the entire accordion panel, layout outer container",
    "defaultValue": { "borderTopWidth": 0.5, "borderTopColor": "#dddddd" }
  },
  "header": {
    "type": "ViewStyle",
    "description": "Accordion panel header, header area for each panel item",
    "defaultValue": {
      "flexDirection": "row",
      "alignItems": "center",
      "paddingLeft": 15,
      "paddingRight": 30,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Arrow icon container that displays up or down arrow",
    "defaultValue": { "color": "#cccccc" }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "Wrapper container for header content, used to display text content when header is not a React element",
    "defaultValue": {
      "flex": 1,
      "height": 44,
      "alignItems": "center",
      "flexDirection": "row"
    }
  },
  "headerText": {
    "type": "TextStyle",
    "description": "Header text content",
    "defaultValue": { "color": "#000000", "fontSize": 17 }
  },
  "content": {
    "type": "ViewStyle",
    "description": "Accordion panel content area",
    "defaultValue": {
      "paddingVertical": 9,
      "paddingHorizontal": 8,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "contentText": {
    "type": "TextStyle",
    "description": "Accordion content text",
    "defaultValue": { "fontSize": 15, "color": "#333333" }
  }
}
```

---

# action-sheet Semantic

Source: https://rn.mobile.ant.design/components/action-sheet/semantic.md

# ActionSheet Semantic

## Component Description

The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes.

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
    "description": "Container area, overall wrapper for ActionSheet, handles layout",
    "defaultValue": { "zIndex": 1000 }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "Wrap style",
    "defaultValue": { "position": "absolute", "left": 0, "right": 0, "top": 0 }
  },
  "content": {
    "type": "ViewStyle",
    "description": "Content style",
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
    "description": "Mask style",
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
    "description": "Title area, displays title text, only rendered when title is configured",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "marginTop": 15,
      "marginBottom": 15
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "Title text",
    "defaultValue": { "fontWeight": "500", "color": "#000000" }
  },
  "message": {
    "type": "ViewStyle",
    "description": "Message area, displays extra text information, only rendered when message is configured",
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
    "description": "Button touch area, supports button base style btn",
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
    "description": "Button text, base style btnText, destructive button style destructiveBtn conditionally applied",
    "defaultValue": { "color": "#000000" }
  },
  "cancelBtn": {
    "type": "ViewStyle",
    "description": "Option container, supports cancel button style conditionally applied (cancelBtn)",
    "defaultValue": { "marginTop": 9, "position": "relative" }
  },
  "cancelBtnMask": {
    "type": "ViewStyle",
    "description": "Cancel button mask layer, conditionally rendered",
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
    "description": "Destructive button style",
    "defaultValue": { "color": "#f4333c", "fontSize": 18 }
  }
}
```

---

# activity-indicator Semantic

Source: https://rn.mobile.ant.design/components/activity-indicator/semantic.md

# ActivityIndicator Semantic

## Component Description

Properties | Descrition | Type | Default -----------|------------|------|--------

---

## DOM Structure

```json
[
  {
    "component": "View",
    "style": "container",
    "children": [
      {
        "component": "View",
        "style": "innerContainer",
        "children": [
          {
            "component": "View",
            "style": "wrapper",
            "children": [
              {
                "component": "ActivityIndicator"
              },
              {
                "component": "Text",
                "style": "toast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "component": "View",
    "style": "spinner",
    "children": [
      {
        "component": "ActivityIndicator"
      },
      {
        "component": "Text",
        "style": "tip"
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "container": {
    "type": "ViewStyle",
    "description": "Container layout style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "bottom": 0,
      "right": 0,
      "backgroundColor": "transparent",
      "zIndex": 1999
    }
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "Inner layer container style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "transparent"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "Wrapper for loading indicator and text area",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "width": 89,
      "height": 89,
      "borderRadius": 5,
      "backgroundColor": "rgba(0, 0, 0, .8)"
    }
  },
  "tip": {
    "type": "TextStyle",
    "description": "Spinner text style",
    "defaultValue": { "color": "#000000", "fontSize": 14, "marginLeft": 8 }
  },
  "toast": {
    "type": "TextStyle",
    "description": "Toast text style",
    "defaultValue": { "color": "#ffffff", "fontSize": 14, "marginTop": 6 }
  },
  "spinner": {
    "type": "ViewStyle",
    "description": "Normal mode container style",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center"
    }
  }
}
```

---

# badge Semantic

Source: https://rn.mobile.ant.design/components/badge/semantic.md

# Badge Semantic

## Component Description

The red dot at corner for notification and getting user attention.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrap",
  "children": [
    {
      "component": "View",
      "style": ["textCornerWrap", "textDomWrap"],
      "children": [
        {
          "component": "View",
          "style": ["textDom", "textDomlarge"],
          "children": [
            {
              "component": "Text",
              "style": "text"
            }
          ]
        },
        {
          "component": "View",
          "style": ["dot", "dotSizelarge"]
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrap": {
    "type": "ViewStyle",
    "description": "Wrapper layer style",
    "defaultValue": { "flexDirection": "row" }
  },
  "textCornerWrap": {
    "type": "ViewStyle",
    "description": "Text corner wrapper style",
    "defaultValue": { "overflow": "hidden" }
  },
  "dot": {
    "type": "ViewStyle",
    "description": "Dot style",
    "defaultValue": {
      "width": "2 * grid",
      "height": "2 * grid",
      "borderRadius": "grid",
      "backgroundColor": "#ff5b05",
      "position": "absolute",
      "top": "-1 * grid",
      "right": "-1 * grid"
    }
  },
  "dotSizelarge": {
    "type": "ViewStyle",
    "description": "Dot size large style",
    "defaultValue": {
      "width": "4 * grid",
      "height": "4 * grid",
      "borderRadius": "2 * grid"
    }
  },
  "textDom": {
    "type": "ViewStyle",
    "description": "Text DOM style",
    "defaultValue": {
      "paddingVertical": "0.5 * grid",
      "paddingHorizontal": "(Platform.OS === 'ios' ? 1.5 : 2) * grid",
      "backgroundColor": "#ff5b05",
      "borderRadius": 12,
      "borderStyle": "solid",
      "position": "absolute",
      "top": -10,
      "right": -15
    }
  },
  "textCorner": {
    "type": "ViewStyle",
    "description": "Text corner style",
    "defaultValue": {
      "width": "18 * grid",
      "backgroundColor": "#ff5b05",
      "transform": "[",
      "rotate": "45deg",
      "position": "absolute",
      "top": "2 * grid"
    }
  },
  "textCornerlarge": {
    "type": "ViewStyle",
    "description": "Text corner large style",
    "defaultValue": { "width": "26 * grid", "top": "3 * grid" }
  },
  "text": {
    "type": "TextStyle",
    "description": "Text style",
    "defaultValue": { "color": "#ffffff", "textAlign": "center" }
  }
}
```

---

# button Semantic

Source: https://rn.mobile.ant.design/components/button/semantic.md

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

---

# card Semantic

Source: https://rn.mobile.ant.design/components/card/semantic.md

# Card Semantic

## Component Description

Card can be used to organize information and operations, usually also as an entry for detailed information.

---

## DOM Structure

```json
{
  "component": "View",
  "style": ["card", "full"],
  "children": [
    {
      "component": "View",
      "style": "headerWrap",
      "children": [
        {
          "component": "View",
          "style": "headerTitle",
          "children": [
            {
              "component": "Image",
              "style": "headerImage"
            },
            {
              "component": "View",
              "style": "headerContentWrap"
            },
            {
              "component": "Text",
              "style": "headerContent"
            }
          ]
        },
        {
          "component": "View",
          "style": "headerExtraWrap"
        },
        {
          "component": "Text",
          "style": "headerExtra"
        }
      ]
    },
    {
      "component": "View",
      "style": "body"
    },
    {
      "component": "View",
      "style": "footerWrap",
      "children": [
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerContent"
        },
        {
          "component": "View"
        },
        {
          "component": "Text",
          "style": "footerExtra"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "card": {
    "type": "ViewStyle",
    "description": "card base container style",
    "defaultValue": {
      "borderWidth": 1,
      "borderColor": "#dddddd",
      "borderRadius": 5,
      "paddingBottom": 6,
      "flexDirection": "column",
      "backgroundColor": "#ffffff"
    }
  },
  "full": {
    "type": "ViewStyle",
    "description": "full style",
    "defaultValue": {
      "borderRadius": 0,
      "borderLeftWidth": 0,
      "borderRightWidth": 0
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "header container style",
    "defaultValue": {
      "flexDirection": "row",
      "paddingVertical": 6,
      "paddingRight": 15,
      "marginLeft": 15,
      "alignItems": "center"
    }
  },
  "headerTitle": {
    "type": "ViewStyle",
    "description": "title container style",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "headerImage": {
    "type": "ImageStyle",
    "description": "thumbnail image style",
    "defaultValue": {
      "marginRight": 5,
    }
  },
  "headerContentWrap": {
    "type": "ViewStyle",
    "description": "title content wrapper (when title is a JSX element)",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerContent": {
    "type": "TextStyle",
    "description": "title text style (when title is a string or text)",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "flex": 1
    }
  },
  "headerExtraWrap": {
    "type": "ViewStyle",
    "description": "extra content wrapper (when extra content is a JSX element)",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerExtra": {
    "type": "TextStyle",
    "description": "extra content text style (when extra content is text)",
    "defaultValue": {
      "flex": 1,
      "fontSize": "17",
      "color": "#888888",
      "textAlign": "right"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "body container style",
    "defaultValue": {
      "flexGrow": 1,
      "paddingVertical": 9,
      "minHeight": 48,
      "borderTopWidth": 1,
      "borderColor": "#dddddd"
    }
  },
  "footerWrap": {
    "type": "ViewStyle",
    "description": "footer container style",
    "defaultValue": {
      "flexDirection": "row",
      "paddingHorizontal": 15
    }
  },
  "footerContent": {
    "type": "TextStyle",
    "description": "footer content text style",
    "defaultValue": {
      "flex": 1,
      "fontSize": "14",
      "color": "#888888",
    }
  },
  "footerExtra": {
    "type": "TextStyle",
    "description": "footer extra text style",
    "defaultValue": {
      "textAlign": "right",
      "fontSize": "14",
      "color": "#888888",
    }
  }
}
```

---

# carousel Semantic

Source: https://rn.mobile.ant.design/components/carousel/semantic.md

# Carousel Semantic

## Component Description

Properties | Descrition | Type | Default | Version -----------|------------|------|---------|----------

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "ScrollView",
      "style": "wrapperStyle",
      "children": [
        {
          "component": "View",
          "style": "wrapperStyle"
        }
      ]
    },
    {
      "component": "View",
      "style": ["pagination", "paginationX", "paginationY"],
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "style": ["pointStyle", "spaceStyle", "pointActiveStyle"]
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
  "pagination": {
    "type": "ViewStyle",
    "description": "pagination style",
    "defaultValue": {
      "position": "absolute",
      "alignItems": "center"
    }
  },
  "paginationX": {
    "type": "ViewStyle",
    "description": "paginationX style",
    "defaultValue": {
      "bottom": 10,
      "left": 0,
      "right": 0
    }
  },
  "paginationY": {
    "type": "ViewStyle",
    "description": "paginationY style",
    "defaultValue": {
      "right": 10,
      "top": 0,
      "bottom": 0
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "pointStyle style",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "#cccccc"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "pointActiveStyle style",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "spaceStyle style",
    "defaultValue": {
      "marginHorizontal": 5 / 2,
      "marginVertical": 6 / 2
    }
  },
  "wrapperStyle": {
    "type": "ViewStyle",
    "description": "wrapperStyle style",
    "defaultValue": {
      "overflow": "hidden"
    }
  }
}
```

---

# checkbox Semantic

Source: https://rn.mobile.ant.design/components/checkbox/semantic.md

# Checkbox Semantic

## Component Description

Checkbox

---

## DOM Structure

```json
{
  "component": "Pressable",
  "style": "checkbox_wrapper",
  "children": [
    {
      "component": "View",
      "style": "checkbox_wave",
      "children": [
        {
          "component": "View",
          "style": ["checkbox", "checkbox_checked", "checkbox_disabled"],
          "children": [
            {
              "component": "Animated.View",
              "style": [
                "checkbox_inner",
                "checkbox_inner_disabled",
                "checkbox_inner_indeterminate"
              ]
            },
            {
              "component": "Animated.View",
              "style": [
                "checkbox_inner_before",
                "checkbox_inner_before_disabled",
                "checkbox_inner_before_indeterminate"
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "AntmView",
      "style": ["checkbox_label", "checkbox_label_disabled"]
    }
  ]
}
```

## Styles Schema

```json
{
  "checkbox_wrapper": {
    "type": "ViewStyle",
    "description": "container overall style, supports style base property pass-through",
    "defaultValue": {
      "margin": 0,
      "padding": 0,
      "position": "relative",
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "checkbox_wave": {
    "type": "ViewStyle",
    "description": "ripple animation outer",
    "defaultValue": {
      "width": 20,
      "height": 20,
      "padding": 2,
      "overflow": "hidden"
    }
  },
  "checkbox": {
    "type": "ViewStyle",
    "description": "checkbox style",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": "100%",
      "borderRadius": 2,
      "borderWidth": 1,
      "borderStyle": "solid",
      "borderColor": "#d9d9d9",
      "backgroundColor": "transparent",
      "justifyContent": "center",
      "alignItems": "center"
    }
  },
  "checkbox_checked": {
    "type": "ViewStyle",
    "description": "checkbox_checked style",
    "defaultValue": {
      "borderColor": "#108ee9"
    }
  },
  "checkbox_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_disabled style",
    "defaultValue": {
      "borderColor": "#b9b9b9",
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner": {
    "type": "ViewStyle",
    "description": "checkbox_inner style",
    "defaultValue": {
      "width": "103%",
      "height": "103%",
      "backgroundColor": "#108ee9"
    }
  },
  "checkbox_inner_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_inner_disabled style",
    "defaultValue": {
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner_before": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before style"
  },
  "checkbox_inner_before_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before_disabled style",
    "defaultValue": {
      "borderColor": "#b9b9b9"
    }
  },
  "checkbox_label": {
    "type": "ViewStyle",
    "description": "checkbox_label style",
    "defaultValue": {
      "backgroundColor": "transparent",
      "marginRight": "8",
      "marginLeft": "8",
      "color": "#000000"
    }
  },
  "checkbox_label_disabled": {
    "type": "ViewStyle",
    "description": "checkbox_label_disabled style",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "checkbox_inner_indeterminate": {
    "type": "ViewStyle",
    "description": "checkbox_inner_indeterminate style",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "checkbox_inner_before_indeterminate": {
    "type": "ViewStyle",
    "description": "checkbox_inner_before_indeterminate style",
    "defaultValue": {
      "position": "absolute",
      "width": 8,
      "height": 8,
      "backgroundColor": "#108ee9"
    }
  }
}
```

---

# form Semantic

Source: https://rn.mobile.ant.design/components/form/semantic.md

# Form Semantic

## Component Description

High-performance form component with data domain management. Includes data entry, validation, and corresponding styles. Base on rc-field-form.

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
    "description": "form item label container, responsible for rendering label and required mark",
    "defaultValue": {
      "minWidth": "65",
      "position": "relative",
      "flexDirection": "row",
      "paddingTop": "6"
    }
  },
  "formItemLabelText": {
    "type": "ViewStyle",
    "description": "label text style",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17"
    }
  },
  "formItemControl": {
    "type": "ViewStyle",
    "description": "form control container, contains form control and validation error hints",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "center"
    }
  },
  "asterisk": {
    "type": "TextStyle",
    "description": "required asterisk style",
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
    "description": "optional mark style",
    "defaultValue": {
      "color": "rgba(0, 0, 0, 0.45)",
      "fontSize": "17"
    }
  },
  "error": {
    "type": "TextStyle",
    "description": "error hint list, conditional rendering, displayed when there is error or help hint",
    "defaultValue": {
      "color": "#f4333c"
    }
  },
  "warning": {
    "type": "TextStyle",
    "description": "warning style",
    "defaultValue": {
      "color": "#faad14"
    }
  },
  "success": {
    "type": "TextStyle",
    "description": "success style",
    "defaultValue": {
      "color": "#6abf47"
    }
  },
  "validating": {
    "type": "TextStyle",
    "description": "validating style",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "feedbackIcon": {
    "type": "ViewStyle",
    "description": "validation state feedback icon, conditional rendering when hasFeedback is true, dynamic style",
    "defaultValue": {}
  }
}
```

---

# grid Semantic

Source: https://rn.mobile.ant.design/components/grid/semantic.md

# Grid Semantic

## Component Description

We divided the design area into a number of aliquots in horizontal and vertical.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "Flex",
      "style": "grayBorderBox",
      "children": [
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Flex",
              "children": [
                {
                  "component": "Image",
                  "style": "icon"
                },
                {
                  "component": "Text",
                  "style": "text"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Carousel",
      "children": [
        {
          "component": "View",
          "style": "grayBorderBox",
          "children": [
            {
              "component": "Flex",
              "style": "grayBorderBox",
              "children": [
                {
                  "component": "Flex.Item"
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
  "grayBorderBox": {
    "type": "ViewStyle",
    "description": "gray border box, used to separate rows",
    "defaultValue": { "borderColor": "#dddddd" }
  },
  "icon": {
    "type": "ImageStyle",
    "description": "image style, size and color",
    "defaultValue": {
      "width": "22",
      "height": "22"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "text style",
    "defaultValue": {
      "fontSize": "12",
      "color": "#000000",
      "marginTop": "9"
    }
  }
}
```

---

# input Semantic

Source: https://rn.mobile.ant.design/components/input/semantic.md

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

---

# input-item Semantic

Source: https://rn.mobile.ant.design/components/input-item/semantic.md

# InputItem Semantic

## Component Description

A foundational component for inputting text into the app via a keyboard.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Text",
      "style": "text"
    },
    {
      "component": "View"
    },
    {
      "component": "Input",
      "style": ["input", "inputErrorColor", "inputDisabled"]
    },
    {
      "component": "TouchableOpacity",
      "style": "clear"
    },
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "Text",
              "style": "extra"
            }
          ]
        }
      ]
    },
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "style": "errorIcon",
          "children": [
            {
              "component": "Icon"
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
    "description": "container overall style, includes border style",
    "defaultValue": {
      "height": "44 + 0.5",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "#dddddd",
      "marginLeft": "15",
      "paddingRight": "15",
      "marginTop": 0,
      "marginBottom": 0,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "label text style, width can be adjusted by labelNumber variable",
    "defaultValue": {
      "marginRight": "5",
      "textAlignVertical": "center",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "input box text style",
    "defaultValue": {
      "flex": 1,
      "backgroundColor": "transparent",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "inputDisabled": {
    "type": "TextStyle",
    "description": "inputDisabled style",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "color": "#bbbbbb"
    }
  },
  "inputErrorColor": {
    "type": "TextStyle",
    "description": "inputErrorColor style",
    "defaultValue": { "color": "#f50" }
  },
  "clear": {
    "type": "ViewStyle",
    "description": "clear button area style",
    "defaultValue": {
      "backgroundColor": "#cccccc",
      "borderRadius": 15,
      "padding": 2
    }
  },
  "extra": {
    "type": "TextStyle",
    "description": "extra description text style",
    "defaultValue": {
      "marginLeft": "5",
      "fontSize": "15",
      "color": "#888888"
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "error icon container style",
    "defaultValue": {
      "marginLeft": "5",
      "width": "21",
      "height": "21"
    }
  }
}
```

---

# list Semantic

Source: https://rn.mobile.ant.design/components/list/semantic.md

# List Semantic

## Component Description

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "List",
  "children": [
    {
      "component": "Text",
      "style": "Header"
    },
    {
      "component": "View",
      "style": "Body",
      "children": [
        {
          "component": "View",
          "style": "Item",
          "children": [
            {
              "component": "Image",
              "style": "Thumb"
            },
            {
              "component": "View",
              "style": "Line",
              "children": [
                {
                  "component": "Text",
                  "style": "Content"
                },
                {
                  "component": "Text",
                  "style": "Extra"
                },
                {
                  "component": "Text",
                  "style": "Arrow"
                },
                {
                  "component": "Text",
                  "style": "ArrowV"
                }
              ]
            }
          ]
        },
        {
          "component": "View",
          "style": "BodyBottomLine"
        }
      ]
    },
    {
      "component": "Text",
      "style": "Footer"
    }
  ]
}
```

## Styles Schema

```json
{
  "List": {
    "type": "ViewStyle",
    "description": "overall list container area, wraps entire list content",
    "defaultValue": { "backgroundColor": "#f5f5f9" }
  },
  "Header": {
    "type": "TextStyle",
    "description": "list header text style",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingTop": "15",
      "paddingBottom": "9"
    }
  },
  "Footer": {
    "type": "TextStyle",
    "description": "list footer text style",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingVertical": "9"
    }
  },
  "Body": {
    "type": "ViewStyle",
    "description": "list body content area, contains all child elements",
    "defaultValue": {
      "position": "relative",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderTopColor": "#eeeeee"
    }
  },
  "BodyBottomLine": {
    "type": "ViewStyle",
    "description": "list body footer divider",
    "defaultValue": {
      "position": "absolute",
      "bottom": 0,
      "left": 0,
      "right": 0,
      "height": "StyleSheet.hairlineWidth",
      "backgroundColor": "#eeeeee"
    }
  },
  "underlayColor": {
    "type": "ViewStyle",
    "description": "underlayColor style",
    "defaultValue": { "backgroundColor": "#dddddd" }
  },
  "Item": {
    "type": "ViewStyle",
    "description": "generally rendered by List.Item, shown here as placeholder example",
    "defaultValue": {
      "flexGrow": 1,
      "alignItems": "center",
      "flexDirection": "row",
      "paddingLeft": "15",
      "backgroundColor": "#ffffff"
    }
  },
  "Line": {
    "type": "ViewStyle",
    "description": "content area, displays main text and extra information",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center",
      "paddingRight": "15",
      "paddingVertical": "6",
      "minHeight": "44",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "#dddddd"
    }
  },
  "Thumb": {
    "type": "ImageStyle",
    "description": "left thumbnail area",
    "defaultValue": {
      "width": "22",
      "height": "22",
      "marginRight": "15"
    }
  },
  "Content": {
    "type": "TextStyle",
    "description": "main content text",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "textAlignVertical": "center",
      "flex": 1
    }
  },
  "Extra": {
    "type": "TextStyle",
    "description": "extra content text",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "17",
      "textAlign": "right",
      "textAlignVertical": "center",
      "paddingLeft": "8",
      "maxWidth": "70%"
    }
  },
  "Arrow": {
    "type": "TextStyle",
    "description": "arrow icon",
    "defaultValue": {
      "marginLeft": "8",
      "marginTop": "3"
    }
  },
  "ArrowV": {
    "type": "TextStyle",
    "description": "or vertical arrow style",
    "defaultValue": { "marginLeft": "8" }
  },
  "multipleLine": {
    "type": "ViewStyle",
    "description": "multipleLine style",
    "defaultValue": { "paddingVertical": "6" }
  },
  "multipleThumb": {
    "type": "ImageStyle",
    "description": "multipleThumb style",
    "defaultValue": {
      "width": "36",
      "height": "36"
    }
  },
  "Brief": {
    "type": "ViewStyle",
    "description": "Brief style",
    "defaultValue": { "minHeight": "10" }
  },
  "BriefText": {
    "type": "TextStyle",
    "description": "BriefText style",
    "defaultValue": {
      "color": "#888888",
      "fontSize": "15",
      "paddingTop": "3",
      "textAlignVertical": "center"
    }
  }
}
```

---

# modal Semantic

Source: https://rn.mobile.ant.design/components/modal/semantic.md

# Modal Semantic

## Component Description

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "style": "wrap",
      "children": [
        {
          "component": "TouchableWithoutFeedback",
          "children": [
            {
              "component": "Animated.View",
              "style": "maskClosable",
              "children": [
                {
                  "component": "View",
                  "style": "maskClosable"
                }
              ]
            }
          ]
        },
        {
          "component": "Animated.View",
          "style": "container",
          "children": [
            {
              "component": "View",
              "style": [
                "innerContainer",
                "popupContainer",
                "popupSlideUp",
                "popupSlideDown"
              ],
              "children": [
                {
                  "component": "Text",
                  "style": "header"
                },
                {
                  "component": "View",
                  "style": "body"
                },
                {
                  "component": "View",
                  "style": ["footer", "buttonGroupV", "buttonGroupH"],
                  "children": [
                    {
                      "component": "TouchableHighlight",
                      "children": [
                        {
                          "component": "View",
                          "style": ["buttonWrapV", "buttonWrapH"],
                          "children": [
                            {
                              "component": "Text",
                              "style": ["buttonText", "buttonTextOperation"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "component": "View",
                  "style": "closeWrap",
                  "children": [
                    {
                      "component": "TouchableWithoutFeedback",
                      "children": [
                        {
                          "component": "View",
                          "children": [
                            {
                              "component": "Text",
                              "style": "close"
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
    "description": "mask layer container, full screen, floating mask",
    "defaultValue": { "zIndex": "999" }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "mask layer wrapper container",
    "defaultValue": {
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "transparent"
    }
  },
  "popupContainer": {
    "type": "ViewStyle",
    "description": "popupContainer style",
    "defaultValue": {}
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "dialog content wrapper container, for popup mode applies popupContainer, popupSlideUp, popupSlideDown dynamic styles",
    "defaultValue": {
      "borderRadius": "5",
      "width": 286,
      "paddingTop": "21",
      "overflow": "hidden",
      "backgroundColor": "#ffffff"
    }
  },
  "popupSlideUp": {
    "type": "ViewStyle",
    "description": "popupSlideUp style",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0
    }
  },
  "popupSlideDown": {
    "type": "ViewStyle",
    "description": "popupSlideDown style",
    "defaultValue": {}
  },
  "footer": {
    "type": "ViewStyle",
    "description": "footer button area, footer area",
    "defaultValue": {}
  },
  "header": {
    "type": "TextStyle",
    "description": "header title area, displays title text",
    "defaultValue": {
      "fontSize": "18",
      "color": "#000000",
      "textAlign": "center",
      "paddingHorizontal": "15"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "content area, wraps children view, supports body and bodyStyle pass-through",
    "defaultValue": {
      "paddingTop": 0,
      "paddingBottom": "15",
      "paddingHorizontal": "15"
    }
  },
  "maskClosable": {
    "type": "ViewStyle",
    "description": "maskClosable style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "backgroundColor": "transparent"
    }
  },
  "closeWrap": {
    "type": "ViewStyle",
    "description": "close button area (conditional rendering, when closable is true)",
    "defaultValue": {
      "position": "absolute",
      "top": "21",
      "left": "15"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "close style",
    "defaultValue": {
      "fontSize": 40,
      "fontWeight": "200",
      "color": "#bcbcbc",
      "lineHeight": 30
    }
  },
  "buttonGroupH": {
    "type": "ViewStyle",
    "description": "buttonGroupH style",
    "defaultValue": { "flexGrow": 1, "flexDirection": "row" }
  },
  "buttonGroupV": {
    "type": "ViewStyle",
    "description": "buttonGroupV style",
    "defaultValue": { "flexGrow": 1, "flexDirection": "column" }
  },
  "buttonWrapH": {
    "type": "ViewStyle",
    "description": "buttonWrapH style",
    "defaultValue": {
      "height": "50",
      "flexGrow": 1,
      "justifyContent": "center",
      "borderColor": "#dddddd",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderRightWidth": "StyleSheet.hairlineWidth",
      "paddingVertical": 11
    }
  },
  "buttonWrapV": {
    "type": "ViewStyle",
    "description": "buttonWrapV style",
    "defaultValue": {
      "flexGrow": 1,
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderColor": "#dddddd",
      "paddingVertical": 11
    }
  },
  "buttonText": {
    "type": "TextStyle",
    "description": "buttonText style",
    "defaultValue": {
      "textAlign": "center",
      "color": "#108ee9",
      "fontSize": "18",
      "backgroundColor": "transparent"
    }
  },
  "operationContainer": {
    "type": "ViewStyle",
    "description": "operationContainer style",
    "defaultValue": { "paddingTop": 0 }
  },
  "operationBody": {
    "type": "ViewStyle",
    "description": "operationBody style",
    "defaultValue": { "paddingBottom": 0, "paddingHorizontal": 0 }
  },
  "buttonTextOperation": {
    "type": "TextStyle",
    "description": "buttonTextOperation style",
    "defaultValue": {
      "color": "#000000",
      "textAlign": "left",
      "paddingHorizontal": 15
    }
  }
}
```

---

# notice-bar Semantic

Source: https://rn.mobile.ant.design/components/notice-bar/semantic.md

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

---

# pagination Semantic

Source: https://rn.mobile.ant.design/components/pagination/semantic.md

# Pagination Semantic

## Component Description

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "Flex",
      "children": [
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "View",
              "style": "numberStyle",
              "children": [
                {
                  "component": "Text",
                  "style": "activeTextStyle"
                },
                {
                  "component": "Text",
                  "style": "totalStyle"
                }
              ]
            }
          ]
        },
        {
          "component": "Flex.Item",
          "children": [
            {
              "component": "Button"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "numberStyle",
      "children": [
        {
          "component": "Text",
          "style": "activeTextStyle"
        },
        {
          "component": "Text",
          "style": "totalStyle"
        }
      ]
    },
    {
      "component": "View",
      "style": "indicatorStyle",
      "children": [
        {
          "component": "View",
          "style": [
            "pointStyle",
            "spaceStyle"
          ]
        },
        {
          "component": "View",
          "style": [
            "pointStyle",
            "spaceStyle",
            "pointActiveStyle"
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
    "description": "Overall container style",
    "defaultValue": {
      "justifyContent": "center"
    }
  },
  "numberStyle": {
    "type": "ViewStyle",
    "description": "Style for the area displaying current page and total pages when mode is 'number'",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center"
    }
  },
  "totalStyle": {
    "type": "TextStyle",
    "description": "Style for displaying total page count",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_text_base"
    }
  },
  "activeTextStyle": {
    "type": "TextStyle",
    "description": "Style for highlighting the current page number",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_link"
    }
  },
  "indicatorStyle": {
    "type": "ViewStyle",
    "description": "Style for the dot indicator container when mode is 'pointer'",
    "defaultValue": {
      "flexDirection": "row",
      "alignSelf": "center"
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "Style for individual dot",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "theme.color_icon_base"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "Style for the active dot",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "Style for spacing between dots",
    "defaultValue": {
      "marginHorizontal": "theme.h_spacing_sm / 2",
      "marginVertical": "theme.v_spacing_sm / 2"
    }
  }
}
```

---

# picker Semantic

Source: https://rn.mobile.ant.design/components/picker/semantic.md

# Picker Semantic

## Component Description

Choose from a set of data, e.g. Country choice.

---

## DOM Structure

```json
{
  "component": "Modal",
  "style": ["modal", "container"],
  "children": [
    {
      "component": "View",
      "style": "header",
      "children": [
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": ["actionText", "dismissText"]
            }
          ]
        },
        {
          "component": "View",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": "title"
            }
          ]
        },
        {
          "component": "TouchableHighlight",
          "style": "headerItem",
          "children": [
            {
              "component": "Text",
              "style": ["actionText", "okText"]
            }
          ]
        }
      ]
    },
    {
      "component": "RMCPickerView",
      "style": [
        "wrappper",
        "wheelWrapper",
        "itemWrap",
        "itemStyle",
        "itemActiveStyle",
        "mask",
        "maskTop",
        "maskMiddle",
        "maskBottom"
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "modal": {
    "type": "ViewStyle",
    "description": "Popup layer wrapper style (positioning, background mask, etc.)",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "flex-end"
    }
  },
  "container": {
    "type": "ViewStyle",
    "description": "Popup layer content container (layout and background)",
    "defaultValue": {}
  },
  "header": {
    "type": "ViewStyle",
    "description": "Header container layout",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "alignItems": "center",
      "flexDirection": "row",
      "justifyContent": "center",
      "borderBottomWidth": "StyleSheet.hairlineWidth",
      "borderBottomColor": "theme.border_color_thin",
      "backgroundColor": "theme.fill_base"
    }
  },
  "headerItem": {
    "type": "ViewStyle",
    "description": "Button position and size",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "Button text base style",
    "defaultValue": {
      "color": "theme.brand_primary",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "title": {
    "type": "TextStyle",
    "description": "Title text style",
    "defaultValue": {
      "color": "theme.color_text_caption",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "okText": {
    "type": "TextStyle",
    "description": "Confirm button text variant style",
    "defaultValue": {}
  },
  "dismissText": {
    "type": "TextStyle",
    "description": "Cancel button text variant style",
    "defaultValue": {}
  }
}
```

---

# picker-view Semantic

Source: https://rn.mobile.ant.design/components/picker-view/semantic.md

# PickerView Semantic

## Component Description

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrappper",
  "children": [
    {
      "component": "View",
      "style": "wheelWrapper",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "ActivityIndicator"
            }
          ]
        },
        {
          "component": "Wheel",
          "style": "itemWrap",
          "children": [
            {
              "component": "Text",
              "style": ["itemStyle", "itemActiveStyle"]
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "mask",
      "children": [
        {
          "component": "View",
          "style": "maskTop"
        },
        {
          "component": "View",
          "style": "maskMiddle"
        },
        {
          "component": "View",
          "style": "maskBottom"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "wrappper": {
    "type": "ViewStyle",
    "description": "Container overall layout style",
    "defaultValue": {
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "overflow": "hidden",
      "backgroundColor": "theme.fill_base"
    }
  },
  "wheelWrapper": {
    "type": "ViewStyle",
    "description": "Wheel area wrapper style",
    "defaultValue": {
      "zIndex": 1,
      "display": "flex",
      "flexDirection": "row"
    }
  },
  "itemWrap": {
    "type": "ViewStyle",
    "description": "Item wrapper style",
    "defaultValue": {
      "overflow": "hidden",
      "justifyContent": "center",
      "height": "theme.picker_item_height",
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "itemStyle": {
    "type": "TextStyle",
    "description": "Single option container with fixed height, wrapping text",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_base",
      "textAlign": "center",
      "includeFontPadding": "false"
    }
  },
  "itemActiveStyle": {
    "type": "TextStyle",
    "description": "Active item style",
    "defaultValue": {}
  },
  "mask": {
    "type": "ViewStyle",
    "description": "Mask layer container style",
    "defaultValue": {
      "position": "absolute",
      "zIndex": 2,
      "left": 0,
      "top": 0,
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "flexDirection": "column"
    }
  },
  "maskTop": {
    "type": "ViewStyle",
    "description": "Top gradient mask style",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  },
  "maskMiddle": {
    "type": "ViewStyle",
    "description": "Middle area highlight mask style",
    "defaultValue": {
      "borderColor": "theme.border_color_thin",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderBottomWidth": "StyleSheet.hairlineWidth"
    }
  },
  "maskBottom": {
    "type": "ViewStyle",
    "description": "Footer gradient mask style",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  }
}
```

---

# popover Semantic

Source: https://rn.mobile.ant.design/components/popover/semantic.md

# Popover Semantic

## Component Description

After clicking on a control or an area, a Popover menu appears for doing more. If set mask prop, it is recommended to exit by clicking on any of the mask layers.

---

## DOM Structure

```json
[
  {
    "component": "TouchableOpacity"
  },
  {
    "component": "View",
    "style": "content",
    "children": [
      {
        "component": "View",
        "style": "arrow"
      },
      {
        "component": "View",
        "style": "background"
      },
      {
        "component": "ScrollView",
        "children": [
          {
            "component": "TouchableOpacity"
          }
        ]
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "content": {
    "type": "ViewStyle",
    "description": "Popup layer container. The popup layer content area appearance can be controlled via styles.content",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "borderRadius": "theme.radius_sm",
      "padding": 0,
      "elevation": 3
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Popup layer indicator arrow. The arrow appearance can be controlled via styles.arrow",
    "defaultValue": {
      "borderTopColor": "transparent"
    }
  },
  "background": {
    "type": "ViewStyle",
    "description": "Popup layer background mask. The mask layer visual can be controlled via styles.background",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  }
}
```

---

# progress Semantic

Source: https://rn.mobile.ant.design/components/progress/semantic.md

# Progress Semantic

## Component Description

Progress Bar to indicate your task's progress.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View"
    },
    {
      "component": "Animated.View"
    }
  ]
}
```

## Styles Schema

```json
{
  "progressOuter": {
    "type": "ViewStyle",
    "description": "Base style of the outer container, such as background color, size, etc.",
    "defaultValue": {
      "backgroundColor": "theme.border_color_base",
      "flex": 1
    }
  },
  "progressBar": {
    "type": "ViewStyle",
    "description": "Base style of the progress bar fill color and height, etc.",
    "defaultValue": {
      "borderBottomWidth": 4,
      "borderStyle": "solid",
      "borderColor": "theme.brand_primary"
    }
  }
}
```

---

# radio Semantic

Source: https://rn.mobile.ant.design/components/radio/semantic.md

# Radio Semantic

## Component Description

Radio.

---

## DOM Structure

```json
{
  "component": "List.Item",
  "children": [
    {
      "component": "Text"
    }
  ]
}
```

## Styles Schema

```json
{
  "radioItemContent": {
    "type": "TextStyle",
    "description": "Text content style, such as font color, size, etc.",
    "defaultValue": {
      "color": "theme.color_text_base",
      "marginRight": "theme.h_spacing_md",
      "marginLeft": "theme.h_spacing_md"
    }
  },
  "radioItemContentDisable": {
    "type": "TextStyle",
    "description": "Text style when disabled",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

---

# result Semantic

Source: https://rn.mobile.ant.design/components/result/semantic.md

# Result Semantic

## Component Description

Result page contains feedback like illustrations, icons and text.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View"
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Button"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "result": {
    "type": "ViewStyle",
    "description": "Result container layout",
    "defaultValue": {
      "alignItems": "center",
      "paddingVertical": "theme.v_spacing_xl",
      "backgroundColor": "theme.fill_base",
      "borderBottomColor": "theme.border_color_base"
    }
  },
  "imgWrap": {
    "type": "ViewStyle",
    "description": "Icon container positioning and size",
    "defaultValue": {
      "margin": 0
    }
  },
  "img": {
    "type": "ImageStyle",
    "description": "Image style",
    "defaultValue": {
      "width": 60,
      "height": 60
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "Title container layout",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "Title text style",
    "defaultValue": {
      "fontSize": 21,
      "color": "theme.color_text_base"
    }
  },
  "message": {
    "type": "ViewStyle",
    "description": "Information area layout",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "messageText": {
    "type": "TextStyle",
    "description": "Information text style",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_caption"
    }
  },
  "buttonWrap": {
    "type": "ViewStyle",
    "description": "Button container layout",
    "defaultValue": {
      "flexDirection": "row",
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "button": {
    "type": "ViewStyle",
    "description": "Button style",
    "defaultValue": {
      "flex": 1
    }
  }
}
```

---

# search-bar Semantic

Source: https://rn.mobile.ant.design/components/search-bar/semantic.md

# SearchBar Semantic

## Component Description

Normally located below NavBar, the activation status is exited by the Cancel button.

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
    "description": "Text input box, supports style base property pass-through, used for input search content",
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
    "description": "Input box outer container, used for input box layout",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "Overall container, wraps the entire search bar area",
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
    "description": "Cancel button container, conditionally rendered, displayed when showCancelButton or input box is focused",
    "defaultValue": {
      "height": "theme.search_bar_input_height",
      "justifyContent": "center",
      "alignItems": "center"
    }
  },
  "cancelText": {
    "type": "TextStyle",
    "description": "Cancel button text, click to trigger cancel action",
    "defaultValue": {
      "fontSize": "theme.link_button_font_size",
      "color": "theme.color_link",
      "paddingLeft": "theme.h_spacing_lg"
    }
  },
  "search": {
    "type": "TextStyle",
    "description": "Search icon, displays search magnifying glass icon",
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

---

# slider Semantic

Source: https://rn.mobile.ant.design/components/slider/semantic.md

# Slider Semantic

## Component Description

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

---

## DOM Structure

```json
{
  "component": "GestureDetector",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "View"
            },
            {
              "component": "Animated.View"
            },
            {
              "component": "View",
              "children": [
                {
                  "component": "Animated.View"
                }
              ]
            },
            {
              "component": "Animated.View",
              "children": [
                {
                  "component": "View"
                }
              ]
            },
            {
              "component": "Animated.View",
              "children": [
                {
                  "component": "View"
                }
              ]
            }
          ]
        },
        {
          "component": "View",
          "children": [
            {
              "component": "View",
              "children": [
                {
                  "component": "View"
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
  "slider": {
    "type": "ViewStyle",
    "description": "Slider 组件主 container style",
    "defaultValue": {
      "paddingVertical": 5,
      "paddingHorizontal": 14
    }
  },
  "disabled": {
    "type": "ViewStyle",
    "description": "disabled 时叠加 style",
    "defaultValue": {}
  },
  "trackContianer": {
    "type": "ViewStyle",
    "description": "滑轨 container style",
    "defaultValue": {
      "paddingVertical": 8,
      "position": "relative",
      "width": "100%",
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "track": {
    "type": "ViewStyle",
    "description": "Slider track background style",
    "defaultValue": {
      "position": "absolute",
      "width": "100%",
      "zIndex": 1,
      "height": 3,
      "borderRadius": 3,
      "backgroundColor": "theme.fill_grey"
    }
  },
  "fill": {
    "type": "ViewStyle",
    "description": "Fill bar style",
    "defaultValue": {
      "position": "absolute",
      "zIndex": 1,
      "height": 3,
      "borderRadius": 3,
      "backgroundColor": "theme.brand_primary"
    }
  },
  "thumb": {
    "type": "ViewStyle",
    "description": "Handle button style",
    "defaultValue": {
      "zIndex": 3
    }
  },
  "ticks": {
    "type": "ViewStyle",
    "description": "Tick mark container style",
    "defaultValue": {
      "position": "absolute",
      "width": "100%",
      "height": 3,
      "backgroundColor": "transparent",
      "zIndex": 2
    }
  },
  "tick": {
    "type": "ViewStyle",
    "description": "Tick mark default style",
    "defaultValue": {
      "position": "absolute",
      "top": -2,
      "width": 7,
      "height": 7,
      "marginLeft": -3,
      "backgroundColor": "theme.fill_grey",
      "borderRadius": 7
    }
  },
  "tickActive": {
    "type": "ViewStyle",
    "description": "Active state tick mark style",
    "defaultValue": {
      "backgroundColor": "theme.brand_primary"
    }
  },
  "mark": {
    "type": "ViewStyle",
    "description": "Mark container style",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": 11
    }
  },
  "markText": {
    "type": "TextStyle",
    "description": "Mark text style",
    "defaultValue": {
      "transform": "[{ translateX: -theme.font_size_caption_sm / 2 }]",
      "fontSize": "theme.font_size_caption_sm",
      "color": "theme.color_text_paragraph"
    }
  }
}
```

---

# stepper Semantic

Source: https://rn.mobile.ant.design/components/stepper/semantic.md

# Stepper Semantic

## Component Description

- New in `5.2.1`. In addition, all properties of react-native TextInput are supported, eg: **`readOnly`** **`onFocus`** **`onBlur`**

---

## DOM Structure

```json
{
  "component": "Input",
  "style": ["container", "input", "inputDisabled"],
  "children": [
    {
      "component": "TouchableHighlight",
      "children": [
        {
          "component": "Text"
        }
      ]
    },
    {
      "component": "TouchableHighlight",
      "children": [
        {
          "component": "Text"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "inputDisabled": {
    "type": "TextStyle",
    "description": "Input disabled style",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "stepWrap": {
    "type": "ViewStyle",
    "description": "Step button wrapper style",
    "defaultValue": {
      "width": 28,
      "flex": 1,
      "justifyContent": "center",
      "borderRadius": "theme.radius_xs",
      "backgroundColor": "theme.fill_grey"
    }
  },
  "stepText": {
    "type": "TextStyle",
    "description": "Step button text style",
    "defaultValue": {
      "textAlign": "center",
      "fontSize": 20,
      "color": "theme.brand_primary",
      "backgroundColor": "transparent"
    }
  },
  "stepDisabled": {
    "type": "ViewStyle",
    "description": "Step button disabled style",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "disabledStepTextColor": {
    "type": "TextStyle",
    "description": "Disabled step button text color style",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

---

# steps Semantic

Source: https://rn.mobile.ant.design/components/steps/semantic.md

# Steps Semantic

## Component Description

Steps is typically used for displaying the progress of a task, or guiding users through the steps of a complex flow.

---

## DOM Structure

```json
{
  "component": "View",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "children": [
            {
              "component": "Icon"
            }
          ]
        },
        {
          "component": "View"
        },
        {
          "component": "View"
        }
      ]
    },
    {
      "component": "View",
      "children": [
        {
          "component": "Text"
        },
        {
          "component": "Text"
        }
      ]
    }
  ]
}
```

## Styles Schema

```json
{
  "head_default_s": {
    "type": "ViewStyle",
    "description": "Default small step head style",
    "defaultValue": {
      "width": 18,
      "height": 18,
      "backgroundColor": "#ffffff",
      "borderRadius": 18,
      "borderWidth": 2,
      "borderColor": "#108ee9",
      "borderStyle": "solid",
      "overflow": "hidden"
    }
  },
  "head_blue_s": {
    "type": "ViewStyle",
    "description": "Blue small step head style",
    "defaultValue": {
      "borderColor": "#108ee9"
    }
  },
  "head_gray_s": {
    "type": "ViewStyle",
    "description": "Gray small step head style",
    "defaultValue": {
      "borderColor": "#bbbbbb"
    }
  },
  "head_red_s": {
    "type": "ViewStyle",
    "description": "Red small step head style",
    "defaultValue": {
      "borderColor": "#f4333c"
    }
  },
  "icon_s": {
    "type": "TextStyle",
    "description": "Small icon style inside step head",
    "defaultValue": {
      "fontSize": 14
    }
  },
  "head_default_l": {
    "type": "ViewStyle",
    "description": "Default large step head style",
    "defaultValue": {
      "width": 24,
      "height": 24,
      "backgroundColor": "#ffffff",
      "borderRadius": 18,
      "borderWidth": 2,
      "borderColor": "#108ee9",
      "borderStyle": "solid",
      "overflow": "hidden"
    }
  },
  "head_blue_l": {
    "type": "ViewStyle",
    "description": "Blue large step head style",
    "defaultValue": {
      "borderColor": "#108ee9",
      "backgroundColor": "#108ee9"
    }
  },
  "head_gray_l": {
    "type": "ViewStyle",
    "description": "Gray large step head style",
    "defaultValue": {
      "borderColor": "#bbbbbb",
      "backgroundColor": "#bbbbbb"
    }
  },
  "head_red_l": {
    "type": "ViewStyle",
    "description": "Red large step head style",
    "defaultValue": {
      "borderColor": "#f4333c",
      "backgroundColor": "#f4333c"
    }
  },
  "tail_default_l": {
    "type": "ViewStyle",
    "description": "Default large tail line style",
    "defaultValue": {
      "width": 2,
      "height": 30,
      "marginLeft": 11
    }
  },
  "icon_l": {
    "type": "TextStyle",
    "description": "Large icon style inside step head",
    "defaultValue": {
      "fontSize": 20
    }
  },
  "tail_default_s": {
    "type": "ViewStyle",
    "description": "Default small tail line style",
    "defaultValue": {
      "width": 2,
      "flex": 1,
      "marginLeft": "2 * grid"
    }
  },
  "tail_default_s_h": {
    "type": "ViewStyle",
    "description": "Default small horizontal tail line style",
    "defaultValue": {
      "height": 2,
      "width": 50,
      "marginTop": "2 * grid"
    }
  },
  "tail_gray": {
    "type": "ViewStyle",
    "description": "Gray tail line style",
    "defaultValue": {
      "backgroundColor": "#bbbbbb"
    }
  },
  "tail_blue": {
    "type": "ViewStyle",
    "description": "Blue tail line style",
    "defaultValue": {
      "backgroundColor": "#108ee9"
    }
  },
  "tail_error": {
    "type": "ViewStyle",
    "description": "Error tail line style",
    "defaultValue": {
      "backgroundColor": "#f4333c"
    }
  },
  "tail_last": {
    "type": "ViewStyle",
    "description": "Last step tail line style (transparent)",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "content_s": {
    "type": "ViewStyle",
    "description": "Small size content container style",
    "defaultValue": {
      "paddingLeft": 8
    }
  },
  "content_s_h": {
    "type": "ViewStyle",
    "description": "Small size horizontal content container style",
    "defaultValue": {
      "paddingTop": 9
    }
  },
  "content_l": {
    "type": "ViewStyle",
    "description": "Large size content container style",
    "defaultValue": {
      "paddingLeft": 15
    }
  },
  "title_s": {
    "type": "TextStyle",
    "description": "Small size title text style",
    "defaultValue": {
      "fontWeight": "bold",
      "fontSize": 16,
      "paddingBottom": 9,
      "color": "#000000"
    }
  },
  "description_s": {
    "type": "TextStyle",
    "description": "Small size description text style",
    "defaultValue": {
      "fontSize": 12,
      "color": "#000000"
    }
  },
  "title_l": {
    "type": "TextStyle",
    "description": "Large size title text style",
    "defaultValue": {
      "fontWeight": "bold",
      "fontSize": 17,
      "paddingBottom": 9,
      "color": "#000000"
    }
  },
  "description_l": {
    "type": "TextStyle",
    "description": "Large size description text style",
    "defaultValue": {
      "fontSize": 15,
      "color": "#000000"
    }
  }
}
```

---

# swipe-action Semantic

Source: https://rn.mobile.ant.design/components/swipe-action/semantic.md

# SwipeAction Semantic

## Component Description

iOS-style swipeout buttons that appear from behind a component.

---

## DOM Structure

```json
{
  "component": "Swipeable",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "Animated.View",
          "children": [
            {
              "component": "RectButton",
              "style": "actionButton",
              "children": [
                {
                  "component": "Text",
                  "style": "actionText"
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
  "actionButton": {
    "type": "ViewStyle",
    "description": "action button container style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "Action button text style",
    "defaultValue": {
      "color": "theme.color_text_base_inverse",
      "fontSize": "theme.font_size_base",
      "backgroundColor": "transparent",
      "padding": 10
    }
  }
}
```

---

# switch Semantic

Source: https://rn.mobile.ant.design/components/switch/semantic.md

# Switch Semantic

## Component Description

Select between two status, e.g. Select On or Off.

---

## DOM Structure

```json
{
  "component": "Pressable",
  "children": [
    {
      "component": "View",
      "style": [
        "switch",
        "switch_checked",
        "switch_unchecked",
        "switch_checked_disabled",
        "switch_unchecked_disabled"
      ],
      "children": [
        {
          "component": "Animated.View",
          "style": [
            "switch_handle",
            "switch_handle_checked",
            "switch_handle_unchecked",
            "switch_handle_disabled"
          ],
          "children": [
            {
              "component": "RNActivityIndicator"
            }
          ]
        },
        {
          "component": "AnimatedView",
          "style": [
            "switch_inner",
            "switch_inner_checked",
            "switch_inner_unchecked"
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
  "switch": {
    "type": "ViewStyle",
    "description": "开关 track base style",
    "defaultValue": {
      "position": "relative",
      "width": 55,
      "height": 31,
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center",
      "padding": 0,
      "borderRadius": 31
    }
  },
  "switch_inner": {
    "type": "ViewStyle",
    "description": "内 layer container base style",
    "defaultValue": {
      "color": "#fff",
      "fontSize": 12,
      "flex": 1,
      "textAlign": "center",
      "alignItems": "center",
      "justifyContent": "center",
      "zIndex": -1
    }
  },
  "switch_handle": {
    "type": "ViewStyle",
    "description": "手柄 base style",
    "defaultValue": {
      "position": "absolute",
      "width": 27,
      "height": 27,
      "borderRadius": 27,
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "#ffffff",
      "shadowColor": "rgb(0, 35, 11)",
      "shadowOffset": {
        "width": 0,
        "height": 2
      },
      "shadowOpacity": 0.2,
      "shadowRadius": 10,
      "elevation": 10
    }
  },
  "switch_checked": {
    "type": "ViewStyle",
    "description": "Switch track style when active",
    "defaultValue": {
      "borderColor": "theme.brand_primary",
      "backgroundColor": "theme.brand_primary"
    }
  },
  "switch_unchecked": {
    "type": "ViewStyle",
    "description": "Switch track style when not active",
    "defaultValue": {
      "borderColor": "theme.switch_unchecked",
      "backgroundColor": "theme.switch_unchecked"
    }
  },
  "switch_inner_checked": {
    "type": "ViewStyle",
    "description": "active state 下内 layer 变化 style",
    "defaultValue": {
      "marginLeft": 7,
      "marginRight": 27
    }
  },
  "switch_inner_unchecked": {
    "type": "ViewStyle",
    "description": "未 active state 下内 layer 变化 style",
    "defaultValue": {
      "marginLeft": 27,
      "marginRight": 7
    }
  },
  "switch_handle_checked": {
    "type": "ViewStyle",
    "description": "手柄 active state style",
    "defaultValue": {
      "right": 0
    }
  },
  "switch_handle_unchecked": {
    "type": "ViewStyle",
    "description": "手柄未 active state style",
    "defaultValue": {
      "left": 0
    }
  },
  "switch_checked_disabled": {
    "type": "ViewStyle",
    "description": "active 且 disabled state track style",
    "defaultValue": {
      "borderColor": "#108ee966",
      "backgroundColor": "#108ee966"
    }
  },
  "switch_unchecked_disabled": {
    "type": "ViewStyle",
    "description": "未 active 且 disabled state track style",
    "defaultValue": {
      "borderColor": "#cccccc66",
      "backgroundColor": "#cccccc66"
    }
  },
  "switch_handle_disabled": {
    "type": "ViewStyle",
    "description": "手柄 disabled state style",
    "defaultValue": {}
  }
}
```

---

# tab-bar Semantic

Source: https://rn.mobile.ant.design/components/tab-bar/semantic.md

# TabBar Semantic

## Component Description

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

---

## DOM Structure

```json
{
  "component": "SafeAreaView",
  "children": [
    {
      "component": "View",
      "style": "tabbar",
      "children": [
        {
          "component": "View",
          "style": "content",
          "children": [
            {
              "component": "View",
              "style": ["contentItem", "contentItemSelected"]
            }
          ]
        },
        {
          "component": "View",
          "style": "tabs",
          "children": [
            {
              "component": "TouchableWithoutFeedback",
              "children": [
                {
                  "component": "View",
                  "style": "barItem",
                  "children": [
                    {
                      "component": "View",
                      "children": [
                        {
                          "component": "ImageOrIcon",
                          "style": "barIcon"
                        },
                        {
                          "component": "View",
                          "style": "badge",
                          "children": [
                            {
                              "component": "Text",
                              "style": "badgeText"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "component": "Text",
                      "style": "barItemTitle"
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
  "tabbar": {
    "type": "ViewStyle",
    "description": "TabBar 主 container style",
    "defaultValue": {
      "flex": 1
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "content 区 container style",
    "defaultValue": {
      "flex": 1
    }
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "Footer label bar container style",
    "defaultValue": {
      "height": "theme.tab_bar_height",
      "borderTopWidth": "theme.border_width_md",
      "borderColor": "theme.border_color_base",
      "borderStyle": "solid",
      "flexDirection": "row"
    }
  },
  "barItem": {
    "type": "ViewStyle",
    "description": "Label item default style",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "barIcon": {
    "type": "ImageStyle",
    "description": "Icon style",
    "defaultValue": {
      "width": 28,
      "height": 28,
      "marginTop": 2
    }
  },
  "barItemSelected": {
    "type": "ViewStyle",
    "description": "Active label item style, dynamic decoration",
    "defaultValue": {}
  },
  "barItemTitle": {
    "type": "TextStyle",
    "description": "Label text style",
    "defaultValue": {
      "fontSize": "theme.font_size_icontext",
      "marginTop": 2
    }
  },
  "contentItem": {
    "type": "ViewStyle",
    "description": "Content item style",
    "defaultValue": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "right": 0,
      "bottom": 0,
      "backgroundColor": "white",
      "height": 0
    }
  },
  "contentItemSelected": {
    "type": "ViewStyle",
    "description": "Active content item extra style",
    "defaultValue": {
      "height": "undefined"
    }
  },
  "badge": {
    "type": "ViewStyle",
    "description": "Badge background style",
    "defaultValue": {
      "minWidth": 20,
      "height": 20,
      "borderRadius": 10,
      "backgroundColor": "theme.brand_important",
      "position": "absolute",
      "top": 0,
      "left": 20,
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "badgeText": {
    "type": "TextStyle",
    "description": "Badge text style",
    "defaultValue": {
      "textAlign": "center",
      "color": "white"
    }
  }
}
```

---

# tabs Semantic

Source: https://rn.mobile.ant.design/components/tabs/semantic.md

# Tabs Semantic

## Component Description

A `Tabs` is used to allow users to switch between different views.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "View",
      "children": [
        {
          "component": "View",
          "style": "container",
          "children": [
            {
              "component": "ScrollView",
              "children": [
                {
                  "component": "View",
                  "style": "tabs",
                  "children": [
                    {
                      "component": "TouchableOpacity",
                      "children": [
                        {
                          "component": "View",
                          "style": "tab",
                          "children": [
                            {
                              "component": "Text",
                              "style": "textStyle"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "component": "Animated.View",
                      "style": "underline"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Carousel",
      "children": [
        {
          "component": "View"
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
    "description": "Overall container view that holds the entire Tabs component",
    "defaultValue": {}
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "Container for tab labels, holding all label items and underline",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "backgroundColor": "#ffffff",
      "justifyContent": "space-around",
      "shadowRadius": 0,
      "shadowOpacity": 0,
      "elevation": 0
    }
  },
  "tab": {
    "type": "ViewStyle",
    "description": "Label base layout style",
    "defaultValue": {
      "height": 42,
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 0,
      "flexDirection": "row"
    }
  },
  "underline": {
    "type": "ViewStyle",
    "description": "Underline base style",
    "defaultValue": {
      "height": 2,
      "backgroundColor": "#108ee9"
    }
  },
  "textStyle": {
    "type": "TextStyle",
    "description": "Text base style",
    "defaultValue": {
      "fontSize": 15
    }
  }
}
```

---

# tag Semantic

Source: https://rn.mobile.ant.design/components/tag/semantic.md

# Tag Semantic

## Component Description

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "tag",
  "children": [
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "style": [
            "wrap",
            "normalWrap",
            "wrapSmall",
            "activeWrap",
            "disabledWrap"
          ],
          "children": [
            {
              "component": "Text",
              "style": [
                "text",
                "textSmall",
                "normalText",
                "activeText",
                "disabledText"
              ]
            }
          ]
        }
      ]
    },
    {
      "component": "Icon",
      "style": "close"
    }
  ]
}
```

## Styles Schema

```json
{
  "tag": {
    "type": "ViewStyle",
    "description": "Tag root container style",
    "defaultValue": {
      "position": "relative",
      "flexDirection": "row",
      "overflow": "visible"
    }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "Tag default outer container style",
    "defaultValue": {
      "height": 25,
      "justifyContent": "center",
      "borderRadius": 3,
      "borderWidth": 0.5,
      "borderStyle": "solid",
      "paddingVertical": 0,
      "paddingHorizontal": 15
    }
  },
  "wrapSmall": {
    "type": "ViewStyle",
    "description": "Small size tag container style (dynamically applied)",
    "defaultValue": {
      "height": "theme.tag_height_sm",
      "paddingVertical": 0,
      "paddingHorizontal": 5
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "Tag text base style",
    "defaultValue": {
      "fontSize": 12,
      "textAlign": "center"
    }
  },
  "textSmall": {
    "type": "TextStyle",
    "description": "Small size tag text style (dynamically applied)",
    "defaultValue": {
      "fontSize": 10
    }
  },
  "normalWrap": {
    "type": "ViewStyle",
    "description": "Non-disabled and non-active tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#dddddd"
    }
  },
  "normalText": {
    "type": "TextStyle",
    "description": "Non-disabled and non-active tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#888888"
    }
  },
  "activeWrap": {
    "type": "ViewStyle",
    "description": "Active and non-disabled tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#108ee9"
    }
  },
  "activeText": {
    "type": "TextStyle",
    "description": "Active and non-disabled tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "disabledWrap": {
    "type": "ViewStyle",
    "description": "Disabled state tag container style (dynamically applied)",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "borderColor": "#dddddd"
    }
  },
  "disabledText": {
    "type": "TextStyle",
    "description": "Disabled state tag text style (dynamically applied)",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "close": {
    "type": "ViewStyle",
    "description": "Close icon style",
    "defaultValue": {
      "position": "absolute",
      "top": -6,
      "left": -6,
      "color": "#bbbbbb",
      "backgroundColor": "transparent",
      "borderRadius": 999,
      "fontSize": 16
    }
  }
}
```

---

# textarea-item Semantic

Source: https://rn.mobile.ant.design/components/textarea-item/semantic.md

# TextareaItem Semantic

## Component Description

A foundational component for inputting multi-line text into the app via a keyboard.

---

## DOM Structure

```json
{
  "component": "View",
  "style": "container",
  "children": [
    {
      "component": "TextInput",
      "style": "input"
    },
    {
      "component": "TouchableWithoutFeedback",
      "children": [
        {
          "component": "View",
          "style": "errorIcon",
          "children": [
            {
              "component": "Icon"
            }
          ]
        }
      ]
    },
    {
      "component": "View",
      "style": "count",
      "children": [
        {
          "component": "Text",
          "style": "countText"
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
    "description": "Container overall style",
    "defaultValue": {
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "Text input field style",
    "defaultValue": {
      "paddingHorizontal": 8,
      "backgroundColor": "#ffffff",
      "fontSize": 17,
      "lineHeight": "Math.round(1.3 * theme.font_size_heading)",
      "textAlignVertical": "top"
    }
  },
  "icon": {
    "type": "ViewStyle",
    "description": "Icon style",
    "defaultValue": {
      "position": "absolute",
      "top": 8,
      "width": 18,
      "height": 18
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "Error icon container style",
    "defaultValue": {
      "position": "absolute",
      "right": 18,
      "top": 12
    }
  },
  "count": {
    "type": "ViewStyle",
    "description": "Character count container style",
    "defaultValue": {
      "position": "absolute",
      "right": 8,
      "bottom": 8
    }
  },
  "countText": {
    "type": "TextStyle",
    "description": "Character count text style",
    "defaultValue": {}
  }
}
```

---

# toast Semantic

Source: https://rn.mobile.ant.design/components/toast/semantic.md

# Toast Semantic

## Component Description

A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.

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
    "description": "Top layer positioning container, controls modal position (top/bottom/center) and overall container style",
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
    "description": "Inner container, background layer style",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "innerWrap": {
    "type": "ViewStyle",
    "description": "Content wrapper container, selects iconToast or textToast style based on whether there is an icon",
    "defaultValue": {
      "alignItems": "center",
      "backgroundColor": "rgba(0, 0, 0, .8)",
      "minWidth": 100
    }
  },
  "iconToast": {
    "type": "ViewStyle",
    "description": "Icon toast style",
    "defaultValue": {
      "borderRadius": 7,
      "padding": 15
    }
  },
  "textToast": {
    "type": "ViewStyle",
    "description": "Text toast style",
    "defaultValue": {
      "borderRadius": 3,
      "paddingVertical": 9,
      "paddingHorizontal": 15
    }
  },
  "content": {
    "type": "TextStyle",
    "description": "Content style",
    "defaultValue": {
      "color": "#ffffff",
      "fontSize": 15
    }
  },
  "image": {
    "type": "TextStyle",
    "description": "Image style",
    "defaultValue": {
      "marginBottom": 3
    }
  },
  "centering": {
    "type": "ViewStyle",
    "description": "Centering style",
    "defaultValue": {
      "alignItems": "center",
      "justifyContent": "center",
      "padding": 9
    }
  }
}
```

---

# tooltip Semantic

Source: https://rn.mobile.ant.design/components/tooltip/semantic.md

# Tooltip Semantic

## Component Description

After clicking on a control or an area, a Tooltip menu appears for doing more. If set mask prop, it is recommended to exit by clicking on any of the mask layers.

---

## DOM Structure

```json
[
  {
    "component": "Wrapper"
  },
  {
    "component": "View",
    "style": "tooltip",
    "children": [
      {
        "component": "View",
        "style": "arrow"
      },
      {
        "component": "AntmView",
        "style": "tooltipText"
      }
    ]
  }
]
```

## Styles Schema

```json
{
  "tooltip": {
    "type": "ViewStyle",
    "description": "Main container style, defines layout, background, etc.",
    "defaultValue": {
      "zIndex": 999,
      "backgroundColor": "mode === 'dark' ? theme.tooltip_dark : theme.fill_base",
      "borderRadius": 8,
      "shadowColor": "rgba(51, 51, 51, 1)",
      "shadowOffset": {
        "width": 1,
        "height": 1
      },
      "shadowOpacity": 0.2,
      "shadowRadius": 12,
      "elevation": 12,
      "minWidth": 32,
      "paddingVertical": 8,
      "paddingHorizontal": 12
    }
  },
  "tooltipText": {
    "type": "TextStyle",
    "description": "Content text style, controls font color, size, etc.",
    "defaultValue": {
      "color": "mode === 'dark' ? '#ffffff' : theme.color_text_base"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "Arrow style, includes size, color, and rotation (dynamically applied)",
    "defaultValue": {
      "width": 0,
      "height": 0,
      "borderRightColor": "transparent",
      "borderBottomColor": "transparent",
      "borderLeftColor": "transparent",
      "borderStyle": "solid",
      "borderWidth": 8,
      "position": "absolute"
    }
  }
}
```

---

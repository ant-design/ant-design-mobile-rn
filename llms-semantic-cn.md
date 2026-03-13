# Ant Design Mobile RN 组件语义化描述

所有组件语义化描述的聚合文档。

> 共 34 个组件包含语义化描述

# accordion Semantic

Source: https://rn.mobile.ant.design/components/accordion-cn/semantic.md

# Accordion Semantic

## Component Description

可以折叠/展开的内容区域。

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
    "description": "容器，包裹整个折叠面板，布局外层容器",
    "defaultValue": {
      "borderTopWidth": 0.5,
      "borderTopColor": "#dddddd"
    }
  },
  "header": {
    "type": "ViewStyle",
    "description": "折叠面板头部，每个面板项的头部区域",
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
    "type": "TextStyle",
    "description": "箭头图标容器，显示向上或向下箭头",
    "defaultValue": {
      "color": "#cccccc"
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "头部内容的包裹容器，若 header 不是 React 元素，则显示文本内容用",
    "defaultValue": {
      "flex": 1,
      "height": 44,
      "alignItems": "center",
      "flexDirection": "row"
    }
  },
  "headerText": {
    "type": "TextStyle",
    "description": "头部文字内容",
    "defaultValue": {
      "color": "#000000",
      "fontSize": 17
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "折叠面板内容区域",
    "defaultValue": {
      "paddingVertical": 9,
      "paddingHorizontal": 8,
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "contentText": {
    "type": "TextStyle",
    "description": "折叠内容文本",
    "defaultValue": {
      "fontSize": 15,
      "color": "#333333"
    }
  }
}
```

---

# action-sheet Semantic

Source: https://rn.mobile.ant.design/components/action-sheet-cn/semantic.md

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

---

# activity-indicator Semantic

Source: https://rn.mobile.ant.design/components/activity-indicator-cn/semantic.md

# ActivityIndicator Semantic

## Component Description

活动指示器。 表明某个任务正在进行中。

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
    "description": "容器布局样式",
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
    "description": "内层容器样式",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "transparent"
    }
  },
  "wrapper": {
    "type": "ViewStyle",
    "description": "包裹加载器和文字区域",
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
    "description": "spinner 文字样式",
    "defaultValue": {
      "color": "#000000",
      "fontSize": 14,
      "marginLeft": 8
    }
  },
  "toast": {
    "type": "TextStyle",
    "description": "toast 文字样式",
    "defaultValue": {
      "color": "#ffffff",
      "fontSize": 14,
      "marginTop": 6
    }
  },
  "spinner": {
    "type": "ViewStyle",
    "description": "普通模式容器样式",
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

Source: https://rn.mobile.ant.design/components/badge-cn/semantic.md

# Badge Semantic

## Component Description

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

---

## DOM Structure

```json
{
  "component": "View",
  "style": "wrap",
  "children": [
    {
      "component": "View",
      "style": "textCornerWrap",
      "children": [
        {
          "component": "children"
        },
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
    "description": "包裹层样式",
    "defaultValue": {
      "flexDirection": "row"
    }
  },
  "textCornerWrap": {
    "type": "ViewStyle",
    "description": "内容包裹容器",
    "defaultValue": {
      "overflow": "hidden"
    }
  },
  "dot": {
    "type": "ViewStyle",
    "description": "点徽标容器",
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
    "description": "大尺寸点徽标容器",
    "defaultValue": {
      "width": "4 * grid",
      "height": "4 * grid",
      "borderRadius": "2 * grid"
    }
  },
  "textDom": {
    "type": "ViewStyle",
    "description": "普通文本徽标容器",
    "defaultValue": {
      "paddingVertical": "0.5 * grid",
      "paddingHorizontal": "(Platform.OS === 'ios' ? 1.5 : 2) * grid",
      "backgroundColor": "#ff5b05",
      "borderRadius": "4 * theme.radius_sm",
      "borderStyle": "solid",
      "position": "absolute",
      "top": -10,
      "right": -15
    }
  },
  "textDomlarge": {
    "type": "ViewStyle",
    "description": "大尺寸文本徽标容器",
    "defaultValue": {}
  },
  "textCorner": {
    "type": "ViewStyle",
    "description": "角标容器",
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
    "description": "大尺寸角标容器",
    "defaultValue": {
      "width": "26 * grid",
      "top": "3 * grid"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "文本样式",
    "defaultValue": {
      "color": "#ffffff",
      "textAlign": "center"
    }
  }
}
```

---

# button Semantic

Source: https://rn.mobile.ant.design/components/button-cn/semantic.md

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

---

# card Semantic

Source: https://rn.mobile.ant.design/components/card-cn/semantic.md

# Card Semantic

## Component Description

用于组织信息和操作，通常也作为详细信息的入口。

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
    "description": "卡片基础容器样式",
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
    "defaultValue": {
      "borderRadius": 0,
      "borderLeftWidth": 0,
      "borderRightWidth": 0
    }
  },
  "headerWrap": {
    "type": "ViewStyle",
    "description": "头部容器样式",
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
    "description": "标题容器样式",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "row",
      "alignItems": "center"
    }
  },
  "headerImage": {
    "type": "ImageStyle",
    "description": "缩略图图片样式",
    "defaultValue": {
      "marginRight": 5,
    }
  },
  "headerContentWrap": {
    "type": "ViewStyle",
    "description": "标题内容包装器（当标题为 JSX 元素）",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerContent": {
    "type": "TextStyle",
    "description": "标题文本样式（当标题为字符串或文本）",
    "defaultValue": {
      "color": "#000000",
      "fontSize": 17,
      "flex": 1
    }
  },
  "headerExtraWrap": {
    "type": "ViewStyle",
    "description": "额外内容包装器（当额外内容为 JSX 元素）",
    "defaultValue": {
      "flex": 1
    }
  },
  "headerExtra": {
    "type": "TextStyle",
    "description": "额外内容文本样式（当额外内容为文本）",
    "defaultValue": {
      "flex": 1,
      "fontSize": 17,
      "color": "#888888",
      "textAlign": "right"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "主体容器样式",
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
    "description": "底部容器样式",
    "defaultValue": {
      "flexDirection": "row",
      "paddingHorizontal": 15
    }
  },
  "footerContent": {
    "type": "TextStyle",
    "description": "底部内容文本样式",
    "defaultValue": {
      "flex": 1,
      "fontSize": 14,
      "color": "#888888"
    }
  },
  "footerExtra": {
    "type": "TextStyle",
    "description": "底部额外文本样式",
    "defaultValue": {
      "textAlign": "right",
      "fontSize": 14,
      "color": "#888888"
    }
  }
}
```

---

# carousel Semantic

Source: https://rn.mobile.ant.design/components/carousel-cn/semantic.md

# Carousel Semantic

## Component Description

走马灯，轮播图

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
      "style": [
        "pagination",
        "paginationX",
        "paginationY"
      ],
      "children": [
        {
          "component": "View",
          "children": [
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
  ]
}
```

## Styles Schema

```json
{"pagination": {"type": "ViewStyle", "description": "分页指示器容器样式", "defaultValue": {"position": "absolute", "alignItems": "center"}}, "paginationX": {"type": "ViewStyle", "description": "水平分页指示器样式", "defaultValue": {"bottom": 10, "left": 0, "right": 0}}, "paginationY": {"type": "ViewStyle", "description": "垂直分页指示器样式", "defaultValue": {"right": 10, "top": 0, "bottom": 0}}, "pointStyle": {"type": "ViewStyle", "description": "轮播点样式", "defaultValue": {"width": 8, "height": 8, "borderRadius": 8, "backgroundColor": "#cccccc"}}, "pointActiveStyle": {"type": "ViewStyle", "description": "轮播点激活样式", "defaultValue": {"backgroundColor": "#888"}}, "spaceStyle": {"type": "ViewStyle", "description": "轮播点间距样式", "defaultValue": {"marginHorizontal": 5 / 2, "marginVertical": 6 / 2}}, "wrapperStyle": {"type": "ViewStyle", "description": "滚动容器样式", "defaultValue": {"overflow": "hidden"}}}
```

---

# checkbox Semantic

Source: https://rn.mobile.ant.design/components/checkbox-cn/semantic.md

# Checkbox Semantic

## Component Description

属性 | 说明 | 类型 | 默认值 ----|-----|------|------

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
    "description": "容器总体样式，支持 style 基础属性透传",
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
    "description": "波纹动画外层",
    "defaultValue": {
      "width": 20,
      "height": 20,
      "padding": 2,
      "overflow": "hidden"
    }
  },
  "checkbox": {
    "type": "ViewStyle",
    "description": "复选框样式",
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
    "description": "复选框选中样式",
    "defaultValue": { "borderColor": "#108ee9" }
  },
  "checkbox_disabled": {
    "type": "ViewStyle",
    "description": "复选框禁用样式",
    "defaultValue": {
      "borderColor": "#b9b9b9",
      "backgroundColor": "#f5f5f5"
    }
  },
  "checkbox_inner": {
    "type": "ViewStyle",
    "description": "复选框内部样式",
    "defaultValue": {
      "width": "103%",
      "height": "103%",
      "backgroundColor": "#108ee9"
    }
  },
  "checkbox_inner_disabled": {
    "type": "ViewStyle",
    "description": "复选框内部禁用样式",
    "defaultValue": { "backgroundColor": "#f5f5f5" }
  },
  "checkbox_inner_before": {
    "type": "ViewStyle",
    "description": "复选框内部前置样式"
  },
  "checkbox_inner_before_disabled": {
    "type": "ViewStyle",
    "description": "复选框内部前置禁用样式",
    "defaultValue": { "borderColor": "#b9b9b9" }
  },
  "checkbox_label": {
    "type": "ViewStyle",
    "description": "复选框标签样式",
    "defaultValue": {
      "backgroundColor": "transparent",
      "marginRight": 8,
      "marginLeft": 8,
      "color": "#000000"
    }
  },
  "checkbox_label_disabled": {
    "type": "ViewStyle",
    "description": "复选框标签禁用样式",
    "defaultValue": { "color": "#bbbbbb" }
  },
  "checkbox_inner_indeterminate": {
    "type": "ViewStyle",
    "description": "复选框半选样式",
    "defaultValue": { "backgroundColor": "transparent" }
  },
  "checkbox_inner_before_indeterminate": {
    "type": "ViewStyle",
    "description": "复选框内部前置半选样式",
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

Source: https://rn.mobile.ant.design/components/form-cn/semantic.md

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

---

# grid Semantic

Source: https://rn.mobile.ant.design/components/grid-cn/semantic.md

# Grid Semantic

## Component Description

在水平和垂直方向，将布局切分成若干等大的区块。

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
    "description": "灰色边框盒子，用于分隔行",
    "defaultValue": { "borderColor": "#dddddd" }
  },
  "icon": {
    "type": "ImageStyle",
    "description": "图片样式，尺寸及颜色",
    "defaultValue": {
      "width": "22",
      "height": "22"
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "文字样式",
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

Source: https://rn.mobile.ant.design/components/input-cn/semantic.md

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

---

# input-item Semantic

Source: https://rn.mobile.ant.design/components/input-item-cn/semantic.md

# InputItem Semantic

## Component Description

用于接受单行文本。

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
      "style": [
        "input",
        "inputErrorColor",
        "inputDisabled"
      ]
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
    "description": "容器整体样式，包含边框样式",
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
    "description": "标签文本样式，宽度可根据 labelNumber 变量调整",
    "defaultValue": {
      "marginRight": "5",
      "textAlignVertical": "center",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "输入框文本样式",
    "defaultValue": {
      "flex": 1,
      "backgroundColor": "transparent",
      "fontSize": "17",
      "color": "#000000"
    }
  },
  "inputDisabled": {
    "type": "TextStyle",
    "description": "输入框禁用样式",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "color": "#bbbbbb"
    }
  },
  "inputErrorColor": {
    "type": "TextStyle",
    "description": "输入框错误颜色样式",
    "defaultValue": {
      "color": "#f50"
    }
  },
  "clear": {
    "type": "ViewStyle",
    "description": "清除按钮区域样式",
    "defaultValue": {
      "backgroundColor": "#cccccc",
      "borderRadius": 15,
      "padding": 2
    }
  },
  "extra": {
    "type": "TextStyle",
    "description": "额外说明文字样式",
    "defaultValue": {
      "marginLeft": "5",
      "fontSize": "15",
      "color": "#888888"
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "错误图标容器样式",
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

Source: https://rn.mobile.ant.design/components/list-cn/semantic.md

# List Semantic

## Component Description

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

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
    "description": "整体列表容器区域，包裹整个列表内容",
    "defaultValue": { "backgroundColor": "#f5f5f9" }
  },
  "Header": {
    "type": "TextStyle",
    "description": "列表头部文字样式",
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
    "description": "列表尾部文字样式",
    "defaultValue": {
      "fontSize": "14",
      "color": "#888888",
      "paddingHorizontal": "15",
      "paddingVertical": "9"
    }
  },
  "Body": {
    "type": "ViewStyle",
    "description": "列表主体内容区域，包含所有子元素",
    "defaultValue": {
      "position": "relative",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderTopColor": "#eeeeee"
    }
  },
  "BodyBottomLine": {
    "type": "ViewStyle",
    "description": "列表主体底部分割线",
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
    "description": "按下列表项颜色样式",
    "defaultValue": { "backgroundColor": "#dddddd" }
  },
  "Item": {
    "type": "ViewStyle",
    "description": "一般由 List.Item 负责渲染，这里以占位示例展示",
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
    "description": "内容区，显示主要文本和额外信息",
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
    "description": "左侧缩略图区域",
    "defaultValue": {
      "width": "22",
      "height": "22",
      "marginRight": "15"
    }
  },
  "Content": {
    "type": "TextStyle",
    "description": "主内容文本",
    "defaultValue": {
      "color": "#000000",
      "fontSize": "17",
      "textAlignVertical": "center",
      "flex": 1
    }
  },
  "Extra": {
    "type": "TextStyle",
    "description": "额外内容文本",
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
    "description": "箭头图标",
    "defaultValue": {
      "marginLeft": "8",
      "marginTop": "3"
    }
  },
  "ArrowV": {
    "type": "TextStyle",
    "description": "或竖直箭头样式",
    "defaultValue": { "marginLeft": "8" }
  },
  "multipleLine": {
    "type": "ViewStyle",
    "description": "多行样式",
    "defaultValue": { "paddingVertical": "6" }
  },
  "multipleThumb": {
    "type": "ImageStyle",
    "description": "多行缩略图样式",
    "defaultValue": {
      "width": "36",
      "height": "36"
    }
  },
  "Brief": {
    "type": "ViewStyle",
    "description": "Brief样式",
    "defaultValue": { "minHeight": "10" }
  },
  "BriefText": {
    "type": "TextStyle",
    "description": "BriefText样式",
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

Source: https://rn.mobile.ant.design/components/modal-cn/semantic.md

# Modal Semantic

## Component Description

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

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
    "description": "遮罩层容器，屏幕全屏，悬浮遮罩",
    "defaultValue": { "zIndex": "999" }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "遮罩层包裹容器",
    "defaultValue": {
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundColor": "transparent"
    }
  },
  "popupContainer": {
    "type": "ViewStyle",
    "description": "弹出容器样式",
    "defaultValue": {}
  },
  "innerContainer": {
    "type": "ViewStyle",
    "description": "对话框内容包裹容器，对于popup模式应用：popupContainer、popupSlideUp、popupSlideDown 动态样式",
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
    "description": "向上滑动弹出样式",
    "defaultValue": {
      "position": "absolute",
      "left": 0,
      "right": 0,
      "bottom": 0
    }
  },
  "popupSlideDown": {
    "type": "ViewStyle",
    "description": "向下滑动弹出样式",
    "defaultValue": {}
  },
  "footer": {
    "type": "ViewStyle",
    "description": "底部按钮区域，footer区域",
    "defaultValue": {}
  },
  "header": {
    "type": "TextStyle",
    "description": "头部标题区域，显示标题文本",
    "defaultValue": {
      "fontSize": "18",
      "color": "#000000",
      "textAlign": "center",
      "paddingHorizontal": "15"
    }
  },
  "body": {
    "type": "ViewStyle",
    "description": "内容区域，包裹 children 视图，支持 body 和 bodyStyle 透传",
    "defaultValue": {
      "paddingTop": 0,
      "paddingBottom": "15",
      "paddingHorizontal": "15"
    }
  },
  "maskClosable": {
    "type": "ViewStyle",
    "description": "遮罩可关闭样式",
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
    "description": "关闭按钮区域（条件渲染，当 closable 为 true）",
    "defaultValue": {
      "position": "absolute",
      "top": "21",
      "left": "15"
    }
  },
  "close": {
    "type": "TextStyle",
    "description": "关闭样式",
    "defaultValue": {
      "fontSize": 40,
      "fontWeight": "200",
      "color": "#bcbcbc",
      "lineHeight": 30
    }
  },
  "buttonGroupH": {
    "type": "ViewStyle",
    "description": "水平按钮组样式",
    "defaultValue": { "flexGrow": 1, "flexDirection": "row" }
  },
  "buttonGroupV": {
    "type": "ViewStyle",
    "description": "垂直按钮组样式",
    "defaultValue": { "flexGrow": 1, "flexDirection": "column" }
  },
  "buttonWrapH": {
    "type": "ViewStyle",
    "description": "水平按钮包裹样式",
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
    "description": "垂直按钮包裹样式",
    "defaultValue": {
      "flexGrow": 1,
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderColor": "#dddddd",
      "paddingVertical": 11
    }
  },
  "buttonText": {
    "type": "TextStyle",
    "description": "按钮文本样式",
    "defaultValue": {
      "textAlign": "center",
      "color": "#108ee9",
      "fontSize": "18",
      "backgroundColor": "transparent"
    }
  },
  "operationContainer": {
    "type": "ViewStyle",
    "description": "操作容器样式",
    "defaultValue": { "paddingTop": 0 }
  },
  "operationBody": {
    "type": "ViewStyle",
    "description": "操作主体样式",
    "defaultValue": { "paddingBottom": 0, "paddingHorizontal": 0 }
  },
  "buttonTextOperation": {
    "type": "TextStyle",
    "description": "操作按钮文本样式",
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

Source: https://rn.mobile.ant.design/components/notice-bar-cn/semantic.md

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

---

# pagination Semantic

Source: https://rn.mobile.ant.design/components/pagination-cn/semantic.md

# Pagination Semantic

## Component Description

分隔长列表，每次只加载一个页面。

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
          "style": ["pointStyle", "spaceStyle"]
        },
        {
          "component": "View",
          "style": ["pointStyle", "spaceStyle", "pointActiveStyle"]
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
    "description": "整体容器样式",
    "defaultValue": {
      "justifyContent": "center"
    }
  },
  "numberStyle": {
    "type": "ViewStyle",
    "description": "模式为 'number' 时，显示当前页数和总页数区域",
    "defaultValue": {
      "flexDirection": "row",
      "justifyContent": "center"
    }
  },
  "totalStyle": {
    "type": "TextStyle",
    "description": "总页数显示",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_text_base"
    }
  },
  "activeTextStyle": {
    "type": "TextStyle",
    "description": "高亮当前页数",
    "defaultValue": {
      "fontSize": 18,
      "color": "theme.color_link"
    }
  },
  "indicatorStyle": {
    "type": "ViewStyle",
    "description": "模式为 'pointer' 时，显示圆点指示器",
    "defaultValue": {
      "flexDirection": "row",
      "alignSelf": "center"
    }
  },
  "pointStyle": {
    "type": "ViewStyle",
    "description": "单个圆点",
    "defaultValue": {
      "width": 8,
      "height": 8,
      "borderRadius": 8,
      "backgroundColor": "theme.color_icon_base"
    }
  },
  "pointActiveStyle": {
    "type": "ViewStyle",
    "description": "当前激活圆点样式",
    "defaultValue": {
      "backgroundColor": "#888"
    }
  },
  "spaceStyle": {
    "type": "ViewStyle",
    "description": "圆点间距样式",
    "defaultValue": {
      "marginHorizontal": "theme.h_spacing_sm / 2",
      "marginVertical": "theme.v_spacing_sm / 2"
    }
  }
}
```

---

# picker Semantic

Source: https://rn.mobile.ant.design/components/picker-cn/semantic.md

# Picker Semantic

## Component Description

在一组预设数据中进行选择，e.g. 省市区选择。

---

## DOM Structure

```json
{
  "component": "Modal",
  "style": [
    "modal",
    "container"
  ],
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
              "style": [
                "actionText",
                "dismissText"
              ]
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
              "style": [
                "actionText",
                "okText"
              ]
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
    "description": "弹出层包装样式（定位、背景遮罩等）",
    "defaultValue": {
      "flex": 1,
      "flexDirection": "column",
      "justifyContent": "flex-end"
    }
  },
  "container": {
    "type": "ViewStyle",
    "description": "弹出层内容容器（布局与背景）",
    "defaultValue": {}
  },
  "header": {
    "type": "ViewStyle",
    "description": "头部容器布局",
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
    "description": "按钮位置与尺寸",
    "defaultValue": {
      "height": "theme.picker_header_height",
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "按钮文字基础样式",
    "defaultValue": {
      "color": "theme.brand_primary",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "title": {
    "type": "TextStyle",
    "description": "标题文字样式",
    "defaultValue": {
      "color": "theme.color_text_caption",
      "fontSize": "theme.font_size_heading",
      "textAlign": "center"
    }
  },
  "okText": {
    "type": "TextStyle",
    "description": "确定按钮文字差异化样式",
    "defaultValue": {}
  },
  "dismissText": {
    "type": "TextStyle",
    "description": "取消按钮文字差异化样式",
    "defaultValue": {}
  }
}
```

---

# picker-view Semantic

Source: https://rn.mobile.ant.design/components/picker-view-cn/semantic.md

# PickerView Semantic

## Component Description

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

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
    "description": "容器整体布局样式",
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
    "description": "轮子区域包裹样式",
    "defaultValue": {
      "zIndex": 1,
      "display": "flex",
      "flexDirection": "row"
    }
  },
  "itemWrap": {
    "type": "ViewStyle",
    "description": "单项包裹样式",
    "defaultValue": {
      "overflow": "hidden",
      "justifyContent": "center",
      "height": "theme.picker_item_height",
      "paddingHorizontal": "theme.h_spacing_sm"
    }
  },
  "itemStyle": {
    "type": "TextStyle",
    "description": "单个选项容器，固定高度，包裹文本",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_base",
      "textAlign": "center",
      "includeFontPadding": "false"
    }
  },
  "itemActiveStyle": {
    "type": "TextStyle",
    "description": "激活项样式",
    "defaultValue": {}
  },
  "mask": {
    "type": "ViewStyle",
    "description": "遮罩层容器样式",
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
    "description": "顶部渐变遮罩样式",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  },
  "maskMiddle": {
    "type": "ViewStyle",
    "description": "中间区域高亮遮罩样式",
    "defaultValue": {
      "borderColor": "theme.border_color_thin",
      "borderTopWidth": "StyleSheet.hairlineWidth",
      "borderBottomWidth": "StyleSheet.hairlineWidth"
    }
  },
  "maskBottom": {
    "type": "ViewStyle",
    "description": "底部渐变遮罩样式",
    "defaultValue": {
      "flex": 1,
      "overflow": "hidden"
    }
  }
}
```

---

# popover Semantic

Source: https://rn.mobile.ant.design/components/popover-cn/semantic.md

# Popover Semantic

## Component Description

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

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
    "description": "弹出层容器，样式可通过 styles.content 控制弹出层内容区域外观",
    "defaultValue": {
      "backgroundColor": "theme.fill_base",
      "borderRadius": "theme.radius_sm",
      "padding": 0,
      "elevation": 3
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "弹出层指示箭头，样式可通过 styles.arrow 控制箭头外观",
    "defaultValue": {
      "borderTopColor": "transparent"
    }
  },
  "background": {
    "type": "ViewStyle",
    "description": "弹出层背景遮罩，样式可通过 styles.background 控制遮罩层视觉",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  }
}
```

---

# progress Semantic

Source: https://rn.mobile.ant.design/components/progress-cn/semantic.md

# Progress Semantic

## Component Description

表明某个任务的当前进度。

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
    "description": "外层容器的基础样式，如背景色、尺寸等",
    "defaultValue": {
      "backgroundColor": "theme.border_color_base",
      "flex": 1
    }
  },
  "progressBar": {
    "type": "ViewStyle",
    "description": "进度条填充颜色和高度等基础样式",
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

Source: https://rn.mobile.ant.design/components/radio-cn/semantic.md

# Radio Semantic

## Component Description

属性 | 说明 | 类型 | 默认值 ----|-----|------|------

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
    "description": "文本内容样式，字体颜色、大小等",
    "defaultValue": {
      "color": "theme.color_text_base",
      "marginRight": "theme.h_spacing_md",
      "marginLeft": "theme.h_spacing_md"
    }
  },
  "radioItemContentDisable": {
    "type": "TextStyle",
    "description": "禁用时文本样式",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

---

# result Semantic

Source: https://rn.mobile.ant.design/components/result-cn/semantic.md

# Result Semantic

## Component Description

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

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
    "description": "结果容器布局",
    "defaultValue": {
      "alignItems": "center",
      "paddingVertical": "theme.v_spacing_xl",
      "backgroundColor": "theme.fill_base",
      "borderBottomColor": "theme.border_color_base"
    }
  },
  "imgWrap": {
    "type": "ViewStyle",
    "description": "图标容器定位和尺寸",
    "defaultValue": {
      "margin": 0
    }
  },
  "img": {
    "type": "ImageStyle",
    "description": "图片样式",
    "defaultValue": {
      "width": 60,
      "height": 60
    }
  },
  "title": {
    "type": "ViewStyle",
    "description": "标题容器布局",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "titleText": {
    "type": "TextStyle",
    "description": "标题文字样式",
    "defaultValue": {
      "fontSize": 21,
      "color": "theme.color_text_base"
    }
  },
  "message": {
    "type": "ViewStyle",
    "description": "信息区域布局",
    "defaultValue": {
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "messageText": {
    "type": "TextStyle",
    "description": "信息文字样式",
    "defaultValue": {
      "fontSize": "theme.font_size_caption",
      "color": "theme.color_text_caption"
    }
  },
  "buttonWrap": {
    "type": "ViewStyle",
    "description": "按钮容器布局",
    "defaultValue": {
      "flexDirection": "row",
      "marginTop": "theme.v_spacing_lg",
      "paddingHorizontal": "theme.h_spacing_lg"
    }
  },
  "button": {
    "type": "ViewStyle",
    "description": "按钮样式",
    "defaultValue": {
      "flex": 1
    }
  }
}
```

---

# search-bar Semantic

Source: https://rn.mobile.ant.design/components/search-bar-cn/semantic.md

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

---

# slider Semantic

Source: https://rn.mobile.ant.design/components/slider-cn/semantic.md

# Slider Semantic

## Component Description

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

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
    "description": "Slider 组件主容器样式",
    "defaultValue": {
      "paddingVertical": 5,
      "paddingHorizontal": 14
    }
  },
  "disabled": {
    "type": "ViewStyle",
    "description": "禁用时叠加样式",
    "defaultValue": {}
  },
  "trackContianer": {
    "type": "ViewStyle",
    "description": "滑轨容器样式",
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
    "description": "滑轨条背景样式",
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
    "description": "填充条样式",
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
    "description": "滑块按钮样式",
    "defaultValue": {
      "zIndex": 3
    }
  },
  "ticks": {
    "type": "ViewStyle",
    "description": "刻度点容器样式",
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
    "description": "刻度点默认样式",
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
    "description": "激活状态刻度点样式",
    "defaultValue": {
      "backgroundColor": "theme.brand_primary"
    }
  },
  "mark": {
    "type": "ViewStyle",
    "description": "标记容器样式",
    "defaultValue": {
      "position": "relative",
      "width": "100%",
      "height": 11
    }
  },
  "markText": {
    "type": "TextStyle",
    "description": "标记文本样式",
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

Source: https://rn.mobile.ant.design/components/stepper-cn/semantic.md

# Stepper Semantic

## Component Description

用作增加或者减少当前数值。

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
    "description": "输入禁用样式",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "stepWrap": {
    "type": "ViewStyle",
    "description": "步骤按钮包裹样式",
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
    "description": "步骤按钮文字样式",
    "defaultValue": {
      "textAlign": "center",
      "fontSize": 20,
      "color": "theme.brand_primary",
      "backgroundColor": "transparent"
    }
  },
  "stepDisabled": {
    "type": "ViewStyle",
    "description": "步骤按钮禁用样式",
    "defaultValue": {
      "opacity": 0.4
    }
  },
  "disabledStepTextColor": {
    "type": "TextStyle",
    "description": "禁用步骤按钮文字颜色样式",
    "defaultValue": {
      "color": "theme.color_text_disabled"
    }
  }
}
```

---

# steps Semantic

Source: https://rn.mobile.ant.design/components/steps-cn/semantic.md

# Steps Semantic

## Component Description

显示一个任务的进度；或者引导用户完成某个复杂任务。

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
    "description": "小尺寸步骤头部默认样式",
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
    "description": "小尺寸步骤头部蓝色样式",
    "defaultValue": {
      "borderColor": "#108ee9"
    }
  },
  "head_gray_s": {
    "type": "ViewStyle",
    "description": "小尺寸步骤头部灰色样式",
    "defaultValue": {
      "borderColor": "#bbbbbb"
    }
  },
  "head_red_s": {
    "type": "ViewStyle",
    "description": "小尺寸步骤头部红色样式",
    "defaultValue": {
      "borderColor": "#f4333c"
    }
  },
  "icon_s": {
    "type": "TextStyle",
    "description": "小尺寸图标样式",
    "defaultValue": {
      "fontSize": 14
    }
  },
  "head_default_l": {
    "type": "ViewStyle",
    "description": "大尺寸步骤头部默认样式",
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
    "description": "大尺寸步骤头部蓝色样式",
    "defaultValue": {
      "borderColor": "#108ee9",
      "backgroundColor": "#108ee9"
    }
  },
  "head_gray_l": {
    "type": "ViewStyle",
    "description": "大尺寸步骤头部灰色样式",
    "defaultValue": {
      "borderColor": "#bbbbbb",
      "backgroundColor": "#bbbbbb"
    }
  },
  "head_red_l": {
    "type": "ViewStyle",
    "description": "大尺寸步骤头部红色样式",
    "defaultValue": {
      "borderColor": "#f4333c",
      "backgroundColor": "#f4333c"
    }
  },
  "tail_default_l": {
    "type": "ViewStyle",
    "description": "大尺寸步骤连接线默认样式",
    "defaultValue": {
      "width": 2,
      "height": 30,
      "marginLeft": 11
    }
  },
  "icon_l": {
    "type": "TextStyle",
    "description": "大尺寸图标样式",
    "defaultValue": {
      "fontSize": 20
    }
  },
  "tail_default_s": {
    "type": "ViewStyle",
    "description": "小尺寸步骤连接线默认样式",
    "defaultValue": {
      "width": 2,
      "flex": 1,
      "marginLeft": "2 * grid"
    }
  },
  "tail_default_s_h": {
    "type": "ViewStyle",
    "description": "小尺寸步骤水平连接线默认样式",
    "defaultValue": {
      "height": 2,
      "width": 50,
      "marginTop": "2 * grid"
    }
  },
  "tail_gray": {
    "type": "ViewStyle",
    "description": "步骤连接线灰色样式",
    "defaultValue": {
      "backgroundColor": "#bbbbbb"
    }
  },
  "tail_blue": {
    "type": "ViewStyle",
    "description": "步骤连接线蓝色样式",
    "defaultValue": {
      "backgroundColor": "#108ee9"
    }
  },
  "tail_error": {
    "type": "ViewStyle",
    "description": "步骤连接线错误样式",
    "defaultValue": {
      "backgroundColor": "#f4333c"
    }
  },
  "tail_last": {
    "type": "ViewStyle",
    "description": "最后一个步骤连接线样式（透明）",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "content_s": {
    "type": "ViewStyle",
    "description": "小尺寸内容容器样式",
    "defaultValue": {
      "paddingLeft": 8
    }
  },
  "content_s_h": {
    "type": "ViewStyle",
    "description": "小尺寸水平内容容器样式",
    "defaultValue": {
      "paddingTop": 9
    }
  },
  "content_l": {
    "type": "ViewStyle",
    "description": "大尺寸内容容器样式",
    "defaultValue": {
      "paddingLeft": 15
    }
  },
  "title_s": {
    "type": "TextStyle",
    "description": "小尺寸标题文本样式",
    "defaultValue": {
      "fontWeight": "bold",
      "fontSize": 16,
      "paddingBottom": 9,
      "color": "#000000"
    }
  },
  "description_s": {
    "type": "TextStyle",
    "description": "小尺寸描述文本样式",
    "defaultValue": {
      "fontSize": 12,
      "color": "#000000"
    }
  },
  "title_l": {
    "type": "TextStyle",
    "description": "大尺寸标题文本样式",
    "defaultValue": {
      "fontWeight": "bold",
      "fontSize": 17,
      "paddingBottom": 9,
      "color": "#000000"
    }
  },
  "description_l": {
    "type": "TextStyle",
    "description": "大尺寸描述文本样式",
    "defaultValue": {
      "fontSize": 15,
      "color": "#000000"
    }
  }
}
```

---

# swipe-action Semantic

Source: https://rn.mobile.ant.design/components/swipe-action-cn/semantic.md

# SwipeAction Semantic

## Component Description

滑动操作组件。

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
    "description": "操作按钮容器样式",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "actionText": {
    "type": "TextStyle",
    "description": "操作按钮文本样式",
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

Source: https://rn.mobile.ant.design/components/switch-cn/semantic.md

# Switch Semantic

## Component Description

在两个互斥对象进行选择，eg：选择开或关。

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
    "description": "开关轨道基础样式",
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
    "description": "内层容器基础样式",
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
    "description": "手柄基础样式",
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
    "description": "开关选中状态下轨道样式",
    "defaultValue": {
      "borderColor": "theme.brand_primary",
      "backgroundColor": "theme.brand_primary"
    }
  },
  "switch_unchecked": {
    "type": "ViewStyle",
    "description": "开关未选中状态下轨道样式",
    "defaultValue": {
      "borderColor": "theme.switch_unchecked",
      "backgroundColor": "theme.switch_unchecked"
    }
  },
  "switch_inner_checked": {
    "type": "ViewStyle",
    "description": "选中状态下内层变化样式",
    "defaultValue": {
      "marginLeft": 7,
      "marginRight": 27
    }
  },
  "switch_inner_unchecked": {
    "type": "ViewStyle",
    "description": "未选中状态下内层变化样式",
    "defaultValue": {
      "marginLeft": 27,
      "marginRight": 7
    }
  },
  "switch_handle_checked": {
    "type": "ViewStyle",
    "description": "手柄选中状态样式",
    "defaultValue": {
      "right": 0
    }
  },
  "switch_handle_unchecked": {
    "type": "ViewStyle",
    "description": "手柄未选中状态样式",
    "defaultValue": {
      "left": 0
    }
  },
  "switch_checked_disabled": {
    "type": "ViewStyle",
    "description": "选中且禁用状态轨道样式",
    "defaultValue": {
      "borderColor": "#108ee966",
      "backgroundColor": "#108ee966"
    }
  },
  "switch_unchecked_disabled": {
    "type": "ViewStyle",
    "description": "未选中且禁用状态轨道样式",
    "defaultValue": {
      "borderColor": "#cccccc66",
      "backgroundColor": "#cccccc66"
    }
  },
  "switch_handle_disabled": {
    "type": "ViewStyle",
    "description": "手柄禁用状态样式",
    "defaultValue": {}
  }
}
```

---

# tab-bar Semantic

Source: https://rn.mobile.ant.design/components/tab-bar-cn/semantic.md

# TabBar Semantic

## Component Description

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

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
    "description": "TabBar 主容器样式",
    "defaultValue": {
      "flex": 1
    }
  },
  "content": {
    "type": "ViewStyle",
    "description": "内容区容器样式",
    "defaultValue": {
      "flex": 1
    }
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "底部标签栏容器样式",
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
    "description": "标签项默认样式",
    "defaultValue": {
      "flex": 1,
      "alignItems": "center",
      "justifyContent": "center"
    }
  },
  "barIcon": {
    "type": "ImageStyle",
    "description": "图标样式",
    "defaultValue": {
      "width": 28,
      "height": 28,
      "marginTop": 2
    }
  },
  "barItemSelected": {
    "type": "ViewStyle",
    "description": "选中标签项样式，动态饰品",
    "defaultValue": {}
  },
  "barItemTitle": {
    "type": "TextStyle",
    "description": "标签文字样式",
    "defaultValue": {
      "fontSize": "theme.font_size_icontext",
      "marginTop": 2
    }
  },
  "contentItem": {
    "type": "ViewStyle",
    "description": "内容项样式",
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
    "description": "选中内容项的额外样式",
    "defaultValue": {
      "height": "undefined"
    }
  },
  "badge": {
    "type": "ViewStyle",
    "description": "徽章背景样式",
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
    "description": "徽章文字样式",
    "defaultValue": {
      "textAlign": "center",
      "color": "white"
    }
  }
}
```

---

# tabs Semantic

Source: https://rn.mobile.ant.design/components/tabs-cn/semantic.md

# Tabs Semantic

## Component Description

用于让用户在不同的视图中进行切换。

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
    "description": "整体容器视图，承载整个 Tabs 组件",
    "defaultValue": {}
  },
  "tabs": {
    "type": "ViewStyle",
    "description": "标签集合容器，承载所有的标签项和下划线",
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
    "description": "标签基础布局样式",
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
    "description": "下划线基础样式",
    "defaultValue": {
      "height": 2,
      "backgroundColor": "#108ee9"
    }
  },
  "textStyle": {
    "type": "TextStyle",
    "description": "文字基础样式",
    "defaultValue": {
      "fontSize": 15
    }
  }
}
```

---

# tag Semantic

Source: https://rn.mobile.ant.design/components/tag-cn/semantic.md

# Tag Semantic

## Component Description

进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。

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
    "description": "标签根容器样式",
    "defaultValue": {
      "position": "relative",
      "flexDirection": "row",
      "overflow": "visible"
    }
  },
  "wrap": {
    "type": "ViewStyle",
    "description": "标签默认外层容器样式",
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
    "description": "small 类型标签的容器样式（动态可能生效）",
    "defaultValue": {
      "height": "theme.tag_height_sm",
      "paddingVertical": 0,
      "paddingHorizontal": 5
    }
  },
  "text": {
    "type": "TextStyle",
    "description": "标签文本基础样式",
    "defaultValue": {
      "fontSize": 12,
      "textAlign": "center"
    }
  },
  "textSmall": {
    "type": "TextStyle",
    "description": "small 类型标签文本样式（动态可能生效）",
    "defaultValue": {
      "fontSize": 10
    }
  },
  "normalWrap": {
    "type": "ViewStyle",
    "description": "非禁用且未选中标签的容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#dddddd"
    }
  },
  "normalText": {
    "type": "TextStyle",
    "description": "非禁用且未选中标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#888888"
    }
  },
  "activeWrap": {
    "type": "ViewStyle",
    "description": "被选中且非禁用标签的容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#ffffff",
      "borderColor": "#108ee9"
    }
  },
  "activeText": {
    "type": "TextStyle",
    "description": "被选中且非禁用标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#108ee9"
    }
  },
  "disabledWrap": {
    "type": "ViewStyle",
    "description": "禁用状态标签容器样式（动态可能生效）",
    "defaultValue": {
      "backgroundColor": "#dddddd",
      "borderColor": "#dddddd"
    }
  },
  "disabledText": {
    "type": "TextStyle",
    "description": "禁用状态标签文本样式（动态可能生效）",
    "defaultValue": {
      "color": "#bbbbbb"
    }
  },
  "close": {
    "type": "ViewStyle",
    "description": "关闭图标样式",
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

Source: https://rn.mobile.ant.design/components/textarea-item-cn/semantic.md

# TextareaItem Semantic

## Component Description

用于接受多行文本。

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
    "description": "容器整体样式",
    "defaultValue": {
      "borderBottomWidth": 0.5,
      "borderBottomColor": "#dddddd"
    }
  },
  "input": {
    "type": "TextStyle",
    "description": "文本输入框样式",
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
    "description": "图标样式",
    "defaultValue": {
      "position": "absolute",
      "top": 8,
      "width": 18,
      "height": 18
    }
  },
  "errorIcon": {
    "type": "ViewStyle",
    "description": "错误图标容器样式",
    "defaultValue": {
      "position": "absolute",
      "right": 18,
      "top": 12
    }
  },
  "count": {
    "type": "ViewStyle",
    "description": "字数统计容器样式",
    "defaultValue": {
      "position": "absolute",
      "right": 8,
      "bottom": 8
    }
  },
  "countText": {
    "type": "TextStyle",
    "description": "字数文本样式",
    "defaultValue": {}
  }
}
```

---

# toast Semantic

Source: https://rn.mobile.ant.design/components/toast-cn/semantic.md

# Toast Semantic

## Component Description

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

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
    "description": "顶层定位容器，控制弹窗位置（顶部/底部/居中）和整体容器样式",
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
    "description": "内部容器，背景层样式",
    "defaultValue": {
      "backgroundColor": "transparent"
    }
  },
  "innerWrap": {
    "type": "ViewStyle",
    "description": "内容包裹容器：根据是否有 icon 选择iconToast或textToast样式",
    "defaultValue": {
      "alignItems": "center",
      "backgroundColor": "rgba(0, 0, 0, .8)",
      "minWidth": 100
    }
  },
  "iconToast": {
    "type": "ViewStyle",
    "description": "图标提示样式",
    "defaultValue": {
      "borderRadius": 7,
      "padding": 15
    }
  },
  "textToast": {
    "type": "ViewStyle",
    "description": "文本提示样式",
    "defaultValue": {
      "borderRadius": 3,
      "paddingVertical": 9,
      "paddingHorizontal": 15
    }
  },
  "content": {
    "type": "TextStyle",
    "description": "内容样式",
    "defaultValue": {
      "color": "#ffffff",
      "fontSize": 15
    }
  },
  "image": {
    "type": "TextStyle",
    "description": "图片样式",
    "defaultValue": {
      "marginBottom": 3
    }
  },
  "centering": {
    "type": "ViewStyle",
    "description": "居中样式",
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

Source: https://rn.mobile.ant.design/components/tooltip-cn/semantic.md

# Tooltip Semantic

## Component Description

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

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
    "description": "主容器样式，定义布局、背景等",
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
    "description": "内容文本样式，控制字体颜色、大小等",
    "defaultValue": {
      "color": "mode === 'dark' ? '#ffffff' : theme.color_text_base"
    }
  },
  "arrow": {
    "type": "ViewStyle",
    "description": "箭头的样式，包含大小颜色和旋转（动态）",
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

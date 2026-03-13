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

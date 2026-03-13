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

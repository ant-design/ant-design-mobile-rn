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

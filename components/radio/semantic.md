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

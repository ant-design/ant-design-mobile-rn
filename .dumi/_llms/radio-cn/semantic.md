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

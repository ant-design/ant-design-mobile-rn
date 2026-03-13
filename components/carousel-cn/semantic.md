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

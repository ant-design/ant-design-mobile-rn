---
category: Components
type: Navigation
title: Drawer
subtitle: 抽屉
---

用于在屏幕边缘显示应用导航等内容的面板。

### 规则

- 是 Android 推荐的导航方式，常见于该平台应用。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| sidebar | 抽屉里的内容 | ReactNode | - |
| onOpenChange | open 状态切换时调用 | (open: bool): void | - |
| open | 开关状态 | Boolean | false |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right'} |
| drawerWidth | 抽屉宽度 | Number | 300 |
| drawerBackgroundColor | 指定抽屉背景色 | String | - |
| openDrawer | 打开函数 | (): void | - |
| closeDrawer | 关闭函数 | (): void | - |

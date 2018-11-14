---
category: Components
type: Data Display
title: Accordion
subtitle: 手风琴
---

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。


## API

### Accordion

| 属性              | 说明                                    | 类型                      | 默认值 |
| ----------------- | --------------------------------------- | ------------------------- | ------ |
| onChange(indexes) | 当section(s)发生变化的时候执行        | (indexes: number[])=>void | -      |
| activeSections    | 初始化选中`sections` ，留空关闭所有面板 | number[]                  | []     |

更多自定义属性请参考 https://github.com/oblador/react-native-collapsible#properties-1


### Accordion.Panel

| 属性   | 说明           | 类型                    | 默认值 |
| ------ | -------------- | ----------------------- | ------ |
| key    | 对应 activeKey | String                  | 无     |
| header | 面板头内容     | React.Element or String | 无     |

注意: 目前暂不支持嵌套使用

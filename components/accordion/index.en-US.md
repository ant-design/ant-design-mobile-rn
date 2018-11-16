---
category: Components
type: Data Display
title: Accordion
---

You can collapse / expand the content area.

### Rules
- Group and hide complex areas.
- Typically, only a single content area is allowed to expand at a time; in special cases, multiple content areas can be expanded at the same time.


## API

### Accordion

| Properties        | Descrition                                                                                       | Type                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------- | ------- |
| onChange(indexes) | A function that is called when the currently active section(s) are updated.                      | (indexes: number[])=>void | -       |
| activeSections    | Control which indices in the `sections` array are currently open. If empty, closes all sections. | number[]                  | []      |


Read more https://github.com/oblador/react-native-collapsible#properties-1

### Accordion.Panel

| Properties | Descrition              | Type                    | Default |
| ---------- | ----------------------- | ----------------------- | ------- |
| key        | corresponding activeKey | String                  | -       |
| header     | header content of Panel | React.Element or String | -       |

Note: Currently does not support nested use for RN.

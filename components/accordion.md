# Accordion

> This package has been deprecated in `5.2.1`, recommend [components/Collapse](/components/collapse)

You can collapse / expand the content area.

### Rules
- Group and hide complex areas.
- Typically, only a single content area is allowed to expand at a time; in special cases, multiple content areas can be expanded at the same time.

## Examples

```tsx
import { Accordion, List } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class AccordionExmple extends React.Component<any, any> {
  state = {
    activeSections: [2, 0],
  }
  onChange = (activeSections: number[]) => {
    this.setState({ activeSections })
  }
  render() {
    return (
      <View style={{ marginTop: 80, marginBottom: 10 }}>
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text
            text text
          </Accordion.Panel>
        </Accordion>
      </View>
    )
  }
}
```

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

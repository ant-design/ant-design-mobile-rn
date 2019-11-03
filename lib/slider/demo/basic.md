---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/slider/demo/basic.tsx)

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Slider } from '@ant-design/react-native';
export default class BasicSliderExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = value => {
      this.setState({
        changingValue: value,
      });
    };
    this.onAfterChange = value => {
      this.setState({
        changedValue: value,
      });
    };
    this.minMaxChange = value => {
      this.setState({
        minMaxValue: value,
      });
    };
    this.state = {
      changingValue: 0.25,
      changedValue: 0.15,
      minMaxValue: 0,
      slideCompletionCount: 0,
    };
  }
  render() {
    return (
      <View>
        <View>
          <Text>Default settings</Text>
          <Slider />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Initial value: 0.5</Text>
          <Slider defaultValue={0.5} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>
          <Slider
            min={0}
            max={1}
            onAfterChange={value => this.minMaxChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>step: 0.25</Text>
          <Slider step={0.25} value={0.25} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>disabled</Text>
          <Slider disabled defaultValue={0.25} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            defaultValue={0.25}
            onChange={value => this.handleChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            defaultValue={0.15}
            onAfterChange={value => this.onAfterChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>custom color: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>
      </View>
    );
  }
}
```

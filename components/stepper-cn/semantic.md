## Stepper

### Usage Example

```jsx
import { List, Provider, Stepper, Toast } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function StepperExample() {
  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView>
          <List renderHeader={'基础用法'}>
            <List.Item
              extra={
                <Stepper
                  defaultValue={1}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              基础用法
            </List.Item>
            <List.Item extra={<Stepper step={10} defaultValue={10} />}>
              步长设置
            </List.Item>
            <List.Item extra={<Stepper min={-5} max={5} />}>
              限制输入范围
            </List.Item>
            <List.Item extra={<Stepper digits={1} />}>
              格式化到一位小数
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  defaultValue={93}
                  formatter={(value) => `$ ${value}`}
                  parser={(text) => parseFloat(text.replace('$', ''))}
                  onChange={(value) => {
                    console.log(value, typeof value)
                  }}
                />
              }>
              自定义格式
            </List.Item>
          </List>
          <List renderHeader={'状态/样式'}>
            <List.Item extra={<Stepper disabled />}>禁用状态</List.Item>
            <List.Item extra={<Stepper readOnly />}>输入框只读状态</List.Item>
            <List.Item
              extra={
                <Stepper
                  onFocus={() => {
                    Toast.info('获得焦点')
                  }}
                  onBlur={() => {
                    Toast.info('失去焦点')
                  }}
                />
              }>
              获得/失去焦点
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  allowEmpty={true}
                  min={10}
                  max={20}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              允许清空
            </List.Item>
            <List.Item extra={<Stepper defaultValue={10000} step={10000} />}>
              自定义样式
            </List.Item>
          </List>
          <StringModeExample />
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { InputStyle } from '../../input/style'
import { Theme } from '../../style'
export interface StepperStyle extends Partial<InputStyle> {
  inputDisabled: TextStyle
  stepWrap: ViewStyle
  stepText: TextStyle
  stepDisabled: ViewStyle
  disabledStepTextColor: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepperStyle>({
    // override Input style
    container: {
      alignItems: 'stretch',
      width: 104,
    },
    input: {
      fontSize: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
      backgroundColor: theme.fill_grey,
    },
    prefix: {
      flexShrink: 0,
      marginRight: 2,
    },
    suffix: {
      flexShrink: 0,
      marginLeft: 2,
    },

    // Stepper style
    inputDisabled: {
      opacity: 0.4,
    },
    stepWrap: {
      width: 28,
      flex: 1,
      justifyContent: 'center',
      borderRadius: theme.radius_xs,
      backgroundColor: theme.fill_grey,
    },
    stepText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.brand_primary,
      backgroundColor: 'transparent',
    },
    stepDisabled: {
      opacity: 0.4,
    },
    disabledStepTextColor: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 包裹步进器整体的输入框容器 -->
<Input
  ref={ref}
  style={...} 
  styles={{ container /* 输入框容器样式 */, input /* 输入框样式 */, inputDisabled /* 禁用时输入框样式 */ }}
  disabled={disabled} 
  value={state.value}
  onChangeText={...}
  onFocus={...}
  onBlur={...}
  selectTextOnFocus
  prefix={
    <!-- 减号按钮容器，包含样式: stepWrap 步进器按钮包裹, stepDisabled 禁用按钮样式（动态 - 根据 minusDisabled） -->
    <TouchableHighlight
      disabled={minusDisabled}
      style={{ stepWrap, stepDisabled /* 动态: 当 minusDisabled 为 true */ }}
      onPress={handleMinus}
      onLongPress={onLongPressMinus}
      onPressOut={onPressOut}
      activeOpacity={1}
      underlayColor={theme.fill_tap}
      {...minusButtonProps}
    >
      <!-- 减号按钮文本，样式: stepText 步进器按钮文字, disabledStepTextColor 禁用时文字颜色（动态 - 根据 minusDisabled） -->
      <Text style={{ stepText, disabledStepTextColor /* 动态: 当 minusDisabled 为 true */ }}>-</Text>
    </TouchableHighlight>
  }
  suffix={
    <!-- 加号按钮容器，包含样式: stepWrap 步进器按钮包裹, stepDisabled 禁用按钮样式（动态 - 根据 plusDisabled） -->
    <TouchableHighlight
      disabled={plusDisabled}
      style={{ stepWrap, stepDisabled /* 动态: 当 plusDisabled 为 true */ }}
      onPress={handlePlus}
      onLongPress={onLongPressPlus}
      onPressOut={onPressOut}
      activeOpacity={1}
      underlayColor={theme.fill_tap}
      {...plusButtonProps}
    >
      <!-- 加号按钮文本，样式: stepText 步进器按钮文字, disabledStepTextColor 禁用时文字颜色（动态 - 根据 plusDisabled） -->
      <Text style={{ stepText, disabledStepTextColor /* 动态: 当 plusDisabled 为 true */ }}>+</Text>
    </TouchableHighlight>
  }
/>
```

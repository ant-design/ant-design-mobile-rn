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

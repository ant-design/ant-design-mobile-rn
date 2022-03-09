import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { CheckboxStyle } from '../checkbox/style'
import { WithThemeStyles } from '../style'
import View from '../view'
import { OnGroupChangeParams, RadioGroupPropsType } from './PropsType'
import RadioItem from './RadioItem'
import { RadioGroupContextProvider } from './RadioContext'

export interface RadioGroupProps
  extends RadioGroupPropsType,
    WithThemeStyles<CheckboxStyle> {
  style?: StyleProp<ViewStyle>
}
const RadioGroup = React.forwardRef<any, RadioGroupProps>(
  (
    {
      defaultValue,
      onChange,
      options,
      disabled,
      children,
      style,
      ...restProps
    }: RadioGroupProps,
    ref,
  ) => {
    const [value, setValue] = useMergedState(defaultValue, {
      value: restProps.value,
    })

    const onRadioGroupChange = (ev: OnGroupChangeParams) => {
      const lastValue = value
      const val = ev.target.value
      if (!('value' in restProps)) {
        setValue(val)
      }
      if (onChange && val !== lastValue) {
        onChange(ev)
      }
    }

    const renderGroup = () => {
      let childrenToRender = children
      // 如果存在 options, 优先使用
      if (options && options.length > 0) {
        childrenToRender = options.map((option: any) => {
          if (typeof option === 'string') {
            // 此处类型自动推导为 string
            return (
              <RadioItem
                key={option}
                {...restProps}
                disabled={disabled}
                value={option}
                checked={value === option}>
                {option}
              </RadioItem>
            )
          }
          // 此处类型自动推导为 { label: string value: string }
          return (
            <RadioItem
              key={`radio-group-value-options-${option.value}`}
              {...restProps}
              disabled={option.disabled || disabled}
              value={option.value}
              checked={value === option.value}>
              {option.label}
            </RadioItem>
          )
        })
      }

      return (
        <View
          accessibilityRole="radiogroup"
          accessibilityState={{ disabled }}
          style={style}
          ref={ref}>
          <RadioGroupContextProvider
            value={{
              onChange: onRadioGroupChange,
              value,
              disabled: disabled,
            }}>
            {childrenToRender}
          </RadioGroupContextProvider>
        </View>
      )
    }

    return renderGroup()
  },
)

export default React.memo(RadioGroup)

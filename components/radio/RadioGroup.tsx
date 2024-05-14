import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import { View } from 'react-native'
import DisabledContext from '../config-provider/DisabledContext'
import { OnGroupChangeParams, RadioGroupProps } from './PropsType'
import { RadioGroupContextProvider } from './RadioContext'
import RadioItem from './RadioItem'

const RadioGroup = React.forwardRef<View, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const contextDisabled = React.useContext(DisabledContext)

    const {
      defaultValue,
      onChange,
      options,
      disabled = contextDisabled,
      children,
      style,
      ...restProps
    } = props

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

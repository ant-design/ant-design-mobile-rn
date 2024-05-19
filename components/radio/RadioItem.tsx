import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { forwardRef, memo, useContext, useMemo, useRef } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import DisabledContext from '../config-provider/DisabledContext'
import List from '../list/index'
import { WithTheme } from '../style'
import { RadioForwardedRef, RadioItemProps } from './PropsType'
import Radio from './Radio'
import RadioStyles from './style/index'

const RadioItem = forwardRef<TouchableHighlight, RadioItemProps>(
  (props, ref) => {
    const contextDisabled = useContext(DisabledContext)
    const {
      style,
      disabled = contextDisabled,
      children,
      left,
      right = !left,
      ...restProps
    } = props
    const radio = useRef<RadioForwardedRef>(null)

    // for accessibility
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
      value: props.checked,
      defaultValue: props.defaultChecked,
    })

    const handleClick = () => {
      if (radio.current) {
        radio.current.onPress()
        !innerChecked && setInnerChecked(true)
      }
      props.onPress?.()
    }
    const radioEl = <Radio {...restProps} ref={radio} />
    const listProps = {
      ...restProps,
      thumb: left && !right ? radioEl : undefined,
      extra: right ? radioEl : undefined,
    }

    const contentDom = useMemo(() => {
      if (React.isValidElement(children)) {
        return children
      }
      if (typeof children === 'string') {
        return (
          <WithTheme themeStyles={RadioStyles} styles={props.styles}>
            {(styles) => {
              const contentStyle = [
                styles.radioItemContent,
                disabled ? styles.radioItemContentDisable : {},
              ]
              return (
                <Text style={contentStyle} numberOfLines={1}>
                  {children}
                </Text>
              )
            }}
          </WithTheme>
        )
      }
    }, [children, disabled, props.styles])

    return (
      <List.Item
        ref={ref}
        style={style}
        disabled={disabled}
        onPress={handleClick}
        accessibilityRole="radio"
        accessibilityState={{ checked: innerChecked, disabled }}
        {...listProps}>
        {contentDom}
      </List.Item>
    )
  },
)

export default memo(RadioItem)

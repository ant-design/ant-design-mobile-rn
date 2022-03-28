import classNames from 'classnames'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import {
  AccessibilityProps,
  Animated,
  Easing,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import ButtonWave from '../button/ButtonWave'
import { WithTheme, WithThemeStyles } from '../style'
import AntmView from '../view/index'
import devWarning from '../_util/devWarning'
import { useAnimatedTiming } from '../_util/hooks/useAnimations'
import { CheckboxPropsType } from './PropsType'
import CheckboxStyles, { CheckboxStyle } from './style/index'

export interface CheckboxProps
  extends CheckboxPropsType,
    WithThemeStyles<CheckboxStyle>,
    AccessibilityProps {
  style?: StyleProp<ViewStyle>
}
//TODO: ref interface
export interface RefCheckboxProps {
  onPress: () => void
}

const InternalCheckbox = (
  {
    prefixCls = 'checkbox',
    style,
    styles,
    children,
    defaultChecked,
    disabled,
    onChange,
    indeterminate,
    ...restProps
  }: CheckboxProps,
  ref: React.Ref<any>,
) => {
  devWarning(
    'checked' in restProps || !('value' in restProps),
    'Checkbox',
    '`value` is not a valid prop, do you mean `checked`?',
  )

  const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
    value: restProps.checked,
    defaultValue: defaultChecked,
  })

  const [animatedValue, animate] = useAnimatedTiming()
  const transitionOpacity = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  }
  const transitionTransform = {
    transform: [
      { rotate: '45deg' },
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  }

  //initial animate or receive props
  React.useEffect(() => {
    animate({
      toValue: innerChecked ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.68, -0.55, 0.27, 1.55),
    })
  }, [animate, innerChecked])

  function triggerChange(newChecked: boolean) {
    if (!disabled) {
      !('checked' in restProps) && setInnerChecked(newChecked)
      onChange?.({
        target: {
          checked: newChecked,
        },
      })
      return newChecked
    }

    return innerChecked
  }
  const onInternalClick = () => {
    triggerChange(!innerChecked)
  }

  class Checkbox extends React.Component {
    onPress = () => {
      onInternalClick()
    }
    render() {
      return (
        <WithTheme themeStyles={CheckboxStyles} styles={styles}>
          {(_styles) => {
            const antd_checkbox = classNames(`${prefixCls}`, {
              [`${prefixCls}_checked`]: innerChecked,
              [`${prefixCls}_disabled`]: disabled,
            })
              .split(' ')
              .map((a) => _styles[a])

            const antd_checkbox_inner = classNames(`${prefixCls}_inner`, {
              [`${prefixCls}_inner_indeterminate`]: indeterminate,
              [`${prefixCls}_inner_disabled`]: disabled,
            })
              .split(' ')
              .map((a) => _styles[a])

            const antd_checkbox_inner_after = classNames(undefined, {
              [`${prefixCls}_inner_after`]: !indeterminate,
              [`${prefixCls}_inner_after_indeterminate`]: indeterminate,
              [`${prefixCls}_inner_after_disabled`]: disabled,
            })
              .split(' ')
              .map((a) => _styles[a])

            const antd_checlbox_label = classNames(`${prefixCls}_label`, {
              [`${prefixCls}_label_disabled`]: disabled,
            })
              .split(' ')
              .map((a) => _styles[a])

            const Color = innerChecked
              ? _styles.checkbox_checked?.borderColor
              : _styles.checkbox?.borderColor
            return (
              <View
                accessibilityRole="checkbox"
                accessibilityState={{ checked: innerChecked, disabled }}
                style={[_styles[`${prefixCls}_wrapper`], style]}>
                <View style={_styles.checkbox_wave}>
                  <ButtonWave
                    style={antd_checkbox}
                    Color={Color}
                    disabled={disabled}
                    onPress={this.onPress}>
                    <Animated.View
                      style={[antd_checkbox_inner, transitionOpacity]}
                    />
                    <Animated.View
                      style={[transitionTransform, antd_checkbox_inner_after]}
                    />
                  </ButtonWave>
                </View>
                <Pressable disabled={disabled} onPress={this.onPress}>
                  <AntmView style={antd_checlbox_label}>{children}</AntmView>
                </Pressable>
              </View>
            )
          }}
        </WithTheme>
      )
    }
  }

  return <Checkbox ref={ref} {...restProps} />
}

const AntmCheckbox = React.forwardRef(InternalCheckbox)
AntmCheckbox.displayName = 'AntmCheckbox'

export default AntmCheckbox

import classNames from 'classnames'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import { Animated, Easing, StyleProp, View, ViewStyle } from 'react-native'
import RNActivityIndicator from '../activity-indicator'
import ButtonWave from '../button/ButtonWave'
import { WithTheme, WithThemeStyles } from '../style'
import AntmView from '../view/index'
import devWarning from '../_util/devWarning'
import { useAnimatedTiming } from '../_util/hooks/useAnimations'
import { SwitchPropsType } from './PropsType'
import SwitchStyles, { SwitchStyle } from './style/index'

export interface SwitchProps
  extends SwitchPropsType,
    WithThemeStyles<SwitchStyle> {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const AnimatedView = Animated.createAnimatedComponent(AntmView)
const AntmSwitch = ({
  prefixCls = 'switch',
  checked,
  defaultChecked,
  disabled,
  color,
  loading,
  checkedChildren,
  unCheckedChildren,
  onPress,
  onChange,
  trackColor,
  thumbColor,
  thumbTintColor,
  ...restProps
}: SwitchProps) => {
  devWarning(
    'checked' in restProps || !('value' in restProps),
    'Switch',
    '`value` is not a valid prop, do you mean `checked`?',
  )
  // Compatible with old code : checked without onChange was alse onControlled
  const checkedRef = React.useRef<undefined | boolean>()
  if (checkedRef.current === undefined) {
    checkedRef.current = checked ?? defaultChecked
  }
  const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
    value: checkedRef.current,
    defaultValue: defaultChecked,
  })

  //disabled when loading
  disabled = disabled || loading

  // animate1
  const [animatedValue, animate] = useAnimatedTiming()
  const transitionMargin = {
    marginLeft: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 7],
    }),
    marginRight: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [7, 25],
    }),
  }

  //animate2
  const [animatedValue2, animate2] = useAnimatedTiming()
  const transitionWidth = {
    width: animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 28],
    }),
    left: !innerChecked
      ? animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
        })
      : undefined,
    right: innerChecked
      ? animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0],
        })
      : 0,
  }

  //initial animate
  React.useEffect(() => {
    if (checkedRef.current) {
      animate({})
      animate2({ toValue: 0 })
    } else {
      animate({ toValue: 0 })
    }
  }, [animate, animate2, checkedRef])

  function triggerChange(newChecked: boolean) {
    if (!disabled) {
      checkedRef.current = newChecked
      setInnerChecked(newChecked)
      onChange?.(newChecked)
      return newChecked
    }

    return innerChecked
  }

  function onInternalClick() {
    const ret = triggerChange(!innerChecked)
    // [Legacy] trigger onClick with value
    onPress?.(ret)
    animate({ toValue: ret ? 1 : 0 })
  }

  function onPressIn() {
    animate2({ easing: Easing.inOut(Easing.ease) })
  }

  function onPressOut() {
    animate2({ toValue: 0, easing: Easing.inOut(Easing.ease) })
  }

  return (
    <WithTheme styles={restProps.styles} themeStyles={SwitchStyles}>
      {(styles, theme) => {
        const ant_switch = classNames(prefixCls, {
          [`${prefixCls}_checked`]: innerChecked,
          [`${prefixCls}_unchecked`]: !innerChecked,
          [`${prefixCls}_checked_disabled`]: innerChecked && disabled,
          [`${prefixCls}_unchecked_disabled`]: !innerChecked && disabled,
        })
          .split(' ')
          .map((a) => styles[a])

        const ant_switch_inner = classNames(`${prefixCls}_inner`, {
          [`${prefixCls}_inner_checked`]: innerChecked,
          [`${prefixCls}_inner_unchecked`]: !innerChecked,
        })
          .split(' ')
          .map((a) => styles[a])

        const ant_switch_handle = classNames(`${prefixCls}_handle`, {
          [`${prefixCls}_handle_checked`]: innerChecked,
          [`${prefixCls}_handle_unchecked`]: !innerChecked,
          [`${prefixCls}_handle_disabled`]: disabled,
        })
          .split(' ')
          .map((a) => styles[a])

        // color props
        const Color = innerChecked
          ? color || trackColor?.true || theme.switch_fill
          : trackColor?.false || theme.switch_unchecked

        const SwitchTrackColor = {
          backgroundColor: Color,
          borderColor: Color,
          opacity: Color ? (disabled ? 0.6 : 1) : 1,
        }

        const SwitchThumbColor = JSON.parse(
          JSON.stringify({
            backgroundColor: innerChecked ? thumbTintColor : thumbColor,
          }),
        )

        const accessibilityState = {
          checked: innerChecked,
          disabled,
          busy: loading,
        }

        return (
          <View
            accessibilityRole="switch"
            accessibilityState={accessibilityState}
            style={[styles[prefixCls], { padding: 1 }]}>
            <ButtonWave
              {...restProps}
              Color={Color}
              disabled={disabled}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              onPress={onInternalClick}>
              <View
                style={[
                  ant_switch,
                  Boolean(trackColor || color) && SwitchTrackColor,
                ]}>
                <Animated.View
                  style={[
                    ant_switch_handle,
                    SwitchThumbColor,
                    transitionWidth,
                  ]}>
                  {loading && (
                    <RNActivityIndicator
                      color={Color}
                      size={18}
                      styles={{
                        spinner: {
                          padding: 2,
                          opacity: 0.4,
                        },
                      }}
                    />
                  )}
                </Animated.View>
                <AnimatedView style={[ant_switch_inner, transitionMargin]}>
                  {innerChecked ? checkedChildren : unCheckedChildren}
                </AnimatedView>
              </View>
            </ButtonWave>
          </View>
        )
      }}
    </WithTheme>
  )
}

AntmSwitch.displayName = 'AntmSwitch'

export default AntmSwitch

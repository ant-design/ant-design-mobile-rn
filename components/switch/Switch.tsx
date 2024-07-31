import classNames from 'classnames'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import {
  Animated,
  Easing,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import devWarning from '../_util/devWarning'
import { useAnimatedTiming } from '../_util/hooks/useAnimations'
import { isPromise } from '../_util/isPromise'
import RNActivityIndicator from '../activity-indicator'
import DisabledContext from '../provider/DisabledContext'
import HapticsContext from '../provider/HapticsContext'
import { WithTheme, WithThemeStyles } from '../style'
import AntmView from '../view/index'
import { SwitchPropsType } from './PropsType'
import SwitchStyles, { SwitchStyle } from './style/index'

export interface SwitchProps
  extends SwitchPropsType,
    WithThemeStyles<SwitchStyle> {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const AnimatedView = Animated.createAnimatedComponent(AntmView)
const AntmSwitch = (props: SwitchProps) => {
  const disabledContext = React.useContext(DisabledContext)
  const {
    prefixCls = 'switch',
    style,
    checked,
    defaultChecked,
    disabled = disabledContext,
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
  } = props
  devWarning(
    'checked' in restProps || !('value' in restProps),
    'Switch',
    '`value` is not a valid prop, do you mean `checked`?',
  )
  const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
    value: checked,
    defaultValue: defaultChecked,
  })
  const [innerLoading, setInnerLoading] = useMergedState<boolean>(false, {
    value: loading,
  })

  const PADDING = 11 // switch旁白最低宽度
  const TRACK_PADDING = 5 // switch轨道按压变形宽度
  const BORDER_WIDTH = 2 // switch轨道边框宽度

  // switch height measure
  const [itemHeight, setHeight] = React.useState<number>(31)
  const wrapperMeasure = React.useCallback((e) => {
    setHeight(e.nativeEvent.layout.height)
  }, [])

  //disabled when loading
  const mergedDisabled = disabled || innerLoading

  // animate1
  const [animatedValue, animate] = useAnimatedTiming()
  const transitionMargin = {
    marginLeft: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [itemHeight - BORDER_WIDTH, BORDER_WIDTH],
    }),
    marginRight: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [BORDER_WIDTH, itemHeight - BORDER_WIDTH],
    }),
  }

  //animate2
  const [animatedValue2, animate2] = useAnimatedTiming()
  const transitionWidth = {
    width: animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [
        itemHeight - BORDER_WIDTH * 2,
        itemHeight - BORDER_WIDTH * 2 + TRACK_PADDING,
      ],
    }),
    left: !innerChecked
      ? animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [BORDER_WIDTH, PADDING],
        })
      : undefined,
    right: innerChecked
      ? animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [PADDING, BORDER_WIDTH],
        })
      : 0,
  }

  //initial animate
  React.useEffect(() => {
    if (innerChecked) {
      animate({})
      animate2({ toValue: 0 })
    } else {
      animate({ toValue: 0 })
    }
  }, [animate, animate2, innerChecked, itemHeight])

  const onHaptics = React.useContext(HapticsContext)

  async function triggerChange(newChecked: boolean) {
    if (!mergedDisabled) {
      setInnerChecked(newChecked)
      const result = onChange?.(newChecked)
      if (isPromise(result)) {
        setInnerLoading(true)
        try {
          await result
          setInnerLoading(false)
        } catch (e) {
          setInnerLoading(false)
          throw e
        }
      }
      onHaptics('switch')
      return newChecked
    }

    return innerChecked
  }

  async function onInternalClick() {
    const ret = await triggerChange(!innerChecked)
    // [Legacy] trigger onClick with value
    onPress?.(ret)
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
          [`${prefixCls}_checked_disabled`]: innerChecked && mergedDisabled,
          [`${prefixCls}_unchecked_disabled`]: !innerChecked && mergedDisabled,
        })
          .split(' ')
          .map((a) => styles[a])
          .concat([style])

        const ant_switch_inner = classNames(`${prefixCls}_inner`, {
          [`${prefixCls}_inner_checked`]: innerChecked,
          [`${prefixCls}_inner_unchecked`]: !innerChecked,
        })
          .split(' ')
          .map((a) => styles[a])

        const ant_switch_handle = classNames(`${prefixCls}_handle`, {
          [`${prefixCls}_handle_checked`]: innerChecked,
          [`${prefixCls}_handle_unchecked`]: !innerChecked,
          [`${prefixCls}_handle_disabled`]: mergedDisabled,
        })
          .split(' ')
          .map((a) => styles[a])
          .concat([
            {
              width: itemHeight - BORDER_WIDTH * 2,
              height: itemHeight - BORDER_WIDTH * 2,
              borderRadius: itemHeight - BORDER_WIDTH * 2,
            },
          ])

        // color props
        const Color = innerChecked
          ? color || trackColor?.true || theme.brand_primary
          : trackColor?.false || theme.switch_unchecked

        const SwitchTrackColor = {
          backgroundColor: Color,
          borderColor: Color,
          opacity: Color ? (mergedDisabled ? 0.6 : 1) : 1,
        }

        const SwitchThumbColor = JSON.parse(
          JSON.stringify({
            backgroundColor: innerChecked ? thumbTintColor : thumbColor,
          }),
        )

        const accessibilityState = {
          checked: innerChecked,
          mergedDisabled,
          busy: innerLoading,
        }

        return (
          <Pressable
            accessibilityRole="switch"
            accessibilityState={accessibilityState}
            {...restProps}
            disabled={mergedDisabled}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onInternalClick}>
            <View
              style={[
                ant_switch,
                Boolean(trackColor || color) && SwitchTrackColor,
                { minWidth: itemHeight + PADDING },
              ]}
              onLayout={wrapperMeasure}>
              <Animated.View
                style={[ant_switch_handle, SwitchThumbColor, transitionWidth]}>
                {innerLoading && (
                  <RNActivityIndicator
                    color={Color}
                    size={18}
                    styles={{
                      spinner: {
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
          </Pressable>
        )
      }}
    </WithTheme>
  )
}

AntmSwitch.displayName = 'AntmSwitch'

export default AntmSwitch

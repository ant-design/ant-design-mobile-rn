import classNames from 'classnames'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'
import devWarning from '../_util/devWarning'
import { useAnimatedTiming } from '../_util/hooks/useAnimations'
import DisabledContext from '../provider/DisabledContext'
import { WithTheme } from '../style'
import AntmView from '../view'
import { CheckboxForwardedRef, CheckboxProps } from './PropsType'
import CheckboxStyles from './style'

const InternalCheckbox: React.ForwardRefRenderFunction<
  CheckboxForwardedRef,
  CheckboxProps
> = (props, ref) => {
  const contextDisabled = useContext(DisabledContext)

  const {
    prefixCls = 'checkbox',
    style,
    styles,
    children,
    defaultChecked,
    disabled = contextDisabled,
    onChange,
    indeterminate,
    ...restProps
  } = props

  if (__DEV__) {
    devWarning(
      'checked' in restProps || !('value' in restProps),
      'Checkbox',
      '`value` is not a valid prop, do you mean `checked`?',
    )
  }

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
      // hack: rotate & radius bug in android
      ...(restProps.accessibilityRole === 'radio' ? [] : [{ rotate: '45deg' }]),
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  }

  //initial animate or receive props
  useEffect(() => {
    animate({
      toValue: innerChecked ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.68, -0.55, 0.27, 1.55),
      useNativeDriver: true,
    })
  }, [animate, innerChecked])

  const triggerChange = useCallback(
    (newChecked: boolean) => {
      if (!disabled) {
        setInnerChecked(newChecked)
        onChange?.({
          target: {
            checked: newChecked,
          },
        })
        return newChecked
      }

      return innerChecked
    },
    [disabled, innerChecked, onChange, setInnerChecked],
  )

  // ================== Actions Ref ==================
  const actions = useMemo(
    () => ({
      onPress: () => triggerChange(!innerChecked),
      checked: innerChecked,
    }),
    [innerChecked, triggerChange],
  )
  useImperativeHandle(ref, () => actions)

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

        return (
          <Pressable
            onPress={actions.onPress}
            accessibilityRole="checkbox"
            accessibilityState={{
              checked: indeterminate ? 'mixed' : innerChecked,
              disabled,
            }}
            {...restProps}
            disabled={disabled}
            style={[_styles[`${prefixCls}_wrapper`], style]}>
            <View style={_styles.checkbox_wave}>
              <View style={antd_checkbox}>
                <Animated.View
                  style={[antd_checkbox_inner, transitionOpacity]}
                />
                <Animated.View
                  style={[transitionTransform, antd_checkbox_inner_after]}
                />
              </View>
            </View>
            <AntmView style={antd_checlbox_label}>{children}</AntmView>
          </Pressable>
        )
      }}
    </WithTheme>
  )
}

const Checkbox = React.forwardRef<CheckboxForwardedRef, CheckboxProps>(
  InternalCheckbox,
) as ((
  props: React.PropsWithChildren<CheckboxProps> &
    React.RefAttributes<CheckboxForwardedRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Checkbox.displayName = 'AntmCheckbox'

export default React.memo(Checkbox)

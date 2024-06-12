import getMiniDecimal, {
  DecimalClass,
  toFixed,
} from '@rc-component/mini-decimal'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Pressable, TextInput, View } from 'react-native'
import Input from '../input'
import { useTheme } from '../style'
import AntdView from '../view'
import { BaseStepperProps, StepperProps } from './PropsType'
import StepperStyles from './style'

export function InnerStepper<ValueType extends number | string>(
  props: StepperProps,
  ref: React.ForwardedRef<TextInput>,
) {
  const {
    value,
    defaultValue = 0 as ValueType,
    onChange,
    disabled,
    step = 1,
    max,
    min,
    digits,
    stringMode,
    formatter,
    parser,
    allowEmpty,
    ...restInputProps
  } = props as BaseStepperProps<ValueType> & { stringMode: boolean }

  // ========================== Parse / Format ==========================
  const fixedValue = useCallback(
    (val: ValueType): string => {
      return (
        digits !== undefined ? toFixed(val.toString(), '.', digits) : val
      ).toString()
    },
    [digits],
  )

  const getValueAsType = (val: DecimalClass) => {
    return (stringMode ? val.toString() : val.toNumber()) as ValueType
  }

  const parseValue = (text: string): string | null => {
    if (text === '') {
      return null
    }

    if (parser) {
      return String(parser(text))
    }

    const decimal = getMiniDecimal(text)
    return decimal.isInvalidate() ? null : decimal.toString()
  }

  const setValueWithCheck = (nextValue: DecimalClass) => {
    if (nextValue.isNaN()) {
      return
    }

    let target = nextValue

    // Put into range
    if (min !== undefined) {
      const minDecimal = getMiniDecimal(min)
      if (target.lessEquals(minDecimal)) {
        target = minDecimal
      }
    }

    if (max !== undefined) {
      const maxDecimal = getMiniDecimal(max)
      if (maxDecimal.lessEquals(target)) {
        target = maxDecimal
      }
    }

    // Fix digits
    if (digits !== undefined) {
      target = getMiniDecimal(fixedValue(getValueAsType(target)))
    }

    setMergedValue(getValueAsType(target))
    // return getValueAsType(target)
  }

  const formatValue = useCallback(
    (val: ValueType | null): string => {
      if (val === null) {
        return ''
      }

      return formatter ? formatter(val) : fixedValue(val)
    },
    [fixedValue, formatter],
  )

  // ======================== Value & Reducer  ========================
  const [mergedValue, setMergedValue] = useMergedState<ValueType | null>(
    defaultValue,
    {
      value,
      onChange,
    },
  )

  const reducer = (
    state: { value: string },
    action: { type: 'onChange' | 'minus' | 'plus'; payload?: string },
  ) => {
    if (action.type === 'onChange') {
      return { value: action.payload }
    }

    let stepValue = getMiniDecimal(step)
    if (action.type === 'minus') {
      stepValue = stepValue.negate()
    }

    setValueWithCheck(
      getMiniDecimal(state.value ?? 0).add(stepValue.toString()),
    )
    return {
      value: state.value,
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    value: formatValue(mergedValue),
  })

  // >>>>> Input
  const handleInputChange = (v: string) => {
    dispatch({ type: 'onChange', payload: v })
    const valueStr = parseValue(v)

    if (valueStr === null) {
      if (allowEmpty) {
        setMergedValue(null)
      } else {
        setMergedValue(defaultValue)
      }
    } else {
      setValueWithCheck(getMiniDecimal(valueStr))
    }
  }

  // ============================== Focus ===============================
  const [focused, setFocused] = useState(false)

  function triggerFocus(nextFocus: boolean) {
    setFocused(nextFocus)

    // We will convert value to original text when focus
    if (nextFocus) {
      dispatch({
        type: 'onChange',
        payload:
          mergedValue !== null && mergedValue !== undefined
            ? String(mergedValue)
            : '',
      })
    }
  }

  // Focus change to format value
  useEffect(() => {
    if (!focused) {
      dispatch({
        type: 'onChange',
        payload: formatValue(mergedValue),
      })
    }
  }, [focused, mergedValue, digits, formatValue])

  // ============================ Operations ============================
  const handleMinus = () => {
    dispatch({ type: 'minus' })
  }

  const handlePlus = () => {
    dispatch({ type: 'plus' })
  }

  // long press automatic minus/plus
  const timer = useRef<any>()
  const onLongPressMinus = (time = 1000) => {
    dispatch({ type: 'minus' })
    timer.current = setTimeout(
      () => onLongPressMinus(time - 400),
      Math.max(time, 100),
    )
  }
  const onLongPressPlus = (time = 1000) => {
    dispatch({ type: 'plus' })
    timer.current = setTimeout(
      () => onLongPressPlus(time - 400),
      Math.max(time, 100),
    )
  }
  const onPressOut = () => {
    timer.current && clearTimeout(timer.current)
  }

  const minusDisabled = useMemo(() => {
    if (disabled) {
      return true
    }
    if (mergedValue === null) {
      return false
    }
    if (min !== undefined) {
      return mergedValue <= min
    }
    return false
  }, [disabled, min, mergedValue])

  const plusDisabled = useMemo(() => {
    if (disabled) {
      return true
    }
    if (mergedValue === null) {
      return false
    }
    if (max !== undefined) {
      return mergedValue >= max
    }
    return false
  }, [disabled, max, mergedValue])

  const styles = useTheme({
    styles: props.styles,
    themeStyles: StepperStyles,
  })

  // ============================== Render ==============================
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleMinus}
        onLongPress={() => onLongPressMinus()}
        onPressOut={onPressOut}
        disabled={minusDisabled}>
        <AntdView style={styles.minus}>-</AntdView>
      </Pressable>
      <View style={styles.middle}>
        <Input
          ref={ref}
          style={styles.input}
          selectTextOnFocus
          {...restInputProps}
          disabled={disabled}
          value={state.value}
          onChangeText={(val) => {
            disabled || handleInputChange(val)
          }}
          onFocus={(e) => {
            triggerFocus(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            triggerFocus(false)
            props.onBlur?.(e)
          }}
        />
      </View>
      <Pressable
        onPress={handlePlus}
        onLongPress={() => onLongPressPlus()}
        onPressOut={onPressOut}
        disabled={plusDisabled}>
        <AntdView style={styles.plus}>+</AntdView>
      </Pressable>
    </View>
  )
}

export const Stepper = forwardRef(InnerStepper)

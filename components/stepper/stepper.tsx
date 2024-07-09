import getMiniDecimal, {
  DecimalClass,
  toFixed,
} from '@rc-component/mini-decimal'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Text, TextInput, TouchableHighlight } from 'react-native'
import DisabledContext from '../config-provider/DisabledContext'
import Input from '../input'
import { useTheme } from '../style'
import { BaseStepperProps, StepperProps } from './PropsType'
import StepperStyles from './style'

export function InnerStepper<ValueType extends number | string>(
  props: StepperProps,
  ref: React.ForwardedRef<TextInput>,
) {
  const contextDisabled = useContext(DisabledContext)

  const {
    value: inputValue,
    defaultValue = 0 as ValueType,
    onChange,
    disabled = contextDisabled,
    step = 1,
    max,
    min,
    digits,
    stringMode,
    formatter,
    parser,
    allowEmpty,
    inputStyle,
    styles,
    minusButtonProps,
    plusButtonProps,
    ...restInputProps
  } = props as BaseStepperProps<ValueType> & { stringMode: boolean }

  // ========================== Parse / Format ==========================
  const fixedValue = useCallback(
    (value: ValueType): string => {
      return (
        digits !== undefined ? toFixed(value.toString(), '.', digits) : value
      ).toString()
    },
    [digits],
  )

  const getValueAsType = (value: DecimalClass) =>
    (stringMode ? value.toString() : value.toNumber()) as ValueType

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

  const formatValue = useCallback(
    (value: ValueType | null): string => {
      if (value === null) {
        return ''
      }

      return formatter ? formatter(value) : fixedValue(value)
    },
    [fixedValue, formatter],
  )

  // ======================== Value & Reducer  ========================
  const [mergedValue, setMergedValue] = useMergedState<ValueType | null>(
    defaultValue,
    {
      value: inputValue,
      onChange,
    },
  )

  // >>>>> Value
  function setValueWithCheck(nextValue: DecimalClass) {
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
  }

  const reducer = (
    state: { value: string },
    action: { type: 'setInputValue' | 'minus' | 'plus'; payload?: string },
  ) => {
    if (action.type === 'setInputValue') {
      return { value: action.payload }
    }

    let stepValue = getMiniDecimal(step)
    if (action.type === 'minus') {
      stepValue = stepValue.negate()
    }
    setValueWithCheck(
      getMiniDecimal(mergedValue ?? 0).add(stepValue.toString()),
    )
    return { state }
  }
  const [state, dispatch] = useReducer(reducer, {
    value: formatValue(mergedValue),
  })

  // >>>>> Input
  const handleInputChange = (v: string) => {
    dispatch({ type: 'setInputValue', payload: v })
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
        type: 'setInputValue',
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
        type: 'setInputValue',
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

  useEffect(() => {
    return () => {
      onPressOut()
    }
  }, [])

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

  const ss = useTheme({
    styles,
    themeStyles: StepperStyles,
  })

  // ============================== Render ==============================
  return (
    <Input
      ref={ref}
      inputStyle={[inputStyle, disabled && ss.inputDisabled]}
      styles={ss}
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
      prefix={
        <TouchableHighlight
          style={[ss.stepWrap, minusDisabled && ss.stepDisabled]}
          onPress={handleMinus}
          onLongPress={() => onLongPressMinus()}
          onPressOut={onPressOut}
          disabled={minusDisabled}
          activeOpacity={1}
          underlayColor="#ddd"
          children={
            <Text
              style={[ss.stepText, minusDisabled && ss.disabledStepTextColor]}>
              -
            </Text>
          }
          {...minusButtonProps}
        />
      }
      suffix={
        <TouchableHighlight
          style={[ss.stepWrap, plusDisabled && ss.stepDisabled]}
          onPress={handlePlus}
          onLongPress={() => onLongPressPlus()}
          onPressOut={onPressOut}
          disabled={plusDisabled}
          activeOpacity={1}
          underlayColor="#ddd"
          children={
            <Text
              style={[ss.stepText, plusDisabled && ss.disabledStepTextColor]}>
              +
            </Text>
          }
          {...plusButtonProps}
        />
      }
    />
  )
}

export const Stepper = forwardRef(InnerStepper)

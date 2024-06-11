import getMiniDecimal, {
  DecimalClass,
  toFixed,
} from '@rc-component/mini-decimal'
import { useMergedState } from 'rc-util'
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
import { StepperProps } from './PropsType'
import StepperStyles from './style'

export function InnerStepper<ValueType extends number | string>(
  props: StepperProps<ValueType>,
  ref: React.ForwardedRef<TextInput>,
) {
  const {
    defaultValue = null,
    // value,
    onChange,
    disabled,
    step = 1,
    max,
    min,
    digits,
    stringMode,
    formatter,
    parser,
    ...restInputProps
  } = props

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
    (value: ValueType | null) => {
      if (value === null) {
        return ''
      }

      return formatter ? formatter(value) : fixedValue(value)
    },
    [fixedValue, formatter],
  )

  // ======================== Value & InputValue ========================
  const [mergedValue, setMergedValue] = useMergedState<ValueType | null>(
    defaultValue,
    {
      value: props.value,
      onChange,
    },
  )

  const [inputValue, setInputValue] = useState(() => formatValue(mergedValue))

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

  // >>>>> Input
  const handleInputChange = (v: string) => {
    setInputValue(v)
    const valueStr = parseValue(v)

    if (valueStr === null) {
      if (props.allowEmpty) {
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
      setInputValue(
        mergedValue !== null && mergedValue !== undefined
          ? String(mergedValue)
          : '',
      )
    }
  }

  // Focus change to format value
  useEffect(() => {
    if (!focused) {
      setInputValue(formatValue(mergedValue))
    }
  }, [focused, mergedValue, digits, formatValue])

  // ============================ Operations ============================
  const handleOffset = (positive: boolean) => {
    let stepValue = getMiniDecimal(step)
    if (!positive) {
      stepValue = stepValue.negate()
    }

    setValueWithCheck(
      getMiniDecimal(mergedValue ?? 0).add(stepValue.toString()),
    )
  }
  const handleMinus = () => {
    handleOffset(false)
  }

  const handlePlus = () => {
    handleOffset(true)
  }

  // >>>>> onLongPress reducer
  const reducer = (
    state: { count: number },
    action: { type: 'minus' | 'plus' },
  ) => {
    if (action.type === 'minus') {
      if (state.count > 1) {
        return { count: state.count - 1 }
      }
      return state
    } else if (action.type === 'plus') {
      if (state.count < 100) {
        return { count: state.count + 1 }
      }
      return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 50 })

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
  }, [disabled, mergedValue, min])

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
          {...restInputProps}
          selectTextOnFocus
          onFocus={(e) => {
            triggerFocus(true)
            props.onFocus?.(e)
          }}
          value={inputValue}
          onChangeText={(val) => {
            disabled || handleInputChange(val)
          }}
          disabled={disabled}
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

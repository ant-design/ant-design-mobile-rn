import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import {
  Keyboard,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import DisabledContext from '../config-provider/DisabledContext'
import { FormItemInputContext } from '../form/context'
import Icon from '../icon'
import { ThemeContext, useTheme } from '../style'
import AntmView from '../view'
import { ClearIconType, InputProps, InputStatus } from './PropsType'
import InputStyles from './style'

const InternalInput: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  props,
  ref,
) => {
  const contextDisabled = React.useContext(DisabledContext)

  const {
    allowClear,
    disabled = contextDisabled,
    readOnly,
    editable = !readOnly,
    maxLength,
    prefix,
    showCount,
    status: customStatus,
    style,
    inputStyle,
    suffix,
    themeStyles = InputStyles,
    type,
    ...rest
  } = props

  const theme = React.useContext(ThemeContext)
  const styles = useTheme({
    styles: props.styles,
    themeStyles,
  })

  const timer = React.useRef<any>()
  React.useEffect(() => {
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss()
    })
    return () => {
      keyboardHide.remove()
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const inputRef = React.useRef<TextInput>(null)
  React.useImperativeHandle(ref, () => inputRef.current as TextInput)

  const [focus, setFocus] = React.useState<boolean>()

  // ========================= value prop =========================
  const [innerValue, setInnerValue] = useMergedState<string>('', {
    value: props.value,
    defaultValue: props.defaultValue,
    postState: (value) => (props.value === undefined ? value : props.value),
  })

  // clone TextInput SyntheticEvent
  // TODO: web better refer to https://github.com/react-component/input/blob/master/src/utils/commonUtils.ts#L13
  const cloneEventRef = useRef<any>()
  const resolveOnChange = (
    text: string,
    e?: NativeSyntheticEvent<TextInputChangeEventData>,
    onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void,
  ) => {
    if (!e) {
      return
    }
    e.nativeEvent.text = text
    // @ts-ignore hack for web/Form
    e.target.value = text
    onChange?.(e)
  }

  // Push value to controlled
  const pushInputValue = useCallback(
    (value) => {
      resolveOnChange(value, cloneEventRef.current, props.onChange)
      props.onChangeText?.(value)
      setInnerValue(value)
    },
    [props, setInnerValue],
  )

  // maxLength config
  const maxLengthConfig = useMemo(() => {
    if (maxLength === undefined || isNaN(+maxLength) || +maxLength <= 0) {
      return {
        show: false,
        value: 0,
      }
    }
    return {
      show: true,
      value: maxLength,
    }
  }, [maxLength])

  // ========================= Status =========================
  const [innerStatus, setInnerStatus] = useMergedState<InputStatus | undefined>(
    undefined,
    {
      value: customStatus,
    },
  )
  useEffect(() => {
    const length = innerValue?.length || 0
    if (maxLengthConfig.show && length > maxLengthConfig.value) {
      setInnerStatus('error')
    } else {
      setInnerStatus(undefined)
    }
  }, [
    innerValue?.length,
    maxLengthConfig.show,
    maxLengthConfig.value,
    setInnerStatus,
  ])

  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon,
  } = useContext(FormItemInputContext)

  // getStatusClassNames
  const statusClassName = useMemo(() => {
    const mergedStatus = innerStatus || contextStatus
    if (mergedStatus === 'error') {
      return styles.error
    }
    if (mergedStatus === 'warning') {
      return styles.warning
    }
    return undefined
  }, [contextStatus, innerStatus, styles.error, styles.warning])

  // format text value
  const formatText = useCallback(
    (text: string) => {
      if (type === 'number') {
        text = text.replace(/[^0-9.]/g, '')
      }
      return text
    },
    [type],
  )

  // ========================= Override props =========================
  const restProps = React.useMemo(() => {
    const res = { ...rest } as TextInputProps

    // Override onChange support ({target:{value:string}})=>void
    if (typeof rest.onChange === 'function') {
      res.onChange = (e) => {
        const text = formatText(e.nativeEvent.text)
        cloneEventRef.current = e
        resolveOnChange(text, e, rest.onChange)
      }
    }
    if (typeof rest.onChangeText === 'function') {
      res.onChangeText = (text) => rest.onChangeText?.(formatText(text))
    }

    // Controlled when allowClear/maxLength/showCount/type is set
    if (
      rest.value === undefined &&
      (allowClear || maxLengthConfig.show || showCount || type === 'number')
    ) {
      res.value = innerValue
      res.onChangeText = (text) => {
        const value = formatText(text)
        rest.onChangeText?.(value)
        setInnerValue(value)
      }
    }

    // onFocus & onBlur
    if (allowClear || maxLengthConfig.show) {
      res.onFocus = (e: any) => {
        setFocus(true)
        props.onFocus?.(e)
      }
      res.onBlur = (e: any) => {
        // Cut to maxLength when onBlur
        if (
          maxLengthConfig.show &&
          maxLengthConfig.value < innerValue?.length
        ) {
          pushInputValue(innerValue.slice(0, maxLengthConfig.value))
        }
        timer.current = setTimeout(() => {
          setFocus(false)
        }, 61) // 60fps+
        props.onBlur?.(e)
      }
    }
    return res
  }, [
    allowClear,
    formatText,
    innerValue,
    maxLengthConfig.show,
    maxLengthConfig.value,
    props,
    pushInputValue,
    rest,
    setInnerValue,
    showCount,
    type,
  ])

  const keyboardType = useMemo(() => {
    // typo killer
    if (type === 'number') {
      return 'numeric'
    }
    return props.keyboardType
  }, [props.keyboardType, type])

  // ========================= UI =========================
  const prefixDom = useMemo(() => {
    if (prefix) {
      return (
        <AntmView style={[styles.prefix, statusClassName]}>{prefix}</AntmView>
      )
    }
  }, [prefix, statusClassName, styles.prefix])

  const clearIconDom = useMemo(() => {
    if (!disabled && editable && allowClear && innerValue && focus) {
      return (
        <TouchableOpacity
          style={styles.clearIcon}
          onPressIn={() => setFocus(true)}
          onPressOut={() => pushInputValue('')}
          hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}>
          {(allowClear as ClearIconType).clearIcon || (
            <Icon name="close" color={'white'} size={13} />
          )}
        </TouchableOpacity>
      )
    }
  }, [
    allowClear,
    disabled,
    editable,
    focus,
    innerValue,
    pushInputValue,
    styles.clearIcon,
  ])

  const showCountDom = useMemo(() => {
    const length = innerValue?.length || 0
    let node
    if (
      typeof showCount === 'object' &&
      typeof showCount.formatter === 'function'
    ) {
      node = showCount.formatter({
        value: innerValue,
        count: length,
        maxLength: maxLengthConfig.value,
      })
    } else if (showCount) {
      if (maxLengthConfig.show) {
        node = `${length} / ${maxLengthConfig.value}`
      } else {
        node = length
      }
    }

    if (React.isValidElement(node)) {
      return node
    }
    if (node !== undefined) {
      return <Text style={[styles.showCount, statusClassName]}>{node}</Text>
    }
  }, [
    innerValue,
    maxLengthConfig.show,
    maxLengthConfig.value,
    showCount,
    statusClassName,
    styles.showCount,
  ])

  const suffixDom = useMemo(() => {
    if (hasFeedback || suffix) {
      return (
        <>
          {Boolean(suffix) && (
            <AntmView style={[styles.suffix, statusClassName]}>
              {suffix}
            </AntmView>
          )}
          {hasFeedback && feedbackIcon}
        </>
      )
    }
  }, [feedbackIcon, hasFeedback, statusClassName, styles.suffix, suffix])
  return (
    <View style={[styles.container, style]}>
      {prefixDom}
      <TextInput
        editable={!disabled && editable}
        placeholderTextColor={theme.color_text_placeholder}
        underlineColorAndroid="transparent"
        secureTextEntry={type === 'password'}
        onSubmitEditing={Keyboard.dismiss}
        {...restProps}
        keyboardType={keyboardType}
        style={[styles.input, statusClassName, inputStyle]}
        ref={inputRef}
      />
      {clearIconDom}
      {showCountDom}
      {suffixDom}
    </View>
  )
}

const Input = React.forwardRef<TextInput, InputProps>(InternalInput) as ((
  props: React.PropsWithChildren<InputProps> & React.RefAttributes<TextInput>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Input.displayName = 'Input'

export default React.memo(Input)

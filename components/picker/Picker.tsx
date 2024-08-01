import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { Omit } from 'utility-types'

import { Keyboard } from 'react-native'
import { getComponentLocale } from '../_util/getLocale'
import { LocaleContext } from '../locale-provider'
import { PickerColumn, PickerValue } from '../picker-view/PropsType'
import RMCPickerView from '../picker-view/picker-view'
import DisabledContext from '../provider/DisabledContext'
import { useTheme } from '../style'
import PopupPicker from './Popup'
import { PickerPropsType } from './PropsType'
import PickerStyles from './style'

export type PickerActions = {
  open: () => void
  close: () => void
  toggle: () => void
  value?: PickerValue[]
}
export type PickerRef = PickerActions

export interface RMCPickerProps
  extends Omit<PickerPropsType, 'value' | 'data' | 'cols' | 'cascade'> {
  value?: PickerValue[]
  innerValue: PickerValue[]
  columns: PickerColumn[]
  handleSelect: (value: PickerValue, index: number) => void
}

const RMCPicker = forwardRef<PickerRef, RMCPickerProps>((props, ref) => {
  const contextDisabled = useContext(DisabledContext)
  const {
    onVisibleChange,
    visible,
    children,
    okText,
    dismissText,
    okButtonProps,
    dismissButtonProps,
    onChange,
    onOk,
    onDismiss,
    onClose,
    title,
    extra,
    disabled = contextDisabled,
    format,
    value,
    innerValue,
    columns,
    handleSelect,
    ...restProps
  } = props

  const [innerVisible, setInnerVisible2] = useMergedState<boolean>(false, {
    value: visible,
    onChange: (v) => onVisibleChange?.(v),
  })

  const setInnerVisible = useCallback(
    (bool) => {
      !disabled && setInnerVisible2(bool)
    },
    [disabled, setInnerVisible2],
  )

  useEffect(() => {
    Keyboard.dismiss()
  }, [innerVisible])

  // ================== Actions Ref ==================
  const actions = useMemo(
    () => ({
      toggle: () => {
        setInnerVisible(!innerVisible)
      },
      open: () => {
        setInnerVisible(true)
      },
      close: () => {
        setInnerVisible(false)
        onClose?.()
      },
      value: innerValue,
    }),
    [innerValue, innerVisible, onClose, setInnerVisible],
  )
  useImperativeHandle(ref, () => actions)

  const handleOk = useCallback(() => {
    const extend = columns.map(
      (column, index) =>
        column.find((item) => item.value === innerValue?.[index]) ?? column[0],
    )
    const nextValue = extend.map((item) => item.value)
    onOk?.(nextValue, { items: extend, columns })
    onChange?.(nextValue, { items: extend, columns })
    actions.close()
  }, [actions, columns, onChange, onOk, innerValue])

  const handleDismiss = useCallback(() => {
    onDismiss?.()
    actions.close()
  }, [actions, onDismiss])

  const _locale = getComponentLocale(
    props,
    useContext(LocaleContext),
    'Picker',
    () => require('./locale/zh_CN'),
  )

  // ================== Extra Render ==================
  const [innerExtra, setInnerExtra] = useState(extra || _locale.extra)
  useEffect(() => {
    if (!children || innerVisible) {
      return
    }
    if (!value?.length) {
      return setInnerExtra(extra || _locale.extra)
    }

    setInnerExtra(
      format?.(
        columns.reduce((cur: any[], next, index) => {
          const labelValue = next.find((item) => item.value === value[index])
          if (labelValue?.label) {
            cur.push(labelValue.label)
          }
          return cur
        }, []),
      ),
    )
  }, [value, columns, innerVisible, format, children, extra, _locale.extra])

  const renderChildren = () => {
    if (!children) {
      return null
    }
    // children as function
    if (typeof children === 'function') {
      return children({
        value,
        extra: innerExtra || extra || _locale.extra,
        disabled,
        toggle: actions.toggle,
      })
    }
    const child = children as React.ReactElement
    const newChildProps = {
      value,
      extra: innerExtra || extra || _locale.extra,
      disabled,
    } as any
    if (!disabled) {
      newChildProps[props.triggerType!] = (e: any) => {
        if (child.props[props.triggerType!]) {
          child.props[props.triggerType!](e)
        }
        actions.toggle()
      }
    }
    return React.cloneElement(child as any, newChildProps)
  }

  const styles = useTheme({
    styles: props.styles,
    themeStyles: PickerStyles,
  })

  return (
    <>
      <PopupPicker
        styles={styles}
        visible={innerVisible}
        title={title}
        okText={okText || _locale.okText}
        onOk={handleOk}
        dismissText={dismissText || _locale.dismissText}
        onDismiss={handleDismiss}
        onClose={actions.close}
        okButtonProps={okButtonProps}
        dismissButtonProps={dismissButtonProps}>
        {/* TODO: 组件卸载是在visible更新fasle之后,需要前置 */}
        {/* 否则会无效执行onPickerChange */}
        {innerVisible && (
          <RMCPickerView
            {...restProps}
            value={innerValue}
            columns={columns}
            handleSelect={handleSelect}
          />
        )}
      </PopupPicker>
      {renderChildren()}
    </>
  )
})

RMCPicker.displayName = 'Picker'
RMCPicker.defaultProps = {
  triggerType: 'onPress',
  format: (labels: string[]) => labels.join(','),
}

export default RMCPicker

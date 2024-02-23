import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Omit } from 'utility-types'

import { getComponentLocale } from '../_util/getLocale'
import { LocaleContext } from '../locale-provider'
import { PickerColumn, PickerValue } from '../picker-view/PropsType'
import RMCPickerView from '../picker-view/picker-view'
import { useTheme } from '../style'
import PopupPicker from './Popup'
import { PickerPropsType } from './PropsType'
import PickerStyles from './style'

export type PickerActions = {
  open: () => void
  close: () => void
  toggle: () => void
  _updateExtra: () => void
}
export type PickerRef = PickerActions

export interface RMCPickerProps
  extends Omit<PickerPropsType, 'value' | 'data' | 'cols' | 'cascade'> {
  value: PickerValue[]
  columns: PickerColumn[]
  handleSelect: (value: PickerValue, index: number) => void
}

const RMCPicker = forwardRef<PickerRef, RMCPickerProps>((props, ref) => {
  const {
    onVisibleChange,
    visible,
    children,
    okText,
    dismissText,
    onChange,
    onOk,
    onDismiss,
    onClose,
    title,
    extra,
    disabled,
    format,
    value,
    columns,
    handleSelect,
    ...restProps
  } = props

  const [innerVisible, setInnerVisible] = useMergedState<boolean>(false, {
    value: visible,
    onChange: (v) => onVisibleChange?.(v),
  })
  const [innerExtra, setInnerExtra] = useState(extra)

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
      // TODO: remove hack
      _updateExtra: () => {
        setInnerExtra(
          format?.(
            columns.reduce((cur: any[], next, index) => {
              const labelValue = next.find(
                (item) => item.value === value?.[index],
              )
              if (labelValue?.label) {
                cur.push(labelValue.label)
              }
              return cur
            }, []),
          ),
        )
      },
    }),
    [columns, format, innerVisible, onClose, setInnerVisible, value],
  )
  useImperativeHandle(ref, () => actions)

  const handleOk = useCallback(() => {
    const extend = columns.map(
      (column, index) =>
        column.find((item) => item.value === value?.[index]) ?? column[0],
    )
    const nextValue = extend.map((item) => item.value)
    onOk?.(nextValue, { items: extend, columns })
    onChange?.(nextValue, { items: extend, columns })
    actions.close()
  }, [actions, columns, onChange, onOk, value])

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

  const renderChildren = () => {
    if (!children) {
      return null
    }
    const child = children as any
    const newChildProps = {
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
        onClose={actions.close}>
        {/* TODO: 组件卸载是在visible更新fasle之后,需要前置 */}
        {/* 否则会无效执行onPickerChange */}
        {innerVisible && (
          <GestureHandlerRootView>
            <RMCPickerView
              {...restProps}
              value={value}
              columns={columns}
              handleSelect={handleSelect}
            />
          </GestureHandlerRootView>
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

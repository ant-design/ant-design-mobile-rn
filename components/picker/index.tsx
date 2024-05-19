import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { mergeProps } from '../_util/with-default-props'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerValueExtend,
} from '../picker-view/PropsType'
import { getColumns, getValueExtend } from '../picker-view/columns-extend'
import RMCPicker, { PickerRef } from './Picker'
import { PickerPropsType } from './PropsType'

export interface PickerProps extends PickerPropsType {}
export { PickerColumn, PickerColumnItem, PickerValue, PickerValueExtend }

const defaultProps = {
  defaultValue: [],
  cols: 3,
  cascade: true,
}

const Picker = forwardRef<PickerRef, PickerProps>((props, ref) => {
  const p = mergeProps(defaultProps, props)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(
    p.value === undefined ? p.defaultValue : p.value,
  )

  const pickerRef = React.useRef<PickerRef>(null)

  useImperativeHandle(ref, () => pickerRef.current as PickerRef)

  const columns = useMemo(
    () => getColumns(p.data, innerValue, p.cols, p.cascade),
    [p.data, innerValue, p.cols, p.cascade],
  )

  const handleSelect = useCallback(
    (val: PickerValue, index: number) => {
      const value = innerValue?.slice?.(0) || []
      value[index] = val
      const { nextValue } = getValueExtend(p.data, value, p.cols, p.cascade)
      setInnerValue(nextValue)
      p.onPickerChange?.(nextValue, index)
    },
    [p, innerValue, setInnerValue],
  )

  const onVisibleChange = useCallback(
    (visible) => {
      p.onVisibleChange?.(visible)
      if (!visible && p.value !== innerValue) {
        // 关闭时，如果选中值不同步，恢复为原选中值
        setInnerValue(p.value || [])
      }
    },
    [innerValue, p],
  )

  useEffect(() => {
    setInnerValue(p.value || [])
  }, [p.value])

  return (
    <RMCPicker
      {...p}
      innerValue={innerValue}
      columns={columns}
      handleSelect={handleSelect}
      onVisibleChange={onVisibleChange}
      ref={pickerRef}
    />
  )
})

Picker.displayName = 'AntmPicker'

export default Picker

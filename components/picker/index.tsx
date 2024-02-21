import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { mergeProps } from '../_util/with-default-props'
import { PickerValue } from '../picker-view/PropsType'
import { getColumns, getValueExtend } from '../picker-view/columns-extend'
import RMCPicker, { PickerRef } from './Picker'
import { PickerPropsType } from './PropsType'

export interface PickerProps extends PickerPropsType {}

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

  // 记录value是否变化过
  const isValueChanged = useRef(false)

  const onVisibleChange = useCallback(
    (visible) => {
      p.onVisibleChange?.(visible)
      if (!visible && p.value !== innerValue && isValueChanged.current) {
        // 关闭时，如果选中值不同步，恢复为原选中值
        setInnerValue(p.value || [])
      }
    },
    [innerValue, p, setInnerValue],
  )

  // for useEffect only on update
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      // extra update initial
      pickerRef.current?._updateExtra()
    } else {
      isValueChanged.current = true
      setInnerValue(p.value || [])
      // extra update after value update
      setTimeout(() => {
        pickerRef.current?._updateExtra()
      })
    }
  }, [p.value])

  return (
    <RMCPicker
      {...p}
      value={innerValue}
      columns={columns}
      handleSelect={handleSelect}
      onVisibleChange={onVisibleChange}
      ref={pickerRef}
    />
  )
})

Picker.displayName = 'AntmPicker'

export default Picker

import useMergedState from 'rc-util/lib/hooks/useMergedState'
import useState from 'rc-util/lib/hooks/useState'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
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

  // ============ Effect ===========
  const [valueProp, setValueProp] = useMergedState<PickerValue[]>([], {
    value: p.value,
    defaultValue: p.defaultValue,
  })
  const [innerValue, setInnerValue] = useState<PickerValue[]>(valueProp)
  useEffect(() => {
    setInnerValue(valueProp)
  }, [valueProp])

  // ============ Ref ===========
  const pickerRef = React.useRef<PickerRef>(null)
  useImperativeHandle(ref, () => pickerRef.current as PickerRef)

  // ============ Columns ===========
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
      valueProp && setInnerValue(valueProp)
    },
    [p, valueProp],
  )

  const onOk = useCallback(
    (value: PickerValue[], extend: PickerValueExtend) => {
      p.onOk?.(value, extend)
      setValueProp(value)
    },
    [p, setValueProp],
  )

  return (
    <RMCPicker
      {...p}
      value={innerValue}
      columns={columns}
      handleSelect={handleSelect}
      onVisibleChange={onVisibleChange}
      onOk={onOk}
      ref={pickerRef}
    />
  )
})

Picker.displayName = 'AntmPicker'

export default Picker

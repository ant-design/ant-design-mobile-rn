import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react'
import { mergeProps } from '../_util/with-default-props'
import { WithThemeStyles } from '../style'
import { PickerValue, PickerViewPropsType } from './PropsType'
import { getColumns, getValueExtend } from './columns-extend'
import RMCPickerView from './picker-view'
import { PickerViewStyle } from './style'

export interface PickerViewProps
  extends PickerViewPropsType,
    WithThemeStyles<PickerViewStyle> {}

const defaultProps = {
  cols: 3,
  cascade: true,
}

const PickerView = forwardRef<any, PickerViewProps>((props, ref) => {
  const p = mergeProps(defaultProps, props)

  const [innerValue, setInnerValue] = useMergedState<PickerValue[]>([], {
    value: p.value,
    defaultValue: p.defaultValue,
  })

  useImperativeHandle(ref, () => ({
    value: innerValue,
  }))

  const columns = useMemo(
    () => getColumns(p.data, innerValue, p.cols, p.cascade),
    [p.data, innerValue, p.cols, p.cascade],
  )

  const handleSelect = useCallback(
    (val: PickerValue, index: number) => {
      const value = innerValue?.slice?.(0) || []
      value[index] = val
      const { nextValue, extend } = getValueExtend(
        p.data,
        value,
        p.cols,
        p.cascade,
      )
      setInnerValue(nextValue)
      p.onChange?.(nextValue, { items: extend, columns })
    },
    [p, columns, innerValue, setInnerValue],
  )

  return (
    <RMCPickerView
      {...p}
      value={innerValue}
      columns={columns}
      handleSelect={handleSelect}
    />
  )
})

PickerView.displayName = 'AntmPickerView'

export default PickerView

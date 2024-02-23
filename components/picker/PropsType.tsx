import type { ReactNode } from 'react'
import { Omit } from 'utility-types'
import {
  PickerValue,
  PickerValueExtend,
  PickerViewPropsType,
} from '../picker-view/PropsType'
import { PickerViewStyle } from '../picker-view/style'
import { WithThemeStyles } from '../style'
import { PopupPickerProps } from './PopupPickerTypes'
import { PickerStyle } from './style'

export interface PickerPropsType
  extends PickerViewPropsType,
    WithThemeStyles<PickerViewStyle & PickerStyle>,
    Omit<PopupPickerProps, 'onOk' | 'styles'> {
  onOk?: (value: PickerValue[], extend: PickerValueExtend) => void
  onPickerChange?: (value: PickerValue[], index: number) => void
  onVisibleChange?: (visible: boolean) => void
  format?: (labels: string[]) => string
  extra?: string
  triggerType?: string
  disabled?: boolean
  children?: ReactNode
  locale?: { okText?: string; dismissText?: string; extra?: string }
}

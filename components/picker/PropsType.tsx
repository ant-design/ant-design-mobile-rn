import type { ReactNode } from 'react'
import { Omit } from 'utility-types'
import {
  PickerValue,
  PickerValueExtend,
  PickerViewPropsType,
} from '../picker-view/PropsType'
import { PopupPickerProps } from './PopupPickerTypes'
import { PickerStyle } from './style'

export interface PickerPropsType
  extends PickerViewPropsType,
    Omit<PopupPickerProps, 'onOk' | 'styles'> {
  onOk?: (value: PickerValue[], extend: PickerValueExtend) => void
  onPickerChange?: (value: PickerValue[], index: number) => void
  onVisibleChange?: (visible: boolean) => void
  format?: (labels: string[]) => string
  extra?: string
  triggerType?: string
  disabled?: boolean
  children?:
    | ReactNode
    | ((props: {
        disabled?: boolean
        extra: string
        value?: PickerValue[]
        toggle: () => void
      }) => ReactNode)
  locale?: { okText?: string; dismissText?: string; extra?: string }
  styles?: Partial<PickerStyle>
}

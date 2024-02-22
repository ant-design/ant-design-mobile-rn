import type { ReactNode } from 'react'

export type PopupPickerProps = {
  onOk?: () => void
  onDismiss?: () => void
  onClose?: () => void
  title?: ReactNode
  visible?: boolean
  okText?: ReactNode
  dismissText?: ReactNode
  children?: ReactNode
  styles: any
  actionTextUnderlayColor?: string
  actionTextActiveOpacity?: number
}

import type { ReactNode } from 'react'
import { TouchableHighlightProps } from 'react-native'
import { ModalPropsType } from '../modal/PropsType'
import { PickerStyle } from './style'

export type PopupPickerProps = {
  onOk?: () => void
  onDismiss?: () => void
  onClose?: () => void
  title?: ReactNode
  visible?: boolean
  okText?: ReactNode
  dismissText?: ReactNode
  okButtonProps?: TouchableHighlightProps
  dismissButtonProps?: TouchableHighlightProps
  children?: ReactNode
  styles: Partial<PickerStyle>
} & Pick<ModalPropsType, 'modalType'>

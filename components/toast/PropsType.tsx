import React from 'react'
import { ToastStyle } from './style'

export interface ToastProps {
  content: string | React.ReactNode
  icon?: 'success' | 'fail' | 'offline' | 'loading' | React.ReactNode
  duration?: number
  mask?: boolean
  onAnimationEnd?: () => void
  onClose?: () => void
  position?: 'top' | 'bottom' | 'center'
  styles?: Partial<ToastStyle>
  type?: string
}

export interface ToastShowProps extends ToastProps {
  stackable?: boolean
}

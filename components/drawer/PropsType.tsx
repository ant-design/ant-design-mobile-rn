import React from 'react'

export interface DrawerProps {
  onOpenChange?: (isOpen: boolean) => void
  sidebar?: React.ReactNode
  open?: boolean
  position?: 'left' | 'right'
}

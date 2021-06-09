import React from 'react'
import { ImagePropertiesSourceOptions } from 'react-native'

export interface ResultPropsType {
  imgUrl?: ImagePropertiesSourceOptions
  img?: React.ReactNode
  title?: React.ReactNode
  message?: React.ReactNode
  buttonText?: string
  buttonType?: 'primary' | 'ghost'
  onButtonClick?: (e: any) => void
}
